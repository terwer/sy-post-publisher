var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { L as LogFactory, B as isEmptyObject, i as isInSiyuanNewWinBrowser, S as SiYuanApi, l as isEmptyString, C as CONSTANTS, aq as parseJSONObj, w as getSiyuanCfg, v as pathJoin, x as isElectron, ar as getSiyuanNewWinDataDir, as as isFileExist, at as toJSONString } from "./AppLayout.vue_vue_type_script_setup_true_lang-182c0c92.js";
import { m as md5 } from "./vendor_blueimp-md5-es6-056b4f91.js";
import { C as CommonblogApi } from "./commonblogApi-30249c8d.js";
import { E as ElMessage } from "./vendor_element-plus-1f908931.js";
import { M as defineComponent, y as unref, O as openBlock, P as createElementBlock, W as createBaseVNode, $ as toDisplayString, _ as createTextVNode } from "./vendor-03279a5a.js";
class PicgoPostResult {
  constructor() {
    __publicField(this, "flag");
    __publicField(this, "mdContent");
  }
}
const getFileHash = (filename) => {
  return md5(filename);
};
class ImageItem {
  constructor(originUrl, url, isLocal) {
    __publicField(this, "name");
    __publicField(this, "hash");
    __publicField(this, "originUrl");
    __publicField(this, "url");
    __publicField(this, "isLocal");
    this.originUrl = originUrl;
    this.name = originUrl.substring(originUrl.lastIndexOf("/") + 1);
    this.hash = getFileHash(this.name);
    this.url = url;
    this.isLocal = isLocal;
  }
}
class ImageParser {
  constructor() {
    __publicField(this, "logger", LogFactory.getLogger("utils/parser/imageParser.ts"));
  }
  hasExternalImages(content) {
    const flag = false;
    const imgRegex = /!\[.*]\((http|https):\/.*\/.*\)/g;
    const matches = content.match(imgRegex);
    if (matches != null && matches.length > 0) {
      return true;
    }
    const imgBase64Regex = /!\[.*]\((data:image):\/.*\/.*\)/g;
    const base64Matches = content.match(imgBase64Regex);
    if (base64Matches != null && base64Matches.length > 0) {
      return true;
    }
    return flag;
  }
  removeImages(content) {
    let newcontent = content;
    newcontent = newcontent.replace(/!\[.*]\((http|https):\/.*\/.*\)/g, "");
    return newcontent;
  }
  parseImagesToArray(content) {
    let ret = [];
    const remoteImages = this.parseRemoteImagesToArray(content);
    const localImages = this.parseLocalImagesToArray(content);
    ret = [.../* @__PURE__ */ new Set([...remoteImages, ...localImages])];
    return ret;
  }
  parseRemoteImagesToArray(content) {
    let ret = [];
    let newcontent = content;
    const imgRegex = /!\[.*]\((http|https):\/.*\/.*\)/g;
    const matches = newcontent.match(imgRegex);
    if (matches == null || matches.length === 0) {
      return ret;
    }
    for (let i = 0; i < matches.length; i++) {
      const match = matches[i];
      this.logger.debug("img=>", match);
      const src = match.replace(/!\[.*]\(/g, "").replace(/\)/, "");
      ret.push(src);
      this.logger.debug("src=>", src);
    }
    this.logger.debug("\u8FDC\u7A0B\u56FE\u7247\u89E3\u6790\u5B8C\u6BD5.");
    return ret;
  }
  parseLocalImagesToArray(content) {
    let ret = [];
    let newcontent = content;
    const imgRegex = /!\[.*]\(assets\/.*\..*\)/g;
    const matches = newcontent.match(imgRegex);
    if (matches == null || matches.length === 0) {
      return ret;
    }
    for (let i = 0; i < matches.length; i++) {
      const match = matches[i];
      this.logger.debug("img=>", match);
      const src = match.replace(/!\[.*]\(/g, "").replace(/\)/, "");
      if (src.includes("http")) {
        continue;
      }
      ret.push(src);
      this.logger.debug("src=>", src);
    }
    return ret;
  }
  replaceImagesWithImageItemArray(content, replaceMap) {
    let newcontent = content;
    const imgRegex = /!\[.*]\(assets\/.*\..*\)/g;
    const matches = newcontent.match(imgRegex);
    if (matches == null || matches.length === 0) {
      this.logger.warn("\u672A\u5339\u914D\u5230\u672C\u5730\u56FE\u7247\uFF0C\u5C06\u4E0D\u4F1A\u66FF\u6362\u56FE\u7247\u94FE\u63A5");
      return newcontent;
    }
    for (let i = 0; i < matches.length; i++) {
      const img = matches[i];
      this.logger.debug("img=>", img);
      const src = img.replace(/!\[.*]\(/g, "").replace(/\)/, "");
      this.logger.debug("src=>", src);
      let newImg;
      const tempImageItem = new ImageItem(src, "", true);
      const hash = tempImageItem.hash;
      const replaceImageItem = replaceMap[hash];
      newImg = `![](${replaceImageItem.url})`;
      this.logger.debug("newImg=>", newImg);
      newcontent = newcontent.replaceAll(img, newImg);
    }
    return newcontent;
  }
}
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
class PicgoPostApi {
  constructor() {
    __publicField(this, "logger", LogFactory.getLogger("utils/platform/picgo/picgoPostApi.ts"));
    __publicField(this, "imageParser");
    __publicField(this, "siyuanApi");
    this.imageParser = new ImageParser();
    this.siyuanApi = new SiYuanApi();
  }
  async doConvertImagesToImagesItemArray(attrs, retImgs) {
    let ret = [];
    for (let i = 0; i < retImgs.length; i++) {
      const retImg = retImgs[i];
      let isLocal = false;
      const originUrl = retImg;
      let imgUrl = retImg;
      let fileMap = {};
      if (!(imgUrl.indexOf("http") > -1) && imgUrl.indexOf("assets") > -1) {
        this.logger.debug("attrs=>", attrs);
        if (!isEmptyString(attrs[CONSTANTS.PICGO_FILE_MAP_KEY])) {
          fileMap = parseJSONObj(attrs[CONSTANTS.PICGO_FILE_MAP_KEY]);
          this.logger.debug("fileMap=>", fileMap);
        }
        const baseUrl = getSiyuanCfg().baseUrl;
        imgUrl = pathJoin(baseUrl, "/" + imgUrl);
        isLocal = true;
      }
      const imageItem = new ImageItem(originUrl, imgUrl, isLocal);
      if (fileMap[imageItem.hash]) {
        const newImageItem = fileMap[imageItem.hash];
        this.logger.debug("newImageItem=>", newImageItem);
        if (!newImageItem.isLocal) {
          imageItem.isLocal = false;
          imageItem.url = newImageItem.url;
        }
      }
      this.logger.debug("imageItem=>", imageItem);
      ret.push(imageItem);
    }
    return ret;
  }
  async uploadPostImagesToBed(pageId, attrs, mdContent) {
    let ret = new PicgoPostResult();
    const localImages = this.imageParser.parseLocalImagesToArray(mdContent);
    const uniqueLocalImages = [.../* @__PURE__ */ new Set([...localImages])];
    this.logger.debug("uniqueLocalImages=>", uniqueLocalImages);
    if (uniqueLocalImages.length == 0) {
      ret.flag = false;
      ret.mdContent = mdContent;
      return Promise.resolve(ret);
    }
    try {
      const imageItemArray = await this.doConvertImagesToImagesItemArray(attrs, uniqueLocalImages);
      let replaceMap = {};
      let hasLocalImages = false;
      for (let i = 0; i < imageItemArray.length; i++) {
        const imageItem = imageItemArray[i];
        if (imageItem.originUrl.includes("assets")) {
          replaceMap[imageItem.hash] = imageItem;
        }
        if (!imageItem.isLocal) {
          this.logger.warn("\u5DF2\u7ECF\u4E0A\u4F20\u8FC7\u56FE\u5E8A\uFF0C\u8BF7\u52FF\u91CD\u590D\u4E0A\u4F20=>", imageItem.originUrl);
          continue;
        }
        hasLocalImages = true;
        await this.uploadSingleImageToBed(pageId, attrs, imageItem);
        const newattrs = await this.siyuanApi.getBlockAttrs(pageId);
        const newfileMap = parseJSONObj(newattrs[CONSTANTS.PICGO_FILE_MAP_KEY]);
        const newImageItem = newfileMap[imageItem.hash];
        replaceMap[imageItem.hash] = new ImageItem(newImageItem.originUrl, newImageItem.url, false);
      }
      if (!hasLocalImages) {
        ElMessage.warning("\u672A\u53D1\u73B0\u672C\u5730\u56FE\u7247\uFF0C\u4E0D\u4E0A\u4F20");
      }
      this.logger.info("\u51C6\u5907\u66FF\u6362\u6B63\u6587\u56FE\u7247\uFF0CreplaceMap=>", JSON.stringify(replaceMap));
      this.logger.info("\u5F00\u59CB\u66FF\u6362\u6B63\u6587\uFF0C\u539F\u6587=>", JSON.stringify({
        mdContent
      }));
      ret.mdContent = this.imageParser.replaceImagesWithImageItemArray(mdContent, replaceMap);
      this.logger.info("\u56FE\u7247\u94FE\u63A5\u66FF\u6362\u5B8C\u6210\uFF0C\u65B0\u6B63\u6587=>", JSON.stringify({
        newmdContent: ret.mdContent
      }));
      ret.flag = true;
      this.logger.info("\u6B63\u6587\u66FF\u6362\u5B8C\u6210\uFF0C\u6700\u7EC8\u7ED3\u679C=>", ret);
    } catch (e) {
      this.logger.info("\u6587\u7AE0\u56FE\u7247\u4E0A\u4F20\u5931\u8D25=>", e);
    }
    return Promise.resolve(ret);
  }
  async uploadSingleImageToBed(pageId, attrs, imageItem, forceUpload) {
    var _a;
    const mapInfoStr = (_a = attrs[CONSTANTS.PICGO_FILE_MAP_KEY]) != null ? _a : "{}";
    const fileMap = parseJSONObj(mapInfoStr);
    this.logger.warn("fileMap=>", fileMap);
    const filePaths = [];
    if (forceUpload !== true && !imageItem.isLocal) {
      this.logger.warn("\u975E\u672C\u5730\u56FE\u7247\uFF0C\u5FFD\u7565=>", imageItem.url);
      return;
    }
    let imageFullPath;
    if (isElectron) {
      const imagePath = imageItem.originUrl.substring(imageItem.originUrl.indexOf("assets"), imageItem.originUrl.length);
      const dataDir = getSiyuanNewWinDataDir();
      imageFullPath = `${dataDir}/${imagePath}`;
      if (!isFileExist(imageFullPath)) {
        imageFullPath = imageItem.url;
      }
    } else {
      imageFullPath = imageItem.url;
    }
    this.logger.warn("isElectron=>" + isElectron + ", imageFullPath=>", imageFullPath);
    filePaths.push(imageFullPath);
    const imageJson = await uploadByPicGO(filePaths);
    this.logger.warn("\u56FE\u7247\u4E0A\u4F20\u5B8C\u6210\uFF0CimageJson=>", imageJson);
    const imageJsonObj = JSON.parse(imageJson);
    if (imageJsonObj && imageJsonObj.length > 0) {
      const img = imageJsonObj[0];
      if (!img || !img.imgUrl || isEmptyString(img.imgUrl)) {
        throw new Error("\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\uFF0C\u53EF\u80FD\u539F\u56E0\uFF1APicGO\u914D\u7F6E\u9519\u8BEF\u6216\u8005\u8BE5\u5E73\u53F0\u4E0D\u652F\u6301\u56FE\u7247\u8986\u76D6\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E\u6216\u8005\u5C1D\u8BD5\u4E0A\u4F20\u65B0\u56FE\u7247\u3002\u8BF7\u6253\u5F00picgo.log\u67E5\u770B\u66F4\u591A\u4FE1\u606F");
      }
      const newImageItem = new ImageItem(imageItem.originUrl, img.imgUrl, false);
      fileMap[newImageItem.hash] = newImageItem;
    } else {
      throw new Error("\u56FE\u7247\u4E0A\u4F20\u5931\u8D25\uFF0C\u53EF\u80FD\u539F\u56E0\uFF1APicGO\u914D\u7F6E\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E\u3002\u8BF7\u6253\u5F00picgo.log\u67E5\u770B\u66F4\u591A\u4FE1\u606F");
    }
    this.logger.warn("newFileMap=>", fileMap);
    const newFileMapStr = toJSONString(fileMap);
    await this.siyuanApi.setBlockAttrs(pageId, {
      [CONSTANTS.PICGO_FILE_MAP_KEY]: newFileMapStr
    });
  }
}
const _hoisted_1 = {
  key: 0
};
const _hoisted_2 = /* @__PURE__ */ createBaseVNode("p", null, null, -1);
const _hoisted_3 = /* @__PURE__ */ createBaseVNode("p", null, [/* @__PURE__ */ createTextVNode(" \u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1A"), /* @__PURE__ */ createBaseVNode("a", {
  target: "_blank",
  href: "https://docs.publish.terwer.space/post/picgo-diagram-bed-use-zxqqec.html"
}, "PicoGO\u914D\u7F6E\u5728\u7EBF\u6587\u6863")], -1);
const _hoisted_4 = /* @__PURE__ */ createBaseVNode("h1", null, "\u9884\u8BA10.7.0\u4F1A\u65B0\u589E\u6BD4\u8F83\u53CB\u597D\u7684\u56FE\u5F62\u5316\u914D\u7F6E\u9875\u9762\uFF0C\u656C\u8BF7\u671F\u5F85\u3002", -1);
const _hoisted_5 = {
  key: 1
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "PicgoSetting",
  setup(__props) {
    return (_ctx, _cache) => {
      return unref(isElectron) ? (openBlock(), createElementBlock("div", _hoisted_1, [createBaseVNode("div", null, toDisplayString(_ctx.$t("picgo.siyuan.tip")) + " \u3002", 1), _hoisted_2, _hoisted_3, _hoisted_4])) : (openBlock(), createElementBlock("div", _hoisted_5, [createBaseVNode("p", null, toDisplayString(_ctx.$t("picgo.chrome.tip")) + " \u3002", 1), createBaseVNode("p", null, toDisplayString(_ctx.$t("picgo.pic.setting.no.tip")) + " \u3002", 1)]));
    };
  }
});
export {
  ImageParser as I,
  PicgoPostApi as P,
  _sfc_main as _,
  ImageItem as a,
  uploadByPicGO as u
};
