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
import { useVueI18n } from "~/src/composables/useVueI18n.ts"
import { ElementPlus } from "@element-plus/icons-vue"
import { useSettingStore } from "~/src/stores/useSettingStore.ts"
import { SypConfig } from "~/syp.config.ts"
import { createAppLogger } from "~/src/utils/appLogger.ts"
import { JsonUtil } from "zhi-common"
import { DynamicConfig, DynamicJsonCfg } from "~/src/components/set/publish/platform/dynamicConfig.ts"
import { DYNAMIC_CONFIG_KEY } from "~/src/utils/constants.ts"
import { useRouter } from "vue-router"

const logger = createAppLogger("publish-setting")

// uses
const { t } = useVueI18n()
const router = useRouter()
const { getSetting, updateSetting } = useSettingStore()

// datas
const formData = reactive({
  setting: {} as typeof SypConfig,

  showPlatformList: false,
  platformTypeList: [
    {
      type: t("setting.platform.universal"),
      img: "./images/universal.webp",
      description: t("setting.platform.universal.desc"),
    },
    {
      type: t("setting.platform.wordpress"),
      img: "./images/wordpress-logo.svg",
      description: t("setting.platform.wordpress.desc"),
    },
  ],

  dynamicConfigArray: [] as DynamicConfig[],
})

// methods
const handleShowPlatform = () => {
  formData.showPlatformList = true
}
const handleHidePlatform = () => {
  formData.showPlatformList = false
}

const handleAddPlatformStep = () => {
  alert(111)
}

const handleSinglePlatformSetting = (key: string) => {
  router.push({ path: `/setting/platform/single/${key}` })
}

const initPage = async () => {
  formData.setting = await getSetting()
  logger.info("get setting from platform setting", formData.setting)

  const dynJsonCfg = JsonUtil.safeParse<DynamicJsonCfg>(formData.setting[DYNAMIC_CONFIG_KEY], {} as DynamicJsonCfg)
  // 默认展示通用平台
  formData.dynamicConfigArray = dynJsonCfg.totalCfg || []
  logger.debug("dynamic init page=>", formData.dynamicConfigArray)
}

// lifecycles
onMounted(async () => {
  await initPage()
})
</script>

<template>
  <div>
    <el-row :gutter="20" class="row-item">
      <el-col :span="2" class="col-item">
        <el-menu class="publish-setting-left-menu">
          <el-menu-item class="left-menu-item menu-item-selected" @click="handleHidePlatform">
            <template #title>
              <el-text type="info"> {{ t("service.tab.publish.setting") }} </el-text>
            </template>
          </el-menu-item>
          <el-menu-item
            v-for="dc in formData.dynamicConfigArray"
            :key="dc.platformKey"
            class="left-menu-item"
            @click="handleSinglePlatformSetting(dc.platformKey)"
          >
            <template #title>
              <el-icon>
                <ElementPlus />
              </el-icon>
              {{ dc.platformName }}
            </template>
          </el-menu-item>
          <el-menu-item class="left-menu-item" @click="handleShowPlatform">
            <template #title>
              <el-text type="primary"> + {{ t("setting.platform.add") }} </el-text>
            </template>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18" class="col-item">
        <div class="publish-setting-right-content">
          <div v-if="formData.showPlatformList">
            <el-row :gutter="20" class="row-item">
              <el-col
                v-for="p in formData.platformTypeList"
                :key="p.type"
                :span="24"
                class="col-item"
                @click="handleAddPlatformStep"
              >
                <el-card class="platform-right-card">
                  <img :src="p.img" class="image" alt="" />
                  <div class="right-card-text">
                    <span>{{ p.type }}</span>
                    <div>
                      <div class="text-desc">{{ p.description }}</div>
                      <div class="add-btn">
                        <el-button size="small" type="primary">{{ t("setting.platform.add.this") }}</el-button>
                      </div>
                    </div>
                  </div>
                </el-card>
              </el-col>
            </el-row>
          </div>
          <div v-else>
            <div class="publish-setting">
              <el-row>
                <el-col>
                  <div class="right-setting-tips">
                    在这里可以进行发布配置，直接点击左侧菜单或者下列图标均可进行配置。
                  </div>
                  <div class="right-setting-tips">
                    <el-text type="danger">如需新增平台，直接点击左侧 + 按钮即可。</el-text>
                  </div>
                  <div class="right-setting-tips">
                    目前支持 网页授权 和 API 授权两种方式，API授权 复杂点但是相对稳定，网页授权
                    简单但是可能会失效。惊喜：网页授权模式 100% 兼容
                    <a href="https://www.wechatsync.com/" target="_blank">wechatsync</a>， 没想到吧~
                  </div>
                  <div class="right-setting-tips">如需兼容其他平台，请<a href="#" class="ml-1">联系我</a></div>
                </el-col>
              </el-row>
              <el-row :gutter="20" class="platform-list">
                <el-col v-for="platform in formData.dynamicConfigArray" :key="platform.platformKey" :span="6">
                  <div class="platform-item" @click="handleSinglePlatformSetting(platform.platformKey)">
                    <img src="/images/wordpress-logo.svg" height="45" alt="WordPress" />
                    <span class="text">{{ platform.platformType }}</span>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="4" class="col-item">
        <el-scrollbar class="platform-define">
          <div>
            <el-text class="platform-title" type="primary"> 请点击图标快速新增预置的发布服务 </el-text>
          </div>
          <el-space direction="horizontal" class="platform-box">
            <el-text class="define-item">
              <el-icon>
                <ElementPlus />
              </el-icon>
              知乎
            </el-text>
            <el-text class="define-item">
              <el-icon>
                <ElementPlus />
              </el-icon>
              CSDN
            </el-text>
            <el-text class="define-item">
              <el-icon>
                <ElementPlus />
              </el-icon>
              博客园
            </el-text>
            <el-text class="define-item">
              <el-icon>
                <ElementPlus />
              </el-icon>
              简书
            </el-text>
            <el-text class="define-item">
              <el-icon>
                <ElementPlus />
              </el-icon>
              Typecho
            </el-text>
            <el-text class="define-item">
              <el-icon>
                <ElementPlus />
              </el-icon>
              微信公众号
            </el-text>
          </el-space>
        </el-scrollbar>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="stylus">
.publish-setting-left-menu
  text-align center
  .left-menu-item
    justify-content center
  .menu-item-selected
    background var(--el-color-primary-light-7)

.publish-setting-right-content
  .right-setting-tips
    text-align left
    padding-left 10px
    padding-right 10px

.row-item
  margin 0 !important
  padding 0 !important
  text-align center
.col-item
  margin 0 !important
  padding 0 !important
.platform-right-card
  margin 0
  margin-left 10px
  margin-right 10px
  margin-bottom 10px
  padding 0
  img
    width 160px
    height 160px
  .right-card-text
    padding 0 10px 10px 10px
    display inline-block
    vertical-align top
    line-height 32px
    width calc(100% - 180px)
    .text-desc
      font-size 12px
      line-height 18px
    .add-btn
      margin-top 12px

.platform-define
  text-align left
  .platform-box
    margin-top 10px
    flex-wrap wrap
    .define-item
      cursor pointer
      min-width 100px
      padding-bottom 6px
      &:hover
        color var(--el-color-primary)
</style>
