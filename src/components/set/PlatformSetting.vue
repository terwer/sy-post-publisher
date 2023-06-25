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
import { onMounted, reactive, ref, toRaw } from "vue"
import { useVueI18n } from "~/src/composables/useVueI18n.ts"
import {
  AuthMode,
  DynamicConfig,
  DynamicJsonCfg,
  getDefaultPlatformName,
  getDynSwitchKey,
  getNewPlatformKey,
  getSubtypeList,
  isDynamicKeyExists,
  PlatformType,
  setDynamicJsonCfg,
  SubPlatformType,
} from "~/src/components/set/platform/dynamicConfig.ts"
import { createAppLogger } from "~/src/utils/appLogger.ts"
import { ElMessage, ElMessageBox, FormRules } from "element-plus"
import { useSettingStore } from "~/src/stores/useSettingStore.ts"
import { DYNAMIC_CONFIG_KEY } from "~/src/utils/constants.ts"
import { JsonUtil } from "zhi-common"
import { ElementPlus } from "@element-plus/icons-vue"
import { BrowserUtil } from "zhi-device"

const logger = createAppLogger("platform-setting")
const { t } = useVueI18n()
const { getSetting, updateSetting, checkKeyExists, deleteKey } = useSettingStore()

let setting
const showForm = ref(true)
// 默认支持jekyll
const defaultGithubSubtype = SubPlatformType.Common_Zhihu

const formRef = ref()
const formData = reactive({
  subtype: defaultGithubSubtype,
  ptype: PlatformType.Common,
  dynCfg: new DynamicConfig(
    PlatformType.Common,
    getNewPlatformKey(PlatformType.Common, defaultGithubSubtype),
    "Zhihu-1"
  ),
  subtypeOptions: [],
  dynamicConfigArray: [],
  authMode: AuthMode.API,
  isEnabled: false,
})
const rules = reactive<FormRules>({
  platformName: [
    {
      required: true,
      message: () => t("form.validate.name.required"),
    },
  ],
})

const handleSubPlatformTypeChange = (val) => {
  formData.subtype = val
  logger.debug(formData.subtype)

  onPlatformChange(formData.ptype)
}

const handlePlatformChange = (val) => {
  // 切换默认选中第一项
  formData.subtypeOptions = getSubtypeList(val)
  if (formData.subtypeOptions.length > 0) {
    formData.subtype = formData.subtypeOptions[0]
  }
  onPlatformChange(val)
}

const onPlatformChange = (val) => {
  formData.ptype = val
  formData.subtypeOptions = getSubtypeList(val)

  const pname = getDefaultPlatformName(
    val,
    formData.subtype,
    formData.subtypeOptions.length > 0 && formData.subtype !== SubPlatformType.NONE
  )
  formData.dynCfg = new DynamicConfig(
    val,
    getNewPlatformKey(val, formData.subtypeOptions.length > 0 ? formData.subtype : SubPlatformType.NONE),
    pname
  )
  showForm.value = formData.ptype !== PlatformType.Custom
  logger.debug(formData.ptype)
}

const validateForm = (formEl) => {
  // 类型校验
  if (formData.ptype === PlatformType.Custom) {
    ElMessage.error(t("dynamic.platform.opt.noselect"))
    return false
  }

  // 平台key必须唯一
  const pkey = formData.dynCfg.platformKey
  logger.debug("将要保存的平台key", pkey)
  if (isDynamicKeyExists(formData.dynamicConfigArray, pkey)) {
    ElMessage.error(t("dynamic.platform.opt.key.exist"))
    return false
  }

  // 保证开关变量key不重复
  const switchKey = "switch-" + pkey
  const postidKey = "custom-" + pkey + "-post-id"
  // 保证文章绑定id的key不重复
  if (checkKeyExists(pkey) || checkKeyExists(switchKey) || checkKeyExists(postidKey)) {
    ElMessage.error(t("dynamic.platform.opt.key.exist"))
    return false
  }

  return true
}

const submitForm = async (formEl) => {
  if (!formEl) return
  if (!validateForm(formEl)) {
    return
  }

  const result = await formEl.validate((valid, fields) => {
    if (valid) {
      logger.debug("校验成功")
    } else {
      logger.error(t("main.opt.failure"), fields)
      // ElMessage.error(t('main.opt.failure'))
    }
  })
  if (!result) {
    return
  }

  // 生成要保存的配置
  const newCfg = new DynamicConfig(formData.ptype, formData.dynCfg.platformKey, formData.dynCfg.platformName)
  if (formData.ptype === PlatformType.Github) {
    newCfg.subPlatformType = formData.subtype
  } else {
    newCfg.subPlatformType = SubPlatformType.NONE
  }
  newCfg.authMode = formData.authMode

  formData.dynamicConfigArray.push(newCfg)

  // 转换格式并保存
  const dynJsonCfg = setDynamicJsonCfg(formData.dynamicConfigArray)
  setting[DYNAMIC_CONFIG_KEY] = JSON.stringify(dynJsonCfg)
  const switchKey = getDynSwitchKey(newCfg.platformKey)
  // 默认启用禁用
  setting[switchKey] = String(formData.isEnabled)
  // 初始化一个空配置
  setting[newCfg.platformKey] = "{}"
  await updateSetting(setting)

  // 重新加载列表
  reloadTable()
  ElMessage.success(t("main.opt.success"))
}

