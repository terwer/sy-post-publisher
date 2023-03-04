import { h as ElAlert, a as ElButton, K as ElTag, f as ElInput, e as ElFormItem, v as ElCard, B as ElCol, A as ElRow, t as ElMessageBox, E as ElMessage } from "./vendor_element-plus-f0c88bcb.js";
import { O as defineComponent, ad as reactive, u as ref, z as watch, A as onMounted, P as openBlock, Q as createElementBlock, U as createBlock, _ as createCommentVNode, x as unref, V as withCtx, $ as createTextVNode, a2 as createVNode, a1 as Fragment, ao as renderList, X as createBaseVNode, a0 as toDisplayString, ap as withKeys } from "./vendor-1c6b4df7.js";
import { s as siyuanBrowserUtil, L as LogFactory, b as isInSiyuanNewWinBrowser, am as getSiyuanNewWinDataDir, c as getPageId, l as isEmptyString, an as strUtil, v as SiYuanApi, t as appendStr, ao as browserUtil, k as _export_sfc } from "./AppLayout.vue_vue_type_script_setup_true_lang-0e4e5141.js";
import { u as useI18n } from "./vendor_vue-i18n-b8c9be4e.js";
const cmd = async (c) => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const syCmd = syWin == null ? void 0 : syWin.SyCmd;
  return await syCmd.cmd(c);
};
const customCmd = async (cmd2, args, cwd) => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const syCmd = syWin == null ? void 0 : syWin.SyCmd;
  return await syCmd.customCmd(cmd2, args, {}, cwd);
};
const customShellCmd = async (shell) => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const syCmd = syWin == null ? void 0 : syWin.SyCmd;
  return await syCmd.customShellCmd(shell);
};
const scriptUtil = {
  cmd,
  customCmd,
  customShellCmd
};
const _hoisted_1 = {
  class: "anki-body"
};
const _hoisted_2 = {
  class: "block-title"
};
const _hoisted_3 = {
  class: "anki-option"
};
const _hoisted_4 = {
  class: "anki-deck"
};
const _hoisted_5 = {
  class: "anki-tags"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AnkiIndex",
  props: {
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const logger = LogFactory.getLogger("components/anki/AnkiIndex.vue");
    const {
      t
    } = useI18n();
    const siyuanApi = new SiYuanApi();
    const formData = reactive({
      ankiInfo: null,
      ankiMap: {},
      deckMap: {},
      tagMap: {}
    });
    const isAnkiLoading = ref(false);
    const unexpectedCharArray = ["&quot;", "&amp;", "amp;", "quot;"];
    const hasEncodedChar = ref(false);
    const updateCard = async () => {
      ElMessageBox.confirm("\u51C6\u5907\u540C\u6B65Anki\u5361\u7247\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F", t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        isAnkiLoading.value = true;
        const dataDir = getSiyuanNewWinDataDir();
        const workDir = `${dataDir}/widgets/sy-post-publisher/lib/cmd`;
        const ankisiyuanPath = `${dataDir}/widgets/sy-post-publisher/lib/cmd/ankisiyuan.bin`;
        logger.info("ankisiyuanPath=>", ankisiyuanPath);
        const result = await scriptUtil.customCmd(ankisiyuanPath, [], workDir);
        if (result.code === 0) {
          ElMessage.success("\u64CD\u4F5C\u6210\u529F\uFF0C\u6267\u884C\u7ED3\u679C=>" + result.data.split("\n").slice(-2).join(" "));
        } else {
          ElMessage.error("\u64CD\u4F5C\u5F02\u5E38\uFF0C\u9519\u8BEF\u6D88\u606F=>" + result.data);
        }
        isAnkiLoading.value = false;
      }).catch((e) => {
        isAnkiLoading.value = false;
        if (e.toString().indexOf("cancel") <= -1) {
          ElMessage({
            type: "error",
            message: t("main.opt.failure") + "\uFF0C\u8BF7\u5C06 ankisiyuan.bin \u6216\u8005 ankisiyuan.exe \u590D\u5236\u5230 data/widgets/sy-post-publisher/lib/cmd \u76EE\u5F55=>" + e
          });
          logger.error(t("main.opt.failure") + "=>" + e);
        }
      });
    };
    const deckHandleClose = (blockId, tag) => {
      formData.deckMap[blockId].dynamicTags.splice(formData.deckMap[blockId].dynamicTags.indexOf(tag), 1);
    };
    const deckShowInput = (blockId) => {
      formData.deckMap[blockId].inputVisible = true;
    };
    const deckHandleInputConfirm = (blockId) => {
      if (formData.deckMap[blockId].inputValue) {
        formData.deckMap[blockId].dynamicTags.push(formData.deckMap[blockId].inputValue);
      }
      formData.deckMap[blockId].inputVisible = false;
      formData.deckMap[blockId].inputValue = "";
    };
    const tagHandleClose = (blockId, tag) => {
      formData.tagMap[blockId].dynamicTags.splice(formData.tagMap[blockId].dynamicTags.indexOf(tag), 1);
    };
    const tagShowInput = (blockId) => {
      formData.tagMap[blockId].inputVisible = true;
    };
    const tagHandleInputConfirm = (blockId) => {
      if (formData.tagMap[blockId].inputValue) {
        formData.tagMap[blockId].dynamicTags.push(formData.tagMap[blockId].inputValue);
      }
      formData.tagMap[blockId].inputVisible = false;
      formData.tagMap[blockId].inputValue = "";
    };
    const initPage = async () => {
      const pageId = await getPageId(true, props.pageId);
      formData.ankiInfo = await siyuanApi.getAnkilinkInfo(pageId);
      logger.debug("ankiInfo=>", formData.ankiInfo);
      formData.ankiInfo.forEach((item) => {
        var _a, _b, _c;
        formData.ankiMap[item.id] = item;
        logger.debug("item.value=>", item.value);
        let deckArr = [];
        let tagArr = [];
        if (!isEmptyString(item.value)) {
          const valueArr = (_a = item.value) == null ? void 0 : _a.split("\n");
          const deckStr = (_b = valueArr[0]) == null ? void 0 : _b.replace(/"/g, "").replace(/deck_name=/g, "");
          deckArr = deckStr == null ? void 0 : deckStr.split("::");
          if (strUtil.includeInArray(deckStr, unexpectedCharArray)) {
            hasEncodedChar.value = true;
          }
          if (valueArr.length > 1) {
            const tagStr = (_c = valueArr[1]) == null ? void 0 : _c.replace(/"/g, "").replace(/tags=\[/g, "").replace(/]/g, "");
            tagArr = tagStr.split(",");
            if (strUtil.includeInArray(tagStr, unexpectedCharArray)) {
              hasEncodedChar.value = true;
            }
          }
        }
        deckArr = deckArr.filter(function(str) {
          return str !== "";
        });
        tagArr = tagArr.filter(function(str) {
          return str !== "";
        });
        logger.debug("deckArr=>", deckArr);
        logger.debug("tagArr=>", tagArr);
        formData.deckMap[item.id] = {
          inputValue: "",
          dynamicTags: deckArr,
          inputVisible: false
        };
        formData.tagMap[item.id] = {
          inputValue: "",
          dynamicTags: tagArr,
          inputVisible: false
        };
      });
    };
    const saveAnkiInfo = async (blockId) => {
      logger.debug("blockId=>", blockId);
      const ankiInfo = formData.ankiMap[blockId];
      const deckInfo = formData.deckMap[blockId];
      const tagInfo = formData.tagMap[blockId];
      logger.debug("deckInfo=>", deckInfo);
      logger.debug("tagInfo=>", tagInfo);
      let ankiValue;
      ankiValue = appendStr('deck_name="', deckInfo.dynamicTags.join("::"), '"');
      ankiValue = appendStr(ankiValue, "\n", "tags=", JSON.stringify(tagInfo.dynamicTags));
      for (let k = 0; k < unexpectedCharArray.length; k++) {
        const ch = unexpectedCharArray[k];
        ankiValue = ankiValue.replace(new RegExp(ch, "g"), "");
      }
      ankiInfo.value = ankiValue;
      logger.info("\u51C6\u5907\u4FDD\u5B58anki\u6807\u8BB0\uFF0CankiInfo=>", ankiInfo.value);
      const customAttr = {
        [ankiInfo.name]: ankiInfo.value
      };
      await siyuanApi.setBlockAttrs(blockId, customAttr);
      if (hasEncodedChar.value) {
        browserUtil.reloadPageWithMessage(t("main.opt.success"));
      } else {
        ElMessage.success(t("main.opt.success"));
      }
    };
    watch(() => props.pageId, async (oldValue, newValue) => {
      await initPage();
      logger.debug("Anki\u521D\u59CB\u5316");
    });
    onMounted(async () => {
      await initPage();
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_button = ElButton;
      const _component_el_tag = ElTag;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_card = ElCard;
      const _component_el_col = ElCol;
      const _component_el_row = ElRow;
      return openBlock(), createElementBlock("div", _hoisted_1, [hasEncodedChar.value ? (openBlock(), createBlock(_component_el_alert, {
        key: 0,
        class: "top-version-tip",
        title: "\u68C0\u6D4B\u5230Anki\u6807\u8BB0\u5DF2\u88AB\u8F6C\u4E49\uFF0C\u53EF\u80FD\u662F\u4F7F\u7528\u4E86\u4F18\u5316\u6392\u7248\u5BFC\u81F4\uFF0C\u8BF7\u70B9\u51FB\u4FDD\u5B58\u81EA\u52A8\u4FEE\u590D\u3002\u82E5\u65E0\u6CD5\u81EA\u52A8\u4FEE\u590D\uFF0C\u8BF7\u5220\u9664\u91CD\u65B0\u4FEE\u6539\u4FDD\u5B58\u3002\u6CE8\u610F\uFF1A\u53EF\u80FD\u6709\u7F13\u5B58\uFF0C\u4FDD\u5B58\u4E4B\u540E\u53EF\u95F4\u9694\u4E00\u6BB5\u65F6\u95F4\u518D\u6765\u770B\u3002",
        type: "error",
        closable: false
      })) : createCommentVNode("", true), unref(isInSiyuanNewWinBrowser)() ? (openBlock(), createBlock(_component_el_button, {
        key: 1,
        type: "primary",
        onClick: updateCard,
        loading: isAnkiLoading.value
      }, {
        default: withCtx(() => [createTextVNode("\u66F4\u65B0\u5361\u7247 ")]),
        _: 1
      }, 8, ["loading"])) : createCommentVNode("", true), createVNode(_component_el_row, {
        gutter: 12
      }, {
        default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(formData.ankiInfo, (o, index) => {
          return openBlock(), createBlock(_component_el_col, {
            key: o.id,
            span: 8,
            class: "anki-card-col"
          }, {
            default: withCtx(() => [createVNode(_component_el_card, {
              shadow: "always"
            }, {
              default: withCtx(() => [createBaseVNode("div", _hoisted_2, toDisplayString(index) + "." + toDisplayString(o.content) + " - " + toDisplayString(o.id), 1), createBaseVNode("div", _hoisted_3, [createBaseVNode("div", _hoisted_4, [createVNode(_component_el_form_item, {
                label: _ctx.$t("anki.siyuan.deck")
              }, {
                default: withCtx(() => {
                  var _a;
                  return [(openBlock(true), createElementBlock(Fragment, null, renderList((_a = formData.deckMap[o.id].dynamicTags) != null ? _a : [], (deck) => {
                    return openBlock(), createBlock(_component_el_tag, {
                      key: deck,
                      class: "mx-1",
                      closable: "",
                      "disable-transitions": false,
                      onClose: ($event) => deckHandleClose(o.id, deck)
                    }, {
                      default: withCtx(() => [createTextVNode(toDisplayString(deck), 1)]),
                      _: 2
                    }, 1032, ["onClose"]);
                  }), 128)), formData.deckMap[o.id].inputVisible ? (openBlock(), createBlock(_component_el_input, {
                    key: 0,
                    ref_for: true,
                    ref: "deckRefInput",
                    modelValue: formData.deckMap[o.id].inputValue,
                    "onUpdate:modelValue": ($event) => formData.deckMap[o.id].inputValue = $event,
                    class: "ml-1 w-20",
                    size: "small",
                    onKeyup: withKeys(($event) => deckHandleInputConfirm(o.id), ["enter"]),
                    onBlur: ($event) => deckHandleInputConfirm(o.id)
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup", "onBlur"])) : (openBlock(), createBlock(_component_el_button, {
                    key: 1,
                    class: "button-new-tag ml-1 el-tag",
                    size: "small",
                    onClick: ($event) => deckShowInput(o.id)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("anki.siyuan.deck.new")), 1)]),
                    _: 2
                  }, 1032, ["onClick"]))];
                }),
                _: 2
              }, 1032, ["label"])]), createBaseVNode("div", _hoisted_5, [createVNode(_component_el_form_item, {
                label: _ctx.$t("anki.siyuan.tag")
              }, {
                default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(formData.tagMap[o.id].dynamicTags, (tag) => {
                  return openBlock(), createBlock(_component_el_tag, {
                    key: tag,
                    class: "mx-1",
                    closable: "",
                    "disable-transitions": false,
                    onClose: ($event) => tagHandleClose(o.id, tag)
                  }, {
                    default: withCtx(() => [createTextVNode(toDisplayString(tag), 1)]),
                    _: 2
                  }, 1032, ["onClose"]);
                }), 128)), formData.tagMap[o.id].inputVisible ? (openBlock(), createBlock(_component_el_input, {
                  key: 0,
                  ref_for: true,
                  ref: "tagRefInput",
                  modelValue: formData.tagMap[o.id].inputValue,
                  "onUpdate:modelValue": ($event) => formData.tagMap[o.id].inputValue = $event,
                  class: "ml-1 w-20",
                  size: "small",
                  onKeyup: withKeys(($event) => tagHandleInputConfirm(o.id), ["enter"]),
                  onBlur: ($event) => tagHandleInputConfirm(o.id)
                }, null, 8, ["modelValue", "onUpdate:modelValue", "onKeyup", "onBlur"])) : (openBlock(), createBlock(_component_el_button, {
                  key: 1,
                  class: "button-new-tag ml-1 el-tag",
                  size: "small",
                  onClick: ($event) => tagShowInput(o.id)
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("anki.siyuan.tag.new")), 1)]),
                  _: 2
                }, 1032, ["onClick"]))]),
                _: 2
              }, 1032, ["label"])]), createVNode(_component_el_button, {
                type: "primary",
                class: "button",
                "data-block-id": o.id,
                onClick: ($event) => saveAnkiInfo(o.id)
              }, {
                default: withCtx(() => [createTextVNode("\u4FDD\u5B58Anki\u6807\u8BB0 ")]),
                _: 2
              }, 1032, ["data-block-id", "onClick"])])]),
              _: 2
            }, 1024)]),
            _: 2
          }, 1024);
        }), 128))]),
        _: 1
      })]);
    };
  }
});
const AnkiIndex_vue_vue_type_style_index_0_lang = "";
const AnkiIndex_vue_vue_type_style_index_1_scoped_c410cfdb_lang = "";
const AnkiIndex = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c410cfdb"]]);
export {
  AnkiIndex as A
};
