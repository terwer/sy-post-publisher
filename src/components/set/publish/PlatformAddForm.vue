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
import { reactive, ref } from "vue"
import {
  AuthMode,
  DynamicConfig,
  getNewPlatformKey,
  PlatformType,
  SubPlatformType,
} from "~/src/components/set/publish/platform/dynamicConfig.ts"
import { useVueI18n } from "~/src/composables/useVueI18n.ts"
import { createAppLogger } from "~/src/utils/appLogger.ts"
import { useRoute, useRouter } from "vue-router"
import BackPage from "~/src/components/common/BackPage.vue"

const logger = createAppLogger("platform-add-form")

// uses
const { t } = useVueI18n()
const router = useRouter()
const route = useRoute()
const { query } = useRoute()

// datas
const params = reactive(route.params)

const formRef = ref()
const formData = reactive({
  ptype: PlatformType.Common,
  subtype: SubPlatformType.Common_Zhihu,
  dynCfg: new DynamicConfig(
    PlatformType.Common,
    getNewPlatformKey(PlatformType.Common, SubPlatformType.Common_Zhihu),
    "Zhihu-1"
  ),
  subtypeOptions: [],
  authMode: AuthMode.API,
  isEnabled: false,
})

const handleSubPlatformTypeChange = () => {}

const validateForm = (formEl) => {
  return false
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
}
</script>

<template>
  <back-page :title="'新增自定义平台 - ' + params.type">
    <el-form ref="formRef" label-width="165px" :model="formData.dynCfg">
      <el-alert :title="'当前平台类型为 ' + params.type" type="info" :closable="false" />
      <!-- 子平台名称 -->
      <el-form-item v-if="formData.subtypeOptions.length > 0">
        <el-select v-model="formData.subtype" class="m-2" placeholder="Select" @change="handleSubPlatformTypeChange">
          <el-option v-for="item in formData.subtypeOptions" :key="item" :label="item" :value="item" />
        </el-select>
      </el-form-item>
      <!-- 平台key -->
      <el-form-item v-if="false" :label="formData.ptype + t('dynamic.platform.key')" prop="platformKey">
        {{ formData.dynCfg.platformKey }}
      </el-form-item>
      <!-- 授权方式 -->
      <el-form-item label="授权方式">
        <el-select v-model="formData.authMode">
          <el-option :value="AuthMode.API" label="API授权" />
          <el-option :value="AuthMode.WEBSITE" label="网页授权" />
        </el-select>
      </el-form-item>
      <!-- 是否启用 -->
      <el-form-item label="是否启用">
        <el-switch v-model="formData.isEnabled" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm(formRef)">{{ t("dynamic.platform.opt.add") }} </el-button>
      </el-form-item>
    </el-form>
  </back-page>
</template>

<style scoped lang="stylus"></style>
