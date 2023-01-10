var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { L as LogFactory, w as getSiyuanCfg, av as sendChromeMessage, aw as isLocalhost, x as isElectron, c as isInChromeExtension, l as isEmptyString, g as getWidgetId } from "./AppLayout.vue_vue_type_script_setup_true_lang-182c0c92.js";
class CommonblogApi {
  constructor() {
    __publicField(this, "logger");
    this.logger = LogFactory.getLogger("utils/platform/commonblog/commonblogApi.ts");
  }
  async fetchCORS(apiUrl, fetchOptions, formJson) {
    const middlewareUrl = getSiyuanCfg().middlewareUrl;
    const middleApiUrl = middlewareUrl + "/fetch";
    this.logger.debug("apiUrl=>", apiUrl);
    this.logger.debug("fetchOptions=>", fetchOptions);
    const originalFetchParams = {
      apiUrl,
      fetchOptions
    };
    if (formJson != null) {
      Object.assign(originalFetchParams, {
        formJson
      });
    }
    const data = {
      fetchParams: originalFetchParams
    };
    const middleFetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    this.logger.debug("middleApiUrl=>", middleApiUrl);
    this.logger.debug("middleFetchOption=>", middleFetchOption);
    return await fetch(middleApiUrl, middleFetchOption);
  }
  async fetchChrome(apiUrl, fetchOptions, formJson) {
    try {
      const reqOps = {
        type: "fetchChromeJson",
        apiUrl,
        fetchCORSOptions: fetchOptions
      };
      if (formJson != null) {
        Object.assign(reqOps, {
          formJson: JSON.stringify(formJson)
        });
      }
      this.logger.debug("fetchChrome reqOps=>", reqOps);
      const resJson = await sendChromeMessage(reqOps);
      this.logger.debug("fetchChromeJson resJson=>", resJson);
      return resJson;
    } catch (e) {
      throw new Error("\u8BF7\u6C42\u5F02\u5E38", e);
    }
  }
  async fetchCall(apiUrl, fetchOptions, formJson) {
    let result;
    if (isLocalhost(apiUrl)) {
      this.logger.warn("\u68C0\u6D4B\u5230\u672C\u5730\u8BF7\u6C42\uFF0C\u76F4\u63A5fetch\u83B7\u53D6\u6570\u636E");
      result = await fetch(apiUrl, fetchOptions);
    } else if (isElectron) {
      this.logger.warn("\u5F53\u524D\u5904\u4E8E\u6302\u4EF6\u6A21\u5F0F\uFF0C\u4F7F\u7528electron\u7684fetch\u83B7\u53D6\u6570\u636E");
      result = await fetch(apiUrl, fetchOptions);
    } else if (isInChromeExtension()) {
      this.logger.warn("\u5F53\u524D\u5904\u4E8EChrome\u63D2\u4EF6\u4E2D\uFF0C\u9700\u8981\u6A21\u62DFfetch\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898");
      result = await this.fetchChrome(apiUrl, fetchOptions, formJson);
    } else {
      this.logger.warn("\u5F53\u524D\u5904\u4E8E\u975E\u6302\u4EF6\u6A21\u5F0F\uFF0C\u5DF2\u5F00\u542F\u8BF7\u6C42\u4EE3\u7406\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898");
      this.logger.warn("formJson=>", formJson);
      result = await this.fetchCORS(apiUrl, fetchOptions, formJson);
    }
    if (!result) {
      throw new Error("\u8BF7\u6C42\u9519\u8BEF\u6216\u8005\u8FD4\u56DE\u7ED3\u679C\u4E3A\u7A7A");
    }
    this.logger.debug("\u6700\u7EC8\u8FD4\u56DE\u7ED9\u524D\u7AEF\u7684\u6570\u636E=>", result);
    return result;
  }
  async fetchEntry(apiUrl, fetchOptions, formJson) {
    const result = await this.fetchCall(apiUrl, fetchOptions, formJson);
    this.logger.debug("\u8BF7\u6C42\u7ED3\u679C\uFF0Cresult=>", result);
    return result;
  }
  parseCORSBody(corsjson) {
    return corsjson.body;
  }
  async doFetch(apiUrl, fetchOptions, formJson) {
    const response = await this.fetchEntry(apiUrl, fetchOptions, formJson);
    if (!response) {
      throw new Error("\u8BF7\u6C42\u5F02\u5E38");
    }
    let resJson;
    const isTest = { "VITE_LOG_INFO_ENABLED": "false", "VITE_SIYUAN_API_URL": "http://127.0.0.1:6806", "VITE_SIYUAN_CONFIG_TOKEN": "", "VITE_MIDDLEWARE_URL": "https://publish.terwer.space/api/middleware" }.TEST === "true";
    if (isTest || typeof response !== "undefined" && response instanceof Response) {
      const statusCode = response.status;
      if (statusCode !== 200) {
        if (statusCode === 401) {
          throw new Error("\u56E0\u6743\u9650\u4E0D\u8DB3\u64CD\u4F5C\u5DF2\u88AB\u7981\u6B62");
        } else if (statusCode > 401) {
          if (statusCode === 413) {
            throw new Error("\u8BF7\u6C42\u5185\u5BB9\u8FC7\u591A\uFF0C\u8BF7\u5220\u51CF\u6587\u7AE0\u6B63\u6587\u4E4B\u540E\u518D\u8BD5");
          }
          let msg = response.statusText;
          if (isEmptyString(msg)) {
            msg = "\u7F51\u7EDC\u8D85\u65F6\u6216\u8005\u670D\u52A1\u5668\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002";
          } else {
            msg = "\u9519\u8BEF\u4FE1\u606F\uFF1A" + msg;
          }
          throw new Error(msg);
        } else {
          throw new Error("fetch\u8BF7\u6C42\u9519\u8BEF");
        }
      }
      if (isLocalhost(apiUrl)) {
        resJson = await response.json();
      } else if (isElectron) {
        resJson = await response.json();
      } else {
        const corsJson = await response.json();
        resJson = this.parseCORSBody(corsJson);
      }
    } else {
      resJson = response;
    }
    return resJson;
  }
  async doFormFetch(apiUrl, fetchOptions, formJson) {
    const widgetResult = getWidgetId();
    if (widgetResult.isInSiyuan) {
      const form = new URLSearchParams();
      formJson.forEach((item) => {
        form.append(item.key, item.value);
      });
      fetchOptions.body = form;
      return await this.doFetch(apiUrl, fetchOptions);
    }
    if (isInChromeExtension()) {
      return await this.doFetch(apiUrl, fetchOptions, formJson);
    } else {
      return await this.doFetch(apiUrl, fetchOptions, formJson);
    }
  }
}
export {
  CommonblogApi as C
};
