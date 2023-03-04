var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { L as LogFactory, v as SiYuanApi, l as isEmptyString, C as CONSTANTS, as as parseJSONObj, at as getSiyuanCfg, K as pathJoin, aq as isElectron, am as getSiyuanNewWinDataDir, au as isFileExist, ar as picgoUtil, av as toJSONString } from "./AppLayout.vue_vue_type_script_setup_true_lang-0e4e5141.js";
import { m as md5 } from "./vendor_blueimp-md5-es6-056b4f91.js";
import { E as ElMessage } from "./vendor_element-plus-f0c88bcb.js";
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
      this.logger.debug("attrs=>", attrs);
      if (!isEmptyString(attrs[CONSTANTS.PICGO_FILE_MAP_KEY])) {
        fileMap = parseJSONObj(attrs[CONSTANTS.PICGO_FILE_MAP_KEY]);
        this.logger.debug("fileMap=>", fileMap);
      }
      if (/^assets/.test(originUrl)) {
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
      imageItem.url = decodeURIComponent(imageItem.url);
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
      this.logger.debug("\u51C6\u5907\u66FF\u6362\u6B63\u6587\u56FE\u7247\uFF0CreplaceMap=>", JSON.stringify(replaceMap));
      this.logger.debug("\u5F00\u59CB\u66FF\u6362\u6B63\u6587\uFF0C\u539F\u6587=>", JSON.stringify({
        mdContent
      }));
      ret.mdContent = this.imageParser.replaceImagesWithImageItemArray(mdContent, replaceMap);
      this.logger.debug("\u56FE\u7247\u94FE\u63A5\u66FF\u6362\u5B8C\u6210\uFF0C\u65B0\u6B63\u6587=>", JSON.stringify({
        newmdContent: ret.mdContent
      }));
      ret.flag = true;
      this.logger.debug("\u6B63\u6587\u66FF\u6362\u5B8C\u6210\uFF0C\u6700\u7EC8\u7ED3\u679C=>", ret);
    } catch (e) {
      this.logger.error("\u6587\u7AE0\u56FE\u7247\u4E0A\u4F20\u5931\u8D25=>", e);
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
    const imageJson = await picgoUtil.uploadByPicGO(filePaths);
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
export {
  ImageParser as I,
  PicgoPostApi as P,
  ImageItem as a
};
