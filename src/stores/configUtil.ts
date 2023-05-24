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

import { getLocalStorageAdaptor } from "~/src/stores/localStorageAdaptor.ts"
import { createLogger } from "~/src/utils/simpleLogger.ts"
import { toRaw } from "vue"

const logger = createLogger("localstorage-config")

/**
 * 获取配置：这个是所有数据保存的根方法
 *
 * @param key key
 */
export const getConf = async (key: string): Promise<string> => {
  logger.debug("尝试从localStorage获取数据，key=>", key)

  const store = await getLocalStorageAdaptor()
  const value = store.getItem(key)
  if (!value) {
    logger.error("未找到对应数据，key=>", key)
    return ""
  }
  logger.debug("从localStorage获取数据=>", value)
  return value
}

/**
 * 保存配置：这个是所有数据保存的根方法
 *
 * @param key
 * @param value
 * @author terwer
 * @version 0.9.0
 * @since 0.0.1
 */
const setConf = async (key: string, value: string): Promise<void> => {
  if (!value || value === "") {
    logger.warn("空值，不保存")
    return
  }

  logger.debug("尝试保存数据到localStorage里key=>", key)
  logger.debug("保存数据到localStorage=>", value)

  const store = await getLocalStorageAdaptor()
  store.setItem(key, value)
}

const configUtil = {
  setConf,
  getConf,
}

export default configUtil
