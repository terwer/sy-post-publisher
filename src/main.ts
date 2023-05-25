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

import { createApp } from "vue"
import App from "./App.vue"
import { createLogger } from "./utils/simpleLogger.ts"
import { useRouter } from "./composables/useRouter.ts"
// 国际化
import i18n from "~/src/locales"

// Element-Plus
import ElementPlus from "element-plus"
import "element-plus/dist/index.css"
import "element-plus/theme-chalk/dark/css-vars.css"

import { InjectKeys } from "~/src/utils/injectKeys.ts"
import { AppInstance } from "~/src/appInstance.ts"

/**
 * 初始化 Vue 实例
 */
;(async () => {
  const logger = createLogger("vue-main-entry")

  // https://stackoverflow.com/a/62383325/4037224
  const app = createApp(App)

  // 国际化
  app.use(i18n)

  // router
  const router = useRouter()
  app.use(router)

  // appInstance
  const appInstance = new AppInstance()
  await appInstance.init()
  app.provide(InjectKeys.APP_INSTANCE, appInstance)
  logger.info("appInstance provided=>", appInstance)

  // ElementPlus
  // 包太大，需要改成按需引入
  // https://element-plus.org/zh-CN/guide/quickstart.html#%E6%8C%89%E9%9C%80%E5%AF%BC%E5%85%A5
  // app.use(ElementPlus)

  // 挂载 vue app
  app.mount("#app")

  // 暴露 Vue 实例
  app.provide(InjectKeys.VUE_INSTANCE, app)
  logger.info("vue app created")
})()
