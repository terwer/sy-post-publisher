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
import { markRaw, onMounted, reactive, ref } from "vue"
import { useVueI18n } from "~/src/composables/useVueI18n.ts"
import { Delete, Tools } from "@element-plus/icons-vue"
import { useSettingStore } from "~/src/stores/useSettingStore.ts"
import { SypConfig } from "~/syp.config.ts"
import { createAppLogger } from "~/src/utils/appLogger.ts"
import { JsonUtil } from "zhi-common"
import {
  AuthMode,
  deletePlatformByKey,
  DynamicConfig,
  DynamicJsonCfg,
  getDynPostidKey,
  PlatformType,
  replacePlatformByKey,
  setDynamicJsonCfg,
} from "~/src/components/set/publish/platform/dynamicConfig.ts"
import { DYNAMIC_CONFIG_KEY } from "~/src/utils/constants.ts"
import { useRouter } from "vue-router"
import { usePlatformDefine } from "~/src/composables/usePlatformDefine.ts"
import { ElMessage, ElMessageBox } from "element-plus"
import { svgIcons } from "~/src/utils/svgIcons.ts"

const logger = createAppLogger("publish-setting")

// uses
const { t } = useVueI18n()
const router = useRouter()
const { getSetting, updateSetting, deleteKey, checkAndUpgradeSetting } = useSettingStore()
const { platformTypeList } = usePlatformDefine()

// datas
const formData = reactive({
  setting: {} as typeof SypConfig,

  showAdd: false,
  platformTypeList: platformTypeList,

  dynamicConfigArray: [] as DynamicConfig[],

  isUpgradeLoading: false,
  showLogMessage: false,
  logMessage: "",
})

// methods
const handleShowPlatform = () => {
  formData.showAdd = true
}
const handleHidePlatform = () => {
  formData.showAdd = false
}

const handleAddPlatformStep = (type: PlatformType) => {
  router.push({
    path: `/setting/platform/quickadd/${type}`,
    query: {
      showBack: "true",
    },
  })
}

const handleSinglePlatformSetting = async (cfg: DynamicConfig) => {
  if (cfg.authMode === AuthMode.API) {
    const key = cfg.platformKey
    await router.push({
      path: `/setting/platform/single/${key}`,
      query: {
        showBack: "true",
      },
    })
  } else {
    await handleOpenBrowserAuth(cfg)
  }
}

const handleSinglePlatformDelete = (cfg: DynamicConfig) => {
  ElMessageBox.confirm(`确认要删除【${cfg.platformName}】吗，所有与此平台相关的配置都将永久删除？`, "温馨提示", {
    type: "error",
    icon: markRaw(Delete),
    confirmButtonText: t("main.opt.ok"),
    cancelButtonText: t("main.opt.cancel"),
  })
    .then(async () => {
      formData.dynamicConfigArray = deletePlatformByKey(formData.dynamicConfigArray, cfg.platformKey)
      // 替换删除后的平台配置
      const dynJsonCfg = setDynamicJsonCfg(formData.dynamicConfigArray)
      formData.setting[DYNAMIC_CONFIG_KEY] = JSON.stringify(dynJsonCfg)
      // 删除配置
      delete formData.setting[cfg.platformKey]
      deleteKey(cfg.platformKey)
      await updateSetting(formData.setting)

      // 重新加载列表
      await initPage()
      ElMessage.success(t("main.opt.success"))
    })
    .catch(() => {})
}

const handleChangePlatformDefine = (cfg: DynamicConfig) => {
  router.push({
    path: `/setting/platform/update/${cfg.platformKey}`,
    query: {
      showBack: "true",
    },
  })
}

const handlePlatformEnabled = async (cfg: DynamicConfig) => {
  formData.dynamicConfigArray = replacePlatformByKey(formData.dynamicConfigArray, cfg.platformKey, cfg)
  // 替换删除后的平台配置
  const dynJsonCfg = setDynamicJsonCfg(formData.dynamicConfigArray)
  formData.setting[DYNAMIC_CONFIG_KEY] = JSON.stringify(dynJsonCfg)
  // 更新状态
  await updateSetting(formData.setting)
}

const handleOpenBrowserAuth = async (cfg: DynamicConfig) => {
  alert("handleOpenBrowserAuth")
}

