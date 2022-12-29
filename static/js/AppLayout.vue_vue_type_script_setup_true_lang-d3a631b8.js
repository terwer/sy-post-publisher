var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var _a;
import { bG as library$1, bH as faUpload, bI as faBookOpenReader, bJ as faRectangleList, bK as faXmark, bL as faCircleXmark, bM as faBolt, bN as faCreditCard, bO as faImage, bP as FontAwesomeIcon, bQ as createApp, aG as h, M as defineComponent, u as ref, A as onMounted, aM as resolveComponent, O as openBlock, P as createElementBlock, a1 as createVNode, U as withCtx, T as createBlock, Z as createCommentVNode, _ as createTextVNode, a0 as Fragment, ao as renderList, ac as reactive, z as watch, bR as useDark, bS as useToggle, W as createBaseVNode, $ as toDisplayString, y as unref, bT as pushScopeId, bU as popScopeId, Q as renderSlot, L as shallowRef, Y as resolveDynamicComponent } from "./vendor-037de53c.js";
import { c as createPinia } from "./vendor_pinia-fef65fa5.js";
import { c as createI18n, u as useI18n } from "./vendor_vue-i18n-951bfa8c.js";
import { E as ElMessage, a as ElButton, b as ElHeader, c as ElOption, d as ElSelect, e as ElFormItem, f as ElForm, g as ElSwitch, h as ElMessageBox, i as ElDialog, j as ElInput, k as ElAlert } from "./vendor_element-plus-378ccace.js";
import { H as HighlightJS, j as javascript, t as typescript, c, a as cpp, b as java, d as bash, x as xml, e as css, p as plaintext } from "./vendor_highlight-js-4c21db5d.js";
import { b as browserIndex } from "./vendor_plantuml-encoder-18698577.js";
import { l as loglevel } from "./vendor_loglevel-bd2e1c44.js";
import { p as prefix } from "./vendor_loglevel-plugin-prefix-34a2ac06.js";
import { n } from "./vendor_browser-fs-access-5b1a413d.js";
import { d } from "./vendor_transliteration-0556f169.js";
import { d as dist } from "./vendor_shorthash2-e60185c0.js";
import { j as jsYaml } from "./vendor_js-yaml-c400b4ba.js";
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
  "service.tab.change.local": "\u901A\u7528\u8BBE\u7F6E",
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
  "main.opt.ok": "\u786E\u8BA4",
  "main.opt.cancel": "\u53D6\u6D88",
  "main.opt.warning.tip": "\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\uFF0C\u662F\u5426\u7EE7\u7EED\uFF1F",
  "setting.noneed": "\u65E0\u9700\u914D\u7F6E",
  "setting.blog.setting": "\u8BBE\u7F6E",
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
  "dynamic.platform.new": "\u65B0\u589E\u5E73\u53F0",
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
  "blog.top-data-tip": "\u6E29\u99A8\u63D0\u793A\uFF1A1. 0.1.0+ \u4EE5\u540E\uFF0C\u53EF\u901A\u8FC7\u3010\u601D\u6E90\u5730\u5740\u3011\u6765\u4FEE\u6539\u9ED8\u8BA4\u4F3A\u670D\u914D\u7F6E\uFF0C\u652F\u6301\u672C\u5730\u548C\u8FDC\u7A0B\uFF1B\u5982\u679C\u662F\u8FDC\u7A0B\u8FD8\u9700\u8981\u8BBE\u7F6Etoken\uFF0C\u5982\u679C\u4F7F\u7528\u6D4F\u89C8\u5668\u63D2\u4EF6\u6216\u8005\u6302\u4EF6\u4E4B\u5916\u7684\u8BBF\u95EE\u65B9\u5F0F\u8FD8\u9700\u8981\u8BBE\u7F6E\u8DE8\u57DF\u8BF7\u6C42\u4EE3\u7406\u3002 2\u3001\u5347\u7EA7\u65B0\u7248\u4E4B\u524D\u5F3A\u70C8\u5EFA\u8BAE\u5BFC\u51FA\u914D\u7F6E\uFF0C\u9632\u6B62\u914D\u7F6E\u4E22\u5931\u3002 3\u3001\u5982\u679C\u51FA\u73B0\u65B0\u7248\u672C\u4E0D\u517C\u5BB9\u7684\u5F02\u5E38\u60C5\u51B5\uFF0C\u5EFA\u8BAE\u6E05\u7A7A\u914D\u7F6E\u3002\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF01",
  "blog.top-data-tip.siyuan": "\u6E29\u99A8\u63D0\u793A\uFF1A1\u3001\u5F53\u524D\u5904\u4E8E\u6302\u4EF6\u6A21\u5F0F\uFF0C\u4ECE 0.1.0 \u7248\u672C\u5F00\u59CB\uFF0C\u65E0\u9700\u5728\u6240\u6709\u9875\u9762\u5F15\u7528\u6302\u4EF6\u4E86\uFF0C\u53EA\u9700\u8981\u5728\u7236\u7EA7\u9875\u9762\u5F15\u7528\u4E00\u4E2A\u6302\u4EF6\u5373\u53EF\u3002\u5177\u4F53\u89C4\u5219\u5982\u4E0B\uFF1A(1). \u5982\u679C\u68C0\u6D4B\u5230\u6CA1\u6709\u5B50\u6587\u6863\uFF0C\u4F1A\u517C\u5BB9 0.0.3 \u7248\u672C\u4EE5\u524D\u7684\u65B9\u5F0F\uFF0C\u5C55\u793A\u5F53\u524D\u6587\u6863\u7684\u53D1\u5E03\u9875\u9762\u3002 (2). \u5982\u679C\u68C0\u6D4B\u5230\u6709\u5B50\u6587\u6863\uFF0C\u4F1A\u4EE5\u5217\u8868\u52A0\u5206\u9875\u7684\u65B9\u5F0F\u5C55\u793A\u6240\u6709\u5B50\u6587\u6863\u5217\u8868\u3002\u53EF\u5355\u72EC\u9009\u62E9\u67D0\u4E2A\u5B50\u6587\u6863\u8FDB\u884C\u53D1\u5E03\u64CD\u4F5C\u3002 2\u3001\u5347\u7EA7\u65B0\u7248\u4E4B\u524D\u5F3A\u70C8\u5EFA\u8BAE\u5BFC\u51FA\u914D\u7F6E\uFF0C\u9632\u6B62\u914D\u7F6E\u4E22\u5931\u3002 3\u3001\u5982\u679C\u51FA\u73B0\u65B0\u7248\u672C\u4E0D\u517C\u5BB9\u7684\u5F02\u5E38\u60C5\u51B5\uFF0C\u5EFA\u8BAE\u6E05\u7A7A\u914D\u7F6E\u3002\u6B64\u64CD\u4F5C\u4E0D\u53EF\u6062\u590D\uFF0C\u8BF7\u8C28\u614E\u64CD\u4F5C\uFF01",
  "blog.newwin.open": "\u65B0\u7A97\u6253\u5F00",
  "blog.change.siyuan.api": "\u601D\u6E90\u5730\u5740",
  "setting.blog.siyuan.password": "\u601D\u6E90\u7B14\u8BB0\u9274\u6743Token\uFF0C\u8BF7\u4ECE\u3010\u8BBE\u7F6E->\u5173\u4E8E\u3011\u590D\u5236\uFF0C\u5982\u679C\u662F\u672C\u5730\u7B14\u8BB0\u7559\u7A7A\u5373\u53EF",
  "setting.blog.siyuan.apiurl": "\u601D\u6E90\u7B14\u8BB0\u7684API\u5730\u5740\uFF0C\u5305\u62EC\u7AEF\u53E3\uFF0C\u4F8B\u5982\uFF1Ahttp://127.0.0.1:6806",
  "setting.blog.siyuan.current.apiurl": "\u5F53\u524DAPI\u5730\u5740=>",
  "setting.blog.middlewareUrl": "\u8DE8\u57DF\u8BF7\u6C42\u4EE3\u7406",
  "setting.blog.middlewareUrl.tip": "\u67D0\u4E9B\u573A\u666F\u4E0B\u9700\u8981\uFF08\u4F8B\u5982Firefox\u63D2\u4EF6\u3001\u81EA\u90E8\u7F72\u6A21\u5F0F\uFF09\uFF0C\u5176\u4ED6\u60C5\u51B5\u53EF\u5FFD\u7565",
  "setting.blog.middlewareUrl.my.tip": "\u5982\u679C\u6CA1\u6709\u90E8\u7F72\u4EE3\u7406\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6211\u7684\u5171\u4EAB\u5730\u5740\uFF1Ahttps://publish.terwer.space/api/middleware \u3002\u51FA\u4E8E\u6027\u80FD\u8003\u8651\uFF0C\u5EFA\u8BAE\u81EA\u5DF1\u90E8\u7F72\u4E00\u4EFD\u3002",
  "setting.conf.export": "\u5BFC\u51FA\u914D\u7F6E",
  "setting.conf.import": "\u5BFC\u5165\u914D\u7F6E",
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
  "preference.setting.newWin": "\u65B0\u7A97\u53E3",
  "siyuan.browser.show.close.btn": "\u663E\u793A\u5173\u95ED\u6309\u94AE",
  "siyuan.browser.menu.quick.btn": "\u4E00\u952E\u5FEB\u901F\u53D1\u5E03",
  "siyuan.browser.menu.publish.btn": "\u6587\u7AE0\u53D1\u5E03\uFF08\u81EA\u52A8\u68C0\u6D4B\uFF0C\u6709\u5B50\u6587\u6863->\u5217\u8868\u9875\uFF1B\u65E0\u5B50\u6587\u6863->\u53D1\u5E03\u9875\uFF09",
  "siyuan.browser.menu.preview.btn": "\u6587\u7AE0\u9884\u89C8\uFF08\u5F53\u524D\u6587\u7AE0\u53EA\u8BFB\u9884\u89C8\uFF09",
  "siyuan.browser.menu.manage.btn": "\u6587\u7AE0\u7BA1\u7406\uFF08\u5168\u90E8\u6587\u7AE0\u7EDF\u4E00\u7BA1\u7406\uFF09",
  "siyuan.browser.menu.anki.btn": "Anki\u6807\u8BB0\uFF08\u914D\u5408ankisiyuan\u751F\u6210Anki\u6807\u8BB0\uFF09",
  "siyuan.browser.menu.picture.btn": "PicGO\u56FE\u5E8A\uFF08\u652F\u6301\u56FE\u5E8A\u914D\u7F6E\u4E0E\u56FE\u7247\u4E0A\u4F20\uFF09",
  "anki.siyuan.deck": "\u724C\u7EC4",
  "anki.siyuan.deck.new": "\u65B0\u724C\u7EC4",
  "anki.siyuan.tag": "\u6807\u7B7E",
  "anki.siyuan.tag.new": "\u65B0\u6807\u7B7E",
  "picgo.chrome.tip": "\u60A8\u5F53\u524D\u4F7F\u7528\u7684\u662F\u6D4F\u89C8\u5668\u63D2\u4EF6\uFF0C\u9700\u8981\u4ECE\u8FD9\u91CC\u4E0B\u8F7D\u914D\u7F6E PicGO \u5BA2\u6237\u7AEF\uFF1Ahttps://github.com/Molunerfinn/PicGo/releases",
  "picgo.siyuan.tip": "\u60A8\u5F53\u524D\u4F7F\u7528\u7684\u662F\u601D\u6E90\u7B14\u8BB0\u6302\u4EF6\uFF0C\u9700\u8981\u81EA\u884C\u914D\u7F6E\u5DF2\u7ECF\u96C6\u6210\u597D\u7684PicGO\uFF0C\u6302\u4EF6\u7248 PicGO \u914D\u7F6E\u6587\u4EF6\u5728\uFF1A`[\u601D\u6E90\u5DE5\u4F5C\u7A7A\u95F4]/data/widgets/sy-post-publisher/lib/picgo/picgo.cfg.json`\uFF0C\u8BF7\u53C2\u8003PicGO\u5B98\u65B9\u6587\u6863\u8FDB\u884C\u914D\u7F6E\uFF1Ahttps://picgo.github.io/PicGo-Core-Doc/zh/guide/config.html#%E6%89%8B%E5%8A%A8%E7%94%9F%E6%88%90"
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
  "setting.noneed": "No need setting",
  "setting.blog.setting": " Setting",
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
  "anki.siyuan.deck": "Deck",
  "anki.siyuan.deck.new": "New deck",
  "anki.siyuan.tag": "Tag",
  "anki.siyuan.tag.new": "New tag",
  "picgo.chrome.tip": "If you are using a browser plug -in, you need to download the configuration Picgo client from here: https://github.com/Molunerfinn/PicGo/releases",
  "picgo.siyuan.tip": "If you are using Siyuan notes pendants, you need to configure your own integration of PICGO. The pendant version of the PICGO configuration file is:`[Siyuan Workspace]/data/widgets/sy-post-publisher/lib/picgo/picgo.cfg.json`\uFF0CPlease refer to the official picgo document for configuration\uFF1Ahttps://picgo.github.io/PicGo-Core-Doc/zh/guide/config.html#%E6%89%8B%E5%8A%A8%E7%94%9F%E6%88%90"
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
const removeBom = (str) => {
  const supportedImages = [".png", ".jpg", ".gif"];
  supportedImages.forEach((ext) => {
    if (str.indexOf(ext) > -1) {
      str = str.substring(0, str.indexOf(ext)) + ext;
    }
  });
  return str;
};
const getEnvOrDefault = (key, defaultValue) => {
  const value = getEnv(key);
  if (value.trim().length == 0) {
    return defaultValue;
  }
  return value;
};
const getEnv = (key) => {
  let env = "";
  try {
    if ({ "VITE_LOG_INFO_ENABLED": "false", "VITE_SIYUAN_API_URL": "http://127.0.0.1:6806", "VITE_SIYUAN_CONFIG_TOKEN": "", "VITE_MIDDLEWARE_URL": "https://publish.terwer.space/api/middleware", "BASE_URL": "/widgets/sy-post-publisher/", "MODE": "production", "DEV": false, "PROD": true }[key]) {
      env = { "VITE_LOG_INFO_ENABLED": "false", "VITE_SIYUAN_API_URL": "http://127.0.0.1:6806", "VITE_SIYUAN_CONFIG_TOKEN": "", "VITE_MIDDLEWARE_URL": "https://publish.terwer.space/api/middleware", "BASE_URL": "/widgets/sy-post-publisher/", "MODE": "production", "DEV": false, "PROD": true }[key];
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
const isTest = { "VITE_LOG_INFO_ENABLED": "false", "VITE_SIYUAN_API_URL": "http://127.0.0.1:6806", "VITE_SIYUAN_CONFIG_TOKEN": "", "VITE_MIDDLEWARE_URL": "https://publish.terwer.space/api/middleware" }.TEST === "true";
const isDev = false;
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
const isBrowser = () => typeof window !== "undefined" && typeof window.document !== "undefined";
const isLocalhost = (apiUrl) => apiUrl.indexOf("127.0.0.1") > -1 || apiUrl.indexOf("localhost") > -1;
const isWindows = /Windows/.test(navigator.userAgent);
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
const readJSONFileFormDialog = async () => {
  return await n({
    description: "JSON files",
    mimeTypes: ["application/json"],
    extensions: [".json"],
    multiple: true
  });
};
const logger$7 = LogFactory.getLogger();
const getConf = (key) => {
  const value = localStorage.getItem(key);
  if (!value) {
    return "";
  }
  return value;
};
const getBooleanConf = (key) => {
  const value = getConf(key);
  const valueObj = value.toLowerCase() === "true";
  logger$7.debug("\u4ECElocalStorage\u83B7\u53D6Boolean\u6570\u636E=>");
  logger$7.debug(valueObj);
  return valueObj;
};
function getJSONConf(key) {
  logger$7.debug("------------------------------");
  logger$7.debug("\u5C1D\u8BD5\u4ECElocalStorage\u83B7\u53D6JSON\u6570\u636E\uFF0Ckey=>", key);
  let valueObj = {};
  const value = getConf(key);
  if (value !== "") {
    try {
      valueObj = JSON.parse(value);
    } catch (e) {
      logger$7.error("JSON\u683C\u5F0F\u4E0D\u6B63\u786E", e);
      throw e;
    }
  }
  logger$7.debug("\u4ECElocalStorage\u83B7\u53D6JSON\u6570\u636E=>", valueObj);
  logger$7.debug("------------------------------");
  return valueObj;
}
const setConf = (key, value) => {
  if (!value || value === "") {
    logger$7.warn("\u7A7A\u503C\uFF0C\u4E0D\u4FDD\u5B58");
    return;
  }
  localStorage.setItem(key, value);
};
const setBooleanConf = (key, value) => {
  const boolString = value.toString();
  setConf(key, boolString);
};
const setJSONConf = (key, value) => {
  logger$7.debug("++++++++++++++++++++++++++++++");
  logger$7.debug("\u5C1D\u8BD5\u4FDD\u5B58JSON\u6570\u636E\u5230localStorage\u91CCkey=>", key);
  logger$7.debug("\u4FDD\u5B58JSON\u6570\u636E\u5230localStorage=>", value);
  const valueString = JSON.stringify(value);
  setConf(key, valueString);
  logger$7.debug("++++++++++++++++++++++++++++++");
};
const checkKeyExists = (key) => {
  let flag = false;
  for (let i = 0; i < localStorage.length; i++) {
    const getKey = localStorage.key(i);
    if (key === getKey) {
      flag = true;
      break;
    }
  }
  return flag;
};
const getAllConf = () => {
  const data = {};
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    data[key] = value;
  }
  return data;
};
const exportConf = () => {
  const data = getAllConf();
  const json = JSON.stringify(data);
  const blob = new Blob([json], {
    type: "application/json"
  });
  const link = document.createElement("a");
  link.download = "data.json";
  link.href = URL.createObjectURL(blob);
  document.body.appendChild(link);
  link.click();
};
const importConf = async () => {
  try {
    await importJSONToLocalStorage();
    ElMessage.success("\u5BFC\u5165\u6210\u529F");
    if (isBrowser()) {
      setTimeout(function() {
        reloadPage();
      }, 500);
    }
  } catch (e) {
    if (e.toString().indexOf("AbortError") > -1) {
      logger$7.warn("\u60A8\u53D6\u6D88\u4E86\u5BFC\u5165=>", e);
    } else {
      logger$7.error("\u914D\u7F6E\u6587\u4EF6\u89E3\u6790\u9519\u8BEF=>", e);
      ElMessage.error(appendStr("\u914D\u7F6E\u6587\u4EF6\u89E3\u6790\u9519\u8BEF=>", e));
    }
  }
};
const clearConf = () => {
  localStorage.clear();
  if (localStorage.length === 0) {
    console.log("LocalStorage is empty");
  } else {
    console.log("LocalStorage is not empty");
  }
};
const SIYUAN_CFG_KEY = "siyuan-cfg";
const DEBUG_SIYUAN_SUBDOC = false;
const SIYUAN_CONSTANTS = {
  SIYUAN_CFG_KEY,
  DEBUG_SIYUAN_SUBDOC
};
const MAX_TITLE_LENGTH = 10;
const MAX_PREVIEW_LENGTH = 255;
const DYNAMIC_CONFIG_KEY = "dynamic-config";
const PUBLISH_PREFERENCE_CONFIG_KEY = "publish-preference";
const PUBLISH_DYNAMIC_SLUG = "[dynamic-generated-on-publish]";
const DEFAULT_JIEBA_WORD_LENGTH = 5;
const CONSTANTS = {
  MAX_TITLE_LENGTH,
  MAX_PREVIEW_LENGTH,
  DYNAMIC_CONFIG_KEY,
  DEFAULT_JIEBA_WORD_LENGTH,
  PUBLISH_PREFERENCE_CONFIG_KEY,
  PUBLISH_DYNAMIC_SLUG
};
const logger$6 = LogFactory.getLogger();
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
  logger$6.debug("\u51C6\u5907\u5F00\u59CB\u5206\u8BCD\uFF0C\u539F\u6587=>", words);
  const v = await fetch("https://api.terwer.space/api/jieba?q=" + words);
  const json = await v.json();
  logger$6.debug("\u5206\u8BCD\u5B8C\u6BD5\uFF0C\u7ED3\u679C=>", json.result);
  return json.result;
};
function countWords(words, len) {
  const unUseWords = ["\u9875\u9762"];
  logger$6.debug("\u6587\u672C\u6E05\u6D17\uFF0C\u7EDF\u8BA1\uFF0C\u6392\u5E8F\uFF0C\u53BB\u9664\u65E0\u610F\u4E49\u7684\u5355\u8BCDunUseWords=>", unUseWords);
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
  logger$6.debug("\u6587\u672C\u6E05\u6D17\u7ED3\u675Fwordarr=>", wordarr);
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
  logger$6.debug("jiebaToHotWords=>", res);
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
  let baseUrl = getEnv("VITE_SIYUAN_API_URL");
  let token = getEnv("VITE_SIYUAN_CONFIG_TOKEN");
  let middlewareUrl = getEnv("VITE_MIDDLEWARE_URL");
  const siyuanCfg = getJSONConf(SIYUAN_CONSTANTS.SIYUAN_CFG_KEY);
  if (!isEmptyString(siyuanCfg.baseUrl)) {
    baseUrl = siyuanCfg.baseUrl;
  }
  if (!isEmptyString(siyuanCfg.token)) {
    token = siyuanCfg.token;
  }
  if (!isEmptyString(siyuanCfg.middlewareUrl)) {
    middlewareUrl = siyuanCfg.middlewareUrl;
  } else {
    middlewareUrl = "/api/middleware";
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
  async sql(sql) {
    const sqldata = {
      stmt: sql
    };
    const url = "/api/query/sql";
    this.logger.debug("sql=>", sql);
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
const SIYUAN_BROWSER_CONSTANTS_SIYUAN_EXPORT_CLOSE = "siyuan-export-close";
const isInSiyuanNewWinBrowser = () => {
  return typeof window.terwer !== "undefined";
};
const doCloseExportWin = () => {
  const { ipcRenderer } = require("electron");
  ipcRenderer.send(SIYUAN_BROWSER_CONSTANTS_SIYUAN_EXPORT_CLOSE);
  if (window.siyuan.printWin) {
    window.siyuan.printWin.destroy();
  }
};
const doOpenExportWin = async (pageId, pageUrl) => {
  const syWin = window.parent;
  if (syWin.terwer && syWin.terwer.renderPublishHelper) {
    syWin.terwer.renderPublishHelper(pageId, pageUrl);
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
const logger$5 = LogFactory.getLogger("utils/platform/siyuan/siyuanUtil.ts");
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
const inSiyuan = () => {
  const widgetResult = getWidgetId();
  return widgetResult.isInSiyuan;
};
const getWidgetPage = async (force) => {
  const widgetResult = getWidgetId();
  if (!widgetResult.isInSiyuan) {
    return;
  }
  const widgetId = widgetResult.widgetId;
  logger$5.debug("\u83B7\u53D6\u6302\u4EF6\u7684widgetId=>", widgetId);
  const pageObj = getJSONConf(widgetId);
  if (!force && pageObj) {
    logger$5.debug("\u83B7\u53D6\u672C\u5730\u7F13\u5B58\u7684\u601D\u6E90\u7B14\u8BB0\u9875\u9762\u4FE1\u606F\uFF08\u4E0D\u662F\u5B9E\u65F6\u7684\uFF09=>", pageObj);
    return pageObj;
  }
  const siyuanApi = new SiYuanApi();
  const page = await siyuanApi.getBlockByID(widgetId);
  if (page) {
    setJSONConf(widgetId, page);
    logger$5.debug("\u8C03\u7528API\u8BBE\u7F6E\u67E5\u8BE2\u601D\u6E90\u9875\u9762\u4FE1\u606F\u5E76\u66F4\u65B0\u672C\u5730\u7F13\u5B58", page);
  }
  return page;
};
const getSiyuanPageId = async (force) => {
  const page = await getWidgetPage(force);
  if (!page) {
    return;
  }
  const pageId = page.root_id;
  logger$5.debug("\u83B7\u53D6\u601D\u6E90\u7B14\u8BB0\u9875\u9762ID=>", pageId);
  return pageId;
};
const getPageId = async (force, pageId) => {
  let syPageId;
  if (pageId) {
    logger$5.debug("\u663E\u793A\u6307\u5B9ApageId=>", pageId);
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
function isInFirefoxExtension() {
  return typeof InstallTrigger !== "undefined";
}
const logger$4 = LogFactory.getLogger();
function getPageUrl(pageUrl, split) {
  let url = pageUrl;
  if (url.startsWith("http") || url.startsWith("https")) {
    logger$4.info("\u5F53\u524D\u662F\u5916\u90E8\u94FE\u63A5\uFF0C\u76F4\u63A5\u8DF3\u8F6C");
    return url;
  }
  if (typeof chrome.runtime !== "undefined") {
    url = chrome.runtime.getURL(url);
  } else {
    const from = getQueryString("from");
    if (inSiyuan() || from === "siyuan" || isInSiyuanNewWinBrowser()) {
      url = "/widgets/sy-post-publisher" + url;
      url = setUrlParameter(url, "from", "siyuan");
    }
    let baseUrl = window.location.protocol + "//" + window.location.host;
    if (split && split !== "") {
      baseUrl = window.location.protocol + "//" + window.location.host + split;
    }
    url = pathJoin(baseUrl, url);
  }
  logger$4.warn("\u5C06\u8981\u6253\u5F00\u9875\u9762=>", url);
  return url;
}
function goToPage(pageUrl) {
  const url = getPageUrl(pageUrl, "");
  window.open(url);
}
function goToPageWithTarget(pageUrl, target, split) {
  const url = getPageUrl(pageUrl, split);
  if (target === "_self") {
    window.location.href = url;
  } else {
    window.open(url);
  }
}
function isInChromeExtension() {
  if (!isBrowser()) {
    return false;
  }
  if (isInFirefoxExtension()) {
    return false;
  }
  return !!window.chrome && (!!window.chrome.webstore || !!window.chrome.runtime);
}
async function sendChromeMessage(message) {
  return await new Promise((resolve) => {
    chrome.runtime.sendMessage(message, resolve);
  });
}
const importJSONToLocalStorage = async () => {
  const files = await readJSONFileFormDialog();
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const data = JSON.parse(reader.result);
    console.log("\u51C6\u5907\u5BFC\u5165\u914D\u7F6E\uFF0C\u8BFB\u53D6\u5230\u7684\u914D\u7F6E\u6570\u636E\u4E3A=>", data);
    for (const [key, value] of Object.entries(data)) {
      localStorage.setItem(key, value);
    }
  });
  reader.readAsText(files[0]);
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
  HighlightJS.registerLanguage("csharp", java);
  HighlightJS.registerLanguage("cs", java);
  HighlightJS.registerLanguage("bash", bash);
  HighlightJS.registerLanguage("shell", bash);
  HighlightJS.registerLanguage("xml", xml);
  HighlightJS.registerLanguage("html", xml);
  HighlightJS.registerLanguage("css", css);
  HighlightJS.registerLanguage("plaintext", plaintext);
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
          var _a3, _b;
          const title = (_a3 = block.attributes.getNamedItem("title")) == null ? void 0 : _a3.value;
          const active = (_b = block.attributes.getNamedItem("active")) == null ? void 0 : _b.value;
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
      const plantUMLServer = { "VITE_LOG_INFO_ENABLED": "false", "VITE_SIYUAN_API_URL": "http://127.0.0.1:6806", "VITE_SIYUAN_CONFIG_TOKEN": "", "VITE_MIDDLEWARE_URL": "https://publish.terwer.space/api/middleware" }.PLANT_UML_SERVR || "https://www.plantuml.com/plantuml/svg/";
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
const logger$3 = LogFactory.getLogger("plugins/page-beauty/page-beauty.ts");
const PageBeauty = {
  install(Vue) {
    Vue.directive("beauty", (el) => {
      logger$3.info("PageBeauty is rendering ...");
      const links = el.querySelectorAll("a");
      links.forEach((link) => {
        link.addEventListener("click", function(evt) {
          evt.preventDefault();
          const href = link.getAttribute("href");
          if (!isEmptyString(href)) {
            goToPage(href);
          }
        });
      });
    });
  }
};
const logger$2 = LogFactory.getLogger("plugins/font-awesome/font-awesome.ts");
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
    Vue.component("font-awesome-icon", FontAwesomeIcon);
    logger$2.debug("FontAwesome inited");
  }
};
const createPage = (rootComponent) => {
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
class YamlConvertAdaptor {
  convertToYaml(postForm, githubCfg) {
    throw new Error("YamlConvertAdaptor.convertToYaml: \u8BE5\u529F\u80FD\u672A\u5B9E\u73B0\uFF0C\u8BF7\u5728\u5B50\u7C7B\u91CD\u5199\u8BE5\u65B9\u6CD5");
  }
  convertToAttr(yamlFormatObj, githubCfg) {
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
      htmlContent: ""
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
const logger$1 = LogFactory.getLogger();
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
      logger$1.debug("\u4FEE\u590D\u65F6\u533A\uFF0CISO\u65E5\u671F\u9ED8\u8BA4\u665A8\u5C0F\u65F6");
      logger$1.debug(addHoursToDate(new Date(match), 8));
      newmatch = addHoursToDate(new Date(match), 8).toISOString();
    }
    const dts = newmatch.split("T");
    const d2 = dts[0].replaceAll(/-/g, "");
    const t = dts[1].split(".")[0].replaceAll(/:/g, "");
    const result = d2 + t;
    newstr = newstr.replace(match, result);
    logger$1.debug("formatIsoDate match=>", match);
    logger$1.debug("formatIsoDate result=>", result);
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
  logger$1.debug("formatNumToZhDate str=>", str);
  logger$1.debug("formatNumToZhDate datestr=>", datestr);
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
  logger$1.debug("datestr=>", datestr);
  return changeTimeZone(datestr, "Asia/Shanghai");
};
const calcLastSeconds = function(isoDateStr) {
  const fmt = formatIsoToNumDate(isoDateStr, true);
  const date = covertStringToDate(fmt);
  const now = new Date();
  const s = (now.getTime() - date.getTime()) / 1e3;
  return parseInt(s.toString());
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
  convertToYaml(postForm, githubCfg) {
    var _a2;
    let yamlFormatObj = new YamlFormatObj();
    this.logger.debug("\u60A8\u6B63\u5728\u4F7F\u7528 Vuepress Yaml Converter", postForm);
    yamlFormatObj.yamlObj.title = postForm.formData.title;
    let link = "/post/" + postForm.formData.customSlug + ".html";
    if (githubCfg && !isEmptyString(githubCfg.previewUrl)) {
      link = githubCfg.previewUrl.replace("[postid]", postForm.formData.customSlug);
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
    if (githubCfg.baseUrl) {
      githubUrl = pathJoin(githubCfg.baseUrl, "/" + githubCfg.githubUser);
    }
    yamlFormatObj.yamlObj.author = {
      name: (_a2 = githubCfg.author) != null ? _a2 : "terwer",
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
  convertToAttr(yamlFormatObj, githubCfg) {
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
  convertToYaml(postForm, githubCfg) {
    let yamlFormatObj = new YamlFormatObj();
    this.logger.debug("\u60A8\u6B63\u5728\u4F7F\u7528 Jekyll Yaml Converter", postForm);
    yamlFormatObj.yamlObj.layout = "post";
    yamlFormatObj.yamlObj.date = covertStringToDate(postForm.formData.created);
    yamlFormatObj.yamlObj.categories = postForm.formData.categories;
    yamlFormatObj.yamlObj.title = postForm.formData.title;
    let link = "/post/" + postForm.formData.customSlug + ".html";
    if (githubCfg && !isEmptyString(githubCfg.previewUrl)) {
      link = githubCfg.previewUrl.replace("[postid]", postForm.formData.customSlug);
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
  convertToAttr(yamlFormatObj, githubCfg) {
    return super.convertToAttr(yamlFormatObj, githubCfg);
  }
}
class HugoYamlConverterAdaptor extends YamlConvertAdaptor {
  constructor() {
    super(...arguments);
    __publicField(this, "logger", LogFactory.getLogger("utils/platform/github/hugo/HugoYamlConverterAdaptor.ts"));
  }
  convertToYaml(postForm, githubCfg) {
    let yamlFormatObj = new YamlFormatObj();
    this.logger.debug("\u60A8\u6B63\u5728\u4F7F\u7528 Hugo Yaml Converter", postForm);
    yamlFormatObj.yamlObj.title = postForm.formData.title;
    yamlFormatObj.yamlObj.slug = postForm.formData.customSlug;
    yamlFormatObj.yamlObj.url = "/post/" + postForm.formData.customSlug + ".html";
    yamlFormatObj.yamlObj.date = postForm.formData.created;
    yamlFormatObj.yamlObj.tags = postForm.formData.tag.dynamicTags;
    yamlFormatObj.yamlObj.categories = postForm.formData.categories;
    yamlFormatObj.yamlObj.lastmod = formatIsoToZhDate(new Date().toISOString(), true);
    yamlFormatObj.yamlObj.toc = true;
    yamlFormatObj.yamlObj.keywords = postForm.formData.tag.dynamicTags.join(",");
    yamlFormatObj.yamlObj.description = postForm.formData.desc;
    yamlFormatObj.yamlObj.isCJKLanguage = true;
    let yaml = obj2Yaml(yamlFormatObj.yamlObj);
    yaml = formatIsoToZhDate(yaml, true);
    yamlFormatObj.formatter = yaml;
    yamlFormatObj.mdContent = postForm.formData.mdContent;
    yamlFormatObj.mdFullContent = yamlFormatObj.formatter + "\n\n" + yamlFormatObj.mdContent;
    yamlFormatObj.htmlContent = postForm.formData.htmlContent;
    return yamlFormatObj;
  }
  convertToAttr(yamlFormatObj, githubCfg) {
    return super.convertToAttr(yamlFormatObj, githubCfg);
  }
}
class HexoYamlConverterAdaptor extends YamlConvertAdaptor {
  constructor() {
    super(...arguments);
    __publicField(this, "logger", LogFactory.getLogger("utils/platform/github/hexo/hexoYamlConverterAdaptor.ts"));
  }
  convertToYaml(postForm, githubCfg) {
    let yamlFormatObj = new YamlFormatObj();
    this.logger.debug("\u60A8\u6B63\u5728\u4F7F\u7528 Hexo Yaml Converter", postForm);
    yamlFormatObj.yamlObj.title = postForm.formData.title;
    yamlFormatObj.yamlObj.date = postForm.formData.created;
    yamlFormatObj.yamlObj.updated = formatIsoToZhDate(new Date().toISOString(), true);
    yamlFormatObj.yamlObj.excerpt = postForm.formData.desc;
    yamlFormatObj.yamlObj.tags = postForm.formData.tag.dynamicTags;
    yamlFormatObj.yamlObj.categories = postForm.formData.categories;
    let link = "/post/" + postForm.formData.customSlug + ".html";
    if (githubCfg && !isEmptyString(githubCfg.previewUrl)) {
      link = githubCfg.previewUrl.replace("[postid]", postForm.formData.customSlug);
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
  convertToAttr(yamlFormatObj, githubCfg) {
    return super.convertToAttr(yamlFormatObj, githubCfg);
  }
}
class VitepressYamlConverterAdaptor extends YamlConvertAdaptor {
  constructor() {
    super(...arguments);
    __publicField(this, "logger", LogFactory.getLogger("utils/platform/github/other/VitepressYamlConverterAdaptor.ts"));
  }
  convertToYaml(postForm, githubCfg) {
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
  convertToAttr(yamlFormatObj, githubCfg) {
    return super.convertToAttr(yamlFormatObj, githubCfg);
  }
}
class NuxtYamlConverterAdaptor extends YamlConvertAdaptor {
  constructor() {
    super(...arguments);
    __publicField(this, "logger", LogFactory.getLogger("utils/platform/github/other/NuxtYamlConverterAdaptor.ts"));
  }
  convertToYaml(postForm, githubCfg) {
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
  convertToAttr(yamlFormatObj, githubCfg) {
    return super.convertToAttr(yamlFormatObj, githubCfg);
  }
}
class NextYamlConvertAdaptor extends YamlConvertAdaptor {
  constructor() {
    super(...arguments);
    __publicField(this, "logger", LogFactory.getLogger("utils/platform/github/other/NextYamlConvertAdaptor.ts"));
  }
  convertToYaml(postForm, githubCfg) {
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
  convertToAttr(yamlFormatObj, githubCfg) {
    return super.convertToAttr(yamlFormatObj, githubCfg);
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
  const githubCfg = [];
  const metaweblogCfg = [];
  const wordpressCfg = [];
  totalCfg.forEach((item) => {
    switch (item.platformType) {
      case "Github":
        githubCfg.push(item);
        break;
      case "Metaweblog":
        metaweblogCfg.push(item);
        break;
      case "Wordpress":
        wordpressCfg.push(item);
        break;
    }
  });
  const dynamicJsonCfg = {
    totalCfg,
    githubCfg,
    metaweblogCfg,
    wordpressCfg
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
const logger = LogFactory.getLogger("utils/publishUtil.ts");
function getApiParams(apiType) {
  return getJSONConf(apiType);
}
const getPublishStatus = (apiType, meta) => {
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
  if (githubTypeArray.includes(apiType)) {
    const postidKey = getApiParams(apiType).posidKey;
    const postId = meta[postidKey] || "";
    logger.debug("\u5E73\u53F0=>", apiType);
    logger.debug("meta=>", meta);
    logger.debug("postidKey=>", postidKey);
    logger.debug("postidKey\u7684\u503C=>", postId);
    return postId !== "";
  } else if (metaweblogTypeArray.includes(apiType)) {
    const postidKey = getApiParams(apiType).posidKey;
    const postId = meta[postidKey] || "";
    logger.debug("\u5E73\u53F0=>", apiType);
    logger.debug("meta=>", meta);
    logger.debug("postidKey=>", postidKey);
    logger.debug("postidKey\u7684\u503C=>", postId);
    return postId !== "";
  } else if (commonblogTypeArray.includes(apiType)) {
    const postidKey = getApiParams(apiType).posidKey;
    const postId = meta[postidKey != null ? postidKey : ""] || "";
    logger.debug("\u5E73\u53F0=>", apiType);
    logger.debug("meta=>", meta);
    logger.debug("postidKey=>", postidKey);
    logger.debug("postidKey\u7684\u503C=>", postId);
    return postId !== "";
  }
  return false;
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
const _hoisted_1$5 = {
  class: "header-default"
};
const _hoisted_2$2 = {
  key: 0
};
const _hoisted_3$1 = {
  key: 1,
  class: "header-title-default"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
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
          await doOpenExportWin(widgetResult.widgetId);
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
      if (inSiyuan()) {
        showOpenBtn.value = true;
        showCloseBtn.value = false;
      } else {
        showOpenBtn.value = false;
        showCloseBtn.value = true;
      }
      if (isWindows && isElectron) {
        showCloseBtn.value = false;
      }
    };
    onMounted(() => {
      if (isInSiyuanNewWinBrowser() || inSiyuan()) {
        const publishCfg = getPublishCfg();
        showCloseBtn.value = isInSiyuanNewWinBrowser() || publishCfg.showCloseBtn;
        showOpenBtn.value = showCloseBtn.value;
        pageIdChanged();
        showTitle.value = false;
      } else {
        showOpenBtn.value = false;
        showCloseBtn.value = true;
        showTitle.value = true;
      }
      const debugMode = getBooleanEnv("VITE_DEBUG_MODE");
      if (debugMode) {
        showOpenBtn.value = true;
        showCloseBtn.value = true;
        showTitle.value = false;
      }
    });
    return (_ctx, _cache) => {
      const _component_font_awesome_icon = resolveComponent("font-awesome-icon");
      const _component_el_button = ElButton;
      const _component_el_header = ElHeader;
      return openBlock(), createElementBlock("div", _hoisted_1$5, [createVNode(_component_el_header, {
        id: "publisher-header"
      }, {
        default: withCtx(() => [!showTitle.value ? (openBlock(), createElementBlock("div", _hoisted_2$2, [showOpenBtn.value ? (openBlock(), createBlock(_component_el_button, {
          key: 0,
          class: "b3-button--open",
          type: "success",
          onClick: handleWinOpen
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-upload"
          })]),
          _: 1
        })) : createCommentVNode("", true), showOpenBtn.value ? (openBlock(), createBlock(_component_el_button, {
          key: 1,
          class: "b3-button--preview",
          type: "success",
          onClick: handleWinPreview
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-book-open-reader"
          })]),
          _: 1
        })) : createCommentVNode("", true), showOpenBtn.value ? (openBlock(), createBlock(_component_el_button, {
          key: 2,
          class: "b3-button--preview",
          type: "success",
          onClick: handleWinManage
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-rectangle-list"
          })]),
          _: 1
        })) : createCommentVNode("", true), showOpenBtn.value ? (openBlock(), createBlock(_component_el_button, {
          key: 3,
          class: "b3-button--anki",
          type: "success",
          onClick: handleWinAnki
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-credit-card"
          })]),
          _: 1
        })) : createCommentVNode("", true), showOpenBtn.value ? (openBlock(), createBlock(_component_el_button, {
          key: 4,
          class: "b3-button--picture",
          type: "success",
          onClick: handleWinPicture
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-image"
          })]),
          _: 1
        })) : createCommentVNode("", true), showCloseBtn.value ? (openBlock(), createBlock(_component_el_button, {
          key: 5,
          class: "b3-button--cancel",
          type: "danger",
          onClick: handleWinClose
        }, {
          default: withCtx(() => [createVNode(_component_font_awesome_icon, {
            icon: "fa-solid fa-xmark"
          })]),
          _: 1
        })) : createCommentVNode("", true)])) : createCommentVNode("", true), showTitle.value ? (openBlock(), createElementBlock("h1", _hoisted_3$1, [createVNode(_component_el_button, {
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
const DefaultHeader_vue_vue_type_style_index_0_scoped_c71e99a4_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const DefaultHeader = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-c71e99a4"]]);
const version = "0.6.0";
const _hoisted_1$4 = {
  class: "locale-changer"
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$4, [createVNode(_component_el_form, {
        "label-width": "100px"
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
const _hoisted_1$3 = {
  class: "preference-setting"
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
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
      showCloseBtn: false
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
      }
    };
    const saveConf = () => {
      const publishCfg = getPublishCfg();
      publishCfg.fixTitle = parseBoolean(formData.fixTitle);
      publishCfg.removeH1 = parseBoolean(formData.removeH1);
      publishCfg.newWin = parseBoolean(formData.newWin);
      publishCfg.autoTag = parseBoolean(formData.autoTag);
      publishCfg.showCloseBtn = parseBoolean(formData.showCloseBtn);
      setJSONConf(CONSTANTS.PUBLISH_PREFERENCE_CONFIG_KEY, publishCfg);
      logger2.debug("\u504F\u597D\u8BBE\u7F6E\u5DF2\u4FDD\u5B58");
      if (isBrowser()) {
        setTimeout(function() {
          reloadPage();
        }, 500);
      }
    };
    const initConf = () => {
      const publishCfg = getPublishCfg();
      formData.fixTitle = parseBoolean(publishCfg.fixTitle);
      formData.removeH1 = parseBoolean(publishCfg.removeH1);
      formData.newWin = parseBoolean(publishCfg.newWin);
      formData.autoTag = parseBoolean(publishCfg.autoTag);
      formData.showCloseBtn = parseBoolean(publishCfg.showCloseBtn);
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
      return openBlock(), createElementBlock("div", _hoisted_1$3, [createVNode(_component_el_form, {
        "label-width": "100px"
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
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("siyuan.browser.show.close.btn")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: formData.showCloseBtn,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.showCloseBtn = $event),
            onChange: formMethods.onShowCloseBtnChange
          }, null, 8, ["modelValue", "onChange"])]),
          _: 1
        }, 8, ["label"])]),
        _: 1
      })]);
    };
  }
});
const _hoisted_1$2 = {
  class: "general-setting"
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
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
      return openBlock(), createElementBlock("div", _hoisted_1$2, [createVNode(_sfc_main$5), createVNode(_sfc_main$4, {
        "is-reload": props.isReload
      }, null, 8, ["is-reload"])]);
    };
  }
});
const _withScopeId = (n2) => (pushScopeId("data-v-3d55f177"), n2 = n2(), popScopeId(), n2);
const _hoisted_1$1 = {
  class: "footer"
};
const _hoisted_2$1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, " \xA92011-2022 ", -1));
const _hoisted_3 = {
  class: "text"
};
const _hoisted_4 = {
  key: 0,
  class: "text"
};
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, ".", -1));
const _hoisted_6 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, ".", -1));
const _hoisted_7 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, ".", -1));
const _hoisted_8 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, ".", -1));
const _hoisted_9 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("span", {
  class: "text"
}, ".", -1));
const _hoisted_10 = {
  class: "dialog-footer"
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DefaultFooter",
  setup(__props) {
    const logger2 = LogFactory.getLogger("layouts/default/DefaultFooter");
    const {
      t
    } = useI18n();
    const isDark = useDark();
    const toggleDark = useToggle(isDark);
    const isInSiyuan = ref(false);
    const v = ref("0.0.3");
    const formLabelWidth = "140px";
    const siyuanApiChangeFormVisible = ref(false);
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
    const generalSettingFormVisible = ref(false);
    const goGithub = () => {
      window.open("https://github.com/terwer/src-sy-post-publisher");
    };
    const openGeneralSetting = () => {
      generalSettingFormVisible.value = true;
    };
    const newWin = () => {
      goToPage("/blog/index.html");
    };
    const exportConfig = () => {
      exportConf();
    };
    const importConfig = async () => {
      await importConf();
    };
    const clearConfig = () => {
      ElMessageBox.confirm(t("main.opt.warning.tip"), t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        clearConf();
        reloadPage();
        ElMessage.success(t("main.opt.success"));
      }).catch(() => {
      });
    };
    const changeSiyuanApi = () => {
      siyuanApiChangeFormVisible.value = true;
    };
    const handleSiyuanApiSetting = async (formEl) => {
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
        setTimeout(function() {
          siyuanApiChangeFormVisible.value = false;
          goToPageWithTarget("/blog/index.html", "_self", "");
        }, 500);
      } catch (e) {
        siyuanApiChangeFormVisible.value = false;
        ElMessage.error(t("main.opt.failure"));
        logger2.error(t("main.opt.failure"), e);
      }
    };
    const initConf = () => {
      isInSiyuan.value = inSiyuan();
      v.value = version;
      const siyuanCfg = getSiyuanCfg();
      siyuanApiChangeForm.apiUrl = siyuanCfg.baseUrl;
      siyuanApiChangeForm.pwd = siyuanCfg.token;
      siyuanApiChangeForm.middlewareUrl = siyuanCfg.middlewareUrl;
      logger2.debug("\u521D\u59CB\u5316\u601D\u6E90\u914D\u7F6E", siyuanCfg);
    };
    onMounted(() => {
      if (inSiyuan()) {
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
      const _component_el_input = ElInput;
      const _component_el_form_item = ElFormItem;
      const _component_el_alert = ElAlert;
      const _component_el_form = ElForm;
      const _component_el_button = ElButton;
      const _component_el_dialog = ElDialog;
      return openBlock(), createElementBlock("div", null, [createBaseVNode("div", _hoisted_1$1, [createBaseVNode("div", null, [_hoisted_2$1, createBaseVNode("span", {
        class: "s-dark",
        onClick: _cache[0] || (_cache[0] = ($event) => goGithub())
      }, " sy-post-publisher "), createBaseVNode("span", _hoisted_3, " v" + toDisplayString(v.value) + " . ", 1), createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[1] || (_cache[1] = ($event) => unref(toggleDark)())
      }, toDisplayString(unref(isDark) ? _ctx.$t("theme.mode.light") : _ctx.$t("theme.mode.dark")), 1), !isInSiyuan.value ? (openBlock(), createElementBlock("span", _hoisted_4, ".")) : createCommentVNode("", true), !isInSiyuan.value ? (openBlock(), createElementBlock("span", {
        key: 1,
        class: "text s-dark",
        onClick: _cache[2] || (_cache[2] = ($event) => changeSiyuanApi())
      }, toDisplayString(_ctx.$t("blog.change.siyuan.api")), 1)) : createCommentVNode("", true), _hoisted_5, createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[3] || (_cache[3] = ($event) => exportConfig())
      }, toDisplayString(_ctx.$t("setting.conf.export")), 1), _hoisted_6, createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[4] || (_cache[4] = ($event) => importConfig())
      }, toDisplayString(_ctx.$t("setting.conf.import")), 1), _hoisted_7, createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[5] || (_cache[5] = ($event) => clearConfig())
      }, toDisplayString(_ctx.$t("setting.conf.clear")), 1), _hoisted_8, createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[6] || (_cache[6] = ($event) => newWin())
      }, toDisplayString(_ctx.$t("blog.newwin.open")), 1), _hoisted_9, createBaseVNode("span", {
        class: "text s-dark",
        onClick: _cache[7] || (_cache[7] = ($event) => openGeneralSetting())
      }, toDisplayString(_ctx.$t("service.tab.change.local")), 1), createVNode(_component_el_dialog, {
        modelValue: siyuanApiChangeFormVisible.value,
        "onUpdate:modelValue": _cache[13] || (_cache[13] = ($event) => siyuanApiChangeFormVisible.value = $event),
        title: _ctx.$t("blog.change.siyuan.api")
      }, {
        footer: withCtx(() => [createBaseVNode("span", _hoisted_10, [createVNode(_component_el_button, {
          onClick: _cache[11] || (_cache[11] = ($event) => siyuanApiChangeFormVisible.value = false)
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.opt.cancel")), 1)]),
          _: 1
        }), createVNode(_component_el_button, {
          type: "primary",
          onClick: _cache[12] || (_cache[12] = ($event) => handleSiyuanApiSetting(siyuanApiSettingFormRef.value))
        }, {
          default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.opt.ok")), 1)]),
          _: 1
        })])]),
        default: withCtx(() => [createVNode(_component_el_form, {
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
              "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => siyuanApiChangeForm.apiUrl = $event),
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
              "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => siyuanApiChangeForm.pwd = $event),
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
              "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => siyuanApiChangeForm.middlewareUrl = $event),
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
          })]),
          _: 1
        }, 8, ["model", "rules"])]),
        _: 1
      }, 8, ["modelValue", "title"]), createVNode(_component_el_dialog, {
        modelValue: generalSettingFormVisible.value,
        "onUpdate:modelValue": _cache[14] || (_cache[14] = ($event) => generalSettingFormVisible.value = $event)
      }, {
        default: withCtx(() => [createVNode(_sfc_main$3)]),
        _: 1
      }, 8, ["modelValue"])])])]);
    };
  }
});
const DefaultFooter_vue_vue_type_style_index_0_scoped_3d55f177_lang = "";
const DefaultFooter = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-3d55f177"]]);
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
  mdFileToTitle as $,
  API_TYPE_CONSTANTS as A,
  isEmptyObject as B,
  CONSTANTS as C,
  getDynamicJsonCfg as D,
  setDynamicJsonCfg as E,
  isDynamicKeyExists as F,
  checkKeyExists as G,
  DynamicConfig as H,
  getNewPlatformKey as I,
  getSubtypeList as J,
  getDefaultPlatformName as K,
  LogFactory as L,
  getBooleanConf as M,
  getDynSwitchKey as N,
  getDynSwitchModelValue as O,
  PlatformType as P,
  setBooleanConf as Q,
  getDynSwitchActive as R,
  SiYuanApi as S,
  getDynSwitchInactive as T,
  getSwitchItem as U,
  getDynPostidKey as V,
  setJSONConf as W,
  getConf as X,
  pinyinSlugify as Y,
  zhSlugify as Z,
  _sfc_main as _,
  getSiyuanNewWinPageId as a,
  YamlConvertAdaptor as a0,
  parseHtml as a1,
  formatNumToZhDate as a2,
  cutWords as a3,
  jiebaToHotWords as a4,
  getApiParams as a5,
  PageEditMode as a6,
  SourceContentShowType as a7,
  removeMdWidgetTag as a8,
  removeMdH1 as a9,
  yaml2Obj as aa,
  YamlFormatObj as ab,
  getPublishStatus as ac,
  PostForm as ad,
  upperFirst as ae,
  VuepressYamlConvertAdaptor as af,
  HugoYamlConverterAdaptor as ag,
  HexoYamlConverterAdaptor as ah,
  JekyllYamlConverterAdaptor as ai,
  mdToPlainText as aj,
  setConf as ak,
  calcLastSeconds as al,
  getDynYamlConverterAdaptor as am,
  _sfc_main$3 as an,
  isElectron as ao,
  removeBom as ap,
  isLocalhost as aq,
  getPageId as b,
  isInChromeExtension as c,
  getByLength as d,
  getPublishCfg as e,
  parseBoolean as f,
  getWidgetId as g,
  goToPage as h,
  isInSiyuanNewWinBrowser as i,
  _export_sfc as j,
  inSiyuan as k,
  isEmptyString as l,
  mdToHtml as m,
  formatIsoToZhDate as n,
  appendStr as o,
  pageUtil as p,
  renderHTML as q,
  removeTitleNumber as r,
  removeWidgetTag as s,
  removeH1 as t,
  getJSONConf as u,
  pathJoin as v,
  sendChromeMessage as w,
  getEnvOrDefault as x,
  isBrowser as y,
  SubPlatformType as z
};
