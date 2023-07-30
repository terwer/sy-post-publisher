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

import { ElectronCookie, WebApi } from "zhi-blog-api"
import { JsonUtil } from "zhi-common"
import { AppInstance } from "~/src/appInstance.ts"
import { createAppLogger } from "~/src/utils/appLogger.ts"
import { ZhihuConfig } from "~/src/adaptors/web/zhihu/config/zhihuConfig.ts"
import { useSiyuanApi } from "~/src/composables/useSiyuanApi.ts"
import { SiyuanKernelApi } from "zhi-siyuan-api"

/**
 * 知乎网页授权适配器
 *
 * @author terwer
 * @version 0.9.0
 * @since 0.9.0
 */
class ZhihuWebAdaptor extends WebApi {
  private readonly logger
  private cfg: ZhihuConfig
  private readonly kernelApi: SiyuanKernelApi

  /**
   * 初始化博客园 API 适配器
   *
   * @param appInstance 应用实例
   * @param cfg 配置项
   */
  constructor(appInstance: AppInstance, cfg: ZhihuConfig) {
    super()

    this.cfg = cfg
    this.logger = createAppLogger("cnblogs-api-adaptor")
    const { kernelApi } = useSiyuanApi()
    this.kernelApi = kernelApi
  }

  public updateCfg(cfg: ZhihuConfig) {
    this.cfg = cfg
  }

  public async buildCookie(cookies: ElectronCookie[]): Promise<string> {
    return cookies.map((cookie) => `${cookie.name}=${cookie.value}`).join(";")
  }

  public async getMetaData(): Promise<object> {
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

  public async getPreviewUrl(postid: string): Promise<string> {
    return Promise.resolve(`https://zhuanlan.zhihu.com/p/${postid}`)
  }

  // ================
  // private methods
  // ================
  private async proxyFetch(url: string, params: any = {}): Promise<any> {
    const fetchResult = await this.kernelApi.forwardProxy(
      url,
      [
        {
          Cookie: this.cfg.password,
        },
      ],
      params,
      "GET",
      "application/json",
      7000
    )
    this.logger.debug("proxyFetch result=>", fetchResult)
    const resText = fetchResult?.body
    const res = JsonUtil.safeParse<any>(resText, {} as any)
    return res
  }
}

export { ZhihuWebAdaptor }
