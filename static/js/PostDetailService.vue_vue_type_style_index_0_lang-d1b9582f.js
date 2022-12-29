import { P as Post, A as API } from "./api-a5ab0d44.js";
import { L as LogFactory, i as isInSiyuanNewWinBrowser, A as API_TYPE_CONSTANTS } from "./AppLayout.vue_vue_type_script_setup_true_lang-d3a631b8.js";
import { M as defineComponent, u as ref, z as watch, A as onMounted, O as openBlock, P as createElementBlock, $ as toDisplayString, Z as createCommentVNode, W as createBaseVNode, V as withDirectives, aN as resolveDirective } from "./vendor-037de53c.js";
const _hoisted_1 = {
  class: "post-detail-wrap"
};
const _hoisted_2 = {
  key: 0,
  style: {
    "display": "none"
  }
};
const _hoisted_3 = {
  class: "post-detail-id",
  style: {
    "display": "none"
  }
};
const _hoisted_4 = ["innerHTML"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PostDetailService",
  props: {
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const logger = LogFactory.getLogger("components/blog/themes/default/PostDetailService.vue");
    const inSiyuanNewWin = ref(isInSiyuanNewWinBrowser());
    watch(() => props.pageId, (oldValue, newValue) => {
      initPage();
      logger.debug("\u6587\u7AE0\u8BE6\u60C5\u67E5\u770B\u521D\u59CB\u5316");
    });
    const defaultPost = new Post();
    const post = ref(defaultPost);
    const initPage = async () => {
      if (!props.pageId || props.pageId === "") {
        return;
      }
      const api = new API(API_TYPE_CONSTANTS.API_TYPE_SIYUAN);
      const siyuanPost = await api.getPost(props.pageId || "");
      post.value = siyuanPost;
    };
    onMounted(async () => {
      await initPage();
    });
    return (_ctx, _cache) => {
      const _directive_beauty = resolveDirective("beauty");
      const _directive_highlight = resolveDirective("highlight");
      return openBlock(), createElementBlock("div", _hoisted_1, [inSiyuanNewWin.value ? (openBlock(), createElementBlock("h1", _hoisted_2, toDisplayString(post.value.title), 1)) : createCommentVNode("", true), createBaseVNode("blockquote", _hoisted_3, " \u672C\u6587ID\uFF1A" + toDisplayString(post.value.postid), 1), withDirectives(createBaseVNode("div", {
        id: "post-detail-content",
        innerHTML: post.value.description
      }, null, 8, _hoisted_4), [[_directive_beauty], [_directive_highlight]])]);
    };
  }
});
const PostDetailService_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as _
};
