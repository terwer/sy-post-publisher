/*
 * Copyright (c) 2023, Terwer . All rights reserved.
 * DO NOT ALTER OR REMOVE COPYRIGHT NOTICES OR THIS FILE HEADER.
 *
 * This code is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License version 2 only, as
 * published by the Free Software Foundation.  Terwer designates this
 * particular file as subject to the "Classpath" exception as provided
 * by Terwer in the LICENSE file that accompanied this code.
 *
 * This code is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * version 2 for more details (a copy is included in the LICENSE file that
 * accompanied this code).
 *
 * You should have received a copy of the GNU General Public License version
 * 2 along with this work; if not, write to the Free Software Foundation,
 * Inc., 51 Franklin St, Fifth Floor, Boston, MA 02110-1301 USA.
 *
 * Please contact Terwer, Shenzhen, Guangdong, China, youweics@163.com
 * or visit www.terwer.space if you need additional information or have any
 * questions.
 */

import { YamlConvertAdaptor } from "~/src/components/set/publish/platform/yamlConvertAdaptor.ts"
import idUtil from "~/src/utils/idUtil.ts"
import { StrUtil } from "zhi-common"

export class DynamicConfig {
  /**
   * 动态平台类型(通用类型)
   */
  platformType: PlatformType

  /**
   * 子平台类型(细分子类型)
   *
   * @since 0.1.0+
   */
  subPlatformType?: SubPlatformType

  /**
   * 平台Key
   */
  platformKey: string

  /**
   * 平台名称
   */
  platformName: string

  /**
   * 平台图标(svg代码)
   *
   * @since 0.9.0+
   */
  platformIcon?: string

  /**
   * 是否授权
   */
  isEnabled: boolean

  /**
   * 是否授权
   */
  isAuth: boolean

  /**
   * 授权模式
   */
  authMode: AuthMode

  /**
   * YAML转换器
   */
  yamlConverter?: YamlConvertAdaptor

  constructor(
    platformType: PlatformType,
    platformKey: string,
    platformName: string,
    subPlatformType?: SubPlatformType,
    platformIcon?: string,
    yamlConverter?: YamlConvertAdaptor
  ) {
    this.platformType = platformType
    this.platformKey = platformKey
    this.platformName = platformName
    this.isAuth = false
    this.isEnabled = false
    this.authMode = AuthMode.API

    this.subPlatformType = subPlatformType
    this.platformIcon = platformIcon
    this.yamlConverter = yamlConverter
  }
}

/**
 * 授权模式
 */
export enum AuthMode {
  API = "api",
  WEBSITE = "web",
}

/**
 * 动态平台类型枚举
 */
export enum PlatformType {
  /**
   * Metaweblog
   */
  Metaweblog = "Metaweblog",

  /**
   * WordPress
   */
  Wordpress = "Wordpress",

  /**
   * GitHub(Hugo、Hexo、Jekyll、Vuepress、Vitepress、Nuxt content、Next.js)
   */
  Github = "Github",

  /**
   * 通用平台(zhihu)
   */
  Common = "Common",

  /**
   * 自定义
   */
  Custom = "Custom",
}

/**
 * 平台子类型
 *
 * @since 0.1.0+
 * @author terwer
 */
export enum SubPlatformType {
  // Common
  Common_Zhihu = "Zhihu",
  Common_CSDN = "CSDN",
  Common_Yuque = "Yuque",

  // Github 子平台
  Github_Hugo = "Hugo",
  Github_Hexo = "Hexo",
  Github_Jekyll = "Jekyll",
  Github_Vuepress = "Vuepress",
  Github_Vitepress = "Vitepress",
  Github_Nuxt = "Nuxt",
  Github_Next = "Next",

  // Metaweblog
  Metaweblog_Cnblogs = "Cnblogs",
  Metaweblog_Typecho = "Typecho",

  // WordPress
  Wordpress_Wordpress = "Wordpress",

  // Custom
  Custom_Custom = "Custom",

  NONE = "none",
}

/**
 * 动态配置类型封装
 */
export interface DynamicJsonCfg {
  totalCfg: DynamicConfig[]
  commonCfg: DynamicConfig[]
  githubCfg: DynamicConfig[]
  metaweblogCfg: DynamicConfig[]
  wordpressCfg: DynamicConfig[]
  customCfg: DynamicConfig[]
}

/**
 * 获取子平台列表
 */
export function getSubtypeList(ptype: PlatformType): SubPlatformType[] {
  const subtypeList: SubPlatformType[] = []

  switch (ptype) {
    case PlatformType.Common:
      subtypeList.push(SubPlatformType.Common_Zhihu)
      subtypeList.push(SubPlatformType.Common_CSDN)
      subtypeList.push(SubPlatformType.Common_Yuque)
      break
    case PlatformType.Github:
      subtypeList.push(SubPlatformType.Github_Hexo)
      subtypeList.push(SubPlatformType.Github_Hugo)
      subtypeList.push(SubPlatformType.Github_Jekyll)
      subtypeList.push(SubPlatformType.Github_Vuepress)
      subtypeList.push(SubPlatformType.Github_Vitepress)
      subtypeList.push(SubPlatformType.Github_Nuxt)
      subtypeList.push(SubPlatformType.Github_Next)
      break
    case PlatformType.Metaweblog:
      subtypeList.push(SubPlatformType.Metaweblog_Cnblogs)
      subtypeList.push(SubPlatformType.Metaweblog_Typecho)
      break
    case PlatformType.Wordpress:
      subtypeList.push(SubPlatformType.Wordpress_Wordpress)
      break
    case PlatformType.Custom:
      subtypeList.push(SubPlatformType.Custom_Custom)
      break
    default:
      break
  }

  return subtypeList
}

