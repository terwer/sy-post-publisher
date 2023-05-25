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

import { AppInstance } from "~/src/appInstance.ts"
import { createLogger } from "~/src/utils/simpleLogger.ts"
import { ZhiUtil } from "zhi-common"
import { BlogAdaptor } from "zhi-blog-api"
import { SiyuanConfig, SiyuanKernelApi } from "zhi-siyuan-api"

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
   */
  public static zhiCommon() {
    return ZhiUtil.zhiCommon()
  }

  public static kernelApi(appInstance: AppInstance) {
    if (!this.kApi) {
      const cfg = new SiyuanConfig("", "")
      this.kApi = new SiyuanKernelApi(cfg)
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
      throw new Error(`ApiAdaptor must implements BlogApi => ${this.getObjectName(apiAdaptor)}`)
    }

    if (apiAdaptor.init) {
      apiAdaptor.init(appInstance)
    }

    return new BlogAdaptor(apiAdaptor)
  }

  private static getObjectName(obj) {
    try {
      // 判断是否为类
      if (typeof obj === "function" && /^class\s/.test(obj.toString())) {
        return obj.name
      }
      // 判断是否为函数
      else if (typeof obj === "function") {
        return obj.name || "anonymous function"
      }
      // 判断是否为枚举
      else if (typeof obj === "object" && Object.values(obj.constructor).includes(obj)) {
        return Object.keys(obj.constructor)[Object.values(obj.constructor).indexOf(obj)]
      }
      // 判断是否为属性
      else if (typeof obj !== "object") {
        return obj
      }
      // 默认返回空字符串
      else {
        return "{}"
      }
    } catch (e) {
      console.error(e)
      return "{}"
    }
  }
}
