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

import { AppInstance } from "~/src/app-instance.ts"
import { createLogger } from "~/src/utils/simple-logger.ts"

/**
 * 通用工具类
 *
 * @author terwer
 * @version 0.9.0
 * @since 0.9.0
 */
export class Utils {
  private static logger = createLogger("publisher-widget-utils")
  private static kApi

  /**
   * 通用工具入口
   *
   * @param appInstance - 插件实例
   */
  public static zhiCommon(appInstance: AppInstance) {
    return appInstance.zhiCommon.ZhiUtil.zhiCommon()
  }

  public static kernelApi(appInstance: AppInstance) {
    if (!this.kApi) {
      const cfg = new appInstance.zhiSiyuanApi.SiyuanConfig("", "")
      this.kApi = new appInstance.zhiSiyuanApi.SiyuanKernelApi(cfg)
      this.kApi.init(appInstance)
    }
    return this.kApi
  }

  public static blogApi(appInstance: AppInstance, apiAdaptor: any) {
    if (!apiAdaptor) {
      throw new Error("ApiAdaptor cannot be null")
    }

    if (!apiAdaptor.getUsersBlogs) {
      this.logger.error("ApiAdaptor must implements BlogApi", apiAdaptor)
      throw new Error(`ApiAdaptor must implements BlogApi`)
    }

    if (apiAdaptor.init) {
      apiAdaptor.init(appInstance)
    }

    return new appInstance.zhiBlogApi.BlogAdaptor(apiAdaptor)
  }
}
