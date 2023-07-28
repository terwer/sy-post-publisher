import {
  AuthMode,
  DynamicConfig,
  PlatformType,
  SubPlatformType,
} from "~/src/components/set/publish/platform/dynamicConfig.ts"
import { svgIcons } from "~/src/utils/svgIcons.ts"

export const pre = {
  commonCfg: <DynamicConfig[]>[
    {
      platformType: PlatformType.Common,
      subPlatformType: SubPlatformType.Common_Zhihu,
      platformKey: "common_Zhihu",
      platformName: "知乎",
      platformIcon: svgIcons.iconIFZhihu,
      authMode: AuthMode.WEBSITE,
      isEnabled: false
    },
    {
      platformType: PlatformType.Common,
      subPlatformType: SubPlatformType.Common_Yuque,
      platformKey: "common_Yuque",
      platformName: "语雀",
      platformIcon: svgIcons.iconIFYuque,
      authMode: AuthMode.API,
      isEnabled: false
    },
  ],
  githubCfg: <DynamicConfig[]>[
    {
      platformType: PlatformType.Github,
      subPlatformType: SubPlatformType.Github_Hexo,
      platformKey: "github_Hexo",
      platformName: "Hexo",
      platformIcon: svgIcons.iconIFHexo,
      authMode: AuthMode.API,
      isEnabled: false
    },
    {
      platformType: PlatformType.Github,
      subPlatformType: SubPlatformType.Github_Hugo,
      platformKey: "github_Hugo",
      platformName: "Hugo",
      platformIcon: svgIcons.iconIFHugo,
      authMode: AuthMode.API,
      isEnabled: false
    },
    {
      platformType: PlatformType.Github,
      subPlatformType: SubPlatformType.Github_Vitepress,
      platformKey: "github_Vitepress",
      platformName: "Vitepress",
      platformIcon: svgIcons.iconIFVue,
      authMode: AuthMode.API,
      isEnabled: false
    },
    {
      platformType: PlatformType.Github,
      subPlatformType: SubPlatformType.Github_Nuxt,
      platformKey: "github_Nuxt",
      platformName: "Nuxt",
      platformIcon: svgIcons.iconIFNuxt,
      authMode: AuthMode.API,
      isEnabled: false
    },
  ],
  metaweblogCfg: <DynamicConfig[]>[
    {
      platformType: PlatformType.Metaweblog,
      subPlatformType: SubPlatformType.Metaweblog_Cnblogs,
      platformKey: "metaweblog_Cnblogs",
      platformName: "博客园",
      platformIcon: svgIcons.iconIFCnblogs,
      authMode: AuthMode.API,
      isEnabled: false
    },
    {
      platformType: PlatformType.Metaweblog,
      subPlatformType: SubPlatformType.Metaweblog_Typecho,
      platformKey: "metaweblog_Typecho",
      platformName: "Typecho",
      platformIcon: svgIcons.iconIFTypecho,
      authMode: AuthMode.API,
      isEnabled: false
    },
  ],
  wordpressCfg: <DynamicConfig[]>[
    {
      platformType: PlatformType.Wordpress,
      subPlatformType: SubPlatformType.Wordpress_Wordpress,
      platformKey: "wordpress_Wordpress",
      platformName: "Wordpress",
      platformIcon: svgIcons.iconIFWordpress,
      authMode: AuthMode.API,
      isEnabled: false
    },
  ],
}
