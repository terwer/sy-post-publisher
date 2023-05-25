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
import { createLogger } from "~/src/utils/simpleLogger.ts"
import { ref } from "vue"
import { AppInstance } from "~/src/appInstance.ts"
import { Utils } from "~/src/utils/utils.ts"
import { SiYuanApiAdaptor, SiyuanConfig } from "zhi-siyuan-api"

const logger = createLogger("publisher-index")

const logMessage = ref("")

const siyuanGetRecentPosts = async () => {
  logMessage.value = ""
  logMessage.value = "siyuan requesting..."
  try {
    // appInstance
    const appInstance = new AppInstance()
    await appInstance.init()
    logger.info("appInstance=>", appInstance)

    const siyuanCfg = new SiyuanConfig("", "")
    // 显示指定修复标题
    siyuanCfg.fixTitle = true
    const siyuanApiAdaptor = new SiYuanApiAdaptor(siyuanCfg)
    const siyuanApi = Utils.blogApi(appInstance, siyuanApiAdaptor)
    const siyuanPosts = await siyuanApi.getRecentPosts(10)
    logMessage.value = JSON.stringify(siyuanPosts)
    logger.info("siyuan recent post=>", siyuanPosts)
  } catch (e) {
    logMessage.value = e
  }
}

const wordpressGetRecentPosts = async () => {
  logMessage.value = ""
  logMessage.value = "wordpress requesting..."
  try {
    // appInstance
    const appInstance = new AppInstance()
    await appInstance.init()
    logger.info("appInstance=>", appInstance)

    const wordpressCfg = {}
    const wordpressApiAdaptor = {}
    const wordpressApi = Utils.blogApi(appInstance, wordpressApiAdaptor)
    const wordpressPosts = await wordpressApi.getRecentPosts(10)
    logMessage.value = JSON.stringify(wordpressPosts)
    logger.info("wordpress recent post=>", wordpressPosts)
  } catch (e) {
    logMessage.value = e
  }
}
</script>

<template>
  <div id="publish-index">
    <el-tabs type="border-card">
      <el-tab-pane label="思源">
        <p><el-button @click="siyuanGetRecentPosts">文章列表</el-button></p>
        <p><el-button>单篇文章</el-button></p>
      </el-tab-pane>
      <el-tab-pane label="WordPress">
        <p><el-button @click="wordpressGetRecentPosts">文章列表</el-button></p>
        <p><el-button>单篇文章</el-button></p>
      </el-tab-pane>
    </el-tabs>

    <p>
      <el-input v-model="logMessage" type="textarea" :rows="10" placeholder="日志信息"></el-input>
    </p>
  </div>
</template>

<style lang="stylus" scoped>
#publish-index
  margin 16px 20px
</style>
