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
import { useSettingStore } from "~/src/stores/useSettingStore.ts"
import { onBeforeMount, reactive } from "vue"
import { createAppLogger } from "~/src/utils/appLogger.ts"
import { JsonUtil } from "zhi-common"
import { AuthMode, DynamicConfig, DynamicJsonCfg } from "~/src/components/set/platform/dynamicConfig.ts"
import { DYNAMIC_CONFIG_KEY } from "~/src/utils/constants.ts"
import { useRouter } from "vue-router"
import { ElMessage } from "element-plus"

const logger = createAppLogger("publish-setting")

// uses
const { getSetting, updateSetting } = useSettingStore()
const router = useRouter()

// datas
let setting
const formData = reactive({
  dynamicConfigArray: <DynamicConfig[]>[],
})

// methods
const handlePublishSetting = (platform: DynamicConfig) => {
  if (platform.authMode === AuthMode.WEBSITE) {
    ElMessage.warning("打开网页窗口进行网页授权")
  } else {
    // API 模式
    router.push({
      name: "setting-platform-single",
      path: "/setting/platform/single",
      params: { key: platform.platformKey },
      query: { showBack: "true" },
    })
  }
}

const initPage = async () => {
  setting = await getSetting()
  logger.debug("get setting from platform setting", setting)
  const dynJsonCfg = JsonUtil.safeParse<DynamicJsonCfg>(setting[DYNAMIC_CONFIG_KEY], {} as DynamicJsonCfg)
  formData.dynamicConfigArray = dynJsonCfg.totalCfg || []
  logger.debug("get dynamic config array=>", formData.dynamicConfigArray)
}

onBeforeMount(async () => {
  await initPage()
})
</script>

<template>
  <div class="publish-setting">
    <el-row>
      <el-col>
        目前支持以下平台，直接点击图标可进入当前平台配置页面，目前前支持 网页授权 和 API 授权两种方式，API授权
        复杂点但是相对稳定，网页授权 简单但是可能会失效。惊喜：网页授权模式 100% 兼容
        <a href="https://www.wechatsync.com/" target="_blank">wechatsync</a>， 没想到吧~
      </el-col>
    </el-row>
    <el-row>
      <el-col> 可在平台配置导入更多预置平台，如需兼容其他平台，请<a href="#faq" class="ml-1">联系我</a> </el-col>
    </el-row>
    <el-row :gutter="20" class="platform-list">
      <el-col v-for="platform in formData.dynamicConfigArray" :span="6">
        <div class="platform-item" @click="handlePublishSetting(platform)">
          <img src="../../assets/images/wordpress-logo.svg" height="45" alt="WordPress" />
          <span class="text">{{ platform.platformType }}</span>
        </div>
      </el-col>
      <el-col :span="6">
        <div><img src="../../assets/images/weixin.png" width="45" alt="微信公众号" /></div>
      </el-col>
      <el-col :span="6">
        <div><img src="../../assets/images/toutiao.png" width="45" alt="今日头条" /></div>
      </el-col>
      <el-col :span="6">
        <div><img src="../../assets/images/zhihu.png" width="45" alt="知乎" /></div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="stylus">
.publish-setting
  .platform-list
    font-size 16px
</style>
