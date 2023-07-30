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
      subPlatformType: SubPlatformType.Common_Yuque,
      platformKey: "common_Yuque",
      platformName: "语雀",
      platformIcon: svgIcons.iconIFYuque,
      authMode: AuthMode.API,
      isEnabled: false,
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
      isEnabled: false,
    },
    // {
    //   platformType: PlatformType.Github,
    //   subPlatformType: SubPlatformType.Github_Hugo,
    //   platformKey: "github_Hugo",
    //   platformName: "Hugo",
    //   platformIcon: svgIcons.iconIFHugo,
    //   authMode: AuthMode.API,
    //   isEnabled: false
    // },
    // {
    //   platformType: PlatformType.Github,
    //   subPlatformType: SubPlatformType.Github_Vitepress,
    //   platformKey: "github_Vitepress",
    //   platformName: "Vitepress",
    //   platformIcon: svgIcons.iconIFVue,
    //   authMode: AuthMode.API,
    //   isEnabled: false
    // },
    // {
    //   platformType: PlatformType.Github,
    //   subPlatformType: SubPlatformType.Github_Nuxt,
    //   platformKey: "github_Nuxt",
    //   platformName: "Nuxt",
    //   platformIcon: svgIcons.iconIFNuxt,
    //   authMode: AuthMode.API,
    //   isEnabled: false
    // },
  ],
  metaweblogCfg: <DynamicConfig[]>[
    {
      platformType: PlatformType.Metaweblog,
      subPlatformType: SubPlatformType.Metaweblog_Cnblogs,
      platformKey: "metaweblog_Cnblogs",
      platformName: "博客园",
      platformIcon: svgIcons.iconIFCnblogs,
      authMode: AuthMode.API,
      isEnabled: false,
    },
    {
      platformType: PlatformType.Metaweblog,
      subPlatformType: SubPlatformType.Metaweblog_Typecho,
      platformKey: "metaweblog_Typecho",
      platformName: "Typecho",
      platformIcon: svgIcons.iconIFTypecho,
      authMode: AuthMode.API,
      isEnabled: false,
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
      isEnabled: false,
    },
  ],
  customCfg: <DynamicConfig[]>[
    {
      platformType: PlatformType.Custom,
      subPlatformType: SubPlatformType.Custom_Zhihu,
      platformKey: "custom_Zhihu",
      platformName: "知乎",
      platformIcon: svgIcons.iconIFZhihu,
      authMode: AuthMode.WEBSITE,
      authUrl: "https://www.zhihu.com/signin",
      domain: "zhihu.com",
      isEnabled: false,
    },
    // CSDN 目前有CA验证
    // {
    //   platformType: PlatformType.Custom,
    //   subPlatformType: SubPlatformType.Custom_CSDN,
    //   platformKey: "custom_Csdn",
    //   platformName: "CSDN",
    //   platformIcon: svgIcons.iconIFCSDN,
    //   authMode: AuthMode.WEBSITE,
    //   authUrl: "https://passport.csdn.net/login",
    //   domain: "csdn.net",
    //   isEnabled: false,
    // },
    {
      platformType: PlatformType.Custom,
      subPlatformType: SubPlatformType.Custom_Jianshu,
      platformKey: "custom_Jianshu",
      platformName: "简书",
      platformIcon: svgIcons.iconIFJianshu,
      authMode: AuthMode.WEBSITE,
      authUrl: "https://www.jianshu.com/sign_in",
      domain: "jianshu.com",
      isEnabled: false,
    },
  ],
}
