var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// ../zhi-device/dist/index.js
var g = Object.defineProperty;
var P = (a, e, t) => e in a ? g(a, e, { enumerable: true, configurable: true, writable: true, value: t }) : a[e] = t;
var r = (a, e, t) => (P(a, typeof e != "symbol" ? e + "" : e, t), t);
var u = class {
  /**
   * 检测是否运行在Chrome插件中
   */
  static isInChromeExtension() {
    return u.isInBrowser ? window.location.href.indexOf("chrome-extension://") > -1 : false;
  }
};
var i = u;
r(i, "isNode", typeof process < "u"), /**
* 是否在浏览器环境
*/
r(i, "isInBrowser", typeof window < "u"), /**
* 浏览器路径分隔符
*/
r(i, "BrowserSeperator", "/"), /**
* 是否是Electron环境
*/
r(i, "isElectron", () => !u.isInBrowser || !window.navigator || !window.navigator.userAgent ? false : /Electron/.test(window.navigator.userAgent)), /**
* 是否有Node环境，目前包括 Electron 和 Node
*/
r(i, "hasNodeEnv", () => u.isElectron() || u.isNode), /**
* 获取url参数
*
* @param sParam - 参数
*/
r(i, "getQueryString", (e) => {
  if (!u.isInBrowser)
    return "";
  const n = window.location.search.substring(1).split("&");
  for (let s = 0; s < n.length; s++) {
    const c = n[s].split("=");
    if (c[0] === e)
      return c[1];
  }
  return "";
}), /**
* 替换 URL 的参数
* 思路：
* 1. 使用了 URLSearchParams 对象来解析和构建 URL 查询参数。
*
* 2. 在处理包含 hash 片段的 URL 时使用了 split 函数将 URL 分成两部分：基本 URL 和 hash 片段。
*
* 3. 然后，再次使用 split 函数将基本 URL 分成两部分：路径和查询参数。
*
* 4. 将查询参数转换为 URLSearchParams 对象，然后设置指定的参数名和值。
*
* 5. 最后，使用 toString 函数将查询参数转换为字符串，并将其与路径组合成新的基本 URL。如果 URL 包含 hash 片段，则将其添加到新的基本 URL 中。
*
* @param url - 链接地址
* @param paramName - 参数名
* @param paramValue - 参数值
*/
r(i, "replaceUrlParam", (e, t, n) => {
  n == null && (n = "");
  const s = new RegExp("\\b(" + t + "=).*?(&|#|$)");
  if (e.search(s) >= 0)
    return e.replace(s, "$1" + n + "$2");
  const [c, d] = e.split("#"), [y, b] = c.split("?"), l = new URLSearchParams(b);
  l.set(t, n);
  const m = l.toString(), f = y + (m ? "?" + m : "");
  return d ? f + "#" + d : f;
}), /**
* 设置url参数
*
* @param urlstring - url
* @param key - key
* @param value - value
*/
r(i, "setUrlParameter", (e, t, n) => {
  if (e.includes(t))
    return u.replaceUrlParam(e, t, n);
  const s = e.split("#");
  let c = s[0];
  const d = s[1];
  return c.includes("?") ? c += `&${t}=${n}` : c += `?${t}=${n}`, d && (c += "#" + d), c;
}), /**
* 重新加载指定tab
*
* @param tabname - tabname
* @param t - 延迟时间
*/
r(i, "reloadTabPage", (e, t = 200) => {
  setTimeout(function() {
    if (u.isInBrowser) {
      const n = window.location.href;
      window.location.href = u.setUrlParameter(n, "tab", e);
    }
  }, t);
}), /**
* 刷新当前tab页面
*/
r(i, "reloadPage", () => {
  setTimeout(function() {
    u.isInBrowser && window.location.reload();
  }, 200);
}), /**
* 刷新当前tab页面
*
* @param msg - 消息提示
* @param cb - 回调
*/
r(i, "reloadPageWithMessageCallback", (e, t) => {
  t && t(e), setTimeout(function() {
    u.isInBrowser && window.location.reload();
  }, 200);
});
var o = /* @__PURE__ */ ((a) => (a.BasePathType_Appearance = "Appearance", a.BasePathType_Data = "Data", a.BasePathType_Themes = "Themes", a.BasePathType_ZhiTheme = "ZhiTheme", a.BasePathType_None = "None", a))(o || {});
var h = class {
  /**
   * 检测是否运行在思源打开的浏览器中
   */
  static isInSiyuanBrowser() {
    return i.isInBrowser ? typeof window.siyuan < "u" && typeof window.Lute < "u" : false;
  }
  /**
   * 思源笔记 window 对象
   */
  static siyuanWindow() {
    let e;
    return this.isInSiyuanWidget() ? e = parent.window : this.isInSiyuanNewWin() || this.isInSiyuanBrowser() || typeof window < "u" ? e = window : e = void 0, e;
  }
  // =========================
  // require end
  // =========================
  // =========================
  // import start
  // =========================
  /**
   * 引入json
   *
   * @param jsPath - js相对路径全路径
   * @param type - 类型
   */
  static async importJs(e, t) {
    let n = e;
    switch (t) {
      case o.BasePathType_Appearance:
        n = this.browserJoinPath(this.siyuanAppearanceRelativePath(), e);
        break;
      case o.BasePathType_Data:
        n = this.browserJoinPath(this.siyuanDataRelativePath(), e);
        break;
      case o.BasePathType_Themes:
        n = this.browserJoinPath(this.siyuanThemeRelativePath(), e);
        break;
      case o.BasePathType_ZhiTheme:
        n = this.browserJoinPath(this.zhiThemeRelativePath(), e);
        break;
      default:
        throw new Error("type must be provided");
    }
    const { default: s } = await import(
      /* @vite-ignore */
      n
    );
    return s;
  }
  /**
   * 引入json
   *
   * @param jsonPath - json相对路径全路径
   * @param type - 类型
   */
  // public static async importJson(jsonPath: string, type: BasePathTypeEnum) {
  //   let fullJsonPath = jsonPath
  //   switch (type) {
  //     case BasePathTypeEnum.BasePathType_Appearance:
  //       fullJsonPath = this.browserJoinPath(this.siyuanAppearanceRelativePath(), jsonPath)
  //       break
  //     case BasePathTypeEnum.BasePathType_Data:
  //       fullJsonPath = this.browserJoinPath(this.siyuanDataRelativePath(), jsonPath)
  //       break
  //     case BasePathTypeEnum.BasePathType_Themes:
  //       fullJsonPath = this.browserJoinPath(this.siyuanThemeRelativePath(), jsonPath)
  //       break
  //     case BasePathTypeEnum.BasePathType_ZhiTheme:
  //       fullJsonPath = this.browserJoinPath(this.zhiThemeRelativePath(), jsonPath)
  //       break
  //     default:
  //       throw new Error("type must be provided")
  //   }
  //
  //   const { default: data } = await import(/* @vite-ignore */ fullJsonPath, { assert: { type: "json" } })
  //   return data
  // }
  /**
   * 引入 json - 以 data 为基本路径
   *
   * @param jsonPath - 相对于 data 的相对路径
   */
  // public static async importDataJson(jsonPath: string) {
  //   return await this.importJson(jsonPath, BasePathTypeEnum.BasePathType_Data)
  // }
  /**
   * 引入 json - 以 appearance 为基本路径
   *
   * @param jsonPath - 相对于 appearance 的相对路径
   */
  // public static async importAppearanceJson(jsonPath: string) {
  //   return await this.importJson(jsonPath, BasePathTypeEnum.BasePathType_Appearance)
  // }
  /**
   * 引入 json - 以 themes 为基本路径
   *
   * @param jsonPath - 相对于 themes 的相对路径
   */
  // public static async importThemesJson(jsonPath: string) {
  //   return await this.importJson(jsonPath, BasePathTypeEnum.BasePathType_Themes)
  // }
  /**
   * 引入 zhi 主题的 json - 以 zhi 主题 的根路径为基本路径
   *
   * @param jsonPath - 相对于 zhi 主题根路径的相对路径
   */
  // public static async importZhiThemeJson(jsonPath: string) {
  //   return await this.importJson(jsonPath, BasePathTypeEnum.BasePathType_ZhiTheme)
  // }
  /**
   * 引入 zhi 主题的 js - 以 zhi 主题 的根路径为基本路径
   *
   * @param jsPath - 相对于 zhi 主题根路径的相对路径
   */
  static async importZhiThemeJs(e) {
    return await this.importJs(e, o.BasePathType_ZhiTheme);
  }
  // =========================
  // import start
  // =========================
  /**
   * 路径拼接
   *
   * @param paths - 路径数组
   */
  static joinPath(...e) {
    if (i.hasNodeEnv()) {
      const t = this.requireLib("path");
      if (t)
        return t.join(...e);
    }
    return this.browserJoinPath(...e);
  }
  static browserJoinPath(...e) {
    return e.join(i.BrowserSeperator);
  }
  /**
   * 思源笔记 conf 目录
   */
  static siyuanConfPath() {
    const e = this.siyuanWindow();
    if (!e)
      throw new Error("Not in siyuan env");
    return e.siyuan.config.system.confDir;
  }
  /**
   * 思源笔记 data 目录
   */
  static siyuanDataPath() {
    const e = this.siyuanWindow();
    if (!e)
      throw new Error("Not in siyuan env");
    return e.siyuan.config.system.dataDir;
  }
  /**
   * 思源笔记 data 目录-相对路径
   */
  static siyuanDataRelativePath() {
    if (!this.siyuanWindow())
      throw new Error("Not in siyuan env");
    return "";
  }
  /**
   * 思源笔记 appearance 目录
   */
  static siyuanAppearancePath() {
    return this.joinPath(this.siyuanConfPath(), "appearance");
  }
  /**
   * 思源笔记 appearance 目录-相对路径
   */
  static siyuanAppearanceRelativePath() {
    if (!this.siyuanWindow())
      throw new Error("Not in siyuan env");
    return this.browserJoinPath("", "appearance");
  }
  /**
   * 思源笔记 themes 目录-绝对路径
   *
   * 注意: 如果是非 electron 和 Node 环境，这里返回的是浏览器的路径，不是物理路径
   * 如果使用物理路径，请调用 siyuanAppearancePath 或者 siyuanDataPath
   *
   * @author terwer
   * @since 0.1.0
   */
  static siyuanThemePath() {
    if (i.hasNodeEnv())
      return this.joinPath(this.siyuanAppearancePath(), "themes");
    {
      const e = this.siyuanWindow();
      if (!e)
        throw new Error("Not in siyuan env");
      return this.joinPath(e.location.origin, "appearance", "themes");
    }
  }
  /**
   * 思源笔记 themes 目录-相对路径
   */
  static siyuanThemeRelativePath() {
    if (!this.siyuanWindow())
      throw new Error("Not in siyuan env");
    return this.browserJoinPath("", "appearance", "themes");
  }
  /**
   * zhi 主题目录 - 绝对路径
   */
  static zhiThemePath() {
    return this.joinPath(this.siyuanThemePath(), "zhi");
  }
  /**
   * zhi 主题目录 - 相对路径
   */
  static zhiThemeRelativePath() {
    return this.browserJoinPath(this.siyuanThemeRelativePath(), "zhi");
  }
};
var w = h;
r(w, "isInSiyuanWidget", () => i.isInBrowser ? window.frameElement != null && window.frameElement.parentElement != null && window.frameElement.parentElement.parentElement != null && window.frameElement.parentElement.parentElement.getAttribute("data-node-id") !== "" : false), /**
* 思源笔记新窗口
*
* @deprecated window.terwer 判断方式已废弃，建议以后打开新窗口注入 window.siyuanNewWin ，这样语义会更容易理解
* @author terwer
* @version 0.1.0
* @since 0.0.1
*/
r(w, "isInSiyuanNewWin", () => !i.isInBrowser || !i.isElectron() ? false : typeof window.terwer < "u" || typeof window.siyuanNewWin < "u"), // =========================
// require start
// =========================
/**
 * 引入依赖
 *
 * @param libpath - 依赖全路径
 * @param abs - 可选，是否使用觉得路径，默认是 true ， 启用之后 type参数无效
 * @param type - 可选，以谁的基本路径为准
 */
