import { Utils } from "~/src/utils/utils"
import { AppInstance } from "~/src/app-instance.ts"
import { createLogger } from "~/src/utils/simple-logger.ts"

/**
 * 初始化工具类
 *
 * @param appInstance - 应用实例
 */
export const initTools = async (appInstance: AppInstance) => {
  // deviceType
  appInstance.deviceType = appInstance.zhiDevice.DeviceDetection.getDevice()

  // logger
  appInstance.logger = createLogger("publisher-widget-app")

  // common
  appInstance.common = Utils.zhiCommon(appInstance)

  // windowManager
  // window.zhi.windowManager.openBrowserWindow("https://www.baidu.com", undefined, undefined, true, false)
  if (appInstance.deviceType === appInstance.zhiDevice.DeviceTypeEnum.DeviceType_Siyuan_MainWin) {
    const browserWindow = new appInstance.zhiElectron.ZhiBrowserWindow()
    browserWindow.init(appInstance.logger, appInstance.common)
    appInstance.windowManager = browserWindow.initBrowserWindow()
  }
}
