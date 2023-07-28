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

import { BlogAdaptor } from "zhi-blog-api"
import { useSiyuanApi } from "~/src/composables/api/useSiyuanApi.ts"
import { getSubPlatformTypeByKey, SubPlatformType } from "~/src/components/set/publish/platform/dynamicConfig.ts"
import { useCnblogsApi } from "~/src/composables/api/useCnblogsApi.ts"
import { createAppLogger } from "~/src/utils/appLogger.ts"
import {useWordpressApi} from "~/src/composables/api/useWordpressApi.ts";

/**
 * 适配器统一入口
 *
 * @author terwer
 * @since 0.9.0
 */
class Adaptors {
  private static logger = createAppLogger("adaptors")

  /**
   * 根据平台key查找适配器
   *
   * @param key
   */
  public static async getAdaptor(key: string): Promise<BlogAdaptor> {
    let blogAdaptor = null
    const type: SubPlatformType = getSubPlatformTypeByKey(key)

    switch (type) {
      case SubPlatformType.Metaweblog_Cnblogs: {
        const { blogApi } = await useCnblogsApi(key)
        blogAdaptor = blogApi
        break
      }
      case SubPlatformType.Wordpress_Wordpress:{
        const { blogApi } = await useWordpressApi(key)
        blogAdaptor = blogApi
        break
      }
      default: {
        break
      }
    }
    this.logger.debug(`get blogAdaptor from key ${key}=>`, blogAdaptor)
    return blogAdaptor
  }
}

export default Adaptors
