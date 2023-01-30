var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { j as ElAlert, a as ElButton, t as ElButtonGroup, e as ElFormItem, c as ElOption, d as ElSelect, i as ElInput, f as ElForm, b as ElHeader, o as ElTableColumn, p as ElTable, r as ElMain, s as ElContainer, E as ElMessage, h as ElMessageBox, g as ElSwitch, u as ElRadio, v as ElRadioGroup, w as ElTabPane, x as ElTabs, y as ElDatePicker, z as ElTag, A as ElTreeSelect, n as ElSkeleton, B as ElCheckbox, C as ElCheckboxGroup } from "./vendor_element-plus-1140ca7b.js";
import { L as LogFactory, D as getDynamicJsonCfg, z as SubPlatformType, P as PlatformType, E as setDynamicJsonCfg, F as isDynamicKeyExists, G as checkKeyExists, H as DynamicConfig, I as getNewPlatformKey, J as getSubtypeList, K as getDefaultPlatformName, j as _export_sfc, M as getBooleanConf, N as getDynSwitchKey, O as getDynSwitchModelValue, Q as setBooleanConf, R as getDynSwitchActive, T as getDynSwitchInactive, U as getSwitchItem, b as getPageId, V as getDynPostidKey, S as SiYuanApi, l as isEmptyString, u as getJSONConf, W as setJSONConf, B as isEmptyObject, A as API_TYPE_CONSTANTS, e as getPublishCfg, X as getConf, Y as pinyinSlugify, Z as zhSlugify, o as appendStr, $ as mdFileToTitle, y as isBrowser, a0 as copyToClipboardInBrowser, a1 as YamlConvertAdaptor, r as removeTitleNumber, C as CONSTANTS, a2 as reloadPage, m as mdToHtml, t as removeH1, a3 as parseHtml, a4 as formatNumToZhDate, a5 as cutWords, a6 as jiebaToHotWords, a7 as getApiParams, v as pathJoin, f as parseBoolean, a8 as PageEditMode, a9 as SourceContentShowType, aa as removeMdWidgetTag, ab as removeMdH1, ac as yaml2Obj, ad as YamlFormatObj, ae as getPublishStatus, af as PostForm, ag as upperFirst, ah as VuepressYamlConvertAdaptor, ai as HugoYamlConverterAdaptor, aj as HexoYamlConverterAdaptor, ak as JekyllYamlConverterAdaptor, al as mdToPlainText, s as removeWidgetTag, am as setConf, an as calcLastSeconds, ao as getDynYamlConverterAdaptor, ap as _sfc_main$z } from "./AppLayout.vue_vue_type_script_setup_true_lang-e0451189.js";
import { u as useI18n } from "./vendor_vue-i18n-1a506789.js";
import { M as defineComponent, u as ref, ac as reactive, A as onMounted, O as openBlock, T as createBlock, U as withCtx, a1 as createVNode, y as unref, _ as createTextVNode, $ as toDisplayString, Z as createCommentVNode, P as createElementBlock, ao as renderList, a0 as Fragment, z as watch, F as isRef, W as createBaseVNode, K as onBeforeMount, V as withDirectives, a2 as vShow, ap as withKeys, X as normalizeClass, a8 as nextTick } from "./vendor-d1463dcf.js";
import { d as defineStore } from "./vendor_pinia-aea155c7.js";
import { a as POSTID_KEY_CONSTANTS, G as GithubCfg, A as API, P as Post, V as VuepressCfg, b as GithubApi } from "./api-1f5803c7.js";
import { d as dist } from "./vendor_shorthash2-e60185c0.js";
import { c as copyToClipboard } from "./vendor_copy-to-clipboard-a51858f9.js";
import { P as PicgoPostApi, I as ImageParser, _ as _sfc_main$y } from "./PicgoSetting.vue_vue_type_script_setup_true_lang-21cd119b.js";
const githubCfg = [
  {
    platformType: "Github",
    subPlatformType: "Github_Hugo",
    platformKey: "githubHugo-zdlc6l",
    platformName: "Docsy"
  },
  {
    platformType: "Github",
    subPlatformType: "Github_Vitepress",
    platformKey: "githubVitepress-mhxj3",
    platformName: "Vitepress"
  },
  {
    platformType: "Github",
    subPlatformType: "Github_Nuxt",
    platformKey: "githubNuxt-z1xcb7x",
    platformName: "Nuxt content"
  },
  {
    platformType: "Github",
    subPlatformType: "Github_Next",
    platformKey: "githubNext-ziz9v8",
    platformName: "Nextra"
  }
];
const metaweblogCfg = [
  {
    platformType: "Metaweblog",
    subPlatformType: "none",
    platformKey: "metaweblog-zahrlw",
    platformName: "\u5F00\u6E90\u4E2D\u56FD"
  },
  {
    platformType: "Metaweblog",
    subPlatformType: "none",
    platformKey: "metaweblog-22pamt",
    platformName: "Typecho"
  }
];
const wordpressCfg = [];
const PRE_DEFINED_DOCSY_KEY = "githubHugo-zdlc6l";
const PRE_DEFINED_VITEPRESS_KEY = "githubVitepress-mhxj3";
const PRE_DEFINED_NUXT_CONTENT_KEY = "githubNuxt-z1xcb7x";
const PRE_DEFINED_NEXTRA_KEY = "githubNext-ziz9v8";
const PRE_DEFINED_OSCHINA_KEY = "metaweblog-zahrlw";
const PRE_DEFINED_TYPECHO_KEY = "metaweblog-22pamt";
const PRE_DEFINED_PLATFORM_KEY_CONSTANTS = {
  PRE_DEFINED_DOCSY_KEY,
  PRE_DEFINED_VITEPRESS_KEY,
  PRE_DEFINED_NUXT_CONTENT_KEY,
  PRE_DEFINED_NEXTRA_KEY,
  PRE_DEFINED_OSCHINA_KEY,
  PRE_DEFINED_TYPECHO_KEY
};
const logger = LogFactory.getLogger("utils/import/importUtil.ts");
const fixPlatformArray = [PRE_DEFINED_PLATFORM_KEY_CONSTANTS.PRE_DEFINED_DOCSY_KEY, PRE_DEFINED_PLATFORM_KEY_CONSTANTS.PRE_DEFINED_TYPECHO_KEY];
const checkPlatform = (pkey, dynamicConfigArray) => {
  if (isDynamicKeyExists(dynamicConfigArray, pkey)) {
    if (fixPlatformArray.includes(pkey)) {
      doFixPlatformInfo(pkey, dynamicConfigArray);
    }
    return false;
  }
  const switchKey = "switch-" + pkey;
  const postidKey = "custom-" + pkey + "-post-id";
  return !(checkKeyExists(pkey) || checkKeyExists(switchKey) || checkKeyExists(postidKey));
};
const genNewPlatform = (ptype, platformKey, platformName, subtype) => {
  const newCfg = new DynamicConfig(ptype, platformKey, platformName);
  newCfg.subPlatformType = subtype;
  return newCfg;
};
const importPreDefinedPlatform = () => {
  const dynamicConfigArray = getDynamicJsonCfg().totalCfg || [];
  if (githubCfg && githubCfg.length > 0) {
    githubCfg.forEach((gcfg) => {
      if (checkPlatform(gcfg.platformKey, dynamicConfigArray)) {
        const newCfg = genNewPlatform(PlatformType[gcfg.platformType], gcfg.platformKey, gcfg.platformName, SubPlatformType[gcfg.subPlatformType]);
        dynamicConfigArray.push(newCfg);
      }
    });
  }
  if (metaweblogCfg && metaweblogCfg.length > 0) {
    metaweblogCfg.forEach((mcfg) => {
      if (checkPlatform(mcfg.platformKey, dynamicConfigArray)) {
        const newCfg = genNewPlatform(PlatformType[mcfg.platformType], mcfg.platformKey, mcfg.platformName, SubPlatformType.NONE);
        dynamicConfigArray.push(newCfg);
      }
    });
  }
  if (wordpressCfg && wordpressCfg.length > 0) {
    wordpressCfg.forEach((wcfg) => {
      if (checkPlatform(wcfg.platformKey, dynamicConfigArray)) {
        const newCfg = genNewPlatform(PlatformType[wcfg.platformType], wcfg.platformKey, wcfg.platformName, SubPlatformType.NONE);
        dynamicConfigArray.push(newCfg);
      }
    });
  }
  logger.debug("\u5C06\u8981\u5BFC\u5165\u9884\u5B9A\u4E49\u5E73\u53F0\uFF1A", dynamicConfigArray);
  setDynamicJsonCfg(dynamicConfigArray);
};
const doFixPlatformInfo = (pkey, dynamicConfigArray) => {
  for (let i = 0; i < dynamicConfigArray.length; i++) {
    if (dynamicConfigArray[i].platformKey !== pkey) {
      continue;
    }
    const pcfg = dynamicConfigArray[i];
    logger.debug("pcfg=>", pcfg);
    if (PRE_DEFINED_PLATFORM_KEY_CONSTANTS.PRE_DEFINED_TYPECHO_KEY === pkey) {
      if (pcfg.platformName === "Typeecho") {
        pcfg.platformName = "Typecho";
        logger.warn("Typeecho \u5DF2\u7ECF\u4FEE\u6B63\u4E3A=>", pcfg.platformName);
      }
    }
    if (PRE_DEFINED_PLATFORM_KEY_CONSTANTS.PRE_DEFINED_DOCSY_KEY == pkey) {
      if (pcfg.platformName !== "Docsy") {
        pcfg.platformName = "Docsy";
        logger.warn("Docsy \u5DF2\u7ECF\u4FEE\u6B63\u4E3A=>", pcfg.platformName);
      }
    }
  }
};
const _sfc_main$x = /* @__PURE__ */ defineComponent({
  __name: "DynamicPlatform",
  setup(__props) {
    const logger2 = LogFactory.getLogger("components/publish/tab/DynamicPlatform.vue");
    const {
      t
    } = useI18n();
    const showForm = ref(true);
    const defaultGithubSubtype = SubPlatformType.Github_Jekyll;
    const formRef = ref();
    const formData = reactive({
      subtype: defaultGithubSubtype,
      ptype: PlatformType.Github,
      dynCfg: new DynamicConfig(PlatformType.Github, getNewPlatformKey(PlatformType.Github, defaultGithubSubtype), "Jekyll-1"),
      subtypeOptions: [],
      dynamicConfigArray: []
    });
    const rules = reactive({
      platformName: [{
        required: true,
        message: () => t("form.validate.name.required")
      }]
    });
    const onSubPlatformTypeChange = (val) => {
      formData.subtype = val;
      logger2.debug(formData.subtype);
      onPlatformTypeChange(formData.ptype);
    };
    const onPlatformTypeChange = (val) => {
      formData.ptype = val;
      formData.subtypeOptions = getSubtypeList(val);
      const pname = getDefaultPlatformName(val, formData.subtype, formData.subtypeOptions.length > 0 && formData.subtype !== SubPlatformType.NONE);
      formData.dynCfg = new DynamicConfig(val, getNewPlatformKey(val, formData.subtypeOptions.length > 0 ? formData.subtype : SubPlatformType.NONE), pname);
      showForm.value = formData.ptype !== PlatformType.Custom;
      logger2.debug(formData.ptype);
    };
    const validateForm = (formEl) => {
      if (formData.ptype === PlatformType.Custom) {
        ElMessage.error(t("dynamic.platform.opt.noselect"));
        return false;
      }
      const pkey = formData.dynCfg.platformKey;
      logger2.debug("\u5C06\u8981\u4FDD\u5B58\u7684\u5E73\u53F0key", pkey);
      if (isDynamicKeyExists(formData.dynamicConfigArray, pkey)) {
        ElMessage.error(t("dynamic.platform.opt.key.exist"));
        return false;
      }
      const switchKey = "switch-" + pkey;
      const postidKey = "custom-" + pkey + "-post-id";
      if (checkKeyExists(pkey) || checkKeyExists(switchKey) || checkKeyExists(postidKey)) {
        ElMessage.error(t("dynamic.platform.opt.key.exist"));
        return false;
      }
      return true;
    };
    const submitForm = async (formEl) => {
      if (!formEl)
        return;
      if (!validateForm()) {
        return;
      }
      const result = await formEl.validate((valid, fields) => {
        if (valid) {
          logger2.debug("\u6821\u9A8C\u6210\u529F");
        } else {
          logger2.error(t("main.opt.failure"), fields);
        }
      });
      if (!result) {
        return;
      }
      const newCfg = new DynamicConfig(formData.ptype, formData.dynCfg.platformKey, formData.dynCfg.platformName);
      if (formData.ptype === PlatformType.Github) {
        newCfg.subPlatformType = formData.subtype;
      } else {
        newCfg.subPlatformType = SubPlatformType.NONE;
      }
      formData.dynamicConfigArray.push(newCfg);
      setDynamicJsonCfg(formData.dynamicConfigArray);
      reloadTable();
      ElMessage.success(t("main.opt.success"));
    };
    const tableData = [];
    const num = ref(0);
    const currentRow = ref();
    const currentTip = ref(t("dynamic.platform.opt.item.select"));
    const handleCurrentChange = (val) => {
      currentRow.value = val;
      currentTip.value = t("dynamic.platform.opt.item.select.tip") + currentRow.value.platformName;
      logger2.debug(currentRow.value);
    };
    const delRow = async () => {
      ElMessageBox.confirm(t("dynamic.platform.opt.del.confirm"), t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        if (!currentRow.value || !currentRow.value.platformKey) {
          ElMessage.error(t("dynamic.platform.opt.item.no.select.tip"));
          return;
        }
        for (let i = 0; i < formData.dynamicConfigArray.length; i++) {
          if (currentRow.value.platformKey === formData.dynamicConfigArray[i].platformKey) {
            formData.dynamicConfigArray.splice(i, 1);
          }
        }
        setDynamicJsonCfg(formData.dynamicConfigArray);
        reloadTable();
        ElMessage.success(t("main.opt.success"));
      }).catch(() => {
      });
    };
    const reloadTable = () => {
      tableData.length = 0;
      for (let i = 0; i < formData.dynamicConfigArray.length; i++) {
        tableData.push(formData.dynamicConfigArray[i]);
      }
      num.value = formData.dynamicConfigArray.length;
    };
    const initPage = async () => {
      formData.subtypeOptions = getSubtypeList(PlatformType.Github);
      formData.dynamicConfigArray = getDynamicJsonCfg().totalCfg || [];
      reloadTable();
      logger2.debug("dynamic init page=>", formData.dynamicConfigArray);
    };
    onMounted(async () => {
      logger2.info("\u5F00\u59CB\u5BFC\u5165\u9884\u5B9A\u4E49\u5E73\u53F0...");
      importPreDefinedPlatform();
      logger2.info("\u5BFC\u5165\u9884\u5B9A\u4E49\u5E73\u53F0\u6210\u529F.");
      await initPage();
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_button = ElButton;
      const _component_el_button_group = ElButtonGroup;
      const _component_el_form_item = ElFormItem;
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_input = ElInput;
      const _component_el_form = ElForm;
      const _component_el_header = ElHeader;
      const _component_el_table_column = ElTableColumn;
      const _component_el_table = ElTable;
      const _component_el_main = ElMain;
      const _component_el_container = ElContainer;
      return openBlock(), createBlock(_component_el_container, null, {
        default: withCtx(() => [createVNode(_component_el_header, {
          height: "300px",
          class: "publish-dyn-header"
        }, {
          default: withCtx(() => [createVNode(_component_el_form, {
            "label-width": "165px",
            ref_key: "formRef",
            ref: formRef,
            model: formData.dynCfg,
            rules
          }, {
            default: withCtx(() => [createVNode(_component_el_alert, {
              class: "top-version-tip",
              title: _ctx.$t("dynamic.platform.tip"),
              type: "info",
              closable: false
            }, null, 8, ["title"]), createVNode(_component_el_form_item, {
              label: _ctx.$t("dynamic.platform.type")
            }, {
              default: withCtx(() => [createVNode(_component_el_button_group, null, {
                default: withCtx(() => [createVNode(_component_el_button, {
                  type: formData.ptype === unref(PlatformType).Github ? "primary" : "",
                  onClick: _cache[0] || (_cache[0] = ($event) => onPlatformTypeChange(unref(PlatformType).Github))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("dynamic.platform.type.github")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: formData.ptype === unref(PlatformType).Metaweblog ? "primary" : "",
                  onClick: _cache[1] || (_cache[1] = ($event) => onPlatformTypeChange(unref(PlatformType).Metaweblog))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("dynamic.platform.type.metaweblog")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: formData.ptype === unref(PlatformType).Wordpress ? "primary" : "",
                  onClick: _cache[2] || (_cache[2] = ($event) => onPlatformTypeChange(unref(PlatformType).Wordpress))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("dynamic.platform.type.wordpress")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: formData.ptype === unref(PlatformType).Custom ? "primary" : "",
                  onClick: _cache[3] || (_cache[3] = ($event) => onPlatformTypeChange(unref(PlatformType).Custom))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("dynamic.platform.type.custom")), 1)]),
                  _: 1
                }, 8, ["type"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["label"]), !showForm.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 0
            }, {
              default: withCtx(() => [createVNode(_component_el_alert, {
                title: "\u656C\u8BF7\u671F\u5F85",
                type: "info",
                closable: false
              })]),
              _: 1
            })) : createCommentVNode("", true), formData.subtypeOptions.length > 0 && showForm.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 1
            }, {
              default: withCtx(() => [createVNode(_component_el_select, {
                modelValue: formData.subtype,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.subtype = $event),
                class: "m-2",
                placeholder: "Select",
                onChange: onSubPlatformTypeChange
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(formData.subtypeOptions, (item) => {
                  return openBlock(), createBlock(_component_el_option, {
                    key: item,
                    label: item,
                    value: item
                  }, null, 8, ["label", "value"]);
                }), 128))]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            })) : createCommentVNode("", true), showForm.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 2,
              label: formData.ptype + _ctx.$t("dynamic.platform.name"),
              prop: "platformName"
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: formData.dynCfg.platformName,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.dynCfg.platformName = $event),
                placeholder: _ctx.$t("dynamic.platform.name.tip")
              }, null, 8, ["modelValue", "placeholder"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), false ? (openBlock(), createBlock(_component_el_form_item, {
              key: 3,
              label: formData.ptype + _ctx.$t("dynamic.platform.key"),
              prop: "platformKey"
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(formData.dynCfg.platformKey), 1)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), showForm.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 4
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: _cache[6] || (_cache[6] = ($event) => submitForm(formRef.value))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("dynamic.platform.opt.add")), 1)]),
                _: 1
              })]),
              _: 1
            })) : createCommentVNode("", true)]),
            _: 1
          }, 8, ["model", "rules"])]),
          _: 1
        }), createVNode(_component_el_main, {
          class: "dyn-table-list"
        }, {
          default: withCtx(() => [createVNode(_component_el_form_item, null, {
            default: withCtx(() => [(openBlock(), createBlock(_component_el_table, {
              data: tableData,
              key: num.value,
              border: "",
              stripe: "",
              "highlight-current-row": "",
              "empty-text": "\u6682\u65E0\u6570\u636E",
              onCurrentChange: handleCurrentChange
            }, {
              default: withCtx(() => [createVNode(_component_el_table_column, {
                prop: "platformType",
                label: _ctx.$t("dynamic.platform.type")
              }, null, 8, ["label"]), createVNode(_component_el_table_column, {
                prop: "subPlatformType",
                label: _ctx.$t("dynamic.platform.subtype")
              }, null, 8, ["label"]), createVNode(_component_el_table_column, {
                prop: "platformKey",
                label: _ctx.$t("dynamic.platform.key")
              }, null, 8, ["label"]), createVNode(_component_el_table_column, {
                prop: "platformName",
                label: _ctx.$t("dynamic.platform.name")
              }, null, 8, ["label"])]),
              _: 1
            }))]),
            _: 1
          }), createVNode(_component_el_form_item, null, {
            default: withCtx(() => [currentRow.value ? (openBlock(), createBlock(_component_el_alert, {
              key: 0,
              class: "top-version-tip",
              title: currentTip.value,
              type: "info",
              closable: false
            }, null, 8, ["title"])) : createCommentVNode("", true), createVNode(_component_el_button, {
              type: "danger",
              onClick: delRow
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("dynamic.platform.opt.del.select")), 1)]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      });
    };
  }
});
const DynamicPlatform_vue_vue_type_style_index_0_scoped_bc346138_lang = "";
const DynamicPlatform = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["__scopeId", "data-v-bc346138"]]);
const useTabCountStore = defineStore("tabCount", () => {
  const tabCount = ref(0);
  function resetCount() {
    tabCount.value = 0;
  }
  function incrementIf(isAdd) {
    if (isAdd) {
      tabCount.value++;
    }
  }
  return {
    tabCount,
    resetCount,
    incrementIf
  };
});
const SWITCH_VUEPRESS_KEY = "switch-vuepress";
const SWITCH_HUGO_KEY = "switch-hugo";
const SWITCH_HEXO_KEY = "switch-hexo";
const SWITCH_JEKYLL_KEY = "switch-jekyll";
const SWITCH_JVUE_KEY = "switch-jvue";
const SWITCH_CONF_KEY = "switch-conf";
const SWITCH_CNBLOGS_KEY = "switch-cnblogs";
const SWITCH_WORDPRESS_KEY = "switch-wordpress";
const SWITCH_LIANDI_KEY = "switch-liandi";
const SWITCH_YUQUE_KEY = "switch-yuque";
const SWITCH_KMS_KEY = "switch-kms";
const SWITCH_CONSTANTS = {
  SWITCH_VUEPRESS_KEY,
  SWITCH_HUGO_KEY,
  SWITCH_HEXO_KEY,
  SWITCH_JEKYLL_KEY,
  SWITCH_JVUE_KEY,
  SWITCH_CONF_KEY,
  SWITCH_CNBLOGS_KEY,
  SWITCH_WORDPRESS_KEY,
  SWITCH_LIANDI_KEY,
  SWITCH_YUQUE_KEY,
  SWITCH_KMS_KEY
};
const useTabCount = () => {
  const tabCountStore = useTabCountStore();
  const vuepressEnabled = ref(false);
  const hugoEnabled = ref(false);
  const hexoEnabled = ref(false);
  const jekyllEnabled = ref(false);
  const jvueEnabled = ref(false);
  const confEnabled = ref(false);
  const cnblogsEnabled = ref(false);
  const wordpressEnabled = ref(false);
  const liandiEnabled = ref(false);
  const yuqueEnabled = ref(false);
  const kmsEnabled = ref(false);
  const switchFormData = reactive({
    dynamicConfigArray: []
  });
  function doCount() {
    tabCountStore.resetCount();
    vuepressEnabled.value = getBooleanConf(SWITCH_CONSTANTS.SWITCH_VUEPRESS_KEY);
    tabCountStore.incrementIf(vuepressEnabled.value);
    hugoEnabled.value = getBooleanConf(SWITCH_CONSTANTS.SWITCH_HUGO_KEY);
    tabCountStore.incrementIf(hugoEnabled.value);
    hexoEnabled.value = getBooleanConf(SWITCH_CONSTANTS.SWITCH_HEXO_KEY);
    tabCountStore.incrementIf(hexoEnabled.value);
    jekyllEnabled.value = getBooleanConf(SWITCH_CONSTANTS.SWITCH_JEKYLL_KEY);
    tabCountStore.incrementIf(jekyllEnabled.value);
    jvueEnabled.value = getBooleanConf(SWITCH_CONSTANTS.SWITCH_JVUE_KEY);
    tabCountStore.incrementIf(jvueEnabled.value);
    confEnabled.value = getBooleanConf(SWITCH_CONSTANTS.SWITCH_CONF_KEY);
    tabCountStore.incrementIf(confEnabled.value);
    cnblogsEnabled.value = getBooleanConf(SWITCH_CONSTANTS.SWITCH_CNBLOGS_KEY);
    tabCountStore.incrementIf(cnblogsEnabled.value);
    wordpressEnabled.value = getBooleanConf(SWITCH_CONSTANTS.SWITCH_WORDPRESS_KEY);
    tabCountStore.incrementIf(wordpressEnabled.value);
    liandiEnabled.value = getBooleanConf(SWITCH_CONSTANTS.SWITCH_LIANDI_KEY);
    tabCountStore.incrementIf(liandiEnabled.value);
    yuqueEnabled.value = getBooleanConf(SWITCH_CONSTANTS.SWITCH_YUQUE_KEY);
    tabCountStore.incrementIf(yuqueEnabled.value);
    kmsEnabled.value = getBooleanConf(SWITCH_CONSTANTS.SWITCH_KMS_KEY);
    tabCountStore.incrementIf(kmsEnabled.value);
    const dynamicJsonCfg = getDynamicJsonCfg();
    const results = dynamicJsonCfg.totalCfg || [];
    switchFormData.dynamicConfigArray = [];
    results.forEach((item) => {
      const switchKey = getDynSwitchKey(item.platformKey);
      const switchValue = getBooleanConf(switchKey);
      item.modelValue = getDynSwitchModelValue({
        switchKey: item.platformKey,
        switchValue
      });
      tabCountStore.incrementIf(switchValue);
      switchFormData.dynamicConfigArray.push(item);
    });
  }
  return {
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
    switchFormData,
    doCount
  };
};
const _hoisted_1$9 = {
  key: 1
};
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "ServiceSwitch",
  props: {
    isReload: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
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
      switchFormData,
      doCount
    } = useTabCount();
    const showSwitchTip = ref(false);
    const vuepressOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTANTS.SWITCH_VUEPRESS_KEY, val);
      initConf();
    };
    const hugoOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTANTS.SWITCH_HUGO_KEY, val);
      initConf();
    };
    const hexoOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTANTS.SWITCH_HEXO_KEY, val);
      initConf();
    };
    const jekyllOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTANTS.SWITCH_JEKYLL_KEY, val);
      initConf();
    };
    const jvueOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTANTS.SWITCH_JVUE_KEY, val);
      initConf();
    };
    const confOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTANTS.SWITCH_CONF_KEY, val);
      initConf();
    };
    const cnblogsOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTANTS.SWITCH_CNBLOGS_KEY, val);
      initConf();
    };
    const wordpressOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTANTS.SWITCH_WORDPRESS_KEY, val);
      initConf();
    };
    const liandiOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTANTS.SWITCH_LIANDI_KEY, val);
      initConf();
    };
    const yuqueOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTANTS.SWITCH_YUQUE_KEY, val);
      initConf();
    };
    const kmsOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTANTS.SWITCH_KMS_KEY, val);
      initConf();
    };
    const dynamicOnChange = (val) => {
      const switchItem = getSwitchItem(val);
      setBooleanConf(switchItem.switchKey, switchItem.switchValue);
      initConf();
    };
    const initConf = () => {
      doCount();
      if (tabCountStore.tabCount === 0) {
        showSwitchTip.value = true;
      } else {
        showSwitchTip.value = false;
      }
    };
    watch(() => props.isReload, async (oldValue, newValue) => {
      initConf();
    });
    onMounted(() => {
      initConf();
    });
    return (_ctx, _cache) => {
      const _component_el_switch = ElSwitch;
      const _component_el_form_item = ElFormItem;
      const _component_el_alert = ElAlert;
      const _component_el_form = ElForm;
      return openBlock(), createBlock(_component_el_form, {
        class: "switch-form",
        inline: ""
      }, {
        default: withCtx(() => [createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.vuepress")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(vuepressEnabled),
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => isRef(vuepressEnabled) ? vuepressEnabled.value = $event : null),
            onChange: vuepressOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.hugo")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(hugoEnabled),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(hugoEnabled) ? hugoEnabled.value = $event : null),
            onChange: hugoOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.hexo")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(hexoEnabled),
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(hexoEnabled) ? hexoEnabled.value = $event : null),
            onChange: hexoOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.jekyll")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(jekyllEnabled),
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(jekyllEnabled) ? jekyllEnabled.value = $event : null),
            onChange: jekyllOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.jvue")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(jvueEnabled),
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(jvueEnabled) ? jvueEnabled.value = $event : null),
            onChange: jvueOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), false ? (openBlock(), createBlock(_component_el_form_item, {
          key: 0,
          label: _ctx.$t("service.switch.conf")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(confEnabled),
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(confEnabled) ? confEnabled.value = $event : null),
            onChange: confOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.cnblogs")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(cnblogsEnabled),
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(cnblogsEnabled) ? cnblogsEnabled.value = $event : null),
            onChange: cnblogsOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.wordpress")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(wordpressEnabled),
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(wordpressEnabled) ? wordpressEnabled.value = $event : null),
            onChange: wordpressOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.liandi")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(liandiEnabled),
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => isRef(liandiEnabled) ? liandiEnabled.value = $event : null),
            onChange: liandiOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.yuque")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(yuqueEnabled),
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => isRef(yuqueEnabled) ? yuqueEnabled.value = $event : null),
            onChange: yuqueOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.kms")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(kmsEnabled),
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => isRef(kmsEnabled) ? kmsEnabled.value = $event : null),
            onChange: kmsOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(switchFormData).dynamicConfigArray, (cfg) => {
          return openBlock(), createBlock(_component_el_form_item, {
            key: cfg.posid,
            label: cfg.platformName
          }, {
            default: withCtx(() => [createVNode(_component_el_switch, {
              modelValue: cfg.modelValue,
              "onUpdate:modelValue": ($event) => cfg.modelValue = $event,
              "active-value": unref(getDynSwitchActive)(cfg.platformKey),
              "inactive-value": unref(getDynSwitchInactive)(cfg.platformKey),
              onChange: dynamicOnChange
            }, null, 8, ["modelValue", "onUpdate:modelValue", "active-value", "inactive-value"])]),
            _: 2
          }, 1032, ["label"]);
        }), 128)), showSwitchTip.value ? (openBlock(), createElementBlock("div", _hoisted_1$9, [createBaseVNode("p", null, [createVNode(_component_el_alert, {
          title: _ctx.$t("platform.must.select.one"),
          type: "error",
          closable: false
        }, null, 8, ["title"])])])) : createCommentVNode("", true)]),
        _: 1
      });
    };
  }
});
const ServiceSwitch_vue_vue_type_style_index_0_scoped_d0e6a313_lang = "";
const ServiceSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["__scopeId", "data-v-d0e6a313"]]);
const _hoisted_1$8 = {
  key: 1
};
const __default__ = {
  name: "PostBind"
};
const _sfc_main$v = /* @__PURE__ */ defineComponent({
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
    const logger2 = LogFactory.getLogger("components/publish/tab/PostBind.vue");
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
      logger2.debug(formData.dynamicConfigArray);
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
      logger2.debug("PostBind pageId=>", pageId);
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
          logger2.debug("\u6821\u9A8C\u6210\u529F");
        } else {
          logger2.error(t("main.opt.failure"), fields);
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
        logger2.debug("PostBind\u4FDD\u5B58\u5C5E\u6027\u5230\u601D\u6E90\u7B14\u8BB0,meta=>", customAttr);
        const siyuanApi = new SiYuanApi();
        await siyuanApi.setBlockAttrs(siyuanData.pageId, customAttr);
        ElMessage.success(t("main.opt.success"));
      } catch (e) {
        logger2.error("\u4FDD\u5B58\u5F02\u5E38", e);
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
    const resetForm = (formEl) => {
      if (!formEl)
        return;
      formEl.resetFields();
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
          }), createVNode(_component_el_button, {
            onClick: _cache[12] || (_cache[12] = ($event) => resetForm(ruleFormRef.value))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("post.bind.conf.cancel")), 1)]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["model", "rules"])) : (openBlock(), createElementBlock("div", _hoisted_1$8, [createVNode(_component_el_alert, {
        class: "top-version-tip",
        title: _ctx.$t("config.platform.none"),
        type: "error",
        closable: false
      }, null, 8, ["title"])]));
    };
  }
});
const PostBind_vue_vue_type_style_index_0_lang = "";
const PostBind_vue_vue_type_style_index_1_scoped_1e3d85a4_lang = "";
const PostBind = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["__scopeId", "data-v-1e3d85a4"]]);
class DynamicGCfg extends GithubCfg {
  constructor(cfg) {
    super("", "", "", "", "");
    this.previewMdUrl = "/[user]/[repo]/blob/[branch]/[docpath]";
    this.previewUrl = "/post/[postid].html";
    this.posidKey = getDynPostidKey(cfg.platformKey);
    this.blogName = cfg.subPlatformType;
    switch (cfg.subPlatformType) {
      case SubPlatformType.Github_Vuepress:
        this.defaultPath = "docs";
        this.mdFilenameRule = "[filename].md";
        break;
      case SubPlatformType.Github_Hugo:
        this.defaultPath = "content/post";
        this.mdFilenameRule = "[slug].md";
        break;
      case SubPlatformType.Github_Hexo:
        this.defaultPath = "source/_posts";
        this.mdFilenameRule = "[slug].md";
        break;
      case SubPlatformType.Github_Jekyll:
        this.defaultPath = "_posts";
        this.mdFilenameRule = "[yyyy]-[mm]-[dd]-[slug].md";
        break;
      case SubPlatformType.Github_Vitepress:
        this.defaultPath = "docs";
        this.previewUrl = "/[docpath].html";
        this.mdFilenameRule = "[slug].md";
        break;
      case SubPlatformType.Github_Nuxt:
        this.defaultPath = "content";
        this.previewUrl = "/[docpath]";
        this.mdFilenameRule = "[slug].md";
        break;
      case SubPlatformType.Github_Next:
        this.defaultPath = "pages";
        this.previewUrl = "/[docpath]";
        this.mdFilenameRule = "[slug].md";
        break;
    }
  }
}
var PageType = /* @__PURE__ */ ((PageType2) => {
  PageType2[PageType2["Markdown"] = 0] = "Markdown";
  PageType2[PageType2["Html"] = 1] = "Html";
  return PageType2;
})(PageType || {});
class MetaweblogPlaceholder {
  constructor() {
    __publicField(this, "homePlaceholder");
    __publicField(this, "apiUrlPlaceholder");
    __publicField(this, "usernamePlaceholder");
    __publicField(this, "passwordPlaceholder");
    __publicField(this, "apiStatusPlaceholder");
    __publicField(this, "blogNamePlaceholder");
    __publicField(this, "posidKeyPlaceholder");
    __publicField(this, "previewUrlPlaceholder");
    __publicField(this, "pageTypePlaceholder");
  }
}
class MetaweblogCfg {
  constructor(home, apiUrl, username, password) {
    __publicField(this, "home");
    __publicField(this, "apiUrl");
    __publicField(this, "username");
    __publicField(this, "password");
    __publicField(this, "apiStatus");
    __publicField(this, "blogName");
    __publicField(this, "posidKey");
    __publicField(this, "previewUrl");
    __publicField(this, "pageType");
    __publicField(this, "placeholder");
    this.home = home;
    this.apiUrl = apiUrl;
    this.username = username;
    this.password = password;
    this.apiStatus = false;
    this.blogName = "";
    this.posidKey = "";
    this.previewUrl = "";
    this.pageType = PageType.Markdown;
    this.placeholder = new MetaweblogPlaceholder();
  }
}
class DynamicMCfg extends MetaweblogCfg {
  constructor(postidKey) {
    super("", "", "", "");
    this.posidKey = postidKey;
    this.previewUrl = "/p/[postid].html";
    this.pageType = PageType.Html;
    let dynPlaceholder = new MetaweblogPlaceholder();
    dynPlaceholder.homePlaceholder = "\u5E73\u53F0\u9996\u9875";
    dynPlaceholder.usernamePlaceholder = "\u7528\u6237\u540D";
    dynPlaceholder.passwordPlaceholder = "\u5BC6\u7801";
    dynPlaceholder.apiUrlPlaceholder = "xmlrpc\u8BF7\u6C42\u7684API\u5730\u5740";
    dynPlaceholder.previewUrlPlaceholder = "\u9884\u89C8\u89C4\u5219";
    this.placeholder = dynPlaceholder;
  }
}
class DynamicWCfg extends MetaweblogCfg {
  constructor(postidKey) {
    super("http://localhost:8000", "http://localhost:8000/xmlrpc.php", "", "");
    this.posidKey = postidKey;
    this.previewUrl = "/?p=[postid]";
    this.pageType = PageType.Html;
    let dynPlaceholder = new MetaweblogPlaceholder();
    dynPlaceholder.homePlaceholder = "\u5E73\u53F0\u9996\u9875";
    dynPlaceholder.usernamePlaceholder = "\u7528\u6237\u540D";
    dynPlaceholder.passwordPlaceholder = "\u5BC6\u7801";
    dynPlaceholder.apiUrlPlaceholder = "xmlrpc\u8BF7\u6C42\u7684API\u5730\u5740";
    dynPlaceholder.previewUrlPlaceholder = "\u9884\u89C8\u89C4\u5219";
    this.placeholder = dynPlaceholder;
  }
}
const _hoisted_1$7 = {
  class: "github-setting-basic"
};
const _hoisted_2$4 = {
  href: "https://github.com/settings/tokens/new",
  target: "_blank"
};
const _hoisted_3$1 = {
  key: 0,
  class: "github-setting-advanced"
};
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "GithubSetting",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    apiType: {
      type: String,
      default: ""
    },
    cfg: {
      type: GithubCfg,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const logger2 = LogFactory.getLogger("components/publish/tab/setting/GithubSetting.vue");
    const {
      t
    } = useI18n();
    const editMode = ref(false);
    const isLoading = ref(false);
    const apiStatus = ref(false);
    const autoDeleteTest = ref(true);
    const formRef = ref();
    const formData = reactive({
      githubUser: "",
      githubRepo: "",
      githubToken: "",
      defaultBranch: "main",
      defaultPath: "docs/_posts",
      msg: "auto published by sy-post-publisher",
      author: "terwer",
      email: "youweics@163.com",
      home: "",
      baseUrl: "",
      previewMdUrl: "",
      previewUrl: "",
      mdFilenameRule: "[filename]"
    });
    const rules = reactive({
      githubUser: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      githubRepo: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      githubToken: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      defaultBranch: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      defaultPath: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      msg: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      author: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      email: [{
        required: true,
        message: () => t("form.validate.name.required")
      }]
    });
    const simpleMode = () => {
      editMode.value = false;
    };
    const complexMode = () => {
      editMode.value = true;
    };
    const testOnChange = (val) => {
      autoDeleteTest.value = val;
    };
    const resetForm = (formEl) => {
      if (!formEl)
        return;
      formEl.resetFields();
    };
    const submitForm = async (formEl) => {
      if (!formEl)
        return;
      const result = await formEl.validate((valid, fields) => {
        if (valid) {
          logger2.debug("\u6821\u9A8C\u6210\u529F");
        } else {
          logger2.error(t("main.opt.failure"), fields);
        }
      });
      if (!result) {
        return;
      }
      saveConf(false);
    };
    const valiConf = async () => {
      isLoading.value = true;
      saveConf(true);
      const cfg = getJSONConf(props.apiType);
      let err;
      try {
        const api = new API(props.apiType);
        const commonPost = new Post();
        commonPost.postid = "content/post/test.md";
        commonPost.description = "# Hello world";
        let res;
        try {
          res = await api.newPost(commonPost);
        } catch (e) {
          err = e;
          cfg.apiStatus = false;
          apiStatus.value = false;
        }
        if (!res) {
          cfg.apiStatus = false;
          apiStatus.value = false;
        } else {
          cfg.apiStatus = true;
          apiStatus.value = true;
        }
        if (autoDeleteTest.value) {
          await api.deletePost(commonPost.postid);
        }
      } catch (e) {
        cfg.apiStatus = false;
        apiStatus.value = false;
        logger2.error(e);
      }
      setJSONConf(props.apiType, cfg);
      if (!apiStatus.value) {
        if (err) {
          ElMessage.error(t("setting.blog.vali.error") + "=>" + err);
        } else {
          ElMessage.error(t("setting.blog.vali.error"));
        }
      } else {
        ElMessage.success(t("main.opt.success"));
      }
      isLoading.value = false;
    };
    const saveConf = (hideTip) => {
      const cfg = props.cfg;
      cfg.githubUser = formData.githubUser;
      cfg.githubRepo = formData.githubRepo;
      cfg.githubToken = formData.githubToken;
      cfg.defaultPath = formData.defaultPath;
      cfg.defaultBranch = formData.defaultBranch;
      cfg.defaultMsg = formData.msg;
      cfg.author = formData.author;
      cfg.email = formData.email;
      cfg.home = formData.home;
      cfg.baseUrl = formData.baseUrl;
      cfg.previewMdUrl = formData.previewMdUrl;
      cfg.previewUrl = formData.previewUrl;
      cfg.mdFilenameRule = formData.mdFilenameRule;
      cfg.apiStatus = apiStatus.value;
      setJSONConf(props.apiType, cfg);
      if (hideTip !== true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const initConf = () => {
      let conf = getJSONConf(props.apiType);
      if (isEmptyObject(conf)) {
        conf = props.cfg;
      }
      if (conf) {
        formData.githubUser = conf.githubUser;
        formData.githubRepo = conf.githubRepo;
        formData.githubToken = conf.githubToken;
        formData.defaultPath = conf.defaultPath;
        formData.defaultBranch = conf.defaultBranch;
        formData.msg = conf.defaultMsg;
        formData.author = conf.author;
        formData.email = conf.email;
        formData.home = conf.home;
        formData.baseUrl = conf.baseUrl;
        formData.previewMdUrl = conf.previewMdUrl;
        formData.previewUrl = conf.previewUrl;
        formData.mdFilenameRule = conf.mdFilenameRule;
        apiStatus.value = conf.apiStatus;
      }
    };
    onMounted(async () => {
      initConf();
    });
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_el_button_group = ElButtonGroup;
      const _component_el_form_item = ElFormItem;
      const _component_el_input = ElInput;
      const _component_el_switch = ElSwitch;
      const _component_el_alert = ElAlert;
      const _component_el_form = ElForm;
      return openBlock(), createBlock(_component_el_form, {
        "label-width": "120px",
        ref_key: "formRef",
        ref: formRef,
        model: formData,
        rules,
        "status-icon": ""
      }, {
        default: withCtx(() => [createVNode(_component_el_form_item, {
          label: _ctx.$t("main.publish.editmode")
        }, {
          default: withCtx(() => [createVNode(_component_el_button_group, null, {
            default: withCtx(() => [createVNode(_component_el_button, {
              type: editMode.value ? "default" : "primary",
              onClick: simpleMode
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.editmode.simple")), 1)]),
              _: 1
            }, 8, ["type"]), createVNode(_component_el_button, {
              type: editMode.value ? "primary" : "default",
              onClick: complexMode
            }, {
              default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.editmode.complex")), 1)]),
              _: 1
            }, 8, ["type"])]),
            _: 1
          })]),
          _: 1
        }, 8, ["label"]), createBaseVNode("div", _hoisted_1$7, [createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.github.user"),
          prop: "githubUser"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.githubUser,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.githubUser = $event),
            placeholder: _ctx.$t("setting.blog.type.github.user.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.github.repo"),
          prop: "githubRepo"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.githubRepo,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.githubRepo = $event),
            placeholder: _ctx.$t("setting.blog.type.github.repo.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.github.default.branch"),
          prop: "defaultBranch"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.defaultBranch,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.defaultBranch = $event),
            placeholder: _ctx.$t("setting.blog.type.github.default.branch.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.github.token"),
          prop: "githubToken"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            type: "password",
            modelValue: formData.githubToken,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.githubToken = $event),
            placeholder: _ctx.$t("setting.blog.type.github.token.tip"),
            "show-password": ""
          }, null, 8, ["modelValue", "placeholder"]), createBaseVNode("a", _hoisted_2$4, toDisplayString(_ctx.$t("setting.blog.type.github.token.gen")), 1)]),
          _: 1
        }, 8, ["label"])]), editMode.value ? (openBlock(), createElementBlock("div", _hoisted_3$1, [createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.github.default.path"),
          prop: "defaultPath"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.defaultPath,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.defaultPath = $event),
            placeholder: _ctx.$t("setting.blog.type.github.default.path.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.github.msg"),
          prop: "msg"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.msg,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.msg = $event),
            placeholder: _ctx.$t("setting.blog.type.github.msg.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.github.author"),
          prop: "author"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.author,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.author = $event),
            placeholder: _ctx.$t("setting.blog.type.github.author.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.github.email"),
          prop: "email"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.email,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => formData.email = $event),
            placeholder: _ctx.$t("setting.blog.type.github.email.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.common.home")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.home,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => formData.home = $event),
            placeholder: _ctx.$t("setting.common.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.github.baseUrl")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.baseUrl,
            "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => formData.baseUrl = $event),
            placeholder: _ctx.$t("setting.github.baseUrl.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.previewMdUrl")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.previewMdUrl,
            "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => formData.previewMdUrl = $event),
            placeholder: _ctx.$t("setting.blog.previewMdUrl.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.previewUrl")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.previewUrl,
            "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => formData.previewUrl = $event),
            placeholder: _ctx.$t("setting.blog.previewUrl.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.mdFilenameRule")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.mdFilenameRule,
            "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => formData.mdFilenameRule = $event),
            placeholder: _ctx.$t("setting.blog.mdFilenameRule.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"])])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
          label: _ctx.$t("form.validate.github.auto.delete")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: autoDeleteTest.value,
            "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => autoDeleteTest.value = $event),
            onChange: testOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            type: "primary",
            onClick: valiConf,
            loading: isLoading.value
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(isLoading.value ? _ctx.$t("setting.blog.vali.ing") : _ctx.$t("setting.blog.vali")), 1)]),
            _: 1
          }, 8, ["loading"]), !apiStatus.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 0,
            title: _ctx.$t("setting.blog.vali.tip"),
            type: "warning",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true), apiStatus.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 1,
            title: _ctx.$t("setting.blog.vali.ok"),
            type: "success",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true)]),
          _: 1
        }), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[14] || (_cache[14] = ($event) => submitForm(formRef.value))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.blog.save")), 1)]),
            _: 1
          }), createVNode(_component_el_button, {
            onClick: _cache[15] || (_cache[15] = ($event) => resetForm(formRef.value))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.blog.cancel")), 1)]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["model", "rules"]);
    };
  }
});
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "VuepressSetting",
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS);
    const vuepressCfg = new VuepressCfg();
    const cfg = ref(vuepressCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$u, {
        "api-type": apiType.value,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
class HugoCfg extends GithubCfg {
  constructor() {
    super("", SubPlatformType.Github_Hugo, "", "", "");
    this.defaultPath = "content/post";
    this.posidKey = POSTID_KEY_CONSTANTS.HUGO_POSTID_KEY;
    this.previewMdUrl = "/[user]/[repo]/blob/[branch]/[docpath]";
    this.previewUrl = "/post/[postid].html";
    this.mdFilenameRule = "[slug].md";
  }
}
const _sfc_main$s = /* @__PURE__ */ defineComponent({
  __name: "HugoSetting",
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_HUGO);
    const hugoCfg = new HugoCfg();
    const cfg = ref(hugoCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$u, {
        "api-type": apiType.value,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
class HexoCfg extends GithubCfg {
  constructor() {
    super("", SubPlatformType.Github_Hexo, "", "", "");
    this.defaultPath = "source/_posts";
    this.posidKey = POSTID_KEY_CONSTANTS.HEXO_POSTID_KEY;
    this.previewMdUrl = "/[user]/[repo]/blob/[branch]/[docpath]";
    this.previewUrl = "/post/[postid].html";
    this.mdFilenameRule = "[slug].md";
  }
}
const _sfc_main$r = /* @__PURE__ */ defineComponent({
  __name: "HexoSetting",
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_HEXO);
    const hexoCfg = new HexoCfg();
    const cfg = ref(hexoCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$u, {
        "api-type": apiType.value,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
class JekyllCfg extends GithubCfg {
  constructor() {
    super("", SubPlatformType.Github_Jekyll, "", "", "");
    this.defaultPath = "_posts";
    this.posidKey = POSTID_KEY_CONSTANTS.JEKYLL_POSTID_KEY;
    this.previewMdUrl = "/[user]/[repo]/blob/[branch]/[docpath]";
    this.previewUrl = "/post/[postid].html";
    this.mdFilenameRule = "[yyyy]-[mm]-[dd]-[slug].md";
  }
}
const _sfc_main$q = /* @__PURE__ */ defineComponent({
  __name: "JekyllSetting",
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_JEKYLL);
    const jekyllCfg = new JekyllCfg();
    const cfg = ref(jekyllCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$u, {
        "api-type": apiType.value,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
class JVueCfg extends MetaweblogCfg {
  constructor() {
    super("https://[your-jvue-site]", "https://[your-jvue-site]/xmlrpc", "", "");
    this.posidKey = POSTID_KEY_CONSTANTS.JVUE_POSTID_KEY;
    this.previewUrl = "/post/[postid].html";
    this.pageType = PageType.Markdown;
  }
}
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  __name: "MetaweblogSetting",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    apiType: {
      type: String,
      default: ""
    },
    cfg: {
      type: MetaweblogCfg,
      default: null
    }
  },
  setup(__props) {
    const props = __props;
    const logger2 = LogFactory.getLogger("components/publish/tab/setting/MetaweblogSetting.vue");
    const {
      t
    } = useI18n();
    const ptypeMd = parseInt(PageType.Markdown.toString());
    const home = ref("");
    const apiUrl = ref("");
    const previewUrl = ref("");
    const username = ref("");
    const password = ref("");
    const ptype = ref(ptypeMd);
    const isLoading = ref(false);
    const apiStatus = ref(false);
    const blogName = ref("");
    const apiTypeInfo = ref(t("setting.blog.platform.support.metaweblog") + props.apiType + " ");
    const valiConf = async () => {
      isLoading.value = true;
      try {
        saveConf(true);
        const cfg = getJSONConf(props.apiType);
        const api = new API(props.apiType);
        const usersBlogs = await api.getUsersBlogs();
        if (usersBlogs && usersBlogs.length > 0) {
          const userBlog = usersBlogs[0];
          cfg.blogName = userBlog.blogName;
          blogName.value = userBlog.blogName;
          cfg.apiStatus = true;
          apiStatus.value = true;
        } else {
          cfg.apiStatus = false;
          apiStatus.value = false;
        }
        setJSONConf(props.apiType, cfg);
      } catch (e) {
        console.error(e);
      }
      if (!apiStatus.value) {
        ElMessage.error(t("setting.blog.vali.error"));
      } else {
        ElMessage.success(t("main.opt.success"));
      }
      isLoading.value = false;
      logger2.debug("Metaweblog\u901A\u7528Setting\u9A8C\u8BC1\u5B8C\u6BD5");
    };
    const saveConf = (hideTip) => {
      logger2.debug("Metaweblog\u901A\u7528Setting\u4FDD\u5B58\u914D\u7F6E");
      const cfg = props.cfg;
      cfg.home = home.value;
      cfg.username = username.value;
      cfg.password = password.value;
      cfg.apiUrl = apiUrl.value;
      cfg.previewUrl = previewUrl.value;
      cfg.blogName = blogName.value;
      cfg.pageType = ptype.value;
      cfg.apiStatus = apiStatus.value;
      setJSONConf(props.apiType, cfg);
      if (hideTip !== true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const initConf = () => {
      logger2.debug("Metaweblog\u901A\u7528Setting\u914D\u7F6E\u521D\u59CB\u5316");
      let conf = getJSONConf(props.apiType);
      if (isEmptyObject(conf)) {
        conf = props.cfg;
      }
      if (conf) {
        logger2.debug("get setting conf=>", conf);
        home.value = conf.home;
        apiUrl.value = conf.apiUrl;
        previewUrl.value = conf.previewUrl;
        username.value = conf.username;
        password.value = conf.password;
        blogName.value = conf.blogName;
        ptype.value = conf.pageType;
        apiStatus.value = conf.apiStatus;
      }
    };
    onMounted(async () => {
      initConf();
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_radio = ElRadio;
      const _component_el_radio_group = ElRadioGroup;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      return openBlock(), createBlock(_component_el_form, {
        "label-width": "120px"
      }, {
        default: withCtx(() => [createVNode(_component_el_alert, {
          class: "top-version-tip",
          title: apiTypeInfo.value + blogName.value,
          type: "info",
          closable: false
        }, null, 8, ["title"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.url")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: home.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => home.value = $event),
            placeholder: props.cfg.placeholder.homePlaceholder
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.username")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: username.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => username.value = $event),
            placeholder: props.cfg.placeholder.usernamePlaceholder
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.password")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            type: "password",
            modelValue: password.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => password.value = $event),
            "show-password": "",
            placeholder: props.cfg.placeholder.passwordPlaceholder
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.apiurl")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: apiUrl.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => apiUrl.value = $event),
            placeholder: props.cfg.placeholder.apiUrlPlaceholder
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.previewUrl")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: previewUrl.value,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => previewUrl.value = $event),
            placeholder: props.cfg.placeholder.previewUrlPlaceholder
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.pageType")
        }, {
          default: withCtx(() => [createVNode(_component_el_radio_group, {
            modelValue: ptype.value,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => ptype.value = $event),
            class: "ml-4"
          }, {
            default: withCtx(() => [createVNode(_component_el_radio, {
              label: 0,
              size: "large"
            }, {
              default: withCtx(() => [createTextVNode("Markdown")]),
              _: 1
            }), createVNode(_component_el_radio, {
              label: 1,
              size: "large"
            }, {
              default: withCtx(() => [createTextVNode("HTML")]),
              _: 1
            })]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            type: "primary",
            onClick: valiConf,
            loading: isLoading.value
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(isLoading.value ? _ctx.$t("setting.blog.vali.ing") : _ctx.$t("setting.blog.vali")), 1)]),
            _: 1
          }, 8, ["loading"]), !apiStatus.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 0,
            title: _ctx.$t("setting.blog.vali.tip.metaweblog"),
            type: "warning",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true), apiStatus.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 1,
            title: _ctx.$t("setting.blog.vali.ok.metaweblog"),
            type: "success",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true)]),
          _: 1
        }), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            type: "primary",
            onClick: saveConf
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.blog.save")), 1)]),
            _: 1
          }), createVNode(_component_el_button, null, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.blog.cancel")), 1)]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      });
    };
  }
});
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  __name: "JVueSetting",
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_JVUE);
    const {
      t
    } = useI18n();
    const jvueCfg = new JVueCfg();
    const jvuePlaceholder = new MetaweblogPlaceholder();
    jvuePlaceholder.homePlaceholder = t("setting.jvue.home.tip");
    jvuePlaceholder.usernamePlaceholder = t("setting.jvue.username.tip");
    jvuePlaceholder.passwordPlaceholder = t("setting.jvue.password.tip");
    jvuePlaceholder.apiUrlPlaceholder = t("setting.jvue.apiUrl.tip");
    jvuePlaceholder.previewUrlPlaceholder = t("setting.jvue.previewUrl.tip");
    jvueCfg.placeholder = jvuePlaceholder;
    const cfg = ref(jvueCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$p, {
        "api-type": apiType.value,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
class ConfCfg extends MetaweblogCfg {
  constructor() {
    super("https://youweics.atlassian.net/wiki/spaces/[spaceKey]", "http://localhost:3000/api/xmlrpc", "", "");
    this.posidKey = POSTID_KEY_CONSTANTS.CONFLUENCE_POSTID_KEY;
    this.previewUrl = "pages/[postid]";
    this.pageType = PageType.Html;
  }
}
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  __name: "ConfluenceSetting",
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_CONFLUENCE);
    const {
      t
    } = useI18n();
    const confCfg = new ConfCfg();
    const confPlaceholder = new MetaweblogPlaceholder();
    confPlaceholder.homePlaceholder = t("setting.conf.home.tip");
    confPlaceholder.usernamePlaceholder = t("setting.conf.username.tip");
    confPlaceholder.passwordPlaceholder = t("setting.conf.password.tip");
    confPlaceholder.apiUrlPlaceholder = t("setting.conf.apiUrl.tip");
    confPlaceholder.previewUrlPlaceholder = t("setting.conf.previewUrl.tip");
    confCfg.placeholder = confPlaceholder;
    const cfg = ref(confCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$p, {
        "api-type": apiType.value,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
class CnblogsCfg extends MetaweblogCfg {
  constructor() {
    super("https://www.cnblogs.com/[yourblog]", "https://rpc.cnblogs.com/metaweblog/[yourblog]", "", "");
    this.posidKey = POSTID_KEY_CONSTANTS.CNBLOGS_POSTID_KEY;
    this.previewUrl = "/p/[postid].html";
    this.pageType = PageType.Markdown;
  }
}
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  __name: "CnblogsSetting",
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_CNBLOGS);
    const {
      t
    } = useI18n();
    const cnblogsCfg = new CnblogsCfg();
    const cnblogsPlaceholder = new MetaweblogPlaceholder();
    cnblogsPlaceholder.homePlaceholder = t("setting.cnblogs.home.tip");
    cnblogsPlaceholder.usernamePlaceholder = t("setting.cnblogs.username.tip");
    cnblogsPlaceholder.passwordPlaceholder = t("setting.cnblogs.password.tip");
    cnblogsPlaceholder.apiUrlPlaceholder = t("setting.cnblogs.apiUrl.tip");
    cnblogsPlaceholder.previewUrlPlaceholder = t("setting.cnblogs.previewUrl.tip");
    cnblogsCfg.placeholder = cnblogsPlaceholder;
    const cfg = ref(cnblogsCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$p, {
        "api-type": apiType.value,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
class WordpressCfg extends MetaweblogCfg {
  constructor() {
    super("http://localhost:8000", "http://localhost:8000/xmlrpc.php", "", "");
    this.posidKey = POSTID_KEY_CONSTANTS.WORDPRESS_POSTID_KEY;
    this.previewUrl = "/?p=[postid]";
    this.pageType = PageType.Markdown;
  }
}
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  __name: "WordpressSetting",
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_WORDPRESS);
    const {
      t
    } = useI18n();
    const wpCfg = new WordpressCfg();
    const wpPlaceholder = new MetaweblogPlaceholder();
    wpPlaceholder.homePlaceholder = t("setting.wordpress.home.tip");
    wpPlaceholder.usernamePlaceholder = t("setting.wordpress.username.tip");
    wpPlaceholder.passwordPlaceholder = t("setting.wordpress.password.tip");
    wpPlaceholder.apiUrlPlaceholder = t("setting.wordpress.apiUrl.tip");
    wpPlaceholder.previewUrlPlaceholder = t("setting.wordpress.previewUrl.tip");
    wpCfg.placeholder = wpPlaceholder;
    const cfg = ref(wpCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$p, {
        "api-type": apiType.value,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
class CommonblogPlaceholder {
  constructor() {
    __publicField(this, "homePlaceholder");
    __publicField(this, "apiUrlPlaceholder");
    __publicField(this, "usernamePlaceholder");
    __publicField(this, "passwordPlaceholder");
    __publicField(this, "tokenPlaceholder");
    __publicField(this, "apiStatusPlaceholder");
    __publicField(this, "blogNamePlaceholder");
    __publicField(this, "blogidPlaceholder");
    __publicField(this, "posidKeyPlaceholder");
    __publicField(this, "previewUrlPlaceholder");
    __publicField(this, "pageTypePlaceholder");
    __publicField(this, "tokenSettingUrl");
  }
}
class CommonblogCfg {
  constructor() {
    __publicField(this, "home");
    __publicField(this, "apiUrl");
    __publicField(this, "username");
    __publicField(this, "password");
    __publicField(this, "token");
    __publicField(this, "apiStatus");
    __publicField(this, "blogName");
    __publicField(this, "blogid");
    __publicField(this, "posidKey");
    __publicField(this, "previewUrl");
    __publicField(this, "pageType");
    __publicField(this, "tokenSettingUrl");
    __publicField(this, "placeholder");
    this.home = "";
    this.apiUrl = "";
    this.username = "";
    this.password = "";
    this.token = "";
    this.apiStatus = false;
    this.blogName = "";
    this.blogid = "";
    this.posidKey = "";
    this.previewUrl = "";
    this.pageType = PageType.Markdown;
    this.tokenSettingUrl = "";
    this.placeholder = new CommonblogPlaceholder();
  }
}
class LiandiCfg extends CommonblogCfg {
  constructor() {
    super();
    this.home = "https://ld246.com/";
    this.apiUrl = "https://ld246.com/api/v2";
    this.tokenSettingUrl = "https://ld246.com/settings/account";
    this.posidKey = POSTID_KEY_CONSTANTS.LIANDI_POSTID_KEY;
    this.previewUrl = "/article/[postid]";
    this.pageType = PageType.Markdown;
  }
}
const _hoisted_1$6 = ["href"];
const _hoisted_2$3 = ["href"];
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  __name: "CommonBlogSetting",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    apiType: {
      type: String,
      default: ""
    },
    cfg: {
      type: CommonblogCfg,
      default: null
    },
    usernameEnabled: {
      type: Boolean,
      default: false
    },
    passwordEnabled: {
      type: Boolean,
      default: false
    },
    tokenEnabled: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const logger2 = LogFactory.getLogger("components/publish/tab/setting/CommonBlogSetting.vue");
    const {
      t
    } = useI18n();
    const home = ref("");
    const apiUrl = ref("");
    const username = ref("");
    const password = ref("");
    const token = ref("");
    const isLoading = ref(false);
    const apiStatus = ref(false);
    const blogName = ref("");
    const blogid = ref("");
    const tokenSettingUrl = ref("");
    const apiTypeInfo = ref(t("setting.blog.platform.support.common") + props.apiType + " ");
    const valiConf = async () => {
      isLoading.value = true;
      try {
        saveConf(true);
        const cfg = getJSONConf(props.apiType);
        const api = new API(props.apiType);
        const usersBlogs = await api.getUsersBlogs();
        if (usersBlogs && usersBlogs.length > 0) {
          const userBlog = usersBlogs[0];
          cfg.apiStatus = true;
          apiStatus.value = true;
          cfg.blogName = userBlog.blogName;
          blogName.value = userBlog.blogName;
          cfg.blogid = userBlog.blogid;
          blogid.value = userBlog.blogid;
          setJSONConf(props.apiType, cfg);
        } else {
          cfg.apiStatus = false;
          apiStatus.value = false;
          setJSONConf(props.apiType, cfg);
        }
      } catch (e) {
        console.error(e);
      }
      if (!apiStatus.value) {
        ElMessage.error(t("setting.blog.vali.error"));
      } else {
        ElMessage.success(t("main.opt.success"));
      }
      isLoading.value = false;
      logger2.debug("\u901A\u7528Setting\u9A8C\u8BC1\u5B8C\u6BD5");
    };
    const saveConf = (hideTip) => {
      logger2.debug("Metaweblog\u901A\u7528Setting\u4FDD\u5B58\u914D\u7F6E");
      const cfg = props.cfg;
      cfg.home = home.value;
      cfg.username = username.value;
      cfg.password = password.value;
      cfg.token = token.value;
      cfg.apiUrl = apiUrl.value;
      cfg.apiStatus = apiStatus.value;
      cfg.blogName = blogName.value;
      cfg.blogid = blogid.value;
      setJSONConf(props.apiType, cfg);
      if (hideTip !== true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const initConf = () => {
      logger2.debug("\u901A\u7528Setting\u914D\u7F6E\u521D\u59CB\u5316");
      let conf = getJSONConf(props.apiType);
      if (isEmptyObject(conf)) {
        conf = props.cfg;
      }
      if (conf) {
        logger2.debug("get setting conf=>", conf);
        home.value = conf.home || "";
        apiUrl.value = conf.apiUrl || "";
        username.value = conf.username || "";
        password.value = conf.password || "";
        token.value = conf.token || "";
        apiStatus.value = conf.apiStatus || false;
        blogName.value = conf.blogName || "";
        blogid.value = conf.blogid || "";
        tokenSettingUrl.value = conf.tokenSettingUrl || "";
      }
    };
    onMounted(async () => {
      initConf();
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      return openBlock(), createBlock(_component_el_form, {
        "label-width": "120px"
      }, {
        default: withCtx(() => [createVNode(_component_el_alert, {
          class: "top-version-tip",
          title: apiTypeInfo.value + blogName.value,
          type: "info",
          closable: false
        }, null, 8, ["title"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.common.home")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: home.value,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => home.value = $event),
            placeholder: props.cfg.placeholder.homePlaceholder
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), props.usernameEnabled ? (openBlock(), createBlock(_component_el_form_item, {
          key: 0,
          label: _ctx.$t("setting.common.username")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: username.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => username.value = $event),
            placeholder: props.cfg.placeholder.usernamePlaceholder
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), props.passwordEnabled ? (openBlock(), createBlock(_component_el_form_item, {
          key: 1,
          label: _ctx.$t("setting.common.password")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            type: "password",
            modelValue: password.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => password.value = $event),
            "show-password": "",
            placeholder: props.cfg.placeholder.passwordPlaceholder
          }, null, 8, ["modelValue", "placeholder"]), createBaseVNode("a", {
            href: tokenSettingUrl.value,
            target: "_blank"
          }, toDisplayString(_ctx.$t("setting.common.username.gen")) + "\uFF1A" + toDisplayString(tokenSettingUrl.value), 9, _hoisted_1$6)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), props.tokenEnabled ? (openBlock(), createBlock(_component_el_form_item, {
          key: 2,
          label: _ctx.$t("setting.common.token")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            type: "password",
            modelValue: token.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => token.value = $event),
            "show-password": "",
            placeholder: props.cfg.placeholder.passwordPlaceholder
          }, null, 8, ["modelValue", "placeholder"]), createBaseVNode("a", {
            href: tokenSettingUrl.value,
            target: "_blank"
          }, toDisplayString(_ctx.$t("setting.common.token.gen")) + "\uFF1A" + toDisplayString(tokenSettingUrl.value), 9, _hoisted_2$3)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.common.apiurl")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: apiUrl.value,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => apiUrl.value = $event),
            placeholder: props.cfg.placeholder.apiUrlPlaceholder
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            type: "primary",
            onClick: valiConf,
            loading: isLoading.value
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(isLoading.value ? _ctx.$t("setting.blog.vali.ing") : _ctx.$t("setting.blog.vali")), 1)]),
            _: 1
          }, 8, ["loading"]), !apiStatus.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 0,
            title: _ctx.$t("setting.blog.vali.tip.metaweblog"),
            type: "warning",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true), apiStatus.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 1,
            title: _ctx.$t("setting.blog.vali.ok.metaweblog"),
            type: "success",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true)]),
          _: 1
        }), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            type: "primary",
            onClick: saveConf
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.blog.save")), 1)]),
            _: 1
          }), createVNode(_component_el_button, null, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.blog.cancel")), 1)]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      });
    };
  }
});
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  __name: "LiandiSetting",
  setup(__props) {
    const {
      t
    } = useI18n();
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_LIANDI);
    const liandiCfg = new LiandiCfg();
    const liandiPlaceholder = new CommonblogPlaceholder();
    liandiPlaceholder.homePlaceholder = t("setting.liandi.home.tip");
    liandiPlaceholder.usernamePlaceholder = t("setting.liandi.username.tip");
    liandiPlaceholder.passwordPlaceholder = t("setting.liandi.password.tip");
    liandiPlaceholder.apiUrlPlaceholder = t("setting.liandi.apiurl.tip");
    liandiCfg.placeholder = liandiPlaceholder;
    const cfg = ref(liandiCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$k, {
        "api-type": apiType.value,
        "username-enabled": true,
        "token-enabled": true,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
class YuqueCfg extends CommonblogCfg {
  constructor() {
    super();
    this.home = "https://www.yuque.com/";
    this.apiUrl = "https://www.yuque.com/api/v2";
    this.tokenSettingUrl = "https://www.yuque.com/settings/tokens";
    this.posidKey = POSTID_KEY_CONSTANTS.YUQUE_POSTID_KEY;
    this.previewUrl = "/[notebook]/[postid]";
    this.pageType = PageType.Markdown;
  }
}
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  __name: "YuqueSetting",
  setup(__props) {
    const {
      t
    } = useI18n();
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_YUQUE);
    const yuqueCfg = new YuqueCfg();
    const yuquePlaceholder = new CommonblogPlaceholder();
    yuquePlaceholder.homePlaceholder = t("setting.yuque.home.tip");
    yuquePlaceholder.usernamePlaceholder = t("setting.yuque.username.tip");
    yuquePlaceholder.passwordPlaceholder = t("setting.yuque.password.tip");
    yuquePlaceholder.apiUrlPlaceholder = t("setting.yuque.apiurl.tip");
    yuqueCfg.placeholder = yuquePlaceholder;
    const cfg = ref(yuqueCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$k, {
        "api-type": apiType.value,
        "username-enabled": true,
        "token-enabled": true,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
class KmsCfg extends CommonblogCfg {
  constructor() {
    super();
    this.home = "http://localhost:9564/kms16_release/kms/multidoc";
    this.apiUrl = "http://localhost:9564/kms16_release/api/kms-multidoc/kmsMultidocKnowledgeRestService";
    this.tokenSettingUrl = "http://localhost:9564/kms16_release/sys/profile/index.jsp#integrate/RestService/";
    this.posidKey = POSTID_KEY_CONSTANTS.KMS_POSTID_KEY;
    this.previewUrl = "/kms_multidoc_knowledge/kmsMultidocKnowledge.do?method=view&fdId=[postid]";
    this.pageType = PageType.Html;
  }
}
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  __name: "KmsSetting",
  setup(__props) {
    const {
      t
    } = useI18n();
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_KMS);
    const kmsCfg = new KmsCfg();
    const kmsPlaceholder = new CommonblogPlaceholder();
    kmsPlaceholder.homePlaceholder = t("setting.kms.home.tip");
    kmsPlaceholder.usernamePlaceholder = t("setting.kms.username.tip");
    kmsPlaceholder.passwordPlaceholder = t("setting.kms.password.tip");
    kmsPlaceholder.apiUrlPlaceholder = t("setting.kms.apiurl.tip");
    kmsCfg.placeholder = kmsPlaceholder;
    const cfg = ref(kmsCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$k, {
        "api-type": apiType.value,
        "username-enabled": true,
        "password-enabled": true,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
const _hoisted_1$5 = {
  key: 1
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "PlatformSetting",
  props: {
    isReload: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const logger2 = LogFactory.getLogger("components/publish/tab/PlatformSetting.vue");
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
      dynamicConfigArray: [],
      githubArray: [],
      metaweblogArray: [],
      wordpressArray: []
    });
    const {
      t
    } = useI18n();
    const createGCfg = ref((gcfg) => {
      return new DynamicGCfg(gcfg);
    });
    const createMCfg = ref((mcfg) => {
      const dynMcfg = new DynamicMCfg(getDynPostidKey(mcfg.platformKey));
      const dynTypechoPlaceholder = new MetaweblogPlaceholder();
      const dynOschinaPlaceholder = new MetaweblogPlaceholder();
      switch (mcfg.platformKey) {
        case PRE_DEFINED_PLATFORM_KEY_CONSTANTS.PRE_DEFINED_TYPECHO_KEY:
          dynTypechoPlaceholder.homePlaceholder = t("setting.typecho.home.tip");
          dynTypechoPlaceholder.usernamePlaceholder = t("setting.typecho.username.tip");
          dynTypechoPlaceholder.passwordPlaceholder = t("setting.typecho.password.tip");
          dynTypechoPlaceholder.apiUrlPlaceholder = t("setting.typecho.apiUrl.tip");
          dynTypechoPlaceholder.previewUrlPlaceholder = t("setting.typecho.previewUrl.tip");
          dynMcfg.placeholder = dynTypechoPlaceholder;
          break;
        case PRE_DEFINED_PLATFORM_KEY_CONSTANTS.PRE_DEFINED_OSCHINA_KEY:
          dynOschinaPlaceholder.homePlaceholder = t("setting.oschina.home.tip");
          dynOschinaPlaceholder.usernamePlaceholder = t("setting.oschina.username.tip");
          dynOschinaPlaceholder.passwordPlaceholder = t("setting.oschina.password.tip");
          dynOschinaPlaceholder.apiUrlPlaceholder = t("setting.oschina.apiUrl.tip");
          dynOschinaPlaceholder.previewUrlPlaceholder = t("setting.oschina.previewUrl.tip");
          dynMcfg.placeholder = dynOschinaPlaceholder;
          break;
      }
      return dynMcfg;
    });
    const createWCfg = ref((wcfg) => {
      const dynWcfg = new DynamicWCfg(getDynPostidKey(wcfg.platformKey));
      switch (wcfg.platformKey) {
      }
      return dynWcfg;
    });
    const initDynCfg = (dynCfg) => {
      const newCfg = [];
      dynCfg.forEach((item) => {
        const newItem = new DynamicConfig(item.platformType, item.platformKey, item.platformName);
        newItem.subPlatformType = item.subPlatformType;
        const switchKey = getDynSwitchKey(item.platformKey);
        const switchValue = getBooleanConf(switchKey);
        newItem.modelValue = switchValue;
        if (switchValue) {
          newCfg.push(newItem);
        }
      });
      return newCfg;
    };
    const initConf = () => {
      doCount();
      const dynamicJsonCfg = getDynamicJsonCfg();
      formData.dynamicConfigArray = initDynCfg(dynamicJsonCfg.totalCfg || []);
      formData.githubArray = initDynCfg(dynamicJsonCfg.githubCfg || []);
      formData.metaweblogArray = initDynCfg(dynamicJsonCfg.metaweblogCfg || []);
      formData.wordpressArray = initDynCfg(dynamicJsonCfg.wordpressCfg || []);
      logger2.debug("dynamicJsonCfg=>", JSON.stringify(dynamicJsonCfg));
    };
    watch(() => props.isReload, (oldValue, newValue) => {
      initConf();
      logger2.debug("platform-setting\u521D\u59CB\u5316");
    });
    onMounted(() => {
      initConf();
    });
    return (_ctx, _cache) => {
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      const _component_el_alert = ElAlert;
      return unref(tabCountStore).tabCount > 0 ? (openBlock(), createBlock(_component_el_tabs, {
        key: 0,
        type: "border-card"
      }, {
        default: withCtx(() => [unref(vuepressEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 0,
          label: _ctx.$t("setting.vuepress") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$t)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(hugoEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 1,
          label: _ctx.$t("setting.hugo") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$s)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(hexoEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 2,
          label: _ctx.$t("setting.hexo") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$r)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(jekyllEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 3,
          label: _ctx.$t("setting.jekyll") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$q)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(jvueEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 4,
          label: _ctx.$t("setting.jvue") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$o)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(confEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 5,
          label: _ctx.$t("setting.conf") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$n)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(cnblogsEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 6,
          label: _ctx.$t("setting.cnblogs") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$m)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(wordpressEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 7,
          label: _ctx.$t("setting.wordpress") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$l)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(liandiEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 8,
          label: _ctx.$t("setting.liandi") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$j)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(yuqueEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 9,
          label: _ctx.$t("setting.yuque") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$i)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(kmsEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 10,
          label: _ctx.$t("setting.kms") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$h)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(formData.githubArray, (gcfg) => {
          return openBlock(), createBlock(_component_el_tab_pane, {
            key: gcfg.platformKey,
            label: gcfg.platformName + _ctx.$t("setting.blog.setting")
          }, {
            default: withCtx(() => [createVNode(_sfc_main$u, {
              "api-type": gcfg.platformKey,
              cfg: createGCfg.value(gcfg)
            }, null, 8, ["api-type", "cfg"])]),
            _: 2
          }, 1032, ["label"]);
        }), 128)), (openBlock(true), createElementBlock(Fragment, null, renderList(formData.metaweblogArray, (mcfg) => {
          return openBlock(), createBlock(_component_el_tab_pane, {
            key: mcfg.platformKey,
            label: mcfg.platformName + _ctx.$t("setting.blog.setting")
          }, {
            default: withCtx(() => [createVNode(_sfc_main$p, {
              "api-type": mcfg.platformKey,
              cfg: createMCfg.value(mcfg)
            }, null, 8, ["api-type", "cfg"])]),
            _: 2
          }, 1032, ["label"]);
        }), 128)), (openBlock(true), createElementBlock(Fragment, null, renderList(formData.wordpressArray, (wcfg) => {
          return openBlock(), createBlock(_component_el_tab_pane, {
            key: wcfg.platformKey,
            label: wcfg.platformName + _ctx.$t("setting.blog.setting")
          }, {
            default: withCtx(() => [createVNode(_sfc_main$l, {
              "api-type": wcfg.platformKey,
              cfg: createWCfg.value(wcfg)
            }, null, 8, ["api-type", "cfg"])]),
            _: 2
          }, 1032, ["label"]);
        }), 128))]),
        _: 1
      })) : (openBlock(), createElementBlock("div", _hoisted_1$5, [createVNode(_component_el_alert, {
        class: "top-version-tip",
        title: _ctx.$t("config.platform.none"),
        type: "error",
        closable: false
      }, null, 8, ["title"])]));
    };
  }
});
const SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY = "custom-slug";
const SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY = "custom-desc";
const SIYUAN_PAGE_ATTR_CUSTOM_MENU_TITLE_KEY = "custom-menu-title";
const SIYUAN_PAGE_ATTR_CUSTOM_WEIGHT_KEY = "custom-weight";
const SIYUAN_PAGE_ATTR_CUSTOM_USE_PERMALINK_KEY = "custom-use-permalink";
const SIYUAN_PAGE_ATTR_CUSTOM_USE_DATE_KEY = "custom-use-date";
const SIYUAN_PAGE_ATTR_KEY = {
  SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY,
  SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY,
  SIYUAN_PAGE_ATTR_CUSTOM_MENU_TITLE_KEY,
  SIYUAN_PAGE_ATTR_CUSTOM_WEIGHT_KEY,
  SIYUAN_PAGE_ATTR_CUSTOM_USE_PERMALINK_KEY,
  SIYUAN_PAGE_ATTR_CUSTOM_USE_DATE_KEY
};
const commonIsTest = { "VITE_LOG_INFO_ENABLED": "false", "VITE_MIDDLEWARE_URL": "https://api.terwer.space/api/middleware" }.TEST === "true";
const CONSTANTS_SIYUAN_PAGE = "test-data-siyuanPage";
const TEST_CONSTANTS = {
  CONSTANTS_SIYUAN_PAGE
};
const useSlug = (props, deps) => {
  const logger2 = LogFactory.getLogger("composables/publish/makeSlugCom.ts");
  const {
    t
  } = useI18n();
  const siyuanApi = new SiYuanApi();
  const publishCfg = getPublishCfg();
  const slugData = reactive({
    isSlugLoading: false,
    forceRefresh: false,
    title: "",
    customSlug: "",
    slugHashEnabled: true
  });
  const siyuanPageMethods = deps.siyuanPageMethods;
  const checkForce = () => {
    if (isEmptyString(slugData.customSlug)) {
      return true;
    }
    return slugData.forceRefresh;
  };
  const slugMethods = {
    makeSlug: async (hideTip) => {
      if (!checkForce()) {
        if (hideTip !== true) {
          ElMessage.warning(t("main.force.refresh.tip"));
        }
        logger2.debug(t("main.force.refresh.tip"));
        return;
      }
      slugData.isSlugLoading = true;
      logger2.debug("\u5F00\u59CB\u751F\u6210\u522B\u540D...");
      try {
        const pageId = await siyuanPageMethods.getPageId();
        if (commonIsTest) {
          const pageStr = getConf(TEST_CONSTANTS.CONSTANTS_SIYUAN_PAGE);
          const pageObj = JSON.parse(JSON.parse(pageStr));
          vi.spyOn(siyuanApi, "getBlockByID").mockResolvedValue(pageObj);
        }
        const page = await siyuanApi.getBlockByID(pageId);
        logger2.debug("\u83B7\u53D6\u5230\u601D\u6E90\u9875\u9762\u6570\u636E=>", page);
        const fmtTitle = slugData.title;
        if (publishCfg.useGoogleTranslate) {
          try {
            let result;
            if (commonIsTest) {
              const mock_zhSlugify = vi.fn().mockImplementation((q) => pinyinSlugify(q));
              result = await mock_zhSlugify(fmtTitle);
            } else {
              result = await zhSlugify(fmtTitle);
            }
            logger2.debug("\u4F7F\u7528\u8C37\u6B4C\u7FFB\u8BD1");
            if (result) {
              slugData.customSlug = result;
            } else {
              slugData.customSlug = pinyinSlugify(fmtTitle);
              ElMessage.success(t("main.opt.failure"));
            }
          } catch (e) {
            slugData.customSlug = pinyinSlugify(fmtTitle);
          }
        } else {
          slugData.customSlug = pinyinSlugify(fmtTitle);
        }
        logger2.debug("\u5B8C\u6210\u522B\u540D\u7FFB\u8BD1");
        if (slugData.slugHashEnabled) {
          const newstr = page.content + new Date().toISOString();
          const hashstr = appendStr("-", dist(newstr).toLowerCase());
          slugData.customSlug += hashstr;
          logger2.debug("\u4E3A\u522B\u540D\u6DFB\u52A0hash");
        }
        const customAttr = {
          [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY]: slugData.customSlug
        };
        if (commonIsTest) {
          vi.spyOn(siyuanApi, "setBlockAttrs").mockResolvedValue(void 0);
        }
        await siyuanApi.setBlockAttrs(pageId, customAttr);
        if (hideTip !== true) {
          ElMessage.success(t("main.opt.success"));
        }
        logger2.info("\u751F\u6210\u522B\u540D\u6B63\u5E38\u5B8C\u6210,slugData=>", slugData);
      } catch (e) {
        const errmsg = appendStr(t("main.opt.failure"), "=>", e);
        if (hideTip !== true) {
          ElMessage.error(errmsg);
        }
        logger2.error(errmsg);
      }
      slugData.isSlugLoading = false;
      logger2.debug("\u751F\u6210\u522B\u540D\u7ED3\u675F.");
    },
    getSlugData: () => {
      return slugData;
    },
    isSlugEmpty: () => {
      return isEmptyString(slugData.customSlug);
    },
    initSlug: (siyuanData) => {
      let fmtTitle = siyuanData.page.content;
      if (publishCfg.fixTitle) {
        fmtTitle = mdFileToTitle(fmtTitle);
      }
      logger2.debug("\u6807\u9898\u5904\u7406\u5B8C\u6BD5");
      slugData.title = fmtTitle;
      const slugKey = SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY;
      slugData.customSlug = siyuanData.meta[slugKey];
      logger2.debug("initSlug=>", slugData);
    },
    syncSlug: (postForm) => {
      slugData.title = postForm.formData.title;
      slugData.customSlug = postForm.formData.customSlug;
    }
  };
  return {
    slugData,
    slugMethods
  };
};
const useYaml = () => {
  const logger2 = LogFactory.getLogger("composables/publish/makeYamlCom.ts");
  const {
    t
  } = useI18n();
  const yamlData = reactive({
    yamlObj: {},
    readMode: true,
    yamlPreviewContent: "",
    yamlContent: "",
    isSaved: true,
    formatter: "",
    mdContent: "",
    mdFullContent: "",
    htmlContent: ""
  });
  const yamlMethods = {
    onYamlContentFocus: (event) => {
      event.preventDefault();
      const target = event.target;
      target.select();
      if (isBrowser()) {
        copyToClipboardInBrowser(yamlData.yamlContent);
      }
    },
    onYamlContentInput: () => {
      yamlData.isSaved = false;
    },
    onYamlContextMenu: (event) => {
      event.preventDefault();
    },
    doConvertAttrToYAML: (yamlConverter, postForm, githubCfg2) => {
      if (!yamlConverter) {
        yamlConverter = new YamlConvertAdaptor();
        logger2.error("\u672A\u6307\u5B9AYAML\u8F6C\u6362\u5668");
      }
      const yamlFormatObj = yamlConverter.convertToYaml(postForm, githubCfg2);
      yamlData.yamlObj = yamlFormatObj.yamlObj;
      yamlData.formatter = yamlFormatObj.formatter;
      yamlData.mdContent = yamlFormatObj.mdContent;
      yamlData.mdFullContent = yamlFormatObj.formatter + "\n\n" + yamlFormatObj.mdContent;
      yamlData.htmlContent = yamlFormatObj.htmlContent;
    },
    doConvertYAMLToAttr: (yamlConverter, yamlFormatObj, githubCfg2) => {
      if (!yamlConverter) {
        yamlConverter = new YamlConvertAdaptor();
        logger2.error("\u672A\u6307\u5B9AYAML\u8F6C\u6362\u5668");
      }
      const postForm = yamlConverter.convertToAttr(yamlFormatObj, githubCfg2);
      logger2.debug("doConvertYAMLToAttr\u8F6C\u6362\u4E2D\u8F6C\u6570\u636EpostForm=>", postForm);
      return postForm;
    },
    copyYamlToClipboard: () => {
      copyToClipboard(yamlData.yamlContent);
      ElMessage.success(t("main.opt.success"));
    },
    getYamlData: () => {
      return yamlData;
    },
    initYaml: (yaml) => {
      yamlData.yamlContent = yaml;
      yamlData.yamlPreviewContent = appendStr(yaml);
    }
  };
  return {
    yamlData,
    yamlMethods
  };
};
const usePublish = (props, deps) => {
  const logger2 = LogFactory.getLogger("composables/publish/publishActionCom.ts");
  const {
    t
  } = useI18n();
  const siyuanApi = new SiYuanApi();
  const picgoPostApi = new PicgoPostApi();
  const publishData = reactive({
    isPublishLoading: false,
    isCancelLoading: false
  });
  const siyuanPageMethods = deps.siyuanPageMethods;
  const yamlMethods = deps.yamlMethods;
  const githubPagesMethods = deps.githubPagesMethods;
  const quickMethods = deps.quickMethods;
  const picgoPostMethods = deps.picgoPostMethods;
  const initPublishMethods = deps.initPublishMethods;
  const publishMethods = {
    doPublish: async () => {
      var _a;
      logger2.debug("\u51C6\u5907\u53D1\u5E03\u6587\u7AE0...");
      publishData.isPublishLoading = true;
      try {
        const githubCfg2 = getJSONConf(props.apiType);
        const api = new API(props.apiType);
        const mdTitle = githubPagesMethods.getGithubPagesData().mdTitle;
        let fmtTitle = removeTitleNumber(mdTitle);
        fmtTitle = fmtTitle.replace(/\.md/g, "");
        if (/[\s*|\\.]/g.test(fmtTitle)) {
          logger2.debug("fmtTitle=>", fmtTitle);
          ElMessage.error("\u6587\u4EF6\u540D\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u6216\u8005\u7279\u6B8A\u5B57\u7B26");
          publishData.isPublishLoading = false;
          return;
        }
        if (!initPublishMethods.getInitPublishData().isPublished) {
          if (!quickMethods.getQuickData().onclickFlag) {
            await quickMethods.doOneclickAttr();
          } else {
            await quickMethods.saveAttrToSiyuan(true);
          }
        } else {
          await quickMethods.saveAttrToSiyuan(true);
        }
        const isOk = githubCfg2.apiStatus;
        if (!isOk && githubPagesMethods.getGithubPagesData().githubEnabled) {
          publishData.isPublishLoading = false;
          ElMessage.error("\u68C0\u6D4B\u5230api\u4E0D\u53EF\u7528\u6216\u8005\u914D\u7F6E\u9519\u8BEF\uFF0C\u65E0\u6CD5\u53D1\u5E03\u5230Github\uFF0C\u8BF7\u8F6C\u5230\u6E90\u7801\u6A21\u5F0F\u81EA\u884C\u590D\u5236\u6587\u672C");
          return;
        } else if (isOk && githubPagesMethods.getGithubPagesData().githubEnabled) {
          logger2.debug("\u5F00\u59CB\u771F\u6B63\u8C03\u7528api\u53D1\u5E03\u5230Github");
          let currentPath = githubPagesMethods.getGithubPagesData().customPath;
          const currentDefaultPath = (_a = githubCfg2.defaultPath) != null ? _a : "\u5C1A\u672A\u914D\u7F6E";
          let mdFilename = githubPagesMethods.getGithubPagesData().mdTitle;
          if (mdFilename.includes(CONSTANTS.PUBLISH_DYNAMIC_SLUG)) {
            mdFilename = githubPagesMethods.getMdFilename();
          }
          githubPagesMethods.initGithubPages({
            cpath: currentPath,
            defpath: currentDefaultPath,
            fname: mdFilename
          });
          initPublishMethods.convertAttrToYAML(true);
          const mdFullContent = yamlMethods.getYamlData().mdFullContent;
          let publishContent = mdFullContent;
          if (picgoPostMethods.getPicgoPostData().picgoEnabled) {
            ElMessage.info(t("github.post.picgo.start.upload"));
            const siyuanPage = siyuanPageMethods.getSiyuanPageData().dataObj;
            const picgoPostResult = await picgoPostApi.uploadPostImagesToBed(siyuanPage.pageId, siyuanPage.meta, mdFullContent);
            if (picgoPostResult.flag) {
              publishContent = picgoPostResult.mdContent;
            } else {
              ElMessage.warning(t("github.post.picgo.picbed.error"));
            }
          }
          logger2.debug("\u5373\u5C06\u53D1\u5E03\u7684\u5185\u5BB9\uFF0CpublishContent=>", {
            publishContent
          });
          const docPath = githubPagesMethods.getGithubPagesData().publishPath;
          const post = new Post();
          post.postid = docPath;
          post.description = publishContent;
          let res;
          if (initPublishMethods.getInitPublishData().isPublished) {
            res = await api.editPost(post.postid, post);
          } else {
            res = await api.newPost(post);
          }
          if (!res) {
            publishData.isPublishLoading = false;
            ElMessage.error(t("main.publish.vuepress.failure"));
            return;
          }
          const customAttr = {
            [githubCfg2.posidKey]: docPath
          };
          const pageId = await siyuanPageMethods.getPageId();
          await siyuanApi.setBlockAttrs(pageId, customAttr);
          logger2.debug(props.apiType + "_Main\u53D1\u5E03\u6210\u529F\uFF0C\u4FDD\u5B58\u8DEF\u5F84,meta=>", customAttr);
          await initPublishMethods.initPage();
          publishData.isPublishLoading = false;
        }
        logger2.debug("\u6587\u7AE0\u53D1\u5E03\u5B8C\u6210.");
        if (initPublishMethods.getInitPublishData().isPublished) {
          ElMessage.success(t("main.opt.status.updated"));
        } else {
          ElMessage.success(t("main.opt.status.publish"));
        }
      } catch (e) {
        try {
          await publishMethods.doCancel(false);
        } catch (e2) {
          logger2.error("\u5F3A\u5236\u5220\u9664\u5F02\u5E38\uFF0C\u4E0D\u5F71\u54CD\u53D1\u5E03=>", e2);
        }
        const errmsg = appendStr(t("main.opt.failure"), "=>\u53D1\u5E03\u5F02\u5E38\uFF0C\u53EF\u80FD\u662FGithub\u5E73\u53F0\u5DF2\u81EA\u884C\u5220\u9664\u3002\u5DF2\u6E05\u9664\u5173\u8054\uFF0C\u8BF7\u91CD\u65B0\u53D1\u5E03", e);
        ElMessage.error(errmsg);
        logger2.error(errmsg);
      }
      publishData.isPublishLoading = false;
    },
    cancelPublish: async () => {
      logger2.debug("\u51C6\u5907\u53D6\u6D88\u6587\u7AE0\u53D1\u5E03...");
      publishData.isCancelLoading = true;
      ElMessageBox.confirm(t("main.opt.warning.tip"), t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        await publishMethods.doCancel(true);
        publishData.isCancelLoading = false;
        ElMessage.warning(t("main.opt.status.cancel"));
      }).catch((e) => {
        if (e.toString().indexOf("cancel") <= -1) {
          ElMessage({
            type: "error",
            message: t("main.opt.failure") + "=>" + e
          });
          logger2.error(t("main.opt.failure") + "=>" + e);
        }
        publishData.isCancelLoading = false;
      });
    },
    doCancel: async (isInit) => {
      const githubCfg2 = getJSONConf(props.apiType);
      const api = new API(props.apiType);
      const docPath = githubPagesMethods.getGithubPagesData().publishPath;
      logger2.debug("\u51C6\u5907\u53D6\u6D88\u53D1\u5E03\uFF0CdocPath=>", docPath);
      try {
        await api.deletePost(docPath);
      } catch (e) {
        logger2.error("\u8C03\u7528Github\u5E73\u53F0\u5220\u9664\u9875\u9762\u5931\u8D25=>", e);
      }
      const customAttr = {
        [githubCfg2.posidKey]: ""
      };
      const pageId = await siyuanPageMethods.getPageId();
      await siyuanApi.setBlockAttrs(pageId, customAttr);
      logger2.debug(props.apiType + "_Main\u53D6\u6D88\u53D1\u5E03,meta=>", customAttr);
      if (isInit) {
        await initPublishMethods.initPage();
      }
    }
  };
  return {
    publishData,
    publishMethods
  };
};
const useQuick = (props, deps) => {
  const logger2 = LogFactory.getLogger("composables/publish/publishQuickCom.ts");
  const {
    t
  } = useI18n();
  const siyuanApi = new SiYuanApi();
  const quickData = reactive({
    isGenLoading: false,
    onclickFlag: false
  });
  const siyuanPageMethods = deps.siyuanPageMethods;
  const slugMethods = deps.slugMethods;
  const descMethods = deps.descMethods;
  const tagMethods = deps.tagMethods;
  const githubPagesMethods = deps.githubPagesMethods;
  const quickMethods = {
    oneclickAttr: async (hideTip) => {
      ElMessageBox.confirm(t("main.opt.onclick.confirm.tip"), t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        quickData.isGenLoading = true;
        await quickMethods.doOneclickAttr();
        reloadPage();
        quickData.isGenLoading = false;
        logger2.debug("\u4E00\u952E\u751F\u6210\u5C5E\u6027\u5B8C\u6210.");
        if (hideTip !== true) {
          ElMessage.success(t("main.publish.oneclick.attr.finish"));
        }
      }).catch((e) => {
        quickData.isGenLoading = false;
        if (e.toString().indexOf("cancel") <= -1) {
          ElMessage({
            type: "error",
            message: t("main.opt.failure") + "=>" + e
          });
          logger2.error(t("main.opt.failure") + "=>" + e);
        }
      });
    },
    doOneclickAttr: async () => {
      await slugMethods.makeSlug(true);
      await descMethods.makeDesc(true);
      await tagMethods.fetchTag(true);
      await quickMethods.saveAttrToSiyuan(true);
      quickData.onclickFlag = true;
      logger2.debug("\u53D1\u5E03\u5C5E\u6027\u5B8C\u6210");
    },
    saveAttrToSiyuan: async (hideTip) => {
      try {
        const slugData = slugMethods.getSlugData();
        const descData = descMethods.getDescData();
        const tagData = tagMethods.getTagData();
        const githubPagesData = githubPagesMethods.getGithubPagesData();
        let customAttr = {
          [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY]: slugData.customSlug,
          [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY]: descData.desc,
          [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_USE_PERMALINK_KEY]: githubPagesData.usePermalink.toString(),
          [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_USE_DATE_KEY]: githubPagesData.useDate.toString(),
          tags: tagData.join(",")
        };
        if (!isEmptyString(githubPagesData.linkTitle)) {
          customAttr = Object.assign(customAttr, {
            [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_MENU_TITLE_KEY]: githubPagesData.linkTitle
          });
        }
        const weight = parseInt(githubPagesData.weight);
        if (weight > 0) {
          customAttr = Object.assign(customAttr, {
            [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_WEIGHT_KEY]: weight
          });
        }
        const pageId = await siyuanPageMethods.getPageId();
        await siyuanApi.setBlockAttrs(pageId, customAttr);
        if (hideTip !== true) {
          ElMessage.success(t("main.opt.success"));
        }
      } catch (e) {
        const errmsg = appendStr(t("main.opt.failure"), "=>", e);
        if (hideTip !== true) {
          ElMessage.error(appendStr(t("main.opt.failure"), "=>", e));
        }
        logger2.error(errmsg);
      }
    },
    getQuickData: () => {
      return quickData;
    }
  };
  return {
    quickData,
    quickMethods
  };
};
const useDesc = (props, deps) => {
  const logger2 = LogFactory.getLogger("composables/publish/makeDescCom.ts");
  const {
    t
  } = useI18n();
  const siyuanApi = new SiYuanApi();
  const descData = reactive({
    isDescLoading: false,
    desc: ""
  });
  const siyuanPageMethods = deps.siyuanPageMethods;
  const descMethods = {
    makeDesc: async (hideTip) => {
      logger2.debug("\u51C6\u5907\u751F\u6210\u6458\u8981...");
      descData.isDescLoading = true;
      try {
        const publishCfg = getPublishCfg();
        const pageId = await siyuanPageMethods.getPageId();
        const data = await siyuanApi.exportMdContent(pageId);
        const md = data.content;
        let html = mdToHtml(md);
        if (publishCfg.removeH1) {
          html = removeH1(html);
        }
        descData.desc = parseHtml(html, CONSTANTS.MAX_PREVIEW_LENGTH, true);
        const customAttr = {
          [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY]: descData.desc
        };
        await siyuanApi.setBlockAttrs(pageId, customAttr);
        if (hideTip !== true) {
          ElMessage.success(t("main.opt.success"));
        }
      } catch (e) {
        if (hideTip !== true) {
          ElMessage.error(appendStr(t("main.opt.failure"), "=>", e));
        }
      }
      descData.isDescLoading = false;
      logger2.debug("\u6458\u8981\u751F\u6210\u5B8C\u6BD5.");
    },
    getDescData: () => {
      return descData;
    },
    initDesc: (siyuanData) => {
      const descKey = SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY;
      descData.desc = siyuanData.meta[descKey];
    },
    syncDesc: (postForm) => {
      descData.desc = postForm.formData.desc;
    }
  };
  return {
    descData,
    descMethods
  };
};
const usePublishTime = () => {
  const publishTimeData = reactive({
    created: ""
  });
  const publishTimeMethods = {
    getPublishTime: () => {
      return publishTimeData;
    },
    initPublishTime: (siyuanData) => {
      publishTimeData.created = formatNumToZhDate(siyuanData.page.created);
    },
    syncPublishTime: (postForm) => {
      publishTimeData.created = postForm.formData.created;
    }
  };
  return {
    publishTimeData,
    publishTimeMethods
  };
};
class SiyuanDataObj {
  constructor() {
    __publicField(this, "pageId");
    __publicField(this, "meta");
    __publicField(this, "page");
    __publicField(this, "content");
  }
}
const useSiyuanPage = (props) => {
  const logger2 = LogFactory.getLogger("composables/publish/siyuanPageCom.ts");
  const {
    t
  } = useI18n();
  const siyuanApi = new SiYuanApi();
  const siyuanPageData = reactive({
    dataObj: new SiyuanDataObj()
  });
  const siyuanPageMethods = {
    getPageId: async () => {
      const pageId = await getPageId(true, props.pageId);
      if (!pageId || pageId === "") {
        logger2.error(t("page.no.id"));
        throw new Error("page.no.id");
      }
      logger2.debug("\u5F53\u524D\u9875\u9762ID\u4E3A=>", pageId);
      return pageId;
    },
    getSiyuanPageData: () => {
      return siyuanPageData;
    },
    initSiyuanPage: async (pageId) => {
      siyuanPageData.dataObj.pageId = pageId;
      siyuanPageData.dataObj.meta = await siyuanApi.getBlockAttrs(pageId);
      siyuanPageData.dataObj.page = await siyuanApi.getBlockByID(pageId);
      siyuanPageData.dataObj.content = await siyuanApi.exportMdContent(pageId);
    }
  };
  return {
    siyuanPageData,
    siyuanPageMethods
  };
};
const useTag = (props) => {
  const logger2 = LogFactory.getLogger("composables/publish/makeTagCom.ts");
  const {
    t
  } = useI18n();
  const siyuanApi = new SiYuanApi();
  const tagData = reactive({
    isTagLoading: false,
    tagSwitch: false,
    tag: {
      inputValue: "",
      dynamicTags: [],
      inputVisible: false
    }
  });
  const {
    siyuanPageMethods
  } = useSiyuanPage(props);
  const tagMethods = {
    tagHandleClose: (tag) => {
      tagData.tag.dynamicTags.splice(tagData.tag.dynamicTags.indexOf(tag), 1);
    },
    tagShowInput: () => {
      tagData.tag.inputVisible = true;
    },
    tagHandleInputConfirm: () => {
      if (tagData.tag.inputValue) {
        tagData.tag.dynamicTags.push(tagData.tag.inputValue);
      }
      tagData.tag.inputVisible = false;
      tagData.tag.inputValue = "";
    },
    fetchTag: async (hideTip) => {
      try {
        if (!tagData.tagSwitch) {
          ElMessage.warning(t("main.tag.auto.switch.no.tip"));
          return;
        }
        tagData.isTagLoading = true;
        const pageId = await siyuanPageMethods.getPageId();
        const data = await siyuanApi.exportMdContent(pageId);
        const md = data.content;
        const genTags = await cutWords(md);
        logger2.debug("genTags=>", genTags);
        const hotTags = jiebaToHotWords(genTags, 5);
        logger2.debug("hotTags=>", hotTags);
        for (let i = 0; i < hotTags.length; i++) {
          if (!tagData.tag.dynamicTags.includes(hotTags[i])) {
            tagData.tag.dynamicTags.push(hotTags[i]);
          }
        }
        const customAttr = {
          tags: tagData.tag.dynamicTags.join(",")
        };
        await siyuanApi.setBlockAttrs(pageId, customAttr);
        if (hideTip !== true) {
          ElMessage.success(t("main.opt.success"));
        }
      } catch (e) {
        const errmsg = appendStr(t("main.opt.failure"), "=>", e);
        if (hideTip !== true) {
          ElMessage.error(errmsg);
        }
        logger2.error(errmsg);
      }
      tagData.isTagLoading = false;
      if (hideTip !== true) {
        ElMessage.success(t("main.opt.success"));
      }
    },
    getTagData: () => {
      return tagData.tag.dynamicTags;
    },
    initTag: (siyuanData) => {
      const publishCfg = getPublishCfg();
      tagData.tag.dynamicTags = [];
      const tagstr = siyuanData.meta.tags || "";
      const tgarr = tagstr.split(",");
      for (let i = 0; i < tgarr.length; i++) {
        const tg = tgarr[i];
        if (tg !== "") {
          tagData.tag.dynamicTags.push(tgarr[i]);
        }
      }
      if (publishCfg.autoTag && tagData.tag.dynamicTags.length === 0) {
        tagData.tagSwitch = true;
      }
    },
    syncTag: (postForm) => {
      for (let i = 0; i < postForm.formData.tag.dynamicTags.length; i++) {
        const tag = postForm.formData.tag.dynamicTags[i];
        if (!tagData.tag.dynamicTags.includes(tag) && tag !== "") {
          tagData.tag.dynamicTags.push(tag);
        }
      }
    }
  };
  return {
    tagData,
    tagMethods
  };
};
const useGithubPages = (props, deps) => {
  const logger2 = LogFactory.getLogger("composables/publish/githubPagesCom.ts");
  const githubPagesData = reactive({
    githubEnabled: false,
    useDefaultPath: false,
    currentDefaultPath: "",
    customPath: "",
    mdTitle: "",
    path: {
      customProps: {
        label: "label",
        children: "children",
        isLeaf: "isLeaf"
      }
    },
    publishPath: "",
    usePermalink: true,
    linkTitle: "",
    weight: 0,
    useDate: true
  });
  const siyuanPageMethods = deps.siyuanPageMethods;
  const slugMethods = deps.slugMethods;
  const githubPagesMethods = {
    githubOnChange: (val) => {
      githubPagesData.githubEnabled = val;
    },
    defaultPathOnChange: (val) => {
      var _a;
      githubPagesData.useDefaultPath = val;
      if (val == true) {
        const githubCfg2 = getJSONConf(props.apiType);
        githubPagesMethods.initGithubPages({
          cpath: (_a = githubCfg2.defaultPath) != null ? _a : "",
          defpath: githubPagesData.currentDefaultPath,
          fname: githubPagesData.mdTitle
        });
      }
    },
    customLoad: async (node, resolve) => {
      if (node.isLeaf)
        return resolve([]);
      logger2.debug("\u76EE\u524D\u5DF2\u4FDD\u5B58\u8DEF\u5F84=>", githubPagesData.customPath);
      logger2.debug("\u5F53\u524D\u8282\u70B9=>", node.data);
      const githubCfg2 = getJSONConf(props.apiType);
      const api = new GithubApi(githubCfg2);
      let docPath;
      let parentDocPath = node.data.value || "";
      if (parentDocPath === "" && githubPagesData.customPath !== "") {
        docPath = "";
      } else {
        if (parentDocPath === "") {
          parentDocPath = "";
        }
        docPath = parentDocPath;
      }
      const treeNode = await api.getGithubPageTreeNode(docPath);
      resolve(treeNode);
    },
    onSelectChange: (val) => {
      logger2.debug("onSelectChange=>", val);
      if (val.isLeaf) {
        ElMessage.error("\u60A8\u5F53\u524D\u9009\u62E9\u7684\u662F\u9875\u9762\uFF0C\u8BF7\u6CE8\u610F\uFF0C\u9875\u9762\u5FC5\u987B\u53D1\u5E03\u5728\u76EE\u5F55\u4E0B");
        return;
      }
      githubPagesMethods.initGithubPages({
        cpath: val.value,
        defpath: githubPagesData.currentDefaultPath,
        fname: githubPagesData.mdTitle
      });
    },
    onFilenameChange: () => {
      if (githubPagesData.customPath === "") {
        return;
      }
      const val = ref(githubPagesData.customPath);
      githubPagesMethods.onSelectChange(val);
      logger2.info("\u89E6\u53D1\u6587\u4EF6\u540D\u4FEE\u6539\uFF0C\u540C\u6B65\u53D1\u5E03\u8DEF\u5F84.");
    },
    permalinkOnChange: (val) => {
      githubPagesData.usePermalink = val;
    },
    showDateOnChange: (val) => {
      githubPagesData.useDate = val;
    },
    getGithubPagesData: () => {
      return githubPagesData;
    },
    getDocPath: () => {
      const postidKey = getApiParams(props.apiType).posidKey;
      const siyuanData = siyuanPageMethods.getSiyuanPageData().dataObj;
      const meta = siyuanData.meta;
      return meta[postidKey] || "";
    },
    getMdFilename: () => {
      var _a, _b, _c;
      const githubCfg2 = getJSONConf(props.apiType);
      const slugData = slugMethods.getSlugData();
      const siyuanData = siyuanPageMethods.getSiyuanPageData().dataObj;
      const mdFilenameRule = githubCfg2.mdFilenameRule;
      let mdTitle;
      const slugPlace = CONSTANTS.PUBLISH_DYNAMIC_SLUG;
      if (isEmptyString(mdFilenameRule)) {
        mdTitle = (_b = (_a = siyuanData.page.content) != null ? _a : slugData.customSlug) != null ? _b : slugPlace;
      } else {
        mdTitle = mdFilenameRule;
        if (mdFilenameRule.indexOf("filename") > -1) {
          mdTitle = mdTitle.replace(/\[filename]/g, siyuanData.page.content);
        }
        if (mdFilenameRule.indexOf("slug") > -1) {
          mdTitle = mdTitle.replace(/\[slug]/g, (_c = slugData.customSlug) != null ? _c : slugPlace);
        }
        let date = new Date();
        if (mdFilenameRule.indexOf("yyyy") > -1) {
          const year = date.getFullYear();
          mdTitle = mdTitle.replace(/\[yyyy]/g, year.toString());
        }
        if (mdFilenameRule.indexOf("MM") > -1 || mdFilenameRule.indexOf("mm") > -1) {
          let monthstr;
          let month = date.getMonth() + 1;
          monthstr = month.toString();
          if (month < 10) {
            monthstr = appendStr("0", monthstr);
          }
          mdTitle = mdTitle.replace(/\[MM]/g, monthstr);
          mdTitle = mdTitle.replace(/\[mm]/g, monthstr);
        }
        if (mdFilenameRule.indexOf("dd") > -1) {
          let daystr;
          let day = date.getDate();
          daystr = day.toString();
          if (day < 10) {
            daystr = appendStr("0", daystr);
          }
          mdTitle = mdTitle.replace(/\[dd]/g, daystr);
        }
      }
      return mdTitle;
    },
    initGithubPages: (paths, siyuanData) => {
      var _a, _b, _c, _d;
      let cpath, defpath, fname;
      if (paths) {
        cpath = paths.cpath;
        defpath = paths.defpath;
        fname = paths.fname;
      }
      logger2.debug("paths=>", paths);
      githubPagesData.customPath = cpath;
      githubPagesData.currentDefaultPath = defpath;
      githubPagesData.mdTitle = fname.indexOf(".md") > -1 ? fname : fname + ".md";
      if (githubPagesData.customPath.indexOf(".md") > -1) {
        githubPagesData.publishPath = githubPagesData.customPath;
      } else {
        githubPagesData.publishPath = pathJoin(githubPagesData.customPath, "/" + githubPagesData.mdTitle);
      }
      if (siyuanData) {
        const menuTitleKey = SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_MENU_TITLE_KEY;
        githubPagesData.linkTitle = (_a = siyuanData.meta[menuTitleKey]) != null ? _a : "";
        const weightKey = SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_WEIGHT_KEY;
        githubPagesData.weight = (_b = siyuanData.meta[weightKey]) != null ? _b : "0";
        const usePermalinkKey = SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_USE_PERMALINK_KEY;
        githubPagesData.usePermalink = parseBoolean((_c = siyuanData.meta[usePermalinkKey]) != null ? _c : "true");
        const useDateKey = SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_USE_DATE_KEY;
        githubPagesData.useDate = parseBoolean((_d = siyuanData.meta[useDateKey]) != null ? _d : "false");
      }
    }
  };
  return {
    githubPagesData,
    githubPagesMethods
  };
};
const useInitPublish = (props, deps, otherArgs) => {
  const logger2 = LogFactory.getLogger("composables/publish/initPublishCom.ts");
  const {
    t
  } = useI18n();
  const initPublishData = reactive({
    isInitLoading: false,
    apiStatus: false,
    apiTypeInfo: ref(appendStr(t("setting.blog.platform.support.github"), props.apiType)),
    isPublished: false,
    previewMdUrl: "",
    previewUrl: "",
    mdStatusUrl: ""
  });
  const pageModeMethods = deps.pageModeMethods;
  const siyuanPageMethods = deps.siyuanPageMethods;
  const slugMethods = deps.slugMethods;
  const descMethods = deps.descMethods;
  const publishTimeMethods = deps.publishTimeMethods;
  const tagMethods = deps.tagMethods;
  const githubPagesMethods = deps.githubPagesMethods;
  const yamlMethods = deps.yamlMethods;
  const quickMethods = deps.quickMethods;
  const picgoPostMethods = deps.picgoPostMethods;
  const initPublishMethods = {
    onEditModeChange: (val) => {
      const pageModeData = pageModeMethods.getPageModeData();
      if (val === PageEditMode.EditMode_source) {
        initPublishMethods.convertAttrToYAML(true);
        pageModeData.etype = val;
      } else {
        const isSaved = yamlMethods.getYamlData().isSaved;
        if (!isSaved) {
          ElMessageBox.confirm(t("main.yaml.no.save"), t("main.opt.warning"), {
            confirmButtonText: t("main.opt.ok"),
            cancelButtonText: t("main.opt.cancel"),
            type: "warning"
          }).then(async () => {
            initPublishMethods.convertYAMLToAttr(true);
            pageModeData.etype = val;
          }).catch(() => {
            pageModeData.etype = val;
          });
        } else {
          pageModeData.etype = val;
        }
      }
    },
    onYamlShowTypeChange: (val) => {
      const pageModeData = pageModeMethods.getPageModeData();
      pageModeData.stype = val;
      switch (val) {
        case SourceContentShowType.YAML:
          yamlMethods.initYaml(yamlMethods.getYamlData().formatter);
          break;
        case SourceContentShowType.CONTENT:
          yamlMethods.initYaml(yamlMethods.getYamlData().mdContent);
          break;
        case SourceContentShowType.YAML_CONTENT:
          yamlMethods.initYaml(yamlMethods.getYamlData().mdFullContent);
          break;
        case SourceContentShowType.HTML_CONTENT:
          yamlMethods.initYaml(yamlMethods.getYamlData().htmlContent);
          break;
      }
    },
    convertDocPathToCategories: (docPath) => {
      const publishCfg = getPublishCfg();
      logger2.debug("docPath=>", docPath);
      const docPathArray = docPath.split("/");
      let categories = [];
      if (docPathArray.length > 1) {
        for (let i = 1; i < docPathArray.length - 1; i++) {
          let docCat;
          if (publishCfg.fixTitle) {
            docCat = mdFileToTitle(docPathArray[i]);
          } else {
            docCat = docPathArray[i];
          }
          categories.push(docCat);
        }
      }
      return categories;
    },
    composableDataToForm: () => {
      const publishCfg = getPublishCfg();
      const postForm = new PostForm();
      postForm.formData.title = slugMethods.getSlugData().title;
      postForm.formData.customSlug = slugMethods.getSlugData().customSlug;
      postForm.formData.desc = descMethods.getDescData().desc;
      postForm.formData.created = publishTimeMethods.getPublishTime().created;
      postForm.formData.tag.dynamicTags = tagMethods.getTagData();
      const docPath = githubPagesMethods.getGithubPagesData().customPath;
      postForm.formData.categories = initPublishMethods.convertDocPathToCategories(docPath);
      let md = siyuanPageMethods.getSiyuanPageData().dataObj.content.content;
      md = removeMdWidgetTag(md);
      if (publishCfg.removeH1) {
        md = removeMdH1(md);
      }
      postForm.formData.mdContent = md;
      postForm.formData.htmlContent = mdToHtml(md);
      postForm.formData.usePermalink = githubPagesMethods.getGithubPagesData().usePermalink;
      postForm.formData.linkTitle = githubPagesMethods.getGithubPagesData().linkTitle;
      postForm.formData.weight = githubPagesMethods.getGithubPagesData().weight;
      postForm.formData.useDate = githubPagesMethods.getGithubPagesData().useDate;
      return postForm;
    },
    convertAttrToYAML: (hideTip) => {
      const publishCfg = getPublishCfg();
      const githubCfg2 = getJSONConf(props.apiType);
      const postForm = initPublishMethods.composableDataToForm();
      yamlMethods.doConvertAttrToYAML(props.yamlConverter, postForm, githubCfg2);
      initPublishMethods.onYamlShowTypeChange(publishCfg.contentShowType);
      if (hideTip !== true) {
        ElMessage.success(t("main.opt.success"));
      }
    },
    formToComposableData: (postForm) => {
      slugMethods.syncSlug(postForm);
      descMethods.syncDesc(postForm);
      publishTimeMethods.syncPublishTime(postForm);
      tagMethods.syncTag(postForm);
    },
    convertYAMLToAttr: (hideTip) => {
      if (pageModeMethods.getPageModeData().stype !== SourceContentShowType.YAML) {
        const errmsg = "\u53EA\u80FD\u8F6C\u6362YAML\uFF0C\u8BF7\u5207\u6362\u663E\u793A\u6A21\u5F0F";
        ElMessage.error(errmsg);
        yamlMethods.getYamlData().isSaved = true;
        throw new Error(errmsg);
      }
      try {
        const githubCfg2 = getJSONConf(props.apiType);
        const formatter = yamlMethods.getYamlData().yamlContent;
        const yamlObj = yaml2Obj(formatter);
        const yamlFormatObj = new YamlFormatObj();
        yamlFormatObj.yamlObj = yamlObj;
        logger2.debug("\u51C6\u5907\u5C06YAML\u8F6C\u6362\u4E3A\u6587\u7AE0\u5C5E\u6027\uFF0CyamlFormatObj=>", yamlFormatObj);
        const postForm = yamlMethods.doConvertYAMLToAttr(props.yamlConverter, yamlFormatObj, githubCfg2);
        initPublishMethods.formToComposableData(postForm);
        yamlMethods.getYamlData().isSaved = true;
        if (hideTip !== true) {
          ElMessage.success(t("main.opt.success"));
        }
      } catch (e) {
        if (hideTip !== true) {
          ElMessage.error(appendStr(t("main.opt.failure"), "=>", e));
        }
      }
    },
    saveAttrToSiyuanWithInit: async () => {
      await quickMethods.saveAttrToSiyuan(true);
      await initPublishMethods.initPage(true);
      ElMessage.success(t("main.opt.success"));
    },
    getInitPublishData: () => {
      return initPublishData;
    },
    initPage: async (hideTip) => {
      var _a, _b, _c, _d, _e;
      initPublishData.isInitLoading = hideTip != true;
      try {
        const publishCfg = getPublishCfg();
        const pageModeData = pageModeMethods.getPageModeData();
        pageModeData.etype = publishCfg.editMode;
        pageModeData.stype = publishCfg.contentShowType;
        const githubCfg2 = getJSONConf(props.apiType);
        initPublishData.apiStatus = githubCfg2.apiStatus;
        const pageId = await getPageId(true, props.pageId);
        if (!pageId || pageId === "") {
          initPublishData.isInitLoading = false;
          logger2.error(t("page.no.id"));
          ElMessage.error(t("page.no.id"));
          return;
        }
        await siyuanPageMethods.initSiyuanPage(pageId);
        const siyuanData = siyuanPageMethods.getSiyuanPageData().dataObj;
        initPublishData.isPublished = getPublishStatus(props.apiType, siyuanPageMethods.getSiyuanPageData().dataObj.meta);
        slugMethods.initSlug(siyuanData);
        descMethods.initDesc(siyuanData);
        publishTimeMethods.initPublishTime(siyuanData);
        tagMethods.initTag(siyuanData);
        picgoPostMethods.initPicgo(publishCfg.usePicgo);
        const githubPagesData = githubPagesMethods.getGithubPagesData();
        githubPagesData.githubEnabled = initPublishData.apiStatus;
        let docPath;
        if (initPublishData.isPublished) {
          githubPagesData.useDefaultPath = false;
          docPath = githubPagesMethods.getDocPath();
        } else {
          docPath = (_a = githubCfg2.defaultPath) != null ? _a : "";
        }
        const currentDefaultPath = (_b = githubCfg2.defaultPath) != null ? _b : "\u5C1A\u672A\u914D\u7F6E";
        const mdTitle = githubPagesMethods.getMdFilename();
        githubPagesMethods.initGithubPages({
          cpath: docPath,
          defpath: currentDefaultPath,
          fname: mdTitle
        }, siyuanData);
        initPublishMethods.convertAttrToYAML(true);
        if (initPublishData.apiStatus && initPublishData.isPublished) {
          const baseUrl = (_c = githubCfg2.baseUrl) != null ? _c : "https://terwer.space/";
          const home = (_d = githubCfg2.home) != null ? _d : "https://terwer.space/";
          let mdUrl;
          mdUrl = pathJoin(githubCfg2.githubUser, "/" + githubCfg2.githubRepo);
          mdUrl = pathJoin(mdUrl, "/blob/");
          mdUrl = pathJoin(mdUrl, "/" + githubCfg2.defaultBranch);
          mdUrl = pathJoin(mdUrl, "/" + docPath);
          if (!isEmptyString(githubCfg2.previewMdUrl)) {
            mdUrl = githubCfg2.previewMdUrl;
            mdUrl = mdUrl.replace(/\[user]/, githubCfg2.githubUser);
            mdUrl = mdUrl.replace(/\[repo]/, githubCfg2.githubRepo);
            mdUrl = mdUrl.replace(/\[branch]/, githubCfg2.defaultBranch);
            mdUrl = mdUrl.replace(/\[docpath]/, docPath);
          }
          mdUrl = pathJoin(baseUrl, mdUrl);
          initPublishData.previewMdUrl = mdUrl;
          initPublishData.mdStatusUrl = appendStr("https://img.shields.io/github/checks-status/", githubCfg2.githubUser, "/", githubCfg2.githubRepo, "/", githubCfg2.defaultBranch, "?label=build");
          let url = yamlMethods.getYamlData().yamlObj.permalink;
          if (!isEmptyString(githubCfg2.previewUrl)) {
            if (githubCfg2.previewUrl.indexOf("[docpath]") > -1) {
              const defaultPath = (_e = githubCfg2.defaultPath) != null ? _e : "docs";
              const prefix = docPath.replace(defaultPath, "").replace(".md", "");
              url = githubCfg2.previewUrl.replace("/[docpath]", prefix);
            } else {
              url = githubCfg2.previewUrl.replace(/\[postid]/g, slugMethods.getSlugData().customSlug);
              const created = publishTimeMethods.getPublishTime().created;
              const datearr = created.split(" ")[0];
              const numarr = datearr.split("-");
              logger2.debug("created numarr=>", numarr);
              const y = numarr[0];
              const m = numarr[1];
              const d = numarr[2];
              url = url.replace(/\[yyyy]/g, y);
              url = url.replace(/\[MM]/g, m);
              url = url.replace(/\[mm]/g, m);
              url = url.replace(/\[dd]/g, d);
              const publishPath = githubPagesMethods.getGithubPagesData().publishPath;
              const categories = initPublishMethods.convertDocPathToCategories(publishPath);
              if (categories.length > 0) {
                url = url.replace(/\[cats]/, categories.join("/"));
              } else {
                url = url.replace(/\/\[cats]/, "");
              }
            }
          }
          initPublishData.previewUrl = pathJoin(home, url);
        }
      } catch (e) {
        const errmsg = appendStr(t("main.opt.failure"), "=>", e);
        logger2.error(errmsg);
      }
      initPublishData.isInitLoading = false;
    }
  };
  return {
    initPublishData,
    initPublishMethods
  };
};
const usePageMode = () => {
  const pageModeData = reactive({
    etype: PageEditMode.EditMode_simple,
    stype: SourceContentShowType.YAML_CONTENT
  });
  const pageModeMethods = {
    getPageModeData: () => {
      return pageModeData;
    }
  };
  return {
    pageModeData,
    pageModeMethods
  };
};
const usePicgoPost = () => {
  const picgoPostData = reactive({
    picgoEnabled: false
  });
  const picgoPostMethods = {
    picgoOnChange: (val) => {
      picgoPostData.picgoEnabled = val;
    },
    initPicgo: (val) => {
      picgoPostData.picgoEnabled = val;
    },
    getPicgoPostData: () => {
      return picgoPostData;
    }
  };
  return {
    picgoPostData,
    picgoPostMethods
  };
};
const _hoisted_1$4 = {
  class: "github-tips"
};
const _hoisted_2$2 = {
  class: "github-form"
};
const _hoisted_3 = {
  key: 0,
  class: "form-post-title"
};
const _hoisted_4 = {
  class: "form-edit-mode"
};
const _hoisted_5 = {
  key: 1,
  class: "normal-mode"
};
const _hoisted_6 = {
  key: 0,
  class: "form-slug"
};
const _hoisted_7 = {
  class: "form-desc"
};
const _hoisted_8 = {
  class: "form-publish-time"
};
const _hoisted_9 = {
  class: "form-tags"
};
const _hoisted_10 = {
  class: "form-github-pages"
};
const _hoisted_11 = {
  key: 0,
  class: "form-github-pages-items"
};
const _hoisted_12 = {
  key: 2,
  class: "addition-attributes"
};
const _hoisted_13 = {
  key: 3,
  class: "convert-option"
};
const _hoisted_14 = {
  key: 4,
  class: "publish-action"
};
const _hoisted_15 = {
  key: 5,
  class: "publish-status"
};
const _hoisted_16 = ["href", "title"];
const _hoisted_17 = ["src"];
const _hoisted_18 = ["href", "title"];
const _hoisted_19 = {
  key: 6,
  class: "source-mode"
};
const _hoisted_20 = {
  class: "source-opt"
};
const _hoisted_21 = {
  key: 1,
  id: "yaml-detail-content"
};
const _hoisted_22 = {
  key: 2,
  id: "yaml-edit-content"
};
const _hoisted_23 = {
  key: 3,
  id: "yaml-action"
};
const _hoisted_24 = {
  id: "yaml-read-mode-tip"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "GithubMain",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    isMainReload: {
      type: Boolean,
      default: false
    },
    apiType: {
      type: String,
      default: ""
    },
    pageId: {
      type: String,
      default: void 0
    },
    yamlConverter: {
      type: YamlConvertAdaptor
    }
  },
  setup(__props) {
    const props = __props;
    const logger2 = LogFactory.getLogger("components/publish/tab/main/GithubMain.vue");
    const {
      pageModeData,
      pageModeMethods
    } = usePageMode();
    const {
      siyuanPageMethods
    } = useSiyuanPage(props);
    const {
      slugData,
      slugMethods
    } = useSlug(props, {
      siyuanPageMethods
    });
    const {
      descData,
      descMethods
    } = useDesc(props, {
      siyuanPageMethods
    });
    const {
      publishTimeData,
      publishTimeMethods
    } = usePublishTime();
    const {
      tagData,
      tagMethods
    } = useTag(props);
    const {
      githubPagesData,
      githubPagesMethods
    } = useGithubPages(props, {
      siyuanPageMethods,
      slugMethods
    });
    const {
      yamlData,
      yamlMethods
    } = useYaml();
    const {
      quickData,
      quickMethods
    } = useQuick(props, {
      siyuanPageMethods,
      slugMethods,
      descMethods,
      tagMethods,
      githubPagesMethods
    });
    const {
      picgoPostData,
      picgoPostMethods
    } = usePicgoPost();
    const {
      initPublishData,
      initPublishMethods
    } = useInitPublish(props, {
      pageModeMethods,
      siyuanPageMethods,
      slugMethods,
      descMethods,
      publishTimeMethods,
      tagMethods,
      githubPagesMethods,
      yamlMethods,
      quickMethods,
      picgoPostMethods
    });
    const {
      publishData,
      publishMethods
    } = usePublish(props, {
      siyuanPageMethods,
      yamlMethods,
      githubPagesMethods,
      picgoPostMethods,
      quickMethods,
      initPublishMethods
    });
    watch(() => props.isReload, async () => {
      await initPublishMethods.initPage();
      logger2.debug(props.apiType + "_Main\u68C0\u6D4B\u5230\u8BBE\u7F6E\u66F4\u65B0\u64CD\u4F5C\uFF0C\u5237\u65B0\u9875\u9762");
    });
    watch(() => props.isMainReload, async () => {
      await initPublishMethods.initPage();
      logger2.debug(props.apiType + "_Main\u5DE6\u53F3\u5207\u6362tab\uFF0C\u5237\u65B0\u9875\u9762");
    });
    onMounted(async () => {
      await initPublishMethods.initPage();
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_button = ElButton;
      const _component_el_button_group = ElButtonGroup;
      const _component_el_switch = ElSwitch;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_tag = ElTag;
      const _component_el_tree_select = ElTreeSelect;
      const _component_el_form = ElForm;
      const _component_el_main = ElMain;
      const _component_el_container = ElContainer;
      const _component_el_skeleton = ElSkeleton;
      return openBlock(), createElementBlock("div", null, [!unref(initPublishData).isInitLoading ? (openBlock(), createBlock(_component_el_container, {
        key: 0
      }, {
        default: withCtx(() => [createVNode(_component_el_main, {
          class: "github-main"
        }, {
          default: withCtx(() => [createBaseVNode("div", _hoisted_1$4, [unref(pageModeData).etype !== unref(PageEditMode).EditMode_source ? (openBlock(), createBlock(_component_el_alert, {
            key: 0,
            closable: false,
            title: unref(initPublishData).apiTypeInfo,
            class: "top-version-tip",
            type: "info"
          }, null, 8, ["title"])) : createCommentVNode("", true), !unref(initPublishData).apiStatus && unref(pageModeData).etype !== unref(PageEditMode).EditMode_source ? (openBlock(), createBlock(_component_el_alert, {
            key: 1,
            closable: false,
            title: _ctx.$t("main.publish.github.error.tip"),
            class: "top-version-tip",
            type: "error"
          }, null, 8, ["title"])) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_2$2, [createVNode(_component_el_form, {
            "label-width": "100px"
          }, {
            default: withCtx(() => [unref(pageModeData).etype !== unref(PageEditMode).EditMode_source ? (openBlock(), createElementBlock("div", _hoisted_3, [createVNode(_component_el_form_item, {
              label: _ctx.$t("main.title")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: unref(slugData).title,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => unref(slugData).title = $event),
                disabled: true
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_4, [createVNode(_component_el_form_item, {
              label: _ctx.$t("main.publish.editmode")
            }, {
              default: withCtx(() => [createVNode(_component_el_button_group, null, {
                default: withCtx(() => [createVNode(_component_el_button, {
                  type: unref(pageModeData).etype === unref(PageEditMode).EditMode_simple ? "primary" : "default",
                  onClick: _cache[1] || (_cache[1] = ($event) => unref(initPublishMethods).onEditModeChange(unref(PageEditMode).EditMode_simple))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.editmode.simple")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: unref(pageModeData).etype === unref(PageEditMode).EditMode_complex ? "primary" : "default",
                  onClick: _cache[2] || (_cache[2] = ($event) => unref(initPublishMethods).onEditModeChange(unref(PageEditMode).EditMode_complex))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.editmode.complex")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: unref(pageModeData).etype === unref(PageEditMode).EditMode_source ? "primary" : "default",
                  onClick: _cache[3] || (_cache[3] = ($event) => unref(initPublishMethods).onEditModeChange(unref(PageEditMode).EditMode_source))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.editmode.source")), 1)]),
                  _: 1
                }, 8, ["type"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["label"])]), unref(pageModeData).etype !== unref(PageEditMode).EditMode_source ? (openBlock(), createElementBlock("div", _hoisted_5, [unref(pageModeData).etype !== unref(PageEditMode).EditMode_simple ? (openBlock(), createElementBlock("div", _hoisted_6, [createVNode(_component_el_form_item, {
              label: _ctx.$t("main.force.refresh")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: unref(slugData).forceRefresh,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => unref(slugData).forceRefresh = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.use.hash")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: unref(slugData).slugHashEnabled,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => unref(slugData).slugHashEnabled = $event)
              }, null, 8, ["modelValue"]), !unref(slugData).slugHashEnabled ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                closable: false,
                title: _ctx.$t("main.use.hash.tip"),
                type: "warning"
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.slug")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: unref(slugData).customSlug,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => unref(slugData).customSlug = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                loading: unref(slugData).isSlugLoading,
                class: "make-slug-btn",
                type: "primary",
                onClick: unref(slugMethods).makeSlug
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(slugData).isSlugLoading ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.slug")), 1)]),
                _: 1
              }, 8, ["loading", "onClick"])]),
              _: 1
            })])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_7, [unref(pageModeData).etype !== unref(PageEditMode).EditMode_simple ? (openBlock(), createBlock(_component_el_form_item, {
              key: 0,
              label: _ctx.$t("main.desc")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: unref(descData).desc,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => unref(descData).desc = $event),
                autosize: {
                  minRows: 3,
                  maxRows: 16
                },
                type: "textarea"
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), unref(pageModeData).etype !== unref(PageEditMode).EditMode_simple ? (openBlock(), createBlock(_component_el_form_item, {
              key: 1
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                loading: unref(descData).isDescLoading,
                type: "primary",
                onClick: unref(descMethods).makeDesc
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(descData).isDescLoading ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.desc")), 1)]),
                _: 1
              }, 8, ["loading", "onClick"])]),
              _: 1
            })) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_8, [unref(pageModeData).etype !== unref(PageEditMode).EditMode_simple ? (openBlock(), createBlock(_component_el_form_item, {
              key: 0,
              label: _ctx.$t("main.create.time")
            }, {
              default: withCtx(() => [createVNode(_component_el_date_picker, {
                modelValue: unref(publishTimeData).created,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => unref(publishTimeData).created = $event),
                placeholder: _ctx.$t("main.create.time.placeholder"),
                format: "YYYY-MM-DD HH:mm:ss",
                type: "datetime",
                "value-format": "YYYY-MM-DD HH:mm:ss"
              }, null, 8, ["modelValue", "placeholder"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_9, [unref(pageModeData).etype !== unref(PageEditMode).EditMode_simple ? (openBlock(), createBlock(_component_el_form_item, {
              key: 0,
              label: _ctx.$t("main.tag.auto.switch")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: unref(tagData).tagSwitch,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => unref(tagData).tagSwitch = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.tag")
            }, {
              default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(tagData).tag.dynamicTags, (tag) => {
                return openBlock(), createBlock(_component_el_tag, {
                  key: tag,
                  "disable-transitions": false,
                  class: "mx-1",
                  closable: "",
                  onClose: ($event) => unref(tagMethods).tagHandleClose(tag)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(tag), 1)]),
                  _: 2
                }, 1032, ["onClose"]);
              }), 128)), unref(tagData).tag.inputVisible ? (openBlock(), createBlock(_component_el_input, {
                key: 0,
                ref: "tagRefInput",
                modelValue: unref(tagData).tag.inputValue,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(tagData).tag.inputValue = $event),
                class: "ml-1 w-20",
                size: "small",
                onBlur: unref(tagMethods).tagHandleInputConfirm,
                onKeyup: withKeys(unref(tagMethods).tagHandleInputConfirm, ["enter"])
              }, null, 8, ["modelValue", "onBlur", "onKeyup"])) : (openBlock(), createBlock(_component_el_button, {
                key: 1,
                class: "button-new-tag ml-1 el-tag",
                size: "small",
                onClick: unref(tagMethods).tagShowInput
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.tag.new")), 1)]),
                _: 1
              }, 8, ["onClick"]))]),
              _: 1
            }, 8, ["label"]), unref(pageModeData).etype !== unref(PageEditMode).EditMode_simple ? (openBlock(), createBlock(_component_el_form_item, {
              key: 1
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                loading: unref(tagData).isTagLoading,
                type: "primary",
                onClick: unref(tagMethods).fetchTag
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(tagData).isTagLoading ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.tag")), 1)]),
                _: 1
              }, 8, ["loading", "onClick"])]),
              _: 1
            })) : createCommentVNode("", true)]), createBaseVNode("div", _hoisted_10, [createVNode(_component_el_form_item, {
              label: _ctx.$t("main.publish.github")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: unref(githubPagesData).githubEnabled,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(githubPagesData).githubEnabled = $event),
                onChange: unref(githubPagesMethods).githubOnChange
              }, null, 8, ["modelValue", "onChange"]), !unref(githubPagesData).githubEnabled ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                closable: false,
                title: _ctx.$t("main.publish.github.no.tip"),
                type: "warning"
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"]), unref(githubPagesData).githubEnabled ? (openBlock(), createElementBlock("div", _hoisted_11, [!unref(initPublishData).isPublished ? (openBlock(), createBlock(_component_el_form_item, {
              key: 0,
              label: _ctx.$t("main.publish.github.choose.path.use.default")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: unref(githubPagesData).useDefaultPath,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => unref(githubPagesData).useDefaultPath = $event),
                onChange: unref(githubPagesMethods).defaultPathOnChange
              }, null, 8, ["modelValue", "onChange"]), unref(githubPagesData).useDefaultPath ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                closable: false,
                title: _ctx.$t("main.publish.github.choose.path.use.default.tip") + unref(githubPagesData).currentDefaultPath,
                type: "info"
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), !unref(githubPagesData).useDefaultPath && !unref(initPublishData).isPublished ? (openBlock(), createBlock(_component_el_form_item, {
              key: 1,
              label: _ctx.$t("main.publish.github.choose.path")
            }, {
              default: withCtx(() => [createVNode(_component_el_tree_select, {
                modelValue: unref(githubPagesData).customPath,
                "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => unref(githubPagesData).customPath = $event),
                "check-strictly": true,
                "empty-text": _ctx.$t("main.cat.empty"),
                load: unref(githubPagesMethods).customLoad,
                "no-data-text": _ctx.$t("main.cat.empty"),
                placeholder: _ctx.$t("main.cat.select"),
                props: unref(githubPagesData).path.customProps,
                lazy: "",
                style: {
                  "width": "100%"
                },
                onNodeClick: unref(githubPagesMethods).onSelectChange
              }, null, 8, ["modelValue", "empty-text", "load", "no-data-text", "placeholder", "props", "onNodeClick"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), !unref(initPublishData).isPublished ? (openBlock(), createBlock(_component_el_form_item, {
              key: 2,
              label: _ctx.$t("main.publish.github.choose.title")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: unref(githubPagesData).mdTitle,
                "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => unref(githubPagesData).mdTitle = $event),
                onChange: unref(githubPagesMethods).onFilenameChange,
                disabled: unref(slugMethods).isSlugEmpty()
              }, null, 8, ["modelValue", "onChange", "disabled"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.publish.github.published.path")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: unref(githubPagesData).publishPath,
                "onUpdate:modelValue": _cache[15] || (_cache[15] = ($event) => unref(githubPagesData).publishPath = $event),
                disabled: true
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])])) : createCommentVNode("", true)])])) : createCommentVNode("", true), unref(pageModeData).etype === unref(PageEditMode).EditMode_complex ? (openBlock(), createElementBlock("div", _hoisted_12, [createVNode(_component_el_form_item, {
              label: _ctx.$t("github.use.permalink")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: unref(githubPagesData).usePermalink,
                "onUpdate:modelValue": _cache[16] || (_cache[16] = ($event) => unref(githubPagesData).usePermalink = $event),
                onChange: unref(githubPagesMethods).permalinkOnChange
              }, null, 8, ["modelValue", "onChange"]), !unref(githubPagesData).usePermalink ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                closable: false,
                title: _ctx.$t("github.use.permalink.no.warn"),
                type: "warning"
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, {
              label: _ctx.$t("github.menu.title")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: unref(githubPagesData).linkTitle,
                "onUpdate:modelValue": _cache[17] || (_cache[17] = ($event) => unref(githubPagesData).linkTitle = $event),
                placeholder: _ctx.$t("github.menu.title.placeholder")
              }, null, 8, ["modelValue", "placeholder"])]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, {
              label: _ctx.$t("github.weight")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: unref(githubPagesData).weight,
                "onUpdate:modelValue": _cache[18] || (_cache[18] = ($event) => unref(githubPagesData).weight = $event),
                placeholder: _ctx.$t("github.weight.placeholder")
              }, null, 8, ["modelValue", "placeholder"])]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, {
              label: _ctx.$t("github.use.date")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: unref(githubPagesData).useDate,
                "onUpdate:modelValue": _cache[19] || (_cache[19] = ($event) => unref(githubPagesData).useDate = $event),
                onChange: unref(githubPagesMethods).showDateOnChange
              }, null, 8, ["modelValue", "onChange"]), !unref(githubPagesData).useDate ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                closable: false,
                title: _ctx.$t("github.use.date.no.warn"),
                type: "warning"
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])])) : createCommentVNode("", true), unref(pageModeData).etype !== unref(PageEditMode).EditMode_source ? (openBlock(), createElementBlock("div", _hoisted_13, [unref(pageModeData).etype !== unref(PageEditMode).EditMode_simple ? (openBlock(), createBlock(_component_el_form_item, {
              key: 0,
              label: _ctx.$t("main.opt.quick")
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                loading: unref(quickData).isGenLoading,
                type: "primary",
                onClick: unref(quickMethods).oneclickAttr
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(quickData).isGenLoading ? _ctx.$t("main.opt.loading") : _ctx.$t("main.publish.oneclick.attr")), 1)]),
                _: 1
              }, 8, ["loading", "onClick"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), unref(pageModeData).etype !== unref(PageEditMode).EditMode_simple ? (openBlock(), createBlock(_component_el_form_item, {
              key: 1
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: unref(initPublishMethods).saveAttrToSiyuanWithInit
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.save.attr.to.siyuan")), 1)]),
                _: 1
              }, 8, ["onClick"])]),
              _: 1
            })) : createCommentVNode("", true), unref(pageModeData).etype !== unref(PageEditMode).EditMode_simple ? (openBlock(), createBlock(_component_el_form_item, {
              key: 2
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: _cache[20] || (_cache[20] = ($event) => unref(initPublishMethods).onEditModeChange(unref(PageEditMode).EditMode_source))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.siyuan.to.yaml")), 1)]),
                _: 1
              })]),
              _: 1
            })) : createCommentVNode("", true)])) : createCommentVNode("", true), unref(githubPagesData).githubEnabled && unref(pageModeData).etype !== unref(PageEditMode).EditMode_source ? (openBlock(), createElementBlock("div", _hoisted_14, [createVNode(_component_el_form_item, {
              label: _ctx.$t("github.post.picgo.use")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: unref(picgoPostData).picgoEnabled,
                "onUpdate:modelValue": _cache[21] || (_cache[21] = ($event) => unref(picgoPostData).picgoEnabled = $event),
                onChange: unref(picgoPostMethods).picgoOnChange
              }, null, 8, ["modelValue", "onChange"]), false ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                closable: false,
                title: _ctx.$t("github.post.picgo.use.tip"),
                type: "warning"
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                loading: unref(publishData).isPublishLoading,
                type: "primary",
                onClick: unref(publishMethods).doPublish
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(publishData).isPublishLoading ? _ctx.$t("main.publish.loading") : unref(initPublishData).isPublished ? _ctx.$t("main.update") : _ctx.$t("main.publish")), 1)]),
                _: 1
              }, 8, ["loading", "onClick"]), unref(initPublishData).isPublished ? (openBlock(), createBlock(_component_el_button, {
                key: 0,
                loading: unref(publishData).isCancelLoading,
                onClick: unref(publishMethods).cancelPublish
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.cancel")), 1)]),
                _: 1
              }, 8, ["loading", "onClick"])) : createCommentVNode("", true)]),
              _: 1
            })])) : createCommentVNode("", true), unref(githubPagesData).githubEnabled && unref(pageModeData).etype !== unref(PageEditMode).EditMode_source && unref(initPublishData).apiStatus ? (openBlock(), createElementBlock("div", _hoisted_15, [createVNode(_component_el_form_item, {
              class: "publish-status-box"
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                class: "publish-text-btn",
                disabled: "",
                text: "",
                type: "danger"
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(unref(initPublishData).isPublished ? _ctx.$t("main.publish.status.published") : _ctx.$t("main.publish.status.unpublish")), 1)]),
                _: 1
              }), unref(initPublishData).isPublished ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: unref(initPublishData).previewMdUrl,
                title: unref(initPublishData).previewMdUrl,
                target: "_blank"
              }, toDisplayString(_ctx.$t("main.publish.see.md.preview")), 9, _hoisted_16)) : createCommentVNode("", true)]),
              _: 1
            }), unref(initPublishData).isPublished ? (openBlock(), createBlock(_component_el_form_item, {
              key: 0,
              class: "publish-status-box"
            }, {
              default: withCtx(() => [createBaseVNode("img", {
                src: unref(initPublishData).mdStatusUrl,
                alt: "md-build-status",
                class: "publish-build-status-icon"
              }, null, 8, _hoisted_17), createBaseVNode("a", {
                href: unref(initPublishData).previewUrl,
                title: unref(initPublishData).previewUrl,
                target: "_blank"
              }, toDisplayString(_ctx.$t("main.publish.see.real.preview")), 9, _hoisted_18)]),
              _: 1
            })) : createCommentVNode("", true)])) : createCommentVNode("", true), unref(pageModeData).etype === unref(PageEditMode).EditMode_source ? (openBlock(), createElementBlock("div", _hoisted_19, [createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_alert, {
                closable: false,
                title: unref(upperFirst)(props.apiType) + " " + _ctx.$t("main.yaml.formatter"),
                class: "top-yaml-tip",
                type: "info"
              }, null, 8, ["title"])]),
              _: 1
            }), unref(pageModeData).etype.toString() !== unref(PageEditMode).EditMode_simple.toString() ? (openBlock(), createBlock(_component_el_form_item, {
              key: 0,
              label: unref(yamlData).readMode ? _ctx.$t("main.read.mode") : _ctx.$t("main.edit.mode")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: unref(yamlData).readMode,
                "onUpdate:modelValue": _cache[22] || (_cache[22] = ($event) => unref(yamlData).readMode = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_20, [createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createBaseVNode("a", {
                class: normalizeClass({
                  current: unref(pageModeData).stype === unref(SourceContentShowType).YAML
                }),
                onClick: _cache[23] || (_cache[23] = ($event) => unref(initPublishMethods).onYamlShowTypeChange(unref(SourceContentShowType).YAML))
              }, toDisplayString(_ctx.$t("yaml.show.type.yaml")), 3), createBaseVNode("a", {
                class: normalizeClass({
                  current: unref(pageModeData).stype === unref(SourceContentShowType).CONTENT,
                  middle: true
                }),
                onClick: _cache[24] || (_cache[24] = ($event) => unref(initPublishMethods).onYamlShowTypeChange(unref(SourceContentShowType).CONTENT))
              }, toDisplayString(_ctx.$t("yaml.show.type.md")), 3), createBaseVNode("a", {
                class: normalizeClass({
                  current: unref(pageModeData).stype === unref(SourceContentShowType).YAML_CONTENT,
                  middle: true
                }),
                onClick: _cache[25] || (_cache[25] = ($event) => unref(initPublishMethods).onYamlShowTypeChange(unref(SourceContentShowType).YAML_CONTENT))
              }, toDisplayString(_ctx.$t("yaml.show.type.yamlmd")), 3), createBaseVNode("a", {
                class: normalizeClass({
                  current: unref(pageModeData).stype === unref(SourceContentShowType).HTML_CONTENT
                }),
                onClick: _cache[26] || (_cache[26] = ($event) => unref(initPublishMethods).onYamlShowTypeChange(unref(SourceContentShowType).HTML_CONTENT))
              }, toDisplayString(_ctx.$t("yaml.show.type.html")), 3)]),
              _: 1
            })]), unref(yamlData).readMode ? (openBlock(), createElementBlock("div", _hoisted_21, [createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_input, {
                id: "yaml-detail-preview",
                modelValue: unref(yamlData).yamlPreviewContent,
                "onUpdate:modelValue": _cache[27] || (_cache[27] = ($event) => unref(yamlData).yamlPreviewContent = $event),
                autosize: {
                  minRows: 4,
                  maxRows: 16
                },
                readonly: "",
                type: "textarea",
                onClick: unref(yamlMethods).onYamlContentFocus,
                onContextmenu: unref(yamlMethods).onYamlContextMenu
              }, null, 8, ["modelValue", "onClick", "onContextmenu"])]),
              _: 1
            })])) : createCommentVNode("", true), !unref(yamlData).readMode ? (openBlock(), createElementBlock("div", _hoisted_22, [createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: unref(yamlData).yamlContent,
                "onUpdate:modelValue": _cache[28] || (_cache[28] = ($event) => unref(yamlData).yamlContent = $event),
                autosize: {
                  minRows: 4,
                  maxRows: 16
                },
                type: "textarea",
                onInput: unref(yamlMethods).onYamlContentInput
              }, null, 8, ["modelValue", "onInput"])]),
              _: 1
            })])) : createCommentVNode("", true), !unref(yamlData).readMode ? (openBlock(), createElementBlock("div", _hoisted_23, [createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: unref(initPublishMethods).convertYAMLToAttr
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.yaml.to.siyuan")), 1)]),
                _: 1
              }, 8, ["onClick"]), createVNode(_component_el_button, {
                type: "primary",
                onClick: _cache[29] || (_cache[29] = ($event) => unref(yamlMethods).copyYamlToClipboard())
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.copy")), 1)]),
                _: 1
              })]),
              _: 1
            })])) : createCommentVNode("", true), createBaseVNode("div", _hoisted_24, [createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_alert, {
                closable: false,
                title: _ctx.$t("main.read.mode.tip"),
                type: "info"
              }, null, 8, ["title"])]),
              _: 1
            })])])) : createCommentVNode("", true)]),
            _: 1
          })])]),
          _: 1
        })]),
        _: 1
      })) : createCommentVNode("", true), createVNode(_component_el_skeleton, {
        loading: unref(initPublishData).isInitLoading,
        rows: 5,
        animated: ""
      }, null, 8, ["loading"])]);
    };
  }
});
const GithubMain_vue_vue_type_style_index_0_scoped_882973a7_lang = "";
const GithubMain = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-882973a7"]]);
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "VuepressMain",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    isMainReload: {
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
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS);
    const vuepressYamlConvertAdaptor = new VuepressYamlConvertAdaptor();
    const yamlConverter = ref(vuepressYamlConvertAdaptor);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(GithubMain, {
        "is-reload": props.isReload,
        "is-main-reload": props.isMainReload,
        "api-type": apiType.value,
        "page-id": props.pageId,
        "yaml-converter": yamlConverter.value
      }, null, 8, ["is-reload", "is-main-reload", "api-type", "page-id", "yaml-converter"]);
    };
  }
});
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "HugoMain",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    isMainReload: {
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
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_HUGO);
    const hugoYamlConverterAdaptor = new HugoYamlConverterAdaptor();
    const yamlConverter = ref(hugoYamlConverterAdaptor);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(GithubMain, {
        "is-reload": props.isReload,
        "is-main-reload": props.isMainReload,
        "api-type": apiType.value,
        "page-id": props.pageId,
        "yaml-converter": yamlConverter.value
      }, null, 8, ["is-reload", "is-main-reload", "api-type", "page-id", "yaml-converter"]);
    };
  }
});
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "HexoMain",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    isMainReload: {
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
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_HEXO);
    const hexoYamlConverterAdaptor = new HexoYamlConverterAdaptor();
    const yamlConverter = ref(hexoYamlConverterAdaptor);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(GithubMain, {
        "api-type": apiType.value,
        "is-reload": props.isReload,
        "is-main-reload": props.isMainReload,
        "page-id": props.pageId,
        "yaml-converter": yamlConverter.value
      }, null, 8, ["api-type", "is-reload", "is-main-reload", "page-id", "yaml-converter"]);
    };
  }
});
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "JekyllMain",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    isMainReload: {
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
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_JEKYLL);
    const jekyllYamlConverterAdaptor = new JekyllYamlConverterAdaptor();
    const yamlConverter = ref(jekyllYamlConverterAdaptor);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(GithubMain, {
        "is-reload": props.isReload,
        "api-type": apiType.value,
        "is-main-reload": props.isMainReload,
        "page-id": props.pageId,
        "yaml-converter": yamlConverter.value
      }, null, 8, ["is-reload", "api-type", "is-main-reload", "page-id", "yaml-converter"]);
    };
  }
});
const _hoisted_1$3 = {
  class: "form-post-title"
};
const _hoisted_2$1 = ["href", "title"];
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "MetaweblogMain",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    isMainReload: {
      type: Boolean,
      default: false
    },
    apiType: {
      type: String,
      default: ""
    },
    useAdaptor: {
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
    const logger2 = LogFactory.getLogger("components/publish/tab/main/MetaweblogMain.vue");
    const siyuanApi = new SiYuanApi();
    const {
      t
    } = useI18n();
    const blogName = ref("");
    const apiTypeInfo = ref(t("setting.blog.platform.support.metaweblog") + props.apiType + " ");
    const apiStatus = ref(false);
    const picgoPostApi = new PicgoPostApi();
    const {
      picgoPostData,
      picgoPostMethods
    } = usePicgoPost();
    const isSlugLoading = ref(false);
    const isDescLoading = ref(false);
    const isTagLoading = ref(false);
    const isGenLoading = ref(false);
    const isPublishLoading = ref(false);
    const isCancelLoading = ref(false);
    const isInitLoading = ref(false);
    const editMode = ref(false);
    const forceRefresh = ref(false);
    const slugHashEnabled = ref(false);
    const isPublished = ref(false);
    const previewUrl = ref("");
    const tagSwitch = ref(false);
    const formData = reactive({
      postid: "",
      title: "",
      customSlug: "",
      desc: "",
      created: "",
      checkList: ["1"],
      tag: {
        inputValue: "",
        dynamicTags: [],
        inputVisible: false
      },
      cat: {
        categorySelected: [],
        categoryList: []
      },
      categories: ["\u9ED8\u8BA4\u5206\u7C7B"]
    });
    const siyuanData = reactive({
      pageId: "",
      meta: {
        tags: ""
      }
    });
    const simpleMode = () => {
      editMode.value = false;
    };
    const complexMode = () => {
      editMode.value = true;
    };
    const initPage = async () => {
      var _a;
      isInitLoading.value = true;
      const pageId = await getPageId(true, props.pageId);
      if (!pageId || pageId === "") {
        return;
      }
      const conf = getJSONConf(props.apiType);
      if (!isEmptyObject(conf)) {
        blogName.value = conf.blogName;
      }
      const publishCfg = getPublishCfg();
      slugHashEnabled.value = true;
      siyuanData.pageId = pageId;
      siyuanData.meta = await siyuanApi.getBlockAttrs(pageId);
      const page = await siyuanApi.getBlockByID(pageId);
      if (!page) {
        isInitLoading.value = false;
        ElMessage.error(t("config.error.msg") + "_" + props.apiType);
        throw new Error(t("config.error.msg") + "_" + props.apiType);
      }
      logger2.debug("MetaweblogMain\u521D\u59CB\u5316\u9875\u9762,meta=>", siyuanData.meta);
      let fmtTitle = page.content;
      if (publishCfg.fixTitle) {
        fmtTitle = removeTitleNumber(page.content);
      }
      formData.title = fmtTitle;
      formData.customSlug = siyuanData.meta[SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY];
      formData.desc = siyuanData.meta[SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY];
      formData.created = formatNumToZhDate(page.created);
      formData.tag.dynamicTags = [];
      const tagstr = siyuanData.meta.tags || "";
      const tgarr = tagstr.split(",");
      for (let i = 0; i < tgarr.length; i++) {
        const tg = tgarr[i];
        if (tg !== "") {
          formData.tag.dynamicTags.push(tgarr[i]);
        }
      }
      if (publishCfg.autoTag && formData.tag.dynamicTags.length === 0) {
        tagSwitch.value = true;
      }
      picgoPostData.picgoEnabled = publishCfg.usePicgo;
      isPublished.value = getPublishStatus(props.apiType, siyuanData.meta);
      const metaweblogCfg2 = getJSONConf(props.apiType);
      const api = new API(props.apiType);
      let catData = [];
      if (isPublished.value) {
        const meta = siyuanData.meta;
        formData.postid = meta[metaweblogCfg2.posidKey];
        previewUrl.value = await api.getPreviewUrl((_a = formData == null ? void 0 : formData.postid) == null ? void 0 : _a.toString());
        try {
          const post = await api.getPost(formData.postid.toString());
          catData = post.categories;
          logger2.debug("postid=>", formData.postid);
          logger2.debug("post=>", post);
          logger2.debug("\u521D\u59CB\u5316\u9009\u62E9\u8FC7\u7684\u5206\u7C7B,catData=>", catData);
        } catch (e) {
          ElMessage.error(t("post.delete.by.platform"));
          isInitLoading.value = false;
          logger2.error("\u6587\u7AE0\u65B0\u83B7\u53D6\u5931\u8D25", e);
        }
      } else {
        logger2.warn("\u68C0\u6D4B\u5230\u4E4B\u524D\u53D1\u5E03\u5F02\u5E38\uFF0C\u6E05\u7A7A\u6587\u7AE0ID");
        const postidKey = getApiParams(props.apiType).posidKey;
        const customAttr = {
          [postidKey]: ""
        };
        await siyuanApi.setBlockAttrs(siyuanData.pageId, customAttr);
      }
      let catInfo = [];
      try {
        catInfo = await api.getCategories();
      } catch (e) {
        isInitLoading.value = false;
        logger2.error(t("main.cat.list.error"), e);
      }
      const catArr = [];
      if (catInfo && catInfo.length && catInfo.length > 0) {
        catInfo.forEach((item) => {
          const cat = {
            value: item.description,
            label: item.description
          };
          catArr.push(cat);
        });
        formData.cat.categoryList = catArr;
      }
      formData.cat.categorySelected = catData;
      formData.categories = catData;
      apiStatus.value = conf.apiStatus;
      isInitLoading.value = false;
    };
    onMounted(async () => {
      await initPage();
    });
    function checkForce() {
      if (isEmptyString(formData.customSlug)) {
        return true;
      }
      if (!forceRefresh.value) {
        logger2.debug(t("main.force.refresh.tip"));
        return false;
      }
      return true;
    }
    const makeSlug = async (hideTip) => {
      if (!checkForce()) {
        return;
      }
      isSlugLoading.value = true;
      const page = await siyuanApi.getBlockByID(siyuanData.pageId);
      logger2.debug("page=>", page);
      let fmtTitle = page.content;
      if (fmtTitle.indexOf(".") > -1) {
        fmtTitle = fmtTitle.replace(/\d*\./g, "");
      }
      logger2.debug("fmtTitle=>", fmtTitle);
      if (formData.checkList.length > 0) {
        const result = await zhSlugify(fmtTitle);
        logger2.debug("result=>", result);
        if (result) {
          formData.customSlug = result;
        } else {
          ElMessage.success(t("main.opt.failure"));
        }
      } else {
        formData.customSlug = pinyinSlugify(fmtTitle);
      }
      if (slugHashEnabled.value) {
        const newstr = page.content + new Date().toISOString();
        const hashstr = "-" + dist(newstr).toLowerCase();
        formData.customSlug += hashstr;
      }
      isSlugLoading.value = false;
      if (hideTip !== true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const makeDesc = async (hideTip) => {
      isDescLoading.value = true;
      const data = await siyuanApi.exportMdContent(siyuanData.pageId);
      const md = data.content;
      const plainText = mdToPlainText(md);
      formData.desc = parseHtml(plainText, CONSTANTS.MAX_PREVIEW_LENGTH, true);
      isDescLoading.value = false;
      if (hideTip !== true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const tagHandleClose = (tag) => {
      formData.tag.dynamicTags.splice(formData.tag.dynamicTags.indexOf(tag), 1);
    };
    const tagRefInput = ref();
    const tagShowInput = () => {
      formData.tag.inputVisible = true;
      nextTick(() => {
        tagRefInput.value.focus();
      });
    };
    const tagHandleInputConfirm = () => {
      if (formData.tag.inputValue) {
        formData.tag.dynamicTags.push(formData.tag.inputValue);
      }
      formData.tag.inputVisible = false;
      formData.tag.inputValue = "";
    };
    async function fetchTag(hideTip) {
      if (!tagSwitch.value) {
        ElMessage.warning(t("main.tag.auto.switch.no.tip"));
        return;
      }
      isTagLoading.value = true;
      const data = await siyuanApi.exportMdContent(siyuanData.pageId);
      const md = data.content;
      const genTags = await cutWords(md);
      logger2.debug("genTags=>", genTags);
      const hotTags = jiebaToHotWords(genTags, 5);
      logger2.debug("hotTags=>", hotTags);
      for (let i = 0; i < hotTags.length; i++) {
        if (!formData.tag.dynamicTags.includes(hotTags[i])) {
          formData.tag.dynamicTags.push(hotTags[i]);
        }
      }
      isTagLoading.value = false;
      if (hideTip !== true) {
        ElMessage.success(t("main.opt.success"));
      }
    }
    const saveAttrToSiyuan = async (hideTip) => {
      const customAttr = {
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY]: formData.customSlug,
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY]: formData.desc,
        tags: formData.tag.dynamicTags.join(",")
      };
      await siyuanApi.setBlockAttrs(siyuanData.pageId, customAttr);
      logger2.debug("MetaweblogMain\u4FDD\u5B58\u5C5E\u6027\u5230\u601D\u6E90\u7B14\u8BB0,meta=>", customAttr);
      if (hideTip !== true) {
        await initPage();
        ElMessage.success(t("main.opt.success"));
      }
    };
    const handleCatNodeClick = (event, data, node, nodeItem) => {
    };
    const handleCatNodeCheck = (data, status) => {
      console.log("data=>", data);
      console.log("status=>", status);
      const cats = [];
      const values = status.checkedKeys;
      values.forEach((item) => {
        cats.push(item.toString());
      });
      formData.categories = cats;
      logger2.debug(" formData.categories=>", formData.categories);
    };
    const oneclickAttr = async (hideTip) => {
      isGenLoading.value = true;
      await makeSlug(true);
      await makeDesc(true);
      await fetchTag(true);
      await saveAttrToSiyuan(true);
      logger2.debug("\u53D1\u5E03\u5C5E\u6027\u5B8C\u6210");
      isGenLoading.value = false;
      if (hideTip !== true) {
        ElMessage.success(t("main.publish.oneclick.attr.finish"));
      }
    };
    const doPublish = async () => {
      if (!apiStatus.value) {
        ElMessage.error(t("setting.blog.vali.tip.metaweblog"));
        return;
      }
      isPublishLoading.value = true;
      try {
        await oneclickAttr(true);
        const metaweblogCfg2 = getJSONConf(props.apiType);
        const api = new API(props.apiType);
        const publishCfg = getPublishCfg();
        let content;
        const data = await siyuanApi.exportMdContent(siyuanData.pageId);
        let md = data.content;
        if (picgoPostMethods.getPicgoPostData().picgoEnabled) {
          ElMessage.info(t("github.post.picgo.start.upload"));
          const picgoPostResult = await picgoPostApi.uploadPostImagesToBed(siyuanData.pageId, siyuanData.meta, md);
          if (picgoPostResult.flag) {
            md = picgoPostResult.mdContent;
          } else {
            ElMessage.warning(t("github.post.picgo.picbed.error"));
          }
        }
        if (PageType.Html === metaweblogCfg2.pageType) {
          const html = mdToHtml(md);
          content = removeWidgetTag(html);
          if (publishCfg.removeH1) {
            content = removeH1(content);
          }
        } else {
          content = removeMdWidgetTag(md);
          if (publishCfg.removeH1) {
            content = removeMdH1(content);
          }
        }
        const post = new Post();
        post.title = formData.title;
        post.wp_slug = formData.customSlug;
        post.description = content;
        post.categories = formData.categories;
        post.mt_keywords = formData.tag.dynamicTags.join(",");
        if (props.apiType === API_TYPE_CONSTANTS.API_TYPE_CNBLOGS) {
          post.categories.push("[Markdown]");
        }
        post.dateCreated = new Date();
        const publish = true;
        let postid;
        if (isPublished.value) {
          postid = formData.postid;
          const flag = await api.editPost(postid, post, true);
          if (!flag) {
            ElMessage.error("\u6587\u7AE0\u66F4\u65B0\u5931\u8D25");
            throw new Error("\u6587\u7AE0\u66F4\u65B0\u5931\u8D25=>" + postid);
          }
          logger2.debug("\u6587\u7AE0\u5DF2\u66F4\u65B0\uFF0Cpostid=>", postid);
        } else {
          postid = await api.newPost(post, publish);
          logger2.debug("\u5F53\u524D\u4FDD\u5B58\u7684posidKey=>", metaweblogCfg2.posidKey);
          const customAttr = {
            [metaweblogCfg2.posidKey]: postid
          };
          await siyuanApi.setBlockAttrs(siyuanData.pageId, customAttr);
          logger2.debug("MetaweblogMain\u53D1\u5E03\u6210\u529F\uFF0C\u4FDD\u5B58postid,meta=>", customAttr);
          logger2.info("\u6587\u7AE0\u53D1\u5E03\u6210\u529F\uFF0Cpostid=>", postid);
        }
        await initPage();
        ElMessage.success(t("main.opt.success"));
      } catch (e) {
        isPublishLoading.value = false;
        logger2.error("\u53D1\u5E03\u5F02\u5E38", e);
      }
      isPublishLoading.value = false;
    };
    const cancelPublish = async () => {
      isCancelLoading.value = true;
      ElMessageBox.confirm(t("main.opt.warning.tip"), t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        await doCancel(true);
        isCancelLoading.value = false;
        ElMessage.warning(t("main.opt.status.cancel"));
      }).catch((e) => {
        ElMessage({
          type: "error",
          message: t("main.opt.failure")
        });
        isCancelLoading.value = false;
        throw new Error(e);
      });
    };
    const doCancel = async (isInit) => {
      const metaweblogCfg2 = getJSONConf(props.apiType);
      logger2.debug("\u51C6\u5907\u53D6\u6D88\u53D1\u5E03\uFF0Cpostid=>", formData.postid);
      const customAttr = {
        [metaweblogCfg2.posidKey]: ""
      };
      await siyuanApi.setBlockAttrs(siyuanData.pageId, customAttr);
      logger2.debug("MetaweblogMain\u53D6\u6D88\u53D1\u5E03,meta=>", customAttr);
      try {
        const api = new API(props.apiType);
        const flag = await api.deletePost(formData.postid);
        if (!flag) {
          ElMessage.error("\u6587\u7AE0\u5220\u9664\u5931\u8D25");
        }
      } catch (e) {
        logger2.error("\u5F3A\u884C\u5220\u9664\u4E00\u6B21", e);
      }
      if (isInit) {
        await initPage();
      }
    };
    watch(() => props.isReload, async () => {
      await initPage();
      logger2.debug(props.apiType + "_Main\u68C0\u6D4B\u5230\u8BBE\u7F6E\u66F4\u65B0\u64CD\u4F5C\uFF0C\u5237\u65B0\u9875\u9762");
    });
    watch(() => props.isMainReload, async () => {
      await initPage();
      logger2.debug(props.apiType + "_Main\u5DE6\u53F3\u5207\u6362tab\uFF0C\u5237\u65B0\u9875\u9762");
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_button = ElButton;
      const _component_el_button_group = ElButtonGroup;
      const _component_el_switch = ElSwitch;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_checkbox_group = ElCheckboxGroup;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_tag = ElTag;
      const _component_el_tree_select = ElTreeSelect;
      const _component_el_form = ElForm;
      const _component_el_main = ElMain;
      const _component_el_skeleton = ElSkeleton;
      const _component_el_container = ElContainer;
      return openBlock(), createBlock(_component_el_container, null, {
        default: withCtx(() => [!isInitLoading.value ? (openBlock(), createBlock(_component_el_main, {
          key: 0,
          class: "blog-main"
        }, {
          default: withCtx(() => [createVNode(_component_el_alert, {
            class: "top-version-tip",
            title: apiTypeInfo.value + blogName.value,
            type: "info",
            closable: false
          }, null, 8, ["title"]), !apiStatus.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 0,
            class: "top-version-tip",
            title: _ctx.$t("setting.blog.vali.tip.metaweblog"),
            type: "error",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true), __props.useAdaptor ? (openBlock(), createBlock(_component_el_alert, {
            key: 1,
            class: "top-version-tip",
            title: _ctx.$t("setting.conf.tip"),
            type: "info",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true), createVNode(_component_el_form, {
            "label-width": "120px"
          }, {
            default: withCtx(() => [createBaseVNode("div", _hoisted_1$3, [createVNode(_component_el_form_item, {
              label: _ctx.$t("main.title")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: formData.title,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.title = $event),
                disabled: true
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])]), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.publish.editmode")
            }, {
              default: withCtx(() => [createVNode(_component_el_button_group, null, {
                default: withCtx(() => [createVNode(_component_el_button, {
                  type: editMode.value ? "default" : "primary",
                  onClick: simpleMode
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.editmode.simple")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: editMode.value ? "primary" : "default",
                  onClick: complexMode
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.editmode.complex")), 1)]),
                  _: 1
                }, 8, ["type"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["label"]), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 0,
              label: _ctx.$t("main.force.refresh")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: forceRefresh.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => forceRefresh.value = $event)
              }, null, 8, ["modelValue"]), !forceRefresh.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.force.refresh.tip"),
                type: "warning",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 1,
              label: _ctx.$t("main.slug")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: formData.customSlug,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.customSlug = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 2
            }, {
              default: withCtx(() => [createVNode(_component_el_checkbox_group, {
                modelValue: formData.checkList,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.checkList = $event)
              }, {
                default: withCtx(() => [createVNode(_component_el_checkbox, {
                  label: "1"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.use.google.translate")), 1)]),
                  _: 1
                })]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            })) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 3
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                class: "make-slug-btn",
                onClick: makeSlug,
                loading: isSlugLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isSlugLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.slug")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            })) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 4,
              label: _ctx.$t("main.use.hash")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: slugHashEnabled.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => slugHashEnabled.value = $event)
              }, null, 8, ["modelValue"]), !slugHashEnabled.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.use.hash.tip"),
                type: "warning",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 5,
              label: _ctx.$t("main.desc")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                type: "textarea",
                modelValue: formData.desc,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.desc = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 6
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: makeDesc,
                loading: isDescLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isDescLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.desc")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            })) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 7,
              label: _ctx.$t("main.create.time")
            }, {
              default: withCtx(() => [createVNode(_component_el_date_picker, {
                type: "datetime",
                modelValue: formData.created,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.created = $event),
                format: "YYYY-MM-DD HH:mm:ss",
                "value-format": "YYYY-MM-DD HH:mm:ss",
                placeholder: _ctx.$t("main.create.time.placeholder")
              }, null, 8, ["modelValue", "placeholder"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 8,
              label: _ctx.$t("main.tag.auto.switch")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: tagSwitch.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => tagSwitch.value = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.tag")
            }, {
              default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(formData.tag.dynamicTags, (tag) => {
                return openBlock(), createBlock(_component_el_tag, {
                  key: tag,
                  class: "mx-1",
                  closable: "",
                  "disable-transitions": false,
                  onClose: ($event) => tagHandleClose(tag)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(tag), 1)]),
                  _: 2
                }, 1032, ["onClose"]);
              }), 128)), formData.tag.inputVisible ? (openBlock(), createBlock(_component_el_input, {
                key: 0,
                ref_key: "tagRefInput",
                ref: tagRefInput,
                modelValue: formData.tag.inputValue,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => formData.tag.inputValue = $event),
                class: "ml-1 w-20",
                size: "small",
                onKeyup: withKeys(tagHandleInputConfirm, ["enter"]),
                onBlur: tagHandleInputConfirm
              }, null, 8, ["modelValue", "onKeyup"])) : (openBlock(), createBlock(_component_el_button, {
                key: 1,
                class: "button-new-tag ml-1 el-tag",
                size: "small",
                onClick: tagShowInput
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.tag.new")), 1)]),
                _: 1
              }))]),
              _: 1
            }, 8, ["label"]), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 9
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: fetchTag,
                loading: isTagLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isTagLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.tag")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            })) : createCommentVNode("", true), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.cat"),
              style: {
                "width": "100%"
              }
            }, {
              default: withCtx(() => [createVNode(_component_el_tree_select, {
                style: {
                  "width": "100%"
                },
                modelValue: formData.cat.categorySelected,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => formData.cat.categorySelected = $event),
                data: formData.cat.categoryList,
                multiple: "",
                "tag-type": "info",
                "check-on-click-node": true,
                "render-after-expand": false,
                "show-checkbox": "",
                placeholder: _ctx.$t("main.cat.select"),
                "empty-text": _ctx.$t("main.cat.empty"),
                "no-data-text": _ctx.$t("main.cat.empty"),
                onNodeClick: handleCatNodeClick,
                onCheck: handleCatNodeCheck
              }, null, 8, ["modelValue", "data", "placeholder", "empty-text", "no-data-text"])]),
              _: 1
            }, 8, ["label"]), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 10,
              label: _ctx.$t("main.opt.quick")
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: oneclickAttr,
                loading: isGenLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isGenLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.publish.oneclick.attr")), 1)]),
                _: 1
              }, 8, ["loading"]), createVNode(_component_el_button, {
                type: "primary",
                onClick: saveAttrToSiyuan
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.save.attr.to.siyuan")), 1)]),
                _: 1
              })]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
              label: _ctx.$t("github.post.picgo.use")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: unref(picgoPostData).picgoEnabled,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => unref(picgoPostData).picgoEnabled = $event),
                onChange: unref(picgoPostMethods).picgoOnChange
              }, null, 8, ["modelValue", "onChange"]), false ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                closable: false,
                title: _ctx.$t("github.post.picgo.use.tip"),
                type: "warning"
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, {
              label: ""
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: doPublish,
                loading: isPublishLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isPublishLoading.value ? _ctx.$t("main.publish.loading") : isPublished.value ? _ctx.$t("main.update") : _ctx.$t("main.publish")), 1)]),
                _: 1
              }, 8, ["loading"]), isPublished.value ? (openBlock(), createBlock(_component_el_button, {
                key: 0,
                loading: isCancelLoading.value,
                onClick: cancelPublish
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.cancel")), 1)]),
                _: 1
              }, 8, ["loading"])) : createCommentVNode("", true)]),
              _: 1
            }), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "danger",
                text: "",
                disabled: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isPublished.value ? _ctx.$t("main.publish.status.published") : _ctx.$t("main.publish.status.unpublish")), 1)]),
                _: 1
              }), isPublished.value ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: previewUrl.value,
                title: previewUrl.value,
                target: "_blank"
              }, toDisplayString(_ctx.$t("main.publish.see.preview")), 9, _hoisted_2$1)) : createCommentVNode("", true)]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })) : createCommentVNode("", true), createVNode(_component_el_skeleton, {
          loading: isInitLoading.value,
          rows: 5,
          animated: ""
        }, null, 8, ["loading"])]),
        _: 1
      });
    };
  }
});
const MetaweblogMain_vue_vue_type_style_index_0_scoped_8e02bbef_lang = "";
const MetaweblogMain = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-8e02bbef"]]);
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "JVueMain",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    isMainReload: {
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
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_JVUE);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MetaweblogMain, {
        "api-type": apiType.value,
        "is-main-reload": props.isMainReload,
        "is-reload": props.isReload,
        "page-id": props.pageId
      }, null, 8, ["api-type", "is-main-reload", "is-reload", "page-id"]);
    };
  }
});
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ConfluenceMain",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    isMainReload: {
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
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_CONFLUENCE);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MetaweblogMain, {
        "is-main-reload": props.isMainReload,
        "is-reload": props.isReload,
        "api-type": apiType.value,
        "use-adaptor": true,
        "page-id": props.pageId
      }, null, 8, ["is-main-reload", "is-reload", "api-type", "page-id"]);
    };
  }
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "CnblogsMain",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    isMainReload: {
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
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_CNBLOGS);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MetaweblogMain, {
        "api-type": apiType.value,
        "is-main-reload": props.isMainReload,
        "is-reload": props.isReload,
        "page-id": props.pageId
      }, null, 8, ["api-type", "is-main-reload", "is-reload", "page-id"]);
    };
  }
});
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "WordpressMain",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    isMainReload: {
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
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_WORDPRESS);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(MetaweblogMain, {
        "api-type": apiType.value,
        "is-main-reload": props.isMainReload,
        "is-reload": props.isReload,
        "page-id": props.pageId
      }, null, 8, ["api-type", "is-main-reload", "is-reload", "page-id"]);
    };
  }
});
const _hoisted_1$2 = {
  class: "form-post-title"
};
const _hoisted_2 = ["href", "title"];
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "CommonBlogMain",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    isMainReload: {
      type: Boolean,
      default: false
    },
    useCat: {
      type: Boolean,
      default: false
    },
    apiType: {
      type: String,
      default: ""
    },
    cfg: {
      type: CommonblogCfg,
      default: null
    },
    pageId: {
      type: String,
      default: void 0
    },
    limitRate: {
      type: Boolean,
      default: false
    },
    limitSeconds: {
      type: Number,
      default: 5
    },
    imageToBase64: {
      type: Boolean,
      default: false
    },
    removeImage: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const logger2 = LogFactory.getLogger("components/publish/tab/main/CommonBlogMain.vue");
    const siyuanApi = new SiYuanApi();
    const imageParser = new ImageParser();
    const {
      t
    } = useI18n();
    const blogName = ref("");
    const apiTypeInfo = ref(t("setting.blog.platform.support.common") + props.apiType + " ");
    const apiStatus = ref(false);
    const picgoPostApi = new PicgoPostApi();
    const isSlugLoading = ref(false);
    const isDescLoading = ref(false);
    const isTagLoading = ref(false);
    const isGenLoading = ref(false);
    const isPublishLoading = ref(false);
    const isCancelLoading = ref(false);
    const isInitLoading = ref(false);
    const editMode = ref(false);
    const forceRefresh = ref(false);
    const slugHashEnabled = ref(false);
    const isPublished = ref(false);
    const previewUrl = ref("");
    const tagSwitch = ref(false);
    const catEnabled = ref(false);
    const {
      picgoPostData,
      picgoPostMethods
    } = usePicgoPost();
    const formData = reactive({
      postid: "",
      title: "",
      customSlug: "",
      desc: "",
      created: "",
      checkList: ["1"],
      tag: {
        inputValue: "",
        dynamicTags: [],
        inputVisible: false
      },
      cat: {
        categorySelected: "",
        categoryList: []
      },
      categories: ["\u9ED8\u8BA4\u5206\u7C7B"],
      cat_slugs: []
    });
    const siyuanData = reactive({
      pageId: "",
      meta: {
        tags: ""
      }
    });
    const simpleMode = () => {
      editMode.value = false;
    };
    const complexMode = () => {
      editMode.value = true;
    };
    const initPage = async () => {
      isInitLoading.value = true;
      const pageId = await getPageId(true, props.pageId);
      if (!pageId || pageId === "") {
        return;
      }
      const conf = getJSONConf(props.apiType);
      if (!isEmptyObject(conf)) {
        blogName.value = conf.blogName || "";
      }
      const publishCfg = getPublishCfg();
      slugHashEnabled.value = true;
      siyuanData.pageId = pageId;
      siyuanData.meta = await siyuanApi.getBlockAttrs(pageId);
      let page;
      try {
        page = await siyuanApi.getBlockByID(pageId);
      } catch (e) {
        isInitLoading.value = false;
        logger2.error("\u9875\u9762\u4FE1\u606F\u83B7\u53D6\u5931\u8D25", e);
        throw new Error("\u9875\u9762\u4FE1\u606F\u83B7\u53D6\u5931\u8D25");
      }
      if (!page) {
        isInitLoading.value = false;
        ElMessage.error(t("config.error.msg") + "_" + props.apiType);
        throw new Error(t("config.error.msg") + "_" + props.apiType);
      }
      logger2.debug("CommonblogMain\u521D\u59CB\u5316\u9875\u9762,meta=>", siyuanData.meta);
      let fmtTitle = page.content;
      if (publishCfg.fixTitle) {
        fmtTitle = removeTitleNumber(page.content);
      }
      formData.title = fmtTitle;
      formData.customSlug = siyuanData.meta[SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY];
      formData.desc = siyuanData.meta[SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY];
      formData.created = formatNumToZhDate(page.created);
      formData.tag.dynamicTags = [];
      const tagstr = siyuanData.meta.tags || "";
      const tgarr = tagstr.split(",");
      for (let i = 0; i < tgarr.length; i++) {
        const tg = tgarr[i];
        if (tg !== "") {
          formData.tag.dynamicTags.push(tgarr[i]);
        }
      }
      if (publishCfg.autoTag && formData.tag.dynamicTags.length === 0) {
        tagSwitch.value = true;
      }
      picgoPostData.picgoEnabled = publishCfg.usePicgo;
      isPublished.value = getPublishStatus(props.apiType, siyuanData.meta);
      catEnabled.value = !isPublished.value;
      const commonCfg = getJSONConf(props.apiType);
      const api = new API(props.apiType);
      let catData = [];
      let catSlugData = [];
      if (isPublished.value) {
        const meta = siyuanData.meta;
        formData.postid = meta[commonCfg.posidKey || ""];
        previewUrl.value = await api.getPreviewUrl(formData.postid.toString());
        if (props.useCat) {
          try {
            const post = await api.getPost(formData.postid.toString());
            catData = post.categories;
            catSlugData = post.cate_slugs;
            logger2.debug("postid=>", formData.postid);
            logger2.debug("post=>", post);
            logger2.debug("\u521D\u59CB\u5316\u9009\u62E9\u8FC7\u7684\u5206\u7C7B,catData=>", catData);
          } catch (e) {
            ElMessage.error(t("post.delete.by.platform"));
            isInitLoading.value = false;
            logger2.error("\u5E73\u53F0\u6587\u7AE0\u65B0\u83B7\u53D6\u5931\u8D25", e);
          }
        }
      } else {
        if (props.useCat && !isEmptyString(commonCfg.blogName)) {
          const defaultCats = [];
          const defaultCatSlugs = [];
          defaultCats.push(commonCfg.blogName);
          catData = defaultCats;
          defaultCatSlugs.push(commonCfg.blogid);
          catSlugData = defaultCatSlugs;
        }
      }
      if (props.useCat) {
        let catInfo = [];
        try {
          catInfo = await api.getCategories();
        } catch (e) {
          isInitLoading.value = false;
          logger2.error(t("main.cat.list.error"), e);
        }
        const catArr = [];
        if (catInfo && catInfo.length && catInfo.length > 0) {
          catInfo.forEach((item) => {
            const cat = {
              value: item.categoryId,
              label: item.description
            };
            catArr.push(cat);
          });
          formData.cat.categoryList = catArr;
        }
        formData.cat.categorySelected = catData.length > 0 ? catData[0] : "";
        blogName.value = formData.cat.categorySelected;
        formData.categories = catData;
        formData.cat_slugs = catSlugData;
      }
      apiStatus.value = conf.apiStatus || false;
      isInitLoading.value = false;
    };
    onMounted(async () => {
      await initPage();
    });
    function checkForce() {
      if (isEmptyString(formData.customSlug)) {
        return true;
      }
      if (!forceRefresh.value) {
        logger2.debug(t("main.force.refresh.tip"));
        return false;
      }
      return true;
    }
    const makeSlug = async (hideTip) => {
      if (!checkForce()) {
        return;
      }
      isSlugLoading.value = true;
      const page = await siyuanApi.getBlockByID(siyuanData.pageId);
      logger2.debug("page=>", page);
      let fmtTitle = page.content;
      if (fmtTitle.indexOf(".") > -1) {
        fmtTitle = fmtTitle.replace(/\d*\./g, "");
      }
      logger2.debug("fmtTitle=>", fmtTitle);
      if (formData.checkList.length > 0) {
        const result = await zhSlugify(fmtTitle);
        logger2.debug("result=>", result);
        if (result) {
          formData.customSlug = result;
        } else {
          ElMessage.success(t("main.opt.failure"));
        }
      } else {
        formData.customSlug = pinyinSlugify(fmtTitle);
      }
      if (slugHashEnabled.value) {
        const newstr = page.content + new Date().toISOString();
        const hashstr = "-" + dist(newstr).toLowerCase();
        formData.customSlug += hashstr;
      }
      isSlugLoading.value = false;
      if (hideTip !== true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const makeDesc = async (hideTip) => {
      isDescLoading.value = true;
      const data = await siyuanApi.exportMdContent(siyuanData.pageId);
      const md = data.content;
      const html = mdToPlainText(md);
      formData.desc = parseHtml(html, CONSTANTS.MAX_PREVIEW_LENGTH, true);
      isDescLoading.value = false;
      if (hideTip !== true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const tagHandleClose = (tag) => {
      formData.tag.dynamicTags.splice(formData.tag.dynamicTags.indexOf(tag), 1);
    };
    const tagRefInput = ref();
    const tagShowInput = () => {
      formData.tag.inputVisible = true;
      nextTick(() => {
        tagRefInput.value.focus();
      });
    };
    const tagHandleInputConfirm = () => {
      if (formData.tag.inputValue) {
        formData.tag.dynamicTags.push(formData.tag.inputValue);
      }
      formData.tag.inputVisible = false;
      formData.tag.inputValue = "";
    };
    async function fetchTag(hideTip) {
      if (!tagSwitch.value) {
        ElMessage.warning(t("main.tag.auto.switch.no.tip"));
        return;
      }
      isTagLoading.value = true;
      const data = await siyuanApi.exportMdContent(siyuanData.pageId);
      const md = data.content;
      const genTags = await cutWords(md);
      logger2.debug("genTags=>", genTags);
      const hotTags = jiebaToHotWords(genTags, 5);
      logger2.debug("hotTags=>", hotTags);
      for (let i = 0; i < hotTags.length; i++) {
        if (!formData.tag.dynamicTags.includes(hotTags[i])) {
          formData.tag.dynamicTags.push(hotTags[i]);
        }
      }
      isTagLoading.value = false;
      if (hideTip !== true) {
        ElMessage.success(t("main.opt.success"));
      }
    }
    const handleCatNodeSingleCheck = (val) => {
      logger2.debug("val=>", val);
      const conf = getJSONConf(props.apiType);
      const cats = [];
      const catSlugs = [];
      cats.push(val.label);
      formData.categories = cats;
      catSlugs.push(conf.username + "/" + val.value);
      formData.cat_slugs = catSlugs;
      blogName.value = val.label;
      logger2.debug(" formData.categories=>", formData.categories);
      logger2.debug(" formData.cat_slugs=>", formData.cat_slugs);
    };
    const saveAttrToSiyuan = async (hideTip) => {
      const customAttr = {
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY]: formData.customSlug,
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY]: formData.desc,
        tags: formData.tag.dynamicTags.join(",")
      };
      await siyuanApi.setBlockAttrs(siyuanData.pageId, customAttr);
      logger2.debug("CommonblogMain\u4FDD\u5B58\u5C5E\u6027\u5230\u601D\u6E90\u7B14\u8BB0,meta=>", customAttr);
      if (hideTip !== true) {
        await initPage();
        ElMessage.success(t("main.opt.success"));
      }
    };
    const oneclickAttr = async (hideTip) => {
      isGenLoading.value = true;
      await makeSlug(true);
      await makeDesc(true);
      await fetchTag(true);
      await saveAttrToSiyuan(true);
      logger2.debug("\u53D1\u5E03\u5C5E\u6027\u5B8C\u6210");
      isGenLoading.value = false;
      if (hideTip !== true) {
        ElMessage.success(t("main.publish.oneclick.attr.finish"));
      }
    };
    const checkLimit = (lastmodKey) => {
      const flag = false;
      const lastmodDate = getConf(lastmodKey);
      if (isEmptyString(lastmodDate)) {
        return false;
      }
      logger2.debug("checkLimit lastmodKey=>", lastmodKey);
      logger2.debug("checkLimit lastmodDate=>", lastmodDate);
      const s = calcLastSeconds(lastmodDate);
      if (s <= props.limitSeconds) {
        ElMessage.error("\u7531\u4E8E\u3010" + props.apiType + "\u3011\u5E73\u53F0\u7684\u9650\u5236\uFF0C\u6BCF6\u5206\u949F\u4E4B\u5185\u53EA\u80FD\u53D1\u5E03\u6216\u8005\u66F4\u65B0\u4E00\u6B21\u6587\u7AE0\uFF0C\u8DDD\u79BB\u4E0A\u4E00\u6B21\u53D1\u5E03\u65F6\u95F4\u4E3A\uFF1A" + s + "\u79D2\uFF0C\u4ECD\u9700\u7B49\u5F85\uFF1A" + (props.limitSeconds - s) + "\u79D2");
        return true;
      }
      return flag;
    };
    const publishConfirm = async () => {
      const data = await siyuanApi.exportMdContent(siyuanData.pageId);
      const md = data.content;
      if (props.removeImage && imageParser.hasExternalImages(md)) {
        ElMessageBox.confirm("\u68C0\u6D4B\u5230\u5916\u94FE\u56FE\u7247\uFF0C\u7531\u4E8E\u5E73\u53F0\u9650\u5236\uFF0C\u7EE7\u7EED\u53D1\u5E03\u5C06\u5254\u9664\u8FD9\u4E9B\u56FE\u7247\uFF0C\u4EE5\u7EAF\u6587\u672C\u53D1\u5E03\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F", t("main.opt.warning"), {
          confirmButtonText: t("main.opt.ok"),
          cancelButtonText: t("main.opt.cancel"),
          type: "warning"
        }).then(async () => {
          await doPublish();
        }).catch(() => {
        });
      } else {
        await doPublish();
      }
    };
    const doPublish = async () => {
      if (!apiStatus.value) {
        ElMessage.error(t("setting.blog.vali.tip.metaweblog"));
        return;
      }
      isPublishLoading.value = true;
      try {
        const lastmodKey = props.apiType + "_PUBLISH_LIMIT";
        if (checkLimit(lastmodKey)) {
          isPublishLoading.value = false;
          return;
        }
        logger2.debug("\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u66F4\u65B0\u53D1\u5E03\u65F6\u95F4");
        const lastmodDate = new Date().toISOString();
        setConf(lastmodKey, lastmodDate);
        await oneclickAttr(true);
        const commonblogCfg = getJSONConf(props.apiType);
        const api = new API(props.apiType);
        const publishCfg = getPublishCfg();
        let content;
        const data = await siyuanApi.exportMdContent(siyuanData.pageId);
        let md = data.content;
        if (props.removeImage) {
          md = imageParser.removeImages(md);
        } else {
          if (picgoPostMethods.getPicgoPostData().picgoEnabled) {
            ElMessage.info(t("github.post.picgo.start.upload"));
            const picgoPostResult = await picgoPostApi.uploadPostImagesToBed(siyuanData.pageId, siyuanData.meta, md);
            if (picgoPostResult.flag) {
              md = picgoPostResult.mdContent;
            } else {
              ElMessage.warning(t("github.post.picgo.picbed.error"));
            }
          }
        }
        if (PageType.Html === commonblogCfg.pageType) {
          const html = mdToHtml(md);
          content = removeWidgetTag(html);
          if (publishCfg.removeH1) {
            content = removeH1(content);
          }
        } else {
          content = removeMdWidgetTag(md);
          if (publishCfg.removeH1) {
            content = removeMdH1(content);
          }
        }
        const post = new Post();
        post.title = formData.title;
        post.wp_slug = formData.customSlug;
        post.description = content;
        post.categories = formData.categories;
        post.cate_slugs = formData.cat_slugs;
        post.mt_keywords = formData.tag.dynamicTags.join(",");
        post.dateCreated = new Date();
        const publish = true;
        let postid;
        if (isPublished.value) {
          postid = formData.postid;
          const flag = await api.editPost(postid, post, true);
          if (!flag) {
            ElMessage.error("\u6587\u7AE0\u66F4\u65B0\u5931\u8D25");
            throw new Error("\u6587\u7AE0\u66F4\u65B0\u5931\u8D25=>" + postid);
          }
          logger2.debug("\u6587\u7AE0\u5DF2\u66F4\u65B0\uFF0Cpostid=>", postid);
        } else {
          postid = await api.newPost(post, publish);
          if (post.cate_slugs && post.cate_slugs.length > 0) {
            const repo = post.cate_slugs[0];
            postid = postid + "_" + repo;
          }
          logger2.debug("\u5F53\u524D\u4FDD\u5B58\u7684posidKey=>", commonblogCfg.posidKey);
          const customAttr = {
            [commonblogCfg.posidKey || ""]: postid
          };
          await siyuanApi.setBlockAttrs(siyuanData.pageId, customAttr);
          logger2.debug("CommonblogMain\u53D1\u5E03\u6210\u529F\uFF0C\u4FDD\u5B58postid,meta=>", customAttr);
          logger2.debug("\u6587\u7AE0\u53D1\u5E03\u6210\u529F\uFF0Cpostid=>", postid);
        }
        await initPage();
        if (isPublished.value) {
          ElMessage.success(t("main.opt.status.updated"));
        } else {
          ElMessage.success(t("main.opt.status.publish"));
        }
      } catch (e) {
        isPublishLoading.value = false;
        logger2.error("\u53D1\u5E03\u5F02\u5E38", e);
        ElMessage.error({
          dangerouslyUseHTMLString: true,
          message: t("main.opt.failure") + "=>" + e
        });
      }
      isPublishLoading.value = false;
    };
    const cancelPublish = async () => {
      isCancelLoading.value = true;
      ElMessageBox.confirm(t("main.opt.warning.tip"), t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        await doCancel(true);
        isCancelLoading.value = false;
        ElMessage.warning(t("main.opt.status.cancel"));
      }).catch((e) => {
        ElMessage({
          type: "error",
          message: t("main.opt.failure")
        });
        isCancelLoading.value = false;
        throw new Error(e);
      });
    };
    const doCancel = async (isInit) => {
      const commonblogCfg = getJSONConf(props.apiType);
      logger2.debug("\u51C6\u5907\u53D6\u6D88\u53D1\u5E03\uFF0Cpostid=>", formData.postid);
      const customAttr = {
        [commonblogCfg.posidKey || ""]: ""
      };
      await siyuanApi.setBlockAttrs(siyuanData.pageId, customAttr);
      logger2.debug("MetaweblogMain\u53D6\u6D88\u53D1\u5E03,meta=>", customAttr);
      try {
        const api = new API(props.apiType);
        const flag = await api.deletePost(formData.postid);
        if (!flag) {
          ElMessage.error("\u6587\u7AE0\u5220\u9664\u5931\u8D25");
          throw new Error("\u6587\u7AE0\u5220\u9664\u5931\u8D25");
        }
      } catch (e) {
        logger2.error("\u5F3A\u884C\u5220\u9664\u4E00\u6B21", e);
      }
      if (isInit) {
        await initPage();
      }
    };
    watch(() => props.isReload, async () => {
      await initPage();
      logger2.debug(props.apiType + "_Main\u68C0\u6D4B\u5230\u8BBE\u7F6E\u66F4\u65B0\u64CD\u4F5C\uFF0C\u5237\u65B0\u9875\u9762");
    });
    watch(() => props.isMainReload, async () => {
      await initPage();
      logger2.debug(props.apiType + "_Main\u5DE6\u53F3\u5207\u6362tab\uFF0C\u5237\u65B0\u9875\u9762");
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_button = ElButton;
      const _component_el_button_group = ElButtonGroup;
      const _component_el_switch = ElSwitch;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_checkbox_group = ElCheckboxGroup;
      const _component_el_date_picker = ElDatePicker;
      const _component_el_tag = ElTag;
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_form = ElForm;
      const _component_el_main = ElMain;
      const _component_el_skeleton = ElSkeleton;
      const _component_el_container = ElContainer;
      return openBlock(), createBlock(_component_el_container, null, {
        default: withCtx(() => [!isInitLoading.value ? (openBlock(), createBlock(_component_el_main, {
          key: 0,
          class: "common-main"
        }, {
          default: withCtx(() => [createVNode(_component_el_alert, {
            class: "top-version-tip",
            title: apiTypeInfo.value + blogName.value,
            type: "info",
            closable: false
          }, null, 8, ["title"]), __props.useCat && isPublished.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 0,
            class: "top-version-tip",
            title: "\u6682\u65F6\u4E0D\u652F\u6301\u7F16\u8F91\u6240\u5C5E\u77E5\u8BC6\u5E93\u3002\u5982\u679C\u60A8\u60F3\u79FB\u52A8\u6587\u6863\uFF0C\u8BF7\u5148\u70B9\u51FB\u53D6\u6D88\u5220\u9664\u8BE5\u6587\u6863\uFF0C\u7136\u540E\u91CD\u65B0\u9009\u62E9\u65B0\u7684\u77E5\u8BC6\u5E93\u53D1\u5E03\u3002",
            type: "warning",
            closable: false
          })) : createCommentVNode("", true), !apiStatus.value ? (openBlock(), createBlock(_component_el_alert, {
            key: 1,
            class: "top-version-tip",
            title: _ctx.$t("setting.blog.vali.tip.metaweblog"),
            type: "error",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true), createVNode(_component_el_form, {
            "label-width": "120px"
          }, {
            default: withCtx(() => [createBaseVNode("div", _hoisted_1$2, [createVNode(_component_el_form_item, {
              label: _ctx.$t("main.title")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: formData.title,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.title = $event),
                disabled: true
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])]), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.publish.editmode")
            }, {
              default: withCtx(() => [createVNode(_component_el_button_group, null, {
                default: withCtx(() => [createVNode(_component_el_button, {
                  type: editMode.value ? "default" : "primary",
                  onClick: simpleMode
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.editmode.simple")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: editMode.value ? "primary" : "default",
                  onClick: complexMode
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.editmode.complex")), 1)]),
                  _: 1
                }, 8, ["type"])]),
                _: 1
              })]),
              _: 1
            }, 8, ["label"]), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 0,
              label: _ctx.$t("main.force.refresh")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: forceRefresh.value,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => forceRefresh.value = $event)
              }, null, 8, ["modelValue"]), !forceRefresh.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.force.refresh.tip"),
                type: "warning",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 1,
              label: _ctx.$t("main.slug")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: formData.customSlug,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.customSlug = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 2
            }, {
              default: withCtx(() => [createVNode(_component_el_checkbox_group, {
                modelValue: formData.checkList,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.checkList = $event)
              }, {
                default: withCtx(() => [createVNode(_component_el_checkbox, {
                  label: "1"
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.use.google.translate")), 1)]),
                  _: 1
                })]),
                _: 1
              }, 8, ["modelValue"])]),
              _: 1
            })) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 3
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                class: "make-slug-btn",
                onClick: makeSlug,
                loading: isSlugLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isSlugLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.slug")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            })) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 4,
              label: _ctx.$t("main.use.hash")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: slugHashEnabled.value,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => slugHashEnabled.value = $event)
              }, null, 8, ["modelValue"]), !slugHashEnabled.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.use.hash.tip"),
                type: "warning",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 5,
              label: _ctx.$t("main.desc")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                type: "textarea",
                modelValue: formData.desc,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.desc = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 6
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: makeDesc,
                loading: isDescLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isDescLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.desc")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            })) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 7,
              label: _ctx.$t("main.create.time")
            }, {
              default: withCtx(() => [createVNode(_component_el_date_picker, {
                type: "datetime",
                modelValue: formData.created,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.created = $event),
                format: "YYYY-MM-DD HH:mm:ss",
                "value-format": "YYYY-MM-DD HH:mm:ss",
                placeholder: _ctx.$t("main.create.time.placeholder")
              }, null, 8, ["modelValue", "placeholder"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 8,
              label: _ctx.$t("main.tag.auto.switch")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: tagSwitch.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => tagSwitch.value = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.tag")
            }, {
              default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(formData.tag.dynamicTags, (tag) => {
                return openBlock(), createBlock(_component_el_tag, {
                  key: tag,
                  class: "mx-1",
                  closable: "",
                  "disable-transitions": false,
                  onClose: ($event) => tagHandleClose(tag)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(tag), 1)]),
                  _: 2
                }, 1032, ["onClose"]);
              }), 128)), formData.tag.inputVisible ? (openBlock(), createBlock(_component_el_input, {
                key: 0,
                ref_key: "tagRefInput",
                ref: tagRefInput,
                modelValue: formData.tag.inputValue,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => formData.tag.inputValue = $event),
                class: "ml-1 w-20",
                size: "small",
                onKeyup: withKeys(tagHandleInputConfirm, ["enter"]),
                onBlur: tagHandleInputConfirm
              }, null, 8, ["modelValue", "onKeyup"])) : (openBlock(), createBlock(_component_el_button, {
                key: 1,
                class: "button-new-tag ml-1 el-tag",
                size: "small",
                onClick: tagShowInput
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.tag.new")), 1)]),
                _: 1
              }))]),
              _: 1
            }, 8, ["label"]), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 9
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: fetchTag,
                loading: isTagLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isTagLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.auto.fetch.tag")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            })) : createCommentVNode("", true), props.useCat ? (openBlock(), createBlock(_component_el_form_item, {
              key: 10,
              label: _ctx.$t("main.cat"),
              style: {
                "width": "100%"
              }
            }, {
              default: withCtx(() => [catEnabled.value ? (openBlock(), createBlock(_component_el_select, {
                key: 0,
                modelValue: formData.cat.categorySelected,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => formData.cat.categorySelected = $event),
                placeholder: "\u8BF7\u9009\u62E9",
                "no-data-text": "\u6682\u65E0\u6570\u636E",
                class: "m-2",
                size: "default",
                onChange: handleCatNodeSingleCheck
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(formData.cat.categoryList, (item) => {
                  return openBlock(), createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item
                  }, null, 8, ["label", "value"]);
                }), 128))]),
                _: 1
              }, 8, ["modelValue"])) : (openBlock(), createBlock(_component_el_select, {
                key: 1,
                modelValue: formData.cat.categorySelected,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => formData.cat.categorySelected = $event),
                disabled: "",
                placeholder: "\u8BF7\u9009\u62E9",
                "no-data-text": "\u6682\u65E0\u6570\u636E",
                class: "m-2",
                size: "default",
                onChange: handleCatNodeSingleCheck
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(formData.cat.categoryList, (item) => {
                  return openBlock(), createBlock(_component_el_option, {
                    key: item.value,
                    label: item.label,
                    value: item
                  }, null, 8, ["label", "value"]);
                }), 128))]),
                _: 1
              }, 8, ["modelValue"]))]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 11,
              label: _ctx.$t("main.opt.quick")
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: oneclickAttr,
                loading: isGenLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isGenLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.publish.oneclick.attr")), 1)]),
                _: 1
              }, 8, ["loading"]), createVNode(_component_el_button, {
                type: "primary",
                onClick: saveAttrToSiyuan
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.save.attr.to.siyuan")), 1)]),
                _: 1
              })]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
              label: _ctx.$t("github.post.picgo.use")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: unref(picgoPostData).picgoEnabled,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => unref(picgoPostData).picgoEnabled = $event),
                onChange: unref(picgoPostMethods).picgoOnChange
              }, null, 8, ["modelValue", "onChange"]), false ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                closable: false,
                title: _ctx.$t("github.post.picgo.use.tip"),
                type: "warning"
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, {
              label: ""
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: publishConfirm,
                loading: isPublishLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isPublishLoading.value ? _ctx.$t("main.publish.loading") : isPublished.value ? _ctx.$t("main.update") : _ctx.$t("main.publish")), 1)]),
                _: 1
              }, 8, ["loading"]), isPublished.value ? (openBlock(), createBlock(_component_el_button, {
                key: 0,
                loading: isCancelLoading.value,
                onClick: cancelPublish
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.cancel")), 1)]),
                _: 1
              }, 8, ["loading"])) : createCommentVNode("", true)]),
              _: 1
            }), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "danger",
                text: "",
                disabled: ""
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isPublished.value ? _ctx.$t("main.publish.status.published") : _ctx.$t("main.publish.status.unpublish")), 1)]),
                _: 1
              }), isPublished.value ? (openBlock(), createElementBlock("a", {
                key: 0,
                href: previewUrl.value,
                title: previewUrl.value,
                target: "_blank"
              }, toDisplayString(_ctx.$t("main.publish.see.preview")), 9, _hoisted_2)) : createCommentVNode("", true)]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })) : createCommentVNode("", true), createVNode(_component_el_skeleton, {
          loading: isInitLoading.value,
          rows: 5,
          animated: ""
        }, null, 8, ["loading"])]),
        _: 1
      });
    };
  }
});
const CommonBlogMain_vue_vue_type_style_index_0_scoped_0ccc55da_lang = "";
const CommonBlogMain = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-0ccc55da"]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "LiandiMain",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    isMainReload: {
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
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_LIANDI);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(CommonBlogMain, {
        "is-main-reload": props.isMainReload,
        "is-reload": props.isReload,
        "api-type": apiType.value,
        "page-id": props.pageId,
        "limit-rate": true,
        "limit-seconds": 360,
        "remove-image": true
      }, null, 8, ["is-main-reload", "is-reload", "api-type", "page-id"]);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "YuqueMain",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    isMainReload: {
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
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_YUQUE);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(CommonBlogMain, {
        "api-type": apiType.value,
        "is-main-reload": props.isMainReload,
        "is-reload": props.isReload,
        "page-id": props.pageId,
        "use-cat": true
      }, null, 8, ["api-type", "is-main-reload", "is-reload", "page-id"]);
    };
  }
});
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "KmsMain",
  props: {
    isReload: {
      type: Boolean,
      default: false
    },
    isMainReload: {
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
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_KMS);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(CommonBlogMain, {
        "api-type": apiType.value,
        "is-main-reload": props.isMainReload,
        "is-reload": props.isReload,
        "page-id": props.pageId
      }, null, 8, ["api-type", "is-main-reload", "is-reload", "page-id"]);
    };
  }
});
const _hoisted_1$1 = {
  key: 1
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PlatformMain",
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
    const logger2 = LogFactory.getLogger("components/publish/tab/PlatformMain.vue");
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
    const isReloadMainTab = ref(false);
    const formData = reactive({
      dynamicConfigArray: [],
      githubArray: [],
      metaweblogArray: [],
      wordpressArray: []
    });
    const initDynCfg = (dynCfg) => {
      const newCfg = [];
      dynCfg.forEach((item) => {
        const newItem = new DynamicConfig(item.platformType, item.platformKey, item.platformName);
        const switchKey = "switch-" + item.platformKey;
        const switchValue = getBooleanConf(switchKey);
        newItem.modelValue = switchValue;
        if (switchValue) {
          newCfg.push(newItem);
        }
        newItem.yamlConverter = getDynYamlConverterAdaptor(item.platformKey);
      });
      return newCfg;
    };
    const initConf = () => {
      doCount();
      const dynamicJsonCfg = getDynamicJsonCfg();
      formData.dynamicConfigArray = initDynCfg(dynamicJsonCfg.totalCfg || []);
      formData.githubArray = initDynCfg(dynamicJsonCfg.githubCfg || []);
      formData.metaweblogArray = initDynCfg(dynamicJsonCfg.metaweblogCfg || []);
      formData.wordpressArray = initDynCfg(dynamicJsonCfg.wordpressCfg || []);
      logger2.debug("dynamicJsonCfg=>", JSON.stringify(dynamicJsonCfg));
      logger2.debug("\u5E73\u53F0\u8BBE\u7F6E\u521D\u59CB\u5316");
    };
    const mainTabChange = () => {
      isReloadMainTab.value = !isReloadMainTab.value;
    };
    watch(() => props.isReload, (oldValue, newValue) => {
      initConf();
    });
    onMounted(() => {
      initConf();
    });
    return (_ctx, _cache) => {
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      const _component_el_alert = ElAlert;
      return unref(tabCountStore).tabCount > 0 ? (openBlock(), createBlock(_component_el_tabs, {
        key: 0,
        type: "border-card",
        onTabChange: mainTabChange
      }, {
        default: withCtx(() => [unref(vuepressEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 0,
          label: _ctx.$t("main.publish.to.vuepress")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$e, {
            "is-main-reload": isReloadMainTab.value,
            "is-reload": props.isReload,
            "page-id": props.pageId
          }, null, 8, ["is-main-reload", "is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(hugoEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 1,
          label: _ctx.$t("main.publish.to.hugo")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$d, {
            "is-main-reload": isReloadMainTab.value,
            "is-reload": props.isReload,
            "page-id": props.pageId
          }, null, 8, ["is-main-reload", "is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(hexoEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 2,
          label: _ctx.$t("main.publish.to.hexo")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$c, {
            "is-main-reload": isReloadMainTab.value,
            "is-reload": props.isReload,
            "page-id": props.pageId
          }, null, 8, ["is-main-reload", "is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(jekyllEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 3,
          label: _ctx.$t("main.publish.to.jekyll")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$b, {
            "is-main-reload": isReloadMainTab.value,
            "is-reload": props.isReload,
            "page-id": props.pageId
          }, null, 8, ["is-main-reload", "is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(jvueEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 4,
          label: _ctx.$t("main.publish.to.jvue")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$9, {
            "is-main-reload": isReloadMainTab.value,
            "is-reload": props.isReload,
            "page-id": props.pageId
          }, null, 8, ["is-main-reload", "is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(confEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 5,
          label: _ctx.$t("main.publish.to.conf")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$8, {
            "is-main-reload": isReloadMainTab.value,
            "is-reload": props.isReload,
            "page-id": props.pageId
          }, null, 8, ["is-main-reload", "is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(cnblogsEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 6,
          label: _ctx.$t("main.publish.to.cnblogs")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$7, {
            "is-main-reload": isReloadMainTab.value,
            "is-reload": props.isReload,
            "page-id": props.pageId
          }, null, 8, ["is-main-reload", "is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(wordpressEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 7,
          label: _ctx.$t("main.publish.to.wordpress")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$6, {
            "is-main-reload": isReloadMainTab.value,
            "is-reload": props.isReload,
            "page-id": props.pageId
          }, null, 8, ["is-main-reload", "is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(liandiEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 8,
          label: _ctx.$t("main.publish.to.liandi")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$4, {
            "is-main-reload": isReloadMainTab.value,
            "is-reload": props.isReload,
            "page-id": props.pageId
          }, null, 8, ["is-main-reload", "is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(yuqueEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 9,
          label: _ctx.$t("main.publish.to.yuque")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$3, {
            "is-main-reload": isReloadMainTab.value,
            "is-reload": props.isReload,
            "page-id": props.pageId
          }, null, 8, ["is-main-reload", "is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(kmsEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 10,
          label: _ctx.$t("main.publish.to.kms")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$2, {
            "is-main-reload": isReloadMainTab.value,
            "is-reload": props.isReload,
            "page-id": props.pageId
          }, null, 8, ["is-main-reload", "is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(formData.githubArray, (gcfg) => {
          return openBlock(), createBlock(_component_el_tab_pane, {
            key: gcfg.platformKey,
            label: gcfg.platformName
          }, {
            default: withCtx(() => [createVNode(GithubMain, {
              "is-main-reload": isReloadMainTab.value,
              "is-reload": props.isReload,
              "api-type": gcfg.platformKey,
              "page-id": props.pageId,
              "yaml-converter": gcfg.yamlConverter
            }, null, 8, ["is-main-reload", "is-reload", "api-type", "page-id", "yaml-converter"])]),
            _: 2
          }, 1032, ["label"]);
        }), 128)), (openBlock(true), createElementBlock(Fragment, null, renderList(formData.metaweblogArray, (mcfg) => {
          return openBlock(), createBlock(_component_el_tab_pane, {
            key: mcfg.platformKey,
            label: mcfg.platformName
          }, {
            default: withCtx(() => [createVNode(MetaweblogMain, {
              "api-type": mcfg.platformKey,
              "is-main-reload": isReloadMainTab.value,
              "is-reload": props.isReload,
              "page-id": props.pageId
            }, null, 8, ["api-type", "is-main-reload", "is-reload", "page-id"])]),
            _: 2
          }, 1032, ["label"]);
        }), 128)), (openBlock(true), createElementBlock(Fragment, null, renderList(formData.wordpressArray, (wcfg) => {
          return openBlock(), createBlock(_component_el_tab_pane, {
            key: wcfg.platformKey,
            label: wcfg.platformName
          }, {
            default: withCtx(() => [createVNode(MetaweblogMain, {
              "api-type": wcfg.platformKey,
              "is-main-reload": isReloadMainTab.value,
              "is-reload": props.isReload,
              "page-id": props.pageId
            }, null, 8, ["api-type", "is-main-reload", "is-reload", "page-id"])]),
            _: 2
          }, 1032, ["label"]);
        }), 128))]),
        _: 1
      })) : (openBlock(), createElementBlock("div", _hoisted_1$1, [createVNode(_component_el_alert, {
        class: "top-version-tip",
        title: _ctx.$t("config.platform.none"),
        type: "error",
        closable: false
      }, null, 8, ["title"])]));
    };
  }
});
const _hoisted_1 = {
  style: {
    "padding": "16px 20px"
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PublishService",
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
    const logger2 = LogFactory.getLogger("components/publish/PublishService.vue");
    const defaultTab = ref("platform-main");
    const isReloadServiceTab = ref(false);
    const serviceTabChange = (name) => {
      const paneName = name.paneName;
      logger2.debug("serviceTabChange=>", paneName);
      isReloadServiceTab.value = !isReloadServiceTab.value;
    };
    return (_ctx, _cache) => {
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      return openBlock(), createBlock(_component_el_tabs, {
        "model-value": defaultTab.value,
        "tab-position": "left",
        onTabClick: serviceTabChange
      }, {
        default: withCtx(() => [createVNode(_component_el_tab_pane, {
          class: "pane-platform-main-body",
          name: "platform-main",
          label: _ctx.$t("service.tab.publish.service")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$1, {
            "is-reload": isReloadServiceTab.value,
            "page-id": props.pageId
          }, null, 8, ["is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          name: "platform-setting",
          label: _ctx.$t("service.tab.publish.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$g, {
            "is-reload": isReloadServiceTab.value
          }, null, 8, ["is-reload"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          name: "post-bind",
          label: _ctx.$t("service.tab.post.bind")
        }, {
          default: withCtx(() => [createVNode(PostBind, {
            "is-reload": isReloadServiceTab.value,
            "page-id": props.pageId
          }, null, 8, ["is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          name: "service-switch",
          label: _ctx.$t("service.tab.service.switch")
        }, {
          default: withCtx(() => [createVNode(ServiceSwitch, {
            "is-reload": isReloadServiceTab.value
          }, null, 8, ["is-reload"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          name: "dynamic-platform",
          label: _ctx.$t("dynamic.platform.new")
        }, {
          default: withCtx(() => [createVNode(DynamicPlatform)]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          name: "picgo-setting",
          label: _ctx.$t("picgo.pic.setting")
        }, {
          default: withCtx(() => [createBaseVNode("div", _hoisted_1, [createVNode(_sfc_main$y)])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          label: _ctx.$t("service.tab.change.local"),
          name: "general-setting"
        }, {
          default: withCtx(() => [createVNode(_sfc_main$z, {
            "is-reload": isReloadServiceTab.value
          }, null, 8, ["is-reload"])]),
          _: 1
        }, 8, ["label"])]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
});
const PublishService_vue_vue_type_style_index_0_scoped_59e02008_lang = "";
const PublishService = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-59e02008"]]);
export {
  PublishService as P
};