const tableData = []
const num = ref(0)

const delRow = async (row) => {
  ElMessageBox.confirm(t("dynamic.platform.opt.del.confirm"), t("main.opt.warning"), {
    confirmButtonText: t("main.opt.ok"),
    cancelButtonText: t("main.opt.cancel"),
    type: "warning",
  })
    .then(async () => {
      const currentRow = toRaw(row)
      console.log(row)
      if (!currentRow) {
        ElMessage.error(t("dynamic.platform.opt.item.no.select.tip"))
        return
      }

      for (let i = 0; i < formData.dynamicConfigArray.length; i++) {
        if (currentRow.platformKey === formData.dynamicConfigArray[i].platformKey) {
          formData.dynamicConfigArray.splice(i, 1)
        }
      }

      // 转换格式并保存
      const dynJsonCfg = setDynamicJsonCfg(formData.dynamicConfigArray)
      setting[DYNAMIC_CONFIG_KEY] = JSON.stringify(dynJsonCfg)
      deleteKey(getDynSwitchKey(currentRow.platformKey))
      deleteKey(currentRow.platformKey)
      await updateSetting(setting)

      // 重新加载列表
      reloadTable()
      ElMessage.success(t("main.opt.success"))
    })
    .catch(() => {
      // ElMessage({
      //   type: 'error',
      //   message: t("main.opt.failure"),
      // })
    })
}

const handleEdit = (row) => {
  row.isAuth = true
}

const handleStatus = async (row) => {
  const isEnable = setting[getDynSwitchKey(row.platformKey)] === "true"
  if (isEnable) {
    setting[getDynSwitchKey(row.platformKey)] = "false"
  } else {
    setting[getDynSwitchKey(row.platformKey)] = "true"
  }
  await updateSetting(setting)
  BrowserUtil.reloadPage(500)
}

const reloadTable = () => {
  // 渲染table
  tableData.length = 0
  for (let i = 0; i < formData.dynamicConfigArray.length; i++) {
    tableData.push(formData.dynamicConfigArray[i])
  }
  num.value = formData.dynamicConfigArray.length
}

const initPage = async () => {
  setting = await getSetting()
  logger.info("get setting from platform setting", setting)

  const dynJsonCfg = JsonUtil.safeParse<DynamicJsonCfg>(setting[DYNAMIC_CONFIG_KEY], {} as DynamicJsonCfg)
  // 默认展示通用平台
  formData.subtypeOptions = getSubtypeList(PlatformType.Common)
  formData.dynamicConfigArray = dynJsonCfg.totalCfg || []

  // 重新加载列表
  reloadTable()
  logger.debug("dynamic init page=>", formData.dynamicConfigArray)
}

onMounted(async () => {
  // 导入配置
  // logger.info("开始导入预定义平台...")
  // importPreDefinedPlatform()
  // logger.info("导入预定义平台成功.")

  // 初始化
  await initPage()
})
</script>

