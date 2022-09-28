import { d as defineComponent, r as ref, o as onMounted, D as resolveComponent, b as openBlock, c as createElementBlock, J as createBaseVNode, a as createVNode, F as withCtx, aw as _sfc_main$4, M as createTextVNode, g as getWidgetId, aB as goToPage, a0 as getPageId, _ as _export_sfc, E as createBlock, e as createApp, f as i18n, h as installer } from "./css-vars-653a9e89.js";
import { _ as _sfc_main$3, v as vueHljs } from "./main-f9ad61f6.js";
const _hoisted_1 = {
  class: "post-detail-content-box"
};
const _hoisted_2 = {
  class: "btn-publish"
};
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u53D1\u5E03\u5230\u5176\u4ED6\u5E73\u53F0");
const _hoisted_4 = {
  id: "dt-tool"
};
const __default__$1 = {
  name: "BlogDetail",
  components: {
    DefaultPostDetailService: _sfc_main$3
  }
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  props: {
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const pid = ref("");
    const handlePublish = async (e) => {
      e.preventDefault();
      const widgetResult = await getWidgetId();
      if (widgetResult.isInSiyuan) {
        goToPage("/index.html?id=" + pid.value, "/");
      } else {
        goToPage("/publish/index.html?id=" + pid.value, "/");
      }
    };
    const initPage = async () => {
      const pageId = await getPageId(true, props.pageId);
      if (!pageId || pageId === "") {
        return;
      }
      pid.value = pageId;
    };
    onMounted(async () => {
      await initPage();
    });
    return (_ctx, _cache) => {
      const _component_el_button = resolveComponent("el-button");
      return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createVNode(_component_el_button, {
        size: "small",
        type: "primary",
        onClick: handlePublish
      }, {
        default: withCtx(() => [_hoisted_3]),
        _: 1
      })]), createVNode(_sfc_main$3, {
        "page-id": pid.value
      }, null, 8, ["page-id"]), createBaseVNode("div", _hoisted_4, [createVNode(_sfc_main$4)])]);
    };
  }
});
const BlogDetail_vue_vue_type_style_index_0_lang = "";
const BlogDetail_vue_vue_type_style_index_1_scoped_1d54b1b7_lang = "";
const BlogDetail = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-1d54b1b7"]]);
const _sfc_main$1 = {
  name: "Detail",
  components: {
    BlogDetail
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlogDetail = resolveComponent("BlogDetail");
  return openBlock(), createBlock(_component_BlogDetail, {
    "page-id": void 0
  });
}
const Detail = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const __default__ = {
  name: "App"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Detail);
    };
  }
});
const style = "";
const cssVars = "";
const app = createApp(_sfc_main);
app.use(i18n);
app.use(installer);
app.use(vueHljs);
app.directive("focus", {
  mounted(el) {
    el.focus();
  }
});
app.mount("#app");