r(w, "requireLib", (e, t = true, n = o.BasePathType_None) => {
  if (!i.hasNodeEnv())
    throw new Error("require ony works on node env");
  let s = e;
  if (!t)
    switch (n) {
      case o.BasePathType_Appearance:
        s = h.joinPath(h.siyuanAppearancePath(), e);
        break;
      case o.BasePathType_Data:
        s = h.joinPath(h.siyuanDataPath(), e);
        break;
      case o.BasePathType_Themes:
        s = h.joinPath(h.siyuanAppearancePath(), "themes", e);
        break;
      case o.BasePathType_ZhiTheme:
        s = h.joinPath(h.siyuanAppearancePath(), "themes", "zhi", e);
        break;
      default:
        throw new Error("type must be provided when not use absolute path");
    }
  const c = h.siyuanWindow();
  if (!c)
    return __require(s);
  if (typeof c.require < "u")
    return c.require(s);
}), /**
* 引入依赖，以 data 的基本路径为准
*
* @param libpath - 相对于 appearance 的相对路径
*/
r(w, "requireAppearanceLib", (e) => h.requireLib(e, false, o.BasePathType_Appearance)), /**
* 引入依赖，以 data 的基本路径为准
*
* @param libpath - 相对于 data 的相对路径
*/
r(w, "requireDataLib", (e) => h.requireLib(e, false, o.BasePathType_Data)), /**
* 引入依赖，以 theme 的基本路径为准
*
* @param libpath - 相对于 theme 的相对路径
*/
r(w, "requireThemesLib", (e) => h.requireLib(e, false, o.BasePathType_Themes)), /**
* 引入依赖，以 ZhiTheme 的基本路径为准
*
* @param libpath - 相对于 ZhiTheme 的相对路径
*/
r(w, "requireZhiThemeLib", (e) => h.requireLib(e, false, o.BasePathType_ZhiTheme));

// src/lib/browser-window/WindowManager.ts
var WindowManager = class {
  logger;
  common;
  init(logger, common) {
    this.logger = logger;
    this.common = common;
  }
  /**
   * 打开新窗口
   *
   * 示例：
   *
   * ```
   * ## development
   * windowManager.openBrowserWindow("https://www.baidu.com", undefined, undefined, true, false)
   * windowManager.openBrowserWindow("https://www.baidu.com", { "key1": "value1", "key2": "value2" }, undefined, true, false)
   *
   * ## production
   * windowManager.openBrowserWindow("https://www.baidu.com")
   * ```
   *
   * @param url - url
   * @param params - 参数
   * @param win - 父窗口
   * @param isDev - 是否打开开发者工具
   * @param modal - 是否模态
   */
  openBrowserWindow(url, params, win, isDev = false, modal = false) {
    try {
      if (this.common.strUtil.isEmptyString(url)) {
        this.logger.error("Url cannot be empty");
        return;
      }
      if (!i.isElectron()) {
        this.logger.info("BrowserWindow can ony be available in siyuan Electron environment");
        return;
      }
      if (params) {
        Object.keys(params).forEach((key) => {
          const value = params[key];
          url = i.setUrlParameter(url, key, value);
        });
      }
      this.logger.info(this.common.strUtil.f("Opening a new BrowserWindow from url => {0}", url));
      const mainWin = win ?? w.siyuanWindow();
      const { app, BrowserWindow, getCurrentWindow } = mainWin.require("@electron/remote");
      const remote = mainWin.require("@electron/remote").require("@electron/remote/main");
      const mainWindow = getCurrentWindow();
      const newWindow = new BrowserWindow({
        parent: mainWindow,
        width: 900,
        height: 750,
        resizable: true,
        modal,
        icon: w.browserJoinPath(
          w.siyuanWindow().siyuan.config.system.appDir,
          "stage",
          "icon-large.png"
        ),
        titleBarOverlay: {
          color: "#cccccca5",
          symbolColor: "black"
        },
        webPreferences: {
          nativeWindowOpen: true,
          nodeIntegration: true,
          webviewTag: true,
          webSecurity: false,
          contextIsolation: false
        }
      });
      newWindow.webContents.userAgent = `SiYuan/${app.getVersion()} https://b3log.org/siyuan Electron`;
      remote.enable(newWindow.webContents);
      if (isDev) {
        newWindow.webContents.openDevTools();
      }
      newWindow.loadURL(url);
    } catch (e) {
      this.logger.error("Open browser window failed", e);
    }
  }
};
var WindowManager_default = WindowManager;

