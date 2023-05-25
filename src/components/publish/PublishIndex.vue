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
import { reactive, ref } from "vue"
import { AppInstance } from "~/src/appInstance.ts"
import { Utils } from "~/src/utils/utils.ts"
import { SiYuanApiAdaptor, SiyuanConfig } from "zhi-siyuan-api"

const logger = createLogger("publisher-index")

const params = ref("{}")
const logMessage = ref("")

const methodOption = ref("getUsersBlogs")
const METHOD_GET_USERS_BLOGS = "getUsersBlogs"
const METHOD_GET_RECENT_POSTS = "getRecentPosts"
const methodOptions = reactive({
  options: [
    {
      value: METHOD_GET_USERS_BLOGS,
      label: "获取博客信息",
    },
    {
      value: METHOD_GET_RECENT_POSTS,
      label: "获取最新文章列表",
    },
  ],
})

const siyuanGetRecentPosts = async () => {
  logMessage.value = ""
  logMessage.value = "siyuan requesting..."
  try {
    // appInstance
    const appInstance = new AppInstance()
    await appInstance.init()
    logger.info("appInstance=>", appInstance)

    switch (methodOption.value) {
      case METHOD_GET_USERS_BLOGS: {
        const siyuanCfg = new SiyuanConfig("", "")
        // 显示指定修复标题
        siyuanCfg.fixTitle = true
        const siyuanApiAdaptor = new SiYuanApiAdaptor(siyuanCfg)
        const siyuanApi = Utils.blogApi(appInstance, siyuanApiAdaptor)
        const siyuanUsersBlogs = await siyuanApi.getUsersBlogs()
        logMessage.value = JSON.stringify(siyuanUsersBlogs)
        logger.info("siyuan users blogs=>", siyuanUsersBlogs)
        break
      }
      case METHOD_GET_RECENT_POSTS: {
        const siyuanCfg = new SiyuanConfig("", "")
        // 显示指定修复标题
        siyuanCfg.fixTitle = true
        const siyuanApiAdaptor = new SiYuanApiAdaptor(siyuanCfg)
        const siyuanApi = Utils.blogApi(appInstance, siyuanApiAdaptor)
        const siyuanPosts = await siyuanApi.getRecentPosts(10)
        logMessage.value = JSON.stringify(siyuanPosts)
        logger.info("siyuan recent post=>", siyuanPosts)
        break
      }
      default:
        break
    }
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
    <div class="method-list">
      <el-select v-model="methodOption" class="m-2" placeholder="请选择方法名称">
        <el-option v-for="item in methodOptions.options" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>

    <el-tabs type="border-card">
      <el-tab-pane label="思源">
        <p><el-button @click="siyuanGetRecentPosts">开始测试思源</el-button></p>
      </el-tab-pane>
      <el-tab-pane label="WordPress">
        <p><el-button @click="wordpressGetRecentPosts">开始测试WordPress</el-button></p>
      </el-tab-pane>
    </el-tabs>

    <p><el-button>入参</el-button></p>
    <p><el-input v-model="params" type="textarea" :rows="5"></el-input></p>

    <p><el-button>结果</el-button></p>
    <p>
      <el-input v-model="logMessage" type="textarea" :rows="10" placeholder="日志信息"></el-input>
    </p>
  </div>
</template>

<style lang="stylus" scoped>
#publish-index
  margin 16px 20px

.method-list
  margin-bottom 16px
</style>
