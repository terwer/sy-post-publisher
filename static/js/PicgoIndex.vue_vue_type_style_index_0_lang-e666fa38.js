import { h as ElMessageBox, E as ElMessage, a as ElButton, D as ElTooltip, I as ElPopover, k as ElDialog, i as ElInput } from "./vendor_element-plus-1f908931.js";
import { k as inSiyuan, i as isInSiyuanNewWinBrowser, L as LogFactory, x as isElectron, b as getPageId, S as SiYuanApi, a2 as reloadPage, y as isBrowser, a0 as copyToClipboardInBrowser } from "./AppLayout.vue_vue_type_script_setup_true_lang-a6edc873.js";
import { ac as reactive, z as watch, A as onMounted, M as defineComponent, u as ref, O as openBlock, P as createElementBlock, W as createBaseVNode, a1 as createVNode, U as withCtx, _ as createTextVNode, $ as toDisplayString, y as unref, T as createBlock, Z as createCommentVNode, a0 as Fragment, ao as renderList, aM as resolveComponent } from "./vendor-03279a5a.js";
import { u as useI18n } from "./vendor_vue-i18n-ea606b0c.js";
import { u as uploadByPicGO, a as ImageItem, P as PicgoPostApi, I as ImageParser, _ as _sfc_main$1 } from "./PicgoSetting.vue_vue_type_script_setup_true_lang-0476ad29.js";
const usePicgoCommon = () => {
  const isDev = false;
  const isSiyuanOrSiyuanNewWin = inSiyuan() || isInSiyuanNewWinBrowser();
  const picgoCommonData = reactive({
    isUploadLoading: false,
    popWidth: 400,
    showDebugMsg: isDev,
    loggerMsg: "",
    isSiyuanOrSiyuanNewWin,
    fileList: {
      files: []
    }
  });
  const picgoCommonMethods = {
    getPicgoCommonData: () => {
      return picgoCommonData;
    }
  };
  return {
    picgoCommonData,
    picgoCommonMethods
  };
};
const usePicgoUpload = (props, deps, refs) => {
  const logger = LogFactory.getLogger("composables/picgo/picgoUploadCom.ts");
  const {
    t
  } = useI18n();
  const picgoUploadData = reactive({
    dialogPicgoSettingFormVisible: false
  });
  const picgoCommonMethods = deps.picgoCommonMethods;
  const picgoCommonData = picgoCommonMethods.getPicgoCommonData();
  const refSelectedFiles = refs.refSelectedFiles;
  const doAfterUpload = (imgInfos) => {
    picgoCommonData.loggerMsg = imgInfos;
    const imageJson = JSON.parse(imgInfos);
    if (imageJson && imageJson.length > 0) {
      imageJson.forEach((img) => {
        const rtnItem = new ImageItem(img.imgUrl, img.imgUrl, false);
        picgoCommonData.loggerMsg += "\nnewItem=>" + JSON.stringify(rtnItem);
        picgoCommonData.fileList.files.push(rtnItem);
      });
    }
    ElMessage.success(t("main.opt.success"));
  };
  const picgoUploadMethods = {
    handlePicgoSetting: async () => {
      if (!isElectron) {
        await ElMessageBox.alert(t("picgo.pic.setting.no.tip"), t("main.opt.tip"), {
          confirmButtonText: t("main.opt.ok")
        });
        return;
      }
      picgoUploadData.dialogPicgoSettingFormVisible = true;
    },
    bindFileControl: () => {
      refSelectedFiles.value.click();
    },
    doUploadPicSelected: async (event) => {
      picgoCommonData.isUploadLoading = true;
      try {
        const fileList = event.target.files;
        console.log("onRequest fileList=>", fileList);
        if (!fileList || fileList.length === 0) {
          ElMessage.error("\u8BF7\u9009\u62E9\u56FE\u7247");
          picgoCommonData.isUploadLoading = false;
          return;
        }
        if (!inSiyuan() && !isInSiyuanNewWinBrowser()) {
          ElMessage.error("\u975Eelectron\u73AF\u5883\u53EA\u80FD\u901A\u8FC7\u526A\u8D34\u677F\u4E0A\u4F20");
          picgoCommonData.isUploadLoading = false;
          return;
        }
        const filePaths = [];
        for (let i = 0; i < fileList.length; i++) {
          if (fileList.item(i).path) {
            filePaths.push(fileList.item(i).path);
            logger.debug("\u8DEF\u5F84\u4E0D\u4E3A\u7A7A");
          } else {
            logger.debug("\u8DEF\u5F84\u4E3A\u7A7A\uFF0C\u5FFD\u7565");
          }
        }
        const imgInfos = await uploadByPicGO(filePaths);
        doAfterUpload(imgInfos);
        picgoCommonData.isUploadLoading = false;
      } catch (e) {
        if (e.toString().indexOf("cancel") <= -1) {
          ElMessage({
            type: "error",
            message: t("main.opt.failure") + "=>" + e
          });
          logger.error(t("main.opt.failure") + "=>" + e);
        }
        picgoCommonData.isUploadLoading = false;
      }
    },
    doUploadPicFromClipboard: async () => {
      picgoCommonData.isUploadLoading = true;
      try {
        const imgInfos = await uploadByPicGO();
        doAfterUpload(imgInfos);
        picgoCommonData.isUploadLoading = false;
      } catch (e) {
        if (e.toString().indexOf("cancel") <= -1) {
          ElMessage({
            type: "error",
            message: t("main.opt.failure") + "=>" + e
          });
          logger.error(t("main.opt.failure") + "=>", e);
        }
        picgoCommonData.isUploadLoading = false;
      }
    }
  };
  return {
    picgoUploadData,
    picgoUploadMethods
  };
};
const usePicgoInitPage = (props, deps) => {
  const logger = LogFactory.getLogger("composables/picgo/picgoInitPageCom.ts");
  const siyuanApi = new SiYuanApi();
  const picgoPostApi = new PicgoPostApi();
  const imageParser = new ImageParser();
  const picgoCommonMethods = deps.picgoCommonMethods;
  const picgoCommonData = picgoCommonMethods.getPicgoCommonData();
  const initPage = async () => {
    const pageId = await getPageId(true, props.pageId);
    const imageBlocks = await siyuanApi.getImageBlocksByID(pageId);
    logger.debug("\u67E5\u8BE2\u6587\u7AE0\u4E2D\u7684\u56FE\u7247\u5757=>", imageBlocks);
    if (!imageBlocks || imageBlocks.length === 0) {
      return;
    }
    let retImgs = [];
    imageBlocks.forEach((page) => {
      const parsedImages = imageParser.parseImagesToArray(page.markdown);
      retImgs = [.../* @__PURE__ */ new Set([...retImgs, ...parsedImages])];
    });
    logger.debug("\u89E3\u6790\u51FA\u6765\u7684\u6240\u6709\u7684\u56FE\u7247\u5730\u5740=>", retImgs);
    const attrs = await siyuanApi.getBlockAttrs(pageId);
    const imageItemArray = await picgoPostApi.doConvertImagesToImagesItemArray(attrs, retImgs);
    for (let i = 0; i < imageItemArray.length; i++) {
      const imageItem = imageItemArray[i];
      picgoCommonData.fileList.files.push(imageItem);
    }
  };
  const picgoInitMethods = {
    initPage: async () => {
      await initPage();
    }
  };
  watch(() => props.pageId, async () => {
    await initPage();
    logger.debug("Picgo\u521D\u59CB\u5316");
  });
  onMounted(async () => {
    await initPage();
  });
  return {
    picgoInitMethods
  };
};
const usePicgoManage = (props, deps) => {
  const logger = LogFactory.getLogger("composables/picgo/picgoManageCom.ts");
  const {
    t
  } = useI18n();
  const siyuanApi = new SiYuanApi();
  const picgoPostApi = new PicgoPostApi();
  const picgoManageData = reactive({
    dialogImageUrl: "",
    dialogPreviewVisible: false
  });
  const picgoCommonMethods = deps.picgoCommonMethods;
  const picgoCommonData = picgoCommonMethods.getPicgoCommonData();
  const picgoManageMethods = {
    handleUploadAllImagesToBed: async () => {
      picgoCommonData.isUploadLoading = true;
      try {
        let hasLocalImages = false;
        const imageItemArray = picgoCommonData.fileList.files;
        for (let i = 0; i < imageItemArray.length; i++) {
          const imageItem = imageItemArray[i];
          if (!imageItem.isLocal) {
            logger.warn("\u5DF2\u7ECF\u4E0A\u4F20\u8FC7\u56FE\u5E8A\uFF0C\u8BF7\u52FF\u91CD\u590D\u4E0A\u4F20=>", imageItem.originUrl);
            continue;
          }
          hasLocalImages = true;
          await picgoManageMethods.doUploadImagesToBed(imageItem);
        }
        picgoCommonData.isUploadLoading = false;
        if (!hasLocalImages) {
          ElMessage.warning("\u672A\u53D1\u73B0\u672C\u5730\u56FE\u7247\uFF0C\u4E0D\u4E0A\u4F20");
        } else {
          ElMessage.success("\u56FE\u7247\u5DF2\u7ECF\u5168\u90E8\u4E0A\u4F20\u81F3\u56FE\u5E8A\uFF0C\u5373\u5C06\u5237\u65B0\u9875\u9762");
          reloadPage();
        }
      } catch (e) {
        picgoCommonData.isUploadLoading = false;
        ElMessage({
          type: "error",
          message: t("main.opt.failure") + "=>" + e
        });
        logger.error(t("main.opt.failure") + "=>" + e);
      }
    },
    handleUploadCurrentImageToBed: async (imageItem) => {
      picgoCommonData.isUploadLoading = true;
      if (!imageItem.isLocal) {
        ElMessageBox.confirm("\u5DF2\u7ECF\u662F\u8FDC\u7A0B\u56FE\u7247\uFF0C\u662F\u5426\u4ECD\u7136\u8986\u76D6\u4E0A\u4F20\uFF1F", t("main.opt.warning"), {
          confirmButtonText: t("main.opt.ok"),
          cancelButtonText: t("main.opt.cancel"),
          type: "warning"
        }).then(async () => {
          try {
            await picgoManageMethods.doUploadImagesToBed(imageItem, true);
            picgoCommonData.isUploadLoading = false;
            ElMessage.success("\u56FE\u7247\u5DF2\u7ECF\u6210\u529F\u4E0A\u4F20\u81F3\u56FE\u5E8A\uFF0C\u5373\u5C06\u5237\u65B0\u9875\u9762");
            reloadPage();
          } catch (e) {
            picgoCommonData.isUploadLoading = false;
            ElMessage({
              type: "error",
              message: t("main.opt.failure") + "=>" + e
            });
            logger.error(t("main.opt.failure") + "=>" + e);
          }
        }).catch((e) => {
          picgoCommonData.isUploadLoading = false;
          if (e.toString().indexOf("cancel") <= -1) {
            ElMessage({
              type: "error",
              message: t("main.opt.failure") + "\uFF0C\u56FE\u7247\u4E0A\u4F20\u5F02\u5E38=>" + e
            });
            logger.error(t("main.opt.failure") + "=>" + e);
          }
        });
      } else {
        try {
          await picgoManageMethods.doUploadImagesToBed(imageItem);
          picgoCommonData.isUploadLoading = false;
          ElMessage.success("\u56FE\u7247\u5DF2\u7ECF\u6210\u529F\u4E0A\u4F20\u81F3\u56FE\u5E8A\uFF0C\u5373\u5C06\u5237\u65B0\u9875\u9762");
          reloadPage();
        } catch (e) {
          picgoCommonData.isUploadLoading = false;
          ElMessage({
            type: "error",
            message: t("main.opt.failure") + "=>" + e
          });
          logger.error(t("main.opt.failure") + "=>" + e);
        }
        picgoCommonData.isUploadLoading = false;
      }
    },
    doUploadImagesToBed: async (imageItem, forceUpload) => {
      const pageId = await getPageId(true, props.pageId);
      const attrs = await siyuanApi.getBlockAttrs(pageId);
      await picgoPostApi.uploadSingleImageToBed(pageId, attrs, imageItem, forceUpload);
    },
    onImageUrlCopy: (url) => {
      if (isBrowser()) {
        const mdUrl = `![](${url})`;
        copyToClipboardInBrowser(mdUrl);
      }
    },
    handlePictureCardPreview: (url) => {
      picgoManageData.dialogImageUrl = url != null ? url : "";
      picgoManageData.dialogPreviewVisible = true;
    }
  };
  return {
    picgoManageData,
    picgoManageMethods
  };
};
const _hoisted_1 = {
  class: "picgo-body"
};
const _hoisted_2 = {
  class: "upload-status"
};
const _hoisted_3 = {
  class: "picgo-opt-btn"
};
const _hoisted_4 = {
  class: "file-list"
};
const _hoisted_5 = ["src", "alt"];
const _hoisted_6 = ["src"];
const _hoisted_7 = {
  key: 0,
  class: "log-msg"
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PicgoIndex",
  props: {
    pageId: {
      type: String,
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const refSelectedFiles = ref();
    const {
      picgoCommonData,
      picgoCommonMethods
    } = usePicgoCommon();
    const {
      picgoInitMethods
    } = usePicgoInitPage(props, {
      picgoCommonMethods
    });
    const {
      picgoUploadData,
      picgoUploadMethods
    } = usePicgoUpload(props, {
      picgoCommonMethods
    }, {
      refSelectedFiles
    });
    const {
      picgoManageData,
      picgoManageMethods
    } = usePicgoManage(props, {
      picgoCommonMethods,
      picgoInitMethods
    });
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_el_tooltip = ElTooltip;
      const _component_el_popover = ElPopover;
      const _component_el_dialog = ElDialog;
      const _component_el_input = ElInput;
      return openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", _hoisted_2, [createVNode(_component_el_button, {
        text: "",
        loading: unref(picgoCommonData).isUploadLoading
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("picgo.upload.status")), 1)]),
        _: 1
      }, 8, ["loading"])]), createBaseVNode("blockquote", _hoisted_3, [createBaseVNode("input", {
        type: "file",
        accept: "image/png, image/gif, image/jpeg",
        onChange: _cache[0] || (_cache[0] = (...args) => unref(picgoUploadMethods).doUploadPicSelected && unref(picgoUploadMethods).doUploadPicSelected(...args)),
        multiple: "",
        ref_key: "refSelectedFiles",
        ref: refSelectedFiles
      }, null, 544), unref(isElectron) ? (openBlock(), createBlock(_component_el_tooltip, {
        key: 0,
        class: "box-item",
        effect: "dark",
        content: _ctx.$t("picgo.upload.select.pic"),
        placement: "top-start"
      }, {
        default: withCtx(() => [createVNode(_component_el_button, {
          type: "warning",
          onClick: unref(picgoUploadMethods).bindFileControl
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-file-import"
          })]),
          _: 1
        }, 8, ["onClick"])]),
        _: 1
      }, 8, ["content"])) : createCommentVNode("", true), createVNode(_component_el_tooltip, {
        class: "box-item",
        effect: "dark",
        content: _ctx.$t("picgo.upload.clipboard"),
        placement: "top-start"
      }, {
        default: withCtx(() => [createVNode(_component_el_button, {
          type: "primary",
          onClick: unref(picgoUploadMethods).doUploadPicFromClipboard
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-paste"
          })]),
          _: 1
        }, 8, ["onClick"])]),
        _: 1
      }, 8, ["content"]), createVNode(_component_el_tooltip, {
        class: "box-item",
        effect: "dark",
        content: _ctx.$t("picgo.upload.onclick"),
        placement: "top-start"
      }, {
        default: withCtx(() => [createVNode(_component_el_button, {
          type: "success",
          onClick: unref(picgoManageMethods).handleUploadAllImagesToBed
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-upload"
          })]),
          _: 1
        }, 8, ["onClick"])]),
        _: 1
      }, 8, ["content"]), createCommentVNode("", true), createVNode(_component_el_tooltip, {
        class: "box-item",
        effect: "dark",
        content: _ctx.$t("picgo.pic.setting"),
        placement: "top-start"
      }, {
        default: withCtx(() => [createVNode(_component_el_button, {
          type: "info",
          onClick: unref(picgoUploadMethods).handlePicgoSetting
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-gear"
          })]),
          _: 1
        }, 8, ["onClick"])]),
        _: 1
      }, 8, ["content"])]), createBaseVNode("ul", _hoisted_4, [(openBlock(true), createElementBlock(Fragment, null, renderList(unref(picgoCommonData).fileList.files, (f) => {
        return openBlock(), createElementBlock("li", {
          class: "file-list-item",
          key: f.name
        }, [createBaseVNode("div", null, [createBaseVNode("img", {
          src: f.url,
          alt: f.name
        }, null, 8, _hoisted_5)]), createBaseVNode("div", null, [createVNode(_component_el_tooltip, {
          content: f.isLocal ? _ctx.$t("picgo.download.local.to.bed") : "\u91CD\u65B0\u4E0A\u4F20",
          class: "box-item",
          effect: "dark",
          placement: "bottom",
          "popper-class": "publish-menu-tooltip"
        }, {
          default: withCtx(() => [createVNode(_component_el_button, {
            onClick: ($event) => unref(picgoManageMethods).handleUploadCurrentImageToBed(f)
          }, {
            default: withCtx(() => [createVNode(_component_font_awesome_icon, {
              icon: f.isLocal ? "fa-solid fa-upload" : "fa-solid fa-arrow-rotate-right"
            }, null, 8, ["icon"])]),
            _: 2
          }, 1032, ["onClick"])]),
          _: 2
        }, 1032, ["content"]), createCommentVNode("", true), createVNode(_component_el_popover, {
          placement: "bottom",
          title: f.name,
          width: unref(picgoCommonData).popWidth,
          trigger: "hover",
          content: f.url
        }, {
          reference: withCtx(() => [createVNode(_component_el_button, {
            onClick: ($event) => unref(picgoManageMethods).onImageUrlCopy(f.url)
          }, {
            default: withCtx(() => [createVNode(_component_font_awesome_icon, {
              icon: "fa-solid fa-file-lines"
            })]),
            _: 2
          }, 1032, ["onClick"])]),
          _: 2
        }, 1032, ["title", "width", "content"]), createVNode(_component_el_tooltip, {
          content: _ctx.$t("picgo.pic.preview"),
          class: "box-item",
          effect: "dark",
          placement: "bottom",
          "popper-class": "publish-menu-tooltip"
        }, {
          default: withCtx(() => [createVNode(_component_el_button, {
            onClick: ($event) => unref(picgoManageMethods).handlePictureCardPreview(f.url)
          }, {
            default: withCtx(() => [createVNode(_component_font_awesome_icon, {
              icon: "fa-solid fa-magnifying-glass"
            })]),
            _: 2
          }, 1032, ["onClick"])]),
          _: 2
        }, 1032, ["content"])])]);
      }), 128))]), createVNode(_component_el_dialog, {
        modelValue: unref(picgoManageData).dialogPreviewVisible,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => unref(picgoManageData).dialogPreviewVisible = $event),
        title: _ctx.$t("picgo.pic.preview") + " - " + unref(picgoManageData).dialogImageUrl
      }, {
        default: withCtx(() => [createBaseVNode("img", {
          "w-full": "",
          src: unref(picgoManageData).dialogImageUrl,
          alt: "Preview Image",
          class: "img-big-preview"
        }, null, 8, _hoisted_6)]),
        _: 1
      }, 8, ["modelValue", "title"]), createVNode(_component_el_dialog, {
        modelValue: unref(picgoUploadData).dialogPicgoSettingFormVisible,
        "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => unref(picgoUploadData).dialogPicgoSettingFormVisible = $event),
        title: _ctx.$t("picgo.pic.setting")
      }, {
        default: withCtx(() => [createVNode(_sfc_main$1)]),
        _: 1
      }, 8, ["modelValue", "title"]), unref(picgoCommonData).showDebugMsg ? (openBlock(), createElementBlock("div", _hoisted_7, [createVNode(_component_el_input, {
        type: "textarea",
        autosize: {
          minRows: 5,
          maxRows: 10
        },
        modelValue: unref(picgoCommonData).loggerMsg,
        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => unref(picgoCommonData).loggerMsg = $event)
      }, null, 8, ["modelValue"])])) : createCommentVNode("", true)]);
    };
  }
});
const PicgoIndex_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as _
};
