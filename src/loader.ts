import { moduleBase } from "~/src/utils/constants.ts"
import { AppInstance } from "~/src/app-instance.ts"

export const initLibs = async (appInstance: AppInstance) => {
  // polyfills
  appInstance.fs = (await import(`${moduleBase}/polyfills/fs.js`))["default"]
  appInstance.path = (await import(`${moduleBase}/polyfills/path.js`))["default"]
  appInstance.importDep = async (moduleName) => {
    return await import(appInstance.path.join(moduleBase, moduleName))
  }

  // libs

  // zhi-device
  const zhiDevice = (await appInstance.importDep("./libs/zhi-device/index.js")) as any
  appInstance.zhiDevice = {
    DeviceDetection: zhiDevice["DeviceDetection"],
    SiyuanDevice: zhiDevice["SiyuanDevice"],
    DeviceTypeEnum: zhiDevice["DeviceTypeEnum"],
  }

  // zhi-env
  const zhiEnv = (await appInstance.importDep("./libs/zhi-env/index.js")) as any
  appInstance.zhiEnv = {
    Env: zhiEnv["Env"],
  }

  // zhi-log
  const zhiLog = (await appInstance.importDep("./libs/zhi-log/index.js")) as any
  appInstance.zhiLog = {
    LogFactory: zhiLog["LogFactory"],
    DefaultLogger: zhiLog["DefaultLogger"],
    crossChalk: zhiLog["crossChalk"],
  }

  // zhi-common
  const zhiCommon = (await appInstance.importDep("./libs/zhi-common/index.js")) as any
  appInstance.zhiCommon = {
    ZhiCommon: zhiCommon["ZhiCommon"],
    ZhiUtil: zhiCommon["ZhiUtil"],
  }

  // zhi-electron
  const zhiElectron = (await appInstance.importDep("./libs/zhi-electron/index.js")) as any
  appInstance.zhiElectron = {
    ZhiBrowserWindow: zhiElectron["ZhiBrowserWindow"],
  }

  // zhi-blog-api
  const zhiBlogApi = (await appInstance.importDep("./libs/zhi-blog-api/index.js")) as any
  appInstance.zhiBlogApi = {
    BlogConstants: zhiBlogApi["BlogConstants"],
    BlogTypeEnum: zhiBlogApi["BlogTypeEnum"],
    BlogApi: zhiBlogApi["BlogApi"],
    BlogAdaptor: zhiBlogApi["BlogAdaptor"],
  }

  // zhi-siyuan-api
  const zhiSiyuanApi = (await appInstance.importDep("./libs/zhi-siyuan-api/index.js")) as any
  appInstance.zhiSiyuanApi = {
    SiyuanConstants: zhiSiyuanApi["SiyuanConstants"],
    SiyuanConfig: zhiSiyuanApi["SiyuanConfig"],
    SiYuanApiAdaptor: zhiSiyuanApi["SiYuanApiAdaptor"],
    SiyuanKernelApi: zhiSiyuanApi["SiyuanKernelApi"],
  }
}