const handleImportPre = () => {
  ElMessage.info("开发中，敬请期待，您可以自行前往 [新增平台] 选择添加")
}

const handleCheckAndUpgrade = async () => {
  formData.isUpgradeLoading = true
  formData.showLogMessage = true
  formData.logMessage = ""

  try {
    formData.logMessage += `${t("setting.upgrade.syp.tip1")}`
    const { isUpgrade, logText } = await checkAndUpgradeSetting(formData.setting)
    formData.logMessage += logText
    if (isUpgrade) {
      formData.logMessage += `\n${t("setting.upgrade.syp.tip2")}`
    } else {
      formData.logMessage += `\n${t("setting.upgrade.syp.tip3")}`
    }
    ElMessage.success(t("main.opt.success"))
  } catch (e) {
    formData.logMessage += `\n${t("setting.upgrade.syp.tip4")}` + e
    ElMessage.error(t("main.opt.failure") + "=>" + e)
    logger.error(e)
  }
  formData.logMessage += `\n${t("setting.upgrade.syp.tip5")}`
  formData.isUpgradeLoading = false
}

const initPage = async () => {
  formData.setting = await getSetting()
  logger.info("get setting from platform setting", formData.setting)

  const dynJsonCfg = JsonUtil.safeParse<DynamicJsonCfg>(formData.setting[DYNAMIC_CONFIG_KEY], {} as DynamicJsonCfg)
  // 默认展示通用平台
  formData.dynamicConfigArray = dynJsonCfg?.totalCfg || []
  logger.debug("dynamic init page=>", formData.dynamicConfigArray)
}

// lifecycles
onMounted(async () => {
  await initPage()
})
</script>

<template>
  <div class="publish-setting-body">
    <el-row :gutter="20" class="row-item">
      <el-col :span="2" class="col-item">
        <el-menu class="publish-setting-left-menu">
          <el-menu-item
            :class="formData.showAdd ? 'left-menu-item' : 'left-menu-item menu-item-selected'"
            @click="handleHidePlatform"
          >
            <template #title>
              <span> {{ t("service.tab.publish.setting") }} </span>
            </template>
          </el-menu-item>
          <el-menu-item
            :class="!formData.showAdd ? 'left-menu-item' : 'left-menu-item menu-item-selected'"
            @click="handleShowPlatform"
          >
            <template #title>
              <span> + {{ t("setting.platform.add") }} </span>
            </template>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="22" class="col-item">
        <div class="publish-setting-right-content">
          <div v-if="formData.showAdd">
            <el-row :gutter="20" class="row-item">
              <el-col
                v-for="p in formData.platformTypeList"
                :key="p.type"
                :span="24"
                class="col-item"
                @click="handleAddPlatformStep(p.type)"
              >
                <el-card class="platform-right-card">
                  <img :src="p.img" class="image" alt="" />
                  <div class="right-card-text">
                    <span>{{ p.title }}</span>
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
          <div v-else-if="formData.dynamicConfigArray.length === 0">
            <el-alert class="no-tip" type="error" :title="t('platform.must.select.one')"></el-alert>
          </div>
          <div v-else>
            <div class="publish-right-setting">
              <el-row :gutter="20" class="platform-list">
                <el-col
                  v-for="platform in formData.dynamicConfigArray"
                  :key="platform.platformKey"
                  :span="11"
                  class="platform-item-box"
                >
                  <div class="platform-item">
                    <el-icon class="item-left-icon">
                      <span class="item-icon" v-html="platform.platformIcon"></span>
                    </el-icon>
                    <div class="item-right">
                      <div class="text">
                        <el-badge
                          :value="
                            platform.isAuth ? '已授权' : platform.authMode === AuthMode.API ? '设置无效' : '没有授权'
                          "
                          class="badge-item"
                          :type="platform.isAuth ? 'success' : 'danger'"
                        >
                          <span>{{ platform.platformName }}</span>
                          <span class="name-edit" @click="handleChangePlatformDefine(platform)">
                            <el-icon> <span v-html="svgIcons.iconIFEdit"></span> </el-icon>
                          </span>
                          <el-text
                            :type="platform.authMode === AuthMode.API ? 'primary' : 'info'"
                            class="auth-mode-text"
                          >
                            {{ platform.authMode === AuthMode.API ? "API授权" : "网页授权" }}
                          </el-text>
                        </el-badge>
                      </div>
                      <div class="actions">
                        <el-switch
                          v-model="platform.isEnabled"
                          inline-prompt
                          size="small"
                          class="action-btn action-switch"
                          active-text="已启用"
                          inactive-text="未启用"
                          @change="handlePlatformEnabled(platform)"
                        ></el-switch>
                        <el-text
                          v-if="platform.isEnabled"
                          class="action-btn action-setting"
                          @click="handleSinglePlatformSetting(platform)"
                        >
                          <el-icon>
                            <Tools />
                          </el-icon>
                          {{ platform.authMode === AuthMode.API ? "设置" : "授权" }}
                        </el-text>
                        <el-text
                          v-if="!platform.isEnabled"
                          class="action-btn action-del"
                          @click="handleSinglePlatformDelete(platform)"
                        >
                          <el-icon>
                            <Delete />
                          </el-icon>
                          删除
                        </el-text>
                      </div>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <el-row>
                <el-col>
                  <div class="import-pre-action">
                    <el-button size="small" type="primary" @click="handleImportPre">导入预定义平台</el-button>
                    <el-button
                      size="small"
                      type="danger"
                      :loading="formData.isUpgradeLoading"
                      @click="handleCheckAndUpgrade"
                    >
                      检测并迁移历史配置
                    </el-button>
                  </div>
                  <div class="log-message-box">
                    <el-input
                      v-if="formData.showLogMessage"
                      v-model="formData.logMessage"
                      type="textarea"
                      :rows="10"
                      placeholder="日志信息"
                    ></el-input>
                  </div>

                  <div class="right-setting-tips">
                    <div class="el-alert el-alert--warning is-light" role="alert">
                      <div class="el-alert__content">
                        <div class="el-alert__title">
                          <div>{{ t("setting.platform.right.tips0") }}</div>
                          <div>{{ t("setting.platform.right.tips1") }}</div>
                          <div>{{ t("setting.platform.right.tips2") }}</div>
                          <div>{{ t("setting.platform.right.tips3") }}</div>
                          <div>{{ t("setting.platform.right.tips4") }}</div>
                        </div>
                      </div>
                    </div>

                    <div class="tips-form">
                      <a
                        href="https://terwergreen.feishu.cn/share/base/form/shrcnGRdThUiqnhBg15xgclMM0c"
                        target="_blank"
                      >
                        发布工具平台适配跟踪表
                      </a>
                    </div>
                  </div>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style scoped lang="stylus">
