import { L as LogFactory, w as isBrowser, b as isInSiyuanNewWinBrowser, aw as getWidgetId, j as goToPage, t as appendStr, f as getPublishCfg, r as removeTitleNumber, B as reloadPage, c as getPageId, v as SiYuanApi, k as _export_sfc, _ as _sfc_main$3, p as pageUtil } from "./AppLayout.vue_vue_type_script_setup_true_lang-a6643e7a.js";
import { a as ElButton, E as ElMessage } from "./vendor_element-plus-f0c88bcb.js";
import { _ as _sfc_main$2 } from "./PostDetailService.vue_vue_type_style_index_0_lang-7019a44e.js";
import { O as defineComponent, u as ref, A as onMounted, P as openBlock, Q as createElementBlock, a2 as createVNode, V as withCtx, $ as createTextVNode, a0 as toDisplayString, _ as createCommentVNode, U as createBlock } from "./vendor-1c6b4df7.js";
import "./vendor_pinia-0ad60f3b.js";
import "./vendor_vue-demi-2d1e3e69.js";
import "./vendor_vue-i18n-b8c9be4e.js";
import "./vendor_highlight-js-1b1ee527.js";
import "./vendor_plantuml-encoder-18698577.js";
import "./vendor_loglevel-bd2e1c44.js";
import "./vendor_before-after-hook-6380be1a.js";
import "./vendor_loglevel-plugin-prefix-34a2ac06.js";
import "./vendor_browser-fs-access-bf84e7f7.js";
import "./vendor_transliteration-0556f169.js";
import "./vendor_shorthash2-e60185c0.js";
import "./vendor_uuid-520e9b68.js";
import "./vendor_js-yaml-c400b4ba.js";
import "./vendor_js-base64-2ae562d2.js";
import "./vendor_sax-1b2fcd5b.js";
import "./vendor_rollup-plugin-node-polyfills-43c96027.js";
import "./vendor_simple-xmlrpc-212666d6.js";
import "./vendor_cross-fetch-e4e57030.js";
import "./vendor_byte-base64-0dbd845f.js";
import "./vendor_xmlbuilder2-780b1a8c.js";
import "./vendor_lodash-es-bef79dfb.js";
import "./vendor_lodash-37b14d55.js";
import "./vendor_dayjs-60c4937a.js";
import "./vendor_async-validator-6ef26e98.js";
import "./vendor_escape-html-2f5becbc.js";
import "./vendor_normalize-wheel-es-b14b3a0e.js";
import "./vendor_universal-user-agent-fa924523.js";
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
      logger.debug("pageId=>", pageId);
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
const PostDetail_vue_vue_type_style_index_1_scoped_38ca9324_lang = "";
const PostDetail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-38ca9324"]]);
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
