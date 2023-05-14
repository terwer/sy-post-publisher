"use strict";
var de = Object.defineProperty;
var we = (e, i, t) => i in e ? de(e, i, { enumerable: true, configurable: true, writable: true, value: t }) : e[i] = t;
var z = (e, i, t) => (we(e, typeof i != "symbol" ? i + "" : i, t), t);
var be = Object.defineProperty, me = (e, i, t) => i in e ? be(e, i, { enumerable: true, configurable: true, writable: true, value: t }) : e[i] = t, P = (e, i, t) => (me(e, typeof i != "symbol" ? i + "" : i, t), t);
const I = class {
  /**
   * 检测是否运行在Chrome插件中
   */
  static isInChromeExtension() {
    return I.isInBrowser ? window.location.href.indexOf("chrome-extension://") > -1 : false;
  }
};
let m = I;
P(m, "isNode", typeof process < "u"), /**
* 是否在浏览器环境
*/
P(m, "isInBrowser", typeof window < "u"), /**
* 浏览器路径分隔符
*/
P(m, "BrowserSeperator", "/"), /**
* 是否是Electron环境
*/
P(m, "isElectron", () => !I.isInBrowser || !window.navigator || !window.navigator.userAgent ? false : /Electron/.test(window.navigator.userAgent)), /**
* 是否有Node环境，目前包括 Electron 和 Node
*/
P(m, "hasNodeEnv", () => I.isElectron() || I.isNode), /**
* 获取url参数
*
* @param sParam - 参数
*/
P(m, "getQueryString", (e) => {
  if (!I.isInBrowser)
    return "";
  const i = window.location.search.substring(1).split("&");
  for (let t = 0; t < i.length; t++) {
    const r = i[t].split("=");
    if (r[0] === e)
      return r[1];
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
P(m, "replaceUrlParam", (e, i, t) => {
  t == null && (t = "");
  const r = new RegExp("\\b(" + i + "=).*?(&|#|$)");
  if (e.search(r) >= 0)
    return e.replace(r, "$1" + t + "$2");
  const [n, o] = e.split("#"), [s, l] = n.split("?"), c = new URLSearchParams(l);
  c.set(i, t);
  const u = c.toString(), a = s + (u ? "?" + u : "");
  return o ? a + "#" + o : a;
}), /**
* 设置url参数
*
* @param urlstring - url
* @param key - key
* @param value - value
*/
P(m, "setUrlParameter", (e, i, t) => {
  if (e.includes(i))
    return I.replaceUrlParam(e, i, t);
  const r = e.split("#");
  let n = r[0];
  const o = r[1];
  return n.includes("?") ? n += `&${i}=${t}` : n += `?${i}=${t}`, o && (n += "#" + o), n;
}), /**
* 重新加载指定tab
*
* @param tabname - tabname
* @param t - 延迟时间
*/
P(m, "reloadTabPage", (e, i = 200) => {
  setTimeout(function() {
    if (I.isInBrowser) {
      const t = window.location.href;
      window.location.href = I.setUrlParameter(t, "tab", e);
    }
  }, i);
}), /**
* 刷新当前tab页面
*/
P(m, "reloadPage", () => {
  setTimeout(function() {
    I.isInBrowser && window.location.reload();
  }, 200);
}), /**
* 刷新当前tab页面
*
* @param msg - 消息提示
* @param cb - 回调
*/
P(m, "reloadPageWithMessageCallback", (e, i) => {
  i && i(), setTimeout(function() {
    I.isInBrowser && window.location.reload();
  }, 200);
});
var D = /* @__PURE__ */ ((e) => (e.BasePathType_Appearance = "Appearance", e.BasePathType_Data = "Data", e.BasePathType_Themes = "Themes", e.BasePathType_ZhiTheme = "ZhiTheme", e.BasePathType_None = "None", e))(D || {});
const N = class {
  /**
   * 检测是否运行在思源打开的浏览器中
   */
  static isInSiyuanBrowser() {
    return m.isInBrowser ? typeof window.siyuan < "u" && typeof window.Lute < "u" : false;
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
  static async importJs(e, i) {
    let t = e;
    switch (i) {
      case D.BasePathType_Appearance:
        t = this.browserJoinPath(this.siyuanAppearanceRelativePath(), e);
        break;
      case D.BasePathType_Data:
        t = this.browserJoinPath(this.siyuanDataRelativePath(), e);
        break;
      case D.BasePathType_Themes:
        t = this.browserJoinPath(this.siyuanThemeRelativePath(), e);
        break;
      case D.BasePathType_ZhiTheme:
        t = this.browserJoinPath(this.zhiThemeRelativePath(), e);
        break;
      default:
        throw new Error("type must be provided");
    }
    const { default: r } = await import(
      /* @vite-ignore */
      t
    );
    return r;
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
    return await this.importJs(e, D.BasePathType_ZhiTheme);
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
    if (m.hasNodeEnv()) {
      const i = this.requireLib("path");
      if (i)
        return i.join(...e);
    }
    return this.browserJoinPath(...e);
  }
  static browserJoinPath(...e) {
    return e.join(m.BrowserSeperator);
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
    if (m.hasNodeEnv())
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
let A = N;
P(A, "isInSiyuanWidget", () => m.isInBrowser ? window.frameElement != null && window.frameElement.parentElement != null && window.frameElement.parentElement.parentElement != null && window.frameElement.parentElement.parentElement.getAttribute("data-node-id") !== "" : false), /**
* 思源笔记新窗口
*
* @deprecated window.terwer 判断方式已废弃，建议以后打开新窗口注入 window.siyuanNewWin ，这样语义会更容易理解
* @author terwer
* @version 0.1.0
* @since 0.0.1
*/
P(A, "isInSiyuanNewWin", () => !m.isInBrowser || !m.isElectron() ? false : typeof window.terwer < "u" || typeof window.siyuanNewWin < "u"), // =========================
// require start
// =========================
/**
 * 引入依赖
 *
 * @param libpath - 依赖全路径
 * @param abs - 可选，是否使用觉得路径，默认是 true ， 启用之后 type参数无效
 * @param type - 可选，以谁的基本路径为准
 */
P(A, "requireLib", (e, i = true, t = D.BasePathType_None) => {
  if (!m.hasNodeEnv())
    throw new Error("require ony works on node env");
  let r = e;
  if (!i)
    switch (t) {
      case D.BasePathType_Appearance:
        r = N.joinPath(N.siyuanAppearancePath(), e);
        break;
      case D.BasePathType_Data:
        r = N.joinPath(N.siyuanDataPath(), e);
        break;
      case D.BasePathType_Themes:
        r = N.joinPath(N.siyuanAppearancePath(), "themes", e);
        break;
      case D.BasePathType_ZhiTheme:
        r = N.joinPath(N.siyuanAppearancePath(), "themes", "zhi", e);
        break;
      default:
        throw new Error("type must be provided when not use absolute path");
    }
  const n = N.siyuanWindow();
  if (!n)
    return require(r);
  if (typeof n.require < "u")
    return n.require(r);
}), /**
* 引入依赖，以 data 的基本路径为准
*
* @param libpath - 相对于 appearance 的相对路径
*/
P(A, "requireAppearanceLib", (e) => N.requireLib(e, false, D.BasePathType_Appearance)), /**
* 引入依赖，以 data 的基本路径为准
*
* @param libpath - 相对于 data 的相对路径
*/
P(A, "requireDataLib", (e) => N.requireLib(e, false, D.BasePathType_Data)), /**
* 引入依赖，以 theme 的基本路径为准
*
* @param libpath - 相对于 theme 的相对路径
*/
P(A, "requireThemesLib", (e) => N.requireLib(e, false, D.BasePathType_Themes)), /**
* 引入依赖，以 ZhiTheme 的基本路径为准
*
* @param libpath - 相对于 ZhiTheme 的相对路径
*/
P(A, "requireZhiThemeLib", (e) => N.requireLib(e, false, D.BasePathType_ZhiTheme));
var j = /* @__PURE__ */ ((e) => (e.DeviceType_Mobile_Device = "Mobile", e.DeviceType_Siyuan_Widget = "Siyuan_Widget", e.DeviceType_Siyuan_NewWin = "Siyuan_NewWindow", e.DeviceType_Siyuan_MainWin = "Siyuan_MainWindow", e.DeviceType_Siyuan_Browser = "Siyuan_Browser", e.DeviceType_Chrome_Extension = "Chrome_Extension", e.DeviceType_Chrome_Browser = "Chrome_Browser", e.DeviceType_Node = "Node", e))(j || {});
class qe {
  /**
   * 获取当前设备
   */
  static getDevice() {
    return this.detectMobileDevice() ? j.DeviceType_Mobile_Device : A.isInSiyuanWidget() ? j.DeviceType_Siyuan_Widget : A.isInSiyuanNewWin() ? j.DeviceType_Siyuan_NewWin : m.isElectron() ? j.DeviceType_Siyuan_MainWin : A.isInSiyuanBrowser() ? j.DeviceType_Siyuan_Browser : m.isInChromeExtension() ? j.DeviceType_Chrome_Extension : m.isNode ? j.DeviceType_Node : j.DeviceType_Chrome_Browser;
  }
  /**
   * 检测移动端
   * @private
   */
  static detectMobileDevice() {
    let i = false;
    return m.isInBrowser && function(t) {
      (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
        t
      ) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        t.substr(0, 4)
      )) && (i = true);
    }(navigator.userAgent || navigator.vendor || window.opera), i;
  }
}
var fe = Object.defineProperty, ve = (e, i, t) => i in e ? fe(e, i, { enumerable: true, configurable: true, writable: true, value: t }) : e[i] = t, F = (e, i, t) => (ve(e, typeof i != "symbol" ? i + "" : i, t), t);
let q = class {
};
F(q, "NODE_ENV_KEY", "NODE_ENV"), /**
* 开发环境
*/
F(q, "NODE_ENV_DEVELOPMENT", "development"), /**
* 生产环境
*/
F(q, "NODE_ENV_PRODUCTION", "production"), /**
* 测试环境
*/
F(q, "NODE_ENV_TEST", "test"), /**
* 是否处于调试模式
*/
F(q, "VITE_DEBUG_MODE_KEY", "VITE_DEBUG_MODE");
let Ee = class {
  /**
   * 环境初始化
   *
   * @param envMeta - 需要传入 {"BASE_URL":"/","MODE":"production","DEV":false,"PROD":true,"SSR":false} 。特别提醒：此参数是静态元数据，取决于最终使用的项目。因此仅仅在最终使用的地方显示传递此值，中间项目请保持参数传递
   * @see {@link https://vitejs.dev/guide/env-and-mode.html#production-replacement}
   */
  constructor(i) {
    F(this, "envMeta"), this.envMeta = i;
  }
  /**
   * 是否是开发阶段调试
   */
  isNodeDev() {
    return this.getEnv(q.NODE_ENV_KEY) === q.NODE_ENV_DEVELOPMENT;
  }
  /**
   * 是否是调试阶段
   */
  isDev() {
    return this.isNodeDev() || this.getBooleanEnv(q.VITE_DEBUG_MODE_KEY);
  }
  /**
   * 获取环境变量，key不存在返回undefined
   * @param key - key
   */
  getEnv(i) {
    let t;
    try {
      this.envMeta[i] && (t = this.envMeta[i]);
    } catch {
    }
    return t;
  }
  /**
   * 获取String类型的环境变量，key不存在直接返回空值
   * @param key - key
   */
  getStringEnv(i) {
    return this.getEnv(i) ?? "";
  }
  /**
   * 获取Boolean类型的环境变量，key不存在返回false
   * @param key - key
   */
  getBooleanEnv(i) {
    let t = false;
    return this.getEnv(i) && (t = this.getStringEnv(i).toLowerCase() === "true"), t;
  }
  /**
   * 获取环境变量，如果未定义或者为空值，用指定的默认值代替
   *
   * @param key - key
   * @param defaultValue - 默认值
   * @since 0.1.0
   * @author terwer
   */
  getEnvOrDefault(i, t) {
    const r = this.getStringEnv(i);
    return r.trim().length == 0 ? t : r;
  }
};
var Pe = Object.defineProperty, Te = (e, i, t) => i in e ? Pe(e, i, { enumerable: true, configurable: true, writable: true, value: t }) : e[i] = t, V = (e, i, t) => (Te(e, typeof i != "symbol" ? i + "" : i, t), t);
class Z {
}
V(Z, "LOG_LEVEL_KEY", "VITE_LOG_LEVEL"), V(Z, "LOG_PREFIX_KEY", "VITE_LOG_PREFIX");
var W = /* @__PURE__ */ ((e) => (e.LOG_LEVEL_TRACE = "TRACE", e.LOG_LEVEL_DEBUG = "DEBUG", e.LOG_LEVEL_INFO = "INFO", e.LOG_LEVEL_WARN = "WARN", e.LOG_LEVEL_ERROR = "ERROR", e))(W || {}), ce = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, $ = {}, _e = {
  get exports() {
    return $;
  },
  set exports(e) {
    $ = e;
  }
};
(function(e) {
  (function(i, t) {
    e.exports ? e.exports = t() : i.log = t();
  })(ce, function() {
    var i = function() {
    }, t = "undefined", r = typeof window !== t && typeof window.navigator !== t && /Trident\/|MSIE /.test(window.navigator.userAgent), n = [
      "trace",
      "debug",
      "info",
      "warn",
      "error"
    ];
    function o(g, v) {
      var _ = g[v];
      if (typeof _.bind == "function")
        return _.bind(g);
      try {
        return Function.prototype.bind.call(_, g);
      } catch {
        return function() {
          return Function.prototype.apply.apply(_, [g, arguments]);
        };
      }
    }
    function s() {
      console.log && (console.log.apply ? console.log.apply(console, arguments) : Function.prototype.apply.apply(console.log, [console, arguments])), console.trace && console.trace();
    }
    function l(g) {
      return g === "debug" && (g = "log"), typeof console === t ? false : g === "trace" && r ? s : console[g] !== void 0 ? o(console, g) : console.log !== void 0 ? o(console, "log") : i;
    }
    function c(g, v) {
      for (var _ = 0; _ < n.length; _++) {
        var d = n[_];
        this[d] = _ < g ? i : this.methodFactory(d, g, v);
      }
      this.log = this.debug;
    }
    function u(g, v, _) {
      return function() {
        typeof console !== t && (c.call(this, v, _), this[g].apply(this, arguments));
      };
    }
    function a(g, v, _) {
      return l(g) || u.apply(this, arguments);
    }
    function b(g, v, _) {
      var d = this, J;
      v = v ?? "WARN";
      var f = "loglevel";
      typeof g == "string" ? f += ":" + g : typeof g == "symbol" && (f = void 0);
      function X(p) {
        var B = (n[p] || "silent").toUpperCase();
        if (!(typeof window === t || !f)) {
          try {
            window.localStorage[f] = B;
            return;
          } catch {
          }
          try {
            window.document.cookie = encodeURIComponent(f) + "=" + B + ";";
          } catch {
          }
        }
      }
      function Y() {
        var p;
        if (!(typeof window === t || !f)) {
          try {
            p = window.localStorage[f];
          } catch {
          }
          if (typeof p === t)
            try {
              var B = window.document.cookie, M = B.indexOf(
                encodeURIComponent(f) + "="
              );
              M !== -1 && (p = /^([^;]+)/.exec(B.slice(M))[1]);
            } catch {
            }
          return d.levels[p] === void 0 && (p = void 0), p;
        }
      }
      function Q() {
        if (!(typeof window === t || !f)) {
          try {
            window.localStorage.removeItem(f);
            return;
          } catch {
          }
          try {
            window.document.cookie = encodeURIComponent(f) + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
          } catch {
          }
        }
      }
      d.name = g, d.levels = {
        TRACE: 0,
        DEBUG: 1,
        INFO: 2,
        WARN: 3,
        ERROR: 4,
        SILENT: 5
      }, d.methodFactory = _ || a, d.getLevel = function() {
        return J;
      }, d.setLevel = function(p, B) {
        if (typeof p == "string" && d.levels[p.toUpperCase()] !== void 0 && (p = d.levels[p.toUpperCase()]), typeof p == "number" && p >= 0 && p <= d.levels.SILENT) {
          if (J = p, B !== false && X(p), c.call(d, p, g), typeof console === t && p < d.levels.SILENT)
            return "No console available for logging";
        } else
          throw "log.setLevel() called with invalid level: " + p;
      }, d.setDefaultLevel = function(p) {
        v = p, Y() || d.setLevel(p, false);
      }, d.resetLevel = function() {
        d.setLevel(v, false), Q();
      }, d.enableAll = function(p) {
        d.setLevel(d.levels.TRACE, p);
      }, d.disableAll = function(p) {
        d.setLevel(d.levels.SILENT, p);
      };
      var O = Y();
      O == null && (O = v), d.setLevel(O, false);
    }
    var E = new b(), L = {};
    E.getLogger = function(g) {
      if (typeof g != "symbol" && typeof g != "string" || g === "")
        throw new TypeError("You must supply a name when creating a logger.");
      var v = L[g];
      return v || (v = L[g] = new b(
        g,
        E.getLevel(),
        E.methodFactory
      )), v;
    };
    var U = typeof window !== t ? window.log : void 0;
    return E.noConflict = function() {
      return typeof window !== t && window.log === E && (window.log = U), E;
    }, E.getLoggers = function() {
      return L;
    }, E.default = E, E;
  });
})(_e);
var H = {}, Le = {
  get exports() {
    return H;
  },
  set exports(e) {
    H = e;
  }
};
(function(e) {
  (function(i, t) {
    e.exports ? e.exports = t() : i.prefix = t(i);
  })(ce, function(i) {
    var t = function(a) {
      for (var b = 1, E = arguments.length, L; b < E; b++)
        for (L in arguments[b])
          Object.prototype.hasOwnProperty.call(arguments[b], L) && (a[L] = arguments[b][L]);
      return a;
    }, r = {
      template: "[%t] %l:",
      levelFormatter: function(a) {
        return a.toUpperCase();
      },
      nameFormatter: function(a) {
        return a || "root";
      },
      timestampFormatter: function(a) {
        return a.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
      },
      format: void 0
    }, n, o = {}, s = function(a) {
      if (!a || !a.getLogger)
        throw new TypeError("Argument is not a root logger");
      n = a;
    }, l = function(a, b) {
      if (!a || !a.setLevel)
        throw new TypeError("Argument is not a logger");
      var E = a.methodFactory, L = a.name || "", U = o[L] || o[""] || r;
      function g(v, _, d) {
        var J = E(v, _, d), f = o[d] || o[""], X = f.template.indexOf("%t") !== -1, Y = f.template.indexOf("%l") !== -1, Q = f.template.indexOf("%n") !== -1;
        return function() {
          for (var O = "", p = arguments.length, B = Array(p), M = 0; M < p; M++)
            B[M] = arguments[M];
          if (L || !o[d]) {
            var ne = f.timestampFormatter(/* @__PURE__ */ new Date()), re = f.levelFormatter(v), oe = f.nameFormatter(d);
            f.format ? O += f.format(re, oe, ne) : (O += f.template, X && (O = O.replace(/%t/, ne)), Y && (O = O.replace(/%l/, re)), Q && (O = O.replace(/%n/, oe))), B.length && typeof B[0] == "string" ? B[0] = O + " " + B[0] : B.unshift(O);
          }
          J.apply(void 0, B);
        };
      }
      return o[L] || (a.methodFactory = g), b = b || {}, b.template && (b.format = void 0), o[L] = t({}, U, b), a.setLevel(a.getLevel()), n || a.warn(
        "It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"
      ), a;
    }, c = {
      reg: s,
      apply: l
    }, u;
    return i && (u = i.prefix, c.noConflict = function() {
      return i.prefix === c && (i.prefix = u), c;
    }), c;
  });
})(Le);
function Be() {
  const e = Error.prepareStackTrace;
  Error.prepareStackTrace = (t, r) => r;
  const i = new Error().stack.slice(1);
  return Error.prepareStackTrace = e, i;
}
class K {
  /**
   * 解析日志级别为枚举
   *
   * @param enumObj - 枚举对象
   * @param value - 配置的值
   */
  static stringToEnumValue(i, t) {
    return i[Object.keys(i).filter((r) => i[r].toString() === t)[0]];
  }
  /**
   * 获取配置的日志级别
   */
  static getEnvLevel(i) {
    if (!i)
      return;
    const t = i.getEnvOrDefault(Z.LOG_LEVEL_KEY, W.LOG_LEVEL_INFO), r = K.stringToEnumValue(W, t.toUpperCase());
    return r || console.warn(
      "[zhi-log] LOG_LEVEL is invalid in you .env file.It must be either debug, info, warn or error, fallback to default info level"
    ), r;
  }
  /**
   * 获取默认日志
   */
  static getEnvLogger(i) {
    return i ? i.getEnv(Z.LOG_PREFIX_KEY) : void 0;
  }
}
var k = {}, ke = {
  get exports() {
    return k;
  },
  set exports(e) {
    k = e;
  }
}, ee = {}, De = {
  get exports() {
    return ee;
  },
  set exports(e) {
    ee = e;
  }
}, ae;
function Se() {
  return ae || (ae = 1, function(e) {
    const i = typeof process < "u" && process.env.TERM_PROGRAM === "Hyper", t = typeof process < "u" && process.platform === "win32", r = typeof process < "u" && process.platform === "linux", n = {
      ballotDisabled: "☒",
      ballotOff: "☐",
      ballotOn: "☑",
      bullet: "•",
      bulletWhite: "◦",
      fullBlock: "█",
      heart: "❤",
      identicalTo: "≡",
      line: "─",
      mark: "※",
      middot: "·",
      minus: "－",
      multiplication: "×",
      obelus: "÷",
      pencilDownRight: "✎",
      pencilRight: "✏",
      pencilUpRight: "✐",
      percent: "%",
      pilcrow2: "❡",
      pilcrow: "¶",
      plusMinus: "±",
      question: "?",
      section: "§",
      starsOff: "☆",
      starsOn: "★",
      upDownArrow: "↕"
    }, o = Object.assign({}, n, {
      check: "√",
      cross: "×",
      ellipsisLarge: "...",
      ellipsis: "...",
      info: "i",
      questionSmall: "?",
      pointer: ">",
      pointerSmall: "»",
      radioOff: "( )",
      radioOn: "(*)",
      warning: "‼"
    }), s = Object.assign({}, n, {
      ballotCross: "✘",
      check: "✔",
      cross: "✖",
      ellipsisLarge: "⋯",
      ellipsis: "…",
      info: "ℹ",
      questionFull: "？",
      questionSmall: "﹖",
      pointer: r ? "▸" : "❯",
      pointerSmall: r ? "‣" : "›",
      radioOff: "◯",
      radioOn: "◉",
      warning: "⚠"
    });
    e.exports = t && !i ? o : s, Reflect.defineProperty(e.exports, "common", { enumerable: false, value: n }), Reflect.defineProperty(e.exports, "windows", { enumerable: false, value: o }), Reflect.defineProperty(e.exports, "other", { enumerable: false, value: s });
  }(De)), ee;
}
const Oe = (e) => e !== null && typeof e == "object" && !Array.isArray(e), Ne = /[\u001b\u009b][[\]#;?()]*(?:(?:(?:[^\W_]*;?[^\W_]*)\u0007)|(?:(?:[0-9]{1,4}(;[0-9]{0,4})*)?[~0-9=<>cf-nqrtyA-PRZ]))/g, xe = () => typeof process < "u" ? process.env.FORCE_COLOR !== "0" : false, ue = () => {
  const e = {
    enabled: xe(),
    visible: true,
    styles: {},
    keys: {}
  }, i = (o) => {
    let s = o.open = `\x1B[${o.codes[0]}m`, l = o.close = `\x1B[${o.codes[1]}m`, c = o.regex = new RegExp(`\\u001b\\[${o.codes[1]}m`, "g");
    return o.wrap = (u, a) => {
      u.includes(l) && (u = u.replace(c, l + s));
      let b = s + u + l;
      return a ? b.replace(/\r*\n/g, `${l}$&${s}`) : b;
    }, o;
  }, t = (o, s, l) => typeof o == "function" ? o(s) : o.wrap(s, l), r = (o, s) => {
    if (o === "" || o == null)
      return "";
    if (e.enabled === false)
      return o;
    if (e.visible === false)
      return "";
    let l = "" + o, c = l.includes(`
`), u = s.length;
    for (u > 0 && s.includes("unstyle") && (s = [.../* @__PURE__ */ new Set(["unstyle", ...s])].reverse()); u-- > 0; )
      l = t(e.styles[s[u]], l, c);
    return l;
  }, n = (o, s, l) => {
    e.styles[o] = i({ name: o, codes: s }), (e.keys[l] || (e.keys[l] = [])).push(o), Reflect.defineProperty(e, o, {
      configurable: true,
      enumerable: true,
      set(c) {
        e.alias(o, c);
      },
      get() {
        let c = (u) => r(u, c.stack);
        return Reflect.setPrototypeOf(c, e), c.stack = this.stack ? this.stack.concat(o) : [o], c;
      }
    });
  };
  return n("reset", [0, 0], "modifier"), n("bold", [1, 22], "modifier"), n("dim", [2, 22], "modifier"), n("italic", [3, 23], "modifier"), n("underline", [4, 24], "modifier"), n("inverse", [7, 27], "modifier"), n("hidden", [8, 28], "modifier"), n("strikethrough", [9, 29], "modifier"), n("black", [30, 39], "color"), n("red", [31, 39], "color"), n("green", [32, 39], "color"), n("yellow", [33, 39], "color"), n("blue", [34, 39], "color"), n("magenta", [35, 39], "color"), n("cyan", [36, 39], "color"), n("white", [37, 39], "color"), n("gray", [90, 39], "color"), n("grey", [90, 39], "color"), n("bgBlack", [40, 49], "bg"), n("bgRed", [41, 49], "bg"), n("bgGreen", [42, 49], "bg"), n("bgYellow", [43, 49], "bg"), n("bgBlue", [44, 49], "bg"), n("bgMagenta", [45, 49], "bg"), n("bgCyan", [46, 49], "bg"), n("bgWhite", [47, 49], "bg"), n("blackBright", [90, 39], "bright"), n("redBright", [91, 39], "bright"), n("greenBright", [92, 39], "bright"), n("yellowBright", [93, 39], "bright"), n("blueBright", [94, 39], "bright"), n("magentaBright", [95, 39], "bright"), n("cyanBright", [96, 39], "bright"), n("whiteBright", [97, 39], "bright"), n("bgBlackBright", [100, 49], "bgBright"), n("bgRedBright", [101, 49], "bgBright"), n("bgGreenBright", [102, 49], "bgBright"), n("bgYellowBright", [103, 49], "bgBright"), n("bgBlueBright", [104, 49], "bgBright"), n("bgMagentaBright", [105, 49], "bgBright"), n("bgCyanBright", [106, 49], "bgBright"), n("bgWhiteBright", [107, 49], "bgBright"), e.ansiRegex = Ne, e.hasColor = e.hasAnsi = (o) => (e.ansiRegex.lastIndex = 0, typeof o == "string" && o !== "" && e.ansiRegex.test(o)), e.alias = (o, s) => {
    let l = typeof s == "string" ? e[s] : s;
    if (typeof l != "function")
      throw new TypeError("Expected alias to be the name of an existing color (string) or a function");
    l.stack || (Reflect.defineProperty(l, "name", { value: o }), e.styles[o] = l, l.stack = [o]), Reflect.defineProperty(e, o, {
      configurable: true,
      enumerable: true,
      set(c) {
        e.alias(o, c);
      },
      get() {
        let c = (u) => r(u, c.stack);
        return Reflect.setPrototypeOf(c, e), c.stack = this.stack ? this.stack.concat(l.stack) : l.stack, c;
      }
    });
  }, e.theme = (o) => {
    if (!Oe(o))
      throw new TypeError("Expected theme to be an object");
    for (let s of Object.keys(o))
      e.alias(s, o[s]);
    return e;
  }, e.alias("unstyle", (o) => typeof o == "string" && o !== "" ? (e.ansiRegex.lastIndex = 0, o.replace(e.ansiRegex, "")) : ""), e.alias("noop", (o) => o), e.none = e.clear = e.noop, e.stripColor = e.unstyle, e.symbols = Se(), e.define = n, e;
};
ke.exports = ue();
k.create = ue;
let te, he, ge, pe, ye = true;
typeof process < "u" && ({ FORCE_COLOR: te, NODE_DISABLE_COLORS: he, NO_COLOR: ge, TERM: pe } = process.env || {}, ye = process.stdout && process.stdout.isTTY);
const h = {
  enabled: !he && ge == null && pe !== "dumb" && (te != null && te !== "0" || ye),
  // modifiers
  reset: w(0, 0),
  bold: w(1, 22),
  dim: w(2, 22),
  italic: w(3, 23),
  underline: w(4, 24),
  inverse: w(7, 27),
  hidden: w(8, 28),
  strikethrough: w(9, 29),
  // colors
  black: w(30, 39),
  red: w(31, 39),
  green: w(32, 39),
  yellow: w(33, 39),
  blue: w(34, 39),
  magenta: w(35, 39),
  cyan: w(36, 39),
  white: w(37, 39),
  gray: w(90, 39),
  grey: w(90, 39),
  // background colors
  bgBlack: w(40, 49),
  bgRed: w(41, 49),
  bgGreen: w(42, 49),
  bgYellow: w(43, 49),
  bgBlue: w(44, 49),
  bgMagenta: w(45, 49),
  bgCyan: w(46, 49),
  bgWhite: w(47, 49)
};
function se(e, i) {
  let t = 0, r, n = "", o = "";
  for (; t < e.length; t++)
    r = e[t], n += r.open, o += r.close, ~i.indexOf(r.close) && (i = i.replace(r.rgx, r.close + r.open));
  return n + i + o;
}
function Re(e, i) {
  let t = { has: e, keys: i };
  return t.reset = h.reset.bind(t), t.bold = h.bold.bind(t), t.dim = h.dim.bind(t), t.italic = h.italic.bind(t), t.underline = h.underline.bind(t), t.inverse = h.inverse.bind(t), t.hidden = h.hidden.bind(t), t.strikethrough = h.strikethrough.bind(t), t.black = h.black.bind(t), t.red = h.red.bind(t), t.green = h.green.bind(t), t.yellow = h.yellow.bind(t), t.blue = h.blue.bind(t), t.magenta = h.magenta.bind(t), t.cyan = h.cyan.bind(t), t.white = h.white.bind(t), t.gray = h.gray.bind(t), t.grey = h.grey.bind(t), t.bgBlack = h.bgBlack.bind(t), t.bgRed = h.bgRed.bind(t), t.bgGreen = h.bgGreen.bind(t), t.bgYellow = h.bgYellow.bind(t), t.bgBlue = h.bgBlue.bind(t), t.bgMagenta = h.bgMagenta.bind(t), t.bgCyan = h.bgCyan.bind(t), t.bgWhite = h.bgWhite.bind(t), t;
}
function w(e, i) {
  let t = {
    open: `\x1B[${e}m`,
    close: `\x1B[${i}m`,
    rgx: new RegExp(`\\x1b\\[${i}m`, "g")
  };
  return function(r) {
    return this !== void 0 && this.has !== void 0 ? (~this.has.indexOf(e) || (this.has.push(e), this.keys.push(t)), r === void 0 ? this : h.enabled ? se(this.keys, r + "") : r + "") : r === void 0 ? Re([e], [t]) : h.enabled ? se([t], r + "") : r + "";
  };
}
var Ie = Object.defineProperty, Ce = (e, i, t) => i in e ? Ie(e, i, { enumerable: true, configurable: true, writable: true, value: t }) : e[i] = t, T = (e, i, t) => (Ce(e, typeof i != "symbol" ? i + "" : i, t), t);
const C = class {
  /**
   * 检测是否运行在Chrome插件中
   */
  static isInChromeExtension() {
    return C.isInBrowser ? window.location.href.indexOf("chrome-extension://") > -1 : false;
  }
};
let y = C;
T(y, "isNode", typeof process < "u"), /**
* 是否在浏览器环境
*/
T(y, "isInBrowser", typeof window < "u"), /**
* 浏览器路径分隔符
*/
T(y, "BrowserSeperator", "/"), /**
* 是否是Electron环境
*/
T(y, "isElectron", () => !C.isInBrowser || !window.navigator || !window.navigator.userAgent ? false : /Electron/.test(window.navigator.userAgent)), /**
* 是否有Node环境，目前包括 Electron 和 Node
*/
T(y, "hasNodeEnv", () => C.isElectron() || C.isNode), /**
* 获取url参数
*
* @param sParam - 参数
*/
T(y, "getQueryString", (e) => {
  if (!C.isInBrowser)
    return "";
  const i = window.location.search.substring(1).split("&");
  for (let t = 0; t < i.length; t++) {
    const r = i[t].split("=");
    if (r[0] === e)
      return r[1];
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
T(y, "replaceUrlParam", (e, i, t) => {
  t == null && (t = "");
  const r = new RegExp("\\b(" + i + "=).*?(&|#|$)");
  if (e.search(r) >= 0)
    return e.replace(r, "$1" + t + "$2");
  const [n, o] = e.split("#"), [s, l] = n.split("?"), c = new URLSearchParams(l);
  c.set(i, t);
  const u = c.toString(), a = s + (u ? "?" + u : "");
  return o ? a + "#" + o : a;
}), /**
* 设置url参数
*
* @param urlstring - url
* @param key - key
* @param value - value
*/
T(y, "setUrlParameter", (e, i, t) => {
  if (e.includes(i))
    return C.replaceUrlParam(e, i, t);
  const r = e.split("#");
  let n = r[0];
  const o = r[1];
  return n.includes("?") ? n += `&${i}=${t}` : n += `?${i}=${t}`, o && (n += "#" + o), n;
}), /**
* 重新加载指定tab
*
* @param tabname - tabname
* @param t - 延迟时间
*/
T(y, "reloadTabPage", (e, i = 200) => {
  setTimeout(function() {
    if (C.isInBrowser) {
      const t = window.location.href;
      window.location.href = C.setUrlParameter(t, "tab", e);
    }
  }, i);
}), /**
* 刷新当前tab页面
*/
T(y, "reloadPage", () => {
  setTimeout(function() {
    C.isInBrowser && window.location.reload();
  }, 200);
}), /**
* 刷新当前tab页面
*
* @param msg - 消息提示
* @param cb - 回调
*/
T(y, "reloadPageWithMessageCallback", (e, i) => {
  i && i(), setTimeout(function() {
    C.isInBrowser && window.location.reload();
  }, 200);
});
var S = /* @__PURE__ */ ((e) => (e.BasePathType_Appearance = "Appearance", e.BasePathType_Data = "Data", e.BasePathType_Themes = "Themes", e.BasePathType_ZhiTheme = "ZhiTheme", e.BasePathType_None = "None", e))(S || {});
const x = class {
  /**
   * 检测是否运行在思源打开的浏览器中
   */
  static isInSiyuanBrowser() {
    return y.isInBrowser ? typeof window.siyuan < "u" && typeof window.Lute < "u" : false;
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
  static async importJs(e, i) {
    let t = e;
    switch (i) {
      case S.BasePathType_Appearance:
        t = this.browserJoinPath(this.siyuanAppearanceRelativePath(), e);
        break;
      case S.BasePathType_Data:
        t = this.browserJoinPath(this.siyuanDataRelativePath(), e);
        break;
      case S.BasePathType_Themes:
        t = this.browserJoinPath(this.siyuanThemeRelativePath(), e);
        break;
      case S.BasePathType_ZhiTheme:
        t = this.browserJoinPath(this.zhiThemeRelativePath(), e);
        break;
      default:
        throw new Error("type must be provided");
    }
    const { default: r } = await import(
      /* @vite-ignore */
      t
    );
    return r;
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
    return await this.importJs(e, S.BasePathType_ZhiTheme);
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
    if (y.hasNodeEnv()) {
      const i = this.requireLib("path");
      if (i)
        return i.join(...e);
    }
    return this.browserJoinPath(...e);
  }
  static browserJoinPath(...e) {
    return e.join(y.BrowserSeperator);
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
    if (y.hasNodeEnv())
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
let G = x;
T(G, "isInSiyuanWidget", () => y.isInBrowser ? window.frameElement != null && window.frameElement.parentElement != null && window.frameElement.parentElement.parentElement != null && window.frameElement.parentElement.parentElement.getAttribute("data-node-id") !== "" : false), /**
* 思源笔记新窗口
*
* @deprecated window.terwer 判断方式已废弃，建议以后打开新窗口注入 window.siyuanNewWin ，这样语义会更容易理解
* @author terwer
* @version 0.1.0
* @since 0.0.1
*/
T(G, "isInSiyuanNewWin", () => !y.isInBrowser || !y.isElectron() ? false : typeof window.terwer < "u" || typeof window.siyuanNewWin < "u"), // =========================
// require start
// =========================
/**
 * 引入依赖
 *
 * @param libpath - 依赖全路径
 * @param abs - 可选，是否使用觉得路径，默认是 true ， 启用之后 type参数无效
 * @param type - 可选，以谁的基本路径为准
 */
T(G, "requireLib", (e, i = true, t = S.BasePathType_None) => {
  if (!y.hasNodeEnv())
    throw new Error("require ony works on node env");
  let r = e;
  if (!i)
    switch (t) {
      case S.BasePathType_Appearance:
        r = x.joinPath(x.siyuanAppearancePath(), e);
        break;
      case S.BasePathType_Data:
        r = x.joinPath(x.siyuanDataPath(), e);
        break;
      case S.BasePathType_Themes:
        r = x.joinPath(x.siyuanAppearancePath(), "themes", e);
        break;
      case S.BasePathType_ZhiTheme:
        r = x.joinPath(x.siyuanAppearancePath(), "themes", "zhi", e);
        break;
      default:
        throw new Error("type must be provided when not use absolute path");
    }
  const n = x.siyuanWindow();
  if (!n)
    return require(r);
  if (typeof n.require < "u")
    return n.require(r);
}), /**
* 引入依赖，以 data 的基本路径为准
*
* @param libpath - 相对于 appearance 的相对路径
*/
T(G, "requireAppearanceLib", (e) => x.requireLib(e, false, S.BasePathType_Appearance)), /**
* 引入依赖，以 data 的基本路径为准
*
* @param libpath - 相对于 data 的相对路径
*/
T(G, "requireDataLib", (e) => x.requireLib(e, false, S.BasePathType_Data)), /**
* 引入依赖，以 theme 的基本路径为准
*
* @param libpath - 相对于 theme 的相对路径
*/
T(G, "requireThemesLib", (e) => x.requireLib(e, false, S.BasePathType_Themes)), /**
* 引入依赖，以 ZhiTheme 的基本路径为准
*
* @param libpath - 相对于 ZhiTheme 的相对路径
*/
T(G, "requireZhiThemeLib", (e) => x.requireLib(e, false, S.BasePathType_ZhiTheme));
const R = {
  white: (e) => y.isElectron() ? k.whiteBright(e) : h.white(e),
  gray: (e) => y.isElectron() ? k.gray(e) : h.gray(e),
  blue: (e) => y.isElectron() ? k.blue(e) : h.blue(e),
  green: (e) => y.isElectron() ? k.green(e) : h.green(e),
  yellow: (e) => y.isElectron() ? k.yellow(e) : h.yellow(e),
  red: (e) => y.isElectron() ? k.red(e) : h.red(e),
  bgWhite: (e) => y.isElectron() ? k.bgWhiteBright(e) : h.bgWhite(e),
  bgGrey: (e) => y.isElectron() ? k.bgCyanBright(e) : h.bgCyan(e),
  bgBlue: (e) => y.isElectron() ? k.bgBlueBright(e) : h.bgBlue(e),
  bgGreen: (e) => y.isElectron() ? k.bgGreenBright(e) : h.bgGreen(e),
  bgYellow: (e) => y.isElectron() ? k.bgYellowBright(e) : h.bgYellow(e),
  bgRed: (e) => y.isElectron() ? k.bgRedBright(e) : h.bgRed(e)
};
class Ae {
  constructor(i, t, r) {
    V(this, "consoleLogger", "console"), V(this, "stackSize", 1), V(this, "getLogger", (s) => {
      let l;
      if (s)
        l = s;
      else {
        const c = this.getCallStack(), u = [], a = [];
        for (let b = 0; b < c.length; b++) {
          const E = c[b], L = E.getFileName() ?? "none";
          if (b > this.stackSize - 1)
            break;
          const U = L + "-" + E.getLineNumber() + ":" + E.getColumnNumber();
          u.push(U);
        }
        a.length > 0 && (l = u.join(" -> "));
      }
      return (!l || l.trim().length === 0) && (l = this.consoleLogger), $.getLogger(l);
    }), this.stackSize = 1;
    let n;
    i ? n = i : n = K.getEnvLevel(r), n = n ?? W.LOG_LEVEL_INFO, $.setLevel(n);
    const o = (s, l, c, u) => {
      const a = [], b = t ?? K.getEnvLogger(r) ?? "zhi";
      return a.push(R.gray("[") + u(b) + R.gray("]")), a.push(R.gray("[") + R.gray(c.toString()) + R.gray("]")), a.push(u(s.toUpperCase().toString())), a.push(u(l)), a.push(R.gray(":")), a;
    };
    H.reg($), H.apply($, {
      format(s, l, c) {
        let u = [];
        const a = l ?? "";
        switch (s) {
          case W.LOG_LEVEL_TRACE:
            u = o(s, a, c, R.gray);
            break;
          case W.LOG_LEVEL_DEBUG:
            u = o(s, a, c, R.blue);
            break;
          case W.LOG_LEVEL_INFO:
            u = o(s, a, c, R.green);
            break;
          case W.LOG_LEVEL_WARN:
            u = o(s, a, c, R.yellow);
            break;
          case W.LOG_LEVEL_ERROR:
            u = o(s, a, c, R.red);
            break;
          default:
            u = o(W.LOG_LEVEL_INFO, a, c, R.green);
            break;
        }
        return u.join(" ");
      }
    });
  }
  /**
   * 设置输出栈的深度，默认1
   *
   * @param stackSize - 栈的深度
   */
  setStackSize(i) {
    this.stackSize = i ?? 1;
  }
  /**
   * 获取调用堆栈，若未获取到直接返回空数组
   *
   * @author terwer
   * @since 1.6.0
   */
  getCallStack() {
    let i;
    try {
      i = Be();
    } catch {
      i = [];
    }
    return i;
  }
}
class We {
  /**
   * 默认日志级别
   *
   * @param level - 可选，未设置默认INFO
   * @param sign - 可选前缀，默认zhi
   * @param env - 可选环境变量实例
   */
  constructor(i, t, r) {
    V(this, "logger"), this.logger = new Ae(i, t, r);
  }
  /**
   * 获取日志记录器
   *
   * @param loggerName - 日志记录器名称
   * @param stackSize - 打印栈的深度
   * @protected
   */
  getLogger(i, t) {
    return this.logger.setStackSize(t), this.logger.getLogger(i);
  }
}
class le extends We {
  constructor(i, t, r) {
    super(i, t, r);
  }
  /**
   * 获取默认的日志记录器
   *
   * @param loggerName - 日志记录器名称
   * @param stackSize - 打印栈的深度
   */
  getLogger(i, t) {
    return super.getLogger(i, t);
  }
}
class ie {
  /**
   * 默认日志记录器
   *
   * @param stackSize - 栈的深度
   * @param env - 环境变量实例
   */
  static defaultLogger(i, t) {
    return ie.customLogFactory(void 0, void 0, i).getLogger(void 0, t);
  }
  /**
   * 自定义日志工厂
   *
   * @param level - 级别
   * @param sign - 标志
   * @param env - 环境变量
   */
  static customLogFactory(i, t, r) {
    return new le(i, t, r);
  }
  /**
   * 自定义日志工厂，自定义前缀
   *
   * @param sign - 标志
   * @param env - 环境变量
   */
  static customSignLogFactory(i, t) {
    return new le(void 0, i, t);
  }
}
class Fe {
  constructor() {
    z(this, "logger");
    z(this, "siyuanDevice");
    z(this, "initMethods", {
      /**
       * 初始化 sy-post-publisher 配置文件存储，适用于【iframe挂件模式】、【新窗口模式】以及【js片段模式】
       */
      initLocalStorageMethod: (i2) => {
        const t = this.siyuanDevice.siyuanWindow(), r = this.siyuanDevice.siyuanDataPath();
        if (t.JsonLocalStorage) {
          this.logger.debug("JsonLocalStorage loaded, ignore.", i2);
          return;
        }
        this.siyuanDevice.requireLib(
          `${r}/widgets/sy-post-publisher/lib/json-localstorage/json-localstorage.js`
        ).init("../../../../storage/syp/");
      },
      /**
       * 初始化插槽，仅【iframe挂件模式】、【自定义js片段模式】可用
       */
      initSlotMethod: () => {
        const i2 = this.siyuanDevice.siyuanDataPath();
        this.siyuanDevice.requireLib(`${i2}/widgets/sy-post-publisher/lib/siyuan/silot.js`)();
      },
      /**
       * 初始化主题适配
       * @param entryName 入口名称
       */
      initThemeAdaptor: (i2) => {
        const t = this.siyuanDevice.siyuanWindow(), r = this.siyuanDevice.siyuanDataPath();
        if (t.customstyle) {
          this.logger.debug("customstyle loaded, ignore.", i2);
          return;
        }
        const n = this.siyuanDevice.requireLib(`${r}/widgets/sy-post-publisher/lib/siyuan/theme.js`);
        setTimeout(n, 3e3);
      },
      /**
       * 初始化初始化发布辅助功能
       * @param entryName 入口名称
       */
      initPublishHelper: (i2) => {
        const t = this.siyuanDevice.siyuanWindow(), r = this.siyuanDevice.siyuanDataPath();
        if (t.syp) {
          this.logger.debug("syp已挂载，忽略", i2);
          return;
        }
        this.siyuanDevice.requireLib(
          `${r}/widgets/sy-post-publisher/lib/siyuan/publish-helper.js`
        )();
      },
      /**
       * 初始化 PicGO 配置
       * @param entryName 入口名称
       */
      initPicgoExtension: (i2) => {
        const t = this.siyuanDevice.siyuanWindow(), r = this.siyuanDevice.siyuanDataPath();
        if (t.SyPicgo) {
          this.logger.debug("SyPicgo loaded, ignore.", i2);
          return;
        }
        const n = this.siyuanDevice.requireLib(
          `${r}/widgets/sy-post-publisher/lib/picgo/syPicgo.js`
        ).default, o = n.getCrossPlatformAppDataFolder(), s = `${r}/widgets/sy-post-publisher/lib/picgo/picgo.cfg.json`, l = n.joinPath(o, "sy-picgo"), c = "picgo.cfg.json", u = n.joinPath(l, c);
        n.upgradeCfg(s, l, c), this.logger.debug("PicGO配置文件初始化为=>", u);
        const a = n.initPicgo(u);
        t.SyPicgo = a, this.logger.debug("syPicgo=>", a);
      },
      /**
       * 初始化 SyCmd 配置，适用于【iframe挂件模式】、【新窗口模式】以及【js片段模式】
       * @param entryName 入口名称
       */
      initCmder: (i2) => {
        const t = this.siyuanDevice.siyuanWindow(), r = this.siyuanDevice.siyuanDataPath();
        if (t.SyCmd) {
          this.logger.debug("SyCmd已挂载，忽略", i2);
          return;
        }
        const n = this.siyuanDevice.requireLib(`${r}/widgets/sy-post-publisher/lib/cmd/syCmd.js`);
        t.SyCmd = n, this.logger.debug("syCmd=>", n);
      }
    });
    z(this, "doInit", (i2 = {}) => {
      const {
        isInitLocalStorage: t = false,
        isInitSlot: r = false,
        isInitThemeAdaptor: n = false,
        isInitPublishHelper: o = false,
        isInitPicgoExtension: s = false,
        isInitCmder: l = false
      } = i2;
      t && this.initMethods.initLocalStorageMethod("PublisherHook"), r && this.initMethods.initSlotMethod(), n && this.initMethods.initThemeAdaptor("PublisherHook"), o && this.initMethods.initPublishHelper("PublisherHook"), s && this.initMethods.initPicgoExtension("PublisherHook"), l && this.initMethods.initCmder("PublisherHook");
    });
    const i = new Ee({ BASE_URL: "/", MODE: "production", DEV: false, PROD: true, SSR: false });
    this.logger = ie.customLogFactory(W.LOG_LEVEL_INFO, "publish-hook", i).getLogger(), this.siyuanDevice = A;
  }
  async init() {
    this.logger.info("Initiating sy-post-publisher from publish hook ...");
    try {
      this.doInit({
        isInitLocalStorage: true,
        isInitSlot: true,
        isInitThemeAdaptor: true,
        isInitPublishHelper: true,
        isInitPicgoExtension: true,
        isInitCmder: true
      });
    } catch (i) {
      this.logger.warn("Failed to init sy-post-publisher，it may not work in some case.Error=>", i);
    }
  }
}
(async () => {
  console.warn(
    "从 0.6.8+ 开始，siyuanhook.js 将作为挂件统一的 hook 入口。当前 siyuanhook.js 源码已迁移至：https://github.com/terwer/siyuan-plugin-publisher/tree/main/libs/siyuan-hook 统一管理。"
  );
  try {
    const device = qe.getDevice();
    const publisherHook = new Fe();
    const init = async () => {
      const isElectron = m.isElectron();
      if (!isElectron) {
        console.warn("不在Electron环境中，插槽菜单、JsonLocalStorage等将不可用");
        return;
      }
      const initIframeWidget = () => {
        publisherHook.doInit({
          // 挂载JsonLocalStorage到window
          isInitLocalStorage: true,
          // 初始化插槽
          isInitSlot: true,
          // 初始化主题适配
          isInitThemeAdaptor: true,
          // 初始化发布辅助功能
          isInitPublishHelper: true,
          // 初始化PicGO配置
          isInitPicgoExtension: true,
          // 初始化SyCmd配置
          isInitCmder: true
        });
      };
      const initSiyuanNewWin = () => {
        publisherHook.doInit({
          // 挂载JsonLocalStorage到window
          isInitLocalStorage: true,
          // 初始化发布辅助功能
          isInitPublishHelper: true,
          // 初始化PicGO配置
          isInitPicgoExtension: true,
          // 初始化SyCmd配置
          isInitCmder: true
        });
      };
      const initJsCode = () => {
        publisherHook.doInit({
          // 挂载JsonLocalStorage到window
          isInitLocalStorage: true,
          // 初始化插槽
          isInitSlot: true,
          // 初始化主题适配
          isInitThemeAdaptor: true,
          // 初始化发布辅助功能
          isInitPublishHelper: true,
          // 初始化PicGO配置
          isInitPicgoExtension: true,
          // 初始化SyCmd配置
          isInitCmder: true
        });
      };
      if (device == j.DeviceType_Siyuan_Widget) {
        initIframeWidget();
      } else {
        if (device == j.DeviceType_Siyuan_NewWin) {
          initSiyuanNewWin();
        } else {
          initJsCode();
        }
      }
    };
    await init();
  } catch (e) {
    console.warn("初始化siyuanhook失败，可能导致扩展功能无法使用，请知悉。错误信息如下", e);
  }
})();
