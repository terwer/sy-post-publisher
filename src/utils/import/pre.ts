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
      platformKey: "commonZhihu-1u5c1v",
      platformName: "知乎",
      platformIcon: svgIcons.iconIFZhihu,
      authMode: AuthMode.WEBSITE,
      isEnabled: false
    },
  ],
  githubCfg: <DynamicConfig[]>[
    {
      platformType: PlatformType.Github,
      subPlatformType: SubPlatformType.Github_Hexo,
      platformKey: "githubHexo",
      platformName: "Hexo",
      platformIcon: svgIcons.iconIFHexo,
    },
    {
      platformType: PlatformType.Github,
      subPlatformType: SubPlatformType.Github_Hugo,
      platformKey: "githubHugo-zdlc6l",
      platformName: "Hugo",
      platformIcon: svgIcons.iconIFHugo,
    },
    {
      platformType: PlatformType.Github,
      subPlatformType: SubPlatformType.Github_Vitepress,
      platformKey: "githubVitepress-mhxj3",
      platformName: "Vitepress",
      platformIcon: svgIcons.iconIFVue,
    },
    {
      platformType: PlatformType.Github,
      subPlatformType: SubPlatformType.Github_Nuxt,
      platformKey: "githubNuxt-z1xcb7x",
      platformName: "Nuxt content",
      platformIcon: svgIcons.iconIFNuxt,
    },
  ],
  metaweblogCfg: <DynamicConfig[]>[
    {
      platformType: PlatformType.Metaweblog,
      subPlatformType: SubPlatformType.Metaweblog_Cnblogs,
      platformKey: "Cnblogs",
      platformName: "Cnblogs",
      platformIcon: svgIcons.iconIFCnblogs,
    },
    {
      platformType: PlatformType.Metaweblog,
      subPlatformType: SubPlatformType.Metaweblog_Typecho,
      platformKey: "metaweblog-22pamt",
      platformName: "Typecho",
      platformIcon: svgIcons.iconIFTypecho,
    },
  ],
  wordpressCfg: <DynamicConfig[]>[
    {
      platformType: PlatformType.Wordpress,
      subPlatformType: SubPlatformType.Wordpress_Wordpress,
      platformKey: "Wordpress",
      platformName: "Wordpress",
      platformIcon: svgIcons.iconIFWordpress,
    },
  ],
}
