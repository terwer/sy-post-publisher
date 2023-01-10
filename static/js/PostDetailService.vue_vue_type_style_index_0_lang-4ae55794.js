import { a as ElButton, D as ElTooltip } from "./vendor_element-plus-1f908931.js";
import { P as Post, A as API } from "./api-37974374.js";
import { L as LogFactory, i as isInSiyuanNewWinBrowser, y as isBrowser, a0 as copyToClipboardInBrowser, au as getPageUrl, h as goToPage, A as API_TYPE_CONSTANTS } from "./AppLayout.vue_vue_type_script_setup_true_lang-182c0c92.js";
import { M as defineComponent, u as ref, z as watch, A as onMounted, O as openBlock, P as createElementBlock, $ as toDisplayString, Z as createCommentVNode, W as createBaseVNode, a1 as createVNode, U as withCtx, V as withDirectives, aM as resolveComponent, aN as resolveDirective } from "./vendor-03279a5a.js";
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
  class: "post-detail-id"
};
const _hoisted_4 = {
  class: "id-text"
};
const _hoisted_5 = ["innerHTML"];
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
    const handleCopyID = () => {
      if (isBrowser()) {
        copyToClipboardInBrowser(post.value.postid);
      }
    };
    const handleShareLink = () => {
      if (isBrowser()) {
        const pageId = post.value.postid;
        const pageUrl = "/detail/index.html?id=" + pageId;
        const url = getPageUrl(pageUrl, "", true);
        copyToClipboardInBrowser(url);
      }
    };
    const handleOpenInBrowser = () => {
      const pageId = post.value.postid;
      goToPage("/detail/index.html?id=" + pageId);
    };
    const handleOpenPicgo = () => {
      const pageId = post.value.postid;
      goToPage("/picgo/index.html?id=" + pageId);
    };
    const handleOpenAnki = () => {
      const pageId = post.value.postid;
      goToPage("/anki/index.html?id=" + pageId);
    };
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
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_el_button = ElButton;
      const _component_el_tooltip = ElTooltip;
      const _directive_beauty = resolveDirective("beauty");
      const _directive_highlight = resolveDirective("highlight");
      return openBlock(), createElementBlock("div", _hoisted_1, [inSiyuanNewWin.value ? (openBlock(), createElementBlock("h1", _hoisted_2, toDisplayString(post.value.title), 1)) : createCommentVNode("", true), createBaseVNode("blockquote", _hoisted_3, [createBaseVNode("span", _hoisted_4, "\u672C\u6587ID\uFF1A" + toDisplayString(post.value.postid), 1), createVNode(_component_el_tooltip, {
        class: "box-item",
        effect: "dark",
        content: _ctx.$t("post.detail.button.copy.id"),
        placement: "bottom-start"
      }, {
        default: withCtx(() => [createVNode(_component_el_button, {
          size: "small",
          type: "warning",
          onClick: handleCopyID
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-list-ol"
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["content"]), createVNode(_component_el_tooltip, {
        class: "box-item",
        effect: "dark",
        content: _ctx.$t("post.detail.button.share.link"),
        placement: "bottom-start"
      }, {
        default: withCtx(() => [createVNode(_component_el_button, {
          size: "small",
          type: "primary",
          onClick: handleShareLink
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-share-nodes"
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["content"]), createVNode(_component_el_tooltip, {
        class: "box-item",
        effect: "dark",
        content: _ctx.$t("post.detail.button.browser.open"),
        placement: "bottom-start"
      }, {
        default: withCtx(() => [createVNode(_component_el_button, {
          size: "small",
          type: "danger",
          onClick: handleOpenInBrowser
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-brands fa-chrome"
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["content"]), createVNode(_component_el_tooltip, {
        class: "box-item",
        effect: "dark",
        content: _ctx.$t("post.detail.button.pic.manage"),
        placement: "bottom-start"
      }, {
        default: withCtx(() => [createVNode(_component_el_button, {
          size: "small",
          type: "primary",
          onClick: handleOpenPicgo
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-image"
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["content"]), createVNode(_component_el_tooltip, {
        class: "box-item",
        effect: "dark",
        content: _ctx.$t("post.detail.button.anki.mark"),
        placement: "bottom-start"
      }, {
        default: withCtx(() => [createVNode(_component_el_button, {
          size: "small",
          type: "success",
          onClick: handleOpenAnki
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-credit-card"
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["content"])]), withDirectives(createBaseVNode("div", {
        id: "post-detail-content",
        innerHTML: post.value.description
      }, null, 8, _hoisted_5), [[_directive_beauty], [_directive_highlight]])]);
    };
  }
});
const PostDetailService_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as _
};
