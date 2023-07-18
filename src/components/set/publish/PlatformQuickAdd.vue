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
import { ElementPlus } from "@element-plus/icons-vue"
import { PlatformType } from "~/src/components/set/publish/platform/dynamicConfig.ts"
import { useRoute, useRouter } from "vue-router"
import BackPage from "~/src/components/common/BackPage.vue"
import { reactive } from "vue"
import { useVueI18n } from "~/src/composables/useVueI18n.ts"

// uses
const { t } = useVueI18n()
const router = useRouter()
const route = useRoute()

// datas
const params = reactive(route.params)

// methods
const handleAddPlatform = () => {
  const type = PlatformType.Common
  router.push({
    path: `/setting/platform/add/${type}`,
    query: {
      showBack: "true",
    },
  })
}
</script>

<template>
  <back-page :title="'新增平台 - ' + params.type">
    <el-card class="platform-add-card">
      <div class="platform-title">通用平台</div>
      <div class="platform-desc">
        目前支持的通用平台有：知乎、语雀、csdn等，点击图标快速添加，或者点击下方按钮自定义添加
      </div>
      <div class="icon-list">
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
      </div>
      <div class="add-action">
        <el-button type="primary" size="small" @click="handleAddPlatform">添加自定义通用平台对接</el-button>
      </div>
    </el-card>
  </back-page>
</template>

<style scoped lang="stylus"></style>
