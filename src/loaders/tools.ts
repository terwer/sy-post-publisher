import { Utils } from "~/src/utils/utils"
import { AppInstance } from "~/src/appInstance.ts"
import { createAppLogger } from "~/src/utils/appLogger.ts"

/**
 * 初始化工具类
 *
 * @param appInstance - 应用实例
 */
export const initTools = async (appInstance: AppInstance) => {
  // logger
  appInstance.logger = createAppLogger("publisher-widget-app")

  // common
  appInstance.common = Utils.zhiCommon()

  // windowManager
  // window.zhi.windowManager.openBrowserWindow("https://www.baidu.com", undefined, undefined, true, false)
  // if (appInstance.deviceType === DeviceTypeEnum.DeviceType_Siyuan_MainWin) {
  //   const browserWindow = new appInstance.zhiElectron.ZhiBrowserWindow()
  //   browserWindow.init(appInstance.logger, appInstance.common)
  //   appInstance.windowManager = browserWindow.initBrowserWindow()
  // }
}
