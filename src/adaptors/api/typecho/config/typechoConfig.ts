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

import { MetaweblogConfig } from "~/src/adaptors/api/base/metaweblog/config/MetaweblogConfig.ts"
import { PageTypeEnum } from "zhi-blog-api"
import TypechoUtils from "~/src/adaptors/api/Typecho/TypechoUtils.ts"

/**
 * Typecho 配置
 *
 * @author terwer
 * @since 1.0.0
 */
class TypechoConfig extends MetaweblogConfig {
  /**
   * API 地址
   */
  public override apiUrl = ""

  /**
   * 用户名
   */
  public override username = ""

  /**
   * 密码
   */
  public override password = ""

  /**
   * 代理地址
   */
  public override middlewareUrl = ""

  /**
   * Typecho 配置项
   *
   * @param homeAddr Typecho 主页
   * @param username 用户名
   * @param password 密码
   * @param middlewareUrl 代理地址
   */
  constructor(homeAddr: string, username: string, password: string, middlewareUrl?: string) {
    super(homeAddr, "", username, password, middlewareUrl)

    const { home, apiUrl } = TypechoUtils.parseHomeAndUrl(homeAddr)
    this.home = home
    this.apiUrl = apiUrl
    this.previewUrl = "/?p=[postid]"
    this.pageType = PageTypeEnum.Markdown
  }
}

export { TypechoConfig }
