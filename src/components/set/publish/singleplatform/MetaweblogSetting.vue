<!--
  - Copyright (c) 2022-2023, Terwer . All rights reserved.
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

<template>
  <el-form label-width="120px">
    <el-alert :title="apiTypeInfo + blogName" type="info" :closable="false" />
    <el-form-item :label="t('setting.blog.url')">
      <el-input v-model="home" :placeholder="props.cfg?.placeholder.homePlaceholder" />
    </el-form-item>

    <el-form-item :label="t('setting.blog.username')">
      <el-input v-model="username" :placeholder="props.cfg?.placeholder.usernamePlaceholder" />
    </el-form-item>

    <el-form-item :label="t('setting.blog.password')">
      <el-input
        v-model="password"
        type="password"
        show-password
        :placeholder="props.cfg?.placeholder.passwordPlaceholder"
      />
    </el-form-item>

    <el-form-item :label="t('setting.blog.apiurl')">
      <el-input v-model="apiUrl" :placeholder="props.cfg?.placeholder.apiUrlPlaceholder" />
    </el-form-item>

    <el-form-item :label="t('setting.blog.previewUrl')">
      <el-input v-model="previewUrl" :placeholder="props.cfg?.placeholder.previewUrlPlaceholder" />
    </el-form-item>

    <el-form-item :label="t('setting.blog.pageType')">
      <el-radio-group v-model="ptype" class="ml-4">
        <el-radio :label="0" size="large">Markdown</el-radio>
        <el-radio :label="1" size="large">HTML</el-radio>
      </el-radio-group>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" :loading="isLoading" @click="valiConf">
        {{ isLoading ? t("setting.blog.vali.ing") : t("setting.blog.vali") }}
      </el-button>
      <el-alert :title="t('setting.blog.vali.tip.metaweblog')" type="warning" :closable="false" v-if="!apiStatus" />
      <el-alert :title="t('setting.blog.vali.ok.metaweblog')" type="success" :closable="false" v-if="apiStatus" />
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="saveConf">{{ t("setting.blog.save") }} </el-button>
      <el-button>{{ t("setting.blog.cancel") }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue"
import { ElMessage } from "element-plus"
import { createAppLogger } from "~/src/utils/appLogger.ts"
import { MetaweblogConfig } from "~/src/adaptors/base/metaweblog/config/MetaweblogConfig.ts"
import { PageTypeEnum } from "zhi-blog-api"
import { useSettingStore } from "~/src/stores/useSettingStore.ts"
import { useVueI18n } from "~/src/composables/useVueI18n.ts"
import { JsonUtil, ObjectUtil } from "zhi-common"

const logger = createAppLogger("metaweblog-setting")

const { t } = useVueI18n()
let setting
const { getSetting, updateSetting, checkKeyExists, deleteKey } = useSettingStore()

const props = defineProps({
  apiType: {
    type: String,
    default: "",
  },
  cfg: {
    type: MetaweblogConfig,
    default: null,
  },
})

const ptypeMd = PageTypeEnum.Markdown.toString()

const home = ref("")
const apiUrl = ref("")
const previewUrl = ref("")
const username = ref("")
const password = ref("")
const ptype = ref(ptypeMd)

const isLoading = ref(false)
const apiStatus = ref(false)
const blogName = ref("")

const apiTypeInfo = ref(t("setting.blog.platform.support.metaweblog") + props.apiType + " ")

const valiConf = async () => {
  isLoading.value = true

  let errMsg
  try {
    // 先保存
    await saveConf(true)

    // 读取最新配置
    setting = await getSetting()
    const apiConf = setting[props.apiType]
    const cfg = JsonUtil.safeParse<MetaweblogConfig>(apiConf, {} as MetaweblogConfig)

    // const api = new API(props.apiType)
    // const usersBlogs = await api.getUsersBlogs()
    // if (usersBlogs && usersBlogs.length > 0) {
    //   const userBlog = usersBlogs[0]
    //
    //   cfg.blogName = userBlog.blogName
    //   blogName.value = userBlog.blogName
    //
    //   cfg.apiStatus = true
    //   apiStatus.value = true
    // } else {
    //   cfg.apiStatus = false
    //   apiStatus.value = false
    // }

    // 刷新状态
    setting[props.apiType] = JSON.stringify(cfg)
    await updateSetting(setting)
  } catch (e) {
    errMsg = e
    console.error(e)
  }

  if (!apiStatus.value) {
    ElMessage.error(t("setting.blog.vali.error") + "=>" + errMsg)
  } else {
    ElMessage.success(t("main.opt.success"))
  }

  isLoading.value = false

  logger.debug("Metaweblog通用Setting验证完毕")
}

const saveConf = async (hideTip) => {
  logger.debug("Metaweblog通用Setting保存配置")

  const cfg = props.cfg
  cfg.home = home.value
  cfg.username = username.value
  cfg.password = password.value
  cfg.apiUrl = apiUrl.value
  cfg.previewUrl = previewUrl.value
  cfg.blogName = blogName.value
  cfg.pageType = ptype.value as PageTypeEnum

  cfg.apiStatus = apiStatus.value

  setting[props.apiType] = JSON.stringify(cfg)
  await updateSetting(setting)

  if (hideTip !== true) {
    ElMessage.success(t("main.opt.success"))
  }
}

const initConf = async () => {
  logger.debug("Metaweblog通用Setting配置初始化")
  setting = await getSetting()
  const apiConf = setting[props.apiType]
  let conf = JsonUtil.safeParse<MetaweblogConfig>(apiConf, {} as MetaweblogConfig)
  // 如果没有配置。读取默认配置
  if (ObjectUtil.isEmptyObject(conf)) {
    conf = props.cfg
  }
  if (conf) {
    logger.debug("get setting conf=>", conf)

    home.value = conf.home
    apiUrl.value = conf.apiUrl
    previewUrl.value = conf.previewUrl
    username.value = conf.username
    password.value = conf.password
    blogName.value = conf.blogName
    ptype.value = conf.pageType

    apiStatus.value = conf.apiStatus
  }
}

onMounted(async () => {
  // 初始化
  await initConf()
})
</script>
