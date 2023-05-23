<!--
  - Copyright (c) 2023, Terwer . All rights reserved.
  - DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
  -
  - This code is free software; you can redistribute it and/or modify it
  - under the terms of the GNU General Public License version 2 only, as
  - published by the Free Software Foundation.  Terwer designates this
  - particular file as subject to the "Classpath" exception as provided
  - by Terwer in the LICENSE file that accompanied this code.
  -
  - This code is distributed in the hope that it will be useful, but WITHOUT
  - ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
  - FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
  - version 2 for more details (a copy is included in the LICENSE file that
  - accompanied this code).
  -
  - You should have received a copy of the GNU General Public License version
  - 2 along with this work; if not, write to the Free Software Foundation,
  - Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
  -
  - Please contact Terwer, Shenzhen, Guangdong, China, youweics@163.com
  - or visit www.terwer.space if you need additional information or have any
  - questions.
  -->

<script setup lang="ts">
import { createLogger } from "~/src/utils/simple-logger.ts"
import { inject, onBeforeMount } from "vue"
import { InjectKeys } from "~/src/utils/inject-keys.ts"
import { AppInstance } from "~/src/app-instance.ts"
import { Utils } from "~/src/utils/utils.ts"

const logger = createLogger("publisher-index")

// lifecycle
onBeforeMount(async () => {
  // appInstance
  const appInstance: AppInstance = inject(InjectKeys.APP_INSTANCE)

  // const wordpressCfg = {}
  // const wordpressApiAdaptor = {}
  // const wordpressApi = Utils.blogApi(appInstance, wordpressApiAdaptor)
  // const wordpressPosts = await wordpressApi.getRecentPosts(10)
  // logger.info("wordpress recent post=>", wordpressPosts)

  const siyuanCfg = new appInstance.zhiSiyuanApi.SiyuanConfig("", "")
  // 显示指定修复标题
  siyuanCfg.fixTitle = true
  const siyuanApiAdaptor = new appInstance.zhiSiyuanApi.SiYuanApiAdaptor(siyuanCfg)
  const siyuanApi = Utils.blogApi(appInstance, siyuanApiAdaptor)
  const siyuanPosts = await siyuanApi.getRecentPosts(10)
  logger.info("siyuan recent post=>", siyuanPosts)
})
</script>

<template>
  <div>PublishIndex222222</div>
</template>

<style scoped></style>