<template>
  <div class="platform-setting">
    <el-container>
      <el-container>
        <el-header class="publish-dyn-header">
          <el-form ref="formRef" label-width="165px" :model="formData.dynCfg" :rules="rules">
            <el-alert class="top-version-tip" :title="t('dynamic.platform.tip')" type="info" :closable="false" />

            <!-- 平台类型 -->
            <el-form-item :label="t('dynamic.platform.type')">
              <el-button-group>
                <el-button
                  :type="formData.ptype === PlatformType.Common ? 'primary' : ''"
                  @click="handlePlatformChange(PlatformType.Common)"
                >
                  {{ t("dynamic.platform.type.common") }}
                </el-button>
                <el-button
                  :type="formData.ptype === PlatformType.Github ? 'primary' : ''"
                  @click="handlePlatformChange(PlatformType.Github)"
                >
                  {{ t("dynamic.platform.type.github") }}
                </el-button>
                <el-button
                  :type="formData.ptype === PlatformType.Metaweblog ? 'primary' : ''"
                  @click="handlePlatformChange(PlatformType.Metaweblog)"
                >
                  {{ t("dynamic.platform.type.metaweblog") }}
                </el-button>
                <el-button
                  :type="formData.ptype === PlatformType.Wordpress ? 'primary' : ''"
                  @click="handlePlatformChange(PlatformType.Wordpress)"
                >
                  {{ t("dynamic.platform.type.wordpress") }}
                </el-button>
                <el-button
                  :type="formData.ptype === PlatformType.Custom ? 'primary' : ''"
                  @click="handlePlatformChange(PlatformType.Custom)"
                >
                  {{ t("dynamic.platform.type.custom") }}
                </el-button>
              </el-button-group>
            </el-form-item>

            <!-- 临时页面 -->
            <el-form-item v-if="!showForm">
              <el-alert title="敬请期待" type="info" :closable="false" />
            </el-form-item>

            <!-- 平台名称 -->
            <el-form-item v-if="formData.subtypeOptions.length > 0 && showForm">
              <el-select
                v-model="formData.subtype"
                class="m-2"
                placeholder="Select"
                @change="handleSubPlatformTypeChange"
              >
                <el-option v-for="item in formData.subtypeOptions" :key="item" :label="item" :value="item" />
              </el-select>
            </el-form-item>

            <el-form-item v-if="showForm" :label="formData.ptype + t('dynamic.platform.name')" prop="platformName">
              <el-input v-model="formData.dynCfg.platformName" :placeholder="t('dynamic.platform.name.tip')" />
            </el-form-item>

            <el-form-item v-if="false" :label="formData.ptype + t('dynamic.platform.key')" prop="platformKey">
              {{ formData.dynCfg.platformKey }}
            </el-form-item>

            <el-form-item v-if="showForm" label="授权方式">
              <el-select v-model="formData.authMode">
                <el-option :value="AuthMode.API" label="API授权" />
                <el-option :value="AuthMode.WEBSITE" label="网页授权" />
              </el-select>
            </el-form-item>

            <el-form-item v-if="showForm" label="是否启用">
              <el-switch v-model="formData.isEnabled" />
            </el-form-item>

            <el-form-item v-if="showForm">
              <el-button type="primary" @click="submitForm(formRef)">{{ t("dynamic.platform.opt.add") }} </el-button>
            </el-form-item>
          </el-form>
        </el-header>

        <!-- 动态列表 -->
        <el-main class="dyn-table-list">
          <el-form-item>
            <el-table :key="num" :data="tableData" border stripe highlight-current-row empty-text="暂无数据">
              <!--
              <el-table-column prop="platformType" :label="t('dynamic.platform.type')" />
              <el-table-column prop="subPlatformType" :label="t('dynamic.platform.subtype')" />
              -->
              <el-table-column prop="platformKey" :label="t('dynamic.platform.key')" width="120" />
              <el-table-column prop="platformName" :label="t('dynamic.platform.name')" width="120" />
              <el-table-column align="center">
                <template #header>
                  <div style="text-align: center">授权方式</div>
                </template>
                <template #default="scope">
                  <el-text :type="scope.row.authMode === AuthMode.WEBSITE ? 'success' : 'primary'">
                    {{ scope.row.authMode === AuthMode.WEBSITE ? "网页授权" : "API授权" }}
                  </el-text>
                </template>
              </el-table-column>
              <el-table-column align="center">
                <template #header>
                  <div style="text-align: center">授权状态</div>
                </template>
                <template #default="scope">
                  <el-text :type="scope.row.isAuth ? 'success' : 'danger'">
                    {{ scope.row.isAuth ? "已授权" : "未授权" }}</el-text
                  >
                </template>
              </el-table-column>
              <el-table-column align="center">
                <template #header>
                  <div style="text-align: center">启用状态</div>
                </template>
                <template #default="scope">
                  <el-text :type="setting[getDynSwitchKey(scope.row.platformKey)] === 'true' ? 'success' : 'danger'">
                    {{ setting[getDynSwitchKey(scope.row.platformKey)] === "true" ? "已启用" : "已禁用" }}</el-text
                  >
                </template>
              </el-table-column>
              <el-table-column align="center" width="200">
                <template #header>
                  <div style="text-align: center">操作</div>
                </template>
                <template #default="scope">
                  <el-button size="small" type="primary" @click="handleEdit(scope.row)"> 配置 </el-button>
                  <el-button size="small" @click="handleStatus(scope.row)">
                    {{ setting[getDynSwitchKey(scope.row.platformKey)] === "true" ? "禁用" : "启用" }}</el-button
                  >
                  <el-button size="small" type="danger" @click="delRow(scope.row)">
                    {{ t("dynamic.platform.opt.del.select") }}
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-form-item>
        </el-main>
      </el-container>

      <el-aside width="300px">
        <el-scrollbar class="platform-define">
          <div>
            <el-text> 请点击图标快速新增预置的发布服务 </el-text>
          </div>
          <el-space direction="horizontal" class="platform-box">
            <el-text>
              <el-icon>
                <ElementPlus />
              </el-icon>
              知乎
            </el-text>
            <el-text>
              <el-icon>
                <ElementPlus />
              </el-icon>
              CSDN
            </el-text>
            <el-text>
              <el-icon>
                <ElementPlus />
              </el-icon>
              博客园
            </el-text>
            <el-text>
              <el-icon>
                <ElementPlus />
              </el-icon>
              简书
            </el-text>
          </el-space>
        </el-scrollbar>
      </el-aside>
    </el-container>
  </div>
</template>

<style scoped lang="stylus">
.publish-dyn-header
  height 332px !important

.platform-define
  .platform-box
    flex-wrap wrap
</style>
