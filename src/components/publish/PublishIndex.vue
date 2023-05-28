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
import { before } from "node:test"
import { Post } from "zhi-blog-api"

const logger = createLogger("publisher-index")

const params = ref("{}")
const logMessage = ref("")

const methodOption = ref("getUsersBlogs")
const METHOD_GET_USERS_BLOGS = "getUsersBlogs"
const METHOD_GET_RECENT_POSTS_COUNT = "getRecentPostsCount"
const METHOD_GET_RECENT_POSTS = "getRecentPosts"
const METHOD_NEW_POST = "newPost"
const METHOD_EDIT_POST = "editPost"
const methodOptions = reactive({
  options: [
    {
      value: METHOD_GET_USERS_BLOGS,
      label: "获取博客信息",
    },
    {
      value: METHOD_GET_RECENT_POSTS_COUNT,
      label: "获取最新文章数目",
    },
    {
      value: METHOD_GET_RECENT_POSTS,
      label: "获取最新文章列表",
    },
    {
      value: METHOD_NEW_POST,
      label: "发布文章",
    },
    {
      value: METHOD_EDIT_POST,
      label: "编辑文章",
    },
  ],
})

const onMethodChange = (val: string) => {
  switch (val) {
    case METHOD_GET_USERS_BLOGS: {
      params.value = "{}"
      break
    }
    case METHOD_GET_RECENT_POSTS_COUNT: {
      params.value = "{}"
      break
    }
    case METHOD_GET_RECENT_POSTS: {
      params.value = JSON.stringify({
        numOfPosts: 10,
      })
      break
    }
    case METHOD_NEW_POST: {
      params.value = JSON.stringify({
        title: "自动发布的测试标题",
        description: "自动发布的测试内容",
        mt_keywords: "标签1,标签2",
        categories: ["分类1", "分类2"],
        // dateCreated: new Date(),
      })
      break
    }
    default: {
      params.value = "{}"
      break
    }
  }
}

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
        const siyuanCfg = new SiyuanConfig("http://127.0.0.1:6806", "")
        // 显示指定修复标题
        siyuanCfg.fixTitle = true
        const siyuanApiAdaptor = new SiYuanApiAdaptor(appInstance, siyuanCfg)
        const siyuanApi = Utils.blogApi(appInstance, siyuanApiAdaptor)
        const siyuanUsersBlogs = await siyuanApi.getUsersBlogs()
        logMessage.value = JSON.stringify(siyuanUsersBlogs)
        logger.info("siyuan users blogs=>", siyuanUsersBlogs)
        break
      }
      case METHOD_GET_RECENT_POSTS_COUNT: {
        const siyuanCfg = new SiyuanConfig("http://127.0.0.1:6806", "")
        const siyuanApiAdaptor = new SiYuanApiAdaptor(appInstance, siyuanCfg)
        const siyuanApi = Utils.blogApi(appInstance, siyuanApiAdaptor)
        const recentPostsCount = await siyuanApi.getRecentPostsCount()
        logMessage.value = JSON.stringify(recentPostsCount)
        logger.info("siyuan recent post count=>", recentPostsCount)
        break
      }
      case METHOD_GET_RECENT_POSTS: {
        const siyuanCfg = new SiyuanConfig("http://127.0.0.1:6806", "")
        // 显示指定修复标题
        siyuanCfg.fixTitle = true
        const siyuanApiAdaptor = new SiYuanApiAdaptor(appInstance, siyuanCfg)
        const siyuanApi = Utils.blogApi(appInstance, siyuanApiAdaptor)
        const paramsValue = JSON.parse(params.value)
        const siyuanPosts = await siyuanApi.getRecentPosts(paramsValue.numOfPosts)
        logMessage.value = JSON.stringify(siyuanPosts)
        logger.info("siyuan recent post=>", siyuanPosts)
        break
      }
      case METHOD_NEW_POST: {
        const siyuanCfg = new SiyuanConfig("http://127.0.0.1:6806", "")
        siyuanCfg.notebook = "20230506132031-qbtyjdk"
        const siyuanApiAdaptor = new SiYuanApiAdaptor(appInstance, siyuanCfg)
        const siyuanApi = Utils.blogApi(appInstance, siyuanApiAdaptor)
        const paramsValue = JSON.parse(params.value)
        let post = new Post()
        post = {
          ...post,
          ...paramsValue,
        }
        const result = await siyuanApi.newPost(post)
        logMessage.value = JSON.stringify(result)
        break
      }
      // 20230527202519-k09a4gx
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
      <el-select v-model="methodOption" class="m-2" placeholder="请选择方法名称" @change="onMethodChange">
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
