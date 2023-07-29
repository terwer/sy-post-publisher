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
import { useSiyuanDevice } from "~/src/composables/useSiyuanDevice.ts"
import { StrUtil } from "zhi-common"
import { BrowserUtil, SiyuanDevice } from "zhi-device"
import { createAppLogger } from "~/src/utils/appLogger.ts"

const logger = createAppLogger("widget-utils")

/**
 * 打开网页弹窗
 */
export const openBrowserWindow = (url: string, domain?: string, cookieCb?: any) => {
  const { isInSiyuanWidget } = useSiyuanDevice()

  if (isInSiyuanWidget()) {
    const isDev = false
    const isModel = false
    const isShow = !cookieCb
    doOpenBrowserWindow(url, undefined, undefined, isDev, isModel, isShow, domain, cookieCb)
  } else {
    window.open(url)
  }
}

/**
 * 打开新窗口
 *
 * 示例：
 *
 * ```
 * ## development
 * openBrowserWindow("https://www.baidu.com", undefined, undefined, true, false)
 * openBrowserWindow("https://www.baidu.com", { "key1": "value1", "key2": "value2" }, undefined, true, false)
 *
 * ## production
 * openBrowserWindow("https://www.baidu.com")
 * ```
 *
 * @param url - url
 * @param params - 参数
 * @param win - 父窗口
 * @param isDev - 是否打开开发者工具
 * @param modal - 是否模态
 * @param isShow - 是否显示
 * @param domain - 域名
 * @param cookieCallback - 窗口关闭回调
 */
const doOpenBrowserWindow = (
  url: string,
  params?: Record<string, string>,
  win?: any,
  isDev = false,
  modal = false,
  isShow = true,
  domain = "",
  cookieCallback = undefined
) => {
  try {
    if (StrUtil.isEmptyString(url)) {
      logger.error("Url cannot be empty")
      return
    }

    const { isInSiyuanWidget } = useSiyuanDevice()
    if (!BrowserUtil.isElectron() && !isInSiyuanWidget) {
      logger.info("BrowserWindow can ony be available in siyuan Electron environment")
      return
    }

    if (params) {
      Object.keys(params).forEach((key: string) => {
        const value = params[key]
        url = BrowserUtil.setUrlParameter(url, key, value)
      })
    }

    logger.info(StrUtil.f("Opening a new BrowserWindow from url => {0}", url))

    const mainWin = win ?? SiyuanDevice.siyuanWindow()
    const { app, BrowserWindow, getCurrentWindow } = mainWin.require("@electron/remote")
    const remote = mainWin.require("@electron/remote").require("@electron/remote/main")
    const mainWindow = getCurrentWindow()
    const newWindow = new BrowserWindow({
      parent: mainWindow,
      width: 900,
      height: 750,
      show: isShow,
      resizable: true,
      modal: modal,
      icon: SiyuanDevice.browserJoinPath(
        SiyuanDevice.siyuanWindow().siyuan.config.system.appDir,
        "stage",
        "icon-large.png"
      ),
      titleBarOverlay: {
        color: "#cccccca5",
        symbolColor: "black",
      },
      webPreferences: {
        nativeWindowOpen: true,
        nodeIntegration: true,
        webviewTag: true,
        webSecurity: false,
        contextIsolation: false,
      },
    })

    newWindow.webContents.userAgent = `SiYuan/${app.getVersion()} https://b3log.org/siyuan Electron`
    // 允许
    remote.enable(newWindow.webContents)
    if (isDev) {
      newWindow.webContents.openDevTools()
    }

    // 监听 close 事件
    newWindow.on("close", (evt: any) => {
      logger.info("窗口关闭事件触发")
    })
    newWindow.loadURL(url)

    // 读取指定域的所有 Cookie
    if (cookieCallback) {
      const readCookies = () => {
        // https://www.electronjs.org/zh/docs/latest/api/session
        const ses = newWindow.webContents.session
        ses.cookies
          .get({ domain })
          .then((cookies: any) => {
            logger.info(`读取cookie事件触发，准备读取 ${domain} 下的所有 Cookie`)
            cookieCallback(domain, cookies)
          })
          .catch((error: any) => {
            console.error(`读取 Cookie 失败：${error}`)
          })
      }
      readCookies()
      newWindow.hide()
      newWindow.close()
    }
  } catch (e) {
    logger.error("Open browser window failed", e)
  }
}
