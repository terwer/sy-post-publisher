import { k as ElAlert, a as ElButton, j as ElInput, E as ElMessage } from "./vendor_element-plus-378ccace.js";
import { B as isEmptyObject, i as isInSiyuanNewWinBrowser, L as LogFactory, ao as isElectron, k as inSiyuan, b as getPageId, ap as removeBom, S as SiYuanApi, y as isBrowser } from "./AppLayout.vue_vue_type_script_setup_true_lang-d3a631b8.js";
import { u as useI18n } from "./vendor_vue-i18n-951bfa8c.js";
import { C as CommonblogApi } from "./commonblogApi-053acd88.js";
import { M as defineComponent, u as ref, ac as reactive, z as watch, A as onMounted, O as openBlock, P as createElementBlock, a1 as createVNode, y as unref, W as createBaseVNode, U as withCtx, _ as createTextVNode, a0 as Fragment, ao as renderList } from "./vendor-037de53c.js";
class PicGoUploadApi extends CommonblogApi {
  async upload(input) {
    let ret = JSON.stringify([]);
    const apiUrl = "http://127.0.0.1:36677/upload";
    const fetchOps = {
      method: "POST"
    };
    let data;
    if (input) {
      data = {
        list: input
      };
    }
    if (!isEmptyObject(data)) {
      Object.assign(fetchOps, {
        body: JSON.stringify(data)
      });
    }
    Object.assign(fetchOps, {
      headers: {
        "Content-Type": "application/json",
        "User-Agent": "Terwer/0.1.0"
      }
    });
    this.logger.debug("\u8C03\u7528HTTP\u8BF7\u6C42\u4E0A\u4F20\u56FE\u7247\u5230PicGO\uFF0CapiUrl=>", apiUrl);
    this.logger.debug("\u8C03\u7528HTTP\u8BF7\u6C42\u4E0A\u4F20\u56FE\u7247\u5230PicGO\uFF0CfetchOps=>", fetchOps);
    const resJson = await this.doFetch(apiUrl, fetchOps);
    this.logger.debug("resJson=>", JSON.stringify(resJson));
    if (resJson.success) {
      const rtnArray = [];
      if (resJson.result && resJson.result.length > 0) {
        resJson.result.forEach((img) => {
          const rtnItem = {
            fileName: img.substring(img.lastIndexOf("/") + 1),
            imgUrl: img
          };
          rtnArray.push(rtnItem);
        });
      }
      ret = JSON.stringify(rtnArray);
    } else {
      throw new Error("\u8C03\u7528HTTP\u4E0A\u4F20\u5230PicGO\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E=>" + resJson.message);
    }
    return Promise.resolve(ret);
  }
}
const picGoUploadApi = new PicGoUploadApi();
async function uploadByPicGO(input) {
  if (input) {
    if (isInSiyuanNewWinBrowser()) {
      return uploadNewWinByPicGO(input);
    } else {
      return picGoUploadApi.upload(input);
    }
  } else {
    if (isInSiyuanNewWinBrowser()) {
      return uploadNewWinClipboardByPicGO();
    } else {
      return picGoUploadApi.upload();
    }
  }
}
async function uploadNewWinByPicGO(input) {
  return await window.terwer.picgoExtension.upload(input);
}
async function uploadNewWinClipboardByPicGO() {
  return await window.terwer.picgoExtension.uploadFormClipboard();
}
const _hoisted_1 = {
  class: "picgo-body"
};
const _hoisted_2 = {
  class: "upload-btn-list"
};
const _hoisted_3 = {
  class: "upload-control"
};
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("label", {
  for: "fileInput",
  class: "custom-file-input"
}, "\u9009\u62E9\u56FE\u7247", -1);
const _hoisted_5 = {
  class: "upload-control"
};
const _hoisted_6 = {
  class: "upload-control"
};
const _hoisted_7 = {
  class: "file-list"
};
const _hoisted_8 = ["src", "alt"];
const _hoisted_9 = {
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
    const logger = LogFactory.getLogger("components/picgo/PicgoIndex.vue");
    const {
      t
    } = useI18n();
    const siyuanApi = new SiYuanApi();
    const isUploadLoading = ref(false);
    const fileList = reactive({
      files: []
    });
    const loggerMsg = ref("");
    const doAfterUpload = (imgInfos) => {
      loggerMsg.value = imgInfos;
      const imageJson = JSON.parse(imgInfos);
      if (imageJson && imageJson.length > 0) {
        imageJson.forEach((img) => {
          const rtnItem = {
            name: img.fileName,
            url: img.imgUrl
          };
          loggerMsg.value += "\nnewItem=>" + JSON.stringify(rtnItem);
          fileList.files.push(rtnItem);
        });
      }
      ElMessage.success(t("main.opt.success"));
    };
    const onRequest = async (event) => {
      isUploadLoading.value = true;
      try {
        const fileList2 = event.target.files;
        console.log("onRequest fileList=>", fileList2);
        if (!fileList2 || fileList2.length === 0) {
          ElMessage.error("\u8BF7\u9009\u62E9\u56FE\u7247");
          isUploadLoading.value = false;
          return;
        }
        if (!inSiyuan() && !isInSiyuanNewWinBrowser()) {
          ElMessage.error("\u975Eelectron\u73AF\u5883\u53EA\u80FD\u901A\u8FC7\u526A\u8D34\u677F\u4E0A\u4F20");
          isUploadLoading.value = false;
          return;
        }
        const filePaths = [];
        for (let i = 0; i < fileList2.length; i++) {
          if (fileList2.item(i).path) {
            filePaths.push(fileList2.item(i).path);
            logger.debug("\u8DEF\u5F84\u4E0D\u4E3A\u7A7A");
          } else {
            logger.debug("\u8DEF\u5F84\u4E3A\u7A7A\uFF0C\u5FFD\u7565");
          }
        }
        const imgInfos = await uploadByPicGO(filePaths);
        doAfterUpload(imgInfos);
        isUploadLoading.value = false;
      } catch (e) {
        if (e.toString().indexOf("cancel") <= -1) {
          ElMessage({
            type: "error",
            message: t("main.opt.failure") + "=>" + e
          });
          logger.error(t("main.opt.failure") + "=>" + e);
        }
        isUploadLoading.value = false;
      }
    };
    const doUploadPicFromClipboard = async () => {
      isUploadLoading.value = true;
      try {
        const imgInfos = await uploadByPicGO();
        doAfterUpload(imgInfos);
        isUploadLoading.value = false;
      } catch (e) {
        if (e.toString().indexOf("cancel") <= -1) {
          ElMessage({
            type: "error",
            message: t("main.opt.failure") + "=>" + e
          });
          logger.error(t("main.opt.failure") + "=>", e);
        }
        isUploadLoading.value = false;
      }
    };
    const onImageUrlCopy = (url) => {
      if (isBrowser()) {
        const mdUrl = `![](${url})`;
        navigator.clipboard.writeText(mdUrl).then(function() {
          ElMessage.success(t("main.copy.success"));
        }, function(err) {
          ElMessage.error(t("main.copy.failure") + err);
        });
      }
    };
    const initPage = async () => {
      const pageId = await getPageId(true, props.pageId);
      const imageBlocks = await siyuanApi.getImageBlocksByID(pageId);
      logger.debug("\u67E5\u8BE2\u6587\u7AE0\u4E2D\u7684\u56FE\u7247\u5757=>", imageBlocks);
      if (!imageBlocks || imageBlocks.length === 0) {
        return;
      }
      imageBlocks.forEach((page) => {
        const imgUrl = removeBom(page.content);
        const imageItem = {
          name: imgUrl.substring(imgUrl.lastIndexOf("/") + 1),
          url: imgUrl
        };
        logger.debug("imageItem=>", imageItem);
        fileList.files.push(imageItem);
      });
    };
    watch(() => props.pageId, (oldValue, newValue) => {
      initPage();
      logger.debug("Picgo\u521D\u59CB\u5316");
    });
    onMounted(async () => {
      await initPage();
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_button = ElButton;
      const _component_el_input = ElInput;
      return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_el_alert, {
        class: "top-version-tip",
        title: unref(isElectron) ? _ctx.$t("picgo.siyuan.tip") : _ctx.$t("picgo.chrome.tip"),
        type: "info",
        closable: false
      }, null, 8, ["title"]), createBaseVNode("div", _hoisted_2, [createBaseVNode("div", _hoisted_3, [createBaseVNode("label", null, [_hoisted_4, createBaseVNode("input", {
        type: "file",
        accept: "image/png, image/gif, image/jpeg",
        onChange: onRequest,
        multiple: "",
        id: "fileInput"
      }, null, 32)])]), createBaseVNode("div", _hoisted_5, [createVNode(_component_el_button, {
        type: "primary",
        onClick: doUploadPicFromClipboard
      }, {
        default: withCtx(() => [createTextVNode("\u526A\u8D34\u677F\u56FE\u7247 ")]),
        _: 1
      })]), createBaseVNode("div", _hoisted_6, [createVNode(_component_el_button, {
        text: "",
        loading: isUploadLoading.value
      }, {
        default: withCtx(() => [createTextVNode("\u4E0A\u4F20\u72B6\u6001")]),
        _: 1
      }, 8, ["loading"])])]), createBaseVNode("ul", _hoisted_7, [(openBlock(true), createElementBlock(Fragment, null, renderList(fileList.files, (f) => {
        return openBlock(), createElementBlock("li", {
          class: "file-list-item",
          key: f.name
        }, [createBaseVNode("img", {
          src: f.url,
          alt: f.name
        }, null, 8, _hoisted_8), createVNode(_component_el_input, {
          "model-value": f.url,
          onClick: ($event) => onImageUrlCopy(f.url)
        }, null, 8, ["model-value", "onClick"])]);
      }), 128))]), createBaseVNode("div", _hoisted_9, [createVNode(_component_el_input, {
        type: "textarea",
        autosize: {
          minRows: 5,
          maxRows: 10
        },
        modelValue: loggerMsg.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => loggerMsg.value = $event)
      }, null, 8, ["modelValue"])])]);
    };
  }
});
const PicgoIndex_vue_vue_type_style_index_0_lang = "";
export {
  _sfc_main as _
};