/**
 * 设置动态平台JSON配置
 *
 * @param dynamicConfigArray
 */
export function setDynamicJsonCfg(dynamicConfigArray: DynamicConfig[]): DynamicJsonCfg {
  const totalCfg: DynamicConfig[] = dynamicConfigArray
  const commonCfg: DynamicConfig[] = []
  const githubCfg: DynamicConfig[] = []
  const metaweblogCfg: DynamicConfig[] = []
  const wordpressCfg: DynamicConfig[] = []
  const customCfg: DynamicConfig[] = []

  // 按照类型组装便于后面数据使用
  totalCfg.forEach((item) => {
    switch (item.platformType) {
      case PlatformType.Common:
        commonCfg.push(item)
        break
      case PlatformType.Github:
        githubCfg.push(item)
        break
      case PlatformType.Metaweblog:
        metaweblogCfg.push(item)
        break
      case PlatformType.Wordpress:
        wordpressCfg.push(item)
        break
      case PlatformType.Custom:
        customCfg.push(item)
        break
      default:
        break
    }
  })

  const dynamicJsonCfg: DynamicJsonCfg = {
    totalCfg,
    commonCfg,
    githubCfg,
    metaweblogCfg,
    wordpressCfg,
    customCfg
  }

  return dynamicJsonCfg
}

// =====================
// 动态平台key规则
// =====================
/**
 * 生成新的平台key
 *
 * 平台与ID之间用-分割
 * 平台与子平台直接用_分割
 * @param ptype 平台类型
 * @param subtype 子平台类型
 */
export function getNewPlatformKey(ptype: PlatformType, subtype: SubPlatformType): string {
  let ret
  const newId = idUtil.newID()
  ret = ptype.toLowerCase()

  if (!StrUtil.isEmptyString(subtype) && SubPlatformType.NONE !== subtype) {
    ret = [ret, StrUtil.upperFirst(subtype)].join("")
  }
  return [ret, "-", newId].join("")
}

/**
 * 检测动态平台key是否重复
 */
export function isDynamicKeyExists(dynamicConfigArray: DynamicConfig[], key: string): boolean {
  let flag = false
  for (let i = 0; i < dynamicConfigArray.length; i++) {
    if (dynamicConfigArray[i].platformKey === key) {
      flag = true
      break
    }
  }
  return flag
}

// =====================
// 动态平台开关key规则
// =====================
interface SwitchItem {
  switchKey: string
  switchValue: boolean
}

export function getDynSwitchKey(platformKey: string): string {
  return "switch-" + platformKey
}

/**
 * 平台开关启用状态值
 * @param platformKey
 */
export function getDynSwitchActive(platformKey: string): string {
  return platformKey + "_true"
}

/**
 * 平台开关禁用状态值
 * @param platformKey
 */
export function getDynSwitchInactive(platformKey: string): string {
  return platformKey + "_false"
}

/**
 * 组装Switch显示值
 * @param switchItem 开关
 */
export function getDynSwitchModelValue(switchItem: SwitchItem): string {
  return switchItem.switchKey + "_" + switchItem.switchValue.toString()
}

/**
 * 解析选中项
 * @param selectedText 选中的值
 */
export function getSwitchItem(selectedText: string): SwitchItem {
  const valArr = selectedText.split("_")
  const switchKey = getDynSwitchKey(valArr[0])
  const switchStatus = valArr[1] === "true"

  return {
    switchKey,
    switchValue: switchStatus,
  }
}

// =====================
// 动态平台文章ID规则
// =====================
/**
 * 获取动态文章ID的key
 * @param platformKey
 */
export function getDynPostidKey(platformKey: string): string {
  return "custom-" + platformKey + "-post-id"
}

// ======================
// 动态平台Object对象初始化
// ======================
/**
 * 根据平台key获取YAML转换器
 * @param platformKey
 */
export const getDynYamlConverterAdaptor = (platformKey: string): YamlConvertAdaptor => {
  const yamlConverter = new YamlConvertAdaptor()
  if (platformKey.includes("-")) {
    const typeArr = platformKey.split("-")
    if (typeArr.length > 0) {
      const ptype = typeArr[0].toLowerCase()

      // if (ptype.includes(SubPlatformType.Github_Vuepress.toLowerCase())) {
      //   yamlConverter = new VuepressYamlConvertAdaptor()
      // } else if (ptype.includes(SubPlatformType.Github_Hugo.toLowerCase())) {
      //   yamlConverter = new HugoYamlConverterAdaptor()
      // } else if (ptype.includes(SubPlatformType.Github_Hexo.toLowerCase())) {
      //   yamlConverter = new HexoYamlConverterAdaptor()
      // } else if (ptype.includes(SubPlatformType.Github_Jekyll.toLowerCase())) {
      //   yamlConverter = new JekyllYamlConverterAdaptor()
      // } else if (ptype.includes(SubPlatformType.Github_Vitepress.toLowerCase())) {
      //   yamlConverter = new VitepressYamlConverterAdaptor()
      // } else if (ptype.includes(SubPlatformType.Github_Nuxt.toLowerCase())) {
      //   yamlConverter = new NuxtYamlConverterAdaptor()
      // } else if (ptype.includes(SubPlatformType.Github_Next.toLowerCase())) {
      //   yamlConverter = new NextYamlConvertAdaptor()
      // }
    }
  }

  return yamlConverter
}
