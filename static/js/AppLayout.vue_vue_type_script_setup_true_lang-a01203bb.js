var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var _a, _b;
import { F as isRef, x as unref, b3 as isReactive, ax as toRaw, bJ as library$1, bK as faUpload, bL as faBookOpenReader, bM as faRectangleList, bN as faXmark, bO as faCircleXmark, bP as faBolt, bQ as faCreditCard, bR as faImage, bS as faChrome, bT as faShareNodes, bU as faListOl, bV as faFileLines, bW as faDownload, bX as faMagnifyingGlass, bY as faPaste, bZ as faFileImport, b_ as faGear, b$ as faArrowRotateRight, c0 as faTrashCan, c1 as faPenToSquare, c2 as faShopify, c3 as faCartShopping, c4 as faLink, c5 as faBellSlash, c6 as FontAwesomeIcon, aZ as createApp, aG as h, O as defineComponent, u as ref, A as onMounted, aN as resolveComponent, P as openBlock, Q as createElementBlock, a2 as createVNode, V as withCtx, U as createBlock, _ as createCommentVNode, $ as createTextVNode, ad as reactive, c7 as Octokit, a0 as toDisplayString, X as createBaseVNode, z as watch, ao as renderList, a1 as Fragment, aD as arrow_left_default, aa as withModifiers, Y as normalizeClass, M as onBeforeMount, C as onBeforeUnmount, r as computed, W as withDirectives, c8 as pushScopeId, c9 as popScopeId, ca as useDark, cb as useToggle, R as renderSlot, J as shallowRef, Z as resolveDynamicComponent } from "./vendor-1c6b4df7.js";
import { c as createPinia, d as defineStore } from "./vendor_pinia-0ad60f3b.js";
import { c as createI18n, u as useI18n } from "./vendor_vue-i18n-b8c9be4e.js";
import { E as ElMessage, a as ElButton, b as ElTooltip, c as ElHeader, d as ElButtonGroup, e as ElFormItem, f as ElInput, g as ElSwitch, h as ElAlert, i as ElForm, j as ElRadio, k as ElRadioGroup, l as ElTabPane, m as ElTabs, n as ElOption, o as ElSelect, p as ElTableColumn, q as ElTable, r as ElMain, s as ElContainer, t as ElMessageBox, u as ElPageHeader, v as ElCard, w as ElCheckbox, x as ElCheckboxGroup, y as ElDivider, z as ElIcon, A as ElRow, B as ElCol, C as vLoading, D as ElColorPicker, F as ElDialog } from "./vendor_element-plus-f0c88bcb.js";
import { H as HighlightJS, j as javascript, t as typescript, c, a as cpp, b as java, k as kotlin, d as bash, x as xml, e as css, p as plaintext, f as php, g as properties, s as sql, m as markdown } from "./vendor_highlight-js-1b1ee527.js";
import { b as browserIndex } from "./vendor_plantuml-encoder-18698577.js";
import { l as loglevel } from "./vendor_loglevel-bd2e1c44.js";
import { p as prefix } from "./vendor_loglevel-plugin-prefix-34a2ac06.js";
import { n } from "./vendor_browser-fs-access-16ccdee9.js";
import { d } from "./vendor_transliteration-0556f169.js";
import { d as dist } from "./vendor_shorthash2-e60185c0.js";
import { v as v4 } from "./vendor_uuid-520e9b68.js";
import { j as jsYaml } from "./vendor_js-yaml-c400b4ba.js";
import { g as gBase64 } from "./vendor_js-base64-2ae562d2.js";
import "./vendor_sax-1b2fcd5b.js";
import { S as SimpleXmlRpcClient } from "./vendor_simple-xmlrpc-212666d6.js";
import "./vendor_cross-fetch-e4e57030.js";
import { k as cloneDeep, u as union } from "./vendor_lodash-es-bef79dfb.js";
import { l as lodash } from "./vendor_lodash-37b14d55.js";
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
const zh_CN = {
  "lang.choose": "\u8BED\u8A00\u9009\u62E9",
  "lang.choose.placeholder": "\u8BF7\u9009\u62E9\u8BED\u8A00",
  "theme.mode.choose": "\u5207\u6362\u6A21\u5F0F",
  "theme.mode.dark": "\u6697\u9ED1\u6A21\u5F0F",
  "theme.mode.light": "\u6D45\u8272\u6A21\u5F0F",
  "service.tab.publish.service": "\u53D1\u5E03\u670D\u52A1",
  "service.tab.publish.setting": "\u53D1\u5E03\u914D\u7F6E",
  "service.tab.post.bind": "\u6587\u7AE0\u7ED1\u5B9A",
  "service.tab.service.switch": "\u670D\u52A1\u5F00\u5173",
  "service.tab.change.local": "\u4E2A\u6027\u8BBE\u7F6E",
  "main.publish.editmode": "\u7F16\u8F91\u6A21\u5F0F",
  "main.publish.editmode.simple": "\u7B80\u6D01\u6A21\u5F0F",
  "main.publish.editmode.complex": "\u8BE6\u7EC6\u6A21\u5F0F",
  "main.publish.editmode.source": "\u6E90\u7801\u6A21\u5F0F",
  "main.publish.vuepress.tip": "\u63A8\u8350Vuepress\u7684V1\u7248\u672C\uFF0C\u914D\u5408 vuepress-theme-vdoing \u4F7F\u7528\uFF0C\u540E\u7EEDbug\u4E5F\u53EA\u4F1A\u5BF9V1\u548C\u6B64\u4E3B\u9898\u8FDB\u884C\u66F4\u65B0",
  "main.publish.github.error.tip": "\u914D\u7F6E\u9519\u8BEF\u6216\u8005api\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u67E5\u3002\u82E5\u4FEE\u6539\u8FC7\u914D\u7F6E\uFF0C\u8BF7\u5237\u65B0\u9875\u9762",
  "main.publish.github": "\u53D1\u5E03\u9875\u9762",
  "main.publish.github.tip": "\u81EA\u52A8\u5C06\u6587\u7AE0\u7684markdown\u6587\u672C\u53D1\u5E03\u5230Vuepress\u5BF9\u5E94\u7684Github\u4ED3\u5E93\uFF08\u9700\u8981\u5148\u8FDB\u884C\u76F8\u5173\u914D\u7F6E\uFF09",
  "main.publish.github.no.tip": "\u60A8\u672A\u5F00\u542FGithub pages\u53D1\u5E03\uFF0C\u8BF7\u5207\u6362\u6E90\u7801\u6A21\u5F0F\u590D\u5236YAML\u4EE5\u53CAMarkdown\u6587\u672C",
  "main.publish.github.choose.path": "\u9009\u62E9\u76EE\u5F55",
  "main.publish.github.published.path": "\u53D1\u5E03\u8DEF\u5F84",
  "main.publish.github.choose.path.use.default": "\u9ED8\u8BA4\u76EE\u5F55",
  "main.publish.github.choose.path.use.default.tip": "\u4F7F\u7528\u9ED8\u8BA4\u76EE\u5F55\uFF0C\u5219\u9ED8\u8BA4\u6240\u6709\u6587\u7AE0\u90FD\u53D1\u5E03\u5728\u914D\u7F6E\u597D\u7684\u9ED8\u8BA4\u76EE\u5F55\u4E0B\uFF08\u53EF\u5728\u53D1\u5E03\u914D\u7F6E\u8BBE\u7F6E\uFF09\uFF0C\u65E0\u9700\u6BCF\u6B21\u53D1\u5E03\u7684\u65F6\u5019\u6765\u9009\u62E9\u76EE\u5F55\uFF0C\u5F53\u524D\u5E73\u53F0\u7684\u9ED8\u8BA4\u76EE\u5F55\u4E3A\uFF1A",
  "main.publish.github.choose.title": "\u6587\u4EF6\u540D\u79F0",
  "main.publish.github.choose.title.tip": "Vuepress-theme-vdoing\u652F\u6301\u6587\u4EF6\u540D\u52A0\u4E0A\u5E8F\u53F7\u6765\u6807\u8BC6\uFF0C\u5982\u679C\u4F60\u4E0D\u6E05\u695A\u6B64\u7528\u6CD5\uFF0C\u8BF7\u4E0D\u8981\u4FEE\u6539\u6587\u4EF6\u540D",
  "main.publish.github.failure": "\u53D1\u5E03\u5931\u8D25\uFF0C\u8BF7\u81EA\u884C\u590D\u5236\u53F3\u4FA7\u6587\u672C",
  "main.publish.see.preview": "\u70B9\u51FB\u8FD9\u91CC\u67E5\u770B\u6700\u65B0\u6587\u7AE0",
  "main.publish.see.md.preview": "\u70B9\u51FB\u8FD9\u91CC\u67E5\u770BMD\u6587\u4EF6",
  "main.publish.see.real.preview": "\u70B9\u51FB\u8FD9\u91CC\u67E5\u770B\u6700\u65B0\u6587\u7AE0",
  "main.publish.to.wordpress": "\u53D1\u5E03\u5230Wordpress",
  "main.title": "\u6587\u7AE0\u6807\u9898",
  "main.slug": "\u6587\u7AE0\u522B\u540D",
  "main.auto.fetch.slug": "\u81EA\u52A8\u751F\u6210\u522B\u540D",
  "main.use.google.translate": "\u4F7F\u7528Google\u7FFB\u8BD1API",
  "main.use.hash": "\u522B\u540D\u540E\u7F00",
  "main.use.hash.tip": "\u4E0D\u4F7F\u7528hash\u4F1A\u5C55\u793A\u66F4\u6709\u610F\u4E49\u7684url\uFF0C\u4F46\u662F\u53EF\u80FD\u5BFC\u81F4\u6587\u7AE0\u522B\u540D\u91CD\u590D\uFF08\u540E\u679C\u662FVuepress\u4F1ABuild\u5931\u8D25\u9664\u975E\u624B\u52A8\u89E3\u51B3\u522B\u540D\u552F\u4E00\u95EE\u9898\uFF09\uFF0C\u8BF7\u77E5\u6089\u3002",
  "main.force.refresh": "\u5237\u65B0\u522B\u540D",
  "main.force.refresh.tip": "\u4E3A\u4E86\u9632\u6B62\u8BEF\u64CD\u4F5C\u66F4\u65B0\u522B\u540D\uFF0C\u522B\u540D\u4E0D\u4E3A\u7A7A\u7684\u65F6\u5019\u9ED8\u8BA4\u4E0D\u4F1A\u66F4\u65B0\u522B\u540D\uFF0C\u5982\u9700\u66F4\u65B0\uFF0C\u8BF7\u52FE\u9009\u5237\u65B0\u522B\u540D\u3002",
  "main.desc": "\u6587\u7AE0\u6458\u8981",
  "main.auto.fetch.desc": "\u81EA\u52A8\u63D0\u53D6\u6458\u8981",
  "main.create.time": "\u53D1\u5E03\u65F6\u95F4",
  "main.create.time.placeholder": "\u8BF7\u9009\u62E9\u53D1\u5E03\u65F6\u95F4",
  "main.tag": "\u6587\u7AE0\u6807\u7B7E",
  "main.tag.new": "\u65B0\u6807\u7B7E",
  "main.auto.fetch.tag": "\u81EA\u52A8\u63D0\u53D6\u6807\u7B7E",
  "main.tag.auto.switch": "\u81EA\u52A8\u6807\u7B7E",
  "main.tag.auto.switch.no.tip": "\u81EA\u52A8\u6807\u7B7E\u5DF2\u5173\u95ED\uFF0C\u5C06\u4E0D\u4F1A\u81EA\u52A8\u751F\u6210\u6807\u7B7E",
  "main.cat": "\u6587\u7AE0\u5206\u7C7B",
  "main.cat.empty": "\u6682\u65E0\u5206\u7C7B",
  "main.cat.select": "\u8BF7\u9009\u62E9\u5206\u7C7B",
  "main.yaml.formatter": "YAML Formatter",
  "main.siyuan.to.yaml": "\u6587\u7AE0\u5C5E\u6027\u8F6CYAML",
  "main.yaml.to.siyuan": "YAML\u8F6C\u6587\u7AE0\u5C5E\u6027",
  "main.save.attr.to.siyuan": "\u4FDD\u5B58\u5C5E\u6027\u5230\u601D\u6E90",
  "main.copy": "\u590D\u5236",
  "main.publish": "\u53D1\u5E03",
  "main.publish.loading": "\u53D1\u5E03\u4E2D...",
  "main.loading": "\u52A0\u8F7D\u4E2D...",
  "main.update": "\u66F4\u65B0",
  "main.cancel": "\u53D6\u6D88",
  "main.publish.oneclick.attr": "\u4E00\u952E\u751F\u6210\u5C5E\u6027",
  "main.publish.oneclick.attr.finish": "\u5C5E\u6027\u5DF2\u751F\u6210",
  "main.publish.status.unpublish": "\u672A\u53D1\u5E03",
  "main.publish.status.published": "\u5DF2\u53D1\u5E03",
  "main.publish.to.vuepress": "\u53D1\u5E03\u5230Vuepress",
  "main.publish.to.hugo": "\u53D1\u5E03\u5230Hugo",
  "main.publish.to.hexo": "\u53D1\u5E03\u5230Hexo",
  "main.publish.to.jekyll": "\u53D1\u5E03\u5230Jekyll",
  "main.publish.to.jvue": "\u53D1\u5E03\u5230JVue",
  "main.publish.to.conf": "\u53D1\u5E03\u5230Confluence",
  "main.publish.to.cnblogs": "\u53D1\u5E03\u5230\u535A\u5BA2\u56ED",
  "main.publish.to.liandi": "\u53D1\u5E03\u5230\u94FE\u6EF4",
  "main.publish.to.yuque": "\u53D1\u5E03\u5230\u8BED\u96C0",
  "main.publish.to.kms": "\u53D1\u5E03\u5230KMS",
  "main.opt.success": "\u64CD\u4F5C\u6210\u529F",
  "main.opt.failure": "\u64CD\u4F5C\u5931\u8D25",
  "main.copy.success": "\u590D\u5236\u6210\u529F",
  "main.copy.failure": "\u590D\u5236\u5931\u8D25",
  "main.opt.quick": "\u5FEB\u6377\u64CD\u4F5C",
  "main.opt.status.publish": "\u6587\u7AE0\u5DF2\u53D1\u5E03",
  "main.opt.status.updated": "\u6587\u7AE0\u5DF2\u66F4\u65B0",
  "main.opt.status.cancel": "\u6587\u7AE0\u53D1\u5E03\u5DF2\u53D6\u6D88",
  "main.opt.loading": "\u64CD\u4F5C\u4E2D...",
  "main.opt.warning": "\u8B66\u544A\u4FE1\u606F",
  "main.opt.tip": "\u6E29\u99A8\u63D0\u793A",
  "main.opt.ok": "\u786E\u8BA4",
  "main.opt.cancel": "\u53D6\u6D88",
  "main.opt.warning.tip": "\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",
  "setting.noneed": "\u65E0\u9700\u914D\u7F6E",
  "setting.blog.setting": "\u8BBE\u7F6E",
  "setting.blog.index": "\u504F\u597D\u8BBE\u7F6E",
  "setting.blog.type": "\u535A\u5BA2\u7C7B\u578B",
  "setting.blog.type.placeholder": "\u8BF7\u9009\u62E9\u535A\u5BA2\u7C7B\u578B",
  "setting.blog.type.wordpress.value": "Wordpress",
  "setting.blog.type.wordpress.label": "Wordpress",
  "setting.blog.type.metaweblog.value": "MetaweblogApi",
  "setting.blog.type.metaweblog.label": "Metaweblog API",
  "setting.blog.type.github.value": "Github",
  "setting.blog.type.github.label": "Github",
  "setting.blog.type.github.user": "Github\u7528\u6237\u540D",
  "setting.blog.type.github.user.tip": "Github\u7528\u6237\u540D\uFF0C\u4F8B\u5982\uFF1Aterwer",
  "setting.blog.type.github.repo": "Github\u4ED3\u5E93\u540D",
  "setting.blog.type.github.repo.tip": "Github\u4ED3\u5E93\u540D\uFF0C\u4F8B\u5982\uFF1Aterwer.github.io",
  "setting.blog.type.github.token": "Github\u4EE4\u724C",
  "setting.blog.type.github.token.tip": "Github\u4EE4\u724C\uFF0C\u4F8B\u5982\uFF1Aghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "setting.blog.type.github.token.gen": "Github \u4E2A\u4EBA\u4EE4\u724C\u751F\u6210\u5730\u5740",
  "setting.blog.type.github.default.branch": "\u9ED8\u8BA4\u5206\u652F",
  "setting.blog.type.github.default.branch.tip": "\u9ED8\u8BA4\u5206\u652F\uFF08\u65E7\u7248\u4ED3\u5E93\u4E3Amaster\uFF0C\u65B0\u7248\u4ED3\u5E93\u9ED8\u8BA4\u4E3Amain\uFF09\uFF0C\u4F8B\u5982\uFF1Amain",
  "setting.blog.type.github.default.path": "\u5B58\u50A8\u76EE\u5F55",
  "setting.blog.type.github.default.path.tip": "\u5B58\u50A8\u76EE\u5F55\uFF08\u76F8\u5BF9\u4E8E\u4ED3\u5E93\u6839\u76EE\u5F55\u7684\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u9ED8\u8BA4\u6240\u6709\u6587\u7AE0\u90FD\u53D1\u5E03\u5728\u8FD9\u91CC\uFF09\uFF0C\u4F8B\u5982\uFF1Adocs/_posts",
  "setting.blog.type.github.msg": "\u63D0\u4EA4\u4FE1\u606F",
  "setting.blog.type.github.msg.tip": "\u63D0\u4EA4\u4FE1\u606F\uFF0C\u4F8B\u5982\uFF1Aauto published by sy-post-publisher",
  "setting.blog.type.github.author": "\u4F5C\u8005",
  "setting.blog.type.github.author.tip": "\u4F5C\u8005\uFF0C\u4F8B\u5982\uFF1Aterwer",
  "setting.blog.type.github.email": "\u90AE\u7BB1",
  "setting.blog.type.github.email.tip": "\u90AE\u7BB1",
  "setting.blog.url": "\u535A\u5BA2\u7F51\u5740",
  "setting.blog.username": "\u8D26\u53F7",
  "setting.blog.password": "\u5BC6\u7801/Token",
  "setting.blog.apiurl": "API\u5730\u5740",
  "setting.blog.previewUrl": "\u9884\u89C8\u89C4\u5219",
  "setting.blog.previewUrl.tip": "\u9884\u89C8\u89C4\u5219\uFF08\u5360\u4F4D\u7B26\uFF1A[yyyy] [MM] [dd] [postid]\uFF09\uFF0C\u4F8B\u5982\uFF1A/post/[postid].html \u6216\u8005 /[cats]/[yyyy]/[mm]/[dd]/[postid].html",
  "setting.blog.previewMdUrl": "MD\u9884\u89C8\u89C4\u5219",
  "setting.blog.previewMdUrl.tip": "MD\u6587\u4EF6\u9884\u89C8\u89C4\u5219\uFF08\u5360\u4F4D\u7B26\uFF1A[user] [repo] [branch] [docpath]\uFF09\uFF0C\u4F8B\u5982\uFF1A/[user]/[repo]/blob/[branch]/[docpath]",
  "setting.blog.mdFilenameRule": "\u6587\u4EF6\u89C4\u5219",
  "setting.blog.mdFilenameRule.tip": "Markdown\u6587\u4EF6\u540D\u89C4\u5219\uFF08\u5360\u4F4D\u7B26\uFF1A[yyyy] [MM] [dd] [slug] [filename] \uFF09\uFF0C\u4F8B\u5982\uFF1A[filename].md \u6216\u8005 [yyyy]-[mm]-[dd]-[slug].md",
  "setting.blog.pageType": "\u53D1\u5E03\u683C\u5F0F",
  "setting.blog.validate": "\u9A8C\u8BC1",
  "setting.blog.save": "\u4FDD\u5B58",
  "setting.blog.vali": "\u9A8C\u8BC1",
  "setting.blog.vali.tip": "\u5F3A\u70C8\u5EFA\u8BAE\u4FDD\u5B58\u4E4B\u524D\u5148\u9A8C\u8BC1\u914D\u7F6E\u4EE5\u4FDD\u8BC1api\u7684\u53EF\u7528\u6027\uFF0C\u9A8C\u8BC1\u8FC7\u7A0B\u4E2D\u5C06\u53D1\u9001\u4E00\u7BC7\u6D4B\u8BD5\u6587\u7AE0\uFF0C\u60A8\u53EF\u4EE5\u7A0D\u540E\u5728\u5E73\u53F0\u624B\u52A8\u5220\u9664\u5B83\u3002\u60A8\u4E5F\u53EF\u4EE5\u5148\u4FDD\u5B58\uFF0C\u7A0D\u540E\u4FEE\u6539\uFF0C\u4F46\u662F\u5728\u9A8C\u8BC1\u901A\u8FC7\u4E4B\u524D\u8BE5api\u5C06\u4E0D\u53EF\u4F7F\u7528\u3002",
  "setting.blog.vali.tip.metaweblog": "\u914D\u7F6E\u9519\u8BEF\u6216\u8005api\u4E0D\u53EF\u7528\uFF0C\u8BF7\u68C0\u67E5\u3002\u82E5\u4FEE\u6539\u8FC7\u914D\u7F6E\uFF0C\u8BF7\u5237\u65B0\u9875\u9762",
  "setting.blog.vali.ing": "\u9A8C\u8BC1\u4E2D...",
  "setting.blog.vali.ok": "\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u4E0D\u8981\u5FD8\u4E86\u70B9\u51FB\u4E0B\u65B9\u4FDD\u5B58\u54DF(*^\u25BD^*)",
  "setting.blog.vali.ok.metaweblog": "\u914D\u7F6E\u5DF2\u4FDD\u5B58\u5E76\u9A8C\u8BC1\u901A\u8FC7",
  "setting.blog.vali.error": "API\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u914D\u7F6E",
  "setting.blog.platform.support.github": "\u60A8\u5F53\u524D\u64CD\u4F5C\u7684\u662F\u652F\u6301Github\u7684\u5E73\u53F0\uFF1A",
  "setting.blog.platform.support.metaweblog": "\u60A8\u5F53\u524D\u64CD\u4F5C\u7684\u662F\u652F\u6301metaweblog\u7684\u5E73\u53F0\uFF1A",
  "setting.blog.cancel": "\u53D6\u6D88",
  "setting.vuepress": "Vuepress",
  "setting.hugo": "Hugo",
  "setting.hexo": "Hexo",
  "setting.jekyll": "Jekyll",
  "setting.jvue": "JVue",
  "setting.conf": "Confluence",
  "setting.conf.tip": "\u53D1\u5E03\u5230Confluence\u9700\u8981\u914D\u5408\u6211\u7684\u53E6\u4E00\u4E2A\u9002\u914D\u5668\u9879\u76EE\u4F7F\u7528\uFF08\u5F3A\u70C8\u63A8\u8350\uFF09\uFF0C\u8BF7\u53C2\u8003\uFF1Ahttps://github.com/terwer/node-metaweblog-api-adaptor",
  "setting.cnblogs": "\u535A\u5BA2\u56ED",
  "setting.wordpress": "Wordpress",
  "setting.liandi": "\u94FE\u6EF4",
  "setting.yuque": "\u8BED\u96C0",
  "setting.kms": "KMS",
  "setting.other1": "\u5176\u4ED61",
  "service.switch.vuepress": "Vuepress",
  "service.switch.hugo": "Hugo",
  "service.switch.hexo": "Hexo",
  "service.switch.jekyll": "Jekyll",
  "service.switch.jvue": "JVue",
  "service.switch.conf": "Confluence",
  "service.switch.cnblogs": "\u535A\u5BA2\u56ED",
  "service.switch.wordpress": "Wordpress",
  "service.switch.yuque": "\u8BED\u96C0",
  "service.switch.liandi": "\u94FE\u6EF4",
  "service.switch.wechat": "\u5FAE\u4FE1\u804A\u5929",
  "service.switch.wemp": "\u5FAE\u4FE1\u516C\u4F17\u53F7",
  "service.switch.zhihu": "\u77E5\u4E4E",
  "service.switch.kms": "\u77E5\u8BC6\u4ED3\u5E93",
  "service.switch.must.select.one": "\u60A8\u5FC5\u987B\u9009\u62E9\u4E00\u4E2A\u81F3\u5C11\u5E73\u53F0",
  "post.bind.vuepress.slug": "Vuepress\u522B\u540D",
  "post.bind.hugo.slug": "Hugo\u522B\u540D",
  "post.bind.hexo.slug": "Hexo\u522B\u540D",
  "post.bind.jekyll.slug": "Jekyll\u522B\u540D",
  "post.bind.cnblogs.postid": "\u535A\u5BA2\u56ED\u522B\u540D",
  "post.bind.jvue.postid": "JVue\u7684ID",
  "post.bind.conf.postid": "Conf\u7684ID",
  "post.bind.wordpress.postid": "WP\u7684ID",
  "post.bind.liandi.postid": "\u94FE\u6EF4\u7684ID",
  "post.bind.yuque.postid": "\u8BED\u96C0\u7684ID",
  "post.bind.kms.postid": "KMS\u7684ID",
  "post.bind.conf.save": "\u4FDD\u5B58",
  "post.bind.conf.cancel": "\u53D6\u6D88",
  "form.validate.name.required": "\u8BF7\u8F93\u5165\u540D\u79F0",
  "form.validate.name.length": "\u957F\u5EA6\u5FC5\u987B\u57280\u52301\u4E4B\u95F4",
  "form.validate.github.auto.delete": "\u81EA\u52A8\u5220\u9664",
  "dynamic.platform.new": "\u5E73\u53F0\u7BA1\u7406",
  "dynamic.platform.tip": "\u5982\u679C\u5185\u7F6E\u7684\u53D1\u5E03\u670D\u52A1\u65E0\u6CD5\u6EE1\u8DB3\u6216\u8005\u9700\u8981\u6DFB\u52A0\u591A\u4E2A\u5B9E\u4F8B\uFF0C\u60A8\u53EF\u4EE5\u5728\u8FD9\u91CC\u6DFB\u52A0\u53D7\u652F\u6301\u7684\u5E73\u53F0\uFF0C\u76EE\u524D\u652F\u6301Github\uFF08HUGO\u3001HEXO\u3001Jekyll\u7B49\uFF09\u3001metaweblog API\uFF08\u5F00\u6E90\u4E2D\u56FD\u7B49\uFF09\u548CWordpress API",
  "dynamic.platform.type": "\u5E73\u53F0\u7C7B\u578B[\u5FC5\u9009]",
  "dynamic.platform.subtype": "\u5B50\u5E73\u53F0\u540D\u79F0",
  "dynamic.platform.type.metaweblog": "metaweblog API",
  "dynamic.platform.type.wordpress": "Wordpress",
  "dynamic.platform.type.github": "Github",
  "dynamic.platform.type.custom": "\u81EA\u5B9A\u4E49",
  "dynamic.platform.key": "\u5E73\u53F0key",
  "dynamic.platform.key.tip": "\u5E73\u53F0\u552F\u4E00\u6807\u8BC6\uFF0C\u4E0D\u80FD\u91CD\u590D\uFF0C\u4F8B\u5982\uFF1Amyblog",
  "dynamic.platform.name": "\u5E73\u53F0\u540D\u79F0",
  "dynamic.platform.name.tip": "\u5E73\u53F0\u540D\u79F0\uFF0C\u4F8B\u5982\uFF1A\u6211\u7684\u535A\u5BA2",
  "dynamic.platform.opt.add": "\u63D0\u4EA4",
  "dynamic.platform.opt.noselect": "\u8BF7\u9009\u62E9\u5E73\u53F0\u7C7B\u578B",
  "dynamic.platform.opt.key.exist": "\u5E73\u53F0key\u5DF2\u7ECF\u5B58\u5728",
  "dynamic.platform.opt.del.confirm": "\u5220\u9664\u6B64\u5E73\u53F0\u5C06\u4F1A\u5F7B\u5E95\u79FB\u9664\u6B64\u5E73\u53F0\u76F8\u5173\u914D\u7F6E\u4FE1\u606F\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",
  "dynamic.platform.opt.del.select": "\u5220\u9664\u9009\u4E2D",
  "dynamic.platform.opt.item.select": "\u672A\u9009\u62E9",
  "dynamic.platform.opt.item.select.tip": "\u5F53\u524D\u9009\u62E9\u7684\u662F\uFF1A",
  "dynamic.platform.opt.item.no.select.tip": "\u8BF7\u9009\u62E9\u8981\u5220\u9664\u7684\u884C",
  "setting.common.home": "\u5E73\u53F0\u9996\u9875",
  "setting.common.tip": "\u5E73\u53F0\u9996\u9875\uFF0C\u7528\u4E8E\u9884\u89C8\u6587\u7AE0\uFF0C\u4F8B\u5982\uFF1Ahttps://terwer.space",
  "setting.common.apiurl": "API\u5730\u5740",
  "setting.common.token": "\u9274\u6743token",
  "setting.common.token.gen": "Token\u751F\u6210\u5730\u5740",
  "setting.common.username": "\u7528\u6237\u540D",
  "setting.common.username.gen": "\u8BBF\u95EE\u7B56\u7565\u8BBE\u7F6E",
  "setting.common.password": "\u5BC6\u7801",
  "setting.blog.platform.support.common": "\u60A8\u5F53\u524D\u64CD\u4F5C\u7684\u5E73\u53F0\u662F\uFF1A",
  "platform.must.select.one": "\u54C7\u54E6\uFF0C\u79BB\u4F7F\u7528\u5C31\u5DEE\u4E00\u6B65\u5566 o(\u2565\uFE4F\u2565)o \uFF0C\u60A8\u5FC5\u987B\u542F\u7528\u81F3\u5C11\u4E00\u4E2A\u5E73\u53F0\u3002\u5982\u679C\u4E0A\u9762\u5217\u51FA\u7684\u5E73\u53F0\u6CA1\u6709\u4F60\u60F3\u8981\u7684\uFF0C\u53EF\u4EE5\u5728\u65B0\u589E\u5E73\u53F0\u52A8\u6001\u6DFB\u52A0\uFF0C\u652F\u6301Wordpress\u548CMetaweblog API\uFF08\u4F8B\u5982\u535A\u5BA2\u56ED\u3001oschina\u300151cto\u7B49\uFF09\u3002\u6709\u4EFB\u4F55\u7591\u95EE\u6B22\u8FCE\u90AE\u4EF6 youweics#163.com ",
  "blog.list.toptip": "\u6E29\u99A8\u63D0\u793A\uFF1A\u5355\u51FB\u8868\u683C\u884C\u53EF\u4EE5\u8FDB\u5165\u6587\u7AE0\u8BE6\u60C5\u9875\uFF0C\u8BE6\u60C5\u9875\u6709\u53D1\u5E03\u6309\u94AE\u54E6! (\u3003'\u25BD'\u3003)",
  "config.error.msg": "\u914D\u7F6E\u9519\u8BEF\uFF0C\u8BF7\u524D\u5F80\u5BF9\u5E94\u53D1\u5E03\u914D\u7F6E\u4FEE\u6539",
  "config.platform.none": "\u6CA1\u6709\u542F\u7528\u7684\u53D1\u5E03\u5E73\u53F0\uFF0C\u8BF7\u524D\u5F80\u670D\u52A1\u5F00\u5173\u5F00\u542F",
  "post.delete.by.platform": "\u6587\u7AE0\u5DF2\u88AB\u5E73\u53F0\u81EA\u884C\u5220\u9664\uFF0C\u8BF7\u70B9\u51FB\u53D6\u6D88\u5F3A\u5236\u89E3\u9664\u5173\u8054",
  "blog.top-data-tip": "\u6E29\u99A8\u63D0\u793A\uFF1A1. 0.1.0+ \u4EE5\u540E\uFF0C\u53EF\u901A\u8FC7\u3010\u504F\u597D\u8BBE\u7F6E->\u601D\u6E90\u5730\u5740\u3011\u6765\u4FEE\u6539\u9ED8\u8BA4\u4F3A\u670D\u914D\u7F6E\uFF0C\u652F\u6301\u672C\u5730\u548C\u8FDC\u7A0B\uFF1B\u5982\u679C\u662F\u8FDC\u7A0B\u8FD8\u9700\u8981\u8BBE\u7F6Etoken\uFF0C\u5982\u679C\u4F7F\u7528\u6D4F\u89C8\u5668\u63D2\u4EF6\u6216\u8005\u6302\u4EF6\u4E4B\u5916\u7684\u8BBF\u95EE\u65B9\u5F0F\u8FD8\u9700\u8981\u8BBE\u7F6E\u8DE8\u57DF\u8BF7\u6C42\u4EE3\u7406\u3002 2\u3001\u5347\u7EA7\u65B0\u7248\u4E4B\u524D\u5F3A\u70C8\u5EFA\u8BAE\u5BFC\u51FA\u914D\u7F6E\uFF0C\u9632\u6B62\u914D\u7F6E\u4E22\u5931\u3002 3\u3001\u5982\u679C\u51FA\u73B0\u65B0\u7248\u672C\u4E0D\u517C\u5BB9\u7684\u5F02\u5E38\u60C5\u51B5\uFF0C\u5EFA\u8BAE\u6E05\u7A7A\u914D\u7F6E\u3002\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF01",
  "blog.top-data-tip.siyuan": "\u6E29\u99A8\u63D0\u793A\uFF1A1\u3001\u5F53\u524D\u5904\u4E8E\u6302\u4EF6\u6A21\u5F0F\uFF0C\u4ECE 0.1.0 \u7248\u672C\u5F00\u59CB\uFF0C\u65E0\u9700\u5728\u6240\u6709\u9875\u9762\u5F15\u7528\u6302\u4EF6\u4E86\uFF0C\u53EA\u9700\u8981\u5728\u7236\u7EA7\u9875\u9762\u5F15\u7528\u4E00\u4E2A\u6302\u4EF6\u5373\u53EF\u3002\u5177\u4F53\u89C4\u5219\u5982\u4E0B\uFF1A(1). \u5982\u679C\u68C0\u6D4B\u5230\u6CA1\u6709\u5B50\u6587\u6863\uFF0C\u4F1A\u517C\u5BB9 0.0.3 \u7248\u672C\u4EE5\u524D\u7684\u65B9\u5F0F\uFF0C\u5C55\u793A\u5F53\u524D\u6587\u6863\u7684\u53D1\u5E03\u9875\u9762\u3002 (2). \u5982\u679C\u68C0\u6D4B\u5230\u6709\u5B50\u6587\u6863\uFF0C\u4F1A\u4EE5\u5217\u8868\u52A0\u5206\u9875\u7684\u65B9\u5F0F\u5C55\u793A\u6240\u6709\u5B50\u6587\u6863\u5217\u8868\u3002\u53EF\u5355\u72EC\u9009\u62E9\u67D0\u4E2A\u5B50\u6587\u6863\u8FDB\u884C\u53D1\u5E03\u64CD\u4F5C\u3002 2\u3001\u5347\u7EA7\u65B0\u7248\u4E4B\u524D\u5F3A\u70C8\u5EFA\u8BAE\u5BFC\u51FA\u914D\u7F6E\uFF0C\u9632\u6B62\u914D\u7F6E\u4E22\u5931\u3002 3\u3001\u5982\u679C\u51FA\u73B0\u65B0\u7248\u672C\u4E0D\u517C\u5BB9\u7684\u5F02\u5E38\u60C5\u51B5\uFF0C\u5EFA\u8BAE\u6E05\u7A7A\u914D\u7F6E\u3002\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF01",
  "blog.newwin.open": "\u9875\u7B7E\u6A21\u5F0F",
  "blog.change.siyuan.api": "\u601D\u6E90\u5730\u5740",
  "setting.blog.siyuan.password": "\u601D\u6E90\u7B14\u8BB0\u9274\u6743Token\uFF0C\u8BF7\u4ECE\u3010\u8BBE\u7F6E->\u5173\u4E8E\u3011\u590D\u5236\uFF0C\u5982\u679C\u662F\u672C\u5730\u7B14\u8BB0\u7559\u7A7A\u5373\u53EF",
  "setting.blog.siyuan.apiurl": "\u601D\u6E90\u7B14\u8BB0\u7684API\u5730\u5740\uFF0C\u5305\u62EC\u7AEF\u53E3\uFF0C\u4F8B\u5982\uFF1Ahttp://127.0.0.1:6806",
  "setting.blog.siyuan.current.apiurl": "\u5F53\u524DAPI\u5730\u5740=>",
  "setting.blog.middlewareUrl": "\u8DE8\u57DF\u8BF7\u6C42\u4EE3\u7406",
  "setting.blog.middlewareUrl.tip": "\u67D0\u4E9B\u573A\u666F\u4E0B\u9700\u8981\uFF08\u4F8B\u5982Firefox\u63D2\u4EF6\u3001\u81EA\u90E8\u7F72\u6A21\u5F0F\uFF09\uFF0C\u5176\u4ED6\u60C5\u51B5\u53EF\u5FFD\u7565",
  "setting.blog.middlewareUrl.my.tip": "\u5982\u679C\u6CA1\u6709\u90E8\u7F72\u4EE3\u7406\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6211\u7684\u5171\u4EAB\u5730\u5740\uFF1Ahttps://api.terwer.space/api/middleware \u3002\u51FA\u4E8E\u6027\u80FD\u8003\u8651\uFF0C\u5EFA\u8BAE\u81EA\u5DF1\u90E8\u7F72\u4E00\u4EFD\uFF0C\u8BF7\u4F7F\u7528 https://github.com/terwer/node-metaweblog-api-adaptor \u6B64\u9879\u76EE\u8FDB\u884C\u90E8\u7F72\u3002",
  "setting.conf.export": "\u5BFC\u51FA\u914D\u7F6E",
  "setting.conf.import": "\u5BFC\u5165\u914D\u7F6E",
  "setting.conf.transport": "\u5BFC\u5165\u5BFC\u51FA",
  "setting.conf.clear": "\u6E05\u7A7A\u914D\u7F6E",
  "page.no.id": "\u8BF7\u6C42\u975E\u6CD5\uFF0C\u539F\u56E0\uFF1ApageId\u83B7\u53D6\u5931\u8D25",
  "yaml.show.type.yaml": "YAML",
  "yaml.show.type.md": "MD\u6B63\u6587",
  "yaml.show.type.yamlmd": "YAML+MD\u6B63\u6587",
  "yaml.show.type.html": "HTML\u6B63\u6587",
  "main.read.mode": "\u53EA\u8BFB\u6A21\u5F0F",
  "main.edit.mode": "\u7F16\u8F91\u6A21\u5F0F",
  "main.read.mode.tip": "\u6E29\u99A8\u63D0\u793A\uFF1A\u53EA\u8BFB\u6A21\u5F0F\u4E0B\u70B9\u51FB\u53EF\u76F4\u63A5\u590D\u5236\uFF0C\u7F16\u8F91\u6A21\u5F0F\u4E0B\u9700\u8981\u70B9\u51FB\u590D\u5236\u6309\u94AE\u590D\u5236\u3002YAML\u8F6C\u6587\u7AE0\u5C5E\u6027\u4EC5\u652F\u6301title\u3001permalink\u3001date\u3001description\u3001tags",
  "main.opt.onclick.confirm.tip": "\u6B64\u64CD\u4F5C\u9ED8\u8BA4\u5C06\u91CD\u65B0\u751F\u6210\u9664\u522B\u540D\u4EE5\u5916\u7684\u6240\u6709\u5C5E\u6027\uFF0C\u5982\u679C\u53EA\u60F3\u4FEE\u6539\u4E2A\u522B\u5C5E\u6027\uFF0C\u8BF7\u5728\u8BE6\u7EC6\u6A21\u5F0F\u70B9\u51FB\u5355\u72EC\u7684\u529F\u80FD\u6309\u94AE\u8FDB\u884C\u5BF9\u5E94\u64CD\u4F5C\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",
  "main.cat.list.error": "\u5206\u7C7B\u83B7\u53D6\u5931\u8D25",
  "main.yaml.no.save": "\u60A8\u7F16\u8F91\u8FC7YAML\uFF0C\u70B9\u51FB\u786E\u8BA4\u53EF\u540C\u6B65YAML\u5230\u5C5E\u6027\uFF0C\u53D6\u6D88\u5C06\u4E22\u5931YAML\u4FEE\u6539\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",
  "setting.github.baseUrl": "Git\u5E73\u53F0\u5730\u5740",
  "setting.github.baseUrl.tip": "Git\u5E73\u53F0\u5730\u5740\uFF0C\u7528\u4E8EMD\u6587\u4EF6\u9884\u89C8\uFF0C\u9ED8\u8BA4\u662F\uFF1Ahttps://github.com",
  "preference.setting.fixTitle": "\u53BB\u9664\u6807\u9898\u7F16\u53F7",
  "preference.setting.removeH1": "\u53BB\u9664\u6B63\u6587H1",
  "preference.setting.removeH1.tip": "\u5220\u9664H1\u53EF\u80FD\u4F1A\u8BEF\u5220\u9664Markdown\u91CC\u9762\u7684#\u5F00\u5934\u7684\u6CE8\u91CA\uFF0C\u5982\u9700\u5F00\u542F\uFF0C\u8BF7\u4F7F\u75282\u4E2A\u4EE5\u4E0A\u7684#\u6CE8\u91CA\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",
  "preference.setting.newWin": "\u65B0\u7A97\u53E3\u64CD\u4F5C",
  "siyuan.browser.show.close.btn": "\u663E\u793A\u5173\u95ED\u6309\u94AE",
  "siyuan.browser.menu.quick.btn": "\u4E00\u952E\u5FEB\u901F\u53D1\u5E03",
  "siyuan.browser.menu.publish.btn": "\u6587\u7AE0\u53D1\u5E03\uFF08\u81EA\u52A8\u68C0\u6D4B\uFF0C\u6709\u5B50\u6587\u6863->\u5217\u8868\u9875\uFF1B\u65E0\u5B50\u6587\u6863->\u53D1\u5E03\u9875\uFF09",
  "siyuan.browser.menu.preview.btn": "\u6587\u7AE0\u9884\u89C8\uFF08\u5F53\u524D\u6587\u7AE0\u53EA\u8BFB\u9884\u89C8\uFF09",
  "siyuan.browser.menu.manage.btn": "\u6587\u7AE0\u7BA1\u7406\uFF08\u5168\u90E8\u6587\u7AE0\u7EDF\u4E00\u7BA1\u7406\uFF09",
  "siyuan.browser.menu.anki.btn": "Anki\u6807\u8BB0\uFF08\u914D\u5408ankisiyuan\u751F\u6210Anki\u6807\u8BB0\uFF09",
  "siyuan.browser.menu.picture.btn": "PicGO\u56FE\u5E8A\uFF08\u652F\u6301\u56FE\u5E8A\u914D\u7F6E\u4E0E\u56FE\u7247\u4E0A\u4F20\uFF09",
  "siyuan.browser.menu.setting.btn": "\u504F\u597D\u8BBE\u7F6E\uFF08\u7CFB\u7EDF\u8BBE\u7F6E\u7EDF\u4E00\u5165\u53E3\uFF09",
  "anki.siyuan.deck": "\u724C\u7EC4",
  "anki.siyuan.deck.new": "\u65B0\u724C\u7EC4",
  "anki.siyuan.tag": "\u6807\u7B7E",
  "anki.siyuan.tag.new": "\u65B0\u6807\u7B7E",
  "picgo.chrome.tip": "\u60A8\u5F53\u524D\u4F7F\u7528\u7684\u662F\u6D4F\u89C8\u5668\u63D2\u4EF6\uFF0C\u9700\u8981\u4ECE\u8FD9\u91CC\u4E0B\u8F7D\u914D\u7F6E PicGO \u5BA2\u6237\u7AEF\uFF1Ahttps://github.com/Molunerfinn/PicGo/releases",
  "picgo.siyuan.tip": "\u60A8\u5F53\u524D\u4F7F\u7528\u7684\u662F\u601D\u6E90\u7B14\u8BB0\u6302\u4EF6\uFF0CPicGO\u5DF2\u5185\u7F6E\uFF0C\u53EA\u9700\u914D\u7F6E\u5373\u53EF",
  "post.detail.button.copy.id": "\u590D\u5236\u672C\u6587ID",
  "post.detail.button.share.link": "\u590D\u5236\u5206\u4EAB\u94FE\u63A5",
  "post.detail.button.browser.open": "\u9ED8\u8BA4\u6D4F\u89C8\u5668\u6253\u5F00",
  "post.detail.button.pic.manage": "\u56FE\u7247\u7BA1\u7406",
  "post.detail.button.anki.mark": "Anki\u6807\u8BB0",
  "post.detail.index.send.to.publish": "\u53D1\u5E03\u5230\u5176\u4ED6\u5E73\u53F0",
  "post.detail.index.export.to.pdf": "\u5BFC\u51FA\u4E3APDF",
  "picgo.upload.status": "\u4E0A\u4F20\u72B6\u6001",
  "picgo.upload.select.pic": "\u9009\u62E9\u56FE\u7247",
  "picgo.upload.clipboard": "\u526A\u8D34\u677F\u56FE\u7247",
  "picgo.upload.onclick": "\u4E00\u952E\u4E0A\u4F20\u672C\u5730\u56FE\u7247\u5230\u56FE\u5E8A",
  "picgo.download.onclick": "\u4E00\u952E\u4E0B\u8F7D\u8FDC\u7A0B\u56FE\u7247\u5230\u672C\u5730",
  "picgo.download.local.to.bed": "\u4E0A\u4F20\u672C\u5730\u56FE\u7247\u5230\u56FE\u5E8A",
  "picgo.download.bed.to.local": "\u4E0B\u8F7D\u8FDC\u7A0B\u56FE\u7247\u5230\u672C\u5730",
  "picgo.pic.preview": "\u56FE\u7247\u9884\u89C8",
  "picgo.pic.setting": "\u56FE\u5E8A\u8BBE\u7F6E",
  "picgo.pic.setting.no.tip": "\u7531\u4E8E\u60A8\u5F53\u524D\u4F7F\u7528\u7684\u662F\u6D4F\u89C8\u5668\u63D2\u4EF6\uFF0C\u65E0\u6CD5\u76F4\u63A5\u96C6\u6210 PicGO \uFF0C\u53EA\u80FD\u901A\u8FC7 HTTP \u8BF7\u6C42\u95F4\u63A5\u8C03\u7528\u672C\u5730 PicGO \u5BA2\u6237\u7AEF\u4E0A\u56FE\u7247\uFF0C\u8BF7\u76F4\u63A5\u5728\u672C\u5730 PicGO \u5BA2\u6237\u7AEF\u8FDB\u884C\u8BBE\u7F6E\u3002\u5982\u9700\u4F53\u9A8C\u66F4\u52A0\u5B8C\u6574\u7684\u529F\u80FD\uFF0C\u8BF7\u901A\u8FC7\u601D\u6E90\u7B14\u8BB0\u6302\u4EF6\u7248\u6302\u8F7D\u83DC\u5355\u6253\u5F00\u65B0\u7A97\u53E3\u7684\u65B9\u5F0F\u4F7F\u7528\u3002\u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1Ahttps://docs.publish.terwer.space/post/the-pendant-mode-is-used-in-the-method-of-mounting-menu-169wrw.html",
  "github.use.permalink": "\u6C38\u4E45\u94FE\u63A5",
  "github.use.permalink.no.warn": "\u60A8\u5DF2\u5173\u95ED\u6C38\u4E45\u94FE\u63A5\uFF0Cformatter\u5C06\u4E0D\u4F1A\u751F\u6210\u6807\u8BB0\uFF0C\u8FD9\u5728\u67D0\u4E9B\u7279\u6B8A\u573A\u666F\u4E0B\u53EF\u80FD\u6709\u7528\uFF0C\u5927\u90E8\u5206\u60C5\u51B5\u4E0B\u9700\u8981\u5F00\u542F\u6B64\u9009\u9879\uFF0C\u6CE8\u610F\uFF1A\u76EE\u524D\u4EC5\u4EC5\u5728HUGO\u5E73\u53F0\u751F\u6548\uFF0C\u4E3B\u8981\u662F\u9002\u914DDocsy",
  "github.menu.title": "\u83DC\u5355\u6807\u9898",
  "github.menu.title.placeholder": "\u83DC\u5355\u680F\u6807\u9898\uFF08HUGO\u5E73\u53F0\u4E13\u7528\uFF0C\u4E3A\u7A7A\u5219\u4E0D\u663E\u793A\u5728\u83DC\u5355\uFF09",
  "github.weight": "\u663E\u793A\u6743\u91CD",
  "github.weight.placeholder": "\u6743\u91CD\uFF08\u51B3\u5B9A\u663E\u793A\u987A\u5E8F\uFF0C\u8D8A\u5C0F\u663E\u793A\u8D8A\u9760\u524D\uFF09",
  "github.use.date": "\u663E\u793A\u65E5\u671F",
  "github.use.date.no.warn": "\u60A8\u5DF2\u5173\u95ED\u65E5\u671F\u663E\u793A\uFF0C\u5C06\u4E0D\u4F1A\u5728formatter\u751F\u6210date\u5B57\u6BB5",
  "github.post.picgo.use": "\u4F7F\u7528\u56FE\u5E8A",
  "github.post.picgo.use.tip": "\u542F\u7528\u6B64\u9009\u9879\uFF0C\u5C06\u4F1A\u81EA\u52A8\u5C06\u6B64\u6587\u6863\u5305\u542B\u7684\u6240\u6709\u672C\u5730\u56FE\u7247\u4E0A\u4F20\u81F3\u81EA\u5B9A\u4E49\u56FE\u5E8A\uFF08\u8FDC\u7A0B\u56FE\u7247\u4E0D\u4E0A\u4F20\uFF09\uFF0C\u8BF7\u786E\u4FDDPicGO\u56FE\u5E8A\u914D\u7F6E\u6B63\u786E",
  "github.post.picgo.start.upload": "\u56FE\u5E8A\u5DF2\u5F00\u542F\uFF0C\u5373\u5C06\u4E0A\u4F20\u672C\u5730\u56FE\u7247\u5230\u56FE\u5E8A",
  "github.post.picgo.picbed.error": "\u56FE\u7247\u4E0A\u4F20\u5230\u56FE\u5E8A\u5931\u8D25\uFF0C\u53EF\u80FD\u662F\u56FE\u5E8A\u914D\u7F6E\u9519\u8BEF\uFF0C\u8BF7\u68C0\u67E5\u56FE\u5E8A\u914D\u7F6E",
  "setting.yuque.home.tip": "\u8BED\u96C0\u5E73\u53F0\u9996\u9875\uFF0C\u901A\u5E38\u56FA\u5B9A\u662F\uFF1Ahttps://www.yuque.com/",
  "setting.yuque.username.tip": "\u8BED\u96C0\u5E73\u53F0\u7528\u6237\u540D\uFF0C\u6CE8\u610F\u662F\u3010\u8D26\u6237\u8BBE\u7F6E\u3011\u91CC\u9762\u56FA\u5B9A\u8FDE\u63A5\u91CC\u9762\u7684\u7528\u6237\u540D\uFF0C\u4E0D\u662F\u7528\u6237\u6635\u79F0\u54E6(*^\u25BD^*)",
  "setting.yuque.password.tip": "\u8BED\u96C0\u5E73\u53F0\u7684Token\uFF0C\u8BF7\u6309\u7167\u94FE\u63A5\u70B9\u51FB\u83B7\u53D6\uFF0C\u53EA\u9700\u8981\u52FE\u9009\u3010\u8BFB\u53D6\u4F60\u7684\u77E5\u8BC6\u5E93\u3011\u548C\u3010\u4FEE\u6539\u548C\u8BFB\u53D6\u4F60\u7684\u6587\u6863\u3011\u4E24\u4E2A\u6743\u9650\u5373\u53EF",
  "setting.yuque.apiurl.tip": "\u8BED\u96C0\u5E73\u53F0\u7684API\u5730\u5740\uFF0C\u901A\u5E38\u56FA\u5B9A\u662F\uFF1Ahttps://www.yuque.com/api/v2",
  "setting.liandi.home.tip": "\u94FE\u6EF4\u5E73\u53F0\u9996\u9875\uFF0C\u901A\u5E38\u56FA\u5B9A\u662F\uFF1Ahttps://ld246.com/",
  "setting.liandi.username.tip": "\u94FE\u6EF4\u5E73\u53F0\u7528\u6237\u540D\uFF0C\u6CE8\u610F\u662F\u70B9\u51FB\u3010\u4E2A\u4EBA\u4E3B\u9875\u3011\u4E4B\u540EURL\u4E0Amember\u540E\u9762\u663E\u793A\u7684\u7528\u6237\u540D\uFF0C\u4E0D\u662F\u7528\u6237\u6635\u79F0\u54E6(*^\u25BD^*)",
  "setting.liandi.password.tip": "\u94FE\u6EF4\u5E73\u53F0\u7684Token\uFF0C\u8BF7\u6309\u7167\u94FE\u63A5\u70B9\u51FB\u83B7\u53D6",
  "setting.liandi.apiurl.tip": "\u94FE\u6EF4\u5E73\u53F0\u7684API\u5730\u5740\uFF0C\u901A\u5E38\u56FA\u5B9A\u662F\uFF1Ahttps://ld246.com/api/v2",
  "setting.kms.home.tip": "KMS\u5E73\u53F0\u9996\u9875\uFF0C\u4F8B\u5982\uFF1Ahttp://localhost:9564/kms16_release/kms/multidoc",
  "setting.kms.username.tip": "KMS\u5E73\u53F0Rest\u8D26\u6237\u7528\u6237\u540D\uFF0C\u8BF7\u6309\u7167\u94FE\u63A5\u6307\u793A\u521B\u5EFA",
  "setting.kms.password.tip": "KMS\u5E73\u53F0Rest\u8D26\u6237\u5BC6\u7801\uFF0C\u8BF7\u6309\u7167\u94FE\u63A5\u6307\u793A\u521B\u5EFA",
  "setting.kms.apiurl.tip": "KMS\u5E73\u53F0\u7684API\u5730\u5740\uFF0C\u4F8B\u5982\uFF1Ahttp://localhost:9564/kms16_release/api/kms-multidoc/kmsMultidocKnowledgeRestService",
  "siyuan.local.share.tip": "\u6E29\u99A8\u63D0\u793A\uFF1A\u5982\u679C\u53D1\u73B0\u5206\u4EAB\u94FE\u63A5\u6216\u8005\u6D4F\u89C8\u5668\u6253\u5F00\u65E0\u6CD5\u663E\u793A\u6216\u8005\u7F51\u7EDC\u8FDE\u63A5\u88AB\u62D2\u7EDD\uFF0C\u8BF7\u6309\u7167\u4E0B\u9762\u64CD\u4F5C\u6392\u67E5\u30021\uFF1A\u601D\u6E90\u7B14\u8BB0->\u8BBE\u7F6E->\u5173\u4E8E->\u6253\u5F00\u7F51\u7EDC\u4F3A\u670D\uFF1B2\uFF1A\u5728\u6D4F\u89C8\u5668\u6253\u5F00\u4E4B\u540E\uFF0C\u70B9\u51FB\u5E95\u90E8\u601D\u6E90\u5730\u5740\uFF0C\u4FEE\u6539\u5BF9\u5E94\u5730\u5740\u4E3A\u5C40\u57DF\u7F51ip\u5730\u5740\u3002",
  "setting.cnblogs.home.tip": "\u60A8\u7684\u535A\u5BA2\u56ED\u9996\u9875\uFF0C\u901A\u5E38\u662F\uFF1Ahttps://www.cnblogs.com/<\u60A8\u7684\u7528\u6237\u540D>",
  "setting.cnblogs.username.tip": "\u60A8\u7684\u535A\u5BA2\u56EDMetaWeblog\u767B\u5F55\u540D\uFF0C\u53EF\u524D\u5F80\u60A8\u7684\u535A\u5BA2\u56ED\u540E\u53F0->\u8BBE\u7F6E\u67E5\u770B\uFF0C\u6CE8\u610F\uFF1A\u662F\u767B\u5F55\u540D\uFF0C\u4E0D\u662F\u7528\u6237\u6635\u79F0\u54E6(*^\u25BD^*)",
  "setting.cnblogs.password.tip": "\u60A8\u7684\u535A\u5BA2\u56EDMetaWeblog\u8BBF\u95EE\u4EE4\u724C\uFF0C\u53EF\u524D\u5F80\u60A8\u7684\u535A\u5BA2\u56ED\u540E\u53F0->\u8BBE\u7F6E\u67E5\u770B",
  "setting.cnblogs.apiUrl.tip": "\u60A8\u7684\u535A\u5BA2\u56EDMetaWeblog\u8BBF\u95EE\u5730\u5740\uFF0C\u53EF\u524D\u5F80\u60A8\u7684\u535A\u5BA2\u56ED\u540E\u53F0->\u8BBE\u7F6E\u67E5\u770B\uFF0C\u901A\u5E38\u662F\uFF1Ahttps://rpc.cnblogs.com/metaweblog/<\u60A8\u7684\u7528\u6237\u540D>",
  "setting.cnblogs.previewUrl.tip": "\u535A\u5BA2\u56ED\u5E73\u53F0\u7684\u6587\u7AE0\u9884\u89C8\u89C4\u5219\uFF0C\u901A\u5E38\u662F\uFF1A/p/[postid].html",
  "setting.wordpress.home.tip": "WordPress\u9996\u9875",
  "setting.wordpress.username.tip": "WordPress\u767B\u5F55\u540D\uFF0C\u6CE8\u610F\uFF1A\u662F\u767B\u5F55\u540D\uFF0C\u4E0D\u662F\u7528\u6237\u6635\u79F0\u54E6(*^\u25BD^*)",
  "setting.wordpress.password.tip": "WordPress\u767B\u5F55\u5BC6\u7801",
  "setting.wordpress.apiUrl.tip": "WordPress\u7684xmlrpc\u8FDC\u7A0B\u53D1\u5E03\u5730\u5740\uFF0C\u901A\u5E38\u662F\uFF1Ahttps://<WordPress\u535A\u5BA2\u5730\u5740>/xmlrpc.php",
  "setting.wordpress.previewUrl.tip": "WordPress\u5E73\u53F0\u7684\u6587\u7AE0\u9884\u89C8\u89C4\u5219\uFF0C\u901A\u5E38\u662F\uFF1A?p=[postid]",
  "setting.oschina.home.tip": "\u5F00\u6E90\u4E2D\u56FD\u9996\u9875\uFF0C\u901A\u5E38\u662F\uFF1Ahttps://my.oschina.net/<\u60A8\u7684\u7528\u6237\u540D>",
  "setting.oschina.username.tip": "\u5F00\u6E90\u4E2D\u56FD\u767B\u5F55\u540D\uFF0C\u53EF\u4EE5\u8F93\u5165\u767B\u5F55\u90AE\u7BB1",
  "setting.oschina.password.tip": "\u5F00\u6E90\u4E2D\u56FD\u767B\u5F55\u5BC6\u7801",
  "setting.oschina.apiUrl.tip": "\u5F00\u6E90\u4E2D\u56FD\u7684xmlrpc\u8FDC\u7A0B\u53D1\u5E03\u5730\u5740\uFF0C\u901A\u5E38\u56FA\u5B9A\u662F\uFF1Ahttps://www.oschina.net/action/xmlrpc",
  "setting.oschina.previewUrl.tip": "\u5F00\u6E90\u4E2D\u56FD\u5E73\u53F0\u7684\u6587\u7AE0\u9884\u89C8\u89C4\u5219\uFF0C\u901A\u5E38\u662F\uFF1A/blog/[postid]",
  "setting.typecho.home.tip": "Typecho\u5E73\u53F0\u7684\u9996\u9875",
  "setting.typecho.username.tip": "Typecho\u5E73\u53F0\u767B\u5F55\u540D",
  "setting.typecho.password.tip": "Typecho\u5E73\u53F0\u5BC6\u7801",
  "setting.typecho.apiUrl.tip": "Typecho\u5E73\u53F0\u7684xmlrpc\u8FDC\u7A0B\u53D1\u5E03\u5730\u5740\uFF0C\u901A\u5E38\u56FA\u5B9A\u662F\uFF1Ahttps://<\u5E73\u53F0\u5730\u5740>/index.php/action/xmlrpc",
  "setting.typecho.previewUrl.tip": "Typecho\u5E73\u53F0\u7684\u6587\u7AE0\u9884\u89C8\u89C4\u5219\uFF0C\u901A\u5E38\u662F\uFF1A/index.php/archives/[postid]",
  "setting.jvue.home.tip": "JVue\u5E73\u53F0\u7684\u9996\u9875",
  "setting.jvue.username.tip": "JVue\u5E73\u53F0\u767B\u5F55\u540D",
  "setting.jvue.password.tip": "JVue\u5E73\u53F0\u5BC6\u7801",
  "setting.jvue.apiUrl.tip": "JVue\u5E73\u53F0\u7684xmlrpc\u8FDC\u7A0B\u53D1\u5E03\u5730\u5740\uFF0C\u901A\u5E38\u56FA\u5B9A\u662F\uFF1Ahttps://<\u5E73\u53F0\u5730\u5740>/xmlrpc",
  "setting.jvue.previewUrl.tip": "JVue\u5E73\u53F0\u7684\u6587\u7AE0\u9884\u89C8\u89C4\u5219\uFF0C\u901A\u5E38\u662F\uFF1A/post/[postid].html",
  "setting.conf.home.tip": "Confluence Cloud\uFF0C\u9996\u9875\uFF0C\u901A\u5E38\u662F\uFF1Ahttps://<\u60A8\u7684\u7528\u6237\u540D>.atlassian.net/wiki/spaces/<\u7A7A\u95F4\u540D>",
  "setting.conf.username.tip": "Confluence\u767B\u5F55\u540D\uFF0C\u53EF\u524D\u5F80\u60A8\u7684atlassian\u8D26\u6237\u83B7\u53D6",
  "setting.conf.password.tip": "Confluence\u8BBF\u95EE\u4EE4\u724C\uFF0C\u53EF\u524D\u5F80\u60A8\u7684atlassian\u8D26\u6237\u83B7\u53D6",
  "setting.conf.apiUrl.tip": "\u53EF\u524D\u5F80 https://developer.atlassian.com/cloud/confluence/rest/v1/#api-wiki-rest-api-content-get \u67E5\u770B\u6587\u6863",
  "setting.conf.previewUrl.tip": "Confluence\u5E73\u53F0\u6587\u7AE0\u9884\u89C8\u89C4\u5219\uFF0C\u901A\u5E38\u662F\uFF1A/pages/[postid]",
  "setting.picgo.refer.to": "\u8BE6\u60C5\u8BF7\u53C2\u8003\uFF1A",
  "setting.picgo.refer.to.online.doc": "PicGO\u914D\u7F6E\u5728\u7EBF\u6587\u6863",
  "setting.picgo.picbed": "\u56FE\u5E8A\u8BBE\u7F6E",
  "setting.picgo.picgo": "PicGO\u8BBE\u7F6E",
  "main.opt.edit": "\u7F16\u8F91",
  "main.opt.delete": "\u5220\u9664",
  "setting.picgo.picgo.open.config.file": "\u6253\u5F00\u914D\u7F6E\u6587\u4EF6",
  "setting.picgo.picgo.click.to.open": "\u70B9\u51FB\u6253\u5F00",
  "setting.picgo.picgo.choose.showed.picbed": "\u8BF7\u9009\u62E9\u663E\u793A\u7684\u56FE\u5E8A",
  "setting.picgo.picbed.selected.tip": "\u5DF2\u9009\u4E2D",
  "setting.picgo.picbed.unselected.tip": "\u672A\u9009\u4E2D",
  "setting.picgo.picbed.set.default": "\u8BBE\u4E3A\u9ED8\u8BA4\u56FE\u5E8A",
  "setting.picgo.picbed.current.selected.tip": "\u5DF2\u9009\u4E2D\u56FE\u5E8A\uFF1A",
  "setting.picgo.picbed.current.tip": "\u5F53\u524D\u9ED8\u8BA4\u56FE\u5E8A\u662F\uFF1A",
  "setting.picgo.picbed.uploader.config.name": "\u56FE\u5E8A\u914D\u7F6E\u540D",
  "setting.picgo.picbed.uploader.config.name.placeholder": "\u8BF7\u8F93\u5165\u914D\u7F6E\u540D\u79F0",
  "setting.picgo.config.name": "\u914D\u7F6E\u540D\u79F0",
  "setting.picgo.config.name.placeholder": "\u8BF7\u8F93\u5165\u914D\u7F6E\u540D\u79F0",
  "setting.picgo.index.tip": "\u6CE8\u610F\uFF1A1\u3001\u6B64\u5904\u4E0A\u4F20\u7684\u56FE\u7247\u4E0D\u4F1A\u81EA\u52A8\u63D2\u5165\u6587\u6863\u4E2D\uFF0C\u8BF7\u624B\u52A8\u70B9\u51FB\u6309\u94AE\u590D\u5236\u94FE\u63A5\uFF0C\u7136\u540E Ctrl+V \u7C98\u8D34\u5230\u6587\u6863\u4E2D\u30022\u3001\u5BF9\u4E8E\u6587\u6863\u5F53\u4E2D\u539F\u672C\u5DF2\u7ECF\u5B58\u5728\u7684\u672C\u5730\u56FE\u7247\uFF0C\u70B9\u51FB\u4E0A\u4F20\u4E4B\u540E\u4E0D\u4F1A\u76F4\u63A5\u66FF\u6362\u539F\u59CB\u56FE\u7247\uFF0C\u53EA\u4F1A\u5B58\u50A8\u672C\u5730\u56FE\u7247\u4E0E\u56FE\u5E8A\u56FE\u7247\u7684\u6620\u5C04\u4FE1\u606F\uFF0C\u9700\u8981\u5728\u53D1\u5E03\u6587\u7AE0\u65F6\u624B\u52A8\u52FE\u9009\u3010\u4F7F\u7528\u56FE\u5E8A\u3011\u624D\u4F1A\u8FDB\u884C\u4E34\u65F6\u94FE\u63A5\u66FF\u6362\uFF0C\u8BF7\u77E5\u6089\u3002\u8FD9\u6837\u505A\u662F\u4E3A\u4E86\u4E0D\u7834\u574F\u5176\u4ED6\u5730\u65B9\u5BF9\u6587\u6863\u56FE\u7247\u7684\u5904\u7406\u3002\u5F53\u7136\uFF0C\u60A8\u4E5F\u53EF\u4EE5\u624B\u52A8\u590D\u5236\u56FE\u5E8A\u94FE\u63A5\uFF0C\u7136\u540E\u5220\u9664\u539F\u56FE\u7247\uFF0C\u66FF\u6362\u4E3A\u56FE\u5E8A\u56FE\u7247\u30023\u3001\u8BE5\u56FE\u7247\u5217\u8868\u4EC5\u5C55\u793A\u6B64\u6587\u6863\u5305\u542B\u7684\u56FE\u7247\u3002",
  "setting.picgo.index.copy.link": "\u590D\u5236\u94FE\u63A5",
  "setting.picgo.setting.timestamp.rename": "\u65F6\u95F4\u6233\u91CD\u547D\u540D",
  "setting.picgo.setting.close": "\u5173",
  "setting.picgo.setting.open": "\u5F00",
  "setting.picgo.setting.log.file": "\u65E5\u5FD7\u6587\u4EF6",
  "setting.picgo.plugin": "\u63D2\u4EF6\u8BBE\u7F6E",
  "setting.picgo.plugin.list": "\u63D2\u4EF6\u5217\u8868",
  "setting.picgo.plugin.import.local": "\u5BFC\u5165\u672C\u5730\u63D2\u4EF6",
  "setting.picgo.plugin.install": "\u5B89\u88C5",
  "setting.picgo.plugin.installing": "\u5B89\u88C5\u4E2D",
  "setting.picgo.plugin.installed": "\u5DF2\u5B89\u88C5",
  "setting.picgo.plugin.doing.something": "\u8FDB\u884C\u4E2D",
  "setting.picgo.plugin.search.placeholder": "\u641C\u7D22npm\u4E0A\u7684PicGo\u63D2\u4EF6\uFF0C\u6216\u8005\u70B9\u51FB\u4E0A\u65B9\u6309\u94AE\u67E5\u770B\u4F18\u79C0\u63D2\u4EF6\u5217\u8868\u3002\u63A8\u8350\uFF1Awatermark-elec\u3001s3",
  "setting.picgo.plugin.gui.not.implemented": "\u8BE5\u63D2\u4EF6\u672A\u5BF9\u53EF\u89C6\u5316\u754C\u9762\u8FDB\u884C\u4F18\u5316, \u662F\u5426\u7EE7\u7EED\u5B89\u88C5?",
  "setting.picgo.setting.node.path": "Node\u5B89\u88C5\u8DEF\u5F84",
  "setting.picgo.setting.node.path.tip": "\u8BF7\u8F93\u5165Node\u5B89\u88C5\u5B8C\u6574\u8DEF\u5F84\uFF0C\u4F8B\u5982\uFF1A/opt/node16/bin\uFF0CNode\u7248\u672C>=16",
  "setting.picgo.setting.node.registry": "NPM\u7684registry",
  "setting.picgo.setting.node.registry.tip": "\u56FD\u5185\u63A8\u8350\uFF1Ahttps://registry.npmmirror.com",
  "setting.picgo.setting.node.proxy": "NPM\u4EE3\u7406",
  "setting.picgo.setting.node.proxy.tip": "\u4E00\u822C\u53EF\u7559\u7A7A\uFF0C\u5982\u6709\u7279\u6B8A\u9700\u6C42\u53EF\u8BBE\u7F6E\u81EA\u5B9A\u4E49\u4EE3\u7406",
  "setting.picgo.setting.config.tip": "\u6CE8\u610F\uFF1A\u6A2A\u7EBF\u4EE5\u4E0A\u7684\u5C5E\u6027\u4F1A\u6539\u53D8\u4E0A\u4F20\u56FE\u7247\u7684\u884C\u4E3A\uFF0C\u914D\u7F6E\u53EF\u81EA\u52A8\u4FDD\u5B58\u3002\u6A2A\u7EBF\u4EE5\u4E0B\u7684\u5C5E\u6027\u4EC5\u4EC5\u5728\u5B89\u88C5\u63D2\u4EF6\u65F6\u7528\u5230\uFF0C\u5E76\u4E14\u9700\u8981\u70B9\u51FB\u3010\u786E\u8BA4\u3011\u6309\u94AE\u624D\u80FD\u4FDD\u5B58\u3002",
  "setting.picgo.plugin.install.success": "\u63D2\u4EF6\u5DF2\u7ECF\u6210\u529F\u5B89\u88C5\uFF0C\u8BF7\u6E05\u9664\u641C\u7D22\u5173\u952E\u5B57\u5237\u65B0\u5217\u8868\u3002\u70B9\u51FB\u63D2\u4EF6\u5BF9\u5E94\u3010\u8BBE\u7F6E\u3011\u56FE\u6807\u53EF\u67E5\u770B\u63D2\u4EF6\u8BE6\u60C5\uFF0C\u5E76\u5BF9\u63D2\u4EF6\u8FDB\u884C\u81EA\u5B9A\u4E49\u8BBE\u7F6E\u3002\u5982\u679C\u662F\u56FE\u5E8A\u6269\u5C55\uFF0C\u8BF7\u5173\u95ED\u91CD\u65B0\u6253\u5F00\uFF0C\u7136\u540E\u542F\u7528\u56FE\u5E8A\u5E76\u8FDB\u884C\u8BBE\u7F6E\u3002",
  "syp.about": "\u5173\u4E8E\u4F5C\u8005",
  "setting.picgo.plugin.uninstall": "\u5378\u8F7D\u63D2\u4EF6",
  "setting.picgo.plugin.uninstall.success": "\u63D2\u4EF6\u5DF2\u7ECF\u6210\u529F\u5378\u8F7D\u3002",
  "setting.picgo.plugin.enable": "\u542F\u7528\u63D2\u4EF6",
  "setting.picgo.plugin.disable": "\u7981\u7528\u63D2\u4EF6",
  "setting.picgo.plugin.update": "\u66F4\u65B0\u63D2\u4EF6",
  "setting.picgo.plugin.config.setting": "\u63D2\u4EF6\u8BBE\u7F6E",
  "setting.picgo.plugin.work": "\u5DF2\u517C\u5BB9",
  "setting.picgo.plugin.nowork": "\u4E0D\u517C\u5BB9",
  "setting.picgo.plugin.nouse": "\u4E0D\u53EF\u7528",
  "setting.picgo.plugin.update.success": "\u66F4\u65B0\u6210\u529F",
  "setting.conf.import.syp": "\u5BFC\u5165\u6302\u4EF6\u914D\u7F6E",
  "setting.conf.import.picgo": "\u5BFC\u5165PicGO\u914D\u7F6E",
  "setting.conf.export.syp": "\u5BFC\u51FA\u6302\u4EF6\u914D\u7F6E",
  "setting.conf.export.picgo": "\u5BFC\u51FAPicGO\u914D\u7F6E",
  "setting.conf.import.syp.tip": "\u8BF7\u9009\u62E9\u6709\u6548\u7684\u5386\u53F2\u5907\u4EFDjson\u6587\u4EF6\u8FDB\u884C\u5BFC\u5165\u3002\u6CE8\u610F\uFF1A\u6302\u4EF6\u914D\u7F6E\u4F1A\u8FDB\u884C\u914D\u7F6E\u66FF\u6362\u3002",
  "setting.conf.import.picgo.tip": "\u8BF7\u9009\u62E9\u6709\u6548\u7684\u5386\u53F2\u5907\u4EFDjson\u6587\u4EF6\u8FDB\u884C\u5BFC\u5165\u3002\u6CE8\u610F\uFF1APicGO\u63D2\u4EF6\u7684\u6CE8\u518C\u4FE1\u606F\u4E0D\u5BFC\u5165\u3002\u4E3A\u4E86\u914D\u7F6E\u7684\u517C\u5BB9\u6027\uFF0C\u8BF7\u5378\u8F7D\u6240\u6709\u63D2\u4EF6\u4E4B\u540E\uFF0C\u8FDB\u884CPicGO\u914D\u7F6E\u5BFC\u51FA\u64CD\u4F5C\u3002\u5378\u8F7DPicGO\u63D2\u4EF6\u4E0D\u4F1A\u5220\u9664\u63D2\u4EF6\u914D\u7F6E\uFF0C\u53EA\u4F1A\u5220\u9664\u63D2\u4EF6\u6587\u4EF6\u4EE5\u53CA\u63D2\u4EF6\u6CE8\u518C\u8BB0\u5F55\u3002\u8BF7\u653E\u5FC3\u5378\u8F7D\u3002",
  "setting.conf.export.syp.tip": "\u5C06\u5BFC\u51FA\u5BF9\u5E94\u7684json\u914D\u7F6E\u6587\u4EF6\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u5B9A\u671F\u8FDB\u884C\u914D\u7F6E\u5907\u4EFD\u3002\u539F\u5219\u4E0A\u652F\u6301\u5411\u540E\u517C\u5BB9\u3002\u5982\u6709\u4E0D\u517C\u5BB9\u95EE\u9898\uFF0C\u4F1A\u7279\u522B\u8BF4\u660E\u3002",
  "setting.conf.export.picgo.tip": "\u5C06\u5BFC\u51FA\u5BF9\u5E94\u7684json\u914D\u7F6E\u6587\u4EF6\uFF0C\u5F3A\u70C8\u5EFA\u8BAE\u5B9A\u671F\u8FDB\u884C\u914D\u7F6E\u5907\u4EFD\u3002\u539F\u5219\u4E0A\u652F\u6301\u5411\u540E\u517C\u5BB9\u3002\u5982\u6709\u4E0D\u517C\u5BB9\u95EE\u9898\uFF0C\u4F1A\u7279\u522B\u8BF4\u660E\u3002",
  "setting.conf.clear.syp": "\u6E05\u7A7A\u6302\u4EF6\u914D\u7F6E",
  "setting.conf.clear.picgo": "\u6E05\u7A7APicGO\u914D\u7F6E",
  "setting.conf.clear.tip": "\u6E05\u7A7A\u914D\u7F6E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002\u5F3A\u70C8\u5EFA\u8BAE\u5148\u5907\u4EFD\u914D\u7F6E\u3002",
  "setting.conf.clear.picgo.tip": "\u6E05\u7A7A\u914D\u7F6E\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\u3002\u5F3A\u70C8\u5EFA\u8BAE\u5148\u5907\u4EFD\u914D\u7F6E\u3002\u6B64\u64CD\u4F5C\u4F1A\u5220\u9664PicGO\u76F8\u5173\u914D\u7F6E\u6587\u4EF6\u5939\uFF0C\u5305\u62EC\u914D\u7F6E\u3001\u63D2\u4EF6\u3001\u7F13\u5B58\u7B49\uFF0C\u4EC5\u5728PicGO\u52A0\u8F7D\u53D1\u751F\u5F02\u5E38\uFF0C\u5E76\u4E14\u5B8C\u5168\u65E0\u6CD5\u4F7F\u7528\u7684\u65F6\u5019\u4F7F\u7528\uFF0C\u5426\u5219\u4E22\u5931\u914D\u7F6E\u540E\u679C\u81EA\u8D1F\uFF01",
  "setting.main.background": "\u6302\u4EF6\u80CC\u666F",
  "setting.main.background.tip": "\u652F\u630116\u8FDB\u5236\u548Crgb\uFF0C\u4F8B\u5982\uFF1A#000000\uFF0C\u672A\u8BBE\u7F6E\u6216\u8005\u7559\u7A7A\u4E0D\u53D8\u3002\u5982\u679C\u65B0\u7A97\u53E3\u8BBE\u7F6E\uFF0C\u8BF7\u91CD\u65B0\u5237\u65B0\u6587\u6863\u3002"
};
const en_US = {
  "lang.choose": "Choose lang",
  "lang.choose.placeholder": "Please select language",
  "theme.mode.choose": "Mode",
  "theme.mode.dark": "Dark mode",
  "theme.mode.light": "Light mode",
  "service.tab.publish.service": "Publish service",
  "service.tab.publish.setting": "Publish setting",
  "service.tab.post.bind": "Post bind",
  "service.tab.service.switch": "Service switch",
  "service.tab.change.local": "Change language",
  "main.publish.editmode": "Edit mode",
  "main.publish.editmode.simple": "Simple",
  "main.publish.editmode.complex": "Complex",
  "main.publish.editmode.source": "Source",
  "main.publish.vuepress.tip": "Recommends use it with vuepress-theme-vdoing , and the subsequent bug will only update this theme",
  "main.publish.github.error.tip": "Configure error or API is not available, please check. If you modify the configuration, please refresh the page",
  "main.publish.github": "Send Github",
  "main.publish.github.tip": "Checking the Markdown text of the article to the GitHub warehouse corresponding to Vuepress (need to perform related configuration first, unsatisfactory or configuration error will be ignored)",
  "main.publish.github.choose.path": "Choose path",
  "main.publish.github.published.path": "Published path",
  "main.publish.github.choose.path.use.default": "Default path",
  "main.publish.github.choose.path.use.default.tip": "Using the default directory, all articles are published in the configuration default directory, no need to select the directory every time it is published",
  "main.publish.github.no.tip": "You have not opened github release, please copy the right text on your own",
  "main.publish.github.choose.title": "File name",
  "main.publish.github.choose.title.tip": "Vuepress-theme-VDoing support file name plus serial number to identify. If you don\u2019t know this usage, please do not modify the file name",
  "main.publish.see.preview": "Click here see new post",
  "main.publish.see.md.preview": "Click here see new md file",
  "main.publish.see.real.preview": "Click here see new post",
  "main.publish.to.wordpress": "Send to WP",
  "main.title": "Post title",
  "main.slug": "Post slug",
  "main.auto.fetch.slug": "Auto fetch slug",
  "main.use.google.translate": "Use Google translate API",
  "main.use.hash": "Use hash",
  "main.use.hash.tip": "Do not use HASH to show more meaningful URLs, but it may cause the only path of the article to repeat (the consequence is that Vuepress will build a failure unless manual solution to the other problem), please know",
  "main.force.refresh": "Force refresh",
  "main.force.refresh.tip": "In order to prevent the wrongdoing aliases by mistake, the attribute will not be updated by default. If you need to update, please check for compulsory refresh.",
  "main.desc": "Post desc",
  "main.auto.fetch.desc": "Auto fetch desc",
  "main.create.time": "Pub time",
  "main.create.time.placeholder": "Please select time",
  "main.tag": "Post tag",
  "main.tag.new": "New tag",
  "main.auto.fetch.tag": "Auto fetch tag",
  "main.tag.auto.switch": "Tag switch",
  "main.tag.auto.switch.no.tip": "Auto tag is closed",
  "main.cat": "Category",
  "main.cat.empty": "No Category",
  "main.cat.select": "Please select category",
  "main.yaml.formatter": "YAML Formatter",
  "main.siyuan.to.yaml": "Siyuan attr to YAML",
  "main.yaml.to.siyuan": "YAML to Siyuan attr",
  "main.save.attr.to.siyuan": "Save attr to Siyuan",
  "main.copy": "Copy",
  "main.publish": "Publish",
  "main.publish.loading": "Publishing...",
  "main.loading": "Loading...",
  "main.update": "Update",
  "main.cancel": "Cancel",
  "main.publish.oneclick.attr": "Click to attr",
  "main.publish.oneclick.attr.finish": "Make attr finished",
  "main.publish.status.unpublish": "Unpublish",
  "main.publish.status.published": "Published",
  "main.publish.to.vuepress": "Send to Vuepress",
  "main.publish.to.hugo": "Send to Hugo",
  "main.publish.to.hexo": "Send to Hexo",
  "main.publish.to.jekyll": "Send to Jekyll",
  "main.publish.to.jvue": "Send to JVue",
  "main.publish.to.conf": "Send to Confluence",
  "main.publish.to.cnblogs": "Send to Cnblogs",
  "main.publish.to.liandi": "Send to Liandi",
  "main.publish.to.yuque": "Send to Yuque",
  "main.publish.to.kms": "Send to KMS",
  "main.opt.success": "Success",
  "main.opt.failure": "Error",
  "main.copy.success": "Copy Success",
  "main.copy.failure": "Copy Error",
  "main.opt.quick": "Quick",
  "main.opt.status.publish": "Post published success",
  "main.opt.status.cancel": "Post publishing has been canceled",
  "main.opt.loading": "Loading...",
  "main.opt.warning": "Warning",
  "main.opt.ok": "Confirm",
  "main.opt.cancel": "Cancel",
  "main.opt.warning.tip": "The operation will delete the data, whether to continue?",
  "main.opt.tip": "Tips",
  "setting.noneed": "No need setting",
  "setting.blog.setting": " Setting",
  "setting.blog.index": "System setting",
  "setting.blog.type": "Blog type",
  "setting.blog.type.placeholder": "Please select type",
  "setting.blog.type.wordpress.value": "Wordpress",
  "setting.blog.type.wordpress.label": "Wordpress",
  "setting.blog.type.metaweblog.value": "MetaweblogApi",
  "setting.blog.type.metaweblog.label": "Metaweblog API",
  "setting.blog.type.github.value": "Github",
  "setting.blog.type.github.label": "Github",
  "setting.blog.type.github.user": "Github user",
  "setting.blog.type.github.user.tip": "Github user, eg:terwer",
  "setting.blog.type.github.repo": "Github repo",
  "setting.blog.type.github.repo.tip": "Github repo, eg:terwer.github.io",
  "setting.blog.type.github.token": "Github token",
  "setting.blog.type.github.token.tip": "Github token, eg:ghp_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  "setting.blog.type.github.token.gen": "Generate Github Personal Token",
  "setting.blog.type.github.default.path": "Doc path",
  "setting.blog.type.github.default.path.tip": "Doc path, eg:docs/_posts",
  "setting.blog.type.github.msg": "Commit msg",
  "setting.blog.type.github.msg.tip": "Commit msg, eg:auto published by sy-post-publisher",
  "setting.blog.type.github.author": "Author",
  "setting.blog.type.github.author.tip": "Author, eg:terwer",
  "setting.blog.type.github.email": "Email",
  "setting.blog.type.github.email.tip": "Email",
  "setting.blog.url": "Blog addr",
  "setting.blog.previewUrl": "Preview rule",
  "setting.blog.previewUrl.tip": "Preview Rules (place occupied: [yyyy] [mm] [dd] [postid]), for example:/post/[postid].html or /[cats]/[yyyy]/[mm]/[dd]/[[dd]/[postid].html",
  "setting.blog.previewMdUrl": "MD preview rule",
  "setting.blog.previewMdUrl.tip": "MD file preview rules (place occupied: [user] [repo] [Branch] [docpath]), for example:/[user]/[repo]/blob/[branch]/[docpath]",
  "setting.blog.mdFilenameRule": "File rule",
  "setting.blog.mdFilenameRule.tip": "Markdown File Name Rules (Plasma: [yyyy] [MM] [dd] [slug] [filename]), for example: [filename].md or [yyyy]-[MM]-[dd]-[slug].md",
  "setting.blog.username": "Username",
  "setting.blog.password": "Password",
  "setting.blog.apiurl": "API Url",
  "setting.blog.pageType": "Page Type",
  "setting.blog.validate": "Validate",
  "setting.blog.save": "Save",
  "setting.blog.vali": "Validate",
  "setting.blog.vali.tip": "Please verify the configuration to ensure the availability of the API, and it will not be used without verification.",
  "setting.blog.vali.tip.metaweblog": "Please verify the configuration to ensure the availability of the API, and it will not be used without verification.",
  "setting.blog.vali.ing": "Validating...",
  "setting.blog.vali.ok": "Available",
  "setting.blog.vali.ok.metaweblog": "The configuration has been saved and verified",
  "setting.blog.vali.error": "Validate error",
  "setting.blog.platform.support.github": "Current github supported platform:",
  "setting.blog.platform.support.metaweblog": "Current metaweblog supported platform:",
  "setting.blog.cancel": "Cancel",
  "setting.vuepress": "Vuepress",
  "setting.hugo": "Hugo",
  "setting.hexo": "Hexo",
  "setting.jekyll": "Jekyll",
  "setting.jvue": "JVue",
  "setting.conf": "Confluence",
  "setting.conf.tip": "Published to Confluence needs to cooperate with my other adapter project (strong recommendation), please refer to:https://github.com/terwer/node-metaweblog-api-adaptor",
  "setting.cnblogs": "Cnblogs",
  "setting.wordpress": "Wordpress",
  "setting.liandi": "Liandi",
  "setting.yuque": "Yuque",
  "setting.kms": "KMS",
  "setting.other1": "Other1",
  "service.switch.vuepress": "Vuepress",
  "service.switch.hugo": "Hugo",
  "service.switch.hexo": "Hexo",
  "service.switch.jekyll": "Jekyll",
  "service.switch.jvue": "JVue",
  "service.switch.conf": "Confluence",
  "service.switch.cnblogs": "Cnblogs",
  "service.switch.wordpress": "Wordpress",
  "service.switch.yuque": "Yuque",
  "service.switch.liandi": "Liandi",
  "service.switch.wechat": "WeChat",
  "service.switch.wemp": "WeMedia",
  "service.switch.zhihu": "Zhihu",
  "service.switch.kms": "LandrayKms",
  "service.switch.must.select.one": "You must add at least one platform",
  "post.bind.vuepress.slug": "Vuepress slug",
  "post.bind.hugo.slug": "Hugo slug",
  "post.bind.hexo.slug": "Hexo slug",
  "post.bind.jekyll.slug": "Jekyll slug",
  "post.bind.cnblogs.postid": "Cnblogs ID",
  "post.bind.jvue.postid": "JVue ID",
  "post.bind.conf.postid": "Conf ID",
  "post.bind.wordpress.postid": "WP ID",
  "post.bind.liandi.postid": "Liandi ID",
  "post.bind.yuque.postid": "Yuque ID",
  "post.bind.kms.postid": "KMS ID",
  "post.bind.conf.save": "Save",
  "post.bind.conf.cancel": "Cancel",
  "form.validate.name.required": "Please input name",
  "form.validate.name.length": "Length should be 0 to 1",
  "form.validate.github.auto.delete": "Auto delete",
  "dynamic.platform.new": "New platform",
  "dynamic.platform.tip": "If the built -in release service cannot be satisfied or multiple instances need to be added, you can add supporting platforms here. Currently supporting Metaweblog API and WordPress API",
  "dynamic.platform.type": "Platform type",
  "dynamic.platform.subtype": "Platform subtype",
  "dynamic.platform.type.metaweblog": "metaweblog API",
  "dynamic.platform.type.wordpress": "Wordpress",
  "dynamic.platform.type.custom": "Custom",
  "dynamic.platform.key": "Platform key",
  "dynamic.platform.key.tip": "The unique logo of the platform, cannot be repeated, for example: myblog",
  "dynamic.platform.type.github": "Github",
  "dynamic.platform.name": "Platform name",
  "dynamic.platform.name.tip": "Platform name, for example: my blog",
  "dynamic.platform.opt.add": "Submit",
  "dynamic.platform.opt.noselect": "Please select platform type",
  "dynamic.platform.opt.key.exist": "Platform key exists",
  "dynamic.platform.opt.del.select": "Delete selected",
  "dynamic.platform.opt.del.confirm": "Deleting this platform will completely remove the relevant configuration information of this platform. Do you continue?",
  "dynamic.platform.opt.item.select": "Item no select",
  "dynamic.platform.opt.item.select.tip": "The current selection is:",
  "dynamic.platform.opt.item.no.select.tip": "Please select the line to be deleted",
  "setting.common.home": "Home",
  "setting.common.tip": "The platform homepage is used to preview articles, for example: https://terwork.space",
  "setting.common.apiurl": "API",
  "setting.common.token": "Token",
  "setting.common.token.gen": "Token addr",
  "setting.common.username": "Username",
  "setting.common.username.gen": "Username setting",
  "setting.common.password": "Password",
  "setting.blog.platform.support.common": "Current platform\uFF1A",
  "platform.must.select.one": "You must enable at least one platform",
  "blog.list.toptip": "Reminder: Click the table line to enter the article details page. The details page has the release button! (\u3003'\u25BD'\u3003)",
  "config.error.msg": "Network or config error, no data fetched",
  "config.platform.none": "No available platform, please go to switch",
  "post.delete.by.platform": "The article has been deleted by the platform by itself, please click to cancel the compulsory lifting connection",
  "blog.top-data-tip": "Reminder: Please ensure that the Siyuan notes are started and opened the servo. The default servo address: http://127.0.0.0.1: 6806.0.0. Note: The modification will cover the value of the startup setting.",
  "blog.top-data-tip.siyuan": "It is currently in the pendant mode. Starting from version 0.1.0, there is no need to reference the pendant on all pages. You only need to reference a pendant on the parent page. The specific rules are as follows: 1. If there are no subsidiaries, it will be compatible with the previous method of version 0.0.3 to display the release page of the current document. 2. If a subsidiary document is detected, all the subsidiaries will be displayed in a list and paging. You can choose a sub -document separately for release operations.",
  "blog.newwin.open": "Open in a new window",
  "blog.change.siyuan.api": "Modify Siyuan API address",
  "setting.blog.siyuan.password": "Siyuan Note token, please copying from\u3010set up-> about \u3011",
  "setting.blog.siyuan.apiurl": "The API address of Siyuan Note, including ports, for example: http://127.0.0.0.1: 6806",
  "setting.blog.siyuan.current.apiurl": "Current apiUrl=>",
  "setting.conf.export": "Export config",
  "setting.conf.import": "Import config",
  "setting.conf.transport": "Transport",
  "setting.conf.clear": "Clear config",
  "page.no.id": "pageId fetch error",
  "main.read.mode": "Readonly",
  "main.edit.mode": "Editable",
  "main.read.mode.tip": "Readonly tips",
  "main.opt.onclick.confirm.tip": "This operation will re -generate all attributes other than alias. If you just want to modify individual attributes, please click the individual function button to operate in the detailed mode. Do you continue?",
  "main.cat.list.error": "Category list get error",
  "main.yaml.no.save": "Have you edited YAML, do you synchronize to attributes, and cancel the loss of YAML modification?",
  "setting.github.baseUrl": "Git repo index",
  "setting.github.baseUrl.tip": "Git platform address is used for md file preview, the default is: https://github.com",
  "preference.setting.fixTitle": "Fix title",
  "preference.setting.removeH1": "Remove h1",
  "preference.setting.removeH1.tip": "Delete H1 may accidentally delete the beginning of the beginning of Markdown. If you need to open it, please use more than 2 ones.",
  "preference.setting.newWin": "New win",
  "siyuan.browser.show.close.btn": "Show close btn",
  "siyuan.browser.menu.quick.btn": "Quick publish",
  "siyuan.browser.menu.publish.btn": "Publish",
  "siyuan.browser.menu.preview.btn": "Preview",
  "siyuan.browser.menu.manage.btn": "Manage",
  "siyuan.browser.menu.anki.btn": "Anki",
  "siyuan.browser.menu.picture.btn": "PicGO",
  "siyuan.browser.menu.setting.btn": "Setting",
  "anki.siyuan.deck": "Deck",
  "anki.siyuan.deck.new": "New deck",
  "anki.siyuan.tag": "Tag",
  "anki.siyuan.tag.new": "New tag",
  "picgo.chrome.tip": "If you are using a browser plug -in, you need to download the configuration Picgo client from here: https://github.com/Molunerfinn/PicGo/releases",
  "picgo.siyuan.tip": "If you are using Siyuan notes pendants, you need to configure your own integration of PICGO. The pendant version of the PICGO configuration file is:`[Siyuan Workspace]/data/widgets/sy-post-publisher/lib/picgo/picgo.cfg.json`\uFF0CPlease refer to the official picgo document for configuration\uFF1Ahttps://picgo.github.io/PicGo-Core-Doc/zh/guide/config.html#%E6%89%8B%E5%8A%A8%E7%94%9F%E6%88%90",
  "post.detail.button.copy.id": "Copy post ID",
  "post.detail.button.share.link": "Copy share link",
  "post.detail.button.browser.open": "Open with default browser",
  "post.detail.button.pic.manage": "Picture manage",
  "post.detail.button.anki.mark": "Anki mark",
  "post.detail.index.send.to.publish": "Send to other platform",
  "post.detail.index.export.to.pdf": "Export to PDF",
  "picgo.upload.status": "Upload status",
  "picgo.upload.select.pic": "Select picture",
  "picgo.upload.clipboard": "Clipboard picture",
  "picgo.upload.onclick": "One click upload",
  "picgo.download.onclick": "One click download",
  "picgo.download.local.to.bed": "Upload picture to bed",
  "picgo.download.bed.to.local": "Upload picture from bed",
  "picgo.pic.preview": "Picture preview",
  "picgo.pic.setting": "Picture setting",
  "picgo.pic.setting.no.tip": "You are currently using the browser plug -in and cannot inherit PicGo. You can only call the local Picgo client on the local Picgo client through HTTP",
  "github.use.permalink": "Use permalink",
  "github.use.permalink.no.warn": "You have closed the permanent link, and Formatter will not generate a mark, which may be useful in some scenarios",
  "github.menu.title": "Menu title",
  "github.menu.title.placeholder": "The menu column title (HUGO platform is dedicated, but the empty is not displayed in the menu)",
  "github.weight": "Weight",
  "github.weight.placeholder": "Weight (decide to display the order, the smaller the display, the more upward)",
  "github.use.date": "Show date",
  "github.use.date.no.warn": "You have closed the date show that it will not generate the date field in Formatter",
  "github.post.picgo.use": "Use picbed",
  "github.post.picgo.use.tip": "To enable this option, the local picture will be uploaded to the custom diagram bed (the remote picture is not uploaded), please make sure that the PICGO diagram bed configuration is correct",
  "github.post.picgo.start.upload": "The picture bed has been opened, and the picture bed is about to upload the picture bed to the bed",
  "github.post.picgo.picbed.error": "The picture uploaded to the picture bed failed, it may be an error in the configuration of the graph, please check the picture bed configuration",
  "setting.yuque.home.tip": "The homepage of the language bird platform is usually fixed: https://www.yuque.com/",
  "setting.yuque.username.tip": "The user name of the spark platform, note that the user name is fixed in [account settings], not the user nickname (*^\u25BD^*)",
  "setting.yuque.password.tip": "For the token of the spark platform, please follow the link to get it. You only need to grant the document to read and modify the two permissions.",
  "setting.yuque.apiurl.tip": "The API address of the language bird platform is usually fixed: https://www.yuque.com/api/v2",
  "setting.liandi.home.tip": "The homepage of the chain drop platform is usually fixed: https://ld246.com/",
  "setting.liandi.username.tip": "The user name of the chain drop platform, note that after clicking [Personal Homepage], the user name displayed behind the MEMBER on the URL is not a user nickname (*^\u25BD^*)",
  "setting.liandi.password.tip": "Token on the chain drop platform, please click on the link to get",
  "setting.liandi.apiurl.tip": "The API address of the chain drop platform is usually fixed: https://ld246.com/api/v2",
  "setting.kms.home.tip": "KMS platform homepage, for example: http:// localhost: 9564/kms16_release/kms/multidoc",
  "setting.kms.username.tip": "KMS platform REST account user name, please create according to the link instruction",
  "setting.kms.password.tip": "KMS platform REST account password, please create according to the link instruction",
  "setting.kms.apiurl.tip": "The API address of the KMS platform, for example: http:// localhost: 9564/kms16_release/API/KMS-Multidoc/KMSMultidOWRESTSERVICE",
  "siyuan.local.share.tip": "Reminder: If you find that the sharing link or the browser can be displayed or the network connection is rejected, please check according to the following operation. 1: Siyuan Note-> Settings-> About-> Open the network servo; 2: After the browser is opened, click the bottom Siyuan address at the bottom to modify the corresponding address to the local area network IP address.",
  "setting.cnblogs.home.tip": "The homepage of your blog park is usually: https://www.cnblogs.com/ <your username>",
  "setting.cnblogs.username.tip": "Your blog garden MetaWeblog login name, you can go to your blog garden background-> Settings, note: login name, not a user nickname (*^\u25BD^*)",
  "setting.cnblogs.password.tip": "Your blog garden Metaweblog access token, you can go to your blog garden backstage-> Settings",
  "setting.cnblogs.apiUrl.tip": "Your blog garden Metaweblog access address, you can go to your blog park background-> settings, usually: https://rpc.cnblogs.com/metaweblog/ <Your username>",
  "setting.cnblogs.previewUrl.tip": "Preview rules for your blog garden article",
  "setting.wordpress.home.tip": "Wordpress homepage",
  "setting.wordpress.username.tip": "WordPress login name, note: it is login name, not a user nickname (*^\u25BD^*)",
  "setting.wordpress.password.tip": "Wordpress login password",
  "setting.wordpress.apiUrl.tip": "WordPress's XMLRPC remote release address, usually: https:// <WordPress blog address> /xmlrpc.php",
  "setting.wordpress.previewUrl.tip": "The preview rules of the WordPress platform are usually :? P = [Postid]",
  "setting.oschina.home.tip": "Homepage of open source China, usually: https://my.oschina.net/ <Your username>",
  "setting.oschina.username.tip": "Open source China login name, you can enter the login mailbox",
  "setting.oschina.password.tip": "Open source China login password",
  "setting.oschina.apiUrl.tip": "Open source China XMLRPC remote publishing address, usually fixed: https://www.oschina.net/ACTION/xmlrpc",
  "setting.oschina.previewUrl.tip": "The preview rules of the open source China platform are usually:/blog/[postid]",
  "setting.typecho.home.tip": "Homepage of the Typecho platform",
  "setting.typecho.username.tip": "Typecho platform login name",
  "setting.typecho.password.tip": "Typecho platform password",
  "setting.typecho.apiUrl.tip": "The XMLRPC remote publishing address of the Typecho platform is usually fixed: https: // <platform address> /index.php/xmlrpc",
  "setting.typecho.previewUrl.tip": "The preview rules of the Typecho platform are usually: /index.php/archives/ [Postid]",
  "setting.jvue.home.tip": "Homepage of the Jvue platform",
  "setting.jvue.username.tip": "Jvue platform login name",
  "setting.jvue.password.tip": "Jvue platform password",
  "setting.jvue.apiUrl.tip": "The XMLRPC remote release address of the JVUE platform is usually fixed: https: // <platform address>/xmlrpc",
  "setting.jvue.previewUrl.tip": "The preview rules of the Jvue platform are usually:/post/[postid] .html",
  "setting.conf.home.tip": "Confluence Cloud, homepage, usually: https: // <your user name> .atlassian.net/wiki/spaces/<Space name>",
  "setting.conf.username.tip": "CONFLUENCE login name, you can go to your Atlassian account to get",
  "setting.conf.password.tip": "Confluence access token, you can go to your Atlassian account to get",
  "setting.conf.apiUrl.tip": "You can go to https://developper.atlassian.com/Cloud/confluence/rest/v1/1/1/",
  "setting.conf.previewUrl.tip": "CONFLUENCE platform articles preview rules, usually:/pages/[postid]",
  "setting.picgo.refer.to": "For details, please refer to:",
  "setting.picgo.refer.to.online.doc": "Picgo configuration online documentation",
  "setting.picgo.picbed": "Picbed setting",
  "setting.picgo.picgo": "PicGO setting",
  "main.opt.edit": "Edit",
  "main.opt.delete": "Delete",
  "setting.picgo.picgo.open.config.file": "Open config file",
  "setting.picgo.picgo.click.to.open": "Click open",
  "setting.picgo.picgo.choose.showed.picbed": "Please select showed picbed",
  "setting.picgo.picbed.selected.tip": "Selected",
  "setting.picgo.picbed.unselected.tip": "Unselected",
  "setting.picgo.picbed.set.default": "Set as default picbed",
  "setting.picgo.picbed.current.selected.tip": "Current selected picbed is:",
  "setting.picgo.picbed.current.tip": "Current picbed is:",
  "setting.picgo.picbed.uploader.config.name": "Picbed config name",
  "setting.picgo.picbed.uploader.config.name.placeholder": "Please input config name",
  "setting.picgo.config.name": "Config name",
  "setting.picgo.config.name.placeholder": "Please input config name",
  "setting.picgo.index.tip": "Note: The image uploaded here will not be automatically inserted into the document. Please manually click the copy button to copy the link, and then Ctrl+V to paste it into the document. This picture list only shows the pictures contained in this document.",
  "setting.picgo.index.copy.link": "Copy link",
  "setting.picgo.setting.timestamp.rename": "Timestamp rename",
  "setting.picgo.setting.close": "Close",
  "setting.picgo.setting.open": "Open",
  "setting.picgo.setting.log.file": "Log file",
  "setting.picgo.plugin": "Plugin setting",
  "setting.picgo.plugin.list": "Plugin list",
  "setting.picgo.plugin.import.local": "Import local plugin",
  "setting.picgo.plugin.install": "Install",
  "setting.picgo.plugin.installing": "Installing",
  "setting.picgo.plugin.installed": "Installed",
  "setting.picgo.plugin.doing.something": "Loading",
  "setting.picgo.plugin.search.placeholder": "Search the picgo plug -in on NPM, or click the button above to view the excellent plug -in list",
  "setting.picgo.plugin.gui.not.implemented": "This plug -in does not optimize the visual interface, is it continued to be installed?",
  "setting.picgo.setting.node.path": "Node install path",
  "setting.picgo.setting.node.path.tip": "Please enter Node to install the full path, for example: /opt/node-v16.14.0-darwin-x64/bin, node version> = 16",
  "setting.picgo.setting.node.registry": "NPM registry",
  "setting.picgo.setting.node.registry.tip": "Mainland recommend\uFF1Ahttps://registry.npmmirror.com",
  "setting.picgo.setting.node.proxy": "NPM proxy",
  "setting.picgo.setting.node.proxy.tip": "Generally, you can leave empty. If you have special needs, you can set a custom agent",
  "setting.picgo.setting.config.tip": "Note: The attributes above the horizontal line will change the behavior of uploading pictures, and the configuration can be stored automatically. The attribute below the horizontal line is only used when installing the plug -in, and you need to click the [Confirm] button to save.",
  "setting.picgo.plugin.install.success": "The plug -in has been successfully installed, please clear the search keyword refresh list. Click the plug -in corresponding [Settings] icon to view the plug -in details and customize the plug -in",
  "syp.about": "About me",
  "setting.picgo.plugin.uninstall": "Uninstall plugin",
  "setting.picgo.plugin.uninstall.success": "Plugin is uninstalled successfully",
  "setting.picgo.plugin.enable": "Enable plugin",
  "setting.picgo.plugin.disable": "Disable plugin",
  "setting.picgo.plugin.update": "Update plugin",
  "setting.picgo.plugin.config.setting": "Plugin setting",
  "setting.picgo.plugin.work": "Work",
  "setting.picgo.plugin.nowork": "Nowork",
  "setting.picgo.plugin.nouse": "Nouse",
  "setting.picgo.plugin.update.success": "Update success",
  "setting.conf.import.syp": "Import pendant configuration",
  "setting.conf.import.picgo": "Import picgo configuration",
  "setting.conf.export.syp": "Export pendant configuration",
  "setting.conf.export.picgo": "Export picgo configuration",
  "setting.conf.import.syp.tip": "Please select effective historical backup JSON files for import. Note: The pendant configuration will be replaced.",
  "setting.conf.import.picgo.tip": "Please select effective historical backup JSON files for import. Note: PICGO configuration will be replaced directly. For the compatibility of configuration, please uninstall all plug -in and perform the picgo configuration export operation. Uninstall the PICGO plugin will not delete the plug -in configuration, only the plug -in file and the plug -in registration record will be deleted. Please rest assured.",
  "setting.conf.export.syp.tip": "The corresponding JSON configuration file will be exported, and configuration backups are strongly recommended. In principle, support is compatible. If there is any compatibility problem, it will be specifically explained.",
  "setting.conf.export.picgo.tip": "The corresponding JSON configuration file will be exported, and configuration backups are strongly recommended. In principle, support is compatible. If there is any compatibility problem, it will be specifically explained.",
  "setting.conf.clear.syp": "Clear pendant configuration",
  "setting.conf.clear.picgo": "Clear picgo configuration",
  "setting.conf.clear.tip": "Clear configuration cannot be restored, please do it carefully. It is strongly recommended to backup configuration first.",
  "setting.conf.clear.picgo.tip": "Clear configuration cannot be restored, please do it carefully. It is strongly recommended to backup configuration first. This operation will delete PicGo -related configuration folders, including configuration, plug -in, cache, etc. It is used only when picgo is completely unavailable, otherwise the consequences of the loss of configuration will be at your own risk!",
  "setting.main.background": "Widget background",
  "setting.main.background.tip": "Support hexadecimal and RGB, for example: #000000, no settings or staying empty unchanged"
};
const i18n = createI18n({
  legacy: false,
  locale: "zh_CN",
  fallbackLocale: "en_US",
  messages: {
    zh_CN,
    en_US
  }
});
const style = "";
const style_dark = "";
class CopyButtonPlugin {
  constructor(options = {}) {
    self.hook = options.hook;
    self.callback = options.callback;
  }
  "after:highlightElement"({ el, text }) {
    const button = Object.assign(document.createElement("button"), {
      innerHTML: "Copy",
      className: "hljs-copy-button"
    });
    button.dataset.copied = false;
    el.parentElement.classList.add("hljs-copy-wrapper");
    el.parentElement.appendChild(button);
    el.parentElement.style.setProperty(
      "--hljs-theme-background",
      window.getComputedStyle(el).backgroundColor
    );
    button.onclick = function() {
      if (!navigator.clipboard)
        return;
      let newText = text;
      if (hook && typeof hook === "function") {
        newText = hook(text, el) || text;
      }
      navigator.clipboard.writeText(newText).then(function() {
        button.innerHTML = "\u590D\u5236\u6210\u529F";
        button.dataset.copied = true;
        let alert = Object.assign(document.createElement("div"), {
          role: "status",
          className: "hljs-copy-alert",
          innerHTML: "\u590D\u5236\u5230\u526A\u8D34\u677F"
        });
        el.parentElement.appendChild(alert);
        setTimeout(() => {
          button.innerHTML = "Copy";
          button.dataset.copied = false;
          el.parentElement.removeChild(alert);
          alert = null;
        }, 2e3);
      }).then(function() {
        if (typeof callback === "function")
          return callback(newText, el);
      });
    };
  }
}
const codecopy = "";
const vs = "";
function renderMarkdownStr(md) {
  if (typeof Lute === "undefined") {
    return md;
  }
  const lute = Lute.New();
  const renderers = {};
  lute.SetJSRenderers({
    renderers: {
      Md2HTML: renderers
    }
  });
  return lute.MarkdownStr("", md);
}
function renderHTML(md) {
  return renderMarkdownStr(md);
}
const removeTitleNumber = (str) => {
  let newstr = str;
  const publisherRegex = /([0-9]*)\./;
  newstr = newstr.replace(publisherRegex, "");
  return newstr;
};
const removeWidgetTag = (str) => {
  let newstr = str.toString();
  const publisherRegex = /<iframe.*src="\/widgets\/publisher.*<\/iframe>/g;
  newstr = newstr.replace(publisherRegex, "");
  const syPublisherRegex = /<iframe.*src="\/widgets\/sy-post-publisher.*<\/iframe>/g;
  newstr = newstr.replace(syPublisherRegex, "");
  const noteAttrRegex = /<iframe.*\/widgets\/Note*\sAttrs.*\/iframe>/g;
  newstr = newstr.replace(noteAttrRegex, "");
  return newstr;
};
const removeMdWidgetTag = (str) => {
  let newstr = str.toString();
  newstr = removeWidgetTag(newstr);
  return newstr;
};
const filterHtml = (str) => {
  str = str.replace(/<style((.|\n|\r)*?)<\/style>/g, "");
  str = str.replace(/<script((.|\n|\r)*?)<\/script>/g, "");
  str = str.replace(/<[^>]*>/g, "");
  str = str.replace(/&.*;/g, "");
  str = str.replace(/(^\s*)|(\s*$)/g, "");
  str = str.replace(/</g, "").replace(/>/g, "");
  str = str.replace(/"/g, "").replace(/'/g, "");
  str = str.replace(/\*/g, "");
  str = str.replace(/\$/g, "");
  str = str.replace(/\./g, "");
  str = str.replace(/\+/g, "");
  str = str.replace(/\s+/g, "");
  str = str.replace(/[:|：]/g, "_");
  str = str.replace(/[;|；]/g, "_");
  str = str.replace(/\^/g, "_");
  str = str.replace(/!/g, "_");
  str = str.replace(/@/g, "at_");
  const excludeWords = ["\\d*/\\d/\\d*", "[\u3001|\\\\]", "[\uFF0C|,]", "\\d", "/", "-"];
  for (let i = 0; i < excludeWords.length; i++) {
    const regex = new RegExp(excludeWords[i], "g");
    str = str.replaceAll(regex, "");
  }
  str = str.toLowerCase();
  return str;
};
const parseHtml = (html, length, ignore) => {
  const allText = filterHtml(html);
  if (allText.length < length) {
    return allText;
  }
  if (ignore === true) {
    return allText.substring(0, length);
  }
  return allText.substring(0, length) + "...";
};
const mdToHtml = (md) => {
  const html = renderHTML(md);
  return removeWidgetTag(html);
};
const mdToPlainText = (md) => {
  let html = mdToHtml(md);
  return filterHtml(html);
};
const removeH1 = (html) => {
  let newstr = html;
  const h1Regex = /<h1.*\/h1>/g;
  newstr = newstr.replace(h1Regex, "");
  return newstr;
};
const removeMdH1 = (md) => {
  let newstr = md;
  const mdH1Regex = /^# .*$/gm;
  newstr = newstr.replace(mdH1Regex, "");
  return newstr;
};
const unescapeHTML = (a) => {
  a = "" + a;
  return a.replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
};
const getByLength = (str, length, ignore) => {
  const allText = str;
  if (allText.length < length) {
    return allText;
  }
  if (ignore === true) {
    return allText.substring(0, length);
  }
  return allText.substring(0, length) + "...";
};
const upperFirst = (name) => {
  return name.substring(0, 1).toUpperCase() + name.substring(1).toLowerCase();
};
const appendStr = (...str) => {
  return str.join("");
};
const mdFileToTitle = (fmtTitle) => {
  if (fmtTitle.indexOf(".md") > -1) {
    fmtTitle = fmtTitle.replace(/\.md/g, "");
  }
  if (fmtTitle.indexOf(".") > -1) {
    fmtTitle = removeTitleNumber(fmtTitle);
  }
  return fmtTitle;
};
const trimValues = (obj) => {
  const newObj = {};
  Object.keys(obj).forEach((key) => {
    newObj[key] = typeof obj[key] === "string" ? obj[key].trim() : obj[key];
  });
  return newObj;
};
const getRawData = (args) => {
  if (Array.isArray(args)) {
    const data = args.map((item) => {
      if (isRef(item)) {
        return unref(item);
      }
      if (isReactive(item)) {
        return toRaw(item);
      }
      return getRawData(item);
    });
    return data;
  }
  if (typeof args === "object") {
    const data = {};
    Object.keys(args).forEach((key) => {
      const item = args[key];
      if (isRef(item)) {
        data[key] = unref(item);
      } else if (isReactive(item)) {
        data[key] = toRaw(item);
      } else {
        data[key] = getRawData(item);
      }
    });
    return data;
  }
  return args;
};
const includeInArray = (str, arr) => {
  let flag = false;
  for (let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if (str.indexOf(item) > -1) {
      flag = true;
    }
  }
  return flag;
};
const strUtil = {
  trimValues,
  getRawData,
  includeInArray
};
const isBrowser = () => typeof window !== "undefined" && typeof window.document !== "undefined";
const isLocalhost = (apiUrl) => apiUrl.indexOf("127.0.0.1") > -1;
const isElectron = /Electron/.test(navigator.userAgent);
const getQueryString = (sParam) => {
  if (!isBrowser()) {
    return "";
  }
  const sPageURL = window.location.search.substring(1);
  const sURLVariables = sPageURL.split("&");
  for (let i = 0; i < sURLVariables.length; i++) {
    const sParameterName = sURLVariables[i].split("=");
    if (sParameterName[0] === sParam) {
      return sParameterName[1];
    }
  }
  return "";
};
const replaceUrlParam = (url, paramName, paramValue) => {
  if (paramValue == null) {
    paramValue = "";
  }
  const pattern = new RegExp("\\b(" + paramName + "=).*?(&|#|$)");
  if (url.search(pattern) >= 0) {
    return url.replace(pattern, "$1" + paramValue + "$2");
  }
  url = url.replace(/[?#]$/, "");
  return url + (url.indexOf("?") > 0 ? "&" : "?") + paramName + "=" + paramValue;
};
const setUrlParameter = (urlstring, key, value) => {
  if (!isBrowser()) {
    return "";
  }
  if (urlstring.includes(key)) {
    return replaceUrlParam(urlstring, key, value);
  }
  urlstring += (urlstring.match(/[?]/g) != null ? "&" : "?") + key + "=" + value;
  return urlstring;
};
const reloadPage = () => {
  setTimeout(function() {
    if (isBrowser()) {
      window.location.reload();
    }
  }, 200);
};
const reloadPageWithMessage = (msg, type = "success") => {
  if (type == "success") {
    ElMessage.success(msg);
  } else if (type == "warn") {
    ElMessage.warning(msg);
  }
  setTimeout(function() {
    if (isBrowser()) {
      window.location.reload();
    }
  }, 200);
};
const readJSONFileFormDialog = async () => {
  return await n({
    description: "JSON files",
    mimeTypes: ["application/json"],
    extensions: [".json"],
    multiple: true
  });
};
const copyToClipboardInBrowser = (text) => {
  if (navigator && navigator.clipboard) {
    navigator.clipboard.writeText(text).then(function() {
      ElMessage.success("\u590D\u5236\u6210\u529F");
    }, function(e) {
      ElMessage.error("\u590D\u5236\u5931\u8D25=>" + e);
    });
  } else {
    try {
      const input = document.createElement("input");
      input.style.position = "fixed";
      input.style.opacity = "0";
      input.value = text;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      document.body.removeChild(input);
      ElMessage.success("\u590D\u5236\u6210\u529F");
    } catch (e) {
      ElMessage.error("\u590D\u5236\u5931\u8D25=>" + e);
    }
  }
};
function isInChromeExtension() {
  if (!isBrowser()) {
    return false;
  }
  return window.location.href.indexOf("chrome-extension://") > -1;
}
const browserUtil = {
  reloadPageWithMessage
};
const vueHljs = {};
vueHljs.install = (Vue) => {
  HighlightJS.registerLanguage("javascript", javascript);
  HighlightJS.registerLanguage("js", javascript);
  HighlightJS.registerLanguage("typescript", typescript);
  HighlightJS.registerLanguage("ts", typescript);
  HighlightJS.registerLanguage("c", c);
  HighlightJS.registerLanguage("cpp", cpp);
  HighlightJS.registerLanguage("java", java);
  HighlightJS.registerLanguage("kotlin", kotlin);
  HighlightJS.registerLanguage("csharp", java);
  HighlightJS.registerLanguage("cs", java);
  HighlightJS.registerLanguage("bash", bash);
  HighlightJS.registerLanguage("shell", bash);
  HighlightJS.registerLanguage("xml", xml);
  HighlightJS.registerLanguage("html", xml);
  HighlightJS.registerLanguage("css", css);
  HighlightJS.registerLanguage("plaintext", plaintext);
  HighlightJS.registerLanguage("plantuml", plaintext);
  HighlightJS.registerLanguage("php", php);
  HighlightJS.registerLanguage("properties", properties);
  HighlightJS.registerLanguage("sql", sql);
  HighlightJS.registerLanguage("markdown", markdown);
  HighlightJS.registerLanguage("md", markdown);
  HighlightJS.addPlugin(
    new CopyButtonPlugin({
      callback: (text, el) => console.log("Copied to clipboard", text)
    })
  );
  Vue.directive("highlight", (el) => {
    const blocks = el.querySelectorAll("pre code");
    Array.prototype.forEach.call(blocks, HighlightJS.highlightBlock);
    const codeGroups = el.querySelectorAll("code-group");
    codeGroups.forEach((group) => {
      var _a2;
      if (group.getElementsByTagName("ul").length === 0) {
        const newNode = document.createElement("ul");
        newNode.setAttribute("class", "code-tab");
        const codeBlocks = group.querySelectorAll("code-block");
        codeBlocks.forEach((block) => {
          var _a3, _b2;
          const title = (_a3 = block.attributes.getNamedItem("title")) == null ? void 0 : _a3.value;
          const active = (_b2 = block.attributes.getNamedItem("active")) == null ? void 0 : _b2.value;
          const isActive = active !== void 0;
          const item = document.createElement("li");
          item.setAttribute(
            "class",
            isActive ? "code-tab-item current" : "code-tab-item"
          );
          item.innerHTML = title || "";
          item.addEventListener("click", function(event) {
            const targetElement = event.target;
            const allLis = targetElement.parentElement.querySelectorAll("li");
            allLis.forEach((li) => {
              li.setAttribute("class", "code-tab-item");
            });
            targetElement.setAttribute("class", "code-tab-item current");
            codeBlocks.forEach((cb) => {
              var _a4;
              if (((_a4 = cb.attributes.getNamedItem("title")) == null ? void 0 : _a4.value) === targetElement.innerHTML) {
                cb.setAttribute("active", "");
              } else {
                cb.removeAttribute("active");
              }
            });
          });
          newNode.append(item);
        });
        const firstBlock = codeBlocks[0];
        (_a2 = firstBlock == null ? void 0 : firstBlock.parentNode) == null ? void 0 : _a2.insertBefore(newNode, firstBlock);
      }
    });
    const umlBlocks = el.querySelectorAll("div.language-plantuml");
    umlBlocks.forEach((item) => {
      var _a2;
      const umlstr = unescapeHTML(item.innerHTML);
      const encoded = browserIndex.encode(umlstr);
      const plantUMLServer = { "VITE_LOG_INFO_ENABLED": "true", "VITE_DEBUG_MODE": "false", "VITE_MIDDLEWARE_URL": "https://api.terwer.space/api/middleware" }.PLANT_UML_SERVR || "https://www.plantuml.com/plantuml/svg/";
      const url = plantUMLServer + encoded;
      const newNode = document.createElement("img");
      newNode.setAttribute("src", url);
      (_a2 = item == null ? void 0 : item.parentNode) == null ? void 0 : _a2.insertBefore(newNode, item);
      item.remove();
    });
    const inlineMathBlocks = el.querySelectorAll("span.language-math");
    inlineMathBlocks.forEach((item) => {
      if (isInChromeExtension()) {
        let html = item.innerHTML;
        html = html.replace(/，/g, ",");
        html = html.replace(/。/g, ".");
        html = html.replace(/并且/g, "AND");
        html = html.replace(/或者/g, "OR");
        html = encodeURIComponent(html);
        const newHtml = '<img src="https://latex.codecogs.com/svg.image?' + html + '" />';
        item.innerHTML = newHtml;
      } else {
        const newHtml = "$" + item.innerHTML + "$";
        item.innerHTML = newHtml;
      }
    });
    const mathBlocks = el.querySelectorAll("div.language-math");
    mathBlocks.forEach((item) => {
      if (isInChromeExtension()) {
        let html = item.innerHTML;
        html = html.replace(/，/g, ",");
        html = html.replace(/。/g, ".");
        html = html.replace(/并且/g, "AND");
        html = html.replace(/或者/g, "OR");
        html = encodeURIComponent(html);
        const newHtml = '<img src="https://latex.codecogs.com/svg.image?' + html + '" />';
        item.innerHTML = newHtml;
      } else {
        const newHtml = "$$" + item.innerHTML + "$$";
        item.innerHTML = newHtml;
      }
    });
    if (!isInChromeExtension()) {
      MathJax.typeset();
    }
  });
};
const getEnv = (key) => {
  let env = "";
  try {
    if ({ "VITE_LOG_INFO_ENABLED": "true", "VITE_DEBUG_MODE": "false", "VITE_MIDDLEWARE_URL": "https://api.terwer.space/api/middleware", "BASE_URL": "/widgets/sy-post-publisher/", "MODE": "production", "DEV": false, "PROD": true }[key]) {
      env = { "VITE_LOG_INFO_ENABLED": "true", "VITE_DEBUG_MODE": "false", "VITE_MIDDLEWARE_URL": "https://api.terwer.space/api/middleware", "BASE_URL": "/widgets/sy-post-publisher/", "MODE": "production", "DEV": false, "PROD": true }[key];
    }
  } catch (e) {
    throw new Error(e);
  }
  return env;
};
const getBooleanEnv = (key) => {
  let env = false;
  if (getEnv(key)) {
    env = getEnv(key).toLowerCase() === "true";
  }
  return env;
};
const isNodeDev = false;
const isDev$1 = getBooleanEnv("VITE_DEBUG_MODE");
const envUtil = {
  isNodeDev,
  isDev: isDev$1
};
const chalk = {
  gray: (src) => {
    return src.toString();
  },
  green: (src) => {
    return src.toString();
  },
  yellow: (src) => {
    return src.toString();
  },
  red: (src) => {
    return src.toString();
  }
};
const isTest = { "VITE_LOG_INFO_ENABLED": "true", "VITE_DEBUG_MODE": "false", "VITE_MIDDLEWARE_URL": "https://api.terwer.space/api/middleware" }.TEST === "true";
const isDev = envUtil.isDev;
const LOG_INFO_ENABLED = (_a = getBooleanEnv("VITE_LOG_INFO_ENABLED")) != null ? _a : false;
const LOG_LEVEL_DEBUG = "DEBUG";
const LOG_LEVEL_INFO = "INFO";
const LOG_LEVEL_WARN = "WARN";
const LOG_LEVEL_ERROR = "ERROR";
const CONSOLE_LOGGER = "console";
prefix.reg(loglevel);
if (isTest || isDev) {
  loglevel.setLevel(LOG_LEVEL_DEBUG);
} else {
  loglevel.setLevel(LOG_INFO_ENABLED ? LOG_LEVEL_INFO : LOG_LEVEL_WARN);
}
prefix.apply(loglevel, {
  format(level, name, timestamp) {
    const strarr = [];
    strarr.push(chalk.gray("[") + chalk.green(timestamp).toString() + chalk.gray("]"));
    switch (level) {
      case LOG_LEVEL_INFO:
        strarr.push(chalk.green(level.toUpperCase().toString()));
        break;
      case LOG_LEVEL_WARN:
        strarr.push(chalk.yellow(level.toUpperCase().toString()));
        break;
      case LOG_LEVEL_ERROR:
        strarr.push(chalk.red(level.toUpperCase().toString()));
        break;
    }
    strarr.push(chalk.green(name).toString());
    strarr.push(chalk.gray(":"));
    return strarr.join(" ");
  }
});
const getLogger = (loggerName) => {
  return loglevel.getLogger(loggerName != null ? loggerName : CONSOLE_LOGGER);
};
const LogFactory = {
  getLogger
};
const MAX_TITLE_LENGTH = 10;
const MAX_PREVIEW_LENGTH = 255;
const DYNAMIC_CONFIG_KEY = "dynamic-config";
const PUBLISH_PREFERENCE_CONFIG_KEY = "publish-preference";
const PUBLISH_DYNAMIC_SLUG = "[dynamic-generated-on-publish]";
const PICGO_FILE_MAP_KEY = "custom-picgo-file-map-key";
const DEFAULT_JIEBA_WORD_LENGTH = 5;
const CONSTANTS = {
  MAX_TITLE_LENGTH,
  MAX_PREVIEW_LENGTH,
  DYNAMIC_CONFIG_KEY,
  DEFAULT_JIEBA_WORD_LENGTH,
  PUBLISH_PREFERENCE_CONFIG_KEY,
  PUBLISH_DYNAMIC_SLUG,
  PICGO_FILE_MAP_KEY
};
const logger$b = LogFactory.getLogger();
const zhSlugify = async (q) => {
  const v = await fetch("https://api.terwer.space/api/translate?q=" + q);
  const json = await v.json();
  let res = json[0][0];
  res = res.replaceAll(/-/g, "");
  res = res.replaceAll(/\./g, "");
  res = res.replaceAll(/~/g, "");
  res = d(res);
  res = res.replaceAll(/@/g, "");
  return res;
};
const pinyinSlugify = (q) => d(q);
const cutWords = async (words) => {
  words = mdToPlainText(words);
  logger$b.debug("\u51C6\u5907\u5F00\u59CB\u5206\u8BCD\uFF0C\u539F\u6587=>", words);
  const v = await fetch("https://api.terwer.space/api/jieba?q=" + words);
  const json = await v.json();
  logger$b.debug("\u5206\u8BCD\u5B8C\u6BD5\uFF0C\u7ED3\u679C=>", json.result);
  return json.result;
};
function countWords(words, len) {
  const unUseWords = ["\u9875\u9762"];
  logger$b.debug("\u6587\u672C\u6E05\u6D17\uFF0C\u7EDF\u8BA1\uFF0C\u6392\u5E8F\uFF0C\u53BB\u9664\u65E0\u610F\u4E49\u7684\u5355\u8BCDunUseWords=>", unUseWords);
  const wordobj = words.reduce(function(count, word) {
    if (word.length === 1 || unUseWords.includes(word)) {
      count[word] = 0;
      return count;
    }
    count[word] = count.hasOwnProperty(word) ? parseInt(count[word]) + 1 : 1;
    return count;
  }, {});
  const wordarr = Object.keys(wordobj).sort(function(a, b) {
    return wordobj[b] - wordobj[a];
  });
  logger$b.debug("\u6587\u672C\u6E05\u6D17\u7ED3\u675Fwordarr=>", wordarr);
  if (!len || len === 0) {
    return wordarr;
  }
  return wordarr.slice(0, len);
}
function jiebaToHotWords(words, len) {
  let res;
  const deflen = CONSTANTS.DEFAULT_JIEBA_WORD_LENGTH;
  if (len) {
    res = countWords(words, len);
  } else {
    res = countWords(words, deflen);
  }
  logger$b.debug("jiebaToHotWords=>", res);
  return res;
}
const isEmptyObject = (obj) => {
  if (!obj) {
    return true;
  }
  return Object.getPrototypeOf(obj) === Object.prototype && Object.getOwnPropertyNames(obj).length === 0 && Object.getOwnPropertySymbols(obj).length === 0;
};
const isEmptyString = (str) => {
  if (!str) {
    return true;
  }
  if (!(typeof str === "string")) {
    return true;
  }
  return str.trim().length === 0;
};
const pathJoin = (path1, path2) => {
  let path = path1;
  const path1LastIdx = path1.lastIndexOf("/");
  if (path1LastIdx + 1 === path1.length) {
    path = path1.substring(0, path1LastIdx);
  }
  const path2Idx = path2.indexOf("/");
  if (path2Idx > 0) {
    path = path + "/" + path2;
  } else {
    path = path + path2;
  }
  return path;
};
const parseBoolean = (val) => {
  if (!val) {
    val = "false";
  }
  return val.toString().toLowerCase() === "true";
};
const getLocalStorageAdaptor = (cfgfile) => {
  let ret = window.localStorage;
  if (isElectron) {
    if (isInSiyuanWidget()) {
      ret = parent.window.JsonLocalStorage;
    } else {
      ret = window.JsonLocalStorage;
    }
    let cfg = "sy-p-cfg.json";
    if (cfgfile) {
      cfg = cfgfile;
    }
    ret.switchCfg(cfg);
  } else {
    ret = window.localStorage;
  }
  return ret;
};
const logger$a = LogFactory.getLogger();
const getConf = (key) => {
  const store = getLocalStorageAdaptor();
  const value = store.getItem(key);
  if (!value) {
    return "";
  }
  return value;
};
const getBooleanConf = (key) => {
  const value = getConf(key);
  const valueObj = value.toLowerCase() === "true";
  logger$a.debug("\u4ECElocalStorage\u83B7\u53D6Boolean\u6570\u636E=>");
  logger$a.debug(valueObj);
  return valueObj;
};
function getJSONConf(key) {
  logger$a.debug("------------------------------");
  logger$a.debug("\u5C1D\u8BD5\u4ECElocalStorage\u83B7\u53D6JSON\u6570\u636E\uFF0Ckey=>", key);
  let valueObj = {};
  const value = getConf(key);
  if (value !== "") {
    try {
      valueObj = JSON.parse(value);
    } catch (e) {
      logger$a.error("JSON\u683C\u5F0F\u4E0D\u6B63\u786E", e);
      throw e;
    }
  }
  logger$a.debug("\u4ECElocalStorage\u83B7\u53D6JSON\u6570\u636E=>", valueObj);
  logger$a.debug("------------------------------");
  return valueObj;
}
function parseJSONObj(objstr) {
  logger$a.debug("------------------------------");
  logger$a.debug("\u5C1D\u8BD5\u4ECEJSON\u5B57\u7B26\u4E32\u89E3\u6790Object\uFF0Cobjstr=>", objstr);
  let valueObj = {};
  const value = objstr;
  if (value !== "") {
    try {
      valueObj = JSON.parse(value);
    } catch (e) {
      logger$a.error("JSON\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u5C06\u76F4\u63A5\u8FD4\u56DE{}=>", e);
    }
  }
  logger$a.debug("\u4ECEJSON\u5B57\u7B26\u4E32\u89E3\u6790Object=>", valueObj);
  logger$a.debug("------------------------------");
  return valueObj;
}
const setConf = (key, value) => {
  if (!value || value === "") {
    logger$a.warn("\u7A7A\u503C\uFF0C\u4E0D\u4FDD\u5B58");
    return;
  }
  const store = getLocalStorageAdaptor();
  store.setItem(key, value);
};
const setBooleanConf = (key, value) => {
  const boolString = value.toString();
  setConf(key, boolString);
};
const setJSONConf = (key, value) => {
  logger$a.debug("++++++++++++++++++++++++++++++");
  logger$a.debug("\u5C1D\u8BD5\u4FDD\u5B58JSON\u6570\u636E\u5230localStorage\u91CCkey=>", key);
  logger$a.debug("\u4FDD\u5B58JSON\u6570\u636E\u5230localStorage=>", value);
  const valueString = JSON.stringify(value);
  setConf(key, valueString);
  logger$a.debug("++++++++++++++++++++++++++++++");
};
const toJSONString = (value) => {
  logger$a.debug("++++++++++++++++++++++++++++++");
  logger$a.debug("\u5C1D\u8BD5\u5C06Object\u8F6C\u6362\u4E3AJSON\u5B57\u7B26\u4E32", value);
  const valueString = JSON.stringify(value);
  logger$a.debug("\u5C06Object\u8F6C\u6362\u4E3AJSON\u5B57\u7B26\u4E32=>", valueString);
  logger$a.debug("++++++++++++++++++++++++++++++");
  return valueString;
};
const checkKeyExists = (key) => {
  const store = getLocalStorageAdaptor();
  let flag = false;
  for (let i = 0; i < store.length; i++) {
    const getKey = store.key(i);
    if (key === getKey) {
      flag = true;
      break;
    }
  }
  return flag;
};
const getAllConf = () => {
  const store = getLocalStorageAdaptor();
  const data = {};
  for (let i = 0; i < store.length; i++) {
    const key = store.key(i);
    const value = store.getItem(key);
    data[key] = value;
  }
  return data;
};
const downloadFileFromJson = (json, filename) => {
  const blob = new Blob([json], {
    type: "application/json"
  });
  const link = document.createElement("a");
  link.download = filename != null ? filename : "data.json";
  link.href = URL.createObjectURL(blob);
  document.body.appendChild(link);
  link.click();
};
const exportConf = (filename) => {
  const data = getAllConf();
  const json = JSON.stringify(data);
  downloadFileFromJson(json, filename);
};
const importConf = async () => {
  try {
    await importJSONToLocalStorage();
    ElMessage.success("\u5BFC\u5165\u6210\u529F");
    reloadPage();
  } catch (e) {
    if (e.toString().indexOf("AbortError") > -1) {
      logger$a.warn("\u60A8\u53D6\u6D88\u4E86\u5BFC\u5165=>", e);
    } else {
      logger$a.error("\u914D\u7F6E\u6587\u4EF6\u89E3\u6790\u9519\u8BEF=>", e);
      ElMessage.error(appendStr("\u914D\u7F6E\u6587\u4EF6\u89E3\u6790\u9519\u8BEF=>", e));
    }
  }
};
const clearConf = () => {
  const store = getLocalStorageAdaptor();
  store.clear();
  if (store.length === 0) {
    console.log("LocalStorage is empty");
  } else {
    console.log("LocalStorage is not empty");
  }
};
const configUtil = {
  downloadFileFromJson
};
const SIYUAN_CFG_KEY = "siyuan-cfg";
const DEBUG_SIYUAN_SUBDOC = false;
const SIYUAN_CONSTANTS = {
  SIYUAN_CFG_KEY,
  DEBUG_SIYUAN_SUBDOC
};
class SiYuanConfig {
  constructor(baseUrl, token, middlewareUrl) {
    __publicField(this, "baseUrl");
    __publicField(this, "token");
    __publicField(this, "middlewareUrl");
    this.baseUrl = baseUrl;
    this.token = token;
    this.middlewareUrl = middlewareUrl;
  }
}
const getSiyuanCfg = () => {
  var _a2, _b2, _c;
  let baseUrl = (_a2 = getEnv("VITE_SIYUAN_API_URL")) != null ? _a2 : "";
  let token = (_b2 = getEnv("VITE_SIYUAN_CONFIG_TOKEN")) != null ? _b2 : "";
  let middlewareUrl = (_c = getEnv("VITE_MIDDLEWARE_URL")) != null ? _c : "";
  const siyuanCfg = getJSONConf(SIYUAN_CONSTANTS.SIYUAN_CFG_KEY);
  if (!isEmptyString(siyuanCfg.baseUrl)) {
    baseUrl = siyuanCfg.baseUrl;
  }
  if (!isEmptyString(siyuanCfg.token)) {
    token = siyuanCfg.token;
  }
  if (!isEmptyString(siyuanCfg.middlewareUrl)) {
    middlewareUrl = siyuanCfg.middlewareUrl;
  }
  if (isEmptyString(baseUrl)) {
    if (isInChromeExtension() || envUtil.isDev) {
      baseUrl = "http://127.0.0.1:6806";
    } else {
      baseUrl = window.location.protocol + "//" + window.location.host;
    }
  }
  if (isEmptyString(token)) {
    token = "";
  }
  if (isEmptyString(middlewareUrl)) {
    middlewareUrl = "https://api.terwer.space/api/middleware";
  }
  return new SiYuanConfig(baseUrl, token, middlewareUrl);
};
class SiYuanApi {
  constructor() {
    __publicField(this, "logger", LogFactory.getLogger("utils/platform/siyuan/siYuanApi.ts"));
  }
  async getRootBlocksCount(keyword) {
    const stmt = `SELECT COUNT(DISTINCT b1.root_id) as count
        FROM blocks b1
        WHERE 1 = 1
        AND (b1.root_id ='${keyword}' OR (b1.content LIKE '%${keyword}%') OR (b1.tag LIKE '%${keyword}%')
    )`;
    const data = await this.sql(stmt);
    this.logger.debug("getRootBlocksCount data=>", data[0].count);
    return data[0].count;
  }
  async getRootBlocks(page, pagesize, keyword) {
    const stmt = `select DISTINCT b2.root_id,b2.parent_id,b2.content from blocks b2 
        WHERE 1==1
        AND b2.id IN (
             SELECT DISTINCT b1.root_id
                FROM blocks b1
                WHERE 1 = 1
                AND (b1.root_id ='${keyword}' OR (b1.content LIKE '%${keyword}%') OR (b1.tag LIKE '%${keyword}%'))
                ORDER BY b1.updated DESC,b1.created DESC LIMIT ${page * pagesize},${pagesize}
        )
        ORDER BY b2.updated DESC,b2.created DESC`;
    return await this.sql(stmt);
  }
  async getSubdocCount(docId) {
    const stmt = `SELECT COUNT(DISTINCT b1.root_id) AS count
        FROM blocks b1
        WHERE b1.root_id='${docId}' OR b1.path LIKE '%/${docId}%'`;
    const data = await this.sql(stmt);
    return data[0].count;
  }
  async getSubdocs(docId, page, pagesize, keyword) {
    const stmt = `SELECT DISTINCT b2.root_id,b2.content,b2.path FROM blocks b2
        WHERE b2.id IN (
          SELECT DISTINCT b1.root_id
             FROM blocks b1
             WHERE b1.root_id='${docId}' OR b1.path like '%/${docId}%'
             AND ((b1.content LIKE '%${keyword}%') OR (b1.tag LIKE '%${keyword}%'))
             ORDER BY b1.updated DESC,b1.created DESC LIMIT ${page * pagesize},${pagesize}
        )
        ORDER BY b2.content,b2.updated DESC,b2.created DESC,id`;
    this.logger.debug("siyuanApi getSubdocs sql=>", stmt);
    return await this.sql(stmt);
  }
  async getAnkilinkInfo(blockId) {
    const stmt = `select distinct b.id, b.content,ifnull(attr.name,'custom-ankilink') as name, attr.value
from blocks b
left join attributes attr on attr.name = 'custom-ankilink' and attr.block_id = b.id
where b.root_id = '${blockId}'
  and b.type = 'h'`;
    this.logger.debug("siyuanApi getAnkilinkInfo sql=>", stmt);
    return await this.sql(stmt);
  }
  async getImageBlocksByID(blockId) {
    const stmt = `select *
                from blocks
                where root_id = '${blockId}' and markdown like '%![%'`;
    const data = await this.sql(stmt);
    if (!data) {
      throw new Error("\u901A\u8FC7ID\u67E5\u8BE2\u56FE\u7247\u5757\u4FE1\u606F\u5931\u8D25");
    }
    return data;
  }
  async getBlockByID(blockId) {
    const stmt = `select *
                from blocks
                where id = '${blockId}'`;
    const data = await this.sql(stmt);
    if (!data || data.length === 0) {
      throw new Error("\u901A\u8FC7ID\u67E5\u8BE2\u5757\u4FE1\u606F\u5931\u8D25");
    }
    return data[0];
  }
  async getBlockBySlug(slug) {
    const stmt = `select root_id from attributes 
               where name='custom-slug' and value='${slug}' 
               limit 1`;
    const data = await this.sql(stmt);
    return data[0];
  }
  async exportMdContent(docId) {
    const data = {
      id: docId
    };
    const url = "/api/export/exportMdContent";
    return await this.siyuanRequest(url, data);
  }
  async getBlockAttrs(blockId) {
    const data = {
      id: blockId
    };
    const url = "/api/attr/getBlockAttrs";
    return await this.siyuanRequest(url, data);
  }
  async setBlockAttrs(blockId, attrs) {
    const url = "/api/attr/setBlockAttrs";
    return await this.siyuanRequest(url, {
      id: blockId,
      attrs
    });
  }
  async getDoc(id) {
    const data = {
      id,
      k: "",
      mode: 2,
      size: 36
    };
    const url = "/api/filetree/getDoc";
    return await this.siyuanRequest(url, data);
  }
  async sql(sql2) {
    const sqldata = {
      stmt: sql2
    };
    const url = "/api/query/sql";
    this.logger.debug("sql=>", sql2);
    return await this.siyuanRequest(url, sqldata);
  }
  async siyuanRequest(url, data, method, useToken) {
    const siyuanCfg = getSiyuanCfg();
    if (siyuanCfg.baseUrl !== "") {
      url = appendStr(siyuanCfg.baseUrl, url);
    }
    let m = "POST";
    if (method != null) {
      m = method;
    }
    const fetchOps = {
      body: JSON.stringify(data),
      method: m
    };
    if (useToken) {
      Object.assign(fetchOps, {
        headers: {
          Authorization: `Token ${siyuanCfg.token}`
        }
      });
    }
    this.logger.debug("\u5F00\u59CB\u5411\u601D\u6E90\u8BF7\u6C42\u6570\u636E\uFF0Curl=>", url);
    this.logger.debug("\u5F00\u59CB\u5411\u601D\u6E90\u8BF7\u6C42\u6570\u636E\uFF0CfetchOps=>", fetchOps);
    const response = await fetch(url, fetchOps);
    const resJson = await response.json();
    this.logger.debug("\u601D\u6E90\u8BF7\u6C42\u6570\u636E\u8FD4\u56DE\uFF0CresJson=>", resJson);
    if (resJson.code === -1) {
      throw new Error(resJson.msg);
    }
    return resJson.code === 0 ? resJson.data : null;
  }
}
const isInSiyuanNewWinBrowser = () => {
  return typeof window.terwer !== "undefined";
};
const getSiyuanWindow = () => {
  if (isInSiyuanWidget()) {
    return parent.window;
  } else {
    if (isInSiyuanNewWinBrowser()) {
      return window;
    }
    return window;
  }
};
const getSiyuanNewWinDataDir = () => {
  var _a2;
  return (_a2 = window.terwer.dataDir) != null ? _a2 : "/notfound";
};
const doCloseExportWin = () => {
  const syWin = getSiyuanWindow();
  const { getCurrentWindow } = syWin.require("@electron/remote");
  getCurrentWindow().close();
};
const doOpenExportWin = async (pageId, pageUrl) => {
  const syWin = getSiyuanWindow();
  if (syWin.syp && syWin.syp.renderPublishHelper) {
    syWin.syp.renderPublishHelper(pageId, pageUrl, syWin, envUtil.isDev);
  } else {
    ElMessage.warning(
      "renderPublishHelper\u5931\u8D25\uFF0C\u672A\u627E\u5230hook\u65B9\u6CD5\uFF0C\u8BF7\u5728\u81EA\u5B9A\u4E49js\u7247\u6BB5\u6DFB\u52A0 import('/widgets/sy-post-publisher/lib/siyuanhook.js') \uFF0C\u5E76\u91CD\u542F\u601D\u6E90\u7B14\u8BB0"
    );
  }
};
const getSiyuanNewWinPageId = () => {
  let pageId;
  if (window && window.terwer && window.terwer.pageId) {
    pageId = window.terwer.pageId;
  }
  return pageId;
};
const fitTheme = () => {
  const syWin = parent.window;
  const customstyle = syWin.customstyle;
  fitThemeCustom(customstyle);
};
const fitThemeCustom = (customstyle) => {
  const customAppBgColor = getComputedStyle(
    document.documentElement
  ).getPropertyValue("--custom-app-bg-color");
  if (!isEmptyString(customstyle.backgroundColor) && customstyle.backgroundColor !== customAppBgColor) {
    document.documentElement.style.setProperty(
      "--custom-app-bg-color",
      customstyle.backgroundColor
    );
    console.log("\u91CD\u65B0\u9002\u914Dcustomstyle\u5B8C\u6210=>", customstyle);
  }
};
const openPath = (absFilePath) => {
  const syWin = getSiyuanWindow();
  if (syWin.syp && syWin.syp.openPath) {
    syWin.syp.openPath(absFilePath);
  } else {
    ElMessage.warning(
      "openPath\u5931\u8D25\uFF0C\u672A\u627E\u5230hook\u65B9\u6CD5\uFF0C\u8BF7\u5728\u81EA\u5B9A\u4E49js\u7247\u6BB5\u6DFB\u52A0 import('/widgets/sy-post-publisher/lib/siyuanhook.js') \uFF0C\u5E76\u91CD\u542F\u601D\u6E90\u7B14\u8BB0"
    );
  }
};
const siyuanBrowserUtil = {
  fitTheme,
  fitThemeCustom,
  getSiyuanWindow,
  openPath
};
const logger$9 = LogFactory.getLogger("utils/platform/siyuan/siyuanUtil.ts");
const getWidgetId = () => {
  if (window.frameElement == null || window.frameElement.parentElement == null || window.frameElement.parentElement.parentElement == null) {
    return {
      isInSiyuan: false,
      widgetId: ""
    };
  }
  const self2 = window.frameElement.parentElement.parentElement;
  if (!self2) {
    return {
      isInSiyuan: false,
      widgetId: ""
    };
  }
  const widgetId = self2.getAttribute("data-node-id");
  if (!widgetId) {
    return {
      isInSiyuan: false,
      widgetId: ""
    };
  }
  return {
    isInSiyuan: true,
    widgetId
  };
};
const isInSiyuanWidget = () => {
  const widgetResult = getWidgetId();
  return widgetResult.isInSiyuan;
};
const isInSiyuanOrSiyuanNewWin = () => {
  return isElectron;
};
const getWidgetPage = async (force) => {
  const widgetResult = getWidgetId();
  if (!widgetResult.isInSiyuan) {
    return;
  }
  const widgetId = widgetResult.widgetId;
  logger$9.debug("\u83B7\u53D6\u6302\u4EF6\u7684widgetId=>", widgetId);
  const pageObj = getJSONConf(widgetId);
  if (!force && pageObj) {
    logger$9.debug("\u83B7\u53D6\u672C\u5730\u7F13\u5B58\u7684\u601D\u6E90\u7B14\u8BB0\u9875\u9762\u4FE1\u606F\uFF08\u4E0D\u662F\u5B9E\u65F6\u7684\uFF09=>", pageObj);
    return pageObj;
  }
  const siyuanApi = new SiYuanApi();
  const page = await siyuanApi.getBlockByID(widgetId);
  if (page) {
    setJSONConf(widgetId, page);
    logger$9.debug("\u8C03\u7528API\u8BBE\u7F6E\u67E5\u8BE2\u601D\u6E90\u9875\u9762\u4FE1\u606F\u5E76\u66F4\u65B0\u672C\u5730\u7F13\u5B58", page);
  }
  return page;
};
const getSiyuanPageId = async (force) => {
  const page = await getWidgetPage(force);
  if (!page) {
    return;
  }
  const pageId = page.root_id;
  logger$9.debug("\u83B7\u53D6\u601D\u6E90\u7B14\u8BB0\u9875\u9762ID=>", pageId);
  return pageId;
};
const getPageId = async (force, pageId) => {
  let syPageId;
  if (pageId) {
    logger$9.debug("\u663E\u793A\u6307\u5B9ApageId=>", pageId);
    syPageId = pageId;
  }
  if (!syPageId) {
    const widgetResult = getWidgetId();
    if (widgetResult.isInSiyuan) {
      syPageId = await getSiyuanPageId(force);
    }
    if (isInSiyuanNewWinBrowser()) {
      syPageId = getSiyuanNewWinPageId();
    }
  }
  if (!syPageId) {
    if (isBrowser()) {
      const qPageId = getQueryString("id");
      if (qPageId !== "") {
        syPageId = qPageId;
      }
    }
    if (!syPageId) {
      const testPageId = getEnv("VITE_SIYUAN_DEV_PAGE_ID");
      if (testPageId) {
        syPageId = testPageId;
      }
    }
  }
  return syPageId;
};
var DeviceType = /* @__PURE__ */ ((DeviceType2) => {
  DeviceType2["DeviceType_Siyuan_NewWin"] = "Siyuan_NewWin";
  DeviceType2["DeviceType_Siyuan_Widget"] = "Siyuan_Widget";
  DeviceType2["DeviceType_Chrome_Extension"] = "Chrome_Extension";
  DeviceType2["DeviceType_Chrome_Browser"] = "Chrome_Browser";
  return DeviceType2;
})(DeviceType || {});
class DeviceUtil {
  static getDevice() {
    if (isInSiyuanWidget()) {
      return "Siyuan_Widget";
    }
    if (isInSiyuanNewWinBrowser()) {
      return "Siyuan_NewWin";
    }
    if (isInChromeExtension()) {
      return "Chrome_Extension";
    }
    return "Chrome_Browser";
  }
}
const logger$8 = LogFactory.getLogger();
const FROM_SIYUAN = "siyuan";
const FROM_SIYUAN_NEWWIN = "siyuanNewWin";
const FROM_CHROME = "chrome";
const FROM_CONSTANTS = {
  FROM_SIYUAN,
  FROM_SIYUAN_NEWWIN,
  FROM_CHROME
};
const appendHost = (host, srcUrl, split) => {
  let url = srcUrl;
  let baseUrl = window.location.protocol + "//" + host;
  if (split && split !== "") {
    baseUrl = window.location.protocol + "//" + host + split;
  }
  url = pathJoin(baseUrl, url);
  return url;
};
const getPageUrl = (pageUrl, split) => {
  let url = pageUrl;
  if (url.startsWith("http") || url.startsWith("https")) {
    logger$8.debug("\u5F53\u524D\u662F\u5916\u90E8\u94FE\u63A5\uFF0C\u76F4\u63A5\u8DF3\u8F6C");
    return url;
  }
  const deviceType = DeviceUtil.getDevice();
  console.log("deviceType=>", deviceType);
  let from = getQueryString("from");
  if (deviceType === DeviceType.DeviceType_Siyuan_Widget || deviceType === DeviceType.DeviceType_Siyuan_NewWin || FROM_CONSTANTS.FROM_SIYUAN === from || FROM_CONSTANTS.FROM_SIYUAN_NEWWIN === from) {
    url = "/widgets/sy-post-publisher" + url;
    if (isInSiyuanWidget()) {
      from = FROM_CONSTANTS.FROM_SIYUAN;
    }
    if (isInSiyuanNewWinBrowser()) {
      from = FROM_CONSTANTS.FROM_SIYUAN_NEWWIN;
    }
    if (isInChromeExtension()) {
      from = FROM_CONSTANTS.FROM_CHROME;
    }
    if (!isEmptyString(from)) {
      url = setUrlParameter(url, "from", from);
    }
    let host = window.location.host;
    if (isInSiyuanNewWinBrowser()) {
      const ipv4 = window.terwer.ip;
      host = ipv4 + ":" + window.location.port;
    }
    url = appendHost(host, url, split);
  } else if (deviceType === DeviceType.DeviceType_Chrome_Extension) {
    url = chrome.runtime.getURL(url);
  } else {
    let host = window.location.host;
    url = appendHost(host, url, split);
  }
  logger$8.warn("\u5C06\u8981\u6253\u5F00\u9875\u9762=>", url);
  return url;
};
function goToPage(pageUrl) {
  const url = getPageUrl(pageUrl, "");
  window.open(url);
}
async function sendChromeMessage(message) {
  return await new Promise((resolve) => {
    chrome.runtime.sendMessage(message, resolve);
  });
}
const importJSONData = async (callback2) => {
  const files = await readJSONFileFormDialog();
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const data = JSON.parse(reader.result);
    console.log("\u51C6\u5907\u5BFC\u5165\u914D\u7F6E\uFF0C\u8BFB\u53D6\u5230\u7684\u914D\u7F6E\u6570\u636E\u4E3A=>", data);
    callback2(data);
  });
  reader.readAsText(files[0]);
};
const importJSONToLocalStorage = async () => {
  const store = getLocalStorageAdaptor();
  await importJSONData(function(data) {
    for (const [key, value] of Object.entries(data)) {
      store.setItem(key, value);
    }
  });
};
const isWindows = "Windows" === ((_b = navigator == null ? void 0 : navigator.userAgentData) == null ? void 0 : _b.platform);
const isSlot = getQueryString("isSlot") === "true";
const isFileExist = (filepath) => {
  const fs = require("fs");
  if (fs.existsSync(filepath)) {
    console.log("File exists");
    return true;
  } else {
    console.log("File does not exist");
    return false;
  }
};
const logger$7 = LogFactory.getLogger("plugins/page-beauty/page-beauty.ts");
const PageBeauty = {
  install(Vue) {
    Vue.directive("beauty", (el) => {
      logger$7.debug("PageBeauty is rendering ...");
      const links = el.querySelectorAll("a");
      if (links && links.length > 0) {
        links.forEach((link) => {
          const href = link.getAttribute("href");
          if (href.includes("siyuan://blocks/")) {
            let newHref = href.replace(/siyuan:\/\/blocks\//g, "");
            newHref = "/detail/index.html?id=" + newHref;
            link.setAttribute("href", newHref);
          }
          link.addEventListener("click", function(evt) {
            evt.preventDefault();
            const href2 = link.getAttribute("href");
            logger$7.debug("href=>", href2);
            if (!isEmptyString(href2)) {
              goToPage(href2);
            }
          });
        });
        logger$7.debug("\u94FE\u63A5\u5904\u7406\u5B8C\u6BD5\uFF0C\u5168\u90E8\u65B0\u7A97\u53E3\u6253\u5F00.");
      }
      const imgs = el.querySelectorAll("img");
      if (imgs && imgs.length > 0) {
        imgs.forEach((img) => {
          const src = img.getAttribute("src");
          if (src.indexOf("assets") > -1) {
            const baseUrl = getSiyuanCfg().baseUrl;
            const imgUrl = pathJoin(baseUrl, "/" + src);
            img.setAttribute("src", imgUrl);
          }
        });
        logger$7.debug("\u672C\u5730\u56FE\u7247\u5904\u7406\u5B8C\u6BD5\uFF0C\u5DF2\u4FEE\u590D\u56FE\u7247\u5C55\u793A.");
      }
    });
  }
};
const logger$6 = LogFactory.getLogger("plugins/font-awesome/font-awesome.ts");
const FontAwesome = {
  install(Vue) {
    library$1.add(faUpload);
    library$1.add(faBookOpenReader);
    library$1.add(faRectangleList);
    library$1.add(faXmark);
    library$1.add(faCircleXmark);
    library$1.add(faBolt);
    library$1.add(faCreditCard);
    library$1.add(faImage);
    library$1.add(faChrome);
    library$1.add(faShareNodes);
    library$1.add(faListOl);
    library$1.add(faFileLines);
    library$1.add(faDownload);
    library$1.add(faMagnifyingGlass);
    library$1.add(faPaste);
    library$1.add(faFileImport);
    library$1.add(faGear);
    library$1.add(faArrowRotateRight);
    library$1.add(faTrashCan);
    library$1.add(faPenToSquare);
    library$1.add(faShopify);
    library$1.add(faCartShopping);
    library$1.add(faLink);
    library$1.add(faBellSlash);
    Vue.component("font-awesome-icon", FontAwesomeIcon);
    logger$6.debug("FontAwesome inited");
  }
};
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/widgets/sy-post-publisher/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  if (!deps || deps.length === 0) {
    return baseModule();
  }
  const links = document.getElementsByTagName("link");
  return Promise.all(deps.map((dep) => {
    dep = assetsURL(dep);
    if (dep in seen)
      return;
    seen[dep] = true;
    const isCss = dep.endsWith(".css");
    const cssSelector = isCss ? '[rel="stylesheet"]' : "";
    const isBaseRelative = !!importerUrl;
    if (isBaseRelative) {
      for (let i = links.length - 1; i >= 0; i--) {
        const link2 = links[i];
        if (link2.href === dep && (!isCss || link2.rel === "stylesheet")) {
          return;
        }
      }
    } else if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
      return;
    }
    const link = document.createElement("link");
    link.rel = isCss ? "stylesheet" : scriptRel;
    if (!isCss) {
      link.as = "script";
      link.crossOrigin = "";
    }
    link.href = dep;
    document.head.appendChild(link);
    if (isCss) {
      return new Promise((res, rej) => {
        link.addEventListener("load", res);
        link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
      });
    }
  })).then(() => baseModule());
};
const initHook = async () => {
  await __vitePreload(() => import("./siyuanhook-a3de8397.js"), true ? [] : void 0);
};
const createPage = async (rootComponent) => {
  await initHook();
  const app = createApp({
    render: () => h(rootComponent)
  });
  const pinia = createPinia();
  app.use(pinia);
  app.use(i18n);
  app.use(vueHljs);
  app.use(PageBeauty);
  app.use(FontAwesome);
  app.directive("focus", {
    mounted(el) {
      el.focus();
    }
  });
  return app;
};
const pageUtil = {
  createPage
};
const API_TYPE_VUEPRESS = "vuepress";
const API_TYPE_HUGO = "hugo";
const API_TYPE_HEXO = "hexo";
const API_TYPE_JEKYLL = "jekyll";
const API_TYPE_JVUE = "jvue";
const API_TYPE_CONFLUENCE = "confluence";
const API_TYPE_CNBLOGS = "cnblogs";
const API_TYPE_WORDPRESS = "wordpress";
const API_TYPE_LIANDI = "liandi";
const API_TYPE_YUQUE = "yuque";
const API_TYPE_KMS = "kms";
const API_TYPE_WECHAT = "wechat";
const API_TYPE_SIYUAN = "siyuan";
const API_TYPE_CONSTANTS = {
  API_TYPE_VUEPRESS,
  API_TYPE_HUGO,
  API_TYPE_HEXO,
  API_TYPE_JEKYLL,
  API_TYPE_CNBLOGS,
  API_TYPE_WORDPRESS,
  API_TYPE_CONFLUENCE,
  API_TYPE_JVUE,
  API_TYPE_YUQUE,
  API_TYPE_WECHAT,
  API_TYPE_LIANDI,
  API_TYPE_SIYUAN,
  API_TYPE_KMS
};
function newID() {
  const newstr = new Date().toISOString();
  return dist(newstr).toLowerCase();
}
const newUuid = () => {
  return v4();
};
const idUtil = {
  newUuid
};
class YamlConvertAdaptor {
  convertToYaml(postForm, githubCfg2) {
    throw new Error("YamlConvertAdaptor.convertToYaml: \u8BE5\u529F\u80FD\u672A\u5B9E\u73B0\uFF0C\u8BF7\u5728\u5B50\u7C7B\u91CD\u5199\u8BE5\u65B9\u6CD5");
  }
  convertToAttr(yamlFormatObj, githubCfg2) {
    throw new Error("YamlConvertAdaptor.convertToAttr: \u8BE5\u529F\u80FD\u672A\u5B9E\u73B0\uFF0C\u8BF7\u5728\u5B50\u7C7B\u91CD\u5199\u8BE5\u65B9\u6CD5");
  }
}
class PostForm {
  constructor() {
    __publicField(this, "formData", {
      title: "",
      customSlug: "",
      desc: "",
      created: "",
      tag: {
        inputValue: "",
        dynamicTags: [],
        inputVisible: false
      },
      customPath: "",
      categories: ["\u9ED8\u8BA4\u5206\u7C7B"],
      mdContent: "",
      htmlContent: "",
      usePermalink: true,
      useDate: true,
      linkTitle: "",
      weight: 0
    });
  }
}
class YamlFormatObj {
  constructor() {
    __publicField(this, "yamlObj", {});
    __publicField(this, "formatter", "");
    __publicField(this, "mdContent", "");
    __publicField(this, "mdFullContent");
    __publicField(this, "htmlContent");
  }
}
const logger$5 = LogFactory.getLogger();
const addHoursToDate = function(date, numOfHours) {
  date.setTime(date.getTime() + numOfHours * 60 * 60 * 1e3);
  return date;
};
const formatIsoToNumDate = (str, isAddTimeZone) => {
  if (!str) {
    return "";
  }
  let newstr = str;
  const isoDateRegex = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(.\d{3})Z$/gm;
  const matches = newstr.match(isoDateRegex);
  if (matches == null) {
    return "";
  }
  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    let newmatch = match;
    if (isAddTimeZone) {
      logger$5.debug("\u4FEE\u590D\u65F6\u533A\uFF0CISO\u65E5\u671F\u9ED8\u8BA4\u665A8\u5C0F\u65F6");
      logger$5.debug(addHoursToDate(new Date(match), 8));
      newmatch = addHoursToDate(new Date(match), 8).toISOString();
    }
    const dts = newmatch.split("T");
    const d2 = dts[0].replaceAll(/-/g, "");
    const t = dts[1].split(".")[0].replaceAll(/:/g, "");
    const result = d2 + t;
    newstr = newstr.replace(match, result);
    logger$5.debug("formatIsoDate match=>", match);
    logger$5.debug("formatIsoDate result=>", result);
  }
  return newstr;
};
const formatIsoToZhDate = (str, isAddTimeZone, isShort) => {
  if (!str) {
    return "";
  }
  let newstr = str;
  const isoDateRegex = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})(.\d{3})Z$/gm;
  const matches = newstr.match(isoDateRegex);
  if (matches == null) {
    return str;
  }
  for (let i = 0; i < matches.length; i++) {
    const match = matches[i];
    let newmatch = match;
    if (isAddTimeZone) {
      newmatch = addHoursToDate(new Date(match), 8).toISOString();
    }
    const dts = newmatch.split("T");
    const d2 = dts[0];
    const t = dts[1].split(".")[0];
    let result = d2 + " " + t;
    if (isShort) {
      result = d2;
    }
    newstr = newstr.replace(match, result);
  }
  return newstr;
};
const formatNumToZhDate = (str) => {
  if (!str) {
    return "";
  }
  const newstr = str;
  const onlyNumbers = newstr.replace(/\D/g, "");
  const year = onlyNumbers.slice(0, 4);
  const month = onlyNumbers.slice(4, 6);
  const day = onlyNumbers.slice(6, 8);
  const hour = onlyNumbers.slice(8, 10);
  const min = onlyNumbers.slice(10, 12);
  const sec = onlyNumbers.slice(12, 14);
  let datestr = year;
  if (!month) {
    datestr = year;
  } else if (!day) {
    datestr = year + "-" + month;
  } else if (!hour) {
    datestr = year + "-" + month + "-" + day;
  } else if (!min) {
    datestr = year + "-" + month + "-" + day + " " + hour;
  } else if (!sec) {
    datestr = year + "-" + month + "-" + day + " " + hour + ":" + min;
  } else {
    datestr = year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
  }
  logger$5.debug("formatNumToZhDate str=>", str);
  logger$5.debug("formatNumToZhDate datestr=>", datestr);
  return datestr;
};
const changeTimeZone = (date, timeZone) => {
  if (typeof date === "string") {
    return new Date(new Date(date).toLocaleString("zh-CN", {
      timeZone
    }));
  }
  return new Date(date.toLocaleString("zh-CN", {
    timeZone
  }));
};
const covertStringToDate = (dateString) => {
  const datestr = formatNumToZhDate(dateString);
  logger$5.debug("datestr=>", datestr);
  return changeTimeZone(datestr, "Asia/Shanghai");
};
const calcLastSeconds = function(isoDateStr) {
  const fmt = formatIsoToNumDate(isoDateStr, true);
  const date = covertStringToDate(fmt);
  const now = new Date();
  const s = (now.getTime() - date.getTime()) / 1e3;
  return parseInt(s.toString());
};
const nowYear = () => {
  return new Date().getFullYear();
};
const formatTimestampToZhDate = (timestamp) => {
  if (typeof timestamp == "string") {
    timestamp = parseInt(timestamp);
  }
  return formatIsoToZhDate(new Date(timestamp).toISOString(), true);
};
const dateUtil = {
  formatTimestampToZhDate
};
const yaml2Obj = (yaml) => {
  yaml = yaml.replace("---\n", "");
  yaml = yaml.replace("---", "");
  return jsYaml.load(yaml, {});
};
const obj2Yaml = (obj) => {
  let res = jsYaml.dump(obj, {});
  res = appendStr("---\n", res, "---");
  return res;
};
class VuepressYamlConvertAdaptor extends YamlConvertAdaptor {
  constructor() {
    super(...arguments);
    __publicField(this, "logger", LogFactory.getLogger("utils/platform/github/vuepress/VuepressYamlConvertAdaptor.ts"));
  }
  convertToYaml(postForm, githubCfg2) {
    var _a2;
    let yamlFormatObj = new YamlFormatObj();
    this.logger.debug("\u60A8\u6B63\u5728\u4F7F\u7528 Vuepress Yaml Converter", postForm);
    yamlFormatObj.yamlObj.title = postForm.formData.title;
    let link = "/post/" + postForm.formData.customSlug + ".html";
    if (githubCfg2 && !isEmptyString(githubCfg2.previewUrl)) {
      link = githubCfg2.previewUrl.replace("[postid]", postForm.formData.customSlug);
    }
    this.logger.debug("link=>", link);
    yamlFormatObj.yamlObj.permalink = link;
    yamlFormatObj.yamlObj.date = covertStringToDate(postForm.formData.created);
    yamlFormatObj.yamlObj.meta = [{
      name: "keywords",
      content: postForm.formData.tag.dynamicTags.join(" ")
    }, {
      name: "description",
      content: postForm.formData.desc
    }];
    yamlFormatObj.yamlObj.tags = postForm.formData.tag.dynamicTags;
    yamlFormatObj.yamlObj.categories = postForm.formData.categories;
    let githubUrl = "https://github.com/terwer";
    if (githubCfg2.baseUrl) {
      githubUrl = pathJoin(githubCfg2.baseUrl, "/" + githubCfg2.githubUser);
    }
    yamlFormatObj.yamlObj.author = {
      name: (_a2 = githubCfg2.author) != null ? _a2 : "terwer",
      link: githubUrl
    };
    let yaml = obj2Yaml(yamlFormatObj.yamlObj);
    yaml = formatIsoToZhDate(yaml, true);
    yamlFormatObj.formatter = yaml;
    yamlFormatObj.mdContent = postForm.formData.mdContent;
    yamlFormatObj.mdFullContent = yamlFormatObj.formatter + "\n\n" + yamlFormatObj.mdContent;
    yamlFormatObj.htmlContent = postForm.formData.htmlContent;
    return yamlFormatObj;
  }
  convertToAttr(yamlFormatObj, githubCfg2) {
    const yamlObj = yamlFormatObj.yamlObj;
    const postForm = new PostForm();
    postForm.formData.title = yamlObj.title;
    postForm.formData.customSlug = yamlObj.permalink.replace("/pages/", "").replace("/post/", "").replace(".html", "").replace("/", "");
    postForm.formData.created = formatIsoToZhDate(yamlObj.date.toISOString(), false);
    const yamlMeta = yamlObj.meta;
    for (let i = 0; i < yamlMeta.length; i++) {
      const m = yamlMeta[i];
      if (m.name === "description") {
        postForm.formData.desc = m.content;
        break;
      }
    }
    for (let j = 0; j < yamlObj.tags.length; j++) {
      const tag = yamlObj.tags[j];
      if (!postForm.formData.tag.dynamicTags.includes(tag) && tag !== "") {
        postForm.formData.tag.dynamicTags.push(tag);
      }
    }
    postForm.formData.categories = yamlObj.categories;
    return postForm;
  }
}
class JekyllYamlConverterAdaptor extends YamlConvertAdaptor {
  constructor() {
    super(...arguments);
    __publicField(this, "logger", LogFactory.getLogger("utils/platform/github/jekyll/JekyllYamlConverterAdaptor.ts"));
  }
  convertToYaml(postForm, githubCfg2) {
    let yamlFormatObj = new YamlFormatObj();
    this.logger.debug("\u60A8\u6B63\u5728\u4F7F\u7528 Jekyll Yaml Converter", postForm);
    yamlFormatObj.yamlObj.layout = "post";
    yamlFormatObj.yamlObj.date = covertStringToDate(postForm.formData.created);
    yamlFormatObj.yamlObj.categories = postForm.formData.categories;
    yamlFormatObj.yamlObj.title = postForm.formData.title;
    let link = "/post/" + postForm.formData.customSlug + ".html";
    if (githubCfg2 && !isEmptyString(githubCfg2.previewUrl)) {
      link = githubCfg2.previewUrl.replace("[postid]", postForm.formData.customSlug);
      const created = formatIsoToZhDate(yamlFormatObj.yamlObj.date.toISOString());
      const datearr = created.split(" ")[0];
      const numarr = datearr.split("-");
      this.logger.debug("created numarr=>", numarr);
      const y = numarr[0];
      const m = numarr[1];
      const d2 = numarr[2];
      link = link.replace(/\[yyyy]/g, y);
      link = link.replace(/\[MM]/g, m);
      link = link.replace(/\[mm]/g, m);
      link = link.replace(/\[dd]/g, d2);
      if (yamlFormatObj.yamlObj.categories.length > 0) {
        link = link.replace(/\[cats]/, yamlFormatObj.yamlObj.categories.join("/"));
      } else {
        link = link.replace(/\/\[cats]/, "");
      }
    }
    this.logger.debug("link=>", link);
    yamlFormatObj.yamlObj.permalink = link;
    yamlFormatObj.yamlObj.tagline = postForm.formData.desc;
    yamlFormatObj.yamlObj.tags = postForm.formData.tag.dynamicTags;
    yamlFormatObj.yamlObj.published = true;
    let yaml = obj2Yaml(yamlFormatObj.yamlObj);
    yaml = formatIsoToZhDate(yaml, true);
    yamlFormatObj.formatter = yaml;
    yamlFormatObj.mdContent = postForm.formData.mdContent;
    yamlFormatObj.mdFullContent = yamlFormatObj.formatter + "\n\n" + yamlFormatObj.mdContent;
    yamlFormatObj.htmlContent = postForm.formData.htmlContent;
    return yamlFormatObj;
  }
  convertToAttr(yamlFormatObj, githubCfg2) {
    return super.convertToAttr(yamlFormatObj, githubCfg2);
  }
}
class HugoYamlConverterAdaptor extends YamlConvertAdaptor {
  constructor() {
    super(...arguments);
    __publicField(this, "logger", LogFactory.getLogger("utils/platform/github/hugo/HugoYamlConverterAdaptor.ts"));
  }
  convertToYaml(postForm, githubCfg2) {
    let yamlFormatObj = new YamlFormatObj();
    this.logger.debug("\u60A8\u6B63\u5728\u4F7F\u7528 Hugo Yaml Converter", postForm);
    yamlFormatObj.yamlObj.title = postForm.formData.title;
    yamlFormatObj.yamlObj.slug = postForm.formData.customSlug;
    if (postForm.formData.usePermalink) {
      yamlFormatObj.yamlObj.url = "/post/" + postForm.formData.customSlug + ".html";
    }
    if (postForm.formData.useDate) {
      yamlFormatObj.yamlObj.date = postForm.formData.created;
    }
    yamlFormatObj.yamlObj.tags = postForm.formData.tag.dynamicTags;
    yamlFormatObj.yamlObj.categories = postForm.formData.categories;
    yamlFormatObj.yamlObj.lastmod = formatIsoToZhDate(new Date().toISOString(), true);
    yamlFormatObj.yamlObj.toc = true;
    yamlFormatObj.yamlObj.keywords = postForm.formData.tag.dynamicTags.join(",");
    yamlFormatObj.yamlObj.description = postForm.formData.desc;
    yamlFormatObj.yamlObj.isCJKLanguage = true;
    const linkTitle = postForm.formData.linkTitle;
    const weight = parseInt(postForm.formData.weight.toString());
    if (weight > 0) {
      yamlFormatObj.yamlObj.weight = weight;
    }
    if (!isEmptyString(linkTitle)) {
      yamlFormatObj.yamlObj.linkTitle = linkTitle;
      if (weight > 0) {
        yamlFormatObj.yamlObj.menu = {
          main: {
            weight
          }
        };
      }
    }
    let yaml = obj2Yaml(yamlFormatObj.yamlObj);
    yaml = formatIsoToZhDate(yaml, true);
    yamlFormatObj.formatter = yaml;
    yamlFormatObj.mdContent = postForm.formData.mdContent;
    yamlFormatObj.mdFullContent = yamlFormatObj.formatter + "\n\n" + yamlFormatObj.mdContent;
    yamlFormatObj.htmlContent = postForm.formData.htmlContent;
    return yamlFormatObj;
  }
  convertToAttr(yamlFormatObj, githubCfg2) {
    return super.convertToAttr(yamlFormatObj, githubCfg2);
  }
}
class HexoYamlConverterAdaptor extends YamlConvertAdaptor {
  constructor() {
    super(...arguments);
    __publicField(this, "logger", LogFactory.getLogger("utils/platform/github/hexo/hexoYamlConverterAdaptor.ts"));
  }
  convertToYaml(postForm, githubCfg2) {
    let yamlFormatObj = new YamlFormatObj();
    this.logger.debug("\u60A8\u6B63\u5728\u4F7F\u7528 Hexo Yaml Converter", postForm);
    yamlFormatObj.yamlObj.title = postForm.formData.title;
    yamlFormatObj.yamlObj.updated = formatIsoToZhDate(new Date().toISOString(), true);
    yamlFormatObj.yamlObj.excerpt = postForm.formData.desc;
    yamlFormatObj.yamlObj.tags = postForm.formData.tag.dynamicTags;
    yamlFormatObj.yamlObj.categories = postForm.formData.categories;
    let link = "/post/" + postForm.formData.customSlug + ".html";
    if (githubCfg2 && !isEmptyString(githubCfg2.previewUrl)) {
      link = githubCfg2.previewUrl.replace("[postid]", postForm.formData.customSlug);
      const created = postForm.formData.created;
      const datearr = created.split(" ")[0];
      const numarr = datearr.split("-");
      this.logger.debug("created numarr=>", numarr);
      const y = numarr[0];
      const m = numarr[1];
      const d2 = numarr[2];
      link = link.replace(/\[yyyy]/g, y);
      link = link.replace(/\[MM]/g, m);
      link = link.replace(/\[mm]/g, m);
      link = link.replace(/\[dd]/g, d2);
      if (yamlFormatObj.yamlObj.categories.length > 0) {
        link = link.replace(/\[cats]/, yamlFormatObj.yamlObj.categories.join("/"));
      } else {
        link = link.replace(/\/\[cats]/, "");
      }
    }
    yamlFormatObj.yamlObj.permalink = link;
    yamlFormatObj.yamlObj.comments = true;
    let yaml = obj2Yaml(yamlFormatObj.yamlObj);
    yaml = formatIsoToZhDate(yaml, true);
    yamlFormatObj.formatter = yaml;
    yamlFormatObj.mdContent = postForm.formData.mdContent;
    yamlFormatObj.mdFullContent = yamlFormatObj.formatter + "\n\n" + yamlFormatObj.mdContent;
    yamlFormatObj.htmlContent = postForm.formData.htmlContent;
    return yamlFormatObj;
  }
  convertToAttr(yamlFormatObj, githubCfg2) {
    return super.convertToAttr(yamlFormatObj, githubCfg2);
  }
}
class VitepressYamlConverterAdaptor extends YamlConvertAdaptor {
  constructor() {
    super(...arguments);
    __publicField(this, "logger", LogFactory.getLogger("utils/platform/github/other/VitepressYamlConverterAdaptor.ts"));
  }
  convertToYaml(postForm, githubCfg2) {
    let yamlFormatObj = new YamlFormatObj();
    this.logger.debug("\u60A8\u6B63\u5728\u4F7F\u7528 Vitepress Yaml Converter", postForm);
    yamlFormatObj.yamlObj.title = postForm.formData.title;
    yamlFormatObj.yamlObj.titleTemplate = "Vite & Vue powered static site generator";
    yamlFormatObj.yamlObj.description = postForm.formData.title + " description";
    yamlFormatObj.yamlObj.layout = "doc";
    yamlFormatObj.yamlObj.aside = true;
    yamlFormatObj.yamlObj.outline = true;
    yamlFormatObj.yamlObj.lastUpdated = true;
    let yaml = obj2Yaml(yamlFormatObj.yamlObj);
    yaml = formatIsoToZhDate(yaml, true);
    yamlFormatObj.formatter = yaml;
    yamlFormatObj.mdContent = postForm.formData.mdContent;
    yamlFormatObj.mdFullContent = yamlFormatObj.formatter + "\n\n" + yamlFormatObj.mdContent;
    yamlFormatObj.htmlContent = postForm.formData.htmlContent;
    return yamlFormatObj;
  }
  convertToAttr(yamlFormatObj, githubCfg2) {
    return super.convertToAttr(yamlFormatObj, githubCfg2);
  }
}
class NuxtYamlConverterAdaptor extends YamlConvertAdaptor {
  constructor() {
    super(...arguments);
    __publicField(this, "logger", LogFactory.getLogger("utils/platform/github/other/NuxtYamlConverterAdaptor.ts"));
  }
  convertToYaml(postForm, githubCfg2) {
    let yamlFormatObj = new YamlFormatObj();
    this.logger.debug("\u60A8\u6B63\u5728\u4F7F\u7528 Vitepress Yaml Converter", postForm);
    yamlFormatObj.yamlObj.title = postForm.formData.title;
    yamlFormatObj.yamlObj.description = postForm.formData.desc;
    yamlFormatObj.yamlObj.head = {
      title: postForm.formData.title,
      description: postForm.formData.desc,
      meta: [{
        name: "keywords",
        content: postForm.formData.tag.dynamicTags.join(",")
      }, {
        name: "author",
        content: "terwer"
      }, {
        name: "copyright",
        content: "\xA9 2022 sy-post-publisher"
      }]
    };
    let yaml = obj2Yaml(yamlFormatObj.yamlObj);
    yaml = formatIsoToZhDate(yaml, true);
    yamlFormatObj.formatter = yaml;
    yamlFormatObj.mdContent = postForm.formData.mdContent;
    yamlFormatObj.mdFullContent = yamlFormatObj.formatter + "\n\n" + yamlFormatObj.mdContent;
    yamlFormatObj.htmlContent = postForm.formData.htmlContent;
    return yamlFormatObj;
  }
  convertToAttr(yamlFormatObj, githubCfg2) {
    return super.convertToAttr(yamlFormatObj, githubCfg2);
  }
}
class NextYamlConvertAdaptor extends YamlConvertAdaptor {
  constructor() {
    super(...arguments);
    __publicField(this, "logger", LogFactory.getLogger("utils/platform/github/other/NextYamlConvertAdaptor.ts"));
  }
  convertToYaml(postForm, githubCfg2) {
    let yamlFormatObj = new YamlFormatObj();
    this.logger.debug("\u60A8\u6B63\u5728\u4F7F\u7528 Next Yaml Converter", postForm);
    yamlFormatObj.yamlObj.title = postForm.formData.title;
    yamlFormatObj.yamlObj.date = covertStringToDate(postForm.formData.created);
    yamlFormatObj.yamlObj.description = postForm.formData.desc;
    yamlFormatObj.yamlObj.tag = postForm.formData.tag.dynamicTags;
    yamlFormatObj.formatter = obj2Yaml(yamlFormatObj.yamlObj);
    yamlFormatObj.mdContent = postForm.formData.mdContent;
    yamlFormatObj.mdFullContent = yamlFormatObj.formatter + "\n\n" + yamlFormatObj.mdContent;
    yamlFormatObj.htmlContent = postForm.formData.htmlContent;
    return yamlFormatObj;
  }
  convertToAttr(yamlFormatObj, githubCfg2) {
    return super.convertToAttr(yamlFormatObj, githubCfg2);
  }
}
LogFactory.getLogger("utils/platform/dynamicConfig.ts");
class DynamicConfig {
  constructor(platformType, platformKey, platformName) {
    __publicField(this, "posid");
    __publicField(this, "modelValue");
    __publicField(this, "platformType");
    __publicField(this, "subPlatformType");
    __publicField(this, "platformKey");
    __publicField(this, "platformName");
    __publicField(this, "yamlConverter");
    this.platformType = platformType;
    this.platformKey = platformKey;
    this.platformName = platformName;
  }
}
var PlatformType = /* @__PURE__ */ ((PlatformType2) => {
  PlatformType2["Metaweblog"] = "Metaweblog";
  PlatformType2["Wordpress"] = "Wordpress";
  PlatformType2["Github"] = "Github";
  PlatformType2["Custom"] = "Custom";
  return PlatformType2;
})(PlatformType || {});
var SubPlatformType = /* @__PURE__ */ ((SubPlatformType2) => {
  SubPlatformType2["Github_Hugo"] = "Hugo";
  SubPlatformType2["Github_Hexo"] = "Hexo";
  SubPlatformType2["Github_Jekyll"] = "Jekyll";
  SubPlatformType2["Github_Vuepress"] = "Vuepress";
  SubPlatformType2["Github_Vitepress"] = "Vitepress";
  SubPlatformType2["Github_Nuxt"] = "Nuxt";
  SubPlatformType2["Github_Next"] = "Next";
  SubPlatformType2["NONE"] = "none";
  return SubPlatformType2;
})(SubPlatformType || {});
function getSubtypeList(ptype) {
  const subtypeList = [];
  switch (ptype) {
    case "Github":
      subtypeList.push("Hugo");
      subtypeList.push("Hexo");
      subtypeList.push("Jekyll");
      subtypeList.push("Vuepress");
      subtypeList.push("Vitepress");
      subtypeList.push("Nuxt");
      subtypeList.push("Next");
      break;
  }
  return subtypeList;
}
function getDynamicJsonCfg() {
  return getJSONConf(CONSTANTS.DYNAMIC_CONFIG_KEY);
}
function setDynamicJsonCfg(dynamicConfigArray) {
  const totalCfg = dynamicConfigArray;
  const githubCfg2 = [];
  const metaweblogCfg2 = [];
  const wordpressCfg2 = [];
  totalCfg.forEach((item) => {
    switch (item.platformType) {
      case "Github":
        githubCfg2.push(item);
        break;
      case "Metaweblog":
        metaweblogCfg2.push(item);
        break;
      case "Wordpress":
        wordpressCfg2.push(item);
        break;
    }
  });
  const dynamicJsonCfg = {
    totalCfg,
    githubCfg: githubCfg2,
    metaweblogCfg: metaweblogCfg2,
    wordpressCfg: wordpressCfg2
  };
  setJSONConf(CONSTANTS.DYNAMIC_CONFIG_KEY, dynamicJsonCfg);
}
function getNewPlatformKey(ptype, subtype) {
  let ret;
  const newId = newID();
  ret = ptype.toLowerCase();
  if (!isEmptyString(subtype) && "none" !== subtype) {
    ret = appendStr(ret, upperFirst(subtype));
  }
  return appendStr(ret, "-", newId);
}
function isDynamicKeyExists(dynamicConfigArray, key) {
  let flag = false;
  for (let i = 0; i < dynamicConfigArray.length; i++) {
    if (dynamicConfigArray[i].platformKey === key) {
      flag = true;
      break;
    }
  }
  return flag;
}
function getDefaultPlatformName(ptype, subtype, isShowSubtype) {
  if ("Github" === ptype && "none" === subtype) {
    return "";
  }
  let pname = ptype;
  if (isShowSubtype) {
    pname = subtype;
  }
  pname = pname + "-1";
  return pname;
}
function getDynSwitchKey(platformKey) {
  return "switch-" + platformKey;
}
function getDynSwitchActive(platformKey) {
  return platformKey + "_true";
}
function getDynSwitchInactive(platformKey) {
  return platformKey + "_false";
}
function getDynSwitchModelValue(switchItem) {
  return switchItem.switchKey + "_" + switchItem.switchValue.toString();
}
function getSwitchItem(selectedText) {
  const valArr = selectedText.split("_");
  const switchKey = getDynSwitchKey(valArr[0]);
  const switchStatus = valArr[1] === "true";
  return {
    switchKey,
    switchValue: switchStatus
  };
}
function getDynPostidKey(platformKey) {
  return "custom-" + platformKey + "-post-id";
}
const getDynYamlConverterAdaptor = (platformKey) => {
  let yamlConverter = new YamlConvertAdaptor();
  if (platformKey.includes("-")) {
    const typeArr = platformKey.split("-");
    if (typeArr.length > 0) {
      const ptype = typeArr[0].toLowerCase();
      if (ptype.includes("Vuepress".toLowerCase())) {
        yamlConverter = new VuepressYamlConvertAdaptor();
      } else if (ptype.includes("Hugo".toLowerCase())) {
        yamlConverter = new HugoYamlConverterAdaptor();
      } else if (ptype.includes("Hexo".toLowerCase())) {
        yamlConverter = new HexoYamlConverterAdaptor();
      } else if (ptype.includes("Jekyll".toLowerCase())) {
        yamlConverter = new JekyllYamlConverterAdaptor();
      } else if (ptype.includes("Vitepress".toLowerCase())) {
        yamlConverter = new VitepressYamlConverterAdaptor();
      } else if (ptype.includes("Nuxt".toLowerCase())) {
        yamlConverter = new NuxtYamlConverterAdaptor();
      } else if (ptype.includes("Next".toLowerCase())) {
        yamlConverter = new NextYamlConvertAdaptor();
      }
    }
  }
  return yamlConverter;
};
class PublishPreference {
  constructor() {
    __publicField(this, "editMode");
    __publicField(this, "contentShowType");
    __publicField(this, "fixTitle");
    __publicField(this, "useGoogleTranslate");
    __publicField(this, "removeH1");
    __publicField(this, "autoTag");
    __publicField(this, "renderSiyuanVirtualLink");
    __publicField(this, "makeAttrOnFirstLoad");
    __publicField(this, "newWin");
    __publicField(this, "showCloseBtn");
    __publicField(this, "usePicgo");
    __publicField(this, "mainBg");
  }
}
var PageEditMode = /* @__PURE__ */ ((PageEditMode2) => {
  PageEditMode2[PageEditMode2["EditMode_simple"] = 0] = "EditMode_simple";
  PageEditMode2[PageEditMode2["EditMode_complex"] = 1] = "EditMode_complex";
  PageEditMode2[PageEditMode2["EditMode_source"] = 2] = "EditMode_source";
  return PageEditMode2;
})(PageEditMode || {});
var SourceContentShowType = /* @__PURE__ */ ((SourceContentShowType2) => {
  SourceContentShowType2[SourceContentShowType2["YAML"] = 0] = "YAML";
  SourceContentShowType2[SourceContentShowType2["CONTENT"] = 1] = "CONTENT";
  SourceContentShowType2[SourceContentShowType2["YAML_CONTENT"] = 2] = "YAML_CONTENT";
  SourceContentShowType2[SourceContentShowType2["HTML_CONTENT"] = 3] = "HTML_CONTENT";
  return SourceContentShowType2;
})(SourceContentShowType || {});
const logger$4 = LogFactory.getLogger("utils/publishUtil.ts");
function getApiParams(apiType) {
  return getJSONConf(apiType);
}
const getPublishStatus = (apiType, meta) => {
  logger$4.debug("\u6839\u636E\u5E73\u53F0\u7C7B\u578B\u83B7\u53D6\u53D1\u5E03\u72B6\u6001\uFF0CapiType=>", apiType);
  const githubTypeArray = [API_TYPE_CONSTANTS.API_TYPE_VUEPRESS, API_TYPE_CONSTANTS.API_TYPE_HUGO, API_TYPE_CONSTANTS.API_TYPE_HEXO, API_TYPE_CONSTANTS.API_TYPE_JEKYLL];
  const metaweblogTypeArray = [API_TYPE_CONSTANTS.API_TYPE_JVUE, API_TYPE_CONSTANTS.API_TYPE_CONFLUENCE, API_TYPE_CONSTANTS.API_TYPE_CNBLOGS, API_TYPE_CONSTANTS.API_TYPE_WORDPRESS];
  const commonblogTypeArray = [API_TYPE_CONSTANTS.API_TYPE_LIANDI, API_TYPE_CONSTANTS.API_TYPE_YUQUE, API_TYPE_CONSTANTS.API_TYPE_KMS];
  const dynamicJsonCfg = getDynamicJsonCfg();
  const githubArray = dynamicJsonCfg.githubCfg || [];
  const metaweblogArray = dynamicJsonCfg.metaweblogCfg || [];
  const wordpressArray = dynamicJsonCfg.wordpressCfg || [];
  githubArray.forEach((item) => {
    const apiType2 = item.platformKey;
    const switchKey = getDynSwitchKey(item.platformKey);
    const switchValue = getBooleanConf(switchKey);
    if (switchValue) {
      githubTypeArray.push(apiType2);
    }
  });
  metaweblogArray.forEach((item) => {
    const apiType2 = item.platformKey;
    const switchKey = getDynSwitchKey(item.platformKey);
    const switchValue = getBooleanConf(switchKey);
    if (switchValue) {
      metaweblogTypeArray.push(apiType2);
    }
  });
  wordpressArray.forEach((item) => {
    const apiType2 = item.platformKey;
    const switchKey = getDynSwitchKey(item.platformKey);
    const switchValue = getBooleanConf(switchKey);
    if (switchValue) {
      metaweblogTypeArray.push(apiType2);
    }
  });
  let postId;
  if (githubTypeArray.includes(apiType)) {
    const postidKey = getApiParams(apiType).posidKey;
    postId = meta[postidKey] || "";
    logger$4.debug("\u5E73\u53F0=>", apiType);
    logger$4.debug("meta=>", meta);
    logger$4.debug("postidKey=>", postidKey);
    logger$4.debug("postidKey\u7684\u503C=>", postId);
  } else if (metaweblogTypeArray.includes(apiType)) {
    const postidKey = getApiParams(apiType).posidKey;
    postId = meta[postidKey] || "";
    logger$4.debug("\u5E73\u53F0=>", apiType);
    logger$4.debug("meta=>", meta);
    logger$4.debug("postidKey=>", postidKey);
    logger$4.debug("postidKey\u7684\u503C=>", postId);
  } else if (commonblogTypeArray.includes(apiType)) {
    const postidKey = getApiParams(apiType).posidKey;
    postId = meta[postidKey != null ? postidKey : ""] || "";
    logger$4.debug("\u5E73\u53F0=>", apiType);
    logger$4.debug("meta=>", meta);
    logger$4.debug("postidKey=>", postidKey);
    logger$4.debug("postidKey\u7684\u503C=>", postId);
  }
  return !isEmptyString(postId);
};
const getPublishCfg = () => {
  let publishCfg = getJSONConf(CONSTANTS.PUBLISH_PREFERENCE_CONFIG_KEY);
  if (isEmptyObject(publishCfg)) {
    publishCfg = new PublishPreference();
    publishCfg.fixTitle = false;
    publishCfg.useGoogleTranslate = true;
    publishCfg.editMode = PageEditMode.EditMode_simple;
    publishCfg.contentShowType = SourceContentShowType.YAML_CONTENT;
    publishCfg.removeH1 = false;
    publishCfg.autoTag = false;
    publishCfg.renderSiyuanVirtualLink = true;
    publishCfg.makeAttrOnFirstLoad = false;
    publishCfg.newWin = false;
    publishCfg.showCloseBtn = false;
  } else {
    publishCfg.fixTitle = parseBoolean(publishCfg.fixTitle);
    publishCfg.removeH1 = parseBoolean(publishCfg.removeH1);
    publishCfg.newWin = parseBoolean(publishCfg.newWin);
    publishCfg.autoTag = parseBoolean(publishCfg.autoTag);
    publishCfg.showCloseBtn = parseBoolean(publishCfg.showCloseBtn);
  }
  return publishCfg;
};
const _hoisted_1$i = {
  class: "header-default"
};
const _hoisted_2$b = {
  key: 0
};
const _hoisted_3$6 = {
  key: 1,
  class: "header-title-default"
};
const _sfc_main$y = /* @__PURE__ */ defineComponent({
  __name: "DefaultHeader",
  setup(__props) {
    const {
      t
    } = useI18n();
    const logger2 = LogFactory.getLogger("layouts/default/DefaultHeader.vue");
    const showCloseBtn = ref(false);
    const showOpenBtn = ref(false);
    const showTitle = ref(false);
    const handleWinOpen = async () => {
      if (showOpenBtn.value) {
        try {
          const widgetResult = getWidgetId();
          await doOpenExportWin(widgetResult.widgetId, "index.html");
          pageIdChanged();
        } catch (e) {
          ElMessage.info("\u53D1\u751F\u5F02\u5E38\uFF0C\u5DF2\u6682\u65F6\u5173\u95ED\u6B64\u6309\u94AE\uFF0C\u5982\u9700\u6C38\u4E45\u5173\u95ED\uFF0C\u8BF7\u524D\u5F80\u901A\u7528\u8BBE\u7F6E\u5173\u95ED=>" + e);
        }
      }
    };
    const handleWinPreview = async () => {
      if (showOpenBtn.value) {
        try {
          const widgetResult = getWidgetId();
          await doOpenExportWin(widgetResult.widgetId, "detail/index.html");
          pageIdChanged();
        } catch (e) {
          ElMessage.info("\u53D1\u751F\u5F02\u5E38\uFF0C\u5DF2\u6682\u65F6\u5173\u95ED\u6B64\u6309\u94AE\uFF0C\u5982\u9700\u6C38\u4E45\u5173\u95ED\uFF0C\u8BF7\u524D\u5F80\u901A\u7528\u8BBE\u7F6E\u5173\u95ED=>" + e);
        }
      }
    };
    const handleWinManage = async () => {
      if (showOpenBtn.value) {
        try {
          await doOpenExportWin(void 0, "blog/index.html");
          pageIdChanged();
        } catch (e) {
          ElMessage.info("\u53D1\u751F\u5F02\u5E38\uFF0C\u5DF2\u6682\u65F6\u5173\u95ED\u6B64\u6309\u94AE\uFF0C\u5982\u9700\u6C38\u4E45\u5173\u95ED\uFF0C\u8BF7\u524D\u5F80\u901A\u7528\u8BBE\u7F6E\u5173\u95ED=>" + e);
        }
      }
    };
    const handleWinAnki = async () => {
      if (showOpenBtn.value) {
        try {
          const widgetResult = getWidgetId();
          await doOpenExportWin(widgetResult.widgetId, "anki/index.html");
          pageIdChanged();
        } catch (e) {
          ElMessage.info("\u53D1\u751F\u5F02\u5E38\uFF0C\u5DF2\u6682\u65F6\u5173\u95ED\u6B64\u6309\u94AE\uFF0C\u5982\u9700\u6C38\u4E45\u5173\u95ED\uFF0C\u8BF7\u524D\u5F80\u901A\u7528\u8BBE\u7F6E\u5173\u95ED=>" + e);
        }
      }
    };
    const handleWinPicture = async () => {
      try {
        const widgetResult = getWidgetId();
        await doOpenExportWin(widgetResult.widgetId, "picgo/index.html");
        pageIdChanged();
      } catch (e) {
        logger2.error(t("main.opt.failure"), "=>", e);
        ElMessage.error(appendStr(t("main.opt.failure"), "=>", e));
      }
    };
    const handleWinSet = async () => {
      try {
        await doOpenExportWin(void 0, "set/index.html");
        pageIdChanged();
      } catch (e) {
        logger2.error(t("main.opt.failure"), "=>", e);
        ElMessage.error(appendStr(t("main.opt.failure"), "=>", e));
      }
    };
    const handleWinClose = () => {
      if (showCloseBtn.value) {
        try {
          doCloseExportWin();
          pageIdChanged();
        } catch (e) {
          ElMessage.info("\u975E\u5F39\u7A97\u70B9\u51FB\uFF0C\u5DF2\u6682\u65F6\u5173\u95ED\u6B64\u6309\u94AE\uFF0C\u5982\u9700\u6C38\u4E45\u5173\u95ED\uFF0C\u8BF7\u524D\u5F80\u901A\u7528\u8BBE\u7F6E\u5173\u95ED=>" + e);
        }
      }
    };
    const pageIdChanged = () => {
      if (isInSiyuanNewWinBrowser()) {
        showOpenBtn.value = false;
        showCloseBtn.value = true;
        if (isWindows && isElectron) {
          showCloseBtn.value = false;
        }
      } else {
        showOpenBtn.value = true;
        showCloseBtn.value = false;
        if (!isSlot) {
          showOpenBtn.value = false;
          showCloseBtn.value = false;
          showTitle.value = true;
        }
      }
    };
    onMounted(() => {
      if (isInSiyuanNewWinBrowser() || isInSiyuanWidget()) {
        const publishCfg = getPublishCfg();
        showCloseBtn.value = isInSiyuanNewWinBrowser() || publishCfg.showCloseBtn;
        showOpenBtn.value = showCloseBtn.value;
        showTitle.value = false;
        pageIdChanged();
      } else {
        showOpenBtn.value = false;
        showCloseBtn.value = true;
        showTitle.value = true;
      }
    });
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_el_button = ElButton;
      const _component_el_tooltip = ElTooltip;
      const _component_el_header = ElHeader;
      return openBlock(), createElementBlock("div", _hoisted_1$i, [createVNode(_component_el_header, {
        id: "publisher-header"
      }, {
        default: withCtx(() => [!showTitle.value ? (openBlock(), createElementBlock("div", _hoisted_2$b, [createVNode(_component_el_tooltip, {
          content: _ctx.$t("siyuan.browser.menu.publish.btn"),
          class: "box-item",
          effect: "light",
          placement: "right",
          "popper-class": "publish-menu-tooltip"
        }, {
          default: withCtx(() => [showOpenBtn.value ? (openBlock(), createBlock(_component_el_button, {
            key: 0,
            class: "b3-button--open",
            type: "success",
            onClick: handleWinOpen
          }, {
            default: withCtx(() => [createVNode(_component_font_awesome_icon, {
              icon: "fa-solid fa-upload"
            })]),
            _: 1
          })) : createCommentVNode("", true)]),
          _: 1
        }, 8, ["content"]), createVNode(_component_el_tooltip, {
          content: _ctx.$t("siyuan.browser.menu.preview.btn"),
          class: "box-item",
          effect: "light",
          placement: "right",
          "popper-class": "publish-menu-tooltip"
        }, {
          default: withCtx(() => [showOpenBtn.value ? (openBlock(), createBlock(_component_el_button, {
            key: 0,
            class: "b3-button--preview",
            type: "success",
            onClick: handleWinPreview
          }, {
            default: withCtx(() => [createVNode(_component_font_awesome_icon, {
              icon: "fa-solid fa-book-open-reader"
            })]),
            _: 1
          })) : createCommentVNode("", true)]),
          _: 1
        }, 8, ["content"]), createVNode(_component_el_tooltip, {
          content: _ctx.$t("siyuan.browser.menu.manage.btn"),
          class: "box-item",
          effect: "light",
          placement: "right",
          "popper-class": "publish-menu-tooltip"
        }, {
          default: withCtx(() => [showOpenBtn.value ? (openBlock(), createBlock(_component_el_button, {
            key: 0,
            class: "b3-button--preview",
            type: "success",
            onClick: handleWinManage
          }, {
            default: withCtx(() => [createVNode(_component_font_awesome_icon, {
              icon: "fa-solid fa-rectangle-list"
            })]),
            _: 1
          })) : createCommentVNode("", true)]),
          _: 1
        }, 8, ["content"]), createVNode(_component_el_tooltip, {
          content: _ctx.$t("siyuan.browser.menu.anki.btn"),
          class: "box-item",
          effect: "light",
          placement: "right",
          "popper-class": "publish-menu-tooltip"
        }, {
          default: withCtx(() => [showOpenBtn.value ? (openBlock(), createBlock(_component_el_button, {
            key: 0,
            class: "b3-button--anki",
            type: "success",
            onClick: handleWinAnki
          }, {
            default: withCtx(() => [createVNode(_component_font_awesome_icon, {
              icon: "fa-solid fa-credit-card"
            })]),
            _: 1
          })) : createCommentVNode("", true)]),
          _: 1
        }, 8, ["content"]), createVNode(_component_el_tooltip, {
          content: _ctx.$t("siyuan.browser.menu.picture.btn"),
          class: "box-item",
          effect: "light",
          placement: "right",
          "popper-class": "publish-menu-tooltip"
        }, {
          default: withCtx(() => [showOpenBtn.value ? (openBlock(), createBlock(_component_el_button, {
            key: 0,
            class: "b3-button--picture",
            type: "success",
            onClick: handleWinPicture
          }, {
            default: withCtx(() => [createVNode(_component_font_awesome_icon, {
              icon: "fa-solid fa-image"
            })]),
            _: 1
          })) : createCommentVNode("", true)]),
          _: 1
        }, 8, ["content"]), createVNode(_component_el_tooltip, {
          content: _ctx.$t("siyuan.browser.menu.setting.btn"),
          class: "box-item",
          effect: "light",
          placement: "right",
          "popper-class": "publish-menu-tooltip"
        }, {
          default: withCtx(() => [showOpenBtn.value ? (openBlock(), createBlock(_component_el_button, {
            key: 0,
            class: "b3-button--picture",
            type: "success",
            onClick: handleWinSet
          }, {
            default: withCtx(() => [createVNode(_component_font_awesome_icon, {
              icon: "fa-solid fa-gear"
            })]),
            _: 1
          })) : createCommentVNode("", true)]),
          _: 1
        }, 8, ["content"]), showCloseBtn.value ? (openBlock(), createBlock(_component_el_button, {
          key: 0,
          class: "b3-button--cancel",
          type: "danger",
          onClick: handleWinClose
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-xmark"
          })]),
          _: 1
        })) : createCommentVNode("", true)])) : createCommentVNode("", true), showTitle.value ? (openBlock(), createElementBlock("h1", _hoisted_3$6, [createVNode(_component_el_button, {
          class: "header-title-btn disabled-click"
        }, {
          default: withCtx(() => [createTextVNode(" \u601D\u6E90\u7B14\u8BB0\u53D1\u5E03\u5DE5\u5177 ")]),
          _: 1
        })])) : createCommentVNode("", true)]),
        _: 1
      })]);
    };
  }
});
const DefaultHeader_vue_vue_type_style_index_0_scoped_dcd39782_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const DefaultHeader = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["__scopeId", "data-v-dcd39782"]]);
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
class SiYuanApiAdaptor {
  constructor() {
    __publicField(this, "logger", LogFactory.getLogger("utils/platform/siyuan/siYuanApiAdaptor.ts"));
    __publicField(this, "siyuanApi");
    this.siyuanApi = new SiYuanApi();
  }
  async getUsersBlogs() {
    var _a2;
    const result = [];
    const userBlog = new UserBlog();
    userBlog.blogid = API_TYPE_CONSTANTS.API_TYPE_SIYUAN;
    userBlog.blogName = API_TYPE_CONSTANTS.API_TYPE_SIYUAN;
    userBlog.url = (_a2 = { "VITE_LOG_INFO_ENABLED": "true", "VITE_DEBUG_MODE": "false", "VITE_MIDDLEWARE_URL": "https://api.terwer.space/api/middleware" }.SIYUAN_API_URL) != null ? _a2 : "";
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
    var _a2;
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
    let title = (_a2 = siyuanPost.content) != null ? _a2 : "";
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
  constructor(githubCfg2) {
    __publicField(this, "logger");
    __publicField(this, "githubCfg");
    __publicField(this, "octokit");
    this.logger = LogFactory.getLogger("utils/platform/github/githubApi.ts");
    this.githubCfg = githubCfg2;
    this.octokit = new Octokit({
      auth: githubCfg2.githubToken
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
    var _a2;
    const res = await this.githubApi.publishGithubPage(post.postid, post.description);
    if (!((_a2 = res == null ? void 0 : res.content) == null ? void 0 : _a2.path)) {
      throw new Error(this.apiType + "\u8C03\u7528API\u5F02\u5E38");
    }
    return res.content.path;
  }
  async editPost(postid, post, publish) {
    var _a2;
    const res = await this.githubApi.updateGithubPage(post.postid, post.description);
    if (!((_a2 = res == null ? void 0 : res.content) == null ? void 0 : _a2.path)) {
      throw new Error("Hugo\u8C03\u7528API\u5F02\u5E38");
    }
    return true;
  }
  async deletePost(postid) {
    var _a2;
    const res = await this.githubApi.deleteGithubPage(postid);
    if (!((_a2 = res == null ? void 0 : res.commit) == null ? void 0 : _a2.sha)) {
      throw new Error("Hugo\u8C03\u7528API\u5F02\u5E38");
    }
    return true;
  }
  async getCategories() {
    return await Promise.resolve([]);
  }
  async getPreviewUrl(postid) {
    var _a2;
    let previewUrl;
    const newPostid = postid.substring(postid.lastIndexOf("/") + 1).replace(".md", "");
    previewUrl = this.cfg.previewUrl.replace("[postid]", newPostid);
    previewUrl = pathJoin((_a2 = this.cfg.home) != null ? _a2 : "", previewUrl);
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
const logger$3 = LogFactory.getLogger("utils/xmlrpc/impl/nodeXmlrpc.ts");
async function fetchNode(apiUrl, reqMethod, reqParams) {
  try {
    logger$3.debug("SimpleXmlRpcClient\u5F00\u59CB");
    logger$3.debug("xmlrpcNodeParams.reqMethod=>", reqMethod);
    logger$3.debug("xmlrpcNodeParams.reqParams=>", reqParams);
    const client = new SimpleXmlRpcClient(apiUrl);
    const ret = await client.methodCall(reqMethod, reqParams);
    logger$3.debug("SimpleXmlRpcClient\u7ED3\u675F\uFF0Cret=>", ret);
    return ret;
  } catch (e) {
    logger$3.error(e);
    throw new Error("\u8BF7\u6C42\u5904\u7406\u5F02\u5E38");
  }
}
class JsonUtil {
  safeParse(str, def) {
    let ret;
    if (isEmptyString(str)) {
      ret = def;
    }
    ret = JSON.parse(str) || def;
    if (typeof ret === "string") {
      ret = JSON.parse(ret) || def;
    }
    return ret;
  }
}
const jsonUtil = new JsonUtil();
const logger$2 = LogFactory.getLogger("utils/xmlrpc/impl/middlewareXmlrpc.ts");
async function fetchMiddleware(apiUrl, reqMethod, reqParams) {
  const middlewareUrl = getSiyuanCfg().middlewareUrl;
  const middleApiUrl = middlewareUrl + "/xmlrpc";
  logger$2.debug("apiUrl=>", apiUrl);
  const fetchCORSParams = {
    reqMethod,
    reqParams
  };
  logger$2.debug("fetchCORSParams=>", fetchCORSParams);
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
  logger$2.debug("middleApiUrl=>", middleApiUrl);
  logger$2.debug("middleFetchOption=>", middleFetchOption);
  const response = await fetch(middleApiUrl, middleFetchOption);
  const resText = await response.text();
  logger$2.debug("fetchMiddleware\u7ED3\u675F\uFF0CresText", resText);
  const ret = jsonUtil.safeParse(resText, []);
  logger$2.debug("fetchMiddleware\u7ED3\u675F\uFF0CresJson", ret);
  if (ret.faultCode) {
    logger$2.error("\u4EE3\u7406\u8BF7\u6C42\u5F02\u5E38\uFF0C\u9519\u8BEF\u4FE1\u606F\u5982\u4E0B\uFF1A", ret.faultString);
    throw new Error(ret.faultString);
  }
  return ret;
}
const logger$1 = LogFactory.getLogger("utils/xmlrpc/impl/chromeXmlrpc.ts");
async function doChromeFetch(apiUrl, reqMethod, reqParams) {
  try {
    return await fetchMiddleware(apiUrl, reqMethod, reqParams);
  } catch (e) {
    throw new Error(e);
  }
}
async function fetchChrome(apiUrl, reqMethod, reqParams) {
  logger$1.debug("fetchChrome apiUrl=>", apiUrl);
  const fetchCORSParams = {
    reqMethod,
    reqParams
  };
  logger$1.debug("fetchChrome fetchCORSParams=>", fetchCORSParams);
  const result = await doChromeFetch(apiUrl, reqMethod, reqParams);
  if (!result || result === "") {
    throw new Error("\u8BF7\u6C42\u9519\u8BEF\u6216\u8005\u8FD4\u56DE\u7ED3\u679C\u4E3A\u7A7A");
  }
  logger$1.debug("fetchCustom result=>", result);
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
    ret = ret + "";
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
    var _a2;
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
      post_status: (_a2 = post.post_status) != null ? _a2 : POST_STATUS_CONSTANTS.POST_STATUS_PUBLISH
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
    var _a2;
    const postUrl = this.cfg.previewUrl.replace("[postid]", postid);
    const previewUrl = pathJoin((_a2 = this.cfg.home) != null ? _a2 : "", postUrl);
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
class CommonblogApi {
  constructor() {
    __publicField(this, "logger");
    this.logger = LogFactory.getLogger("utils/platform/commonblog/commonblogApi.ts");
  }
  async fetchCORS(apiUrl, fetchOptions, formJson) {
    const middlewareUrl = getSiyuanCfg().middlewareUrl;
    const middleApiUrl = middlewareUrl + "/fetch";
    this.logger.debug("apiUrl=>", apiUrl);
    this.logger.debug("fetchOptions=>", fetchOptions);
    const originalFetchParams = {
      apiUrl,
      fetchOptions
    };
    if (formJson != null) {
      Object.assign(originalFetchParams, {
        formJson
      });
    }
    const data = {
      fetchParams: originalFetchParams
    };
    const middleFetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    this.logger.debug("middleApiUrl=>", middleApiUrl);
    this.logger.debug("middleFetchOption=>", middleFetchOption);
    return await fetch(middleApiUrl, middleFetchOption);
  }
  async fetchChrome(apiUrl, fetchOptions, formJson) {
    try {
      const reqOps = {
        type: "fetchChromeJson",
        apiUrl,
        fetchCORSOptions: fetchOptions
      };
      if (formJson != null) {
        Object.assign(reqOps, {
          formJson: JSON.stringify(formJson)
        });
      }
      this.logger.debug("fetchChrome reqOps=>", reqOps);
      const resJson = await sendChromeMessage(reqOps);
      this.logger.debug("fetchChromeJson resJson=>", resJson);
      return resJson;
    } catch (e) {
      throw new Error("\u8BF7\u6C42\u5F02\u5E38", e);
    }
  }
  async fetchCall(apiUrl, fetchOptions, formJson) {
    let result;
    if (isLocalhost(apiUrl)) {
      this.logger.warn("\u68C0\u6D4B\u5230\u672C\u5730\u8BF7\u6C42\uFF0C\u76F4\u63A5fetch\u83B7\u53D6\u6570\u636E");
      result = await fetch(apiUrl, fetchOptions);
    } else if (isElectron) {
      this.logger.warn("\u5F53\u524D\u5904\u4E8E\u6302\u4EF6\u6A21\u5F0F\uFF0C\u4F7F\u7528electron\u7684fetch\u83B7\u53D6\u6570\u636E");
      result = await fetch(apiUrl, fetchOptions);
    } else if (isInChromeExtension()) {
      this.logger.warn("\u5F53\u524D\u5904\u4E8EChrome\u63D2\u4EF6\u4E2D\uFF0C\u9700\u8981\u6A21\u62DFfetch\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898");
      result = await this.fetchChrome(apiUrl, fetchOptions, formJson);
    } else {
      this.logger.warn("\u5F53\u524D\u5904\u4E8E\u975E\u6302\u4EF6\u6A21\u5F0F\uFF0C\u5DF2\u5F00\u542F\u8BF7\u6C42\u4EE3\u7406\u89E3\u51B3CORS\u8DE8\u57DF\u95EE\u9898");
      this.logger.warn("formJson=>", formJson);
      result = await this.fetchCORS(apiUrl, fetchOptions, formJson);
    }
    if (!result) {
      throw new Error("\u8BF7\u6C42\u9519\u8BEF\u6216\u8005\u8FD4\u56DE\u7ED3\u679C\u4E3A\u7A7A");
    }
    this.logger.debug("\u6700\u7EC8\u8FD4\u56DE\u7ED9\u524D\u7AEF\u7684\u6570\u636E=>", result);
    return result;
  }
  async fetchEntry(apiUrl, fetchOptions, formJson) {
    const result = await this.fetchCall(apiUrl, fetchOptions, formJson);
    this.logger.debug("\u8BF7\u6C42\u7ED3\u679C\uFF0Cresult=>", result);
    return result;
  }
  parseCORSBody(corsjson) {
    return corsjson.body;
  }
  async doFetch(apiUrl, fetchOptions, formJson) {
    const response = await this.fetchEntry(apiUrl, fetchOptions, formJson);
    if (!response) {
      throw new Error("\u8BF7\u6C42\u5F02\u5E38");
    }
    let resJson;
    const isTest2 = { "VITE_LOG_INFO_ENABLED": "true", "VITE_DEBUG_MODE": "false", "VITE_MIDDLEWARE_URL": "https://api.terwer.space/api/middleware" }.TEST === "true";
    if (isTest2 || typeof response !== "undefined" && response instanceof Response) {
      const statusCode = response.status;
      if (statusCode !== 200) {
        if (statusCode === 401) {
          throw new Error("\u56E0\u6743\u9650\u4E0D\u8DB3\u64CD\u4F5C\u5DF2\u88AB\u7981\u6B62");
        } else if (statusCode > 401) {
          if (statusCode === 413) {
            throw new Error("\u8BF7\u6C42\u5185\u5BB9\u8FC7\u591A\uFF0C\u8BF7\u5220\u51CF\u6587\u7AE0\u6B63\u6587\u4E4B\u540E\u518D\u8BD5");
          }
          let msg = response.statusText;
          if (isEmptyString(msg)) {
            msg = "\u7F51\u7EDC\u8D85\u65F6\u6216\u8005\u670D\u52A1\u5668\u9519\u8BEF\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\u3002";
          } else {
            msg = "\u9519\u8BEF\u4FE1\u606F\uFF1A" + msg;
          }
          throw new Error(msg);
        } else {
          throw new Error("fetch\u8BF7\u6C42\u9519\u8BEF");
        }
      }
      if (isLocalhost(apiUrl)) {
        resJson = await response.json();
      } else if (isElectron) {
        resJson = await response.json();
      } else {
        const corsJson = await response.json();
        resJson = this.parseCORSBody(corsJson);
      }
    } else {
      resJson = response;
    }
    return resJson;
  }
  async doFormFetch(apiUrl, fetchOptions, formJson) {
    const widgetResult = getWidgetId();
    if (widgetResult.isInSiyuan) {
      const form = new URLSearchParams();
      formJson.forEach((item) => {
        form.append(item.key, item.value);
      });
      fetchOptions.body = form;
      return await this.doFetch(apiUrl, fetchOptions);
    }
    if (isInChromeExtension()) {
      return await this.doFetch(apiUrl, fetchOptions, formJson);
    } else {
      return await this.doFetch(apiUrl, fetchOptions, formJson);
    }
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
    var _a2, _b2;
    super(API_TYPE_CONSTANTS.API_TYPE_LIANDI);
    __publicField(this, "logger");
    __publicField(this, "liandiApi");
    this.logger = LogFactory.getLogger("utils/platform/commonblog/liandi/liandiApiAdaptor.ts");
    this.liandiApi = new LiandiApi(this.cfg.apiUrl, (_a2 = this.cfg.username) != null ? _a2 : "", (_b2 = this.cfg.token) != null ? _b2 : "");
  }
  async getUsersBlogs() {
    var _a2, _b2;
    const result = [];
    const user = await this.liandiApi.getUser();
    this.logger.debug("user=>", user);
    const userblog = new UserBlog();
    userblog.blogid = this.apiType;
    userblog.blogName = (_b2 = (_a2 = user.user.userName) != null ? _a2 : this.cfg.blogName) != null ? _b2 : "\u94FE\u6EF4";
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
    var _a2, _b2;
    const purl = (_a2 = this.cfg.previewUrl) != null ? _a2 : "";
    const postUrl = purl.replace("[postid]", postid);
    return pathJoin((_b2 = this.cfg.home) != null ? _b2 : "", postUrl);
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
    var _a2, _b2, _c;
    super(API_TYPE_CONSTANTS.API_TYPE_YUQUE);
    __publicField(this, "logger");
    __publicField(this, "yuqueApi");
    this.logger = LogFactory.getLogger("utils/platform/commonblog/yuque/yuqueApiAdaptor.ts");
    this.yuqueApi = new YuqueApi(this.cfg.apiUrl, (_a2 = this.cfg.blogid) != null ? _a2 : "", (_b2 = this.cfg.username) != null ? _b2 : "", (_c = this.cfg.token) != null ? _c : "");
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
    var _a2, _b2, _c, _d;
    const purl = (_a2 = this.cfg.previewUrl) != null ? _a2 : "";
    const yuquePostidKey = this.getYuquePostKey(postid);
    const docId = yuquePostidKey.docId;
    const repo = (_c = (_b2 = yuquePostidKey.docRepo) != null ? _b2 : this.cfg.blogid) != null ? _c : "";
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
    var _a2, _b2;
    super(API_TYPE_CONSTANTS.API_TYPE_KMS);
    __publicField(this, "kmsApi");
    const kmsUsername = (_a2 = this.cfg.username) != null ? _a2 : "";
    const kmsPassword = (_b2 = this.cfg.password) != null ? _b2 : "";
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
    var _a2, _b2;
    const purl = (_a2 = this.cfg.previewUrl) != null ? _a2 : "";
    const postUrl = purl.replace("[postid]", postid);
    return pathJoin((_b2 = this.cfg.home) != null ? _b2 : "", postUrl);
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
const _hoisted_1$h = {
  class: "github-setting-basic"
};
const _hoisted_2$a = {
  href: "https://github.com/settings/tokens/new",
  target: "_blank"
};
const _hoisted_3$5 = {
  key: 0,
  class: "github-setting-advanced"
};
const _sfc_main$x = /* @__PURE__ */ defineComponent({
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
        }, 8, ["label"]), createBaseVNode("div", _hoisted_1$h, [createVNode(_component_el_form_item, {
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
          }, null, 8, ["modelValue", "placeholder"]), createBaseVNode("a", _hoisted_2$a, toDisplayString(_ctx.$t("setting.blog.type.github.token.gen")), 1)]),
          _: 1
        }, 8, ["label"])]), editMode.value ? (openBlock(), createElementBlock("div", _hoisted_3$5, [createVNode(_component_el_form_item, {
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
const _sfc_main$w = /* @__PURE__ */ defineComponent({
  __name: "VuepressSetting",
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS);
    const vuepressCfg = new VuepressCfg();
    const cfg = ref(vuepressCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$x, {
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
const _sfc_main$v = /* @__PURE__ */ defineComponent({
  __name: "HugoSetting",
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_HUGO);
    const hugoCfg = new HugoCfg();
    const cfg = ref(hugoCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$x, {
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
const _sfc_main$u = /* @__PURE__ */ defineComponent({
  __name: "HexoSetting",
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_HEXO);
    const hexoCfg = new HexoCfg();
    const cfg = ref(hexoCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$x, {
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
const _sfc_main$t = /* @__PURE__ */ defineComponent({
  __name: "JekyllSetting",
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_JEKYLL);
    const jekyllCfg = new JekyllCfg();
    const cfg = ref(jekyllCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$x, {
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
const _sfc_main$s = /* @__PURE__ */ defineComponent({
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
      let errMsg;
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
        errMsg = e;
        console.error(e);
      }
      if (!apiStatus.value) {
        ElMessage.error(t("setting.blog.vali.error") + "=>" + errMsg);
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
const _sfc_main$r = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createBlock(_sfc_main$s, {
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
const _sfc_main$q = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createBlock(_sfc_main$s, {
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
const _sfc_main$p = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createBlock(_sfc_main$s, {
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
const _sfc_main$o = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createBlock(_sfc_main$s, {
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
const _hoisted_1$g = ["href"];
const _hoisted_2$9 = ["href"];
const _sfc_main$n = /* @__PURE__ */ defineComponent({
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
          }, toDisplayString(_ctx.$t("setting.common.username.gen")) + "\uFF1A" + toDisplayString(tokenSettingUrl.value), 9, _hoisted_1$g)]),
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
          }, toDisplayString(_ctx.$t("setting.common.token.gen")) + "\uFF1A" + toDisplayString(tokenSettingUrl.value), 9, _hoisted_2$9)]),
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
const _sfc_main$m = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createBlock(_sfc_main$n, {
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
const _sfc_main$l = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createBlock(_sfc_main$n, {
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
const _sfc_main$k = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createBlock(_sfc_main$n, {
        "api-type": apiType.value,
        "username-enabled": true,
        "password-enabled": true,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
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
const _hoisted_1$f = {
  key: 1
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
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
          default: withCtx(() => [createVNode(_sfc_main$w)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(hugoEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 1,
          label: _ctx.$t("setting.hugo") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$v)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(hexoEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 2,
          label: _ctx.$t("setting.hexo") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$u)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(jekyllEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 3,
          label: _ctx.$t("setting.jekyll") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$t)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(jvueEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 4,
          label: _ctx.$t("setting.jvue") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$r)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(confEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 5,
          label: _ctx.$t("setting.conf") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$q)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(cnblogsEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 6,
          label: _ctx.$t("setting.cnblogs") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$p)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(wordpressEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 7,
          label: _ctx.$t("setting.wordpress") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$o)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(liandiEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 8,
          label: _ctx.$t("setting.liandi") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$m)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(yuqueEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 9,
          label: _ctx.$t("setting.yuque") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$l)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(kmsEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 10,
          label: _ctx.$t("setting.kms") + _ctx.$t("setting.blog.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$k)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(formData.githubArray, (gcfg) => {
          return openBlock(), createBlock(_component_el_tab_pane, {
            key: gcfg.platformKey,
            label: gcfg.platformName + _ctx.$t("setting.blog.setting")
          }, {
            default: withCtx(() => [createVNode(_sfc_main$x, {
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
            default: withCtx(() => [createVNode(_sfc_main$s, {
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
            default: withCtx(() => [createVNode(_sfc_main$o, {
              "api-type": wcfg.platformKey,
              cfg: createWCfg.value(wcfg)
            }, null, 8, ["api-type", "cfg"])]),
            _: 2
          }, 1032, ["label"]);
        }), 128))]),
        _: 1
      })) : (openBlock(), createElementBlock("div", _hoisted_1$f, [createVNode(_component_el_alert, {
        class: "top-version-tip",
        title: _ctx.$t("config.platform.none"),
        type: "error",
        closable: false
      }, null, 8, ["title"])]));
    };
  }
});
const _hoisted_1$e = {
  key: 1
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
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
        inline: "",
        "label-width": "150px"
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
        }), 128)), showSwitchTip.value ? (openBlock(), createElementBlock("div", _hoisted_1$e, [createBaseVNode("p", null, [createVNode(_component_el_alert, {
          title: _ctx.$t("platform.must.select.one"),
          type: "error",
          closable: false
        }, null, 8, ["title"])])])) : createCommentVNode("", true)]),
        _: 1
      });
    };
  }
});
const ServiceSwitch_vue_vue_type_style_index_0_scoped_c6f66bd8_lang = "";
const ServiceSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-c6f66bd8"]]);
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
const _sfc_main$h = /* @__PURE__ */ defineComponent({
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
const DynamicPlatform_vue_vue_type_style_index_0_scoped_3d72b4ef_lang = "";
const DynamicPlatform = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-3d72b4ef"]]);
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
var PicgoPageMenuType = /* @__PURE__ */ ((PicgoPageMenuType2) => {
  PicgoPageMenuType2["PicgoPageMenuType_Uninstall"] = "uninstall";
  PicgoPageMenuType2["PicgoPageMenuType_Disable"] = "disable";
  PicgoPageMenuType2["PicgoPageMenuType_Enable"] = "enable";
  PicgoPageMenuType2["PicgoPageMenuType_Update"] = "update";
  PicgoPageMenuType2["PicgoPageMenuType_ConfigThing"] = "configThing";
  PicgoPageMenuType2["PicgoPageMenuType_Transfer"] = "transformer";
  PicgoPageMenuType2["PicgoPageMenuType_Plugin"] = "plugin";
  return PicgoPageMenuType2;
})(PicgoPageMenuType || {});
const picGoUploadApi = new PicGoUploadApi();
const getPicBeds = () => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const picgo = syWin.SyPicgo.getPicgoObj();
  const picBedTypes = picgo.helper.uploader.getIdList();
  const picBedFromDB = picgo.getConfig("picBed.list") || [];
  const picBeds = picBedTypes.map((item) => {
    const visible = picBedFromDB.find((i) => i.type === item);
    return {
      type: item,
      name: picgo.helper.uploader.get(item).name || item,
      visible: visible ? visible.visible : true
    };
  }).sort((a) => {
    if (a.type === "github") {
      return -1;
    }
    return 0;
  });
  return picBeds;
};
const getPicgoConfig = (key = void 0) => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const picgo = syWin.SyPicgo.getPicgoObj();
  return picgo.getConfig(key);
};
const savePicgoConfig = (_config, value = void 0) => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const picgo = syWin.SyPicgo.getPicgoObj();
  let config;
  if (typeof _config === "string") {
    config = {
      [_config]: value
    };
  } else {
    config = strUtil.getRawData(_config);
  }
  picgo.saveConfig(config);
  console.log("savePicgoConfig finished.");
};
const uploadByPicGO = async (input) => {
  if (input) {
    if (isInSiyuanOrSiyuanNewWin()) {
      const syWin = siyuanBrowserUtil.getSiyuanWindow();
      const syPicgo = syWin.SyPicgo;
      return syPicgo.upload(input);
    } else {
      return picGoUploadApi.upload(input);
    }
  } else {
    if (isInSiyuanOrSiyuanNewWin()) {
      const syWin = siyuanBrowserUtil.getSiyuanWindow();
      const syPicgo = syWin.SyPicgo;
      return syPicgo.uploadFormClipboard();
    } else {
      return picGoUploadApi.upload();
    }
  }
};
const handleConfigWithFunction = (config) => {
  for (const i in config) {
    if (typeof config[i].default === "function") {
      config[i].default = config[i].default();
    }
    if (typeof config[i].choices === "function") {
      config[i].choices = config[i].choices();
    }
  }
  return config;
};
const completeUploaderMetaConfig = (originData) => {
  return Object.assign(
    {
      _configName: "Default"
    },
    strUtil.trimValues(originData),
    {
      _id: idUtil.newUuid(),
      _createdAt: Date.now(),
      _updatedAt: Date.now()
    }
  );
};
const getPicBedConfig = (type) => {
  var _a2, _b2;
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const picgo = syWin.SyPicgo.getPicgoObj();
  const name = ((_a2 = picgo.helper.uploader.get(type)) == null ? void 0 : _a2.name) || type;
  if ((_b2 = picgo.helper.uploader.get(type)) == null ? void 0 : _b2.config) {
    const _config = picgo.helper.uploader.get(type).config(picgo);
    const config = handleConfigWithFunction(_config);
    return {
      config,
      name
    };
  } else {
    return {
      config: [],
      name
    };
  }
};
const upgradeUploaderConfig = (type) => {
  var _a2;
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const picgo = syWin.SyPicgo.getPicgoObj();
  const uploaderConfig = (_a2 = picgo.getConfig(`picBed.${type}`)) != null ? _a2 : {};
  if (!uploaderConfig._id) {
    Object.assign(uploaderConfig, completeUploaderMetaConfig(uploaderConfig));
  }
  const uploaderConfigList = [uploaderConfig];
  picgo.saveConfig({
    [`uploader.${type}`]: {
      configList: uploaderConfigList,
      defaultId: uploaderConfig._id
    },
    [`picBed.${type}`]: uploaderConfig
  });
  return {
    configList: uploaderConfigList,
    defaultId: uploaderConfig._id
  };
};
const getUploaderConfigList = (type) => {
  var _a2;
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const picgo = syWin.SyPicgo.getPicgoObj();
  if (!type) {
    return {
      configList: [],
      defaultId: ""
    };
  }
  const currentUploaderConfig = (_a2 = picgo.getConfig(`uploader.${type}`)) != null ? _a2 : {};
  let configList = currentUploaderConfig.configList;
  let defaultId = currentUploaderConfig.defaultId || "";
  if (!configList) {
    const res = upgradeUploaderConfig(type);
    configList = res.configList;
    defaultId = res.defaultId;
  }
  const configItem = {
    configList,
    defaultId
  };
  return configItem;
};
const changeCurrentUploader = (type, config, id) => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const picgo = syWin.SyPicgo.getPicgoObj();
  if (!type) {
    return;
  }
  if (id) {
    picgo.saveConfig({
      [`uploader.${type}.defaultId`]: id
    });
  }
  if (config) {
    picgo.saveConfig({
      [`picBed.${type}`]: config
    });
  }
  picgo.saveConfig({
    "picBed.current": type,
    "picBed.uploader": type
  });
};
const selectUploaderConfig = (type, id) => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const picgo = syWin.SyPicgo.getPicgoObj();
  const { configList } = getUploaderConfigList(type);
  const config = configList.find((item) => item._id === id);
  if (config) {
    picgo.saveConfig({
      [`uploader.${type}.defaultId`]: id,
      [`picBed.${type}`]: config
    });
  }
  return config;
};
const updateUploaderConfig = (type, id, config) => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const picgo = syWin.SyPicgo.getPicgoObj();
  const { configList, defaultId } = getUploaderConfigList(type);
  const existConfig = configList.find((item) => item._id === id);
  let updatedConfig;
  let updatedDefaultId = defaultId;
  if (existConfig) {
    updatedConfig = Object.assign(existConfig, strUtil.trimValues(config), {
      _updatedAt: Date.now()
    });
  } else {
    updatedConfig = completeUploaderMetaConfig(config);
    updatedDefaultId = updatedConfig._id;
    configList.push(updatedConfig);
  }
  picgo.saveConfig({
    [`uploader.${type}.configList`]: configList,
    [`uploader.${type}.defaultId`]: updatedDefaultId,
    [`picBed.${type}`]: updatedConfig
  });
};
const deleteUploaderConfig = (type, id) => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const picgo = syWin.SyPicgo.getPicgoObj();
  const { configList, defaultId } = getUploaderConfigList(type);
  if (configList.length <= 1) {
    return;
  }
  let newDefaultId = defaultId;
  const updatedConfigList = configList.filter((item) => item._id !== id);
  if (id === defaultId) {
    newDefaultId = updatedConfigList[0]._id;
    changeCurrentUploader(type, updatedConfigList[0], updatedConfigList[0]._id);
  }
  picgo.saveConfig({
    [`uploader.${type}.configList`]: updatedConfigList
  });
  return {
    configList: updatedConfigList,
    defaultId: newDefaultId
  };
};
const getPicgoBasedir = () => {
  var _a2;
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const picgo = (_a2 = syWin == null ? void 0 : syWin.SyPicgo) == null ? void 0 : _a2.getPicgoObj();
  if (!picgo) {
    return "[PicGO\u672A\u6302\u8F7D]";
  }
  return picgo.baseDir;
};
const getPicgoCfgPath = () => {
  var _a2;
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const picgo = (_a2 = syWin == null ? void 0 : syWin.SyPicgo) == null ? void 0 : _a2.getPicgoObj();
  if (!picgo) {
    return "[PicGO\u672A\u6302\u8F7D]";
  }
  return picgo.configPath;
};
const getPicgoCfgFile = (filename) => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const syPicgo = syWin == null ? void 0 : syWin.SyPicgo;
  const picgo = syPicgo == null ? void 0 : syPicgo.getPicgoObj();
  if (!picgo) {
    return "[PicGO\u672A\u6302\u8F7D]";
  }
  return syPicgo.combinePath(picgo.baseDir, filename);
};
const getPicgoVersion = () => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const syPicgo = syWin == null ? void 0 : syWin.SyPicgo;
  const picgo = syPicgo == null ? void 0 : syPicgo.getPicgoObj();
  if (!picgo) {
    return "1.5.0";
  }
  return picgo.VERSION;
};
const handleRestoreState = (item, name) => {
  if (item === "uploader") {
    const current = getPicgoConfig("picBed.current");
    if (current === name) {
      savePicgoConfig({
        "picBed.current": "github",
        "picBed.uploader": "github"
      });
    }
  }
  if (item === "transformer") {
    const current = getPicgoConfig("picBed.transformer");
    if (current === name) {
      savePicgoConfig({
        "picBed.transformer": "path"
      });
    }
  }
};
const ipcHandleEvent = (channel, args = {}) => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const syPicgo = syWin == null ? void 0 : syWin.SyPicgo;
  syPicgo.ipcMethods.handleEvent(channel, args);
};
const ipcRegisterEvent = (channel, data = {}) => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const syPicgo = syWin == null ? void 0 : syWin.SyPicgo;
  syPicgo.ipcMethods.registerEvent(channel, data);
};
const ipcRemoveEvent = (channel) => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const syPicgo = syWin == null ? void 0 : syWin.SyPicgo;
  syPicgo.ipcMethods.removeEvent(channel);
};
const buildPluginMenu = (plugin, i18nFunc) => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const template = [];
  const enableI18n = i18nFunc(PicgoPageMenuType.PicgoPageMenuType_Enable);
  const enableItem = {
    label: enableI18n["setting.picgo.plugin.enable"],
    enabled: !plugin.enabled,
    click() {
      savePicgoConfig({
        [`picgoPlugins.${plugin.fullName}`]: true
      });
      browserUtil.reloadPageWithMessage("\u63D2\u4EF6\u5DF2\u542F\u7528\uFF0C\u5373\u5C06\u5237\u65B0\u9875\u9762...");
    }
  };
  const disableI18n = i18nFunc(PicgoPageMenuType.PicgoPageMenuType_Disable);
  const disableItem = {
    label: disableI18n["setting.picgo.plugin.disable"],
    enabled: plugin.enabled,
    click() {
      savePicgoConfig({
        [`picgoPlugins.${plugin.fullName}`]: false
      });
      if (plugin.config.transformer.name) {
        handleRestoreState("transformer", plugin.config.transformer.name);
      }
      if (plugin.config.uploader.name) {
        handleRestoreState("uploader", plugin.config.uploader.name);
      }
      browserUtil.reloadPageWithMessage("\u63D2\u4EF6\u5DF2\u7981\u7528\uFF0C\u5373\u5C06\u5237\u65B0\u9875\u9762...");
    }
  };
  const uninstallI18n = i18nFunc(PicgoPageMenuType.PicgoPageMenuType_Uninstall);
  const uninstallItem = {
    label: uninstallI18n["setting.picgo.plugin.uninstall"],
    click() {
      ipcHandleEvent("picgoHandlePluginIng", plugin.fullName);
      ipcHandleEvent("uninstallPlugin", plugin.fullName);
    }
  };
  const updateI18n = i18nFunc(PicgoPageMenuType.PicgoPageMenuType_Update);
  ({
    label: updateI18n["setting.picgo.plugin.update"],
    click() {
      ipcHandleEvent("picgoHandlePluginIng", plugin.fullName);
      ipcHandleEvent("updatePlugin", plugin.fullName);
    }
  });
  template.push(enableItem);
  template.push(disableItem);
  template.push(uninstallItem);
  template.push({
    label: " -------- ",
    click() {
    }
  });
  const pluginI18n = i18nFunc(PicgoPageMenuType.PicgoPageMenuType_Plugin);
  for (const i in plugin.config) {
    if (i !== "uploader") {
      if (plugin.config[i].config.length > 0) {
        const obj = {
          label: `${pluginI18n["setting.picgo.plugin.config.setting"]} - ${plugin.config[i].fullName || plugin.config[i].name}`,
          click() {
            const currentType = i;
            const configName = plugin.config[i].fullName || plugin.config[i].name;
            const config = plugin.config[i].config;
            ipcHandleEvent("picgoConfigPlugin", {
              currentType,
              configName,
              config
            });
          }
        };
        template.push(obj);
      }
    }
  }
  const menu = syWin.syp.buildMenu(template, syWin);
  const { getCurrentWindow } = syWin.require("@electron/remote");
  const elecWin = getCurrentWindow();
  menu.popup({
    elecWin
  });
};
const backupPicgoCfg = () => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const syPicgo = syWin == null ? void 0 : syWin.SyPicgo;
  const picgo = syPicgo == null ? void 0 : syPicgo.getPicgoObj();
  if (!picgo) {
    throw new Error("[PicGO\u672A\u6302\u8F7D]");
  }
  const cfgPath = getPicgoCfgPath();
  const json = syPicgo.readFileAsJson(cfgPath);
  const filename = "sy-picgo-cfg-v" + picgo.GUI_VERSION + ".json";
  configUtil.downloadFileFromJson(json, filename);
};
const importPicgoCfg = async () => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const syPicgo = syWin == null ? void 0 : syWin.SyPicgo;
  const cfgPath = getPicgoCfgPath();
  await importJSONData(function(data) {
    data["picgoPlugins"] = {};
    const jsonstr = JSON.stringify(data);
    syPicgo.restoreCfg(jsonstr, cfgPath);
    browserUtil.reloadPageWithMessage("\u5BFC\u5165\u6210\u529F");
  });
};
const clearPicgoCfg = () => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  const basedir = getPicgoBasedir();
  const syPicgo = syWin == null ? void 0 : syWin.SyPicgo;
  syPicgo.rmFolder(basedir);
};
const picgoUtil = {
  getPicgoConfig,
  savePicgoConfig,
  getPicBedConfig,
  getPicBeds,
  getUploaderConfigList,
  selectUploaderConfig,
  changeCurrentUploader,
  deleteUploaderConfig,
  updateUploaderConfig,
  uploadByPicGO,
  getPicgoBasedir,
  getPicgoCfgPath,
  getPicgoCfgFile,
  ipcHandleEvent,
  ipcRegisterEvent,
  ipcRemoveEvent,
  getPicgoVersion,
  buildPluginMenu,
  handleRestoreState,
  clearPicgoCfg,
  backupPicgoCfg,
  importPicgoCfg
};
const usePicbedStore = defineStore("picbedStore", () => {
  const defaultPicBed = ref("github");
  function setDefaultPicBed(type) {
    defaultPicBed.value = type;
    console.log("setDefaultPicBed=>", defaultPicBed.value);
  }
  const picbedStore = {
    defaultPicBed,
    setDefaultPicBed
  };
  return picbedStore;
});
const _hoisted_1$d = {
  class: "config-form-box"
};
const _hoisted_2$8 = {
  class: "config-form-header"
};
const _hoisted_3$4 = {
  class: "flex items-center"
};
const _hoisted_4$4 = ["title"];
const _hoisted_5$4 = {
  class: "config-form"
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  __name: "ConfigForm",
  props: {
    configType: String,
    config: Object,
    id: String,
    configId: String,
    isNewForm: Boolean
  },
  emits: ["on-change"],
  setup(__props, {
    emit: emits
  }) {
    const props = __props;
    const logger2 = LogFactory.getLogger("components/picgo/setting/PicbedConfigForm.vue");
    const $configForm = ref();
    const configList = ref([]);
    const configRuleForm = reactive({});
    watch(props.config, (val) => {
      logger2.info("\u68C0\u6D4B\u5230\u914D\u7F6E\u6587\u4EF6\u53D8\u5316\uFF0Cval=>", val);
      handleConfigChange(val);
    }, {
      deep: true,
      immediate: true
    });
    function handleConfigChange(val) {
      handleConfig(val);
    }
    function getCurConfigFormData() {
      const configId = props.configId;
      let curConfig;
      switch (props.configType) {
        case "plugin": {
          curConfig = picgoUtil.getPicgoConfig(`${props.configId}`) || {
            _configName: props.configId
          };
          break;
        }
        case "uploader": {
          const curTypeConfigList = picgoUtil.getPicgoConfig(`uploader.${props.id}.configList`) || [];
          curConfig = curTypeConfigList.find((i) => i._id === configId) || {};
          break;
        }
        case "transformer": {
          curConfig = picgoUtil.getPicgoConfig(`transformer.${props.configId}`) || {};
          break;
        }
        default:
          curConfig = {};
          break;
      }
      console.log("curConfig=>", curConfig);
      return curConfig;
    }
    function handleConfig(val) {
      const config = props.isNewForm ? {} : getCurConfigFormData();
      const configId = props.isNewForm ? void 0 : props.configId;
      Object.assign(configRuleForm, config);
      logger2.debug("form\u5C5E\u6027=>", configRuleForm);
      logger2.debug("configId=>", configId);
      const rawVal = toRaw(val);
      logger2.debug("\u8FFD\u52A0form\u5C5E\u6027rawVal=>", rawVal);
      if (rawVal.length > 0) {
        configList.value = cloneDeep(rawVal).map((item) => {
          var _a2;
          if (!configId)
            return item;
          let defaultValue = item.default !== void 0 ? item.default : item.type === "checkbox" ? [] : null;
          if (item.type === "checkbox") {
            const defaults = ((_a2 = item.choices) == null ? void 0 : _a2.filter((i) => {
              return i.checked;
            }).map((i) => i.value)) || [];
            defaultValue = union(defaultValue, defaults);
          }
          if (config && config[item.name] !== void 0) {
            defaultValue = config[item.name];
          }
          configRuleForm[item.name] = defaultValue;
          return item;
        });
      }
      logger2.debug("\u5B8C\u6574form\u5C5E\u6027=>", configRuleForm);
      logger2.debug("\u52A8\u6001\u914D\u7F6EconfigList=>", configList.value);
      logger2.debug("\u8FFD\u52A0form\u5B8C\u6210.");
    }
    async function validate() {
      return new Promise((resolve) => {
        var _a2;
        (_a2 = $configForm.value) == null ? void 0 : _a2.validate((valid) => {
          if (valid) {
            resolve(configRuleForm);
          } else {
            resolve(false);
            return false;
          }
        });
      });
    }
    const onBack = () => {
      emits("on-change");
    };
    const onSubmit = async () => {
      const result = await validate() || false;
      console.log("\u51C6\u5907\u4FDD\u5B58\u914D\u7F6Eresult", result);
      if (result !== false) {
        switch (props.configType) {
          case "plugin":
            picgoUtil.savePicgoConfig(`${props.configId}`, result);
            break;
          case "uploader":
            picgoUtil.updateUploaderConfig(props.id, result == null ? void 0 : result._id, result);
            break;
          case "transformer":
            picgoUtil.savePicgoConfig(`transformer.${props.configId}`, result);
            break;
        }
      }
      onBack();
    };
    return (_ctx, _cache) => {
      const _component_el_page_header = ElPageHeader;
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_switch = ElSwitch;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      return openBlock(), createElementBlock("div", _hoisted_1$d, [createBaseVNode("div", _hoisted_2$8, [createVNode(_component_el_page_header, {
        icon: unref(arrow_left_default),
        title: "\u8FD4\u56DE",
        onClick: onBack
      }, {
        content: withCtx(() => [createBaseVNode("div", _hoisted_3$4, [createBaseVNode("span", {
          class: "text-large font-600 mr-3",
          title: configRuleForm._configName
        }, toDisplayString(configRuleForm._configName), 9, _hoisted_4$4)])]),
        _: 1
      }, 8, ["icon"])]), createBaseVNode("div", _hoisted_5$4, [createVNode(_component_el_form, {
        ref_key: "$configForm",
        ref: $configForm,
        "label-width": "250px",
        model: configRuleForm
      }, {
        default: withCtx(() => [createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.picgo.config.name"),
          required: "",
          prop: "_configName"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: configRuleForm._configName,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => configRuleForm._configName = $event),
            placeholder: _ctx.$t("setting.picgo.config.name.placeholder")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), (openBlock(true), createElementBlock(Fragment, null, renderList(configList.value, (item, index) => {
          return openBlock(), createBlock(_component_el_form_item, {
            key: item.name + index,
            label: item.alias || item.name,
            required: item.required,
            prop: item.name
          }, {
            default: withCtx(() => [item.type === "input" || item.type === "password" ? (openBlock(), createBlock(_component_el_input, {
              key: 0,
              modelValue: configRuleForm[item.name],
              "onUpdate:modelValue": ($event) => configRuleForm[item.name] = $event,
              type: item.type === "password" ? "password" : "input",
              placeholder: item.message || item.name
            }, null, 8, ["modelValue", "onUpdate:modelValue", "type", "placeholder"])) : item.type === "list" && item.choices ? (openBlock(), createBlock(_component_el_select, {
              key: 1,
              modelValue: configRuleForm[item.name],
              "onUpdate:modelValue": ($event) => configRuleForm[item.name] = $event,
              placeholder: item.message || item.name
            }, {
              default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(item.choices, (choice) => {
                return openBlock(), createBlock(_component_el_option, {
                  key: choice.name || choice.value || choice,
                  label: choice.name || choice.value || choice,
                  value: choice.value || choice
                }, null, 8, ["label", "value"]);
              }), 128))]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder"])) : item.type === "checkbox" && item.choices ? (openBlock(), createBlock(_component_el_select, {
              key: 2,
              modelValue: configRuleForm[item.name],
              "onUpdate:modelValue": ($event) => configRuleForm[item.name] = $event,
              placeholder: item.message || item.name,
              multiple: "",
              "collapse-tags": ""
            }, {
              default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(item.choices, (choice) => {
                return openBlock(), createBlock(_component_el_option, {
                  key: choice.value || choice,
                  label: choice.name || choice.value || choice,
                  value: choice.value || choice
                }, null, 8, ["label", "value"]);
              }), 128))]),
              _: 2
            }, 1032, ["modelValue", "onUpdate:modelValue", "placeholder"])) : item.type === "confirm" ? (openBlock(), createBlock(_component_el_switch, {
              key: 3,
              modelValue: configRuleForm[item.name],
              "onUpdate:modelValue": ($event) => configRuleForm[item.name] = $event,
              "active-text": "yes",
              "inactive-text": "no"
            }, null, 8, ["modelValue", "onUpdate:modelValue"])) : createCommentVNode("", true)]),
            _: 2
          }, 1032, ["label", "required", "prop"]);
        }), 128)), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            onClick: onSubmit
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.opt.ok")), 1)]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["model"])])]);
    };
  }
});
const ConfigForm_vue_vue_type_style_index_0_scoped_03d6abbd_lang = "";
const ConfigForm = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["__scopeId", "data-v-03d6abbd"]]);
const _hoisted_1$c = {
  class: "picbed-setting"
};
const _hoisted_2$7 = {
  class: "bed-type-list"
};
const _hoisted_3$3 = {
  class: "profile-box"
};
const _hoisted_4$3 = {
  key: 0,
  class: "profile-setting"
};
const _hoisted_5$3 = {
  class: "profile-card-box"
};
const _hoisted_6$3 = ["onClick"];
const _hoisted_7$3 = {
  class: "profile-card-line"
};
const _hoisted_8$2 = {
  class: "pull-right"
};
const _hoisted_9$2 = {
  class: "profile-date"
};
const _hoisted_10$2 = {
  class: "profile-action"
};
const _hoisted_11$2 = {
  key: 1,
  class: "profile-form"
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  __name: "PicbedSetting",
  props: {
    isReload: Boolean
  },
  setup(__props) {
    const props = __props;
    const logger2 = LogFactory.getLogger("components/picgo/setting/PicbedSetting.vue");
    const picBedData = reactive({
      showPicBedList: []
    });
    const profileData = reactive({
      defaultConfigId: "",
      curConfigList: [],
      curConfig: {},
      curConfigId: ""
    });
    const type = ref("");
    const defaultType = ref("");
    const picbedStore = usePicbedStore();
    const {
      t
    } = useI18n();
    const isNewForm = ref(false);
    const showConfigForm = ref(false);
    const getCurrentUploader = () => {
      return picgoUtil.getPicgoConfig("picBed.uploader") || picgoUtil.getPicgoConfig("picBed.current") || "github";
    };
    const getPicBeds2 = () => {
      const picBeds = picgoUtil.getPicBeds();
      return picBeds.map((item) => {
        if (item.visible) {
          return item;
        }
        return null;
      }).filter((item) => item);
    };
    const getProfileList = (bedType) => {
      const profileList = picgoUtil.getUploaderConfigList(bedType);
      return profileList;
    };
    const handlePicBedTypeChange = (item) => {
      emitBackFn();
      type.value = item.type;
      reloadConfig(item.type);
      logger2.debug("item=>", item);
    };
    function selectItem(id) {
      profileData.defaultConfigId = id;
      const config = picgoUtil.selectUploaderConfig(type.value, id);
      logger2.debug("selectItem config=>", config);
    }
    function addNewConfig() {
      const configObj = picgoUtil.getPicBedConfig(type.value);
      profileData.curConfig = configObj.config;
      profileData.curConfigId = void 0;
      isNewForm.value = true;
      showConfigForm.value = true;
      logger2.debug("addNewConfig type=>", type.value);
      logger2.debug("addNewConfig id=>", profileData.curConfigId);
      logger2.debug("addNewConfig config=>", toRaw(profileData.curConfig));
    }
    function editConfig(id) {
      const configObj = picgoUtil.getPicBedConfig(type.value);
      profileData.curConfig = configObj.config;
      profileData.curConfigId = id;
      isNewForm.value = false;
      showConfigForm.value = true;
      logger2.debug("editConfig type=>", type.value);
      logger2.debug("editConfig id=>", profileData.curConfigId);
      logger2.debug("editConfig config=>", toRaw(profileData.curConfig));
    }
    function deleteConfig(id) {
      picgoUtil.deleteUploaderConfig(type.value, id);
    }
    function emitBackFn() {
      isNewForm.value = false;
      showConfigForm.value = false;
    }
    function setDefaultPicBed(tp) {
      picgoUtil.savePicgoConfig({
        "picBed.current": tp,
        "picBed.uploader": tp
      });
      picbedStore.setDefaultPicBed(tp);
      defaultType.value = tp;
      logger2.info("\u5F53\u524D\u5B58\u50A8\u7684\u56FE\u5E8A\u7C7B\u578B=>", tp);
      ElMessage.success(t("main.opt.success"));
    }
    const reloadConfig = (bedType = void 0) => {
      const picbeds = getPicBeds2();
      if (!bedType) {
        bedType = picbeds.length > 0 ? picbeds[0].type : "github";
      }
      type.value = bedType;
      picBedData.showPicBedList = picbeds;
      const profileList = getProfileList(bedType);
      profileData.curConfigList = profileList.configList;
      profileData.defaultConfigId = profileList.defaultId;
      defaultType.value = getCurrentUploader();
      picbedStore.setDefaultPicBed(defaultType.value);
    };
    watch(() => props.isReload, () => {
      reloadConfig();
      logger2.debug("picbed-setting\u521D\u59CB\u5316");
    });
    onMounted(() => {
      reloadConfig();
    });
    return (_ctx, _cache) => {
      const _component_el_alert = ElAlert;
      const _component_el_button = ElButton;
      const _component_el_button_group = ElButtonGroup;
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_el_tooltip = ElTooltip;
      return openBlock(), createElementBlock("div", _hoisted_1$c, [createVNode(_component_el_alert, {
        title: _ctx.$t("setting.picgo.picbed.current.selected.tip") + type.value + "\uFF0C" + _ctx.$t("setting.picgo.picbed.current.tip") + defaultType.value,
        type: "success",
        closable: false
      }, null, 8, ["title"]), createBaseVNode("div", _hoisted_2$7, [createVNode(_component_el_button_group, null, {
        default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(picBedData.showPicBedList, (item) => {
          return openBlock(), createBlock(_component_el_button, {
            type: type.value === item.type ? "primary" : "",
            key: item.name,
            onClick: ($event) => handlePicBedTypeChange(item)
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(item.name), 1)]),
            _: 2
          }, 1032, ["type", "onClick"]);
        }), 128))]),
        _: 1
      })]), createBaseVNode("div", _hoisted_3$3, [!showConfigForm.value ? (openBlock(), createElementBlock("div", _hoisted_4$3, [createBaseVNode("div", _hoisted_5$3, [(openBlock(true), createElementBlock(Fragment, null, renderList(profileData.curConfigList, (config) => {
        return openBlock(), createElementBlock("div", {
          key: config._id,
          class: "profile-card-item",
          onClick: () => selectItem(config._id)
        }, [createVNode(unref(ElCard), null, {
          default: withCtx(() => [createBaseVNode("div", _hoisted_7$3, [createBaseVNode("span", null, toDisplayString(config._configName), 1), createBaseVNode("span", _hoisted_8$2, [createVNode(_component_el_tooltip, {
            content: _ctx.$t("main.opt.edit"),
            class: "box-item",
            effect: "dark",
            placement: "bottom",
            "popper-class": "publish-menu-tooltip"
          }, {
            default: withCtx(() => [createVNode(_component_el_button, {
              onClick: withModifiers(($event) => editConfig(config._id), ["stop"])
            }, {
              default: withCtx(() => [createVNode(_component_font_awesome_icon, {
                icon: "fa-solid fa-pen-to-square"
              })]),
              _: 2
            }, 1032, ["onClick"])]),
            _: 2
          }, 1032, ["content"]), createVNode(_component_el_tooltip, {
            content: _ctx.$t("main.opt.delete"),
            class: "box-item",
            effect: "dark",
            placement: "bottom",
            "popper-class": "publish-menu-tooltip"
          }, {
            default: withCtx(() => [createVNode(_component_el_button, {
              onClick: withModifiers(($event) => deleteConfig(config._id), ["stop"])
            }, {
              default: withCtx(() => [createVNode(_component_font_awesome_icon, {
                icon: "fa-solid fa-trash-can"
              })]),
              _: 2
            }, 1032, ["onClick"])]),
            _: 2
          }, 1032, ["content"])])]), createBaseVNode("div", _hoisted_9$2, toDisplayString(unref(dateUtil).formatTimestampToZhDate(config._updatedAt)), 1), createBaseVNode("div", {
            class: normalizeClass({
              selected: config._id === profileData.defaultConfigId
            })
          }, toDisplayString(config._id === profileData.defaultConfigId ? _ctx.$t("setting.picgo.picbed.selected.tip") : _ctx.$t("setting.picgo.picbed.unselected.tip")), 3)]),
          _: 2
        }, 1024)], 8, _hoisted_6$3);
      }), 128)), createBaseVNode("div", {
        class: "profile-card-item",
        onClick: addNewConfig
      }, "+")]), createBaseVNode("div", _hoisted_10$2, [createVNode(_component_el_button, {
        class: "set-default-btn",
        type: "success",
        disabled: unref(picbedStore).defaultPicBed === type.value,
        onClick: _cache[0] || (_cache[0] = ($event) => setDefaultPicBed(type.value))
      }, {
        default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.picgo.picbed.set.default")), 1)]),
        _: 1
      }, 8, ["disabled"])])])) : (openBlock(), createElementBlock("div", _hoisted_11$2, [createVNode(ConfigForm, {
        "config-type": "uploader",
        id: type.value,
        config: profileData.curConfig,
        "config-id": profileData.curConfigId,
        "is-new-form": isNewForm.value,
        onOnChange: emitBackFn
      }, null, 8, ["id", "config", "config-id", "is-new-form"])]))])]);
    };
  }
});
const PicbedSetting_vue_vue_type_style_index_0_scoped_416fff36_lang = "";
const PicbedSetting = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-416fff36"]]);
const _hoisted_1$b = {
  key: 0
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  __name: "PicgoConfigSetting",
  setup(__props) {
    const logger2 = LogFactory.getLogger("components/picgo/setting/PicgoConfigSetting.vue");
    const {
      t
    } = useI18n();
    const DEFAULT_NPM_REGISTRY = "https://registry.npmmirror.com";
    const picBed = ref([]);
    const form = reactive({
      showPicBedList: [],
      autoRename: false,
      nodePath: "",
      nodeRegistry: DEFAULT_NPM_REGISTRY,
      nodeProxy: ""
    });
    function getPicBeds2() {
      const picBeds = picgoUtil.getPicBeds();
      picBed.value = picBeds;
      form.showPicBedList = picBed.value.map((item) => {
        if (item.visible) {
          return item.name;
        }
        return null;
      }).filter((item) => item);
    }
    function handleShowPicBedListChange(val) {
      const list = picBed.value.map((item) => {
        if (!val.includes(item.name)) {
          item.visible = false;
        } else {
          item.visible = true;
        }
        return item;
      });
      picgoUtil.savePicgoConfig({
        "picBed.list": list
      });
      logger2.debug("\u4FDD\u5B58\u542F\u7528\u7684\u56FE\u5E8A", list);
    }
    const handleOpenFile = (filename) => {
      const picgoCfgfile = picgoUtil.getPicgoCfgFile(filename);
      logger2.warn("\u5373\u5C06\u6253\u5F00\u6587\u4EF6=>", picgoCfgfile);
      siyuanBrowserUtil.openPath(picgoCfgfile);
    };
    const handleAutoRename = (val) => {
      picgoUtil.savePicgoConfig({
        "settings.autoRename": val
      });
    };
    const handleSaveNodeConfig = () => {
      form.nodePath = form.nodePath.trim();
      form.nodeRegistry = form.nodeRegistry.trim();
      form.nodeProxy = form.nodeProxy.trim();
      form.nodeRegistry = form.nodeRegistry === "" ? DEFAULT_NPM_REGISTRY : form.nodeRegistry;
      picgoUtil.savePicgoConfig({
        "settings.nodePath": form.nodePath,
        "settings.registry": form.nodeRegistry,
        "settings.proxy": form.nodeProxy === "" ? void 0 : form.nodeProxy
      });
      ElMessage.success(t("main.opt.success"));
    };
    function initData() {
      const config = picgoUtil.getPicgoConfig();
      logger2.debug("PicGO setting initData=>", config);
      if (config !== void 0) {
        const settings = config.settings || {};
        form.autoRename = settings.autoRename || true;
        form.nodePath = settings.nodePath || "";
        form.nodeRegistry = settings.registry || DEFAULT_NPM_REGISTRY;
        form.nodeProxy = settings.nodeProxy || "";
        picgoUtil.savePicgoConfig({
          "settings.autoRename": form.autoRename,
          "settings.registry": form.nodeRegistry
        });
      }
    }
    onBeforeMount(() => {
      picgoUtil.ipcRegisterEvent("getPicBeds", (evt, data) => {
        getPicBeds2();
      });
      getPicBeds2();
      initData();
    });
    onBeforeUnmount(() => {
      picgoUtil.ipcRemoveEvent("getPicBeds");
    });
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_el_form_item = ElFormItem;
      const _component_el_checkbox = ElCheckbox;
      const _component_el_checkbox_group = ElCheckboxGroup;
      const _component_el_switch = ElSwitch;
      const _component_el_input = ElInput;
      const _component_el_form = ElForm;
      return openBlock(), createElementBlock("div", null, [createVNode(_component_el_form, {
        "label-width": "125px"
      }, {
        default: withCtx(() => [createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.picgo.picgo.open.config.file")
        }, {
          default: withCtx(() => [createVNode(_component_el_button, {
            onClick: _cache[0] || (_cache[0] = ($event) => handleOpenFile("picgo.cfg.json"))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.picgo.picgo.click.to.open")), 1)]),
            _: 1
          })]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.picgo.setting.log.file")
        }, {
          default: withCtx(() => [createVNode(_component_el_button, {
            onClick: _cache[1] || (_cache[1] = ($event) => handleOpenFile("picgo.log"))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.picgo.picgo.click.to.open")), 1)]),
            _: 1
          })]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.picgo.picgo.choose.showed.picbed")
        }, {
          default: withCtx(() => [createVNode(_component_el_checkbox_group, {
            modelValue: form.showPicBedList,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => form.showPicBedList = $event),
            onChange: handleShowPicBedListChange
          }, {
            default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(picBed.value, (item) => {
              return openBlock(), createBlock(_component_el_checkbox, {
                key: item.name,
                label: item.name
              }, null, 8, ["label"]);
            }), 128))]),
            _: 1
          }, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.picgo.setting.timestamp.rename")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: form.autoRename,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => form.autoRename = $event),
            "active-text": _ctx.$t("setting.picgo.setting.open"),
            "inactive-text": _ctx.$t("setting.picgo.setting.close"),
            onChange: handleAutoRename
          }, null, 8, ["modelValue", "active-text", "inactive-text"])]),
          _: 1
        }, 8, ["label"]), unref(isInSiyuanNewWinBrowser)() ? (openBlock(), createElementBlock("div", _hoisted_1$b, [createVNode(unref(ElDivider)), createBaseVNode("p", null, toDisplayString(_ctx.$t("setting.picgo.setting.config.tip")), 1), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.picgo.setting.node.path")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: form.nodePath,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => form.nodePath = $event),
            placeholder: _ctx.$t("setting.picgo.setting.node.path.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.picgo.setting.node.registry")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: form.nodeRegistry,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => form.nodeRegistry = $event),
            placeholder: _ctx.$t("setting.picgo.setting.node.registry.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.picgo.setting.node.proxy")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: form.nodeProxy,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => form.nodeProxy = $event),
            placeholder: _ctx.$t("setting.picgo.setting.node.proxy.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            onClick: handleSaveNodeConfig
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.opt.ok")), 1)]),
            _: 1
          })]),
          _: 1
        })])) : createCommentVNode("", true)]),
        _: 1
      })]);
    };
  }
});
const getOS = () => {
  const syWin = siyuanBrowserUtil.getSiyuanWindow();
  return syWin.process.platform;
};
const sysUtil = {
  getOS
};
const _hoisted_1$a = {
  id: "plugin-view"
};
const _hoisted_2$6 = {
  class: "view-title"
};
const _hoisted_3$2 = {
  key: 0,
  class: "plugin-list-box"
};
const _hoisted_4$2 = {
  class: "plugin-search-box"
};
const _hoisted_5$2 = {
  class: "plugin-list-tip"
};
const _hoisted_6$2 = {
  key: 0,
  class: "cli-only-badge",
  title: "CLI only"
};
const _hoisted_7$2 = ["src", "onerror"];
const _hoisted_8$1 = ["onClick"];
const _hoisted_9$1 = ["title"];
const _hoisted_10$1 = {
  class: "plugin-item__info-bar"
};
const _hoisted_11$1 = {
  class: "plugin-item__author"
};
const _hoisted_12$1 = {
  class: "plugin-item__config"
};
const _hoisted_13$1 = {
  key: 0,
  class: "config-button work"
};
const _hoisted_14$1 = {
  key: 1,
  class: "config-button nowork"
};
const _hoisted_15$1 = ["onClick"];
const _hoisted_16 = {
  key: 1,
  class: "config-button ing"
};
const _hoisted_17 = {
  key: 2,
  class: "config-button ing"
};
const _hoisted_18 = {
  key: 3,
  class: "config-button ing"
};
const _hoisted_19 = {
  key: 0,
  class: "config-button ing"
};
const _hoisted_20 = {
  key: 1,
  class: "plugin-config-form"
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  __name: "PicgoPluginSetting",
  setup(__props) {
    const logger2 = LogFactory.getLogger("components/picgo/setting/PicgoPluginSetting.vue");
    const {
      t
    } = useI18n();
    const loading = ref(false);
    const searchText = ref("");
    const pluginData = reactive({
      pluginList: [],
      pluginNameList: []
    });
    const os = ref("");
    const defaultLogo = ref(`this.src="/widgets/sy-post-publisher/lib/picgo/picgo-logo.png"`);
    const npmSearchText = computed(() => {
      return searchText.value.match("picgo-plugin-") ? searchText.value : searchText.value !== "" ? `picgo-plugin-${searchText.value}` : searchText.value;
    });
    let getSearchResult;
    const showPluginConfigForm = ref(false);
    const pluginConfigData = reactive({
      currentType: "plugin",
      configName: "",
      config: {}
    });
    watch(npmSearchText, (val) => {
      if (val) {
        loading.value = true;
        pluginData.pluginList = [];
        getSearchResult(val);
      } else {
        getPluginList();
      }
    });
    function emitBackFn() {
      showPluginConfigForm.value = false;
    }
    function getPluginList() {
      picgoUtil.ipcHandleEvent("getPluginList");
    }
    const checkWork = (item) => {
      console.log("checkWork item=>", item);
      const WORKED_PLUGINS = ["watermark-elec", "s3", "minio"];
      return WORKED_PLUGINS.includes(item.name);
    };
    function openHomepage(url) {
      if (url) {
        goToPage(url);
      }
    }
    function goAwesomeList() {
      goToPage("https://github.com/PicGo/Awesome-PicGo");
    }
    function handleImportLocalPlugin() {
      picgoUtil.ipcHandleEvent("importLocalPlugin");
    }
    function installPlugin(item) {
      if (!item.gui) {
        ElMessageBox.confirm(t("setting.picgo.plugin.gui.not.implemented"), t("main.opt.tip"), {
          confirmButtonText: t("main.opt.ok"),
          cancelButtonText: t("main.opt.cancel"),
          type: "warning"
        }).then(() => {
          item.ing = true;
          picgoUtil.ipcHandleEvent("installPlugin", item.fullName);
        }).catch(() => {
          logger2.warn("Install canceled");
        });
      } else {
        item.ing = true;
        picgoUtil.ipcHandleEvent("installPlugin", item.fullName);
      }
    }
    async function buildContextMenu(plugin) {
      picgoUtil.buildPluginMenu(plugin, _getI18nMessage);
    }
    function _getI18nMessage(key) {
      const retArr = [];
      switch (key) {
        case PicgoPageMenuType.PicgoPageMenuType_Uninstall:
          retArr["setting.picgo.plugin.uninstall"] = t("setting.picgo.plugin.uninstall");
          break;
        case PicgoPageMenuType.PicgoPageMenuType_Enable:
          retArr["setting.picgo.plugin.enable"] = t("setting.picgo.plugin.enable");
          break;
        case PicgoPageMenuType.PicgoPageMenuType_Disable:
          retArr["setting.picgo.plugin.disable"] = t("setting.picgo.plugin.disable");
          break;
        case PicgoPageMenuType.PicgoPageMenuType_Update:
          retArr["setting.picgo.plugin.update"] = t("setting.picgo.plugin.update");
          break;
        case PicgoPageMenuType.PicgoPageMenuType_ConfigThing:
          break;
        case PicgoPageMenuType.PicgoPageMenuType_Transfer:
          retArr["setting.picgo.plugin.enable"] = t("setting.picgo.plugin.enable");
          retArr["setting.picgo.plugin.disable"] = t("setting.picgo.plugin.disable");
          break;
        case PicgoPageMenuType.PicgoPageMenuType_Plugin:
          retArr["setting.picgo.plugin.config.setting"] = t("setting.picgo.plugin.config.setting");
          break;
      }
      return retArr;
    }
    function _getSearchResult(val) {
      const fetchUrl = `https://registry.npmjs.com/-/v1/search?text=${val}`;
      logger2.info("npmjs\u8BF7\u6C42fetchUrl=>", fetchUrl);
      fetch(fetchUrl).then(async (response) => {
        var _a2;
        const json = await response.json();
        const list = (_a2 = json == null ? void 0 : json.objects) != null ? _a2 : [];
        logger2.info("npmjs\u8FD4\u56DE\u7684package\u5217\u8868list=>", list);
        pluginData.pluginList = list.filter((item) => {
          return item.package.name.includes("picgo-plugin-");
        }).map((item) => {
          return handleSearchResult(item);
        });
        loading.value = false;
      }).catch((err) => {
        console.log(err);
        loading.value = false;
      });
    }
    const handleStreamlinePluginName = (name) => {
      if (/^@[^/]+\/picgo-plugin-/.test(name)) {
        return name.replace(/^@[^/]+\/picgo-plugin-/, "");
      } else {
        return name.replace(/picgo-plugin-/, "");
      }
    };
    function handleSearchResult(item) {
      const name = handleStreamlinePluginName(item.package.name);
      let gui = false;
      if (item.package.keywords && item.package.keywords.length > 0) {
        if (item.package.keywords.includes("picgo-gui-plugin")) {
          gui = true;
        }
      }
      return {
        name,
        fullName: item.package.name,
        author: item.package.author.name,
        description: item.package.description,
        logo: `https://cdn.jsdelivr.net/npm/${item.package.name}/logo.png`,
        config: {},
        homepage: item.package.links ? item.package.links.homepage : "",
        hasInstall: pluginData.pluginNameList.some((plugin) => plugin === item.package.name),
        version: item.package.version,
        gui,
        ing: false
      };
    }
    function cleanSearch() {
      searchText.value = "";
    }
    onBeforeMount(() => {
      os.value = sysUtil.getOS();
      picgoUtil.ipcRegisterEvent("pluginList", (evt, data) => {
        logger2.info("PicgoPluginSetting\u63A5\u6536\u5230pluginList\u4E8B\u4EF6,data=>", data);
        const rawArgs = data.rawArgs;
        if (rawArgs.success) {
          const list = rawArgs.data;
          pluginData.pluginList = list;
          pluginData.pluginNameList = list.map((item) => item.fullName);
          logger2.info("\u63D2\u4EF6\u5217\u8868\u5DF2\u7ECF\u6210\u529F\u52A0\u8F7D.", list);
        } else {
          ElMessage.error(rawArgs.error);
        }
      });
      picgoUtil.ipcRegisterEvent("installPluginFinished", (evt, data) => {
        loading.value = false;
        logger2.info("PicgoPluginSetting\u63A5\u6536\u5230installPluginFinished\u4E8B\u4EF6,data=>", data);
        const body = data.rawArgs.body;
        const success = data.rawArgs.success;
        const errMsg = data.rawArgs.errMsg;
        pluginData.pluginList.forEach((item) => {
          if (item.fullName === body) {
            item.ing = false;
            item.hasInstall = success;
          }
        });
        if (success) {
          picgoUtil.ipcHandleEvent("getPicBeds");
          ElMessage.success(t("setting.picgo.plugin.install.success"));
        } else {
          ElMessage.error(errMsg);
        }
        reloadPage();
      });
      picgoUtil.ipcRegisterEvent("picgoHandlePluginIng", (evt, data) => {
        const fullName = data.rawArgs;
        pluginData.pluginList.forEach((item) => {
          if (item.fullName === fullName || item.name === fullName) {
            item.ing = true;
          }
        });
        loading.value = true;
      });
      picgoUtil.ipcRegisterEvent("uninstallSuccess", (evt, data) => {
        loading.value = false;
        logger2.info("PicgoPluginSetting\u63A5\u6536\u5230installPluginFinished\u4E8B\u4EF6,data=>", data);
        const fullName = data.rawArgs.body;
        const success = data.rawArgs.success;
        const errMsg = data.rawArgs.errMsg;
        if (success) {
          pluginData.pluginList = pluginData.pluginList.filter((item) => {
            if (item.fullName === fullName) {
              if (item.config.transformer.name) {
                picgoUtil.handleRestoreState("transformer", item.config.transformer.name);
              }
              if (item.config.uploader.name) {
                picgoUtil.handleRestoreState("uploader", item.config.uploader.name);
              }
              picgoUtil.ipcHandleEvent("getPicBeds");
            }
            return item.fullName !== fullName;
          });
          pluginData.pluginNameList = pluginData.pluginNameList.filter((item) => item !== fullName);
          ElMessage.success(t("setting.picgo.plugin.uninstall.success"));
        } else {
          ElMessage.error(errMsg);
        }
        loading.value = false;
      });
      picgoUtil.ipcRegisterEvent("updateSuccess", (evt, data) => {
        loading.value = false;
        logger2.info("PicgoPluginSetting\u63A5\u6536\u5230updateSuccess\u4E8B\u4EF6,data=>", data);
        const body = data.rawArgs.body;
        const success = data.rawArgs.success;
        const errMsg = data.rawArgs.errMsg;
        pluginData.pluginList.forEach((item) => {
          if (item.fullName === body) {
            item.ing = false;
          }
        });
        if (success) {
          ElMessage.success(t("setting.picgo.plugin.update.success"));
        } else {
          ElMessage.error(errMsg);
        }
        showPluginConfigForm.value = false;
        loading.value = false;
        reloadPage();
      });
      picgoUtil.ipcRegisterEvent("picgoConfigPlugin", (evt, data) => {
        loading.value = false;
        logger2.info("PicgoPluginSetting\u63A5\u6536\u5230picgoConfigPlugin\u4E8B\u4EF6,data=>", data);
        const _currentType = data.rawArgs.currentType;
        const _configName = data.rawArgs.configName;
        const _config = data.rawArgs.config;
        logger2.info("_currentType=>", _currentType);
        logger2.info("_configName=>", _configName);
        logger2.info("_config=>", _config);
        pluginConfigData.currentType = _currentType;
        pluginConfigData.configName = _configName;
        pluginConfigData.config = _config;
        showPluginConfigForm.value = true;
      });
      getPluginList();
      getSearchResult = lodash.exports.debounce(_getSearchResult, 50);
    });
    onBeforeUnmount(() => {
      picgoUtil.ipcRemoveEvent("pluginList");
      picgoUtil.ipcRemoveEvent("installPluginFinished");
      picgoUtil.ipcRemoveEvent("picgoHandlePluginIng");
      picgoUtil.ipcRemoveEvent("uninstallSuccess");
      picgoUtil.ipcRemoveEvent("updateSuccess");
      picgoUtil.ipcRemoveEvent("picgoConfigPlugin");
    });
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_el_button = ElButton;
      const _component_el_tooltip = ElTooltip;
      const _component_el_icon = ElIcon;
      const _component_el_input = ElInput;
      const _component_el_row = ElRow;
      const _component_el_col = ElCol;
      const _directive_loading = vLoading;
      return openBlock(), createElementBlock("div", _hoisted_1$a, [createBaseVNode("div", _hoisted_2$6, [createTextVNode(toDisplayString(_ctx.$t("setting.picgo.plugin")) + " - ", 1), createVNode(_component_el_tooltip, {
        content: _ctx.$t("setting.picgo.plugin.list"),
        placement: "right"
      }, {
        default: withCtx(() => [createVNode(_component_el_button, {
          class: "el-icon-goods",
          onClick: goAwesomeList
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-cart-shopping"
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["content"]), createVNode(_component_el_tooltip, {
        content: _ctx.$t("setting.picgo.plugin.import.local"),
        placement: "left"
      }, {
        default: withCtx(() => [createVNode(_component_el_button, {
          class: "el-icon-download",
          onClick: handleImportLocalPlugin
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-download"
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["content"])]), !showPluginConfigForm.value ? (openBlock(), createElementBlock("div", _hoisted_3$2, [createBaseVNode("div", _hoisted_4$2, [createVNode(_component_el_row, {
        class: normalizeClass(["handle-bar", {
          "cut-width": pluginData.pluginList.length > 6
        }])
      }, {
        default: withCtx(() => [createVNode(_component_el_input, {
          modelValue: searchText.value,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchText.value = $event),
          placeholder: _ctx.$t("setting.picgo.plugin.search.placeholder")
        }, {
          suffix: withCtx(() => [createVNode(_component_el_icon, {
            class: "el-input__icon",
            style: {
              "cursor": "pointer"
            },
            onClick: cleanSearch
          }, {
            default: withCtx(() => [createVNode(_component_font_awesome_icon, {
              icon: "fa-solid fa-xmark"
            })]),
            _: 1
          })]),
          _: 1
        }, 8, ["modelValue", "placeholder"])]),
        _: 1
      }, 8, ["class"])]), createBaseVNode("div", _hoisted_5$2, toDisplayString("\u5F53\u524D\u5171\u6709" + pluginData.pluginList.length + "\u4E2A\u63D2\u4EF6\u3002"), 1), createBaseVNode("div", null, [withDirectives((openBlock(), createBlock(_component_el_row, {
        gutter: 10,
        class: "plugin-list"
      }, {
        default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(pluginData.pluginList, (item) => {
          return openBlock(), createBlock(_component_el_col, {
            key: item.fullName,
            class: "plugin-item__container",
            span: 12
          }, {
            default: withCtx(() => [createBaseVNode("div", {
              class: normalizeClass(["plugin-item", {
                darwin: os.value === "darwin"
              }])
            }, [!item.gui ? (openBlock(), createElementBlock("div", _hoisted_6$2, " CLI ")) : createCommentVNode("", true), createBaseVNode("img", {
              class: "plugin-item__logo",
              src: item.logo,
              onerror: defaultLogo.value,
              alt: "img"
            }, null, 8, _hoisted_7$2), createBaseVNode("div", {
              class: normalizeClass(["plugin-item__content", {
                disabled: !item.enabled
              }])
            }, [createBaseVNode("div", {
              class: "plugin-item__name",
              onClick: ($event) => openHomepage(item.homepage)
            }, [createTextVNode(toDisplayString(item.name) + " ", 1), createBaseVNode("small", null, toDisplayString(" " + item.version), 1)], 8, _hoisted_8$1), createBaseVNode("div", {
              class: "plugin-item__desc",
              title: item.description
            }, toDisplayString(item.description), 9, _hoisted_9$1), createBaseVNode("div", _hoisted_10$1, [createBaseVNode("span", _hoisted_11$1, toDisplayString(item.author), 1), createBaseVNode("span", _hoisted_12$1, [searchText.value ? (openBlock(), createElementBlock(Fragment, {
              key: 0
            }, [checkWork(item) ? (openBlock(), createElementBlock("span", _hoisted_13$1, toDisplayString(_ctx.$t("setting.picgo.plugin.work")), 1)) : (openBlock(), createElementBlock("span", _hoisted_14$1, toDisplayString(_ctx.$t("setting.picgo.plugin.nowork")), 1)), !item.hasInstall ? (openBlock(), createElementBlock(Fragment, {
              key: 2
            }, [!item.ing && checkWork(item) ? (openBlock(), createElementBlock("span", {
              key: 0,
              class: "config-button install",
              onClick: ($event) => installPlugin(item)
            }, toDisplayString(_ctx.$t("setting.picgo.plugin.install")), 9, _hoisted_15$1)) : !item.ing && !checkWork(item) ? (openBlock(), createElementBlock("span", _hoisted_16, toDisplayString(_ctx.$t("setting.picgo.plugin.nouse")), 1)) : item.ing ? (openBlock(), createElementBlock("span", _hoisted_17, toDisplayString(_ctx.$t("setting.picgo.plugin.installing")), 1)) : createCommentVNode("", true)], 64)) : (openBlock(), createElementBlock("span", _hoisted_18, toDisplayString(_ctx.$t("setting.picgo.plugin.installed")), 1))], 64)) : (openBlock(), createElementBlock(Fragment, {
              key: 1
            }, [item.ing ? (openBlock(), createElementBlock("span", _hoisted_19, toDisplayString(_ctx.$t("setting.picgo.plugin.doing.something")), 1)) : (openBlock(), createElementBlock(Fragment, {
              key: 1
            }, [item.enabled ? (openBlock(), createBlock(_component_el_icon, {
              key: 0,
              class: "el-icon-setting",
              onClick: ($event) => buildContextMenu(item)
            }, {
              default: withCtx(() => [createVNode(_component_font_awesome_icon, {
                icon: "fa-solid fa-gear"
              })]),
              _: 2
            }, 1032, ["onClick"])) : (openBlock(), createBlock(_component_el_icon, {
              key: 1,
              class: "el-icon-remove-outline",
              onClick: ($event) => buildContextMenu(item)
            }, {
              default: withCtx(() => [createVNode(_component_font_awesome_icon, {
                icon: "fa-solid fa-bell-slash"
              })]),
              _: 2
            }, 1032, ["onClick"]))], 64))], 64))])])], 2)], 2)]),
            _: 2
          }, 1024);
        }), 128))]),
        _: 1
      })), [[_directive_loading, loading.value]])])])) : (openBlock(), createElementBlock("div", _hoisted_20, [createVNode(ConfigForm, {
        "config-type": pluginConfigData.currentType,
        id: pluginConfigData.currentType,
        "config-id": pluginConfigData.configName,
        config: pluginConfigData.config,
        "is-new-form": false,
        onOnChange: emitBackFn
      }, null, 8, ["config-type", "id", "config-id", "config"])]))]);
    };
  }
});
const PicgoPluginSetting_vue_vue_type_style_index_0_lang = "";
const _withScopeId$1 = (n2) => (pushScopeId("data-v-7f8cee7e"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$9 = {
  key: 0,
  style: {
    "padding-right": "20px"
  }
};
const _hoisted_2$5 = {
  class: "picgo-setting-tip"
};
const _hoisted_3$1 = {
  style: {
    "display": "inline-block"
  }
};
const _hoisted_4$1 = {
  target: "_blank",
  href: "https://docs.publish.terwer.space/post/picgo-diagram-bed-use-zxqqec.html"
};
const _hoisted_5$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "https://picgo.github.io/PicGo-Core-Doc/zh/guide/config.html#%E6%89%8B%E5%8A%A8%E7%94%9F%E6%88%90"
}, "PicGO \u5B98\u65B9\u6587\u6863", -1));
const _hoisted_6$1 = {
  class: "version-tip"
};
const _hoisted_7$1 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "https://github.com/terwer/Electron-PicGo-Core",
  target: "_blank"
}, "electron-picgo", -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "https://github.com/terwer",
  target: "_blank"
}, "terwer", -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("a", {
  href: "https://github.com/PicGo/PicGo-Core",
  target: "_blank"
}, "PicGo-Core", -1));
const _hoisted_10 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", null, " \u7279\u522B\u63D0\u793A\uFF1Apicgo\u63D2\u4EF6\u672A\u7ECF\u8FC7\u5168\u91CF\u6D4B\u8BD5\uFF0C\u4E0D\u4FDD\u8BC1\u6240\u6709\u63D2\u4EF6\u90FD\u80FD\u8FD0\u884C\uFF0C\u76EE\u524D\u5DF2\u7ECF\u6D4B\u8BD5\u53EF\u7528\u7684\u63D2\u4EF6\u5982\u4E0B\uFF1A ", -1));
const _hoisted_11 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", null, [/* @__PURE__ */ createBaseVNode("a", {
  href: "https://github.com/terwer/picgo-plugin-watermark-elec"
}, "picgo-plugin-watermark-elec"), /* @__PURE__ */ createTextVNode(" \u641C\u7D22\u5173\u952E\u8BCD\uFF1Awatermark-elec ")], -1));
const _hoisted_12 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", null, [/* @__PURE__ */ createBaseVNode("a", {
  href: "https://github.com/wayjam/picgo-plugin-s3"
}, "picgo-plugin-s3"), /* @__PURE__ */ createTextVNode(" \u641C\u7D22\u5173\u952E\u8BCD\uFF1As3 ")], -1));
const _hoisted_13 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createBaseVNode("p", null, [/* @__PURE__ */ createBaseVNode("a", {
  href: "https://github.com/Herbertzz/picgo-plugin-minio"
}, "picgo-plugin-minio"), /* @__PURE__ */ createTextVNode(" \u641C\u7D22\u5173\u952E\u8BCD\uFF1Aminio ")], -1));
const _hoisted_14 = {
  key: 1
};
const _hoisted_15 = {
  class: "picgo-browser-tip"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  __name: "PicgoSetting",
  setup(__props) {
    const isReload = ref(false);
    const picgoVersion = ref("");
    const picgoSettingTabChange = () => {
      isReload.value = !isReload.value;
    };
    onBeforeMount(() => {
      picgoVersion.value = picgoUtil.getPicgoVersion();
    });
    return (_ctx, _cache) => {
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      return unref(isElectron) ? (openBlock(), createElementBlock("div", _hoisted_1$9, [createVNode(_component_el_tabs, {
        type: "border-card",
        onTabClick: picgoSettingTabChange
      }, {
        default: withCtx(() => [createVNode(_component_el_tab_pane, {
          label: _ctx.$t("setting.picgo.picbed")
        }, {
          default: withCtx(() => [createVNode(PicbedSetting, {
            "is-reload": isReload.value
          }, null, 8, ["is-reload"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          label: _ctx.$t("setting.picgo.picgo")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$e)]),
          _: 1
        }, 8, ["label"]), unref(isInSiyuanNewWinBrowser)() ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 0,
          label: _ctx.$t("setting.picgo.plugin")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$d)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true)]),
        _: 1
      }), createBaseVNode("blockquote", _hoisted_2$5, [createBaseVNode("div", null, [createTextVNode(toDisplayString(_ctx.$t("picgo.siyuan.tip")) + " \u3002 \u5F53\u524D\u7CFB\u7EDF\u9ED8\u8BA4\u7684 PicGO \u914D\u7F6E\u6587\u4EF6\u4E3A\uFF1A ", 1), createBaseVNode("pre", _hoisted_3$1, [createBaseVNode("code", null, toDisplayString(unref(picgoUtil).getPicgoCfgPath()), 1)]), createTextVNode(" \u3002 \u591A\u4E2A\u56FE\u5E8A\u4E2D\uFF0C\u53EA\u80FD\u6709\u4E00\u4E2A\u56FE\u5E8A\u8BBE\u7F6E\u4E3A\u9ED8\u8BA4\u3002\u9ED8\u8BA4\u56FE\u5E8A\u4F1A\u5728\u4E0A\u4F20\u7684\u65F6\u5019\u81EA\u52A8\u751F\u6548\u3002\u4ECE 0.7.0+ \u5F00\u59CB\uFF0C\u5355\u4E2A\u56FE\u5E8A\u652F\u6301\u591A\u4EFD\u914D\u7F6E\u5207\u6362\uFF0C\u6BCF\u4E2A\u56FE\u5E8A\u53EA\u80FD\u6709\u4E00\u4E2A\u9009\u4E2D\u7684\u914D\u7F6E\u751F\u6548\u3002 " + toDisplayString(_ctx.$t("setting.picgo.refer.to")) + " ", 1), createBaseVNode("a", _hoisted_4$1, toDisplayString(_ctx.$t("setting.picgo.refer.to.online.doc")), 1), createTextVNode(" \u6216\u8005 "), _hoisted_5$1, createTextVNode(" \u3002 ")])]), createBaseVNode("div", _hoisted_6$1, [createTextVNode(" \u5F53\u524DPicGo\u7248\u672C\u4E3A "), _hoisted_7$1, createTextVNode(" v" + toDisplayString(picgoVersion.value) + " \uFF0C \u5BF9 Electron \u73AF\u5883\u8FDB\u884C\u4E86\u66F4\u597D\u7684\u9002\u914D \uFF0C\u7531 ", 1), _hoisted_8, createTextVNode(" \u8D1F\u8D23\u7EF4\u62A4 \u3002\u611F\u8C22\u539F\u59CB "), _hoisted_9, createTextVNode(" \u9879\u76EE\u3002 "), _hoisted_10, _hoisted_11, _hoisted_12, _hoisted_13])])) : (openBlock(), createElementBlock("div", _hoisted_14, [createBaseVNode("div", _hoisted_15, [createBaseVNode("p", null, toDisplayString(_ctx.$t("picgo.chrome.tip")) + " \u3002", 1), createBaseVNode("p", null, toDisplayString(_ctx.$t("picgo.pic.setting.no.tip")) + " \u3002", 1)])]));
    };
  }
});
const PicgoSetting_vue_vue_type_style_index_0_scoped_7f8cee7e_lang = "";
const PicgoSetting = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-7f8cee7e"]]);
const _hoisted_1$8 = {
  class: "locale-changer"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "ChangeLocal",
  setup(__props) {
    const {
      locale
    } = useI18n();
    const langs = [{
      value: "zh_CN",
      label: "\u7B80\u4F53\u4E2D\u6587"
    }, {
      value: "en_US",
      label: "English"
    }];
    const langChanged = (lang) => {
      localStorage.Lang = lang;
      locale.value = lang;
    };
    onMounted(() => {
      if (localStorage.Lang != null)
        locale.value = localStorage.Lang;
    });
    return (_ctx, _cache) => {
      const _component_el_option = ElOption;
      const _component_el_select = ElSelect;
      const _component_el_form_item = ElFormItem;
      const _component_el_form = ElForm;
      return openBlock(), createElementBlock("div", _hoisted_1$8, [createVNode(_component_el_form, {
        "label-width": "150px"
      }, {
        default: withCtx(() => [createVNode(_component_el_form_item, {
          label: _ctx.$t("lang.choose")
        }, {
          default: withCtx(() => [createVNode(_component_el_select, {
            modelValue: _ctx.$i18n.locale,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.$i18n.locale = $event),
            placeholder: _ctx.$t("lang.choose.placeholder"),
            onChange: langChanged
          }, {
            default: withCtx(() => [(openBlock(), createElementBlock(Fragment, null, renderList(langs, (lang, i) => {
              return createVNode(_component_el_option, {
                key: i,
                label: lang.label,
                value: lang.value
              }, null, 8, ["label", "value"]);
            }), 64))]),
            _: 1
          }, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"])]),
        _: 1
      })]);
    };
  }
});
const _hoisted_1$7 = {
  class: "preference-setting"
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "PreferenceSetting",
  props: {
    isReload: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    const logger2 = LogFactory.getLogger("components/publish/tab/preference/PreferenceSetting.vue");
    const {
      t
    } = useI18n();
    const formData = reactive({
      fixTitle: false,
      removeH1: false,
      newWin: true,
      autoTag: false,
      showCloseBtn: false,
      usePicgo: false,
      mainBg: ""
    });
    const formMethods = {
      onTitleChange: (val) => {
        logger2.debug("onTitleChange=>", val);
        formData.fixTitle = val;
        saveConf();
      },
      onH1Change: (val) => {
        logger2.debug("onH1Change=>", val);
        const isTrue = parseBoolean(val);
        if (isTrue === true) {
          ElMessageBox.confirm(t("preference.setting.removeH1.tip"), t("main.opt.warning"), {
            confirmButtonText: t("main.opt.ok"),
            cancelButtonText: t("main.opt.cancel"),
            type: "warning"
          }).then(async () => {
            formData.removeH1 = val;
            saveConf();
          }).catch(() => {
            formData.removeH1 = !isTrue;
          });
        }
      },
      onNewWinChange: (val) => {
        logger2.debug("onNewWinChange=>", val);
        formData.newWin = val;
        saveConf();
      },
      onAutoTagChange: (val) => {
        logger2.debug("onAutoTagChange=>", val);
        formData.autoTag = val;
        saveConf();
      },
      onShowCloseBtnChange: (val) => {
        logger2.debug("onShowCloseBtnChange=>", val);
        formData.showCloseBtn = val;
        saveConf();
      },
      onUsePicgoBtnChange: (val) => {
        logger2.debug("onUsePicgoBtnChange=>", val);
        formData.usePicgo = val;
        saveConf();
      },
      handleSavePreference: () => {
        saveConf();
      }
    };
    const saveConf = () => {
      const publishCfg = getPublishCfg();
      publishCfg.fixTitle = parseBoolean(formData.fixTitle);
      publishCfg.removeH1 = parseBoolean(formData.removeH1);
      publishCfg.newWin = parseBoolean(formData.newWin);
      publishCfg.autoTag = parseBoolean(formData.autoTag);
      publishCfg.showCloseBtn = parseBoolean(formData.showCloseBtn);
      publishCfg.usePicgo = parseBoolean(formData.usePicgo);
      publishCfg.mainBg = formData.mainBg;
      setJSONConf(CONSTANTS.PUBLISH_PREFERENCE_CONFIG_KEY, publishCfg);
      logger2.debug("\u504F\u597D\u8BBE\u7F6E\u5DF2\u4FDD\u5B58");
      reloadPage();
    };
    const initConf = () => {
      const publishCfg = getPublishCfg();
      formData.fixTitle = parseBoolean(publishCfg.fixTitle);
      formData.removeH1 = parseBoolean(publishCfg.removeH1);
      formData.newWin = parseBoolean(publishCfg.newWin);
      formData.autoTag = parseBoolean(publishCfg.autoTag);
      formData.showCloseBtn = parseBoolean(publishCfg.showCloseBtn);
      formData.usePicgo = parseBoolean(publishCfg.usePicgo);
      formData.mainBg = publishCfg.mainBg;
    };
    onMounted(() => {
      initConf();
    });
    watch(() => props.isReload, async () => {
      initConf();
      logger2.debug("preference-setting\u5237\u65B0");
    });
    return (_ctx, _cache) => {
      const _component_el_switch = ElSwitch;
      const _component_el_form_item = ElFormItem;
      const _component_el_form = ElForm;
      ElDivider;
      ElColorPicker;
      ElAlert;
      ElButton;
      return openBlock(), createElementBlock("div", _hoisted_1$7, [createVNode(_component_el_form, {
        "label-width": "150px",
        inline: ""
      }, {
        default: withCtx(() => [createVNode(_component_el_form_item, {
          label: _ctx.$t("preference.setting.fixTitle")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: formData.fixTitle,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.fixTitle = $event),
            onChange: formMethods.onTitleChange
          }, null, 8, ["modelValue", "onChange"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("preference.setting.removeH1")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: formData.removeH1,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.removeH1 = $event),
            onChange: formMethods.onH1Change
          }, null, 8, ["modelValue", "onChange"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("preference.setting.newWin")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: formData.newWin,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.newWin = $event),
            onChange: formMethods.onNewWinChange
          }, null, 8, ["modelValue", "onChange"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("main.auto.fetch.tag")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: formData.autoTag,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.autoTag = $event),
            onChange: formMethods.onAutoTagChange
          }, null, 8, ["modelValue", "onChange"])]),
          _: 1
        }, 8, ["label"]), false ? (openBlock(), _createBlock(_component_el_form_item, {
          key: 0,
          label: _ctx.$t("siyuan.browser.show.close.btn")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: formData.showCloseBtn,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.showCloseBtn = $event),
            onChange: formMethods.onShowCloseBtnChange
          }, null, 8, ["modelValue", "onChange"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
          label: _ctx.$t("github.post.picgo.use")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: formData.usePicgo,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.usePicgo = $event),
            onChange: formMethods.onUsePicgoBtnChange
          }, null, 8, ["modelValue", "onChange"])]),
          _: 1
        }, 8, ["label"])]),
        _: 1
      }), createCommentVNode("", true)]);
    };
  }
});
const _hoisted_1$6 = {
  class: "general-setting"
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "GeneralSetting",
  props: {
    isReload: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1$6, [createVNode(_sfc_main$b), createVNode(_sfc_main$a, {
        "is-reload": props.isReload
      }, null, 8, ["is-reload"])]);
    };
  }
});
const _hoisted_1$5 = {
  class: "dialog-action"
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "siyuanApiSetting",
  props: {
    showCancel: Boolean
  },
  emits: ["on-change"],
  setup(__props, {
    emit: emits
  }) {
    const props = __props;
    const logger2 = LogFactory.getLogger("components/set/siyuanApiSetting.vue");
    const {
      t
    } = useI18n();
    const formLabelWidth = "140px";
    const siyuanApiSettingFormRef = ref();
    const siyuanApiChangeForm = reactive({
      apiUrl: "http://127.0.0.1:6806",
      pwd: "",
      middlewareUrl: ""
    });
    const siyuanApiChangeRules = reactive({
      apiUrl: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      pwd: [{
        required: false,
        message: () => t("form.validate.name.required")
      }]
    });
    const handleCancel = async () => {
      onBack();
    };
    const handleOk = async (formEl) => {
      if (!formEl)
        return;
      const result = await formEl.validate((valid, fields) => {
        if (valid) {
          logger2.debug("\u6821\u9A8C\u6210\u529F");
        } else {
          logger2.error(t("main.opt.failure"), fields);
          ElMessage.error(t("main.opt.failure"));
        }
      });
      if (!result) {
        return;
      }
      try {
        const siyuanCfg = new SiYuanConfig(siyuanApiChangeForm.apiUrl, siyuanApiChangeForm.pwd, siyuanApiChangeForm.middlewareUrl);
        setJSONConf(SIYUAN_CONSTANTS.SIYUAN_CFG_KEY, siyuanCfg);
        logger2.debug("\u4FDD\u5B58\u601D\u6E90\u914D\u7F6E", siyuanCfg);
        ElMessage.success(t("main.opt.success"));
        onBack();
        reloadPage();
      } catch (e) {
        onBack();
        ElMessage.error(t("main.opt.failure"));
        logger2.error(t("main.opt.failure"), e);
      }
    };
    const onBack = () => {
      emits("on-change");
    };
    const initPage = () => {
      const siyuanCfg = getSiyuanCfg();
      siyuanApiChangeForm.apiUrl = siyuanCfg.baseUrl;
      siyuanApiChangeForm.pwd = siyuanCfg.token;
      siyuanApiChangeForm.middlewareUrl = siyuanCfg.middlewareUrl;
      logger2.debug("\u521D\u59CB\u5316\u601D\u6E90\u914D\u7F6E", siyuanCfg);
    };
    onBeforeMount(() => {
      initPage();
    });
    return (_ctx, _cache) => {
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_alert = ElAlert;
      const _component_el_button = ElButton;
      const _component_el_form = ElForm;
      return openBlock(), createElementBlock("div", null, [createVNode(_component_el_form, {
        ref_key: "siyuanApiSettingFormRef",
        ref: siyuanApiSettingFormRef,
        model: siyuanApiChangeForm,
        rules: siyuanApiChangeRules
      }, {
        default: withCtx(() => [createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.apiurl"),
          "label-width": formLabelWidth,
          prop: "apiUrl"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: siyuanApiChangeForm.apiUrl,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => siyuanApiChangeForm.apiUrl = $event),
            autocomplete: "off",
            placeholder: _ctx.$t("setting.blog.siyuan.apiurl")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.password"),
          "label-width": formLabelWidth,
          prop: "pwd"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: siyuanApiChangeForm.pwd,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => siyuanApiChangeForm.pwd = $event),
            type: "password",
            autocomplete: "off",
            placeholder: _ctx.$t("setting.blog.siyuan.password"),
            "show-password": ""
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.middlewareUrl"),
          "label-width": formLabelWidth,
          prop: "middlewareUrl"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: siyuanApiChangeForm.middlewareUrl,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => siyuanApiChangeForm.middlewareUrl = $event),
            autocomplete: "off",
            placeholder: _ctx.$t("setting.blog.middlewareUrl.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_alert, {
            class: "top-data-tip middleware-tip",
            title: _ctx.$t("setting.blog.middlewareUrl.my.tip"),
            type: "success",
            closable: false
          }, null, 8, ["title"])]),
          _: 1
        }), createBaseVNode("div", _hoisted_1$5, [createVNode(_component_el_form_item, null, {
          default: withCtx(() => [props.showCancel ? (openBlock(), createBlock(_component_el_button, {
            key: 0,
            onClick: handleCancel
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.opt.cancel")), 1)]),
            _: 1
          })) : createCommentVNode("", true), createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[3] || (_cache[3] = ($event) => handleOk(siyuanApiSettingFormRef.value))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.opt.ok")), 1)]),
            _: 1
          })]),
          _: 1
        })])]),
        _: 1
      }, 8, ["model", "rules"])]);
    };
  }
});
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "SetIndex",
  setup(__props) {
    return (_ctx, _cache) => {
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      return openBlock(), createBlock(_component_el_tabs, {
        "tab-position": "left"
      }, {
        default: withCtx(() => [createVNode(_component_el_tab_pane, {
          label: _ctx.$t("service.tab.change.local")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$9)]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          label: _ctx.$t("blog.change.siyuan.api")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$8, {
            "show-cancel": false
          })]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          label: _ctx.$t("dynamic.platform.new")
        }, {
          default: withCtx(() => [createVNode(DynamicPlatform)]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          label: _ctx.$t("service.tab.service.switch")
        }, {
          default: withCtx(() => [createVNode(ServiceSwitch)]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          label: _ctx.$t("service.tab.publish.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$j)]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          label: _ctx.$t("picgo.pic.setting")
        }, {
          default: withCtx(() => [createVNode(PicgoSetting)]),
          _: 1
        }, 8, ["label"])]),
        _: 1
      });
    };
  }
});
const _hoisted_1$4 = {
  class: "card-header"
};
const _hoisted_2$4 = {
  class: "card-header"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "ImportData",
  setup(__props) {
    const handleImportSyp = async () => {
      await importConf();
    };
    const handleImportPicgo = async () => {
      await picgoUtil.importPicgoCfg();
    };
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_el_alert = ElAlert;
      const _component_el_card = ElCard;
      return openBlock(), createElementBlock("div", null, [createVNode(_component_el_card, {
        class: "box-card"
      }, {
        header: withCtx(() => [createBaseVNode("div", _hoisted_1$4, [createVNode(_component_el_button, {
          type: "primary",
          onClick: handleImportSyp
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.conf.import.syp")), 1)]),
          _: 1
        })])]),
        default: withCtx(() => [createVNode(_component_el_alert, {
          title: _ctx.$t("setting.conf.import.syp.tip"),
          type: "info",
          closable: false
        }, null, 8, ["title"])]),
        _: 1
      }), unref(isElectron) ? (openBlock(), createBlock(_component_el_card, {
        key: 0,
        class: "box-card"
      }, {
        header: withCtx(() => [createBaseVNode("div", _hoisted_2$4, [createVNode(_component_el_button, {
          type: "danger",
          onClick: handleImportPicgo
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.conf.import.picgo")), 1)]),
          _: 1
        })])]),
        default: withCtx(() => [createVNode(_component_el_alert, {
          title: _ctx.$t("setting.conf.import.picgo.tip"),
          type: "info",
          closable: false
        }, null, 8, ["title"])]),
        _: 1
      })) : createCommentVNode("", true)]);
    };
  }
});
const ImportData_vue_vue_type_style_index_0_scoped_c8b429f6_lang = "";
const ImportData = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-c8b429f6"]]);
const version = "0.7.1";
const _hoisted_1$3 = {
  class: "card-header"
};
const _hoisted_2$3 = {
  class: "card-header"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "ExportData",
  setup(__props) {
    const handleExportSyp = () => {
      const confName = `sy-p-cfg-v${version}.json`;
      exportConf(confName);
    };
    const handleExportPicgo = () => {
      picgoUtil.backupPicgoCfg();
    };
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_el_alert = ElAlert;
      const _component_el_card = ElCard;
      return openBlock(), createElementBlock("div", null, [createVNode(_component_el_card, {
        class: "box-card"
      }, {
        header: withCtx(() => [createBaseVNode("div", _hoisted_1$3, [createVNode(_component_el_button, {
          type: "primary",
          onClick: handleExportSyp
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.conf.export.syp")), 1)]),
          _: 1
        })])]),
        default: withCtx(() => [createVNode(_component_el_alert, {
          title: _ctx.$t("setting.conf.export.syp.tip"),
          type: "success",
          closable: false
        }, null, 8, ["title"])]),
        _: 1
      }), unref(isElectron) ? (openBlock(), createBlock(_component_el_card, {
        key: 0,
        class: "box-card"
      }, {
        header: withCtx(() => [createBaseVNode("div", _hoisted_2$3, [createVNode(_component_el_button, {
          type: "danger",
          onClick: handleExportPicgo
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.conf.export.picgo")), 1)]),
          _: 1
        })])]),
        default: withCtx(() => [createVNode(_component_el_alert, {
          title: _ctx.$t("setting.conf.export.syp.tip"),
          type: "success",
          closable: false
        }, null, 8, ["title"])]),
        _: 1
      })) : createCommentVNode("", true)]);
    };
  }
});
const ExportData_vue_vue_type_style_index_0_scoped_a0f5d4af_lang = "";
const ExportData = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-a0f5d4af"]]);
const _hoisted_1$2 = {
  class: "card-header"
};
const _hoisted_2$2 = {
  class: "card-header"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ClearData",
  setup(__props) {
    const {
      t
    } = useI18n();
    const handleClearSyp = () => {
      ElMessageBox.confirm(t("main.opt.warning.tip"), t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        clearConf();
        browserUtil.reloadPageWithMessage(t("main.opt.success"));
      }).catch(() => {
      });
    };
    const handleClearPicgo = () => {
      ElMessageBox.confirm(t("main.opt.warning.tip"), t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        picgoUtil.clearPicgoCfg();
        browserUtil.reloadPageWithMessage(t("main.opt.success"));
      }).catch(() => {
      });
    };
    return (_ctx, _cache) => {
      const _component_el_button = ElButton;
      const _component_el_alert = ElAlert;
      const _component_el_card = ElCard;
      return openBlock(), createElementBlock("div", null, [createVNode(_component_el_card, {
        class: "box-card"
      }, {
        header: withCtx(() => [createBaseVNode("div", _hoisted_1$2, [createVNode(_component_el_button, {
          type: "primary",
          onClick: handleClearSyp
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.conf.clear.syp")), 1)]),
          _: 1
        })])]),
        default: withCtx(() => [createVNode(_component_el_alert, {
          title: _ctx.$t("setting.conf.clear.tip"),
          type: "error",
          closable: false
        }, null, 8, ["title"])]),
        _: 1
      }), unref(isElectron) ? (openBlock(), createBlock(_component_el_card, {
        key: 0,
        class: "box-card"
      }, {
        header: withCtx(() => [createBaseVNode("div", _hoisted_2$2, [createVNode(_component_el_button, {
          type: "danger",
          onClick: handleClearPicgo
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.conf.clear.picgo")), 1)]),
          _: 1
        })])]),
        default: withCtx(() => [createVNode(_component_el_alert, {
          title: _ctx.$t("setting.conf.clear.picgo.tip"),
          type: "error",
          closable: false
        }, null, 8, ["title"])]),
        _: 1
      })) : createCommentVNode("", true)]);
    };
  }
});
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "TransportSelect",
  setup(__props) {
    const activeName = ref("export");
    return (_ctx, _cache) => {
      const _component_el_tab_pane = ElTabPane;
      const _component_el_tabs = ElTabs;
      return openBlock(), createElementBlock("div", null, [createVNode(_component_el_tabs, {
        modelValue: activeName.value,
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => activeName.value = $event),
        class: "transport-tabs"
      }, {
        default: withCtx(() => [createVNode(_component_el_tab_pane, {
          label: _ctx.$t("setting.conf.export"),
          name: "export"
        }, {
          default: withCtx(() => [createVNode(ExportData)]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          label: _ctx.$t("setting.conf.import"),
          name: "import"
        }, {
          default: withCtx(() => [createVNode(ImportData)]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          label: _ctx.$t("setting.conf.clear"),
          name: "clear"
        }, {
          default: withCtx(() => [createVNode(_sfc_main$4)]),
          _: 1
        }, 8, ["label"])]),
        _: 1
      }, 8, ["modelValue"])]);
    };
  }
});
const _withScopeId = (n2) => (pushScopeId("data-v-6fb14376"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$1 = {
  class: "footer"
};
const _hoisted_2$1 = {
  class: "text"
};
const _hoisted_3 = {
  class: "text"
};
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, ".", -1));
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, ".", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, ".", -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, ".", -1));
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DefaultFooter",
  setup(__props) {
    const logger2 = LogFactory.getLogger("layouts/default/DefaultFooter");
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    const transportFormVisible = ref(false);
    const generalSettingFormVisible = ref(false);
    const isChrome = ref(false);
    const v = ref(version);
    const goGithub = () => {
      window.open("https://github.com/terwer/src-sy-post-publisher");
    };
    const goAbout = () => {
      window.open("https://www.terwer.space/about");
    };
    const newWin = () => {
      goToPage("/blog/index.html");
    };
    const openTransportSetting = () => {
      transportFormVisible.value = true;
    };
    const openGeneralSetting = () => {
      generalSettingFormVisible.value = true;
    };
    const initConf = () => {
      const deviceType = DeviceUtil.getDevice();
      if (deviceType === DeviceType.DeviceType_Chrome_Extension || deviceType === DeviceType.DeviceType_Chrome_Browser) {
        isChrome.value = true;
      }
    };
    onMounted(() => {
      if (isInSiyuanWidget()) {
        logger2.info("\u606D\u559C\u4F60\uFF0C\u6B63\u5728\u4EE5\u6302\u4EF6\u6A21\u5F0F\u8FD0\u884C");
      } else {
        logger2.info("\u6B63\u5728\u4EE5\u975E\u6302\u4EF6\u6A21\u5F0F\u8FD0\u884C\uFF0C\u90E8\u5206\u529F\u80FD\u5C06\u901A\u8FC7\u8BF7\u6C42\u4EE3\u7406\u7684\u65B9\u5F0F\u8FDB\u884C\u6A21\u62DF\uFF0C\u8BF7\u77E5\u6089");
      }
      initConf();
      if (isBrowser()) {
        if (document.body.clientWidth > 660) {
          document.getElementById("app").style.minHeight = "100%";
        }
      }
    });
    return (_ctx, _cache) => {
      const _component_el_dialog = ElDialog;
      return openBlock(), createElementBlock("div", null, [createBaseVNode("div", _hoisted_1$1, [createBaseVNode("div", null, [createBaseVNode("span", _hoisted_2$1, " \xA92011-" + toDisplayString(unref(nowYear)()), 1), createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[0] || (_cache[0] = ($event) => goGithub())
      }, "\xA0sy-post-publisher\xA0"), createBaseVNode("span", _hoisted_3, "v" + toDisplayString(v.value) + "\xA0", 1), createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[1] || (_cache[1] = ($event) => goAbout())
      }, toDisplayString(_ctx.$t("syp.about")), 1), _hoisted_4, createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[2] || (_cache[2] = ($event) => unref(toggleDark)())
      }, toDisplayString(unref(isDark) ? _ctx.$t("theme.mode.light") : _ctx.$t("theme.mode.dark")), 1), _hoisted_5, createBaseVNode("span", {
        class: "text s-dark",
        onClick: openTransportSetting
      }, toDisplayString(_ctx.$t("setting.conf.transport")), 1), _hoisted_6, createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[3] || (_cache[3] = ($event) => newWin())
      }, toDisplayString(_ctx.$t("blog.newwin.open")), 1), _hoisted_7, createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[4] || (_cache[4] = ($event) => openGeneralSetting())
      }, toDisplayString(_ctx.$t("setting.blog.index")), 1), createVNode(_component_el_dialog, {
        modelValue: transportFormVisible.value,
        "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => transportFormVisible.value = $event),
        title: _ctx.$t("setting.conf.transport")
      }, {
        default: withCtx(() => [createVNode(_sfc_main$3)]),
        _: 1
      }, 8, ["modelValue", "title"]), createVNode(_component_el_dialog, {
        modelValue: generalSettingFormVisible.value,
        "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => generalSettingFormVisible.value = $event),
        title: _ctx.$t("setting.blog.index")
      }, {
        default: withCtx(() => [createVNode(_sfc_main$7)]),
        _: 1
      }, 8, ["modelValue", "title"])])])]);
    };
  }
});
const DefaultFooter_vue_vue_type_style_index_0_scoped_6fb14376_lang = "";
const DefaultFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-6fb14376"]]);
const _hoisted_1 = {
  id: "app-layout-default"
};
const _hoisted_2 = {
  class: "default-main"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "AppLayoutDefault",
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", _hoisted_1, [createVNode(DefaultHeader), createBaseVNode("div", _hoisted_2, [renderSlot(_ctx.$slots, "default", {}, void 0, true)]), createVNode(DefaultFooter)]);
    };
  }
});
const AppLayoutDefault_vue_vue_type_style_index_0_scoped_daa4119e_lang = "";
const AppLayoutDefault = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-daa4119e"]]);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "AppLayout",
  setup(__props) {
    const layout = shallowRef(AppLayoutDefault);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(resolveDynamicComponent(unref(layout)), null, {
        default: withCtx(() => [renderSlot(_ctx.$slots, "default")]),
        _: 3
      });
    };
  }
});
export {
  HugoYamlConverterAdaptor as $,
  API as A,
  reloadPage as B,
  CONSTANTS as C,
  removeH1 as D,
  parseHtml as E,
  formatNumToZhDate as F,
  cutWords as G,
  jiebaToHotWords as H,
  GithubApi as I,
  getApiParams as J,
  pathJoin as K,
  LogFactory as L,
  PageEditMode as M,
  SourceContentShowType as N,
  removeMdWidgetTag as O,
  Post as P,
  removeMdH1 as Q,
  yaml2Obj as R,
  SiYuanApiAdaptor as S,
  YamlFormatObj as T,
  getPublishStatus as U,
  PostForm as V,
  upperFirst as W,
  API_TYPE_CONSTANTS as X,
  YamlConvertAdaptor as Y,
  VuepressYamlConvertAdaptor as Z,
  _sfc_main as _,
  isInSiyuanWidget as a,
  HexoYamlConverterAdaptor as a0,
  JekyllYamlConverterAdaptor as a1,
  isEmptyObject as a2,
  mdToPlainText as a3,
  PageType as a4,
  removeWidgetTag as a5,
  CommonblogCfg as a6,
  setConf as a7,
  calcLastSeconds as a8,
  useTabCount as a9,
  getDynamicJsonCfg as aa,
  DynamicConfig as ab,
  getBooleanConf as ac,
  getDynYamlConverterAdaptor as ad,
  _sfc_main$j as ae,
  ServiceSwitch as af,
  DynamicPlatform as ag,
  PicgoSetting as ah,
  POSTID_KEY_CONSTANTS as ai,
  getDynPostidKey as aj,
  getDynSwitchKey as ak,
  getPageUrl as al,
  getSiyuanNewWinDataDir as am,
  strUtil as an,
  browserUtil as ao,
  envUtil as ap,
  isElectron as aq,
  picgoUtil as ar,
  parseJSONObj as as,
  getSiyuanCfg as at,
  isFileExist as au,
  toJSONString as av,
  getWidgetId as aw,
  _sfc_main$7 as ax,
  isInSiyuanNewWinBrowser as b,
  getPageId as c,
  isInChromeExtension as d,
  getByLength as e,
  getPublishCfg as f,
  getSiyuanNewWinPageId as g,
  parseBoolean as h,
  isInSiyuanOrSiyuanNewWin as i,
  goToPage as j,
  _export_sfc as k,
  isEmptyString as l,
  mdToHtml as m,
  formatIsoToZhDate as n,
  getConf as o,
  pageUtil as p,
  pinyinSlugify as q,
  removeTitleNumber as r,
  siyuanBrowserUtil as s,
  appendStr as t,
  mdFileToTitle as u,
  SiYuanApi as v,
  isBrowser as w,
  copyToClipboardInBrowser as x,
  getJSONConf as y,
  zhSlugify as z
};
