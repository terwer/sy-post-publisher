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
import { onMounted, reactive } from "vue"
import { useRoute } from "vue-router"
import { useVueI18n } from "~/src/composables/useVueI18n.ts"
import { createAppLogger } from "~/src/utils/appLogger.ts"
import Adaptors from "~/src/adaptors"
import { Utils } from "~/src/utils/utils.ts"
import { AppInstance } from "~/src/appInstance.ts"
import { Post } from "zhi-blog-api"
import { useSettingStore } from "~/src/stores/useSettingStore.ts"
import { JsonUtil, StrUtil } from "zhi-common"
import { SypConfig } from "~/syp.config.ts"
import { useSiyuanApi } from "~/src/composables/useSiyuanApi.ts"

const logger = createAppLogger("quick-publish-worker")

// uses
const { t } = useVueI18n()
const route = useRoute()
const { getSetting, updateSetting } = useSettingStore()
const { kernelApi, blogApi } = useSiyuanApi()

// datas
const params = reactive(route.params)
const key = params.key as string
const id = params.id as string
const formData = reactive({
  isPublishLoading: false,
  publishStatus: false,
  errMsg: "",

  setting: {} as typeof SypConfig,
  cfg: {} as any,
  postid: "",
  previewUrl: "",
})

const doPublish = async () => {
  try {
    // 加载配置
    formData.setting = await getSetting()
    formData.cfg = JsonUtil.safeParse<any>(formData.setting[key], {} as any)

    // 思源笔记原始文章数据
    const doc = await blogApi.getPost(id)

    // 初始化API
    const appInstance = new AppInstance()
    const apiAdaptor = await Adaptors.getAdaptor(key)
    const api = Utils.blogApi(appInstance, apiAdaptor)
    logger.info("api=>", api)

    // 检测是否发布
    const posidKey = formData.cfg.posidKey
    if (StrUtil.isEmptyString(posidKey)) {
      throw new Error("配置错误，posidKey不能为空，请检查配置")
    }
    const postMeta = formData.setting[id] ?? {}
    formData.postid = postMeta[posidKey] ?? ""

    if (StrUtil.isEmptyString(formData.postid)) {
      logger.info("文章未发布，准备发布")
      const post = new Post()
      post.title = doc.title
      post.description = doc.description
      // result 正常情况下就是 postid
      const result = await api.newPost(post)

      // 写入postid到配置
      formData.postid = result
      postMeta[posidKey] = formData.postid
      formData.setting[id] = postMeta
      await updateSetting(formData.setting)
      logger.info("new post=>", result)
    } else {
      logger.info("文章已发布，准备更新")
      const post = new Post()
      post.title = doc.title
      post.description = doc.description
      // result 正常情况下就是 postid
      const result = await api.editPost(formData.postid, post)
      logger.info("edit post=>", result)
    }
    const previewUrl = await api.getPreviewUrl(formData.postid)
    formData.previewUrl = `${formData.cfg.home}${previewUrl}`

    formData.publishStatus = true
  } catch (e) {
    formData.errMsg = t("main.opt.failure") + "=>" + e
    logger.error(e)
    // ElMessage.error(formData.errMsg)
    await kernelApi.pushErrMsg({
      msg: formData.errMsg,
      timeout: 7000,
    })
    formData.publishStatus = false
  }
}

onMounted(async () => {
  formData.isPublishLoading = true
  setTimeout(async () => {
    await doPublish()
    formData.isPublishLoading = false
  }, 200)
})
</script>

<template>
  <div id="quick-publish-box">
    <div class="publish-tips">
      <div v-if="formData.isPublishLoading" class="is-loading info-tips">
        <i class="el-icon is-loading"
          ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024">
            <path
              fill="currentColor"
              d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32zm0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32zm448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32zm-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32zM195.2 195.2a32 32 0 0 1 45.248 0L376.32 331.008a32 32 0 0 1-45.248 45.248L195.2 240.448a32 32 0 0 1 0-45.248zm452.544 452.544a32 32 0 0 1 45.248 0L828.8 783.552a32 32 0 0 1-45.248 45.248L647.744 692.992a32 32 0 0 1 0-45.248zM828.8 195.264a32 32 0 0 1 0 45.184L692.992 376.32a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0zm-452.544 452.48a32 32 0 0 1 0 45.248L240.448 828.8a32 32 0 0 1-45.248-45.248l135.808-135.808a32 32 0 0 1 45.248 0z"
            ></path></svg
        ></i>
        发布中，请稍后...：
      </div>
      <div v-else-if="formData.publishStatus" class="success-tips">
        {{ StrUtil.isEmptyString(formData.postid) ? "发布到" : "更新文章到" }} [博客园] 成功，
        <a :href="formData.previewUrl" target="_blank">查看文章</a>
      </div>
      <div v-else class="fail-tips">
        {{ StrUtil.isEmptyString(formData.postid) ? "发布到" : "更新文章到" }} [博客园] 失败！
      </div>
    </div>
  </div>
</template>

<style scoped lang="stylus">
.top-tip
  margin 10px 0
  padding-left 0
#quick-publish-box
  .publish-tips
    margin 10px
    margin-top 8px
    font-size 14px
    .info-tips
      color var(--el-color-info)
      .is-loading
        vertical-align middle
        margin-top -4px
    .success-tips
      color var(--el-color-success)
    .fail-tips
      color var(--el-color-error)
</style>
