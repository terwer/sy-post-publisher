import { _ as _export_sfc, D as resolveComponent, b as openBlock, E as createBlock, F as withCtx, ax as pushScopeId, ay as popScopeId, J as createBaseVNode, d as defineComponent, az as useDark, aA as useToggle, c as createElementBlock, G as unref, N as toDisplayString, M as createTextVNode, aB as goToPage, ar as Post, a as createVNode, C as useI18n, r as ref, o as onMounted, K as createCommentVNode, l as logUtil, am as ElMessageBox, g as getWidgetId, P as API, T as API_TYPE_CONSTANTS, aC as getRootBlocksCount, ao as removeTitleNumber, ap as mdToHtml, Z as formatIsoToZhDate, e as createApp, f as i18n, h as installer } from "./css-vars-a4009a69.js";
import { _ as _sfc_main$9, v as vueHljs } from "./main-c69249c5.js";
import { _ as _sfc_main$a, c as createPinia } from "./PublishService.vue_vue_type_script_setup_true_lang-336491e2.js";
const _sfc_main$8 = {
  name: "DefaultHeader"
};
const DefaultHeader_vue_vue_type_style_index_0_lang = "";
const DefaultHeader_vue_vue_type_style_index_1_scoped_95e9535b_lang = "";
const _withScopeId$2 = (n) => (pushScopeId("data-v-95e9535b"), n = n(), popScopeId(), n);
const _hoisted_1$5 = /* @__PURE__ */ _withScopeId$2(() => /* @__PURE__ */ createBaseVNode("h1", {
  style: {
    "text-align": "center",
    "margin-top": "0"
  }
}, "\u601D\u6E90\u7B14\u8BB0\u53D1\u5E03\u5DE5\u5177", -1));
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_header = resolveComponent("el-header");
  return openBlock(), createBlock(_component_el_header, {
    class: "main-common-header"
  }, {
    default: withCtx(() => [_hoisted_1$5]),
    _: 1
  });
}
const DefaultHeader = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$1], ["__scopeId", "data-v-95e9535b"]]);
const _withScopeId$1 = (n) => (pushScopeId("data-v-9776b98b"), n = n(), popScopeId(), n);
const _hoisted_1$4 = {
  class: "footer"
};
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, " \xA92011-2022 ", -1));
const _hoisted_3$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, " v0.0.3. ", -1));
const _hoisted_4$2 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, ".", -1));
const _hoisted_5$2 = /* @__PURE__ */ createTextVNode();
const __default__$6 = {
  name: "DefaultFooter"
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  setup(__props) {
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    const goGithub = () => {
      window.open("https://github.com/terwer/src-sy-post-publisher");
    };
    const newWin = () => {
      goToPage("/blog/index.html");
    };
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [createBaseVNode("div", _hoisted_1$4, [createBaseVNode("div", null, [_hoisted_2$3, createBaseVNode("span", {
        class: "s-dark",
        onClick: _cache[0] || (_cache[0] = ($event) => goGithub())
      }, " sy-post-publisher "), _hoisted_3$3, createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[1] || (_cache[1] = ($event) => unref(toggleDark)())
      }, toDisplayString(unref(isDark) ? _ctx.$t("theme.mode.light") : _ctx.$t("theme.mode.dark")), 1), _hoisted_4$2, _hoisted_5$2, createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[2] || (_cache[2] = ($event) => newWin())
      }, " \u65B0\u7A97\u53E3\u6253\u5F00 ")])])]);
    };
  }
});
const DefaultFooter_vue_vue_type_style_index_0_scoped_9776b98b_lang = "";
const DefaultFooter = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["__scopeId", "data-v-9776b98b"]]);
/*! Element Plus Icons Vue v2.0.9 */
var export_helper_default = (sfc, props) => {
  let target = sfc.__vccOpts || sfc;
  for (let [key, val] of props)
    target[key] = val;
  return target;
};
var _sfc_main8 = {
  name: "ArrowLeft"
}, _hoisted_18 = {
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg"
}, _hoisted_28 = /* @__PURE__ */ createBaseVNode("path", {
  fill: "currentColor",
  d: "M609.408 149.376 277.76 489.6a32 32 0 0 0 0 44.672l331.648 340.352a29.12 29.12 0 0 0 41.728 0 30.592 30.592 0 0 0 0-42.752L339.264 511.936l311.872-319.872a30.592 30.592 0 0 0 0-42.688 29.12 29.12 0 0 0-41.728 0z"
}, null, -1), _hoisted_38 = [
  _hoisted_28
];
function _sfc_render8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("svg", _hoisted_18, _hoisted_38);
}
var arrow_left_default = /* @__PURE__ */ export_helper_default(_sfc_main8, [["render", _sfc_render8], ["__file", "arrow-left.vue"]]);
const _hoisted_1$3 = {
  id: "post-detail-body"
};
const _hoisted_2$2 = {
  class: "flex items-center"
};
const _hoisted_3$2 = {
  class: "text-large font-600 mr-3"
};
const _hoisted_4$1 = {
  class: "post-detail-content-box"
};
const _hoisted_5$1 = {
  class: "btn-publish"
};
const _hoisted_6$1 = /* @__PURE__ */ createTextVNode("\u53D1\u5E03\u5230\u5176\u4ED6\u5E73\u53F0");
const _hoisted_7$1 = /* @__PURE__ */ createTextVNode("\u65B0\u7A97\u53E3\u53D1\u5E03\u5230\u5176\u4ED6\u5E73\u53F0");
const __default__$5 = {
  name: "DefaultPostDetail"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: {
    post: {
      type: Post,
      default: new Post()
    }
  },
  emits: ["on-change", "on-publish-change"],
  setup(__props, {
    emit
  }) {
    const props = __props;
    const onBack = () => {
      emit("on-change");
    };
    const handlePublish = (e) => {
      emit("on-publish-change", props.post);
    };
    const handleNewWinPublish = (e) => {
      var _a;
      e.preventDefault();
      goToPage("/index.html?id=" + ((_a = props.post) == null ? void 0 : _a.postid), "/");
    };
    return (_ctx, _cache) => {
      const _component_el_page_header = resolveComponent("el-page-header");
      const _component_el_button = resolveComponent("el-button");
      return openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(_component_el_page_header, {
        icon: unref(arrow_left_default),
        title: "\u8FD4\u56DE",
        onClick: onBack
      }, {
        content: withCtx(() => [createBaseVNode("div", _hoisted_2$2, [createBaseVNode("span", _hoisted_3$2, toDisplayString(__props.post.title), 1)])]),
        _: 1
      }, 8, ["icon"]), createBaseVNode("div", _hoisted_4$1, [createBaseVNode("div", _hoisted_5$1, [createVNode(_component_el_button, {
        size: "small",
        onClick: handlePublish
      }, {
        default: withCtx(() => [_hoisted_6$1]),
        _: 1
      }), createVNode(_component_el_button, {
        size: "small",
        type: "primary",
        onClick: handleNewWinPublish
      }, {
        default: withCtx(() => [_hoisted_7$1]),
        _: 1
      })]), createVNode(_sfc_main$9, {
        "page-id": props.post.postid
      }, null, 8, ["page-id"])])]);
    };
  }
});
const DefaultPostDetail_vue_vue_type_style_index_0_scoped_501e3e66_lang = "";
const DefaultPostDetail = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-501e3e66"]]);
const _hoisted_1$2 = {
  id: "publish-body"
};
const _hoisted_2$1 = {
  class: "flex items-center"
};
const _hoisted_3$1 = {
  class: "text-large font-600 mr-3"
};
const __default__$4 = {
  name: "DefaultPublish"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: {
    publishData: {
      type: Post,
      default: new Post()
    }
  },
  emits: ["on-change"],
  setup(__props, {
    emit
  }) {
    const props = __props;
    const onBack = () => {
      emit("on-change");
    };
    return (_ctx, _cache) => {
      const _component_el_page_header = resolveComponent("el-page-header");
      return openBlock(), createElementBlock("div", _hoisted_1$2, [createVNode(_component_el_page_header, {
        class: "publish-header",
        icon: unref(arrow_left_default),
        title: "\u8FD4\u56DE",
        onClick: onBack
      }, {
        content: withCtx(() => [createBaseVNode("div", _hoisted_2$1, [createBaseVNode("span", _hoisted_3$1, toDisplayString(props.publishData.title) + " - \u6587\u7AE0\u53D1\u5E03 ", 1)])]),
        _: 1
      }, 8, ["icon"]), createVNode(_sfc_main$a, {
        "page-id": props.publishData.postid
      }, null, 8, ["page-id"])]);
    };
  }
});
const DefaultPublish_vue_vue_type_style_index_0_scoped_8fbb3308_lang = "";
const DefaultPublish = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-8fbb3308"]]);
const _withScopeId = (n) => (pushScopeId("data-v-b81ccd10"), n = n(), popScopeId(), n);
const _hoisted_1$1 = {
  key: 0,
  id: "post-list"
};
const _hoisted_2 = {
  class: "value"
};
const _hoisted_3 = /* @__PURE__ */ createTextVNode("\u641C\u7D22");
const _hoisted_4 = {
  m: "4",
  style: {
    "padding-left": "10px"
  }
};
const _hoisted_5 = {
  m: "t-0 b-2"
};
const _hoisted_6 = {
  m: "t-0 b-2"
};
const _hoisted_7 = {
  m: "t-0 b-2"
};
const _hoisted_8 = {
  m: "t-0 b-2"
};
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", {
  style: {
    "text-align": "center"
  }
}, "\u64CD\u4F5C", -1));
const _hoisted_10 = /* @__PURE__ */ createTextVNode("\u9884\u89C8");
const _hoisted_11 = /* @__PURE__ */ createTextVNode("\u65B0\u7A97\u53E3\u9884\u89C8 ");
const _hoisted_12 = /* @__PURE__ */ createTextVNode("\u53D1\u5E03");
const _hoisted_13 = /* @__PURE__ */ createTextVNode("\u65B0\u7A97\u53E3\u53D1\u5E03 ");
const _hoisted_14 = {
  key: 1,
  id: "post-detail"
};
const _hoisted_15 = {
  key: 2,
  id: "post-publisher"
};
const __default__$3 = {
  name: "DefaultMain"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  setup(__props) {
    const {
      t
    } = useI18n();
    const showHome = ref(true);
    const showDetail = ref(false);
    const showPublish = ref(false);
    const postDetail = ref();
    const publishData = ref();
    const state = ref("");
    const links = ref([]);
    const querySearch = (queryString, cb) => {
      const results = queryString ? links.value.filter(createFilter(queryString)) : links.value;
      cb(results);
    };
    const createFilter = (queryString) => {
      return (restaurant) => {
        return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0;
      };
    };
    const handleSelect = (item) => {
      console.log(item);
    };
    const handleBtnSearch = () => {
      console.log("handleBtnSearch");
      reloadTableData();
    };
    let tableData = [];
    const MAX_PAGE_SIZE = 5;
    const num = ref(0);
    const total = ref(0);
    const currentPage = ref(1);
    const handlePrevPage = async (curPage) => {
      currentPage.value = curPage;
      logUtil.logInfo("handlePrevPage, currentPage=>", currentPage.value);
      await reloadTableData();
    };
    const handleNextPage = async (curPage) => {
      currentPage.value = curPage;
      logUtil.logInfo("handleNextPage, currentPage=>", currentPage.value);
      await reloadTableData();
    };
    const handleCurrentPage = async (curPage) => {
      currentPage.value = curPage;
      logUtil.logInfo("handleCurrentPage, currentPage=>", currentPage.value);
      await reloadTableData();
    };
    const handleView = (index, row) => {
      const post = new Post();
      post.postid = row.postid;
      post.title = row.title;
      post.dateCreated = row.dateCreated;
      post.mt_keywords = row.mt_keywords;
      post.description = row.description;
      postDetail.value = post;
      showPublish.value = false;
      showHome.value = false;
      showDetail.value = true;
    };
    const handleNewWinView = (index, row) => {
      ElMessageBox.confirm("\u9884\u89C8\u4F1A\u6253\u5F00\u65B0\u9875\u9762\uFF0C\u6B64\u7A97\u53E3\u5C06\u5173\u95ED\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F", t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        goToPage("/detail/index.html?id=" + row.postid);
        console.log(index, row);
      }).catch(() => {
        logUtil.logInfo("\u64CD\u4F5C\u5DF2\u53D6\u6D88");
      });
    };
    const emitFn = () => {
      showPublish.value = false;
      showHome.value = true;
      showDetail.value = false;
    };
    const emitPublishBackFn = () => {
      emitFn();
    };
    const emitPublishPageFn = (post) => {
      post.postid = post.postid;
      post.title = post.title;
      publishData.value = post;
      showPublish.value = true;
      showHome.value = false;
      showDetail.value = false;
    };
    const handleEdit = (index, row) => {
      const post = new Post();
      post.postid = row.postid;
      post.title = row.title;
      publishData.value = post;
      showPublish.value = true;
      showHome.value = false;
      showDetail.value = false;
    };
    const handleNewWinEdit = (index, row) => {
      ElMessageBox.confirm("\u6B64\u64CD\u4F5C\u4F1A\u6253\u5F00\u65B0\u9875\u9762\uFF0C\u6B64\u7A97\u53E3\u5C06\u5173\u95ED\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F", t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        const widgetResult = await getWidgetId();
        if (widgetResult.isInSiyuan) {
          goToPage("/index.html?id=" + row.postide, "/");
        } else {
          goToPage("/publish/index.html?id=" + row.postid, "/");
        }
        console.log(index, row);
      }).catch(() => {
        logUtil.logInfo("\u64CD\u4F5C\u5DF2\u53D6\u6D88");
      });
    };
    const handleRowClick = (row, column, event) => {
    };
    const initPage = async () => {
      await reloadTableData();
    };
    const reloadTableData = async () => {
      const api = new API(API_TYPE_CONSTANTS.API_TYPE_SIYUAN);
      const postList = await api.getRecentPosts(MAX_PAGE_SIZE, currentPage.value - 1, state.value);
      total.value = await getRootBlocksCount(state.value);
      tableData.splice(0, tableData.length);
      for (let i = 0; i < postList.length; i++) {
        let item = postList[i];
        let title = removeTitleNumber(item.title);
        let shortTitle = title;
        let content = mdToHtml(item.description);
        const tableRow = {
          postid: item.postid,
          title,
          shortTitle,
          dateCreated: formatIsoToZhDate(item.dateCreated.toISOString(), true, true),
          mt_keywords: item.mt_keywords,
          description: content.trim() == "" ? "\u6682\u65E0\u5185\u5BB9" : content
        };
        tableData.push(tableRow);
      }
      num.value++;
    };
    onMounted(async () => {
      await initPage();
    });
    return (_ctx, _cache) => {
      const _component_el_autocomplete = resolveComponent("el-autocomplete");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_el_table = resolveComponent("el-table");
      const _component_el_pagination = resolveComponent("el-pagination");
      const _component_el_alert = resolveComponent("el-alert");
      return openBlock(), createElementBlock("div", null, [showHome.value ? (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(_component_el_autocomplete, {
        class: "s-input",
        modelValue: state.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => state.value = $event),
        "fetch-suggestions": querySearch,
        "popper-class": "my-autocomplete",
        placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u5B57",
        onChange: handleBtnSearch,
        onSelect: handleSelect
      }, {
        default: withCtx(({
          item
        }) => [createBaseVNode("div", _hoisted_2, toDisplayString(item.value), 1)]),
        _: 1
      }, 8, ["modelValue"]), createVNode(_component_el_button, {
        class: "s-btn",
        type: "primary",
        onClick: handleBtnSearch
      }, {
        default: withCtx(() => [_hoisted_3]),
        _: 1
      }), (openBlock(), createBlock(_component_el_table, {
        class: "tb-data",
        data: unref(tableData),
        key: num.value,
        border: "",
        stripe: "",
        "highlight-current-row": "",
        "empty-text": "\u7B14\u8BB0\u6570\u636E\u4E3A\u7A7A\u6216\u8005\u601D\u6E90\u7B14\u8BB0\u672A\u542F\u52A8\uFF01",
        onRowClick: handleRowClick,
        style: {
          "width": "100%",
          "min-width": "600px"
        }
      }, {
        default: withCtx(() => [createVNode(_component_el_table_column, {
          type: "expand"
        }, {
          default: withCtx((props) => [createBaseVNode("div", _hoisted_4, [createBaseVNode("p", _hoisted_5, "ID: " + toDisplayString(props.row.postid), 1), createBaseVNode("p", _hoisted_6, "\u53D1\u5E03\u65F6\u95F4: " + toDisplayString(props.row.dateCreated), 1), createBaseVNode("p", _hoisted_7, "\u6807\u9898: " + toDisplayString(props.row.title), 1), createBaseVNode("p", _hoisted_8, "\u6807\u7B7E: " + toDisplayString(props.row.mt_keywords == "" ? "\u6682\u65E0\u6807\u7B7E" : props.row.mt_keywords), 1)])]),
          _: 1
        }), createVNode(_component_el_table_column, {
          prop: "title",
          label: "\u6807\u9898"
        }), createVNode(_component_el_table_column, {
          align: "right",
          width: "350"
        }, {
          header: withCtx(() => [_hoisted_9]),
          default: withCtx((scope) => [createVNode(_component_el_button, {
            size: "small",
            onClick: ($event) => handleView(scope.$index, scope.row)
          }, {
            default: withCtx(() => [_hoisted_10]),
            _: 2
          }, 1032, ["onClick"]), createVNode(_component_el_button, {
            size: "small",
            type: "primary",
            onClick: ($event) => handleNewWinView(scope.$index, scope.row)
          }, {
            default: withCtx(() => [_hoisted_11]),
            _: 2
          }, 1032, ["onClick"]), createVNode(_component_el_button, {
            size: "small",
            onClick: ($event) => handleEdit(scope.$index, scope.row)
          }, {
            default: withCtx(() => [_hoisted_12]),
            _: 2
          }, 1032, ["onClick"]), createVNode(_component_el_button, {
            size: "small",
            type: "primary",
            onClick: ($event) => handleNewWinEdit(scope.$index, scope.row)
          }, {
            default: withCtx(() => [_hoisted_13]),
            _: 2
          }, 1032, ["onClick"])]),
          _: 1
        })]),
        _: 1
      }, 8, ["data"])), createVNode(_component_el_pagination, {
        small: "",
        background: "",
        layout: "prev, pager, next",
        total: total.value,
        class: "mt-4",
        "page-size": MAX_PAGE_SIZE,
        onPrevClick: handlePrevPage,
        onNextClick: handleNextPage,
        onCurrentChange: handleCurrentPage
      }, null, 8, ["total"]), createVNode(_component_el_alert, {
        class: "top-data-tip",
        title: "\u6E29\u99A8\u63D0\u793A\uFF1A\u8BF7\u4FDD\u8BC1\u601D\u6E90\u7B14\u8BB0\u542F\u52A8\u5E76\u4E14\u6253\u5F00\u4F3A\u670D\uFF0C\u9ED8\u8BA4\u4F3A\u670D\u5730\u5740\uFF1Ahttp://127.0.0.1:6806\u3002",
        type: "info",
        closable: false
      })])) : createCommentVNode("", true), showDetail.value ? (openBlock(), createElementBlock("div", _hoisted_14, [createVNode(DefaultPostDetail, {
        post: postDetail.value,
        onOnChange: emitFn,
        onOnPublishChange: emitPublishPageFn
      }, null, 8, ["post"])])) : createCommentVNode("", true), showPublish.value ? (openBlock(), createElementBlock("div", _hoisted_15, [createVNode(DefaultPublish, {
        "publish-data": publishData.value,
        onOnChange: emitPublishBackFn
      }, null, 8, ["publish-data"])])) : createCommentVNode("", true)]);
    };
  }
});
const DefaultMain_vue_vue_type_style_index_0_lang = "";
const DefaultMain_vue_vue_type_style_index_1_scoped_b81ccd10_lang = "";
const DefaultMain = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-b81ccd10"]]);
const _hoisted_1 = {
  class: "common-layout"
};
const __default__$2 = {
  name: "DefaultIndex"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_main = resolveComponent("el-main");
      const _component_el_footer = resolveComponent("el-footer");
      const _component_el_container = resolveComponent("el-container");
      return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_el_container, null, {
        default: withCtx(() => [createVNode(DefaultHeader), createVNode(_component_el_main, null, {
          default: withCtx(() => [createVNode(DefaultMain)]),
          _: 1
        }), createVNode(_component_el_footer, null, {
          default: withCtx(() => [createVNode(DefaultFooter)]),
          _: 1
        })]),
        _: 1
      })]);
    };
  }
});
const __default__$1 = {
  name: "BlogIndex"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$3);
    };
  }
});
const _sfc_main$1 = {
  name: "Index.vue",
  components: {
    BlogIndex: _sfc_main$2
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_BlogIndex = resolveComponent("BlogIndex");
  return openBlock(), createBlock(_component_BlogIndex);
}
const Index = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render]]);
const __default__ = {
  name: "App"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
  setup(__props) {
    onMounted(async () => {
      logUtil.logInfo("MODE=>", "production");
    });
    return (_ctx, _cache) => {
      return openBlock(), createBlock(Index);
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
app.use(vueHljs);
app.directive("focus", {
  mounted(el) {
    el.focus();
  }
});
app.mount("#app");
