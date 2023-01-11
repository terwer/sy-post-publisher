var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { L as LogFactory, S as SiYuanApi, A as API_TYPE_CONSTANTS, o as appendStr, e as getPublishCfg, r as removeTitleNumber, q as renderHTML, s as removeWidgetTag, t as removeH1, l as isEmptyString, u as getJSONConf, v as pathJoin, w as getSiyuanCfg, x as isElectron, c as isInChromeExtension, y as isBrowser, z as SubPlatformType, B as isEmptyObject, P as PlatformType } from "./AppLayout.vue_vue_type_script_setup_true_lang-63b8852c.js";
import { c3 as Octokit } from "./vendor-2ec86a49.js";
import { g as gBase64 } from "./vendor_js-base64-904ab953.js";
import "./vendor_sax-8f0ba4c8.js";
import { S as SimpleXmlRpcClient } from "./vendor_simple-xmlrpc-d5a3cbb2.js";
import "./vendor_cross-fetch-e4e57030.js";
import { C as CommonblogApi } from "./commonblogApi-389f5cec.js";
const POST_STATUS_PUBLISH = "publish";
const POST_TYPE_DRAFT = "draft";
const POST_TYPE_INHERIT = "inherit";
const POST_STATUS_CONSTANTS = {
  POST_STATUS_PUBLISH,
  POST_TYPE_DRAFT,
  POST_TYPE_INHERIT
};
class Post {
  constructor() {
    __publicField(this, "postid");
    __publicField(this, "title");
    __publicField(this, "mt_keywords");
    __publicField(this, "link");
    __publicField(this, "permalink");
    __publicField(this, "shortDesc");
    __publicField(this, "description");
    __publicField(this, "mt_excerpt");
    __publicField(this, "wp_slug");
    __publicField(this, "dateCreated");
    __publicField(this, "categories");
    __publicField(this, "cate_slugs");
    __publicField(this, "mt_text_more");
    __publicField(this, "post_status");
    __publicField(this, "wp_password");
    this.postid = "";
    this.title = "";
    this.mt_keywords = "";
    this.permalink = "";
    this.description = "";
    this.wp_slug = "";
    this.dateCreated = new Date();
    this.categories = [];
    this.cate_slugs = [];
    this.post_status = POST_STATUS_CONSTANTS.POST_STATUS_PUBLISH;
    this.wp_password = "";
  }
}
class UserBlog {
  constructor() {
    __publicField(this, "blogid");
    __publicField(this, "url");
    __publicField(this, "blogName");
    __publicField(this, "isAdmin");
    __publicField(this, "xmlrpc");
    this.blogid = "";
    this.url = "";
    this.blogName = "";
  }
}
class SiYuanApiAdaptor {
  constructor() {
    __publicField(this, "logger", LogFactory.getLogger("utils/platform/siyuan/siYuanApiAdaptor.ts"));
    __publicField(this, "siyuanApi");
    this.siyuanApi = new SiYuanApi();
  }
  async getUsersBlogs() {
    var _a;
    const result = [];
    const userBlog = new UserBlog();
    userBlog.blogid = API_TYPE_CONSTANTS.API_TYPE_SIYUAN;
    userBlog.blogName = API_TYPE_CONSTANTS.API_TYPE_SIYUAN;
    userBlog.url = (_a = { "VITE_LOG_INFO_ENABLED": "false", "VITE_SIYUAN_API_URL": "http://127.0.0.1:6806", "VITE_SIYUAN_CONFIG_TOKEN": "", "VITE_MIDDLEWARE_URL": "https://api.terwer.space/api/middleware" }.SIYUAN_API_URL) != null ? _a : "";
    result.push(userBlog);
    return result;
  }
  async getRecentPostsCount(keyword) {
    return await this.siyuanApi.getRootBlocksCount(keyword != null ? keyword : "");
  }
  async getRecentPosts(numOfPosts, page, keyword) {
    const result = [];
    let pg = 0;
    if (page) {
      pg = page;
    }
    const k = keyword != null ? keyword : "";
    const siyuanPosts = await this.siyuanApi.getRootBlocks(pg, numOfPosts, k);
    for (let i = 0; i < siyuanPosts.length; i++) {
      const siyuanPost = siyuanPosts[i];
      const attrs = await this.siyuanApi.getBlockAttrs(siyuanPost.root_id);
      const page2 = await this.getPost(siyuanPost.root_id);
      const customSlug = attrs["custom-slug"] || "";
      const commonPost = new Post();
      commonPost.postid = siyuanPost.root_id;
      commonPost.title = siyuanPost.content;
      commonPost.permalink = customSlug === "" ? appendStr("/post/", siyuanPost.root_id) : appendStr("/post/", customSlug, ".html");
      commonPost.mt_keywords = page2.mt_keywords;
      commonPost.description = page2.description;
      result.push(commonPost);
    }
    return result;
  }
  async getPost(postid, useSlug) {
    var _a;
    const publishCfg = getPublishCfg();
    let pid = postid;
    if (useSlug) {
      const pidObj = await this.siyuanApi.getBlockBySlug(postid);
      if (pidObj) {
        pid = pidObj.root_id;
      }
    }
    const siyuanPost = await this.siyuanApi.getBlockByID(pid);
    if (!siyuanPost) {
      throw new Error("\u6587\u7AE0\u4E0D\u5B58\u5B58\u5728\uFF0Cpostid=>" + pid);
    }
    const attrs = await this.siyuanApi.getBlockAttrs(pid);
    const md = await this.siyuanApi.exportMdContent(pid);
    let isPublished = true;
    const publishStatus = attrs["custom-publish-status"] || "draft";
    if (publishStatus === "secret") {
      isPublished = false;
    }
    const postPassword = attrs["custom-post-password"] || "";
    const shortDesc = attrs["custom-desc"] || "";
    let title = (_a = siyuanPost.content) != null ? _a : "";
    if (publishCfg.fixTitle) {
      title = removeTitleNumber(title);
    }
    let html = renderHTML(md.content);
    html = removeWidgetTag(html);
    if (publishCfg.fixTitle) {
      html = removeH1(html);
    }
    const commonPost = new Post();
    commonPost.postid = siyuanPost.root_id || "";
    commonPost.title = title || "";
    commonPost.description = html || "";
    commonPost.shortDesc = shortDesc || "";
    commonPost.mt_keywords = attrs.tags || "";
    commonPost.post_status = isPublished ? POST_STATUS_CONSTANTS.POST_STATUS_PUBLISH : POST_STATUS_CONSTANTS.POST_TYPE_DRAFT;
    commonPost.wp_password = postPassword;
    return commonPost;
  }
  async editPost(postid, post, publish) {
    return false;
  }
  async newPost(post, publish) {
    return "";
  }
  async deletePost(postid) {
    return false;
  }
  async getCategories() {
    return [];
  }
  async getPreviewUrl(postid) {
    return "";
  }
  async getSubPostCount(postid) {
    return await this.siyuanApi.getSubdocCount(postid);
  }
  async getSubPosts(postid, numOfPosts, page, keyword) {
    const result = [];
    let pg = 0;
    if (page !== 0) {
      pg = page;
    }
    const k = keyword != null ? keyword : "";
    const siyuanPosts = await this.siyuanApi.getSubdocs(postid, pg, numOfPosts, k);
    this.logger.debug("siyuanPosts=>", siyuanPosts);
    for (let i = 0; i < siyuanPosts.length; i++) {
      const siyuanPost = siyuanPosts[i];
      const attrs = await this.siyuanApi.getBlockAttrs(siyuanPost.root_id);
      const page2 = await this.getPost(siyuanPost.root_id);
      const customSlug = attrs["custom-slug"] || "";
      const commonPost = new Post();
      commonPost.postid = siyuanPost.root_id;
      commonPost.title = siyuanPost.content;
      commonPost.permalink = customSlug === "" ? appendStr("/post/", siyuanPost.root_id) : appendStr("/post/", customSlug, ".html");
      commonPost.mt_keywords = page2.mt_keywords;
      commonPost.description = page2.description;
      result.push(commonPost);
    }
    return result;
  }
}
class GithubApi {
  constructor(githubCfg) {
    __publicField(this, "logger");
    __publicField(this, "githubCfg");
    __publicField(this, "octokit");
    this.logger = LogFactory.getLogger("utils/platform/github/githubApi.ts");
    this.githubCfg = githubCfg;
    this.octokit = new Octokit({
      auth: githubCfg.githubToken
    });
  }
  async getPageSha(docPath) {
    let sha;
    const data = await this.getPageData(docPath);
    if (data) {
      sha = data.sha;
    }
    return sha;
  }
  async getPageData(docPath) {
    let data;
    if (isEmptyString(this.githubCfg.githubUser) || isEmptyString(this.githubCfg.githubRepo)) {
      throw new Error("\u5206\u7C7B\u83B7\u53D6\u5931\u8D25");
    }
    const route = "GET /repos/" + this.githubCfg.githubUser + "/" + this.githubCfg.githubRepo + "/contents/" + docPath + "?ref=" + this.githubCfg.defaultBranch;
    this.logger.debug("getPage route=>", route);
    const res = await this.octokit.request(route, {
      owner: this.githubCfg.githubUser,
      repo: this.githubCfg.githubRepo,
      path: docPath
    });
    this.logger.debug("getPage res=>", res);
    if (res) {
      data = res.data;
    }
    return data;
  }
  async createOrUpdatePage(docPath, mdContent, sha) {
    let data;
    const base64 = gBase64.toBase64(mdContent);
    const route = "PUT /repos/" + this.githubCfg.githubUser + "/" + this.githubCfg.githubRepo + "/contents/" + docPath;
    const options = {
      owner: this.githubCfg.githubUser,
      repo: this.githubCfg.githubRepo,
      path: docPath,
      message: this.githubCfg.defaultMsg,
      committer: {
        name: this.githubCfg.author,
        email: this.githubCfg.email
      },
      content: base64,
      branch: this.githubCfg.defaultBranch
    };
    if (sha) {
      Object.assign(options, {
        sha
      });
    }
    const res = await this.octokit.request(route, options);
    this.logger.debug("createOrUpdatePage res=>", res);
    if (res) {
      data = res.data;
    }
    return data;
  }
  async deletePage(docPath, sha) {
    let data;
    const route = "DELETE /repos/" + this.githubCfg.githubUser + "/" + this.githubCfg.githubRepo + "/contents/" + docPath;
    const options = {
      owner: this.githubCfg.githubUser,
      repo: this.githubCfg.githubRepo,
      path: docPath,
      message: this.githubCfg.defaultMsg,
      committer: {
        name: this.githubCfg.author,
        email: this.githubCfg.email
      },
      sha,
      branch: this.githubCfg.defaultBranch
    };
    const res = await this.octokit.request(route, options);
    this.logger.debug("deletePage res=>", res);
    if (res) {
      data = res.data;
    }
    return data;
  }
  async publishGithubPage(docPath, mdContent) {
    const sha = void 0;
    const res = await this.createOrUpdatePage(docPath, mdContent, sha);
    this.logger.debug("Github publishPage,res=>", res);
    return res;
  }
  async updateGithubPage(docPath, mdContent) {
    const sha = await this.getPageSha(docPath);
    const res = await this.createOrUpdatePage(docPath, mdContent, sha);
    this.logger.debug("Github updatePage,res=>", res);
    return res;
  }
  async deleteGithubPage(docPath) {
    const sha = await this.getPageSha(docPath);
    const res = await this.deletePage(docPath, sha);
    this.logger.debug("Github deletePage,res=>", res);
    return res;
  }
  async getGithubPageTreeNode(docPath) {
    const data = await this.getPageData(docPath);
    const treeNode = [];
    if (data && data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const node = {
          value: item.path,
          label: item.name,
          isLeaf: item.name.indexOf(".md") > -1
        };
        treeNode.push(node);
      }
      this.logger.debug("getPageTreeNode,data=>", data);
    }
    return treeNode;
  }
}
class GithubApiAdaptor {
  constructor(apiType) {
    __publicField(this, "logger");
    __publicField(this, "apiType");
    __publicField(this, "cfg");
    __publicField(this, "githubApi");
    this.logger = LogFactory.getLogger("utils/platform/github/githubApiAdaptor.ts");
    this.apiType = apiType;
    const cfg = getJSONConf(apiType);
    this.cfg = cfg;
    this.githubApi = new GithubApi(cfg);
  }
  async getUsersBlogs() {
    const result = [];
    const userblog = new UserBlog();
    userblog.blogid = this.apiType;
    userblog.blogName = pathJoin(this.cfg.githubUser, "/" + this.cfg.githubRepo);
    userblog.url = pathJoin("https://github.com/" + this.cfg.githubUser, "/" + this.cfg.githubRepo);
    result.push(userblog);
    return result;
  }
  async getPost(postid, useSlug) {
    const commonPost = new Post();
    const page = await this.githubApi.getPageData(postid);
    commonPost.postid = page.path;
    commonPost.title = page.path;
    commonPost.description = gBase64.fromBase64(page.content);
    commonPost.link = page.path;
    commonPost.permalink = page.html_url;
    this.logger.debug("page=>", page);
    return commonPost;
  }
  async newPost(post, publish) {
    var _a;
    const res = await this.githubApi.publishGithubPage(post.postid, post.description);
    if (!((_a = res == null ? void 0 : res.content) == null ? void 0 : _a.path)) {
      throw new Error(this.apiType + "\u8C03\u7528API\u5F02\u5E38");
    }
    return res.content.path;
  }
  async editPost(postid, post, publish) {
    var _a;
    const res = await this.githubApi.updateGithubPage(post.postid, post.description);
    if (!((_a = res == null ? void 0 : res.content) == null ? void 0 : _a.path)) {
      throw new Error("Hugo\u8C03\u7528API\u5F02\u5E38");
    }
    return true;
  }
  async deletePost(postid) {
    var _a;
    const res = await this.githubApi.deleteGithubPage(postid);
    if (!((_a = res == null ? void 0 : res.commit) == null ? void 0 : _a.sha)) {
      throw new Error("Hugo\u8C03\u7528API\u5F02\u5E38");
    }
    return true;
  }
  async getCategories() {
    return await Promise.resolve([]);
  }
  async getPreviewUrl(postid) {
    var _a;
    let previewUrl;
    const newPostid = postid.substring(postid.lastIndexOf("/") + 1).replace(".md", "");
    previewUrl = this.cfg.previewUrl.replace("[postid]", newPostid);
    previewUrl = pathJoin((_a = this.cfg.home) != null ? _a : "", previewUrl);
    return previewUrl;
  }
  async getRecentPosts(numOfPosts, page, keyword) {
    return [];
  }
  async getRecentPostsCount(keyword) {
    return 0;
  }
}
const GET_USERS_BLOGS = "blogger.getUsersBlogs";
const NEW_POST = "metaWeblog.newPost";
const EDIT_POST = "metaWeblog.editPost";
const DELETE_POST = "blogger.deletePost";
const GET_RECENT_POSTS = "metaWeblog.getRecentPosts";
const GET_POST = "metaWeblog.getPost";
const GET_CATEGORIES = "metaWeblog.getCategories";
const METAWEBLOG_METHOD_CONSTANTS = {
  GET_USERS_BLOGS,
  NEW_POST,
  EDIT_POST,
  DELETE_POST,
  GET_RECENT_POSTS,
  GET_POST,
  GET_CATEGORIES
};
class CategoryInfo {
  constructor() {
    __publicField(this, "categoryId");
    __publicField(this, "parentId");
    __publicField(this, "description");
    __publicField(this, "categoryDescription");
    __publicField(this, "categoryName");
    __publicField(this, "htmlUrl");
    __publicField(this, "rssUrl");
    this.categoryId = "";
    this.parentId = "0";
    this.description = "";
    this.categoryDescription = "";
    this.categoryName = "";
    this.htmlUrl = "";
    this.rssUrl = "";
  }
}
const logger$2 = LogFactory.getLogger("libs/simple-xmlrpc/impl/nodeXmlrpc.ts");
async function fetchNode(apiUrl, reqMethod, reqParams) {
  try {
    logger$2.debug("SimpleXmlRpcClient\u5F00\u59CB");
    logger$2.debug("xmlrpcNodeParams.reqMethod=>", reqMethod);
    logger$2.debug("xmlrpcNodeParams.reqParams=>", reqParams);
    const client = new SimpleXmlRpcClient(apiUrl);
    const ret = await client.methodCall(reqMethod, reqParams);
    logger$2.debug("SimpleXmlRpcClient\u7ED3\u675F\uFF0Cret=>", ret);
    return ret;
  } catch (e) {
    logger$2.error(e);
    throw new Error("\u8BF7\u6C42\u5904\u7406\u5F02\u5E38");
  }
}
const logger$1 = LogFactory.getLogger("libs/simple-xmlrpc/impl/middlewareXmlrpc.ts");
async function fetchMiddleware(apiUrl, reqMethod, reqParams) {
  const middlewareUrl = getSiyuanCfg().middlewareUrl;
  const middleApiUrl = middlewareUrl + "/xmlrpc";
  logger$1.debug("apiUrl=>", apiUrl);
  const fetchCORSParams = {
    reqMethod,
    reqParams
  };
  logger$1.debug("fetchCORSParams=>", fetchCORSParams);
  const data = {
    fetchParams: {
      apiUrl,
      fetchCORSParams
    }
  };
  const middleFetchOption = {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  };
  logger$1.debug("middleApiUrl=>", middleApiUrl);
  logger$1.debug("middleFetchOption=>", middleFetchOption);
  const response = await fetch(middleApiUrl, middleFetchOption);
  const resText = await response.text();
  const ret = JSON.parse(resText) || [];
  if (ret.faultCode) {
    this.logger.error("\u4EE3\u7406\u8BF7\u6C42\u5F02\u5E38\uFF0C\u9519\u8BEF\u4FE1\u606F\u5982\u4E0B\uFF1A", ret.faultString);
  }
  return ret;
}
const logger = LogFactory.getLogger("libs/simple-xmlrpc/impl/chromeXmlrpc.ts");
async function doChromeFetch(apiUrl, reqMethod, reqParams) {
  try {
    return await fetchMiddleware(apiUrl, reqMethod, reqParams);
  } catch (e) {
    throw new Error(e);
  }
}
async function fetchChrome(apiUrl, reqMethod, reqParams) {
  logger.debug("fetchChrome apiUrl=>", apiUrl);
  const fetchCORSParams = {
    reqMethod,
    reqParams
  };
  logger.debug("fetchChrome fetchCORSParams=>", fetchCORSParams);
  const result = await doChromeFetch(apiUrl, reqMethod, reqParams);
  if (!result || result === "") {
    throw new Error("\u8BF7\u6C42\u9519\u8BEF\u6216\u8005\u8FD4\u56DE\u7ED3\u679C\u4E3A\u7A7A");
  }
  logger.debug("fetchCustom result=>", result);
  return result;
}
class CommonXmlrpcClient {
  constructor(apiType, apiUrl, username, password) {
    __publicField(this, "logger");
    __publicField(this, "apiType");
    __publicField(this, "apiUrl");
    __publicField(this, "username");
    __publicField(this, "password");
    this.logger = LogFactory.getLogger("utils/platform/metaweblog/xmlrpc.ts");
    this.apiType = apiType;
    this.apiUrl = apiUrl;
    this.username = username;
    this.password = password;
  }
  async fetchXmlrpc(apiUrl, reqMethod, reqParams) {
    let result;
    if (isElectron) {
      this.logger.info("\u5F53\u524D\u5904\u4E8E\u6302\u4EF6\u6A21\u5F0F\uFF0C\u4F7F\u7528electron\u7684fetch\u83B7\u53D6\u6570\u636E");
      result = await fetchNode(apiUrl, reqMethod, reqParams);
    } else if (isInChromeExtension()) {
      this.logger.info("\u5F53\u524D\u5904\u4E8EChrome\u63D2\u4EF6\u4E2D\uFF0C\u9700\u8981\u6A21\u62DFfetch\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898");
      result = await fetchChrome(apiUrl, reqMethod, reqParams);
    } else {
      this.logger.info("\u5F53\u524D\u5904\u4E8E\u670D\u52A1\u5668\u4F3A\u670D\u6A21\u5F0F\uFF0C\u5DF2\u5F00\u542F\u8BF7\u6C42\u4EE3\u7406\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898");
      result = await fetchMiddleware(apiUrl, reqMethod, reqParams);
    }
    if (result === "") {
      throw new Error("\u8BF7\u6C42\u9519\u8BEF\u6216\u8005\u8FD4\u56DE\u7ED3\u679C\u4E3A\u7A7A");
    }
    this.logger.debug("\u6700\u7EC8\u8FD4\u56DE\u7ED9\u524D\u7AEF\u7684\u6570\u636E=>", result);
    return result;
  }
  async methodCall(reqMethod, reqParams) {
    const result = await this.fetchXmlrpc(this.apiUrl, reqMethod, reqParams);
    this.logger.debug("\u8BF7\u6C42\u7ED3\u679C\uFF0Cresult=>", result);
    return result;
  }
}
class MetaWeblogApi {
  constructor(apiType) {
    __publicField(this, "logger");
    __publicField(this, "apiType");
    __publicField(this, "cfg");
    __publicField(this, "commonXmlrpcClient");
    this.logger = LogFactory.getLogger("utils/platform/metaweblog/metaWeblogApi.ts");
    this.apiType = apiType;
    this.cfg = getJSONConf(apiType);
    this.commonXmlrpcClient = new CommonXmlrpcClient(this.apiType, this.cfg.apiUrl, this.cfg.username, this.cfg.password);
  }
  async getUsersBlogs(appkey, username, password) {
    const usersBlogs = [];
    const ret = await this.commonXmlrpcClient.methodCall(METAWEBLOG_METHOD_CONSTANTS.GET_USERS_BLOGS, [this.apiType, username, password]);
    this.logger.debug("ret=>", ret);
    const dataArr = ret;
    for (let i = 0; i < dataArr.length; i++) {
      const userBlog = new UserBlog();
      const item = dataArr[i];
      userBlog.blogid = item.blogid || "";
      userBlog.url = item.url;
      userBlog.blogName = item.blogName;
      usersBlogs.push(userBlog);
    }
    return usersBlogs;
  }
  async getRecentPosts(appkey, username, password, numOfPosts) {
    return [];
  }
  async getPost(postid, username, password) {
    const result = new Post();
    try {
      const ret = await this.commonXmlrpcClient.methodCall(METAWEBLOG_METHOD_CONSTANTS.GET_POST, [postid, username, password]);
      const dataObj = ret;
      this.logger.debug("\u83B7\u53D6\u7684\u6587\u7AE0\u4FE1\u606F\uFF0CdataObj=>", dataObj);
      result.categories = dataObj.categories;
    } catch (e) {
      this.logger.error("\u6587\u7AE0\u4FE1\u606F\u83B7\u53D6\u5931\u8D25", e);
    }
    return result;
  }
  async newPost(blogid, username, password, post, publish) {
    if (!publish) {
      post.post_status = POST_STATUS_CONSTANTS.POST_TYPE_DRAFT;
    }
    const postStruct = this.createPostStruct(post);
    this.logger.debug("postStruct=>", postStruct);
    let ret = await this.commonXmlrpcClient.methodCall(METAWEBLOG_METHOD_CONSTANTS.NEW_POST, [this.apiType, username, password, postStruct, publish]);
    ret = ret.replace(/"/g, "");
    this.logger.debug("ret=>", ret);
    return ret;
  }
  async editPost(postid, username, password, post, publish) {
    if (!publish) {
      post.post_status = POST_STATUS_CONSTANTS.POST_TYPE_DRAFT;
    }
    const postStruct = this.createPostStruct(post);
    this.logger.debug("postStruct=>", postStruct);
    const ret = await this.commonXmlrpcClient.methodCall(METAWEBLOG_METHOD_CONSTANTS.EDIT_POST, [postid, username, password, postStruct, publish]);
    this.logger.debug("ret=>", ret);
    return ret;
  }
  async deletePost(appKey, postid, username, password, publish) {
    const ret = await this.commonXmlrpcClient.methodCall(METAWEBLOG_METHOD_CONSTANTS.DELETE_POST, [appKey, postid, username, password, publish]);
    this.logger.debug("ret=>", ret);
    return ret;
  }
  createPostStruct(post) {
    var _a;
    const postObj = {};
    if (!isEmptyString(post.title)) {
      Object.assign(postObj, {
        title: post.title
      });
    }
    if (!isEmptyString(post.mt_keywords)) {
      Object.assign(postObj, {
        mt_keywords: post.mt_keywords
      });
    }
    if (!isEmptyString(post.description)) {
      Object.assign(postObj, {
        description: post.description
      });
    }
    if (!isEmptyString(post.wp_slug)) {
      Object.assign(postObj, {
        wp_slug: post.wp_slug
      });
    }
    if (!isBrowser()) {
      Object.assign(postObj, {
        dateCreated: post.dateCreated || new Date()
      });
    }
    Object.assign(postObj, {
      categories: post.categories || []
    });
    Object.assign(postObj, {
      post_status: (_a = post.post_status) != null ? _a : POST_STATUS_CONSTANTS.POST_STATUS_PUBLISH
    });
    if (!isEmptyString(post.wp_password)) {
      Object.assign(postObj, {
        wp_password: post.wp_password
      });
    }
    return postObj;
  }
  async getCategories(blogid, username, password) {
    const result = [];
    try {
      const ret = await this.commonXmlrpcClient.methodCall(METAWEBLOG_METHOD_CONSTANTS.GET_CATEGORIES, [this.apiType, username, password]);
      const dataArr = ret;
      this.logger.debug("\u83B7\u53D6\u7684\u5206\u7C7B\u4FE1\u606F\uFF0CdataArr=>", dataArr);
      dataArr.forEach((item) => {
        const cat = new CategoryInfo();
        cat.description = item.description;
        cat.categoryId = item.categoryId;
        result.push(cat);
      });
    } catch (e) {
      this.logger.error("\u5206\u7C7B\u83B7\u53D6\u5931\u8D25", e);
    }
    return result;
  }
}
class MetaWeblogApiAdaptor {
  constructor(apiType) {
    __publicField(this, "metaWeblogApi");
    __publicField(this, "username");
    __publicField(this, "logger");
    __publicField(this, "cfg");
    __publicField(this, "password");
    __publicField(this, "appkey");
    this.logger = LogFactory.getLogger("utils/platform/metaweblog/metaWeblogApiAdaptor.ts");
    this.cfg = getJSONConf(apiType);
    this.metaWeblogApi = new MetaWeblogApi(apiType);
    this.username = this.cfg.username;
    this.password = this.cfg.password;
    this.appkey = apiType;
  }
  async getUsersBlogs() {
    let result = [];
    result = await this.metaWeblogApi.getUsersBlogs(this.appkey, this.username, this.password);
    this.logger.debug("getUsersBlogs=>", result);
    return result;
  }
  async getRecentPostsCount(keyword) {
    return await Promise.resolve(0);
  }
  async getRecentPosts(numOfPosts) {
    const result = [];
    let blogPosts;
    blogPosts = await this.metaWeblogApi.getRecentPosts(this.appkey, this.username, this.password, numOfPosts);
    for (let i = 0; i < blogPosts.length; i++) {
      const blogPost = blogPosts[i];
      const commonPost = new Post();
      commonPost.postid = blogPost.postid;
      commonPost.title = blogPost.title;
      commonPost.mt_keywords = blogPost.mt_keywords;
      commonPost.permalink = blogPost.permalink;
      commonPost.description = blogPost.description;
      commonPost.wp_slug = blogPost.wp_slug;
      commonPost.dateCreated = blogPost.dateCreated;
      commonPost.categories = blogPost.categories;
      result.push(commonPost);
    }
    return result;
  }
  async getPost(postid) {
    let data;
    data = await this.metaWeblogApi.getPost(postid, this.username, this.password);
    return data;
  }
  async editPost(postid, post, publish) {
    let data;
    data = await this.metaWeblogApi.editPost(postid, this.username, this.password, post, publish != null ? publish : true);
    return data;
  }
  async newPost(post, publish) {
    let data;
    data = await this.metaWeblogApi.newPost(this.appkey, this.username, this.password, post, publish != null ? publish : true);
    return data;
  }
  async deletePost(postid) {
    let data;
    data = await this.metaWeblogApi.deletePost(this.appkey, postid, this.username, this.password, true);
    return data;
  }
  async getCategories() {
    let cats;
    cats = await this.metaWeblogApi.getCategories(this.appkey, this.username, this.password);
    this.logger.debug("\u83B7\u53D6\u5206\u7C7B\u5217\u8868=>", cats);
    return cats;
  }
  async getPreviewUrl(postid) {
    var _a;
    const postUrl = this.cfg.previewUrl.replace("[postid]", postid);
    const previewUrl = pathJoin((_a = this.cfg.home) != null ? _a : "", postUrl);
    this.logger.debug("previewUrl", previewUrl);
    return previewUrl;
  }
}
class VuepressApiV1 extends GithubApi {
  constructor(vuepressCfg) {
    super(vuepressCfg);
    __publicField(this, "vuepressCfg");
    this.logger = LogFactory.getLogger("utils/platform/github/vuepress/vuepressApiV1.ts");
    this.vuepressCfg = vuepressCfg;
  }
  async getGithubPageTreeNode(docPath) {
    const data = await this.getPageData(docPath);
    const treeNode = [];
    if (data && data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        if (item.name.indexOf(".vuepress") > -1) {
          continue;
        }
        if (item.name.indexOf("@pages") > -1) {
          continue;
        }
        if (item.name.indexOf("_posts") > -1) {
          continue;
        }
        const node = {
          value: item.path,
          label: item.name,
          isLeaf: item.name.indexOf(".md") > -1
        };
        treeNode.push(node);
      }
      this.logger.debug("getPageTreeNode,data=>", data);
    }
    return treeNode;
  }
}
const VUEPRESS_POSTID_KEY = "custom-vuepress-slug";
const HUGO_POSTID_KEY = "custom-hugo-slug";
const HEXO_POSTID_KEY = "custom-hexo-slug";
const JEKYLL_POSTID_KEY = "custom-jekyll-slug";
const JVUE_POSTID_KEY = "custom-jvue-post-id";
const CONFLUENCE_POSTID_KEY = "custom-conf-post-id";
const CNBLOGS_POSTID_KEY = "custom-cnblogs-post-id";
const WORDPRESS_POSTID_KEY = "custom-wordpress-post-id";
const LIANDI_POSTID_KEY = "custom-liandi-post-id";
const YUQUE_POSTID_KEY = "custom-yuque-post-id";
const KMS_POSTID_KEY = "custom-kms-post-id";
const WECHAT_POSTID_KEY = "custom-wechat-post-id";
const POSTID_KEY_CONSTANTS = {
  VUEPRESS_POSTID_KEY,
  HUGO_POSTID_KEY,
  HEXO_POSTID_KEY,
  JEKYLL_POSTID_KEY,
  JVUE_POSTID_KEY,
  CONFLUENCE_POSTID_KEY,
  CNBLOGS_POSTID_KEY,
  WORDPRESS_POSTID_KEY,
  LIANDI_POSTID_KEY,
  YUQUE_POSTID_KEY,
  KMS_POSTID_KEY,
  WECHAT_POSTID_KEY
};
class GithubCfg {
  constructor(home, blogName, githubUser, githubRepo, githubToken) {
    __publicField(this, "githubUser");
    __publicField(this, "githubRepo");
    __publicField(this, "githubToken");
    __publicField(this, "defaultBranch");
    __publicField(this, "defaultPath");
    __publicField(this, "defaultMsg");
    __publicField(this, "author");
    __publicField(this, "email");
    __publicField(this, "posidKey");
    __publicField(this, "home");
    __publicField(this, "blogName");
    __publicField(this, "previewMdUrl");
    __publicField(this, "previewUrl");
    __publicField(this, "baseUrl");
    __publicField(this, "mdFilenameRule");
    __publicField(this, "useMetaJson");
    __publicField(this, "apiStatus");
    this.home = home;
    this.blogName = blogName;
    this.githubUser = githubUser;
    this.githubRepo = githubRepo;
    this.githubToken = githubToken;
    this.defaultBranch = "main";
    this.defaultPath = "docs/_posts";
    this.defaultMsg = "auto published by sy-post-publisher";
    this.author = "terwer";
    this.email = "youweics@163.com";
    this.previewMdUrl = "";
    this.previewUrl = "";
    this.baseUrl = "https://github.com";
    this.mdFilenameRule = "[filename].md";
    this.useMetaJson = false;
    this.apiStatus = false;
  }
}
class VuepressCfg extends GithubCfg {
  constructor() {
    super("", SubPlatformType.Github_Vuepress, "", "", "");
    this.defaultPath = "docs";
    this.posidKey = POSTID_KEY_CONSTANTS.VUEPRESS_POSTID_KEY;
    this.previewMdUrl = "/[user]/[repo]/blob/[branch]/[docpath]";
    this.previewUrl = "/post/[postid].html";
    this.mdFilenameRule = "[filename].md";
  }
}
class VuepressApiAdaptor extends GithubApiAdaptor {
  constructor() {
    super(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS);
    __publicField(this, "vuepressApi");
    const vuepressCfg = new VuepressCfg();
    this.vuepressApi = new VuepressApiV1(vuepressCfg);
  }
}
class HugoApiAdaptor extends GithubApiAdaptor {
  constructor() {
    super(API_TYPE_CONSTANTS.API_TYPE_HUGO);
  }
}
class HexoApiAdaptor extends GithubApiAdaptor {
  constructor() {
    super(API_TYPE_CONSTANTS.API_TYPE_HEXO);
  }
}
class JekyllApiAdaptor extends GithubApiAdaptor {
  constructor() {
    super(API_TYPE_CONSTANTS.API_TYPE_JEKYLL);
  }
}
class JVueApiAdaptor extends MetaWeblogApiAdaptor {
  constructor() {
    super(API_TYPE_CONSTANTS.API_TYPE_JVUE);
  }
}
class ConfApiAdaptor extends MetaWeblogApiAdaptor {
  constructor() {
    super(API_TYPE_CONSTANTS.API_TYPE_CONFLUENCE);
  }
}
class CnblogsApiAdaptor extends MetaWeblogApiAdaptor {
  constructor() {
    super(API_TYPE_CONSTANTS.API_TYPE_CNBLOGS);
  }
}
class WordpressApiAdaptor extends MetaWeblogApiAdaptor {
  constructor() {
    super(API_TYPE_CONSTANTS.API_TYPE_WORDPRESS);
  }
}
class CommonblogApiAdaptor {
  constructor(apiType) {
    __publicField(this, "apiType");
    __publicField(this, "cfg");
    this.apiType = apiType;
    this.cfg = getJSONConf(apiType);
  }
  async deletePost(postid) {
    throw new Error("\u8BE5\u529F\u80FD\u672A\u5B9E\u73B0\uFF0C\u8BF7\u5728\u5B50\u7C7B\u91CD\u5199\u8BE5\u65B9\u6CD5");
  }
  async editPost(postid, post, publish) {
    throw new Error("\u8BE5\u529F\u80FD\u672A\u5B9E\u73B0\uFF0C\u8BF7\u5728\u5B50\u7C7B\u91CD\u5199\u8BE5\u65B9\u6CD5");
  }
  async getPost(postid, useSlug) {
    throw new Error("\u8BE5\u529F\u80FD\u672A\u5B9E\u73B0\uFF0C\u8BF7\u5728\u5B50\u7C7B\u91CD\u5199\u8BE5\u65B9\u6CD5");
  }
  async getRecentPosts(numOfPosts, page, keyword) {
    throw new Error("\u8BE5\u529F\u80FD\u672A\u5B9E\u73B0\uFF0C\u8BF7\u5728\u5B50\u7C7B\u91CD\u5199\u8BE5\u65B9\u6CD5");
  }
  async getUsersBlogs() {
    throw new Error("\u8BE5\u529F\u80FD\u672A\u5B9E\u73B0\uFF0C\u8BF7\u5728\u5B50\u7C7B\u91CD\u5199\u8BE5\u65B9\u6CD5");
  }
  async newPost(post, publish) {
    throw new Error("\u8BE5\u529F\u80FD\u672A\u5B9E\u73B0\uFF0C\u8BF7\u5728\u5B50\u7C7B\u91CD\u5199\u8BE5\u65B9\u6CD5");
  }
  async getCategories() {
    return [];
  }
  async getRecentPostsCount(keyword) {
    return 0;
  }
  async getPreviewUrl(postid) {
    return "";
  }
}
class LiandiApi extends CommonblogApi {
  constructor(baseUrl, username, token) {
    super();
    __publicField(this, "baseUrl");
    __publicField(this, "username");
    __publicField(this, "token");
    this.logger = LogFactory.getLogger("utils/platform/commonblog/liandi/liandiApi.ts");
    this.baseUrl = baseUrl;
    this.username = username;
    this.token = token;
  }
  async getUser() {
    const url = "/user";
    const data = {};
    return await this.liandiRequest(url, data, "GET", true);
  }
  async addArticle(title, content, tags) {
    const url = "/article";
    const data = {
      articleTitle: title,
      articleTags: tags,
      articleContent: content
    };
    await this.liandiRequest(url, data, "POST", true);
    const postid = await this.getFirstArticleId();
    this.logger.debug("liandi addArticle postid=>", postid);
    return postid;
  }
  async getFirstArticleId() {
    const url = "/user/" + this.username + "/articles?p=1";
    const data = {};
    const result = await this.liandiRequest(url, data, "GET", true);
    const articles = result.articles;
    if (articles.length === 0) {
      throw new Error("\u672A\u83B7\u53D6\u5230\u5E16\u5B50");
    }
    return articles[0].oId;
  }
  async updateArticle(articleId, title, content, tags) {
    const url = "/article/" + articleId;
    const data = {
      articleTitle: title,
      articleTags: tags,
      articleContent: content
    };
    await this.liandiRequest(url, data, "PUT", true);
    return true;
  }
  async liandiRequest(url, data, method, useToken) {
    const apiUrl = this.baseUrl + url;
    let m = "POST";
    if (method != null) {
      m = method;
    }
    const fetchOps = {
      method: m
    };
    if (!isEmptyObject(data)) {
      Object.assign(fetchOps, {
        body: JSON.stringify(data)
      });
    }
    if (useToken) {
      Object.assign(fetchOps, {
        headers: {
          Authorization: `token ${this.token}`,
          "User-Agent": "Terwer/0.1.0"
        }
      });
    }
    this.logger.debug("\u5411\u94FE\u6EF4\u8BF7\u6C42\u6570\u636E\uFF0CapiUrl=>", apiUrl);
    this.logger.debug("\u5411\u94FE\u6EF4\u8BF7\u6C42\u6570\u636E\uFF0CfetchOps=>", fetchOps);
    const resJson = await this.doFetch(apiUrl, fetchOps);
    this.logger.debug("\u5411\u94FE\u6EF4\u8BF7\u6C42\u6570\u636E\uFF0CresJson=>", resJson);
    if (resJson.code === 0) {
      return resJson.data;
    } else if (resJson.code === -1) {
      throw new Error(resJson.msg);
    } else {
      const msg = resJson.msg;
      if (!isEmptyString(msg)) {
        throw new Error(msg);
      }
      throw new Error("\u53D1\u5E03\u5E16\u5B50\u53D7\u9650\u6216\u8005\u7CFB\u7EDF\u5F02\u5E38");
    }
  }
}
class LiandiApiAdaptor extends CommonblogApiAdaptor {
  constructor() {
    var _a, _b;
    super(API_TYPE_CONSTANTS.API_TYPE_LIANDI);
    __publicField(this, "logger");
    __publicField(this, "liandiApi");
    this.logger = LogFactory.getLogger("utils/platform/commonblog/liandi/liandiApiAdaptor.ts");
    this.liandiApi = new LiandiApi(this.cfg.apiUrl, (_a = this.cfg.username) != null ? _a : "", (_b = this.cfg.token) != null ? _b : "");
  }
  async getUsersBlogs() {
    var _a, _b;
    const result = [];
    const user = await this.liandiApi.getUser();
    this.logger.debug("user=>", user);
    const userblog = new UserBlog();
    userblog.blogid = this.apiType;
    userblog.blogName = (_b = (_a = user.user.userName) != null ? _a : this.cfg.blogName) != null ? _b : "\u94FE\u6EF4";
    userblog.url = this.cfg.apiUrl;
    result.push(userblog);
    return result;
  }
  async getRecentPostsCount(keyword) {
    return 0;
  }
  async deletePost(postid) {
    throw new Error("\u94FE\u6EF4\u793E\u533AAPI\u4E0D\u652F\u6301\u5220\u9664\u5E16\u5B50");
  }
  async editPost(postid, post, publish) {
    const result = await this.liandiApi.updateArticle(postid, post.title, post.description, post.mt_keywords);
    this.logger.debug("liandi newPost=>", result);
    return result;
  }
  async newPost(post, publish) {
    const result = await this.liandiApi.addArticle(post.title, post.description, post.mt_keywords);
    this.logger.warn("liandi newPost=>", result);
    return result != null ? result : "";
  }
  async getPreviewUrl(postid) {
    var _a, _b;
    const purl = (_a = this.cfg.previewUrl) != null ? _a : "";
    const postUrl = purl.replace("[postid]", postid);
    return pathJoin((_b = this.cfg.home) != null ? _b : "", postUrl);
  }
}
class YuqueApi extends CommonblogApi {
  constructor(baseUrl, blogid, username, token) {
    super();
    __publicField(this, "baseUrl");
    __publicField(this, "blogid");
    __publicField(this, "username");
    __publicField(this, "token");
    this.logger = LogFactory.getLogger("utils/platform/commonblog/yuque/yuqueApi.ts");
    this.baseUrl = baseUrl;
    this.blogid = blogid;
    this.username = username;
    this.token = token;
  }
  async repos() {
    const url = "/users/" + this.username + "/repos";
    const data = {};
    return await this.yuqueRequest(url, data, "GET");
  }
  async addDoc(title, slug, content, repo) {
    let url = "/repos/" + this.blogid + "/docs";
    if (repo) {
      url = "/repos/" + repo + "/docs";
      this.logger.warn("yuque addDoc with repo", repo);
    }
    const data = {
      title,
      slug,
      format: "markdown",
      body: content
    };
    const result = await this.yuqueRequest(url, data, "POST");
    this.logger.debug("yuqueRequest addDoc=>", result);
    if (!result) {
      throw new Error("\u8BF7\u6C42\u8BED\u96C0API\u5F02\u5E38");
    }
    return appendStr(result.id, "");
  }
  async updateDoc(docId, title, slug, content, repo) {
    let url = "/repos/" + this.blogid + "/docs/" + docId;
    if (repo) {
      url = "/repos/" + repo + "/docs/" + docId;
      this.logger.warn("yuque updateDoc with repo", repo);
    }
    const data = {
      title,
      slug,
      body: content,
      _force_asl: 1
    };
    const result = await this.yuqueRequest(url, data, "PUT");
    if (!result) {
      throw new Error("\u8BF7\u6C42\u8BED\u96C0API\u5F02\u5E38");
    }
    return true;
  }
  async delDoc(docId, repo) {
    let url = "/repos/" + this.blogid + "/docs/" + docId;
    if (repo) {
      url = "/repos/" + repo + "/docs/" + docId;
      this.logger.warn("yuque delDoc with repo", repo);
    }
    const data = {};
    const result = await this.yuqueRequest(url, data, "DELETE");
    if (!result) {
      throw new Error("\u8BF7\u6C42\u8BED\u96C0API\u5F02\u5E38");
    }
    return true;
  }
  async getDoc(docId, repo) {
    let url = "/repos/" + this.blogid + "/docs/" + docId;
    if (repo) {
      url = "/repos/" + repo + "/docs/" + docId;
      this.logger.warn("yuque getDoc with repo", repo);
    }
    const data = {};
    const result = await this.yuqueRequest(url, data, "GET");
    if (!result) {
      throw new Error("\u8BF7\u6C42\u8BED\u96C0API\u5F02\u5E38");
    }
    return result;
  }
  async yuqueRequest(url, data, method) {
    const apiUrl = this.baseUrl + url;
    let m = "POST";
    if (method) {
      m = method;
    }
    const fetchOps = {
      method: m
    };
    if (!isEmptyObject(data)) {
      Object.assign(fetchOps, {
        body: JSON.stringify(data)
      });
    }
    Object.assign(fetchOps, {
      headers: {
        "Content-Type": "application/json",
        "X-Auth-Token": this.token,
        "User-Agent": "Terwer/0.1.0"
      }
    });
    this.logger.debug("\u5411\u8BED\u96C0\u8BF7\u6C42\u6570\u636E\uFF0CapiUrl=>", apiUrl);
    this.logger.debug("\u5411\u8BED\u96C0\u8BF7\u6C42\u6570\u636E\uFF0CfetchOps=>", fetchOps);
    const resJson = await this.doFetch(apiUrl, fetchOps);
    this.logger.debug("\u5411\u8BED\u96C0\u8BF7\u6C42\u6570\u636E\uFF0CresJson=>", resJson);
    return resJson.data ? resJson.data : null;
  }
}
class YuqueApiAdaptor extends CommonblogApiAdaptor {
  constructor() {
    var _a, _b, _c;
    super(API_TYPE_CONSTANTS.API_TYPE_YUQUE);
    __publicField(this, "logger");
    __publicField(this, "yuqueApi");
    this.logger = LogFactory.getLogger("utils/platform/commonblog/yuque/yuqueApiAdaptor.ts");
    this.yuqueApi = new YuqueApi(this.cfg.apiUrl, (_a = this.cfg.blogid) != null ? _a : "", (_b = this.cfg.username) != null ? _b : "", (_c = this.cfg.token) != null ? _c : "");
  }
  async getUsersBlogs() {
    const result = [];
    const repos = await this.yuqueApi.repos();
    this.logger.debug("repos=>", repos);
    repos.forEach((item) => {
      const userblog = new UserBlog();
      userblog.blogid = item.namespace;
      userblog.blogName = item.name;
      userblog.url = item.namespace;
      result.push(userblog);
    });
    return result;
  }
  async deletePost(postid) {
    const yuquePostidKey = this.getYuquePostKey(postid);
    return await this.yuqueApi.delDoc(yuquePostidKey.docId, yuquePostidKey.docRepo);
  }
  async editPost(postid, post, publish) {
    const yuquePostidKey = this.getYuquePostKey(postid);
    return await this.yuqueApi.updateDoc(yuquePostidKey.docId, post.title, post.wp_slug, post.description, yuquePostidKey.docRepo);
  }
  async newPost(post, publish) {
    if (post.cate_slugs != null && post.cate_slugs.length > 0) {
      const repo = post.cate_slugs[0];
      return await this.yuqueApi.addDoc(post.title, post.wp_slug, post.description, repo);
    } else {
      return await this.yuqueApi.addDoc(post.title, post.wp_slug, post.description);
    }
  }
  async getPost(postid, useSlug) {
    const yuquePostidKey = this.getYuquePostKey(postid);
    const yuqueDoc = await this.yuqueApi.getDoc(yuquePostidKey.docId, yuquePostidKey.docRepo);
    this.logger.debug("yuqueDoc=>", yuqueDoc);
    const commonPost = new Post();
    commonPost.title = yuqueDoc.title;
    commonPost.description = yuqueDoc.body;
    const book = yuqueDoc.book;
    const cats = [];
    const catSlugs = [];
    cats.push(book.name);
    commonPost.categories = cats;
    catSlugs.push(book.namespace);
    commonPost.cate_slugs = catSlugs;
    return commonPost;
  }
  async getCategories() {
    const cats = [];
    const repos = await this.yuqueApi.repos();
    this.logger.debug("yuque repos=>", repos);
    if (repos && repos.length > 0) {
      repos.forEach((repo) => {
        if (repo.type === "Book") {
          const cat = new CategoryInfo();
          cat.categoryId = repo.slug;
          cat.categoryName = repo.name;
          cat.description = repo.name;
          cat.categoryDescription = repo.name;
          cats.push(cat);
        }
      });
    }
    return cats;
  }
  async getPreviewUrl(postid) {
    var _a, _b, _c, _d;
    const purl = (_a = this.cfg.previewUrl) != null ? _a : "";
    const yuquePostidKey = this.getYuquePostKey(postid);
    const docId = yuquePostidKey.docId;
    const repo = (_c = (_b = yuquePostidKey.docRepo) != null ? _b : this.cfg.blogid) != null ? _c : "";
    const postUrl = purl.replace("[postid]", docId).replace("[notebook]", repo);
    return pathJoin((_d = this.cfg.home) != null ? _d : "", postUrl);
  }
  getYuquePostKey(postid) {
    let docId;
    let docRepo;
    if (postid.indexOf("_") > 0) {
      const idArr = postid.split("_");
      docId = idArr[0];
      docRepo = idArr[1];
    } else {
      docId = postid;
    }
    return {
      docId,
      docRepo
    };
  }
}
class KmsApi extends CommonblogApi {
  constructor(baseUrl, basicToken) {
    super();
    __publicField(this, "baseUrl");
    __publicField(this, "basicToken");
    this.baseUrl = baseUrl;
    this.basicToken = basicToken;
  }
  async addDoc(title, content) {
    const url = "/addDoc";
    const formJson = [{
      key: "fdDocTemplateId",
      value: "181f20dcfc5744e90b0b8254499b4af0"
    }, {
      key: "docSubject",
      value: title
    }, {
      key: "docContent",
      value: content
    }, {
      key: "fdDocCreator",
      value: "180f58069509ef61dd964994e4591dab"
    }, {
      key: "authorType",
      value: "1"
    }, {
      key: "docAuthor",
      value: "180f58069509ef61dd964994e4591dab"
    }];
    const result = await this.kmsRequestForm(url, formJson);
    return result.fdId;
  }
  async updateDoc(fdId, title, content) {
    const url = "/updateDoc";
    const formJson = [{
      key: "fdId",
      value: fdId
    }, {
      key: "docSubject",
      value: title
    }, {
      key: "docContent",
      value: content
    }];
    await this.kmsRequestForm(url, formJson);
    return true;
  }
  async delDoc(fdId) {
    const url = "/delDoc";
    const formJson = {
      fdId
    };
    await this.kmsRequestJson(url, formJson);
    return true;
  }
  async kmsRequestForm(url, formJson) {
    const apiUrl = this.baseUrl + url;
    const fetchOps = {
      headers: {
        Authorization: `Basic ${this.basicToken}`
      },
      method: "POST"
    };
    const json = await this.doFormFetch(apiUrl, fetchOps, formJson);
    const statusCode = json.code;
    const msg = json.msg;
    if (statusCode !== 200) {
      if (statusCode === 401) {
        throw new Error(appendStr("\u56E0\u6743\u9650\u4E0D\u8DB3\u64CD\u4F5C\u5DF2\u88AB\u7981\u6B62\uFF1A", msg));
      } else {
        throw new Error("\u8BF7\u6C42\u9519\u8BEF");
      }
    }
    return json.data;
  }
  async kmsRequestJson(url, formJson) {
    const apiUrl = this.baseUrl + url;
    const fetchOps = {
      body: JSON.stringify(formJson),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${this.basicToken}`
      },
      method: "POST"
    };
    const json = await this.doFetch(apiUrl, fetchOps);
    const statusCode = json.code;
    const msg = json.msg;
    if (statusCode !== 200) {
      if (statusCode === 401) {
        throw new Error(appendStr("\u56E0\u6743\u9650\u4E0D\u8DB3\u64CD\u4F5C\u5DF2\u88AB\u7981\u6B62\uFF1A", msg));
      } else {
        throw new Error("\u8BF7\u6C42\u9519\u8BEF");
      }
    }
    return json.data;
  }
}
class KmsApiAdaptor extends CommonblogApiAdaptor {
  constructor() {
    var _a, _b;
    super(API_TYPE_CONSTANTS.API_TYPE_KMS);
    __publicField(this, "kmsApi");
    const kmsUsername = (_a = this.cfg.username) != null ? _a : "";
    const kmsPassword = (_b = this.cfg.password) != null ? _b : "";
    const basicToken = gBase64.toBase64(`${kmsUsername}:${kmsPassword}`);
    this.kmsApi = new KmsApi(this.cfg.apiUrl, basicToken);
  }
  async getUsersBlogs() {
    const result = [];
    const userblog = new UserBlog();
    userblog.blogid = this.apiType;
    userblog.blogName = "KMS";
    userblog.url = this.cfg.apiUrl;
    result.push(userblog);
    return result;
  }
  async deletePost(postid) {
    return await this.kmsApi.delDoc(postid);
  }
  async editPost(postid, post, publish) {
    return await this.kmsApi.updateDoc(postid, post.title, post.description);
  }
  async newPost(post, publish) {
    return await this.kmsApi.addDoc(post.title, post.description);
  }
  async getPreviewUrl(postid) {
    var _a, _b;
    const purl = (_a = this.cfg.previewUrl) != null ? _a : "";
    const postUrl = purl.replace("[postid]", postid);
    return pathJoin((_b = this.cfg.home) != null ? _b : "", postUrl);
  }
}
class API {
  constructor(type) {
    __publicField(this, "type");
    __publicField(this, "apiAdaptor");
    this.type = type;
    if (type.includes("-")) {
      const typeArr = type.split("-");
      if (typeArr.length > 0) {
        const ptype = typeArr[0].toLowerCase();
        if (ptype.includes(PlatformType.Github.toLowerCase())) {
          this.apiAdaptor = new GithubApiAdaptor(type);
          return;
        } else if (ptype === PlatformType.Metaweblog.toLowerCase()) {
          this.apiAdaptor = new MetaWeblogApiAdaptor(type);
          return;
        } else if (ptype === PlatformType.Wordpress.toLowerCase()) {
          this.apiAdaptor = new MetaWeblogApiAdaptor(type);
          return;
        }
      }
    }
    switch (this.type) {
      case API_TYPE_CONSTANTS.API_TYPE_SIYUAN:
        this.apiAdaptor = new SiYuanApiAdaptor();
        break;
      case API_TYPE_CONSTANTS.API_TYPE_VUEPRESS:
        this.apiAdaptor = new VuepressApiAdaptor();
        break;
      case API_TYPE_CONSTANTS.API_TYPE_HUGO:
        this.apiAdaptor = new HugoApiAdaptor();
        break;
      case API_TYPE_CONSTANTS.API_TYPE_HEXO:
        this.apiAdaptor = new HexoApiAdaptor();
        break;
      case API_TYPE_CONSTANTS.API_TYPE_JEKYLL:
        this.apiAdaptor = new JekyllApiAdaptor();
        break;
      case API_TYPE_CONSTANTS.API_TYPE_JVUE:
        this.apiAdaptor = new JVueApiAdaptor();
        break;
      case API_TYPE_CONSTANTS.API_TYPE_CONFLUENCE:
        this.apiAdaptor = new ConfApiAdaptor();
        break;
      case API_TYPE_CONSTANTS.API_TYPE_CNBLOGS:
        this.apiAdaptor = new CnblogsApiAdaptor();
        break;
      case API_TYPE_CONSTANTS.API_TYPE_WORDPRESS:
        this.apiAdaptor = new WordpressApiAdaptor();
        break;
      case API_TYPE_CONSTANTS.API_TYPE_LIANDI:
        this.apiAdaptor = new LiandiApiAdaptor();
        break;
      case API_TYPE_CONSTANTS.API_TYPE_YUQUE:
        this.apiAdaptor = new YuqueApiAdaptor();
        break;
      case API_TYPE_CONSTANTS.API_TYPE_KMS:
        this.apiAdaptor = new KmsApiAdaptor();
        break;
      default:
        throw new Error("\u672A\u627E\u5230\u63A5\u53E3\u9002\u914D\u5668\uFF0C\u8BF7\u68C0\u67E5\u53C2\u6570");
    }
  }
  async getRecentPostsCount(keyword) {
    return await this.apiAdaptor.getRecentPostsCount(keyword);
  }
  async getRecentPosts(numOfPosts, page, keyword) {
    return await this.apiAdaptor.getRecentPosts(numOfPosts, page, keyword);
  }
  async getUsersBlogs() {
    return await this.apiAdaptor.getUsersBlogs();
  }
  async getPost(postid, useSlug) {
    return await this.apiAdaptor.getPost(postid, useSlug);
  }
  async editPost(postid, post, publish) {
    return await this.apiAdaptor.editPost(postid, post, publish);
  }
  async newPost(post, publish) {
    return await this.apiAdaptor.newPost(post, publish);
  }
  async deletePost(postid) {
    return await this.apiAdaptor.deletePost(postid);
  }
  async getCategories() {
    return await this.apiAdaptor.getCategories();
  }
  async getPreviewUrl(postid) {
    return await this.apiAdaptor.getPreviewUrl(postid);
  }
}
export {
  API as A,
  GithubCfg as G,
  Post as P,
  SiYuanApiAdaptor as S,
  VuepressCfg as V,
  POSTID_KEY_CONSTANTS as a,
  GithubApi as b
};
