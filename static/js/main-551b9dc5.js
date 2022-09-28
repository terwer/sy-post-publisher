import { d as defineComponent, o as onMounted, l as logUtil, g as getWidgetId, i as isInChromeExtension, c as createElementBlock, a as createVNode, b as openBlock, e as createApp, f as i18n, h as installer } from "./css-vars-653a9e89.js";
import { _ as _sfc_main$1, c as createPinia } from "./PublishService.vue_vue_type_script_setup_true_lang-b77d5361.js";
const __default__ = {
  name: "App"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    onMounted(async () => {
      logUtil.logWarn("MODE=>", "production");
      const widgetResult = await getWidgetId();
      if (widgetResult.isInSiyuan) {
        logUtil.logWarn("\u5F53\u524D\u9875\u9762ID\u662F=>", widgetResult.widgetId);
        logUtil.logWarn("\u5F53\u524D\u5904\u4E8E\u6302\u4EF6\u6A21\u5F0F\uFF0C\u4F7F\u7528electron\u7684fetch\u83B7\u53D6\u6570\u636E");
      } else if (isInChromeExtension()) {
        logUtil.logWarn("\u5F53\u524D\u5904\u4E8EChrome\u63D2\u4EF6\u4E2D\uFF0C\u9700\u8981\u6A21\u62DFfetch\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898");
      } else {
        logUtil.logWarn("\u5F53\u524D\u5904\u4E8E\u975E\u6302\u4EF6\u6A21\u5F0F\uFF0C\u5DF2\u5F00\u542F\u8BF7\u6C42\u4EE3\u7406\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898");
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [createVNode(_sfc_main$1, {
        "page-id": void 0
      })]);
    };
  }
});
const style = "";
const cssVars = "";
const app = createApp(_sfc_main);
const pinia = createPinia();
app.use(pinia);
app.use(i18n);
app.use(installer);
app.directive("focus", {
  mounted(el) {
    el.focus();
  }
});
app.mount("#app");
