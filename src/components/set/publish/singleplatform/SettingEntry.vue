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
import MetaweblogSetting from "~/src/components/set/publish/singleplatform/MetaweblogSetting.vue"
import BackPage from "~/src/components/common/BackPage.vue"
import { reactive } from "vue"
import { useRoute, useRouter } from "vue-router"
import { useVueI18n } from "~/src/composables/useVueI18n.ts"

// uses
const { t } = useVueI18n()
const router = useRouter()
const route = useRoute()
const { query } = useRoute()

// datas
const params = reactive(route.params)
const apiType = params.key as string
</script>

<template>
  <back-page title="平台统一设置">
    <metaweblog-setting :api-type="apiType" />
  </back-page>
</template>

<style scoped lang="stylus"></style>
