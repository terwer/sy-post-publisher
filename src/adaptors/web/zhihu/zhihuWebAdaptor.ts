/*
 * Copyright (c) 2023, Terwer . All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Terwer designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Terwer in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Terwer, Shenzhen, Guangdong, China, youweics@163.com
 * or visit www.terwer.space if you need additional information or have any
 * questions.
 */

import { BaseWebApi } from "~/src/adaptors/web/base/baseWebApi.ts"
import { Post, UserBlog } from "zhi-blog-api"
import * as cheerio from "cheerio"
import { JsonUtil, StrUtil } from "zhi-common"

/**
 * 知乎网页授权适配器
 *
 * @see [wechatsync zhihu adaptor](https://github.com/wechatsync/Wechatsync/blob/master/packages/%40wechatsync/drivers/src/zhihu.js)
 * @author terwer
 * @version 0.9.0
 * @since 0.9.0
 */
class ZhihuWebAdaptor extends BaseWebApi {
  // /**
  //  * 初始化知乎 API 适配器
  //  *
  //  * @param appInstance 应用实例
  //  * @param cfg 配置项
  //  */
  // constructor(appInstance: AppInstance, cfg: ZhihuConfig) {
  //   super(appInstance, cfg)
  //
  //   this.cfg = cfg
  //   this.logger = createAppLogger("zhihu-web-adaptor")
  // }

  public async getMetaData(): Promise<any> {
    const res = await this.proxyFetch(
      "https://www.zhihu.com/api/v4/me?include=account_status%2Cis_bind_phone%2Cis_force_renamed%2Cemail%2Crenamed_fullname"
    )
    const flag = !!res.uid
    this.logger.info(`get zhihu metadata finished, flag => ${flag}`)
    return {
      flag: flag,
      uid: res.uid,
      title: res.name,
      avatar: res.avatar_url,
      supportTypes: ["html"],
      type: "zhihu",
      displayName: "知乎",
      home: "https://www.zhihu.com/settings/account",
      icon: "https://static.zhihu.com/static/favicon.ico",
    }
  }

  public async getUsersBlogs(): Promise<Array<UserBlog>> {
    let result: UserBlog[] = []

    const url = `https://www.zhihu.com/people/${this.cfg.username}/columns`
    const res = await this.proxyFetch(url, [], {}, "GET", "text/html")
    this.logger.debug("get zhihu columns dom =>", { res })
    const $ = cheerio.load(res)
    const scriptContent = $("#js-initialData").html()
    const initJson = JsonUtil.safeParse<any>(scriptContent, {})
    this.logger.debug("get column initJson=>", initJson)
    const columns = initJson?.initialState?.entities?.columns ?? {}
    this.logger.debug("get columns=>", columns)

    Object.keys(columns).map((key) => {
      const useBlog = new UserBlog()
      const item = columns[key]
      useBlog.blogid = item.id
      useBlog.blogName = item.title
      useBlog.url = item.url
      result.push(useBlog)
    })

    this.logger.debug("getUsersBlogs=>", result)
    return result
  }

  public async addPost(post: Post) {
    const params = JSON.stringify({
      title: post.title,
      content: post.description,
    })
    const res = await this.proxyFetch("https://zhuanlan.zhihu.com/api/articles/drafts", [], params, "POST")
    this.logger.debug("save zhihu draft res=>", res)

    if (!res.id) {
      throw new Error("知乎文章发布失败")
    }
    const postid = res.id.toString()

    // 目前是存草稿，现在需要把它设置为发布
    const pubParams = JSON.stringify({
      column: null,
      commentPermission: "anyone",
      disclaimer_type: "none",
      disclaimer_status: "close",
      table_of_contents_enabled: false,
      commercial_report_info: { commercial_types: [] },
      commercial_zhitask_bind_info: null,
    })
    const pubRes = await this.proxyFetch(
      `https://zhuanlan.zhihu.com/api/articles/${res.id}/publish`,
      [],
      pubParams,
      "PUT"
    )
    this.logger.debug("publish zhihu article pubRes=>", pubRes)

    // 收录文章到专栏
    const column = post.cate_slugs?.[0] ?? this.cfg.blogid
    await this.addPostToColumn(column, postid)

    return {
      status: "success",
      post_id: postid,
    }
  }

  public async editPost(postid: string, post: Post, publish?: boolean): Promise<boolean> {
    // 先更新草稿
    const params = JSON.stringify({
      title: post.title,
      content: post.description,
      table_of_contents: false,
      delta_time: 10,
    })

    try {
      await this.proxyFetch(`https://zhuanlan.zhihu.com/api/articles/${postid}/draft`, [], params, "PATCH")
      this.logger.debug("updated zhihu draft")
    } catch (e) {
      throw new Error("知乎文章更新失败")
    }

    // 目前是存草稿，现在需要把它设置为发布
    const pubParams = JSON.stringify({
      disclaimer_type: "none",
      disclaimer_status: "close",
      table_of_contents_enabled: false,
      commercial_report_info: { commercial_types: [] },
      commercial_zhitask_bind_info: null,
    })
    const pubRes = await this.proxyFetch(
      `https://zhuanlan.zhihu.com/api/articles/${postid}/publish`,
      [],
      pubParams,
      "PUT"
    )

    // 收录文章到专栏
    const column = post.cate_slugs?.[0] ?? this.cfg.blogid
    await this.addPostToColumn(column, postid)

    this.logger.debug("edit zhihu pubRes=>", pubRes)
    return true
  }

  /**
   * 收录文章到专栏
   *
   * @param columnId - 专栏ID
   * @param articleId - 文章ID
   * @private
   */
  private async addPostToColumn(columnId: string, articleId: string) {
    if (StrUtil.isEmptyString(columnId) || StrUtil.isEmptyString(articleId)) {
      this.logger.info("文章或者专栏为空，不收录")
      return
    }

    try {
      const params = { type: "article", id: articleId }
      await this.proxyFetch(`https://www.zhihu.com/api/v4/columns/${columnId}/items`, [], params, "POST")
    } catch (e) {
      this.logger.error("文章收录到专栏失败", e)
    }
    this.logger.info("文章收录到专栏成功")
  }

  public async getPreviewUrl(postid: string): Promise<string> {
    return `https://zhuanlan.zhihu.com/p/${postid}`
  }

  public async deletePost(postid: string): Promise<boolean> {
    let flag = false
    try {
      const res = await this.proxyFetch(`https://www.zhihu.com/api/v4/articles/${postid}`, [], {}, "DELETE")
      this.logger.debug("delete zhihu article res=>", res)
      if (res.success) {
        flag = true
      } else {
        throw new Error(res.error.message)
      }
    } catch (e) {
      this.logger.error("知乎文章删除失败", e)
      throw e
    }

    return flag
  }
}

export { ZhihuWebAdaptor }
