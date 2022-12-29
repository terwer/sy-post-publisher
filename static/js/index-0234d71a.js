import { L as LogFactory, _ as _sfc_main$1, g as getWidgetId, i as isInSiyuanNewWinBrowser, a as getSiyuanNewWinPageId, b as getPageId, c as isInChromeExtension, p as pageUtil } from "./AppLayout.vue_vue_type_script_setup_true_lang-d3a631b8.js";
import { _ as _sfc_main$2 } from "./BlogIndex.vue_vue_type_script_setup_true_lang-123e103e.js";
import { P as PublishIndex } from "./PublishIndex-7094dec9.js";
import { S as SiYuanApiAdaptor } from "./api-a5ab0d44.js";
import { M as defineComponent, u as ref, A as onMounted, T as createBlock, U as withCtx, O as openBlock, W as createBaseVNode, P as createElementBlock, a1 as createVNode } from "./vendor-037de53c.js";
import "./vendor_pinia-fef65fa5.js";
import "./vendor_vue-demi-1365f9ef.js";
import "./vendor_vue-i18n-951bfa8c.js";
import "./vendor_element-plus-378ccace.js";
import "./vendor_lodash-es-8db2b480.js";
import "./vendor_rollup-plugin-node-polyfills-2747d496.js";
import "./vendor_before-after-hook-6380be1a.js";
import "./vendor_dayjs-50d7a178.js";
import "./vendor_async-validator-8281a471.js";
import "./vendor_escape-html-2f5becbc.js";
import "./vendor_normalize-wheel-es-b14b3a0e.js";
import "./vendor_highlight-js-4c21db5d.js";
import "./vendor_plantuml-encoder-18698577.js";
import "./vendor_loglevel-bd2e1c44.js";
import "./vendor_loglevel-plugin-prefix-34a2ac06.js";
import "./vendor_browser-fs-access-5b1a413d.js";
import "./vendor_transliteration-0556f169.js";
import "./vendor_shorthash2-e60185c0.js";
import "./vendor_js-yaml-c400b4ba.js";
import "./PostDetailService.vue_vue_type_style_index_0_lang-d1b9582f.js";
import "./PublishService-d5154b92.js";
import "./vendor_copy-to-clipboard-a51858f9.js";
import "./vendor_toggle-selection-441a0a42.js";
import "./vendor_cross-fetch-e4e57030.js";
import "./AnkiIndex-bd14eda6.js";
import "./PicgoIndex.vue_vue_type_style_index_0_lang-534c9615.js";
import "./commonblogApi-053acd88.js";
import "./vendor_js-base64-904ab953.js";
import "./vendor_fast-xml-parser-512675b8.js";
import "./vendor_strnum-597cc196.js";
import "./vendor_xmlrpc-bd2abe58.js";
import "./vendor_xmlbuilder-c2ddcc20.js";
import "./vendor_sax-0603144b.js";
import "./vendor_universal-user-agent-2942920f.js";
import "./vendor_is-plain-object-eb550d51.js";
import "./vendor_deprecation-ea02905c.js";
import "./vendor_once-6031544f.js";
import "./vendor_wrappy-713fc6dc.js";
const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = {
  key: 1
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    const logger = LogFactory.getLogger("pages/index/App.vue");
    const isPublish = ref(false);
    const init = async () => {
      logger.warn("MODE=>", "production");
      const widgetResult = getWidgetId();
      if (widgetResult.isInSiyuan || isInSiyuanNewWinBrowser()) {
        let postid;
        if (isInSiyuanNewWinBrowser()) {
          const newWinPageId = getSiyuanNewWinPageId();
          if (newWinPageId) {
            postid = newWinPageId;
          }
          logger.warn("\u601D\u6E90\u7B14\u8BB0\u65B0\u7A97\u53E3\uFF0Cpostid\u4E3A=>", postid);
        } else {
          postid = await getPageId();
        }
        logger.warn("\u5F53\u524D\u9875\u9762ID\u662F=>", postid);
        const api = new SiYuanApiAdaptor();
        const result = await api.getSubPostCount(postid);
        logger.debug("\u5B50\u6587\u6863\u4E2A\u6570", result);
        if (result > 1) {
          isPublish.value = false;
          logger.warn("\u68C0\u6D4B\u5230\u5B50\u6587\u6863\uFF0C\u5C06\u8F6C\u5230\u663E\u793A\u5217\u8868\u9875\u9762");
        } else {
          isPublish.value = true;
          logger.warn("\u6CA1\u6709\u5B50\u6587\u6863\u663E\u793A\u53D1\u5E03\u9875\u9762");
        }
      } else if (isInChromeExtension()) {
        logger.warn("\u5F53\u524D\u5904\u4E8EChrome\u63D2\u4EF6\u4E2D\uFF0C\u9700\u8981\u6A21\u62DFfetch\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898");
      } else {
        logger.warn("\u5F53\u524D\u5904\u4E8E\u975E\u6302\u4EF6\u6A21\u5F0F\uFF0C\u5DF2\u5F00\u542F\u8BF7\u6C42\u4EE3\u7406\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898");
      }
    };
    onMounted(async () => {
      await init();
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$1, null, {
        default: withCtx(() => [createBaseVNode("div", null, [isPublish.value ? (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(PublishIndex)])) : (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(_sfc_main$2)]))])]),
        _: 1
      });
    };
  }
});
const app = pageUtil.createPage(_sfc_main);
app.mount("#app");
