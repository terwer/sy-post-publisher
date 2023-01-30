import { a as ElButton, z as ElTag, i as ElInput, e as ElFormItem, F as ElCard, G as ElCol, H as ElRow, E as ElMessage } from "./vendor_element-plus-1140ca7b.js";
import { M as defineComponent, ac as reactive, z as watch, A as onMounted, O as openBlock, P as createElementBlock, Z as createCommentVNode, a1 as createVNode, U as withCtx, a0 as Fragment, ao as renderList, T as createBlock, W as createBaseVNode, $ as toDisplayString, _ as createTextVNode, ap as withKeys } from "./vendor-d1463dcf.js";
import { i as isInSiyuanNewWinBrowser, L as LogFactory, b as getPageId, l as isEmptyString, S as SiYuanApi, o as appendStr, j as _export_sfc } from "./AppLayout.vue_vue_type_script_setup_true_lang-e0451189.js";
import { u as useI18n } from "./vendor_vue-i18n-1a506789.js";
isInSiyuanNewWinBrowser() ? require("child_process") : "";
isInSiyuanNewWinBrowser() ? require("process") : "";
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
        var _a, _b, _c, _d;
        formData.ankiMap[item.id] = item;
        logger.info("item.value=>", item.value);
        let deckArr = [];
        let tagArr = [];
        if (!isEmptyString(item.value)) {
          const valueArr = (_a = item.value) == null ? void 0 : _a.split("\n");
          deckArr = (_c = (_b = valueArr[0]) == null ? void 0 : _b.replace(/"/g, "").replace(/&quot;/g, "").replace(/deck_name=/g, "")) == null ? void 0 : _c.split("::");
          if (valueArr.length > 1) {
            tagArr = (_d = valueArr[1]) == null ? void 0 : _d.replace(/"/g, "").replace(/&quot;/g, "").replace(/tags=\[/g, "").replace(/]/g, "").split(",");
          }
        }
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
    const saveAnkiInfo = (blockId) => {
      logger.debug("blockId=>", blockId);
      const ankiInfo = formData.ankiMap[blockId];
      const deckInfo = formData.deckMap[blockId];
      const tagInfo = formData.tagMap[blockId];
      logger.debug("deckInfo=>", deckInfo);
      logger.debug("tagInfo=>", tagInfo);
      let ankiValue;
      ankiValue = appendStr('deck_name="', deckInfo.dynamicTags.join("::"), '"');
      ankiValue = appendStr(ankiValue, "\n", "tags=", JSON.stringify(tagInfo.dynamicTags));
      ankiInfo.value = ankiValue;
      const customAttr = {
        [ankiInfo.name]: ankiInfo.value
      };
      siyuanApi.setBlockAttrs(blockId, customAttr);
      logger.info("anki\u6807\u8BB0\u5DF2\u4FDD\u5B58\uFF0CankiInfo=>", ankiInfo);
      ElMessage.success(t("main.opt.success"));
    };
    watch(() => props.pageId, (oldValue, newValue) => {
      initPage();
      logger.debug("Anki\u521D\u59CB\u5316");
    });
    onMounted(async () => {
      await initPage();
    });
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_el_tag = ElTag;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_card = ElCard;
      const _component_el_col = ElCol;
      const _component_el_row = ElRow;
      return openBlock(), createElementBlock("div", _hoisted_1, [createCommentVNode("", true), createVNode(_component_el_row, {
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
                default: withCtx(() => [createTextVNode("\u4FDD\u5B58Anki\u6807\u8BB0")]),
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
const AnkiIndex_vue_vue_type_style_index_1_scoped_91834769_lang = "";
const AnkiIndex = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-91834769"]]);
export {
  AnkiIndex as A
};
