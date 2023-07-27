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

import { BlogConfig } from "zhi-blog-api"

/**
 * Yuque 配置
 */
class YuqueConfig extends BlogConfig {
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
   * 标识
   */
  public override blogid = ""

  /**
   * 代理地址
   */
  public override middlewareUrl = ""

  constructor(apiUrl: string, username: string, password: string, middlewareUrl?: string) {
    super()
    this.apiUrl = apiUrl
    this.username = username
    this.password = password
    this.middlewareUrl = middlewareUrl
  }
}

export { YuqueConfig }
