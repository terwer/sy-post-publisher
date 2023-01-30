import { L as LogFactory, y as isBrowser, i as isInSiyuanNewWinBrowser, g as getWidgetId, h as goToPage, o as appendStr, e as getPublishCfg, r as removeTitleNumber, a2 as reloadPage, b as getPageId, S as SiYuanApi, j as _export_sfc, _ as _sfc_main$3, p as pageUtil } from "./AppLayout.vue_vue_type_script_setup_true_lang-e0451189.js";
import { a as ElButton, E as ElMessage } from "./vendor_element-plus-1140ca7b.js";
import { _ as _sfc_main$2 } from "./PostDetailService.vue_vue_type_style_index_0_lang-6465304d.js";
import { M as defineComponent, u as ref, A as onMounted, O as openBlock, P as createElementBlock, a1 as createVNode, U as withCtx, _ as createTextVNode, $ as toDisplayString, Z as createCommentVNode, T as createBlock } from "./vendor-d1463dcf.js";
import "./vendor_pinia-aea155c7.js";
import "./vendor_vue-demi-1365f9ef.js";
import "./vendor_vue-i18n-1a506789.js";
import "./vendor_highlight-js-1b1ee527.js";
import "./vendor_plantuml-encoder-18698577.js";
import "./vendor_loglevel-bd2e1c44.js";
import "./vendor_before-after-hook-6380be1a.js";
import "./vendor_loglevel-plugin-prefix-34a2ac06.js";
import "./vendor_browser-fs-access-5b1a413d.js";
import "./vendor_transliteration-0556f169.js";
import "./vendor_shorthash2-e60185c0.js";
import "./vendor_js-yaml-c400b4ba.js";
import "./vendor_lodash-es-6762c55d.js";
import "./vendor_rollup-plugin-node-polyfills-5796cf3d.js";
import "./vendor_dayjs-60c4937a.js";
import "./vendor_async-validator-873ab271.js";
import "./vendor_escape-html-2f5becbc.js";
import "./vendor_normalize-wheel-es-b14b3a0e.js";
import "./api-1f5803c7.js";
import "./vendor_js-base64-904ab953.js";
import "./vendor_sax-22683b4f.js";
import "./vendor_simple-xmlrpc-21ffbab6.js";
import "./vendor_cross-fetch-e4e57030.js";
import "./vendor_byte-base64-0dbd845f.js";
import "./vendor_xmlbuilder2-780b1a8c.js";
import "./commonblogApi-81db5e95.js";
import "./vendor_universal-user-agent-a3c9ebb4.js";
import "./vendor_is-plain-object-eb550d51.js";
import "./vendor_deprecation-ea02905c.js";
import "./vendor_once-6031544f.js";
import "./vendor_wrappy-713fc6dc.js";
const _hoisted_1 = {
  class: "post-detail-content-box"
};
const _hoisted_2 = {
  key: 0,
  class: "btn-publish"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PostDetail",
  props: {
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const logger = LogFactory.getLogger("components/detail/PostDetail.vue");
    const pid = ref("");
    const siyuanApi = new SiYuanApi();
    const inSiyuanNewWin = ref(isInSiyuanNewWinBrowser());
    const handlePublish = async () => {
      const widgetResult = getWidgetId();
      if (widgetResult.isInSiyuan) {
        goToPage(appendStr("/index.html?id=", pid.value));
      } else {
        goToPage(appendStr("/publish/index.html?id=", pid.value));
      }
    };
    const handleExportPDF = async () => {
      const publishCfg = getPublishCfg();
      const page = await siyuanApi.getBlockByID(pid.value);
      let fmtTitle = page.content;
      if (publishCfg.fixTitle) {
        fmtTitle = removeTitleNumber(page.content);
      }
      document.title = fmtTitle + " - \u7531\u601D\u6E90\u7B14\u8BB0\u53D1\u5E03\u8F85\u52A9\u5DE5\u5177\u5BFC\u51FA";
      document.querySelector(".header-default").remove();
      document.querySelector(".btn-publish").remove();
      document.querySelector(".post-detail-id").remove();
      document.querySelector(".footer").remove();
      window.print();
    };
    const afterPrint = () => {
      ElMessage.success("\u901A\u8FC7\u6253\u5370\u5BFC\u51FAPDF\u5B8C\u6210");
      reloadPage();
    };
    const initPage = async () => {
      const pageId = await getPageId(true, props.pageId);
      logger.info("pageId=>", pageId);
      if (!pageId || pageId === "") {
        return;
      }
      pid.value = pageId;
    };
    onMounted(async () => {
      await initPage();
      if (isBrowser()) {
        window.onafterprint = afterPrint;
      }
    });
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      return openBlock(), createElementBlock("div", _hoisted_1, [!inSiyuanNewWin.value ? (openBlock(), createElementBlock("div", _hoisted_2, [createVNode(_component_el_button, {
        size: "small",
        type: "primary",
        onClick: handlePublish
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("post.detail.index.send.to.publish")), 1)]),
        _: 1
      }), createVNode(_component_el_button, {
        size: "small",
        type: "success",
        onClick: handleExportPDF
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("post.detail.index.export.to.pdf")), 1)]),
        _: 1
      })])) : createCommentVNode("", true), createVNode(_sfc_main$2, {
        "page-id": pid.value
      }, null, 8, ["page-id"])]);
    };
  }
});
const PostDetail_vue_vue_type_style_index_0_lang = "";
const PostDetail_vue_vue_type_style_index_1_scoped_d0eea16c_lang = "";
const PostDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-d0eea16c"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "App",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$3, null, {
        default: withCtx(() => [createVNode(PostDetail)]),
        _: 1
      });
    };
  }
});
(async () => {
  const app = await pageUtil.createPage(_sfc_main);
  app.mount("#app");
})();