// src/lib/browser-window/index.ts
var ZhiBrowserWindow = class {
  logger;
  windowManager;
  constructor() {
    this.windowManager = new WindowManager_default();
  }
  init(logger, common) {
    this.logger = logger;
    this.windowManager.init(logger, common);
  }
  /**
   * 挂载 BrowserWindow
   *
   * @author terwer
   * @since 1.0.0
   */
  initBrowserWindow() {
    const win = w.siyuanWindow();
    win.zhi = win.zhi ?? {};
    win.zhi.windowManager = this.windowManager;
    this.logger.info("zhiWindow inited");
    return this.windowManager;
  }
};
var browser_window_default = ZhiBrowserWindow;
export {
  browser_window_default as ZhiBrowserWindow
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vLi4vLi4vemhpLWZyYW1ld29yay96aGkvbGlicy96aGktZGV2aWNlL2Rpc3QvaW5kZXguanMiLCAiLi4vLi4vLi4vLi4vLi4vemhpLWZyYW1ld29yay96aGkvbGlicy96aGktZWxlY3Ryb24vc3JjL2xpYi9icm93c2VyLXdpbmRvdy9XaW5kb3dNYW5hZ2VyLnRzIiwgIi4uLy4uLy4uLy4uLy4uL3poaS1mcmFtZXdvcmsvemhpL2xpYnMvemhpLWVsZWN0cm9uL3NyYy9saWIvYnJvd3Nlci13aW5kb3cvaW5kZXgudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbInZhciBnID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xudmFyIFAgPSAoYSwgZSwgdCkgPT4gZSBpbiBhID8gZyhhLCBlLCB7IGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAsIHZhbHVlOiB0IH0pIDogYVtlXSA9IHQ7XG52YXIgciA9IChhLCBlLCB0KSA9PiAoUChhLCB0eXBlb2YgZSAhPSBcInN5bWJvbFwiID8gZSArIFwiXCIgOiBlLCB0KSwgdCk7XG5jb25zdCB1ID0gY2xhc3Mge1xuICAvKipcbiAgICogXHU2OEMwXHU2RDRCXHU2NjJGXHU1NDI2XHU4RkQwXHU4ODRDXHU1NzI4Q2hyb21lXHU2M0QyXHU0RUY2XHU0RTJEXG4gICAqL1xuICBzdGF0aWMgaXNJbkNocm9tZUV4dGVuc2lvbigpIHtcbiAgICByZXR1cm4gdS5pc0luQnJvd3NlciA/IHdpbmRvdy5sb2NhdGlvbi5ocmVmLmluZGV4T2YoXCJjaHJvbWUtZXh0ZW5zaW9uOi8vXCIpID4gLTEgOiAhMTtcbiAgfVxufTtcbmxldCBpID0gdTtcbi8qKlxuICogXHU2NjJGXHU1NDI2XHU1NzI4XHU2RDRGXHU4OUM4XHU1NjY4XHU3M0FGXHU1ODgzXG4gKi9cbnIoaSwgXCJpc05vZGVcIiwgdHlwZW9mIHByb2Nlc3MgPCBcInVcIiksIC8qKlxuICogXHU2NjJGXHU1NDI2XHU1NzI4XHU2RDRGXHU4OUM4XHU1NjY4XHU3M0FGXHU1ODgzXG4gKi9cbnIoaSwgXCJpc0luQnJvd3NlclwiLCB0eXBlb2Ygd2luZG93IDwgXCJ1XCIpLCAvKipcbiAqIFx1NkQ0Rlx1ODlDOFx1NTY2OFx1OERFRlx1NUY4NFx1NTIwNlx1OTY5NFx1N0IyNlxuICovXG5yKGksIFwiQnJvd3NlclNlcGVyYXRvclwiLCBcIi9cIiksIC8qKlxuICogXHU2NjJGXHU1NDI2XHU2NjJGRWxlY3Ryb25cdTczQUZcdTU4ODNcbiAqL1xucihpLCBcImlzRWxlY3Ryb25cIiwgKCkgPT4gIXUuaXNJbkJyb3dzZXIgfHwgIXdpbmRvdy5uYXZpZ2F0b3IgfHwgIXdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50ID8gITEgOiAvRWxlY3Ryb24vLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpKSwgLyoqXG4gKiBcdTY2MkZcdTU0MjZcdTY3MDlOb2RlXHU3M0FGXHU1ODgzXHVGRjBDXHU3NkVFXHU1MjREXHU1MzA1XHU2MkVDIEVsZWN0cm9uIFx1NTQ4QyBOb2RlXG4gKi9cbnIoaSwgXCJoYXNOb2RlRW52XCIsICgpID0+IHUuaXNFbGVjdHJvbigpIHx8IHUuaXNOb2RlKSwgLyoqXG4gKiBcdTgzQjdcdTUzRDZ1cmxcdTUzQzJcdTY1NzBcbiAqXG4gKiBAcGFyYW0gc1BhcmFtIC0gXHU1M0MyXHU2NTcwXG4gKi9cbnIoaSwgXCJnZXRRdWVyeVN0cmluZ1wiLCAoZSkgPT4ge1xuICBpZiAoIXUuaXNJbkJyb3dzZXIpXG4gICAgcmV0dXJuIFwiXCI7XG4gIGNvbnN0IG4gPSB3aW5kb3cubG9jYXRpb24uc2VhcmNoLnN1YnN0cmluZygxKS5zcGxpdChcIiZcIik7XG4gIGZvciAobGV0IHMgPSAwOyBzIDwgbi5sZW5ndGg7IHMrKykge1xuICAgIGNvbnN0IGMgPSBuW3NdLnNwbGl0KFwiPVwiKTtcbiAgICBpZiAoY1swXSA9PT0gZSlcbiAgICAgIHJldHVybiBjWzFdO1xuICB9XG4gIHJldHVybiBcIlwiO1xufSksIC8qKlxuICogXHU2NkZGXHU2MzYyIFVSTCBcdTc2ODRcdTUzQzJcdTY1NzBcbiAqIFx1NjAxRFx1OERFRlx1RkYxQVxuICogMS4gXHU0RjdGXHU3NTI4XHU0RTg2IFVSTFNlYXJjaFBhcmFtcyBcdTVCRjlcdThDNjFcdTY3NjVcdTg5RTNcdTY3OTBcdTU0OENcdTY3ODRcdTVFRkEgVVJMIFx1NjdFNVx1OEJFMlx1NTNDMlx1NjU3MFx1MzAwMlxuICpcbiAqIDIuIFx1NTcyOFx1NTkwNFx1NzQwNlx1NTMwNVx1NTQyQiBoYXNoIFx1NzI0N1x1NkJCNVx1NzY4NCBVUkwgXHU2NUY2XHU0RjdGXHU3NTI4XHU0RTg2IHNwbGl0IFx1NTFGRFx1NjU3MFx1NUMwNiBVUkwgXHU1MjA2XHU2MjEwXHU0RTI0XHU5MEU4XHU1MjA2XHVGRjFBXHU1N0ZBXHU2NzJDIFVSTCBcdTU0OEMgaGFzaCBcdTcyNDdcdTZCQjVcdTMwMDJcbiAqXG4gKiAzLiBcdTcxMzZcdTU0MEVcdUZGMENcdTUxOERcdTZCMjFcdTRGN0ZcdTc1Mjggc3BsaXQgXHU1MUZEXHU2NTcwXHU1QzA2XHU1N0ZBXHU2NzJDIFVSTCBcdTUyMDZcdTYyMTBcdTRFMjRcdTkwRThcdTUyMDZcdUZGMUFcdThERUZcdTVGODRcdTU0OENcdTY3RTVcdThCRTJcdTUzQzJcdTY1NzBcdTMwMDJcbiAqXG4gKiA0LiBcdTVDMDZcdTY3RTVcdThCRTJcdTUzQzJcdTY1NzBcdThGNkNcdTYzNjJcdTRFM0EgVVJMU2VhcmNoUGFyYW1zIFx1NUJGOVx1OEM2MVx1RkYwQ1x1NzEzNlx1NTQwRVx1OEJCRVx1N0Y2RVx1NjMwN1x1NUI5QVx1NzY4NFx1NTNDMlx1NjU3MFx1NTQwRFx1NTQ4Q1x1NTAzQ1x1MzAwMlxuICpcbiAqIDUuIFx1NjcwMFx1NTQwRVx1RkYwQ1x1NEY3Rlx1NzUyOCB0b1N0cmluZyBcdTUxRkRcdTY1NzBcdTVDMDZcdTY3RTVcdThCRTJcdTUzQzJcdTY1NzBcdThGNkNcdTYzNjJcdTRFM0FcdTVCNTdcdTdCMjZcdTRFMzJcdUZGMENcdTVFNzZcdTVDMDZcdTUxNzZcdTRFMEVcdThERUZcdTVGODRcdTdFQzRcdTU0MDhcdTYyMTBcdTY1QjBcdTc2ODRcdTU3RkFcdTY3MkMgVVJMXHUzMDAyXHU1OTgyXHU2NzlDIFVSTCBcdTUzMDVcdTU0MkIgaGFzaCBcdTcyNDdcdTZCQjVcdUZGMENcdTUyMTlcdTVDMDZcdTUxNzZcdTZERkJcdTUyQTBcdTUyMzBcdTY1QjBcdTc2ODRcdTU3RkFcdTY3MkMgVVJMIFx1NEUyRFx1MzAwMlxuICpcbiAqIEBwYXJhbSB1cmwgLSBcdTk0RkVcdTYzQTVcdTU3MzBcdTU3NDBcbiAqIEBwYXJhbSBwYXJhbU5hbWUgLSBcdTUzQzJcdTY1NzBcdTU0MERcbiAqIEBwYXJhbSBwYXJhbVZhbHVlIC0gXHU1M0MyXHU2NTcwXHU1MDNDXG4gKi9cbnIoaSwgXCJyZXBsYWNlVXJsUGFyYW1cIiwgKGUsIHQsIG4pID0+IHtcbiAgbiA9PSBudWxsICYmIChuID0gXCJcIik7XG4gIGNvbnN0IHMgPSBuZXcgUmVnRXhwKFwiXFxcXGIoXCIgKyB0ICsgXCI9KS4qPygmfCN8JClcIik7XG4gIGlmIChlLnNlYXJjaChzKSA+PSAwKVxuICAgIHJldHVybiBlLnJlcGxhY2UocywgXCIkMVwiICsgbiArIFwiJDJcIik7XG4gIGNvbnN0IFtjLCBkXSA9IGUuc3BsaXQoXCIjXCIpLCBbeSwgYl0gPSBjLnNwbGl0KFwiP1wiKSwgbCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoYik7XG4gIGwuc2V0KHQsIG4pO1xuICBjb25zdCBtID0gbC50b1N0cmluZygpLCBmID0geSArIChtID8gXCI/XCIgKyBtIDogXCJcIik7XG4gIHJldHVybiBkID8gZiArIFwiI1wiICsgZCA6IGY7XG59KSwgLyoqXG4gKiBcdThCQkVcdTdGNkV1cmxcdTUzQzJcdTY1NzBcbiAqXG4gKiBAcGFyYW0gdXJsc3RyaW5nIC0gdXJsXG4gKiBAcGFyYW0ga2V5IC0ga2V5XG4gKiBAcGFyYW0gdmFsdWUgLSB2YWx1ZVxuICovXG5yKGksIFwic2V0VXJsUGFyYW1ldGVyXCIsIChlLCB0LCBuKSA9PiB7XG4gIGlmIChlLmluY2x1ZGVzKHQpKVxuICAgIHJldHVybiB1LnJlcGxhY2VVcmxQYXJhbShlLCB0LCBuKTtcbiAgY29uc3QgcyA9IGUuc3BsaXQoXCIjXCIpO1xuICBsZXQgYyA9IHNbMF07XG4gIGNvbnN0IGQgPSBzWzFdO1xuICByZXR1cm4gYy5pbmNsdWRlcyhcIj9cIikgPyBjICs9IGAmJHt0fT0ke259YCA6IGMgKz0gYD8ke3R9PSR7bn1gLCBkICYmIChjICs9IFwiI1wiICsgZCksIGM7XG59KSwgLyoqXG4gKiBcdTkxQ0RcdTY1QjBcdTUyQTBcdThGN0RcdTYzMDdcdTVCOUF0YWJcbiAqXG4gKiBAcGFyYW0gdGFibmFtZSAtIHRhYm5hbWVcbiAqIEBwYXJhbSB0IC0gXHU1RUY2XHU4RkRGXHU2NUY2XHU5NUY0XG4gKi9cbnIoaSwgXCJyZWxvYWRUYWJQYWdlXCIsIChlLCB0ID0gMjAwKSA9PiB7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgaWYgKHUuaXNJbkJyb3dzZXIpIHtcbiAgICAgIGNvbnN0IG4gPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdS5zZXRVcmxQYXJhbWV0ZXIobiwgXCJ0YWJcIiwgZSk7XG4gICAgfVxuICB9LCB0KTtcbn0pLCAvKipcbiAqIFx1NTIzN1x1NjVCMFx1NUY1M1x1NTI0RHRhYlx1OTg3NVx1OTc2MlxuICovXG5yKGksIFwicmVsb2FkUGFnZVwiLCAoKSA9PiB7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgdS5pc0luQnJvd3NlciAmJiB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0sIDIwMCk7XG59KSwgLyoqXG4gKiBcdTUyMzdcdTY1QjBcdTVGNTNcdTUyNER0YWJcdTk4NzVcdTk3NjJcbiAqXG4gKiBAcGFyYW0gbXNnIC0gXHU2RDg4XHU2MDZGXHU2M0QwXHU3OTNBXG4gKiBAcGFyYW0gY2IgLSBcdTU2REVcdThDMDNcbiAqL1xucihpLCBcInJlbG9hZFBhZ2VXaXRoTWVzc2FnZUNhbGxiYWNrXCIsIChlLCB0KSA9PiB7XG4gIHQgJiYgdChlKSwgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICB1LmlzSW5Ccm93c2VyICYmIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfSwgMjAwKTtcbn0pO1xudmFyIG8gPSAvKiBAX19QVVJFX18gKi8gKChhKSA9PiAoYS5CYXNlUGF0aFR5cGVfQXBwZWFyYW5jZSA9IFwiQXBwZWFyYW5jZVwiLCBhLkJhc2VQYXRoVHlwZV9EYXRhID0gXCJEYXRhXCIsIGEuQmFzZVBhdGhUeXBlX1RoZW1lcyA9IFwiVGhlbWVzXCIsIGEuQmFzZVBhdGhUeXBlX1poaVRoZW1lID0gXCJaaGlUaGVtZVwiLCBhLkJhc2VQYXRoVHlwZV9Ob25lID0gXCJOb25lXCIsIGEpKShvIHx8IHt9KTtcbmNvbnN0IGggPSBjbGFzcyB7XG4gIC8qKlxuICAgKiBcdTY4QzBcdTZENEJcdTY2MkZcdTU0MjZcdThGRDBcdTg4NENcdTU3MjhcdTYwMURcdTZFOTBcdTYyNTNcdTVGMDBcdTc2ODRcdTZENEZcdTg5QzhcdTU2NjhcdTRFMkRcbiAgICovXG4gIHN0YXRpYyBpc0luU2l5dWFuQnJvd3NlcigpIHtcbiAgICByZXR1cm4gaS5pc0luQnJvd3NlciA/IHR5cGVvZiB3aW5kb3cuc2l5dWFuIDwgXCJ1XCIgJiYgdHlwZW9mIHdpbmRvdy5MdXRlIDwgXCJ1XCIgOiAhMTtcbiAgfVxuICAvKipcbiAgICogXHU2MDFEXHU2RTkwXHU3QjE0XHU4QkIwIHdpbmRvdyBcdTVCRjlcdThDNjFcbiAgICovXG4gIHN0YXRpYyBzaXl1YW5XaW5kb3coKSB7XG4gICAgbGV0IGU7XG4gICAgcmV0dXJuIHRoaXMuaXNJblNpeXVhbldpZGdldCgpID8gZSA9IHBhcmVudC53aW5kb3cgOiB0aGlzLmlzSW5TaXl1YW5OZXdXaW4oKSB8fCB0aGlzLmlzSW5TaXl1YW5Ccm93c2VyKCkgfHwgdHlwZW9mIHdpbmRvdyA8IFwidVwiID8gZSA9IHdpbmRvdyA6IGUgPSB2b2lkIDAsIGU7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuICAvLyByZXF1aXJlIGVuZFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gaW1wb3J0IHN0YXJ0XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLyoqXG4gICAqIFx1NUYxNVx1NTE2NWpzb25cbiAgICpcbiAgICogQHBhcmFtIGpzUGF0aCAtIGpzXHU3NkY4XHU1QkY5XHU4REVGXHU1Rjg0XHU1MTY4XHU4REVGXHU1Rjg0XG4gICAqIEBwYXJhbSB0eXBlIC0gXHU3QzdCXHU1NzhCXG4gICAqL1xuICBzdGF0aWMgYXN5bmMgaW1wb3J0SnMoZSwgdCkge1xuICAgIGxldCBuID0gZTtcbiAgICBzd2l0Y2ggKHQpIHtcbiAgICAgIGNhc2Ugby5CYXNlUGF0aFR5cGVfQXBwZWFyYW5jZTpcbiAgICAgICAgbiA9IHRoaXMuYnJvd3NlckpvaW5QYXRoKHRoaXMuc2l5dWFuQXBwZWFyYW5jZVJlbGF0aXZlUGF0aCgpLCBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIG8uQmFzZVBhdGhUeXBlX0RhdGE6XG4gICAgICAgIG4gPSB0aGlzLmJyb3dzZXJKb2luUGF0aCh0aGlzLnNpeXVhbkRhdGFSZWxhdGl2ZVBhdGgoKSwgZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBvLkJhc2VQYXRoVHlwZV9UaGVtZXM6XG4gICAgICAgIG4gPSB0aGlzLmJyb3dzZXJKb2luUGF0aCh0aGlzLnNpeXVhblRoZW1lUmVsYXRpdmVQYXRoKCksIGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugby5CYXNlUGF0aFR5cGVfWmhpVGhlbWU6XG4gICAgICAgIG4gPSB0aGlzLmJyb3dzZXJKb2luUGF0aCh0aGlzLnpoaVRoZW1lUmVsYXRpdmVQYXRoKCksIGUpO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcInR5cGUgbXVzdCBiZSBwcm92aWRlZFwiKTtcbiAgICB9XG4gICAgY29uc3QgeyBkZWZhdWx0OiBzIH0gPSBhd2FpdCBpbXBvcnQoXG4gICAgICAvKiBAdml0ZS1pZ25vcmUgKi9cbiAgICAgIG5cbiAgICApO1xuICAgIHJldHVybiBzO1xuICB9XG4gIC8qKlxuICAgKiBcdTVGMTVcdTUxNjVqc29uXG4gICAqXG4gICAqIEBwYXJhbSBqc29uUGF0aCAtIGpzb25cdTc2RjhcdTVCRjlcdThERUZcdTVGODRcdTUxNjhcdThERUZcdTVGODRcbiAgICogQHBhcmFtIHR5cGUgLSBcdTdDN0JcdTU3OEJcbiAgICovXG4gIC8vIHB1YmxpYyBzdGF0aWMgYXN5bmMgaW1wb3J0SnNvbihqc29uUGF0aDogc3RyaW5nLCB0eXBlOiBCYXNlUGF0aFR5cGVFbnVtKSB7XG4gIC8vICAgbGV0IGZ1bGxKc29uUGF0aCA9IGpzb25QYXRoXG4gIC8vICAgc3dpdGNoICh0eXBlKSB7XG4gIC8vICAgICBjYXNlIEJhc2VQYXRoVHlwZUVudW0uQmFzZVBhdGhUeXBlX0FwcGVhcmFuY2U6XG4gIC8vICAgICAgIGZ1bGxKc29uUGF0aCA9IHRoaXMuYnJvd3NlckpvaW5QYXRoKHRoaXMuc2l5dWFuQXBwZWFyYW5jZVJlbGF0aXZlUGF0aCgpLCBqc29uUGF0aClcbiAgLy8gICAgICAgYnJlYWtcbiAgLy8gICAgIGNhc2UgQmFzZVBhdGhUeXBlRW51bS5CYXNlUGF0aFR5cGVfRGF0YTpcbiAgLy8gICAgICAgZnVsbEpzb25QYXRoID0gdGhpcy5icm93c2VySm9pblBhdGgodGhpcy5zaXl1YW5EYXRhUmVsYXRpdmVQYXRoKCksIGpzb25QYXRoKVxuICAvLyAgICAgICBicmVha1xuICAvLyAgICAgY2FzZSBCYXNlUGF0aFR5cGVFbnVtLkJhc2VQYXRoVHlwZV9UaGVtZXM6XG4gIC8vICAgICAgIGZ1bGxKc29uUGF0aCA9IHRoaXMuYnJvd3NlckpvaW5QYXRoKHRoaXMuc2l5dWFuVGhlbWVSZWxhdGl2ZVBhdGgoKSwganNvblBhdGgpXG4gIC8vICAgICAgIGJyZWFrXG4gIC8vICAgICBjYXNlIEJhc2VQYXRoVHlwZUVudW0uQmFzZVBhdGhUeXBlX1poaVRoZW1lOlxuICAvLyAgICAgICBmdWxsSnNvblBhdGggPSB0aGlzLmJyb3dzZXJKb2luUGF0aCh0aGlzLnpoaVRoZW1lUmVsYXRpdmVQYXRoKCksIGpzb25QYXRoKVxuICAvLyAgICAgICBicmVha1xuICAvLyAgICAgZGVmYXVsdDpcbiAgLy8gICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHlwZSBtdXN0IGJlIHByb3ZpZGVkXCIpXG4gIC8vICAgfVxuICAvL1xuICAvLyAgIGNvbnN0IHsgZGVmYXVsdDogZGF0YSB9ID0gYXdhaXQgaW1wb3J0KC8qIEB2aXRlLWlnbm9yZSAqLyBmdWxsSnNvblBhdGgsIHsgYXNzZXJ0OiB7IHR5cGU6IFwianNvblwiIH0gfSlcbiAgLy8gICByZXR1cm4gZGF0YVxuICAvLyB9XG4gIC8qKlxuICAgKiBcdTVGMTVcdTUxNjUganNvbiAtIFx1NEVFNSBkYXRhIFx1NEUzQVx1NTdGQVx1NjcyQ1x1OERFRlx1NUY4NFxuICAgKlxuICAgKiBAcGFyYW0ganNvblBhdGggLSBcdTc2RjhcdTVCRjlcdTRFOEUgZGF0YSBcdTc2ODRcdTc2RjhcdTVCRjlcdThERUZcdTVGODRcbiAgICovXG4gIC8vIHB1YmxpYyBzdGF0aWMgYXN5bmMgaW1wb3J0RGF0YUpzb24oanNvblBhdGg6IHN0cmluZykge1xuICAvLyAgIHJldHVybiBhd2FpdCB0aGlzLmltcG9ydEpzb24oanNvblBhdGgsIEJhc2VQYXRoVHlwZUVudW0uQmFzZVBhdGhUeXBlX0RhdGEpXG4gIC8vIH1cbiAgLyoqXG4gICAqIFx1NUYxNVx1NTE2NSBqc29uIC0gXHU0RUU1IGFwcGVhcmFuY2UgXHU0RTNBXHU1N0ZBXHU2NzJDXHU4REVGXHU1Rjg0XG4gICAqXG4gICAqIEBwYXJhbSBqc29uUGF0aCAtIFx1NzZGOFx1NUJGOVx1NEU4RSBhcHBlYXJhbmNlIFx1NzY4NFx1NzZGOFx1NUJGOVx1OERFRlx1NUY4NFxuICAgKi9cbiAgLy8gcHVibGljIHN0YXRpYyBhc3luYyBpbXBvcnRBcHBlYXJhbmNlSnNvbihqc29uUGF0aDogc3RyaW5nKSB7XG4gIC8vICAgcmV0dXJuIGF3YWl0IHRoaXMuaW1wb3J0SnNvbihqc29uUGF0aCwgQmFzZVBhdGhUeXBlRW51bS5CYXNlUGF0aFR5cGVfQXBwZWFyYW5jZSlcbiAgLy8gfVxuICAvKipcbiAgICogXHU1RjE1XHU1MTY1IGpzb24gLSBcdTRFRTUgdGhlbWVzIFx1NEUzQVx1NTdGQVx1NjcyQ1x1OERFRlx1NUY4NFxuICAgKlxuICAgKiBAcGFyYW0ganNvblBhdGggLSBcdTc2RjhcdTVCRjlcdTRFOEUgdGhlbWVzIFx1NzY4NFx1NzZGOFx1NUJGOVx1OERFRlx1NUY4NFxuICAgKi9cbiAgLy8gcHVibGljIHN0YXRpYyBhc3luYyBpbXBvcnRUaGVtZXNKc29uKGpzb25QYXRoOiBzdHJpbmcpIHtcbiAgLy8gICByZXR1cm4gYXdhaXQgdGhpcy5pbXBvcnRKc29uKGpzb25QYXRoLCBCYXNlUGF0aFR5cGVFbnVtLkJhc2VQYXRoVHlwZV9UaGVtZXMpXG4gIC8vIH1cbiAgLyoqXG4gICAqIFx1NUYxNVx1NTE2NSB6aGkgXHU0RTNCXHU5ODk4XHU3Njg0IGpzb24gLSBcdTRFRTUgemhpIFx1NEUzQlx1OTg5OCBcdTc2ODRcdTY4MzlcdThERUZcdTVGODRcdTRFM0FcdTU3RkFcdTY3MkNcdThERUZcdTVGODRcbiAgICpcbiAgICogQHBhcmFtIGpzb25QYXRoIC0gXHU3NkY4XHU1QkY5XHU0RThFIHpoaSBcdTRFM0JcdTk4OThcdTY4MzlcdThERUZcdTVGODRcdTc2ODRcdTc2RjhcdTVCRjlcdThERUZcdTVGODRcbiAgICovXG4gIC8vIHB1YmxpYyBzdGF0aWMgYXN5bmMgaW1wb3J0WmhpVGhlbWVKc29uKGpzb25QYXRoOiBzdHJpbmcpIHtcbiAgLy8gICByZXR1cm4gYXdhaXQgdGhpcy5pbXBvcnRKc29uKGpzb25QYXRoLCBCYXNlUGF0aFR5cGVFbnVtLkJhc2VQYXRoVHlwZV9aaGlUaGVtZSlcbiAgLy8gfVxuICAvKipcbiAgICogXHU1RjE1XHU1MTY1IHpoaSBcdTRFM0JcdTk4OThcdTc2ODQganMgLSBcdTRFRTUgemhpIFx1NEUzQlx1OTg5OCBcdTc2ODRcdTY4MzlcdThERUZcdTVGODRcdTRFM0FcdTU3RkFcdTY3MkNcdThERUZcdTVGODRcbiAgICpcbiAgICogQHBhcmFtIGpzUGF0aCAtIFx1NzZGOFx1NUJGOVx1NEU4RSB6aGkgXHU0RTNCXHU5ODk4XHU2ODM5XHU4REVGXHU1Rjg0XHU3Njg0XHU3NkY4XHU1QkY5XHU4REVGXHU1Rjg0XG4gICAqL1xuICBzdGF0aWMgYXN5bmMgaW1wb3J0WmhpVGhlbWVKcyhlKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuaW1wb3J0SnMoZSwgby5CYXNlUGF0aFR5cGVfWmhpVGhlbWUpO1xuICB9XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLy8gaW1wb3J0IHN0YXJ0XG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgLyoqXG4gICAqIFx1OERFRlx1NUY4NFx1NjJGQ1x1NjNBNVxuICAgKlxuICAgKiBAcGFyYW0gcGF0aHMgLSBcdThERUZcdTVGODRcdTY1NzBcdTdFQzRcbiAgICovXG4gIHN0YXRpYyBqb2luUGF0aCguLi5lKSB7XG4gICAgaWYgKGkuaGFzTm9kZUVudigpKSB7XG4gICAgICBjb25zdCB0ID0gdGhpcy5yZXF1aXJlTGliKFwicGF0aFwiKTtcbiAgICAgIGlmICh0KVxuICAgICAgICByZXR1cm4gdC5qb2luKC4uLmUpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5icm93c2VySm9pblBhdGgoLi4uZSk7XG4gIH1cbiAgc3RhdGljIGJyb3dzZXJKb2luUGF0aCguLi5lKSB7XG4gICAgcmV0dXJuIGUuam9pbihpLkJyb3dzZXJTZXBlcmF0b3IpO1xuICB9XG4gIC8qKlxuICAgKiBcdTYwMURcdTZFOTBcdTdCMTRcdThCQjAgY29uZiBcdTc2RUVcdTVGNTVcbiAgICovXG4gIHN0YXRpYyBzaXl1YW5Db25mUGF0aCgpIHtcbiAgICBjb25zdCBlID0gdGhpcy5zaXl1YW5XaW5kb3coKTtcbiAgICBpZiAoIWUpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW4gc2l5dWFuIGVudlwiKTtcbiAgICByZXR1cm4gZS5zaXl1YW4uY29uZmlnLnN5c3RlbS5jb25mRGlyO1xuICB9XG4gIC8qKlxuICAgKiBcdTYwMURcdTZFOTBcdTdCMTRcdThCQjAgZGF0YSBcdTc2RUVcdTVGNTVcbiAgICovXG4gIHN0YXRpYyBzaXl1YW5EYXRhUGF0aCgpIHtcbiAgICBjb25zdCBlID0gdGhpcy5zaXl1YW5XaW5kb3coKTtcbiAgICBpZiAoIWUpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW4gc2l5dWFuIGVudlwiKTtcbiAgICByZXR1cm4gZS5zaXl1YW4uY29uZmlnLnN5c3RlbS5kYXRhRGlyO1xuICB9XG4gIC8qKlxuICAgKiBcdTYwMURcdTZFOTBcdTdCMTRcdThCQjAgZGF0YSBcdTc2RUVcdTVGNTUtXHU3NkY4XHU1QkY5XHU4REVGXHU1Rjg0XG4gICAqL1xuICBzdGF0aWMgc2l5dWFuRGF0YVJlbGF0aXZlUGF0aCgpIHtcbiAgICBpZiAoIXRoaXMuc2l5dWFuV2luZG93KCkpXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJOb3QgaW4gc2l5dWFuIGVudlwiKTtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICAvKipcbiAgICogXHU2MDFEXHU2RTkwXHU3QjE0XHU4QkIwIGFwcGVhcmFuY2UgXHU3NkVFXHU1RjU1XG4gICAqL1xuICBzdGF0aWMgc2l5dWFuQXBwZWFyYW5jZVBhdGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuam9pblBhdGgodGhpcy5zaXl1YW5Db25mUGF0aCgpLCBcImFwcGVhcmFuY2VcIik7XG4gIH1cbiAgLyoqXG4gICAqIFx1NjAxRFx1NkU5MFx1N0IxNFx1OEJCMCBhcHBlYXJhbmNlIFx1NzZFRVx1NUY1NS1cdTc2RjhcdTVCRjlcdThERUZcdTVGODRcbiAgICovXG4gIHN0YXRpYyBzaXl1YW5BcHBlYXJhbmNlUmVsYXRpdmVQYXRoKCkge1xuICAgIGlmICghdGhpcy5zaXl1YW5XaW5kb3coKSlcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vdCBpbiBzaXl1YW4gZW52XCIpO1xuICAgIHJldHVybiB0aGlzLmJyb3dzZXJKb2luUGF0aChcIlwiLCBcImFwcGVhcmFuY2VcIik7XG4gIH1cbiAgLyoqXG4gICAqIFx1NjAxRFx1NkU5MFx1N0IxNFx1OEJCMCB0aGVtZXMgXHU3NkVFXHU1RjU1LVx1N0VERFx1NUJGOVx1OERFRlx1NUY4NFxuICAgKlxuICAgKiBcdTZDRThcdTYxMEY6IFx1NTk4Mlx1Njc5Q1x1NjYyRlx1OTc1RSBlbGVjdHJvbiBcdTU0OEMgTm9kZSBcdTczQUZcdTU4ODNcdUZGMENcdThGRDlcdTkxQ0NcdThGRDRcdTU2REVcdTc2ODRcdTY2MkZcdTZENEZcdTg5QzhcdTU2NjhcdTc2ODRcdThERUZcdTVGODRcdUZGMENcdTRFMERcdTY2MkZcdTcyNjlcdTc0MDZcdThERUZcdTVGODRcbiAgICogXHU1OTgyXHU2NzlDXHU0RjdGXHU3NTI4XHU3MjY5XHU3NDA2XHU4REVGXHU1Rjg0XHVGRjBDXHU4QkY3XHU4QzAzXHU3NTI4IHNpeXVhbkFwcGVhcmFuY2VQYXRoIFx1NjIxNlx1ODAwNSBzaXl1YW5EYXRhUGF0aFxuICAgKlxuICAgKiBAYXV0aG9yIHRlcndlclxuICAgKiBAc2luY2UgMC4xLjBcbiAgICovXG4gIHN0YXRpYyBzaXl1YW5UaGVtZVBhdGgoKSB7XG4gICAgaWYgKGkuaGFzTm9kZUVudigpKVxuICAgICAgcmV0dXJuIHRoaXMuam9pblBhdGgodGhpcy5zaXl1YW5BcHBlYXJhbmNlUGF0aCgpLCBcInRoZW1lc1wiKTtcbiAgICB7XG4gICAgICBjb25zdCBlID0gdGhpcy5zaXl1YW5XaW5kb3coKTtcbiAgICAgIGlmICghZSlcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGluIHNpeXVhbiBlbnZcIik7XG4gICAgICByZXR1cm4gdGhpcy5qb2luUGF0aChlLmxvY2F0aW9uLm9yaWdpbiwgXCJhcHBlYXJhbmNlXCIsIFwidGhlbWVzXCIpO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogXHU2MDFEXHU2RTkwXHU3QjE0XHU4QkIwIHRoZW1lcyBcdTc2RUVcdTVGNTUtXHU3NkY4XHU1QkY5XHU4REVGXHU1Rjg0XG4gICAqL1xuICBzdGF0aWMgc2l5dWFuVGhlbWVSZWxhdGl2ZVBhdGgoKSB7XG4gICAgaWYgKCF0aGlzLnNpeXVhbldpbmRvdygpKVxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm90IGluIHNpeXVhbiBlbnZcIik7XG4gICAgcmV0dXJuIHRoaXMuYnJvd3NlckpvaW5QYXRoKFwiXCIsIFwiYXBwZWFyYW5jZVwiLCBcInRoZW1lc1wiKTtcbiAgfVxuICAvKipcbiAgICogemhpIFx1NEUzQlx1OTg5OFx1NzZFRVx1NUY1NSAtIFx1N0VERFx1NUJGOVx1OERFRlx1NUY4NFxuICAgKi9cbiAgc3RhdGljIHpoaVRoZW1lUGF0aCgpIHtcbiAgICByZXR1cm4gdGhpcy5qb2luUGF0aCh0aGlzLnNpeXVhblRoZW1lUGF0aCgpLCBcInpoaVwiKTtcbiAgfVxuICAvKipcbiAgICogemhpIFx1NEUzQlx1OTg5OFx1NzZFRVx1NUY1NSAtIFx1NzZGOFx1NUJGOVx1OERFRlx1NUY4NFxuICAgKi9cbiAgc3RhdGljIHpoaVRoZW1lUmVsYXRpdmVQYXRoKCkge1xuICAgIHJldHVybiB0aGlzLmJyb3dzZXJKb2luUGF0aCh0aGlzLnNpeXVhblRoZW1lUmVsYXRpdmVQYXRoKCksIFwiemhpXCIpO1xuICB9XG59O1xubGV0IHcgPSBoO1xuLyoqXG4gKiBcdTYwMURcdTZFOTBcdTdCMTRcdThCQjBpZnJhbWVcdTYzMDJcdTRFRjZcdTczQUZcdTU4ODNcbiAqL1xucih3LCBcImlzSW5TaXl1YW5XaWRnZXRcIiwgKCkgPT4gaS5pc0luQnJvd3NlciA/IHdpbmRvdy5mcmFtZUVsZW1lbnQgIT0gbnVsbCAmJiB3aW5kb3cuZnJhbWVFbGVtZW50LnBhcmVudEVsZW1lbnQgIT0gbnVsbCAmJiB3aW5kb3cuZnJhbWVFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAhPSBudWxsICYmIHdpbmRvdy5mcmFtZUVsZW1lbnQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbm9kZS1pZFwiKSAhPT0gXCJcIiA6ICExKSwgLyoqXG4gKiBcdTYwMURcdTZFOTBcdTdCMTRcdThCQjBcdTY1QjBcdTdBOTdcdTUzRTNcbiAqXG4gKiBAZGVwcmVjYXRlZCB3aW5kb3cudGVyd2VyIFx1NTIyNFx1NjVBRFx1NjVCOVx1NUYwRlx1NURGMlx1NUU5Rlx1NUYwM1x1RkYwQ1x1NUVGQVx1OEJBRVx1NEVFNVx1NTQwRVx1NjI1M1x1NUYwMFx1NjVCMFx1N0E5N1x1NTNFM1x1NkNFOFx1NTE2NSB3aW5kb3cuc2l5dWFuTmV3V2luIFx1RkYwQ1x1OEZEOVx1NjgzN1x1OEJFRFx1NEU0OVx1NEYxQVx1NjZGNFx1NUJCOVx1NjYxM1x1NzQwNlx1ODlFM1xuICogQGF1dGhvciB0ZXJ3ZXJcbiAqIEB2ZXJzaW9uIDAuMS4wXG4gKiBAc2luY2UgMC4wLjFcbiAqL1xucih3LCBcImlzSW5TaXl1YW5OZXdXaW5cIiwgKCkgPT4gIWkuaXNJbkJyb3dzZXIgfHwgIWkuaXNFbGVjdHJvbigpID8gITEgOiB0eXBlb2Ygd2luZG93LnRlcndlciA8IFwidVwiIHx8IHR5cGVvZiB3aW5kb3cuc2l5dWFuTmV3V2luIDwgXCJ1XCIpLCAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4vLyByZXF1aXJlIHN0YXJ0XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4vKipcbiAqIFx1NUYxNVx1NTE2NVx1NEY5RFx1OEQ1NlxuICpcbiAqIEBwYXJhbSBsaWJwYXRoIC0gXHU0RjlEXHU4RDU2XHU1MTY4XHU4REVGXHU1Rjg0XG4gKiBAcGFyYW0gYWJzIC0gXHU1M0VGXHU5MDA5XHVGRjBDXHU2NjJGXHU1NDI2XHU0RjdGXHU3NTI4XHU4OUM5XHU1Rjk3XHU4REVGXHU1Rjg0XHVGRjBDXHU5RUQ4XHU4QkE0XHU2NjJGIHRydWUgXHVGRjBDIFx1NTQyRlx1NzUyOFx1NEU0Qlx1NTQwRSB0eXBlXHU1M0MyXHU2NTcwXHU2NUUwXHU2NTQ4XG4gKiBAcGFyYW0gdHlwZSAtIFx1NTNFRlx1OTAwOVx1RkYwQ1x1NEVFNVx1OEMwMVx1NzY4NFx1NTdGQVx1NjcyQ1x1OERFRlx1NUY4NFx1NEUzQVx1NTFDNlxuICovXG5yKHcsIFwicmVxdWlyZUxpYlwiLCAoZSwgdCA9ICEwLCBuID0gby5CYXNlUGF0aFR5cGVfTm9uZSkgPT4ge1xuICBpZiAoIWkuaGFzTm9kZUVudigpKVxuICAgIHRocm93IG5ldyBFcnJvcihcInJlcXVpcmUgb255IHdvcmtzIG9uIG5vZGUgZW52XCIpO1xuICBsZXQgcyA9IGU7XG4gIGlmICghdClcbiAgICBzd2l0Y2ggKG4pIHtcbiAgICAgIGNhc2Ugby5CYXNlUGF0aFR5cGVfQXBwZWFyYW5jZTpcbiAgICAgICAgcyA9IGguam9pblBhdGgoaC5zaXl1YW5BcHBlYXJhbmNlUGF0aCgpLCBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIG8uQmFzZVBhdGhUeXBlX0RhdGE6XG4gICAgICAgIHMgPSBoLmpvaW5QYXRoKGguc2l5dWFuRGF0YVBhdGgoKSwgZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBvLkJhc2VQYXRoVHlwZV9UaGVtZXM6XG4gICAgICAgIHMgPSBoLmpvaW5QYXRoKGguc2l5dWFuQXBwZWFyYW5jZVBhdGgoKSwgXCJ0aGVtZXNcIiwgZSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBvLkJhc2VQYXRoVHlwZV9aaGlUaGVtZTpcbiAgICAgICAgcyA9IGguam9pblBhdGgoaC5zaXl1YW5BcHBlYXJhbmNlUGF0aCgpLCBcInRoZW1lc1wiLCBcInpoaVwiLCBlKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0eXBlIG11c3QgYmUgcHJvdmlkZWQgd2hlbiBub3QgdXNlIGFic29sdXRlIHBhdGhcIik7XG4gICAgfVxuICBjb25zdCBjID0gaC5zaXl1YW5XaW5kb3coKTtcbiAgaWYgKCFjKVxuICAgIHJldHVybiByZXF1aXJlKHMpO1xuICBpZiAodHlwZW9mIGMucmVxdWlyZSA8IFwidVwiKVxuICAgIHJldHVybiBjLnJlcXVpcmUocyk7XG59KSwgLyoqXG4gKiBcdTVGMTVcdTUxNjVcdTRGOURcdThENTZcdUZGMENcdTRFRTUgZGF0YSBcdTc2ODRcdTU3RkFcdTY3MkNcdThERUZcdTVGODRcdTRFM0FcdTUxQzZcbiAqXG4gKiBAcGFyYW0gbGlicGF0aCAtIFx1NzZGOFx1NUJGOVx1NEU4RSBhcHBlYXJhbmNlIFx1NzY4NFx1NzZGOFx1NUJGOVx1OERFRlx1NUY4NFxuICovXG5yKHcsIFwicmVxdWlyZUFwcGVhcmFuY2VMaWJcIiwgKGUpID0+IGgucmVxdWlyZUxpYihlLCAhMSwgby5CYXNlUGF0aFR5cGVfQXBwZWFyYW5jZSkpLCAvKipcbiAqIFx1NUYxNVx1NTE2NVx1NEY5RFx1OEQ1Nlx1RkYwQ1x1NEVFNSBkYXRhIFx1NzY4NFx1NTdGQVx1NjcyQ1x1OERFRlx1NUY4NFx1NEUzQVx1NTFDNlxuICpcbiAqIEBwYXJhbSBsaWJwYXRoIC0gXHU3NkY4XHU1QkY5XHU0RThFIGRhdGEgXHU3Njg0XHU3NkY4XHU1QkY5XHU4REVGXHU1Rjg0XG4gKi9cbnIodywgXCJyZXF1aXJlRGF0YUxpYlwiLCAoZSkgPT4gaC5yZXF1aXJlTGliKGUsICExLCBvLkJhc2VQYXRoVHlwZV9EYXRhKSksIC8qKlxuICogXHU1RjE1XHU1MTY1XHU0RjlEXHU4RDU2XHVGRjBDXHU0RUU1IHRoZW1lIFx1NzY4NFx1NTdGQVx1NjcyQ1x1OERFRlx1NUY4NFx1NEUzQVx1NTFDNlxuICpcbiAqIEBwYXJhbSBsaWJwYXRoIC0gXHU3NkY4XHU1QkY5XHU0RThFIHRoZW1lIFx1NzY4NFx1NzZGOFx1NUJGOVx1OERFRlx1NUY4NFxuICovXG5yKHcsIFwicmVxdWlyZVRoZW1lc0xpYlwiLCAoZSkgPT4gaC5yZXF1aXJlTGliKGUsICExLCBvLkJhc2VQYXRoVHlwZV9UaGVtZXMpKSwgLyoqXG4gKiBcdTVGMTVcdTUxNjVcdTRGOURcdThENTZcdUZGMENcdTRFRTUgWmhpVGhlbWUgXHU3Njg0XHU1N0ZBXHU2NzJDXHU4REVGXHU1Rjg0XHU0RTNBXHU1MUM2XG4gKlxuICogQHBhcmFtIGxpYnBhdGggLSBcdTc2RjhcdTVCRjlcdTRFOEUgWmhpVGhlbWUgXHU3Njg0XHU3NkY4XHU1QkY5XHU4REVGXHU1Rjg0XG4gKi9cbnIodywgXCJyZXF1aXJlWmhpVGhlbWVMaWJcIiwgKGUpID0+IGgucmVxdWlyZUxpYihlLCAhMSwgby5CYXNlUGF0aFR5cGVfWmhpVGhlbWUpKTtcbnZhciBwID0gLyogQF9fUFVSRV9fICovICgoYSkgPT4gKGEuRGV2aWNlVHlwZV9Nb2JpbGVfRGV2aWNlID0gXCJNb2JpbGVcIiwgYS5EZXZpY2VUeXBlX1NpeXVhbl9XaWRnZXQgPSBcIlNpeXVhbl9XaWRnZXRcIiwgYS5EZXZpY2VUeXBlX1NpeXVhbl9OZXdXaW4gPSBcIlNpeXVhbl9OZXdXaW5kb3dcIiwgYS5EZXZpY2VUeXBlX1NpeXVhbl9NYWluV2luID0gXCJTaXl1YW5fTWFpbldpbmRvd1wiLCBhLkRldmljZVR5cGVfU2l5dWFuX0Jyb3dzZXIgPSBcIlNpeXVhbl9Ccm93c2VyXCIsIGEuRGV2aWNlVHlwZV9DaHJvbWVfRXh0ZW5zaW9uID0gXCJDaHJvbWVfRXh0ZW5zaW9uXCIsIGEuRGV2aWNlVHlwZV9DaHJvbWVfQnJvd3NlciA9IFwiQ2hyb21lX0Jyb3dzZXJcIiwgYS5EZXZpY2VUeXBlX05vZGUgPSBcIk5vZGVcIiwgYSkpKHAgfHwge30pO1xuY2xhc3MgdiB7XG4gIC8qKlxuICAgKiBcdTgzQjdcdTUzRDZcdTVGNTNcdTUyNERcdThCQkVcdTU5MDdcbiAgICovXG4gIHN0YXRpYyBnZXREZXZpY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuZGV0ZWN0TW9iaWxlRGV2aWNlKCkgPyBwLkRldmljZVR5cGVfTW9iaWxlX0RldmljZSA6IHcuaXNJblNpeXVhbldpZGdldCgpID8gcC5EZXZpY2VUeXBlX1NpeXVhbl9XaWRnZXQgOiB3LmlzSW5TaXl1YW5OZXdXaW4oKSA/IHAuRGV2aWNlVHlwZV9TaXl1YW5fTmV3V2luIDogaS5pc0VsZWN0cm9uKCkgPyBwLkRldmljZVR5cGVfU2l5dWFuX01haW5XaW4gOiB3LmlzSW5TaXl1YW5Ccm93c2VyKCkgPyBwLkRldmljZVR5cGVfU2l5dWFuX0Jyb3dzZXIgOiBpLmlzSW5DaHJvbWVFeHRlbnNpb24oKSA/IHAuRGV2aWNlVHlwZV9DaHJvbWVfRXh0ZW5zaW9uIDogaS5pc05vZGUgPyBwLkRldmljZVR5cGVfTm9kZSA6IHAuRGV2aWNlVHlwZV9DaHJvbWVfQnJvd3NlcjtcbiAgfVxuICAvKipcbiAgICogXHU2OEMwXHU2RDRCXHU3OUZCXHU1MkE4XHU3QUVGXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdGF0aWMgZGV0ZWN0TW9iaWxlRGV2aWNlKCkge1xuICAgIGxldCBlID0gITE7XG4gICAgcmV0dXJuIGkuaXNJbkJyb3dzZXIgJiYgZnVuY3Rpb24odCkge1xuICAgICAgKC8oYW5kcm9pZHxiYlxcZCt8bWVlZ28pLittb2JpbGV8YXZhbnRnb3xiYWRhXFwvfGJsYWNrYmVycnl8YmxhemVyfGNvbXBhbHxlbGFpbmV8ZmVubmVjfGhpcHRvcHxpZW1vYmlsZXxpcChob25lfG9kKXxpcmlzfGtpbmRsZXxsZ2UgfG1hZW1vfG1pZHB8bW1wfG1vYmlsZS4rZmlyZWZveHxuZXRmcm9udHxvcGVyYSBtKG9ifGluKWl8cGFsbSggb3MpP3xwaG9uZXxwKGl4aXxyZSlcXC98cGx1Y2tlcnxwb2NrZXR8cHNwfHNlcmllcyg0fDYpMHxzeW1iaWFufHRyZW98dXBcXC4oYnJvd3NlcnxsaW5rKXx2b2RhZm9uZXx3YXB8d2luZG93cyBjZXx4ZGF8eGlpbm8vaS50ZXN0KFxuICAgICAgICB0XG4gICAgICApIHx8IC8xMjA3fDYzMTB8NjU5MHwzZ3NvfDR0aHB8NTBbMS02XWl8Nzcwc3w4MDJzfGEgd2F8YWJhY3xhYyhlcnxvb3xzLSl8YWkoa298cm4pfGFsKGF2fGNhfGNvKXxhbW9pfGFuKGV4fG55fHl3KXxhcHR1fGFyKGNofGdvKXxhcyh0ZXx1cyl8YXR0d3xhdShkaXwtbXxyIHxzICl8YXZhbnxiZShja3xsbHxucSl8YmkobGJ8cmQpfGJsKGFjfGF6KXxicihlfHYpd3xidW1ifGJ3LShufHUpfGM1NVxcL3xjYXBpfGNjd2F8Y2RtLXxjZWxsfGNodG18Y2xkY3xjbWQtfGNvKG1wfG5kKXxjcmF3fGRhKGl0fGxsfG5nKXxkYnRlfGRjLXN8ZGV2aXxkaWNhfGRtb2J8ZG8oY3xwKW98ZHMoMTJ8LWQpfGVsKDQ5fGFpKXxlbShsMnx1bCl8ZXIoaWN8azApfGVzbDh8ZXooWzQtN10wfG9zfHdhfHplKXxmZXRjfGZseSgtfF8pfGcxIHV8ZzU2MHxnZW5lfGdmLTV8Zy1tb3xnbyhcXC53fG9kKXxncihhZHx1bil8aGFpZXxoY2l0fGhkLShtfHB8dCl8aGVpLXxoaShwdHx0YSl8aHAoIGl8aXApfGhzLWN8aHQoYygtfCB8X3xhfGd8cHxzfHQpfHRwKXxodShhd3x0Yyl8aS0oMjB8Z298bWEpfGkyMzB8aWFjKCB8LXxcXC8pfGlicm98aWRlYXxpZzAxfGlrb218aW0xa3xpbm5vfGlwYXF8aXJpc3xqYSh0fHYpYXxqYnJvfGplbXV8amlnc3xrZGRpfGtlaml8a2d0KCB8XFwvKXxrbG9ufGtwdCB8a3djLXxreW8oY3xrKXxsZShub3x4aSl8bGcoIGd8XFwvKGt8bHx1KXw1MHw1NHwtW2Etd10pfGxpYnd8bHlueHxtMS13fG0zZ2F8bTUwXFwvfG1hKHRlfHVpfHhvKXxtYygwMXwyMXxjYSl8bS1jcnxtZShyY3xyaSl8bWkobzh8b2F8dHMpfG1tZWZ8bW8oMDF8MDJ8Yml8ZGV8ZG98dCgtfCB8b3x2KXx6eil8bXQoNTB8cDF8diApfG13YnB8bXl3YXxuMTBbMC0yXXxuMjBbMi0zXXxuMzAoMHwyKXxuNTAoMHwyfDUpfG43KDAoMHwxKXwxMCl8bmUoKGN8bSktfG9ufHRmfHdmfHdnfHd0KXxub2soNnxpKXxuenBofG8yaW18b3AodGl8d3YpfG9yYW58b3dnMXxwODAwfHBhbihhfGR8dCl8cGR4Z3xwZygxM3wtKFsxLThdfGMpKXxwaGlsfHBpcmV8cGwoYXl8dWMpfHBuLTJ8cG8oY2t8cnR8c2UpfHByb3h8cHNpb3xwdC1nfHFhLWF8cWMoMDd8MTJ8MjF8MzJ8NjB8LVsyLTddfGktKXxxdGVrfHIzODB8cjYwMHxyYWtzfHJpbTl8cm8odmV8em8pfHM1NVxcL3xzYShnZXxtYXxtbXxtc3xueXx2YSl8c2MoMDF8aC18b298cC0pfHNka1xcL3xzZShjKC18MHwxKXw0N3xtY3xuZHxyaSl8c2doLXxzaGFyfHNpZSgtfG0pfHNrLTB8c2woNDV8aWQpfHNtKGFsfGFyfGIzfGl0fHQ1KXxzbyhmdHxueSl8c3AoMDF8aC18di18diApfHN5KDAxfG1iKXx0MigxOHw1MCl8dDYoMDB8MTB8MTgpfHRhKGd0fGxrKXx0Y2wtfHRkZy18dGVsKGl8bSl8dGltLXx0LW1vfHRvKHBsfHNoKXx0cyg3MHxtLXxtM3xtNSl8dHgtOXx1cChcXC5ifGcxfHNpKXx1dHN0fHY0MDB8djc1MHx2ZXJpfHZpKHJnfHRlKXx2ayg0MHw1WzAtM118LXYpfHZtNDB8dm9kYXx2dWxjfHZ4KDUyfDUzfDYwfDYxfDcwfDgwfDgxfDgzfDg1fDk4KXx3M2MoLXwgKXx3ZWJjfHdoaXR8d2koZyB8bmN8bncpfHdtbGJ8d29udXx4NzAwfHlhcy18eW91cnx6ZXRvfHp0ZS0vaS50ZXN0KFxuICAgICAgICB0LnN1YnN0cigwLCA0KVxuICAgICAgKSkgJiYgKGUgPSAhMCk7XG4gICAgfShuYXZpZ2F0b3IudXNlckFnZW50IHx8IG5hdmlnYXRvci52ZW5kb3IgfHwgd2luZG93Lm9wZXJhKSwgZTtcbiAgfVxufVxuZXhwb3J0IHtcbiAgbyBhcyBCYXNlUGF0aFR5cGVFbnVtLFxuICBpIGFzIEJyb3dzZXJVdGlsLFxuICB2IGFzIERldmljZURldGVjdGlvbixcbiAgcCBhcyBEZXZpY2VUeXBlRW51bSxcbiAgdyBhcyBTaXl1YW5EZXZpY2Vcbn07XG4iLCAiLypcbiAqIENvcHlyaWdodCAoYykgMjAyMywgVGVyd2VyIC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIERPIE5PVCBBTFRFUiBPUiBSRU1PVkUgQ09QWVJJR0hUIE5PVElDRVMgT1IgVEhJUyBGSUxFIEhFQURFUi5cbiAqXG4gKiBUaGlzIGNvZGUgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdFxuICogdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDIgb25seSwgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLiAgVGVyd2VyIGRlc2lnbmF0ZXMgdGhpc1xuICogcGFydGljdWxhciBmaWxlIGFzIHN1YmplY3QgdG8gdGhlIFwiQ2xhc3NwYXRoXCIgZXhjZXB0aW9uIGFzIHByb3ZpZGVkXG4gKiBieSBUZXJ3ZXIgaW4gdGhlIExJQ0VOU0UgZmlsZSB0aGF0IGFjY29tcGFuaWVkIHRoaXMgY29kZS5cbiAqXG4gKiBUaGlzIGNvZGUgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDIgZm9yIG1vcmUgZGV0YWlscyAoYSBjb3B5IGlzIGluY2x1ZGVkIGluIHRoZSBMSUNFTlNFIGZpbGUgdGhhdFxuICogYWNjb21wYW5pZWQgdGhpcyBjb2RlKS5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uXG4gKiAyIGFsb25nIHdpdGggdGhpcyB3b3JrOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4gKiBJbmMuLCA1MSBGcmFua2xpbiBTdCwgRmlmdGggRmxvb3IsIEJvc3RvbiwgTUEgMDIxMTAtMTMwMSBVU0EuXG4gKlxuICogUGxlYXNlIGNvbnRhY3QgVGVyd2VyLCBTaGVuemhlbiwgR3Vhbmdkb25nLCBDaGluYSwgeW91d2VpY3NAMTYzLmNvbVxuICogb3IgdmlzaXQgd3d3LnRlcndlci5zcGFjZSBpZiB5b3UgbmVlZCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIG9yIGhhdmUgYW55XG4gKiBxdWVzdGlvbnMuXG4gKi9cblxuaW1wb3J0IHsgQnJvd3NlclV0aWwsIFNpeXVhbkRldmljZSB9IGZyb20gXCJ6aGktZGV2aWNlXCJcblxuLyoqXG4gKiBcdTdBOTdcdTUzRTNcdTdCQTFcdTc0MDZcdTU2NjhcbiAqXG4gKiBAYXV0aG9yIHRlcndlclxuICogQHZlcnNpb24gMS4wLjBcbiAqIEBzaW5jZSAxLjAuMFxuICovXG5jbGFzcyBXaW5kb3dNYW5hZ2VyIHtcbiAgcHJpdmF0ZSBsb2dnZXI6IGFueVxuICBwcml2YXRlIGNvbW1vbjogYW55XG5cbiAgaW5pdChsb2dnZXI6IGFueSwgY29tbW9uOiBhbnkpIHtcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlclxuICAgIHRoaXMuY29tbW9uID0gY29tbW9uXG4gIH1cblxuICAvKipcbiAgICogXHU2MjUzXHU1RjAwXHU2NUIwXHU3QTk3XHU1M0UzXG4gICAqXG4gICAqIFx1NzkzQVx1NEY4Qlx1RkYxQVxuICAgKlxuICAgKiBgYGBcbiAgICogIyMgZGV2ZWxvcG1lbnRcbiAgICogd2luZG93TWFuYWdlci5vcGVuQnJvd3NlcldpbmRvdyhcImh0dHBzOi8vd3d3LmJhaWR1LmNvbVwiLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdHJ1ZSwgZmFsc2UpXG4gICAqIHdpbmRvd01hbmFnZXIub3BlbkJyb3dzZXJXaW5kb3coXCJodHRwczovL3d3dy5iYWlkdS5jb21cIiwgeyBcImtleTFcIjogXCJ2YWx1ZTFcIiwgXCJrZXkyXCI6IFwidmFsdWUyXCIgfSwgdW5kZWZpbmVkLCB0cnVlLCBmYWxzZSlcbiAgICpcbiAgICogIyMgcHJvZHVjdGlvblxuICAgKiB3aW5kb3dNYW5hZ2VyLm9wZW5Ccm93c2VyV2luZG93KFwiaHR0cHM6Ly93d3cuYmFpZHUuY29tXCIpXG4gICAqIGBgYFxuICAgKlxuICAgKiBAcGFyYW0gdXJsIC0gdXJsXG4gICAqIEBwYXJhbSBwYXJhbXMgLSBcdTUzQzJcdTY1NzBcbiAgICogQHBhcmFtIHdpbiAtIFx1NzIzNlx1N0E5N1x1NTNFM1xuICAgKiBAcGFyYW0gaXNEZXYgLSBcdTY2MkZcdTU0MjZcdTYyNTNcdTVGMDBcdTVGMDBcdTUzRDFcdTgwMDVcdTVERTVcdTUxNzdcbiAgICogQHBhcmFtIG1vZGFsIC0gXHU2NjJGXHU1NDI2XHU2QTIxXHU2MDAxXG4gICAqL1xuICBwdWJsaWMgb3BlbkJyb3dzZXJXaW5kb3codXJsOiBzdHJpbmcsIHBhcmFtcz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sIHdpbj86IGFueSwgaXNEZXYgPSBmYWxzZSwgbW9kYWwgPSBmYWxzZSkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5jb21tb24uc3RyVXRpbC5pc0VtcHR5U3RyaW5nKHVybCkpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJVcmwgY2Fubm90IGJlIGVtcHR5XCIpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAoIUJyb3dzZXJVdGlsLmlzRWxlY3Ryb24oKSkge1xuICAgICAgICB0aGlzLmxvZ2dlci5pbmZvKFwiQnJvd3NlcldpbmRvdyBjYW4gb255IGJlIGF2YWlsYWJsZSBpbiBzaXl1YW4gRWxlY3Ryb24gZW52aXJvbm1lbnRcIilcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG5cbiAgICAgIGlmIChwYXJhbXMpIHtcbiAgICAgICAgT2JqZWN0LmtleXMocGFyYW1zKS5mb3JFYWNoKChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gcGFyYW1zW2tleV1cbiAgICAgICAgICB1cmwgPSBCcm93c2VyVXRpbC5zZXRVcmxQYXJhbWV0ZXIodXJsLCBrZXksIHZhbHVlKVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICB0aGlzLmxvZ2dlci5pbmZvKHRoaXMuY29tbW9uLnN0clV0aWwuZihcIk9wZW5pbmcgYSBuZXcgQnJvd3NlcldpbmRvdyBmcm9tIHVybCA9PiB7MH1cIiwgdXJsKSlcblxuICAgICAgY29uc3QgbWFpbldpbiA9IHdpbiA/PyBTaXl1YW5EZXZpY2Uuc2l5dWFuV2luZG93KClcbiAgICAgIGNvbnN0IHsgYXBwLCBCcm93c2VyV2luZG93LCBnZXRDdXJyZW50V2luZG93IH0gPSBtYWluV2luLnJlcXVpcmUoXCJAZWxlY3Ryb24vcmVtb3RlXCIpXG4gICAgICBjb25zdCByZW1vdGUgPSBtYWluV2luLnJlcXVpcmUoXCJAZWxlY3Ryb24vcmVtb3RlXCIpLnJlcXVpcmUoXCJAZWxlY3Ryb24vcmVtb3RlL21haW5cIilcbiAgICAgIGNvbnN0IG1haW5XaW5kb3cgPSBnZXRDdXJyZW50V2luZG93KClcbiAgICAgIGNvbnN0IG5ld1dpbmRvdyA9IG5ldyBCcm93c2VyV2luZG93KHtcbiAgICAgICAgcGFyZW50OiBtYWluV2luZG93LFxuICAgICAgICB3aWR0aDogOTAwLFxuICAgICAgICBoZWlnaHQ6IDc1MCxcbiAgICAgICAgcmVzaXphYmxlOiB0cnVlLFxuICAgICAgICBtb2RhbDogbW9kYWwsXG4gICAgICAgIGljb246IFNpeXVhbkRldmljZS5icm93c2VySm9pblBhdGgoXG4gICAgICAgICAgU2l5dWFuRGV2aWNlLnNpeXVhbldpbmRvdygpLnNpeXVhbi5jb25maWcuc3lzdGVtLmFwcERpcixcbiAgICAgICAgICBcInN0YWdlXCIsXG4gICAgICAgICAgXCJpY29uLWxhcmdlLnBuZ1wiXG4gICAgICAgICksXG4gICAgICAgIHRpdGxlQmFyT3ZlcmxheToge1xuICAgICAgICAgIGNvbG9yOiBcIiNjY2NjY2NhNVwiLFxuICAgICAgICAgIHN5bWJvbENvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgIH0sXG4gICAgICAgIHdlYlByZWZlcmVuY2VzOiB7XG4gICAgICAgICAgbmF0aXZlV2luZG93T3BlbjogdHJ1ZSxcbiAgICAgICAgICBub2RlSW50ZWdyYXRpb246IHRydWUsXG4gICAgICAgICAgd2Vidmlld1RhZzogdHJ1ZSxcbiAgICAgICAgICB3ZWJTZWN1cml0eTogZmFsc2UsXG4gICAgICAgICAgY29udGV4dElzb2xhdGlvbjogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICB9KVxuXG4gICAgICBuZXdXaW5kb3cud2ViQ29udGVudHMudXNlckFnZW50ID0gYFNpWXVhbi8ke2FwcC5nZXRWZXJzaW9uKCl9IGh0dHBzOi8vYjNsb2cub3JnL3NpeXVhbiBFbGVjdHJvbmBcbiAgICAgIC8vIFx1NTE0MVx1OEJCOFxuICAgICAgcmVtb3RlLmVuYWJsZShuZXdXaW5kb3cud2ViQ29udGVudHMpXG4gICAgICBpZiAoaXNEZXYpIHtcbiAgICAgICAgbmV3V2luZG93LndlYkNvbnRlbnRzLm9wZW5EZXZUb29scygpXG4gICAgICB9XG4gICAgICBuZXdXaW5kb3cubG9hZFVSTCh1cmwpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgdGhpcy5sb2dnZXIuZXJyb3IoXCJPcGVuIGJyb3dzZXIgd2luZG93IGZhaWxlZFwiLCBlKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBXaW5kb3dNYW5hZ2VyXG4iLCAiLypcbiAqIENvcHlyaWdodCAoYykgMjAyMywgVGVyd2VyIC4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIERPIE5PVCBBTFRFUiBPUiBSRU1PVkUgQ09QWVJJR0hUIE5PVElDRVMgT1IgVEhJUyBGSUxFIEhFQURFUi5cbiAqXG4gKiBUaGlzIGNvZGUgaXMgZnJlZSBzb2Z0d2FyZTsgeW91IGNhbiByZWRpc3RyaWJ1dGUgaXQgYW5kL29yIG1vZGlmeSBpdFxuICogdW5kZXIgdGhlIHRlcm1zIG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uIDIgb25seSwgYXNcbiAqIHB1Ymxpc2hlZCBieSB0aGUgRnJlZSBTb2Z0d2FyZSBGb3VuZGF0aW9uLiAgVGVyd2VyIGRlc2lnbmF0ZXMgdGhpc1xuICogcGFydGljdWxhciBmaWxlIGFzIHN1YmplY3QgdG8gdGhlIFwiQ2xhc3NwYXRoXCIgZXhjZXB0aW9uIGFzIHByb3ZpZGVkXG4gKiBieSBUZXJ3ZXIgaW4gdGhlIExJQ0VOU0UgZmlsZSB0aGF0IGFjY29tcGFuaWVkIHRoaXMgY29kZS5cbiAqXG4gKiBUaGlzIGNvZGUgaXMgZGlzdHJpYnV0ZWQgaW4gdGhlIGhvcGUgdGhhdCBpdCB3aWxsIGJlIHVzZWZ1bCwgYnV0IFdJVEhPVVRcbiAqIEFOWSBXQVJSQU5UWTsgd2l0aG91dCBldmVuIHRoZSBpbXBsaWVkIHdhcnJhbnR5IG9mIE1FUkNIQU5UQUJJTElUWSBvclxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuICBTZWUgdGhlIEdOVSBHZW5lcmFsIFB1YmxpYyBMaWNlbnNlXG4gKiB2ZXJzaW9uIDIgZm9yIG1vcmUgZGV0YWlscyAoYSBjb3B5IGlzIGluY2x1ZGVkIGluIHRoZSBMSUNFTlNFIGZpbGUgdGhhdFxuICogYWNjb21wYW5pZWQgdGhpcyBjb2RlKS5cbiAqXG4gKiBZb3Ugc2hvdWxkIGhhdmUgcmVjZWl2ZWQgYSBjb3B5IG9mIHRoZSBHTlUgR2VuZXJhbCBQdWJsaWMgTGljZW5zZSB2ZXJzaW9uXG4gKiAyIGFsb25nIHdpdGggdGhpcyB3b3JrOyBpZiBub3QsIHdyaXRlIHRvIHRoZSBGcmVlIFNvZnR3YXJlIEZvdW5kYXRpb24sXG4gKiBJbmMuLCA1MSBGcmFua2xpbiBTdCwgRmlmdGggRmxvb3IsIEJvc3RvbiwgTUEgMDIxMTAtMTMwMSBVU0EuXG4gKlxuICogUGxlYXNlIGNvbnRhY3QgVGVyd2VyLCBTaGVuemhlbiwgR3Vhbmdkb25nLCBDaGluYSwgeW91d2VpY3NAMTYzLmNvbVxuICogb3IgdmlzaXQgd3d3LnRlcndlci5zcGFjZSBpZiB5b3UgbmVlZCBhZGRpdGlvbmFsIGluZm9ybWF0aW9uIG9yIGhhdmUgYW55XG4gKiBxdWVzdGlvbnMuXG4gKi9cblxuaW1wb3J0IFdpbmRvd01hbmFnZXIgZnJvbSBcIi4vV2luZG93TWFuYWdlclwiXG5pbXBvcnQgeyBTaXl1YW5EZXZpY2UgfSBmcm9tIFwiemhpLWRldmljZVwiXG5cbi8qKlxuICogXHU4RkQ5XHU5MUNDXHU3RURGXHU0RTAwXHU2MzAyXHU4RjdEXHU0RTAwXHU0RTJBXHU2NUI5XHU2Q0Q1XHVGRjBDXHU1M0VGXHU0RUU1XHU2MjUzXHU1RjAwIEVsZWN0cm9uIFx1NzY4NCBCcm93c2VyV2luZG93XG4gKlxuICogQGF1dGhvciB0ZXJ3ZXJcbiAqIEB2ZXJzaW9uIDEuMC4wXG4gKiBAc2luY2UgMS4wLjBcbiAqL1xuY2xhc3MgWmhpQnJvd3NlcldpbmRvdyB7XG4gIHByaXZhdGUgbG9nZ2VyOiBhbnlcblxuICBwcml2YXRlIHJlYWRvbmx5IHdpbmRvd01hbmFnZXJcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLndpbmRvd01hbmFnZXIgPSBuZXcgV2luZG93TWFuYWdlcigpXG4gIH1cblxuICBpbml0KGxvZ2dlcjogYW55LCBjb21tb246IGFueSkge1xuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyXG4gICAgdGhpcy53aW5kb3dNYW5hZ2VyLmluaXQobG9nZ2VyLCBjb21tb24pXG4gIH1cblxuICAvKipcbiAgICogXHU2MzAyXHU4RjdEIEJyb3dzZXJXaW5kb3dcbiAgICpcbiAgICogQGF1dGhvciB0ZXJ3ZXJcbiAgICogQHNpbmNlIDEuMC4wXG4gICAqL1xuICBwdWJsaWMgaW5pdEJyb3dzZXJXaW5kb3coKSB7XG4gICAgY29uc3Qgd2luID0gU2l5dWFuRGV2aWNlLnNpeXVhbldpbmRvdygpXG4gICAgd2luLnpoaSA9IHdpbi56aGkgPz8ge31cbiAgICB3aW4uemhpLndpbmRvd01hbmFnZXIgPSB0aGlzLndpbmRvd01hbmFnZXJcbiAgICB0aGlzLmxvZ2dlci5pbmZvKFwiemhpV2luZG93IGluaXRlZFwiKVxuICAgIHJldHVybiB0aGlzLndpbmRvd01hbmFnZXJcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBaaGlCcm93c2VyV2luZG93XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7QUFBQSxJQUFJLElBQUksT0FBTztBQUNmLElBQUksSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLEtBQUssSUFBSSxFQUFFLEdBQUcsR0FBRyxFQUFFLFlBQVksTUFBSSxjQUFjLE1BQUksVUFBVSxNQUFJLE9BQU8sRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUk7QUFDN0csSUFBSSxJQUFJLENBQUMsR0FBRyxHQUFHLE9BQU8sRUFBRSxHQUFHLE9BQU8sS0FBSyxXQUFXLElBQUksS0FBSyxHQUFHLENBQUMsR0FBRztBQUNsRSxJQUFNLElBQUksTUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBSWQsT0FBTyxzQkFBc0I7QUFDM0IsV0FBTyxFQUFFLGNBQWMsT0FBTyxTQUFTLEtBQUssUUFBUSxxQkFBcUIsSUFBSSxLQUFLO0FBQUEsRUFDcEY7QUFDRjtBQUNBLElBQUksSUFBSTtBQUlSLEVBQUUsR0FBRyxVQUFVLE9BQU8sVUFBVSxHQUFHO0FBQUE7QUFBQTtBQUduQyxFQUFFLEdBQUcsZUFBZSxPQUFPLFNBQVMsR0FBRztBQUFBO0FBQUE7QUFHdkMsRUFBRSxHQUFHLG9CQUFvQixHQUFHO0FBQUE7QUFBQTtBQUc1QixFQUFFLEdBQUcsY0FBYyxNQUFNLENBQUMsRUFBRSxlQUFlLENBQUMsT0FBTyxhQUFhLENBQUMsT0FBTyxVQUFVLFlBQVksUUFBSyxXQUFXLEtBQUssT0FBTyxVQUFVLFNBQVMsQ0FBQztBQUFBO0FBQUE7QUFHOUksRUFBRSxHQUFHLGNBQWMsTUFBTSxFQUFFLFdBQVcsS0FBSyxFQUFFLE1BQU07QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtuRCxF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
