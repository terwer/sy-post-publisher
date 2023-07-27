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

import { createAppLogger } from "~/src/utils/appLogger.ts"
import { Utils } from "~/src/utils/utils.ts"
import { CnblogsConfig } from "~/src/adaptors/api/cnblogs/config/cnblogsConfig.ts"
import { CnblogsApiAdaptor } from "~/src/adaptors/api/cnblogs/adaptor/cnblogsApiAdaptor.ts"
import { AppInstance } from "~/src/appInstance.ts"

export const useCnblogsApi = async (key?: string) => {
  const logger = createAppLogger("use-cnblogs-api")
  const appInstance = new AppInstance()

  const cnblogsApiUrl = Utils.emptyOrDefault(process.env.VITE_CNBLOGS_API_URL, "")
  const cnblogsUsername = Utils.emptyOrDefault(process.env.VITE_CNBLOGS_USERNAME, "")
  const cnblogsAuthToken = Utils.emptyOrDefault(process.env.VITE_CNBLOGS_AUTH_TOKEN, "")
  const middlewareUrl = Utils.emptyOrDefault(process.env.VITE_MIDDLEWARE_URL, "")

  // 从配置取数据
  // const { getSetting } = useSettingStore()
  // const setting = await getSetting()
  // const cfg = setting[key] as BlogConfig

  const cnblogsConfig = new CnblogsConfig(cnblogsApiUrl, cnblogsUsername, cnblogsAuthToken, middlewareUrl)
  const blogApi = new CnblogsApiAdaptor(appInstance, cnblogsConfig)

  return {
    blogApi,
  }
}
