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

import {createAppLogger} from "~/src/utils/appLogger.ts"
import {AppInstance} from "~/src/appInstance.ts"
import {Utils} from "~/src/utils/utils.ts";
import {useSettingStore} from "~/src/stores/useSettingStore.ts";
import {JsonUtil, ObjectUtil} from "zhi-common";
import {WordpressConfig} from "~/src/adaptors/api/wordpress/config/wordpressConfig.ts";
import {WordpressApiAdaptor} from "~/src/adaptors/api/wordpress/adaptor/wordpressApiAdaptor.ts";
import {getDynPostidKey} from "~/src/components/set/publish/platform/dynamicConfig.ts";

/**
 * 使用Wordpress API的自定义hook
 *
 * @param key 配置键值，可选参数
 * @author terwer
 * @version 0.9.0
 * @since 0.9.0
 */
export const useWordpressApi = async (key?: string) => {
  // 创建应用日志记录器
  const logger = createAppLogger("use-wordpress-api")

  // 记录开始使用Wordpress API
  logger.info("Start using Wordpress API...")

  // 创建应用实例
  const appInstance = new AppInstance()

  // 从环境变量获取Wordpress API的URL、用户名、认证令牌和中间件URL
  const wordpressApiUrl = Utils.emptyOrDefault(process.env.VITE_WORDPRESS_API_URL, "http://your-wordpress-api-url.com/xmlrpc.php")
  const wordpressUsername = Utils.emptyOrDefault(process.env.VITE_WORDPRESS_USERNAME, "")
  const wordpressAuthToken = Utils.emptyOrDefault(process.env.VITE_WORDPRESS_AUTH_TOKEN, "")
  const middlewareUrl = Utils.emptyOrDefault(process.env.VITE_MIDDLEWARE_URL, "http://localhost:3000/api/middleware")

  // 从配置中获取数据
  const { getSetting } = useSettingStore()
  const setting = await getSetting()
  let cfg: WordpressConfig = JsonUtil.safeParse<WordpressConfig>(setting[key], {} as WordpressConfig)
  // 如果配置为空，则使用默认的环境变量值，并记录日志
  if (ObjectUtil.isEmptyObject(cfg)) {
    cfg = new WordpressConfig(wordpressApiUrl, wordpressUsername, wordpressAuthToken, middlewareUrl)
    logger.debug("Configuration is empty, using default environment variables.")
  } else {
    logger.info("Using configuration from settings...")
  }
  // 默认值
  cfg.posidKey = getDynPostidKey(key)

  // 创建Wordpress API适配器
  const blogApi = new WordpressApiAdaptor(appInstance, cfg)

  // 记录Wordpress API创建成功
  logger.info("Wordpress API created successfully.", cfg)

  return {
    cfg,
    blogApi,
  }
}