$icon_size = 32px

.publish-setting-body
  margin-left 10px
  margin-top 10px

.publish-setting-left-menu
  text-align center

  .left-menu-item
    justify-content center
    height 36px

  .menu-item-selected
    color var(--el-fill-color-blank)
    background var(--el-color-primary)

html[class="dark"]
  .menu-item-selected
    color var(--el-button-text-color)

.publish-setting-right-content
  .right-setting-tips
    text-align left
    padding-left 10px
    padding-right 10px

  .import-pre-action
    text-align left
    margin-left 20px

  .log-message-box
    margin 10px 20px

  .tips-form
    font-size 12px
    margin-top 14px

  .no-tip
    margin 0 10px
    padding-left 0
    width calc(100% - 30px)

.publish-right-setting
  .platform-list
    margin-bottom 10px
    margin-left 6px !important
    margin-right 6px !important

    .platform-item-box
      margin-bottom 28px
      text-align left

      .platform-item
        .item-left-icon
          //color var(--el-color-primary)
          width $icon_size
          height $icon_size
          margin-top -14px
          vertical-align middle

          :deep(.item-icon svg)
            width $icon_size
            height $icon_size

        .item-right
          display inline-block
          margin-left 10px
          text-align left

          .text
            color var(--el-button-text-color)
            font-size 12px
            margin-bottom 2px

            .auth-mode-text
              font-size 12px
              margin-left 16px

          .name-edit
            color var(--el-color-primary)
            margin-left 4px
            cursor pointer

          .actions
            .action-btn
              margin-right 10px

            .action-switch
              font-size 12px

            .action-setting
              font-size 12px
              cursor pointer

              &:hover
                color var(--el-color-primary)

            .action-del
              color red
              font-size 12px
              cursor pointer

              &:hover
                color var(--el-color-primary)

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
</style>
