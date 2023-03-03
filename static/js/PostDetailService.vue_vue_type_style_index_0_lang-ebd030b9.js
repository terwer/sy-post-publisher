import { f as ElInput, e as ElFormItem, a as ElButton, i as ElForm, h as ElAlert, E as ElMessage, b as ElTooltip, F as ElDialog } from "./vendor_element-plus-f0c88bcb.js";
import { L as LogFactory, a9 as useTabCount, c as getPageId, ai as POSTID_KEY_CONSTANTS, aj as getDynPostidKey, aa as getDynamicJsonCfg, ak as getDynSwitchKey, ac as getBooleanConf, v as SiYuanApi, l as isEmptyString, k as _export_sfc, b as isInSiyuanNewWinBrowser, P as Post, w as isBrowser, x as copyToClipboardInBrowser, al as getPageUrl, j as goToPage, A as API, X as API_TYPE_CONSTANTS } from "./AppLayout.vue_vue_type_script_setup_true_lang-a01203bb.js";
import { O as defineComponent, ad as reactive, z as watch, M as onBeforeMount, A as onMounted, u as ref, x as unref, P as openBlock, U as createBlock, V as withCtx, a2 as createVNode, _ as createCommentVNode, Q as createElementBlock, ao as renderList, a1 as Fragment, $ as createTextVNode, a0 as toDisplayString, W as withDirectives, a3 as vShow, X as createBaseVNode, aN as resolveComponent, aO as resolveDirective } from "./vendor-1c6b4df7.js";
import { u as useI18n } from "./vendor_vue-i18n-b8c9be4e.js";
const _hoisted_1$1 = {
  key: 1
};
const __default__ = {
  name: "PostBind"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__,
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const logger = LogFactory.getLogger("components/publish/tab/PostBind.vue");
    const {
      t
    } = useI18n();
    const {
      tabCountStore,
      vuepressEnabled,
      hugoEnabled,
      hexoEnabled,
      jekyllEnabled,
      jvueEnabled,
      confEnabled,
      cnblogsEnabled,
      wordpressEnabled,
      liandiEnabled,
      yuqueEnabled,
      kmsEnabled,
      doCount
    } = useTabCount();
    const formData = reactive({
      dynamicConfigArray: []
    });
    const initConf = () => {
      doCount();
      const dynamicJsonCfg = getDynamicJsonCfg();
      const results = dynamicJsonCfg.totalCfg || [];
      formData.dynamicConfigArray.length = 0;
      results.forEach((item) => {
        const switchKey = getDynSwitchKey(item.platformKey);
        item.modelValue = getBooleanConf(switchKey);
        formData.dynamicConfigArray.push(item);
      });
      logger.debug(formData.dynamicConfigArray);
    };
    watch(() => props.isReload, async (oldValue, newValue) => {
      initConf();
      await initPage();
    });
    onBeforeMount(async () => {
      initConf();
      await initPage();
    });
    onMounted(() => {
    });
    const siyuanData = {
      pageId: "",
      meta: {}
    };
    const ruleFormRef = ref();
    const ruleForm = reactive({
      vuepressSlug: "",
      hugoSlug: "",
      hexoSlug: "",
      jekyllSlug: "",
      jvuePostid: "",
      cnblogsPostid: "",
      confPostid: "",
      wordpressPostid: "",
      liandiPostid: "",
      yuquePostid: "",
      kmsPostid: ""
    });
    const rules = reactive({});
    async function initPage() {
      const pageId = await getPageId(true, props.pageId);
      logger.debug("PostBind pageId=>", pageId);
      if (!pageId || pageId === "") {
        return;
      }
      const siyuanApi = new SiYuanApi();
      const meta = await siyuanApi.getBlockAttrs(pageId);
      siyuanData.pageId = pageId;
      siyuanData.meta = meta;
      ruleForm.vuepressSlug = meta[POSTID_KEY_CONSTANTS.VUEPRESS_POSTID_KEY];
      ruleForm.hugoSlug = meta[POSTID_KEY_CONSTANTS.HUGO_POSTID_KEY];
      ruleForm.hexoSlug = meta[POSTID_KEY_CONSTANTS.HEXO_POSTID_KEY];
      ruleForm.jekyllSlug = meta[POSTID_KEY_CONSTANTS.JEKYLL_POSTID_KEY];
      ruleForm.jvuePostid = meta[POSTID_KEY_CONSTANTS.JVUE_POSTID_KEY];
      ruleForm.confPostid = meta[POSTID_KEY_CONSTANTS.CONFLUENCE_POSTID_KEY];
      ruleForm.cnblogsPostid = meta[POSTID_KEY_CONSTANTS.CNBLOGS_POSTID_KEY];
      ruleForm.wordpressPostid = meta[POSTID_KEY_CONSTANTS.WORDPRESS_POSTID_KEY];
      ruleForm.liandiPostid = meta[POSTID_KEY_CONSTANTS.LIANDI_POSTID_KEY];
      ruleForm.yuquePostid = meta[POSTID_KEY_CONSTANTS.YUQUE_POSTID_KEY];
      ruleForm.kmsPostid = meta[POSTID_KEY_CONSTANTS.KMS_POSTID_KEY];
      const results = formData.dynamicConfigArray;
      formData.dynamicConfigArray = [];
      results.forEach((item) => {
        const posidKey = getDynPostidKey(item.platformKey);
        item.posid = meta[posidKey] || "";
        formData.dynamicConfigArray.push(item);
      });
    }
    const assignPostid = (enabled, customAttr, key, value) => {
      if (enabled && !isEmptyString(value)) {
        Object.assign(customAttr, {
          [key]: value
        });
      } else {
        Object.assign(customAttr, {
          [key]: ""
        });
      }
    };
    const submitForm = async (formEl) => {
      if (!formEl)
        return;
      const result = await formEl.validate((valid, fields) => {
        if (valid) {
          logger.debug("\u6821\u9A8C\u6210\u529F");
        } else {
          logger.error(t("main.opt.failure"), fields);
        }
      });
      if (!result) {
        return;
      }
      try {
        const customAttr = {};
        assignPostid(vuepressEnabled.value, customAttr, POSTID_KEY_CONSTANTS.VUEPRESS_POSTID_KEY, ruleForm.vuepressSlug);
        assignPostid(hugoEnabled.value, customAttr, POSTID_KEY_CONSTANTS.HUGO_POSTID_KEY, ruleForm.hugoSlug);
        assignPostid(hexoEnabled.value, customAttr, POSTID_KEY_CONSTANTS.HEXO_POSTID_KEY, ruleForm.hexoSlug);
        assignPostid(jekyllEnabled.value, customAttr, POSTID_KEY_CONSTANTS.JEKYLL_POSTID_KEY, ruleForm.jekyllSlug);
        assignPostid(jvueEnabled.value, customAttr, POSTID_KEY_CONSTANTS.JVUE_POSTID_KEY, ruleForm.jvuePostid);
        assignPostid(confEnabled.value, customAttr, POSTID_KEY_CONSTANTS.CONFLUENCE_POSTID_KEY, ruleForm.confPostid);
        assignPostid(cnblogsEnabled.value, customAttr, POSTID_KEY_CONSTANTS.CNBLOGS_POSTID_KEY, ruleForm.cnblogsPostid);
        assignPostid(wordpressEnabled.value, customAttr, POSTID_KEY_CONSTANTS.WORDPRESS_POSTID_KEY, ruleForm.wordpressPostid);
        assignPostid(liandiEnabled.value, customAttr, POSTID_KEY_CONSTANTS.LIANDI_POSTID_KEY, ruleForm.liandiPostid);
        assignPostid(yuqueEnabled.value, customAttr, POSTID_KEY_CONSTANTS.YUQUE_POSTID_KEY, ruleForm.yuquePostid);
        assignPostid(kmsEnabled.value, customAttr, POSTID_KEY_CONSTANTS.KMS_POSTID_KEY, ruleForm.kmsPostid);
        formData.dynamicConfigArray.forEach((item) => {
          const posidKey = getDynPostidKey(item.platformKey);
          assignPostid(item.modelValue, customAttr, posidKey, item.posid);
        });
        logger.debug("PostBind\u4FDD\u5B58\u5C5E\u6027\u5230\u601D\u6E90\u7B14\u8BB0,meta=>", customAttr);
        const siyuanApi = new SiYuanApi();
        await siyuanApi.setBlockAttrs(siyuanData.pageId, customAttr);
        ElMessage.success(t("main.opt.success"));
      } catch (e) {
        logger.error("\u4FDD\u5B58\u5F02\u5E38", e);
        let errrmsg = "\u4FDD\u5B58\u5F02\u5E38";
        if (e) {
          errrmsg = e.toString();
        }
        ElMessage.error({
          dangerouslyUseHTMLString: true,
          message: t("main.opt.failure") + "=>" + errrmsg
        });
      }
    };
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      const _component_el_alert = ElAlert;
      return unref(tabCountStore).tabCount > 0 ? (openBlock(), createBlock(_component_el_form, {
        key: 0,
        "label-width": "85px",
        class: "post-bind-form",
        ref_key: "ruleFormRef",
        ref: ruleFormRef,
        model: ruleForm,
        rules,
        "status-icon": ""
      }, {
        default: withCtx(() => [unref(vuepressEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 0,
          label: _ctx.$t("post.bind.vuepress.slug"),
          prop: "vuepressSlug"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.vuepressSlug,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ruleForm.vuepressSlug = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(hugoEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 1,
          label: _ctx.$t("post.bind.hugo.slug"),
          prop: "hugoSlug"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.hugoSlug,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ruleForm.hugoSlug = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(hexoEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 2,
          label: _ctx.$t("post.bind.hexo.slug"),
          prop: "hexosSlug"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.hexoSlug,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => ruleForm.hexoSlug = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(jekyllEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 3,
          label: _ctx.$t("post.bind.jekyll.slug"),
          prop: "jekyllSlug"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.jekyllSlug,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => ruleForm.jekyllSlug = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(jvueEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 4,
          label: _ctx.$t("post.bind.jvue.postid"),
          prop: "jvuePostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.jvuePostid,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => ruleForm.jvuePostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(confEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 5,
          label: _ctx.$t("post.bind.conf.postid"),
          prop: "confPostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.confPostid,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => ruleForm.confPostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(cnblogsEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 6,
          label: _ctx.$t("post.bind.cnblogs.postid"),
          prop: "cnblogsPostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.cnblogsPostid,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => ruleForm.cnblogsPostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(wordpressEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 7,
          label: _ctx.$t("post.bind.wordpress.postid"),
          prop: "wordpressPostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.wordpressPostid,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => ruleForm.wordpressPostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(liandiEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 8,
          label: _ctx.$t("post.bind.liandi.postid"),
          prop: "liandiPostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.liandiPostid,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => ruleForm.liandiPostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(yuqueEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 9,
          label: _ctx.$t("post.bind.yuque.postid"),
          prop: "yuquePostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.yuquePostid,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => ruleForm.yuquePostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(kmsEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 10,
          label: _ctx.$t("post.bind.kms.postid"),
          prop: "kmsPostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.kmsPostid,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => ruleForm.kmsPostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(formData.dynamicConfigArray, (cfg, index) => {
          return withDirectives((openBlock(), createBlock(_component_el_form_item, {
            key: index,
            label: cfg.platformName
          }, {
            default: withCtx(() => [createVNode(_component_el_input, {
              modelValue: cfg.posid,
              "onUpdate:modelValue": ($event) => cfg.posid = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
            _: 2
          }, 1032, ["label"])), [[vShow, cfg.modelValue]]);
        }), 128)), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[11] || (_cache[11] = ($event) => submitForm(ruleFormRef.value))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("post.bind.conf.save")), 1)]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["model", "rules"])) : (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(_component_el_alert, {
        class: "top-version-tip",
        title: _ctx.$t("config.platform.none"),
        type: "error",
        closable: false
      }, null, 8, ["title"])]));
    };
  }
});
const PostBind_vue_vue_type_style_index_0_lang = "";
const PostBind_vue_vue_type_style_index_1_scoped_56d92254_lang = "";
const PostBind = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-56d92254"]]);
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
    const postBindDialogVisible = ref(false);
    const handleCopyID = () => {
      if (isBrowser()) {
        copyToClipboardInBrowser(post.value.postid);
      }
    };
    const handleShareLink = () => {
      const pageId = post.value.postid;
      const pageUrl = "/detail/index.html?id=" + pageId;
      const url = getPageUrl(pageUrl, "");
      if (isBrowser()) {
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
    const handlePostBind = () => {
      postBindDialogVisible.value = true;
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
      const _component_el_alert = ElAlert;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_el_button = ElButton;
      const _component_el_tooltip = ElTooltip;
      const _component_el_dialog = ElDialog;
      const _directive_beauty = resolveDirective("beauty");
      const _directive_highlight = resolveDirective("highlight");
      return openBlock(), createElementBlock("div", _hoisted_1, [inSiyuanNewWin.value ? (openBlock(), createElementBlock("h1", _hoisted_2, toDisplayString(post.value.title), 1)) : createCommentVNode("", true), createVNode(_component_el_alert, {
        class: "top-share-tip",
        title: _ctx.$t("siyuan.local.share.tip"),
        type: "warning",
        closable: false
      }, null, 8, ["title"]), createBaseVNode("blockquote", _hoisted_3, [createBaseVNode("span", _hoisted_4, "\u672C\u6587ID\uFF1A" + toDisplayString(post.value.postid), 1), createVNode(_component_el_tooltip, {
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
      }, 8, ["content"]), createVNode(_component_el_tooltip, {
        class: "box-item",
        effect: "dark",
        content: _ctx.$t("service.tab.post.bind"),
        placement: "bottom-start"
      }, {
        default: withCtx(() => [createVNode(_component_el_button, {
          size: "small",
          type: "success",
          onClick: handlePostBind
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-link"
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["content"])]), withDirectives(createBaseVNode("div", {
        id: "post-detail-content",
        innerHTML: post.value.description
      }, null, 8, _hoisted_5), [[_directive_beauty], [_directive_highlight]]), createVNode(_component_el_dialog, {
        modelValue: postBindDialogVisible.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => postBindDialogVisible.value = $event),
        title: _ctx.$t("service.tab.post.bind")
      }, {
        default: withCtx(() => [createVNode(PostBind, {
          "page-id": props.pageId
        }, null, 8, ["page-id"])]),
        _: 1
      }, 8, ["modelValue", "title"])]);
    };
  }
});
const PostDetailService_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as _
};
