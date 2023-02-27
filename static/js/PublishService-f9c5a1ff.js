var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { E as ElMessage, t as ElMessageBox, h as ElAlert, f as ElInput, e as ElFormItem, a as ElButton, d as ElButtonGroup, g as ElSwitch, J as ElDatePicker, K as ElTag, L as ElTreeSelect, i as ElForm, r as ElMain, s as ElContainer, H as ElSkeleton, w as ElCheckbox, x as ElCheckboxGroup, n as ElOption, o as ElSelect, l as ElTabPane, m as ElTabs } from "./vendor_element-plus-f0c88bcb.js";
import { L as LogFactory, f as getPublishCfg, o as getConf, q as pinyinSlugify, z as zhSlugify, t as appendStr, l as isEmptyString, u as mdFileToTitle, v as SiYuanApi, w as isBrowser, x as copyToClipboardInBrowser, Y as YamlConvertAdaptor, y as getJSONConf, A as API, r as removeTitleNumber, C as CONSTANTS, P as Post, B as reloadPage, m as mdToHtml, D as removeH1, E as parseHtml, F as formatNumToZhDate, c as getPageId, G as cutWords, H as jiebaToHotWords, I as GithubApi, J as getApiParams, K as pathJoin, h as parseBoolean, M as PageEditMode, N as SourceContentShowType, O as removeMdWidgetTag, Q as removeMdH1, R as yaml2Obj, T as YamlFormatObj, U as getPublishStatus, V as PostForm, W as upperFirst, k as _export_sfc, X as API_TYPE_CONSTANTS, Z as VuepressYamlConvertAdaptor, $ as HugoYamlConverterAdaptor, a0 as HexoYamlConverterAdaptor, a1 as JekyllYamlConverterAdaptor, a2 as isEmptyObject, a3 as mdToPlainText, a4 as PageType, a5 as removeWidgetTag, a6 as CommonblogCfg, a7 as setConf, a8 as calcLastSeconds, a9 as useTabCount, aa as getDynamicJsonCfg, ab as DynamicConfig, ac as getBooleanConf, ad as getDynYamlConverterAdaptor, ae as _sfc_main$g, af as ServiceSwitch, ag as DynamicPlatform, ah as PicgoSetting } from "./AppLayout.vue_vue_type_script_setup_true_lang-a6643e7a.js";
import { ad as reactive, u as ref, O as defineComponent, z as watch, A as onMounted, P as openBlock, Q as createElementBlock, x as unref, U as createBlock, V as withCtx, a2 as createVNode, X as createBaseVNode, _ as createCommentVNode, $ as createTextVNode, a0 as toDisplayString, a1 as Fragment, ao as renderList, ap as withKeys, Y as normalizeClass, a9 as nextTick } from "./vendor-1c6b4df7.js";
import { d as dist } from "./vendor_shorthash2-e60185c0.js";
import { u as useI18n } from "./vendor_vue-i18n-b8c9be4e.js";
import { c as copyToClipboard } from "./vendor_copy-to-clipboard-a51858f9.js";
import { P as PicgoPostApi, I as ImageParser } from "./picgoPostApi-852486ac.js";
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
const commonIsTest = { "VITE_LOG_INFO_ENABLED": "true", "VITE_DEBUG_MODE": "false", "VITE_MIDDLEWARE_URL": "https://api.terwer.space/api/middleware" }.TEST === "true";
const CONSTANTS_SIYUAN_PAGE = "test-data-siyuanPage";
const TEST_CONSTANTS = {
  CONSTANTS_SIYUAN_PAGE
};
const useSlug = (props, deps) => {
  const logger = LogFactory.getLogger("composables/publish/makeSlugCom.ts");
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
        logger.debug(t("main.force.refresh.tip"));
        return;
      }
      slugData.isSlugLoading = true;
      logger.debug("\u5F00\u59CB\u751F\u6210\u522B\u540D...");
      try {
        const pageId = await siyuanPageMethods.getPageId();
        if (commonIsTest) {
          const pageStr = getConf(TEST_CONSTANTS.CONSTANTS_SIYUAN_PAGE);
          const pageObj = JSON.parse(JSON.parse(pageStr));
          vi.spyOn(siyuanApi, "getBlockByID").mockResolvedValue(pageObj);
        }
        const page = await siyuanApi.getBlockByID(pageId);
        logger.debug("\u83B7\u53D6\u5230\u601D\u6E90\u9875\u9762\u6570\u636E=>", page);
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
            logger.debug("\u4F7F\u7528\u8C37\u6B4C\u7FFB\u8BD1");
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
        logger.debug("\u5B8C\u6210\u522B\u540D\u7FFB\u8BD1");
        if (slugData.slugHashEnabled) {
          const newstr = page.content + new Date().toISOString();
          const hashstr = appendStr("-", dist(newstr).toLowerCase());
          slugData.customSlug += hashstr;
          logger.debug("\u4E3A\u522B\u540D\u6DFB\u52A0hash");
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
        logger.info("\u751F\u6210\u522B\u540D\u6B63\u5E38\u5B8C\u6210,slugData=>", slugData);
      } catch (e) {
        const errmsg = appendStr(t("main.opt.failure"), "=>", e);
        if (hideTip !== true) {
          ElMessage.error(errmsg);
        }
        logger.error(errmsg);
      }
      slugData.isSlugLoading = false;
      logger.debug("\u751F\u6210\u522B\u540D\u7ED3\u675F.");
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
      logger.debug("\u6807\u9898\u5904\u7406\u5B8C\u6BD5");
      slugData.title = fmtTitle;
      const slugKey = SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY;
      slugData.customSlug = siyuanData.meta[slugKey];
      logger.debug("initSlug=>", slugData);
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
  const logger = LogFactory.getLogger("composables/publish/makeYamlCom.ts");
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
    doConvertAttrToYAML: (yamlConverter, postForm, githubCfg) => {
      if (!yamlConverter) {
        yamlConverter = new YamlConvertAdaptor();
        logger.error("\u672A\u6307\u5B9AYAML\u8F6C\u6362\u5668");
      }
      const yamlFormatObj = yamlConverter.convertToYaml(postForm, githubCfg);
      yamlData.yamlObj = yamlFormatObj.yamlObj;
      yamlData.formatter = yamlFormatObj.formatter;
      yamlData.mdContent = yamlFormatObj.mdContent;
      yamlData.mdFullContent = yamlFormatObj.formatter + "\n\n" + yamlFormatObj.mdContent;
      yamlData.htmlContent = yamlFormatObj.htmlContent;
    },
    doConvertYAMLToAttr: (yamlConverter, yamlFormatObj, githubCfg) => {
      if (!yamlConverter) {
        yamlConverter = new YamlConvertAdaptor();
        logger.error("\u672A\u6307\u5B9AYAML\u8F6C\u6362\u5668");
      }
      const postForm = yamlConverter.convertToAttr(yamlFormatObj, githubCfg);
      logger.debug("doConvertYAMLToAttr\u8F6C\u6362\u4E2D\u8F6C\u6570\u636EpostForm=>", postForm);
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
  const logger = LogFactory.getLogger("composables/publish/publishActionCom.ts");
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
      logger.debug("\u51C6\u5907\u53D1\u5E03\u6587\u7AE0...");
      publishData.isPublishLoading = true;
      try {
        const githubCfg = getJSONConf(props.apiType);
        const api = new API(props.apiType);
        const mdTitle = githubPagesMethods.getGithubPagesData().mdTitle;
        let fmtTitle = removeTitleNumber(mdTitle);
        fmtTitle = fmtTitle.replace(/\.md/g, "");
        if (/[\s*|\\.]/g.test(fmtTitle)) {
          logger.debug("fmtTitle=>", fmtTitle);
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
        const isOk = githubCfg.apiStatus;
        if (!isOk && githubPagesMethods.getGithubPagesData().githubEnabled) {
          publishData.isPublishLoading = false;
          ElMessage.error("\u68C0\u6D4B\u5230api\u4E0D\u53EF\u7528\u6216\u8005\u914D\u7F6E\u9519\u8BEF\uFF0C\u65E0\u6CD5\u53D1\u5E03\u5230Github\uFF0C\u8BF7\u8F6C\u5230\u6E90\u7801\u6A21\u5F0F\u81EA\u884C\u590D\u5236\u6587\u672C");
          return;
        } else if (isOk && githubPagesMethods.getGithubPagesData().githubEnabled) {
          logger.debug("\u5F00\u59CB\u771F\u6B63\u8C03\u7528api\u53D1\u5E03\u5230Github");
          let currentPath = githubPagesMethods.getGithubPagesData().customPath;
          const currentDefaultPath = (_a = githubCfg.defaultPath) != null ? _a : "\u5C1A\u672A\u914D\u7F6E";
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
          logger.debug("\u5373\u5C06\u53D1\u5E03\u7684\u5185\u5BB9\uFF0CpublishContent=>", {
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
            [githubCfg.posidKey]: docPath
          };
          const pageId = await siyuanPageMethods.getPageId();
          await siyuanApi.setBlockAttrs(pageId, customAttr);
          logger.debug(props.apiType + "_Main\u53D1\u5E03\u6210\u529F\uFF0C\u4FDD\u5B58\u8DEF\u5F84,meta=>", customAttr);
          await initPublishMethods.initPage();
          publishData.isPublishLoading = false;
        }
        logger.debug("\u6587\u7AE0\u53D1\u5E03\u5B8C\u6210.");
        if (initPublishMethods.getInitPublishData().isPublished) {
          ElMessage.success(t("main.opt.status.updated"));
        } else {
          ElMessage.success(t("main.opt.status.publish"));
        }
      } catch (e) {
        try {
          await publishMethods.doCancel(false);
        } catch (e2) {
          logger.error("\u5F3A\u5236\u5220\u9664\u5F02\u5E38\uFF0C\u4E0D\u5F71\u54CD\u53D1\u5E03=>", e2);
        }
        const errmsg = appendStr(t("main.opt.failure"), "=>\u53D1\u5E03\u5F02\u5E38\uFF0C\u53EF\u80FD\u662FGithub\u5E73\u53F0\u5DF2\u81EA\u884C\u5220\u9664\u3002\u5DF2\u6E05\u9664\u5173\u8054\uFF0C\u8BF7\u91CD\u65B0\u53D1\u5E03", e);
        ElMessage.error(errmsg);
        logger.error(errmsg);
      }
      publishData.isPublishLoading = false;
    },
    cancelPublish: async () => {
      logger.debug("\u51C6\u5907\u53D6\u6D88\u6587\u7AE0\u53D1\u5E03...");
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
          logger.error(t("main.opt.failure") + "=>" + e);
        }
        publishData.isCancelLoading = false;
      });
    },
    doCancel: async (isInit) => {
      const githubCfg = getJSONConf(props.apiType);
      const api = new API(props.apiType);
      const docPath = githubPagesMethods.getGithubPagesData().publishPath;
      logger.debug("\u51C6\u5907\u53D6\u6D88\u53D1\u5E03\uFF0CdocPath=>", docPath);
      try {
        await api.deletePost(docPath);
      } catch (e) {
        logger.error("\u8C03\u7528Github\u5E73\u53F0\u5220\u9664\u9875\u9762\u5931\u8D25=>", e);
      }
      const customAttr = {
        [githubCfg.posidKey]: ""
      };
      const pageId = await siyuanPageMethods.getPageId();
      await siyuanApi.setBlockAttrs(pageId, customAttr);
      logger.debug(props.apiType + "_Main\u53D6\u6D88\u53D1\u5E03,meta=>", customAttr);
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
  const logger = LogFactory.getLogger("composables/publish/publishQuickCom.ts");
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
        logger.debug("\u4E00\u952E\u751F\u6210\u5C5E\u6027\u5B8C\u6210.");
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
          logger.error(t("main.opt.failure") + "=>" + e);
        }
      });
    },
    doOneclickAttr: async () => {
      await slugMethods.makeSlug(true);
      await descMethods.makeDesc(true);
      await tagMethods.fetchTag(true);
      await quickMethods.saveAttrToSiyuan(true);
      quickData.onclickFlag = true;
      logger.debug("\u53D1\u5E03\u5C5E\u6027\u5B8C\u6210");
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
        logger.error(errmsg);
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
  const logger = LogFactory.getLogger("composables/publish/makeDescCom.ts");
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
      logger.debug("\u51C6\u5907\u751F\u6210\u6458\u8981...");
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
      logger.debug("\u6458\u8981\u751F\u6210\u5B8C\u6BD5.");
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
  const logger = LogFactory.getLogger("composables/publish/siyuanPageCom.ts");
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
        logger.error(t("page.no.id"));
        throw new Error("page.no.id");
      }
      logger.debug("\u5F53\u524D\u9875\u9762ID\u4E3A=>", pageId);
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
  const logger = LogFactory.getLogger("composables/publish/makeTagCom.ts");
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
        logger.debug("genTags=>", genTags);
        const hotTags = jiebaToHotWords(genTags, 5);
        logger.debug("hotTags=>", hotTags);
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
        logger.error(errmsg);
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
  const logger = LogFactory.getLogger("composables/publish/githubPagesCom.ts");
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
        const githubCfg = getJSONConf(props.apiType);
        githubPagesMethods.initGithubPages({
          cpath: (_a = githubCfg.defaultPath) != null ? _a : "",
          defpath: githubPagesData.currentDefaultPath,
          fname: githubPagesData.mdTitle
        });
      }
    },
    customLoad: async (node, resolve) => {
      if (node.isLeaf)
        return resolve([]);
      logger.debug("\u76EE\u524D\u5DF2\u4FDD\u5B58\u8DEF\u5F84=>", githubPagesData.customPath);
      logger.debug("\u5F53\u524D\u8282\u70B9=>", node.data);
      const githubCfg = getJSONConf(props.apiType);
      const api = new GithubApi(githubCfg);
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
      logger.debug("onSelectChange=>", val);
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
      logger.info("\u89E6\u53D1\u6587\u4EF6\u540D\u4FEE\u6539\uFF0C\u540C\u6B65\u53D1\u5E03\u8DEF\u5F84.");
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
      const githubCfg = getJSONConf(props.apiType);
      const slugData = slugMethods.getSlugData();
      const siyuanData = siyuanPageMethods.getSiyuanPageData().dataObj;
      const mdFilenameRule = githubCfg.mdFilenameRule;
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
      logger.debug("paths=>", paths);
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
  const logger = LogFactory.getLogger("composables/publish/initPublishCom.ts");
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
      logger.debug("docPath=>", docPath);
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
      const githubCfg = getJSONConf(props.apiType);
      const postForm = initPublishMethods.composableDataToForm();
      yamlMethods.doConvertAttrToYAML(props.yamlConverter, postForm, githubCfg);
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
        const githubCfg = getJSONConf(props.apiType);
        const formatter = yamlMethods.getYamlData().yamlContent;
        const yamlObj = yaml2Obj(formatter);
        const yamlFormatObj = new YamlFormatObj();
        yamlFormatObj.yamlObj = yamlObj;
        logger.debug("\u51C6\u5907\u5C06YAML\u8F6C\u6362\u4E3A\u6587\u7AE0\u5C5E\u6027\uFF0CyamlFormatObj=>", yamlFormatObj);
        const postForm = yamlMethods.doConvertYAMLToAttr(props.yamlConverter, yamlFormatObj, githubCfg);
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
        const githubCfg = getJSONConf(props.apiType);
        initPublishData.apiStatus = githubCfg.apiStatus;
        const pageId = await getPageId(true, props.pageId);
        if (!pageId || pageId === "") {
          initPublishData.isInitLoading = false;
          logger.error(t("page.no.id"));
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
          docPath = (_a = githubCfg.defaultPath) != null ? _a : "";
        }
        const currentDefaultPath = (_b = githubCfg.defaultPath) != null ? _b : "\u5C1A\u672A\u914D\u7F6E";
        const mdTitle = githubPagesMethods.getMdFilename();
        githubPagesMethods.initGithubPages({
          cpath: docPath,
          defpath: currentDefaultPath,
          fname: mdTitle
        }, siyuanData);
        initPublishMethods.convertAttrToYAML(true);
        if (initPublishData.apiStatus && initPublishData.isPublished) {
          const baseUrl = (_c = githubCfg.baseUrl) != null ? _c : "https://terwer.space/";
          const home = (_d = githubCfg.home) != null ? _d : "https://terwer.space/";
          let mdUrl;
          mdUrl = pathJoin(githubCfg.githubUser, "/" + githubCfg.githubRepo);
          mdUrl = pathJoin(mdUrl, "/blob/");
          mdUrl = pathJoin(mdUrl, "/" + githubCfg.defaultBranch);
          mdUrl = pathJoin(mdUrl, "/" + docPath);
          if (!isEmptyString(githubCfg.previewMdUrl)) {
            mdUrl = githubCfg.previewMdUrl;
            mdUrl = mdUrl.replace(/\[user]/, githubCfg.githubUser);
            mdUrl = mdUrl.replace(/\[repo]/, githubCfg.githubRepo);
            mdUrl = mdUrl.replace(/\[branch]/, githubCfg.defaultBranch);
            mdUrl = mdUrl.replace(/\[docpath]/, docPath);
          }
          mdUrl = pathJoin(baseUrl, mdUrl);
          initPublishData.previewMdUrl = mdUrl;
          initPublishData.mdStatusUrl = appendStr("https://img.shields.io/github/checks-status/", githubCfg.githubUser, "/", githubCfg.githubRepo, "/", githubCfg.defaultBranch, "?label=build");
          let url = yamlMethods.getYamlData().yamlObj.permalink;
          if (!isEmptyString(githubCfg.previewUrl)) {
            if (githubCfg.previewUrl.indexOf("[docpath]") > -1) {
              const defaultPath = (_e = githubCfg.defaultPath) != null ? _e : "docs";
              const prefix = docPath.replace(defaultPath, "").replace(".md", "");
              url = githubCfg.previewUrl.replace("/[docpath]", prefix);
            } else {
              url = githubCfg.previewUrl.replace(/\[postid]/g, slugMethods.getSlugData().customSlug);
              const created = publishTimeMethods.getPublishTime().created;
              const datearr = created.split(" ")[0];
              const numarr = datearr.split("-");
              logger.debug("created numarr=>", numarr);
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
        logger.error(errmsg);
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
const _hoisted_1$3 = {
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
    const logger = LogFactory.getLogger("components/publish/tab/main/GithubMain.vue");
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
      logger.debug(props.apiType + "_Main\u68C0\u6D4B\u5230\u8BBE\u7F6E\u66F4\u65B0\u64CD\u4F5C\uFF0C\u5237\u65B0\u9875\u9762");
    });
    watch(() => props.isMainReload, async () => {
      await initPublishMethods.initPage();
      logger.debug(props.apiType + "_Main\u5DE6\u53F3\u5207\u6362tab\uFF0C\u5237\u65B0\u9875\u9762");
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
          default: withCtx(() => [createBaseVNode("div", _hoisted_1$3, [unref(pageModeData).etype !== unref(PageEditMode).EditMode_source ? (openBlock(), createBlock(_component_el_alert, {
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
const _hoisted_1$2 = {
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
    const logger = LogFactory.getLogger("components/publish/tab/main/MetaweblogMain.vue");
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
      logger.debug("MetaweblogMain\u521D\u59CB\u5316\u9875\u9762,meta=>", siyuanData.meta);
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
      const metaweblogCfg = getJSONConf(props.apiType);
      const api = new API(props.apiType);
      let catData = [];
      if (isPublished.value) {
        const meta = siyuanData.meta;
        formData.postid = meta[metaweblogCfg.posidKey];
        previewUrl.value = await api.getPreviewUrl((_a = formData == null ? void 0 : formData.postid) == null ? void 0 : _a.toString());
        try {
          const post = await api.getPost(formData.postid.toString());
          catData = post.categories;
          logger.debug("postid=>", formData.postid);
          logger.debug("post=>", post);
          logger.debug("\u521D\u59CB\u5316\u9009\u62E9\u8FC7\u7684\u5206\u7C7B,catData=>", catData);
        } catch (e) {
          ElMessage.error(t("post.delete.by.platform"));
          isInitLoading.value = false;
          logger.error("\u6587\u7AE0\u65B0\u83B7\u53D6\u5931\u8D25", e);
        }
      } else {
        logger.warn("\u68C0\u6D4B\u5230\u4E4B\u524D\u53D1\u5E03\u5F02\u5E38\uFF0C\u6E05\u7A7A\u6587\u7AE0ID");
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
        logger.error(t("main.cat.list.error"), e);
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
        logger.debug(t("main.force.refresh.tip"));
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
      logger.debug("page=>", page);
      let fmtTitle = page.content;
      if (fmtTitle.indexOf(".") > -1) {
        fmtTitle = fmtTitle.replace(/\d*\./g, "");
      }
      logger.debug("fmtTitle=>", fmtTitle);
      if (formData.checkList.length > 0) {
        const result = await zhSlugify(fmtTitle);
        logger.debug("result=>", result);
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
      logger.debug("genTags=>", genTags);
      const hotTags = jiebaToHotWords(genTags, 5);
      logger.debug("hotTags=>", hotTags);
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
      logger.debug("MetaweblogMain\u4FDD\u5B58\u5C5E\u6027\u5230\u601D\u6E90\u7B14\u8BB0,meta=>", customAttr);
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
      logger.debug(" formData.categories=>", formData.categories);
    };
    const oneclickAttr = async (hideTip) => {
      isGenLoading.value = true;
      await makeSlug(true);
      await makeDesc(true);
      await fetchTag(true);
      await saveAttrToSiyuan(true);
      logger.debug("\u53D1\u5E03\u5C5E\u6027\u5B8C\u6210");
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
        const metaweblogCfg = getJSONConf(props.apiType);
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
        if (PageType.Html === metaweblogCfg.pageType) {
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
          logger.debug("\u6587\u7AE0\u5DF2\u66F4\u65B0\uFF0Cpostid=>", postid);
        } else {
          postid = await api.newPost(post, publish);
          logger.debug("\u5F53\u524D\u4FDD\u5B58\u7684posidKey=>", metaweblogCfg.posidKey);
          const customAttr = {
            [metaweblogCfg.posidKey]: postid
          };
          await siyuanApi.setBlockAttrs(siyuanData.pageId, customAttr);
          logger.debug("MetaweblogMain\u53D1\u5E03\u6210\u529F\uFF0C\u4FDD\u5B58postid,meta=>", customAttr);
          logger.info("\u6587\u7AE0\u53D1\u5E03\u6210\u529F\uFF0Cpostid=>", postid);
        }
        await initPage();
        ElMessage.success(t("main.opt.success"));
      } catch (e) {
        isPublishLoading.value = false;
        logger.error("\u53D1\u5E03\u5F02\u5E38", e);
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
      const metaweblogCfg = getJSONConf(props.apiType);
      logger.debug("\u51C6\u5907\u53D6\u6D88\u53D1\u5E03\uFF0Cpostid=>", formData.postid);
      const customAttr = {
        [metaweblogCfg.posidKey]: ""
      };
      await siyuanApi.setBlockAttrs(siyuanData.pageId, customAttr);
      logger.debug("MetaweblogMain\u53D6\u6D88\u53D1\u5E03,meta=>", customAttr);
      try {
        const api = new API(props.apiType);
        const flag = await api.deletePost(formData.postid);
        if (!flag) {
          ElMessage.error("\u6587\u7AE0\u5220\u9664\u5931\u8D25");
        }
      } catch (e) {
        logger.error("\u5F3A\u884C\u5220\u9664\u4E00\u6B21", e);
      }
      if (isInit) {
        await initPage();
      }
    };
    watch(() => props.isReload, async () => {
      await initPage();
      logger.debug(props.apiType + "_Main\u68C0\u6D4B\u5230\u8BBE\u7F6E\u66F4\u65B0\u64CD\u4F5C\uFF0C\u5237\u65B0\u9875\u9762");
    });
    watch(() => props.isMainReload, async () => {
      await initPage();
      logger.debug(props.apiType + "_Main\u5DE6\u53F3\u5207\u6362tab\uFF0C\u5237\u65B0\u9875\u9762");
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
const _hoisted_1$1 = {
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
    const logger = LogFactory.getLogger("components/publish/tab/main/CommonBlogMain.vue");
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
        logger.error("\u9875\u9762\u4FE1\u606F\u83B7\u53D6\u5931\u8D25", e);
        throw new Error("\u9875\u9762\u4FE1\u606F\u83B7\u53D6\u5931\u8D25");
      }
      if (!page) {
        isInitLoading.value = false;
        ElMessage.error(t("config.error.msg") + "_" + props.apiType);
        throw new Error(t("config.error.msg") + "_" + props.apiType);
      }
      logger.debug("CommonblogMain\u521D\u59CB\u5316\u9875\u9762,meta=>", siyuanData.meta);
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
            logger.debug("postid=>", formData.postid);
            logger.debug("post=>", post);
            logger.debug("\u521D\u59CB\u5316\u9009\u62E9\u8FC7\u7684\u5206\u7C7B,catData=>", catData);
          } catch (e) {
            ElMessage.error(t("post.delete.by.platform"));
            isInitLoading.value = false;
            logger.error("\u5E73\u53F0\u6587\u7AE0\u65B0\u83B7\u53D6\u5931\u8D25", e);
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
          logger.error(t("main.cat.list.error"), e);
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
        logger.debug(t("main.force.refresh.tip"));
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
      logger.debug("page=>", page);
      let fmtTitle = page.content;
      if (fmtTitle.indexOf(".") > -1) {
        fmtTitle = fmtTitle.replace(/\d*\./g, "");
      }
      logger.debug("fmtTitle=>", fmtTitle);
      if (formData.checkList.length > 0) {
        const result = await zhSlugify(fmtTitle);
        logger.debug("result=>", result);
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
      logger.debug("genTags=>", genTags);
      const hotTags = jiebaToHotWords(genTags, 5);
      logger.debug("hotTags=>", hotTags);
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
      logger.debug("val=>", val);
      const conf = getJSONConf(props.apiType);
      const cats = [];
      const catSlugs = [];
      cats.push(val.label);
      formData.categories = cats;
      catSlugs.push(conf.username + "/" + val.value);
      formData.cat_slugs = catSlugs;
      blogName.value = val.label;
      logger.debug(" formData.categories=>", formData.categories);
      logger.debug(" formData.cat_slugs=>", formData.cat_slugs);
    };
    const saveAttrToSiyuan = async (hideTip) => {
      const customAttr = {
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY]: formData.customSlug,
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY]: formData.desc,
        tags: formData.tag.dynamicTags.join(",")
      };
      await siyuanApi.setBlockAttrs(siyuanData.pageId, customAttr);
      logger.debug("CommonblogMain\u4FDD\u5B58\u5C5E\u6027\u5230\u601D\u6E90\u7B14\u8BB0,meta=>", customAttr);
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
      logger.debug("\u53D1\u5E03\u5C5E\u6027\u5B8C\u6210");
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
      logger.debug("checkLimit lastmodKey=>", lastmodKey);
      logger.debug("checkLimit lastmodDate=>", lastmodDate);
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
        logger.debug("\u9A8C\u8BC1\u901A\u8FC7\uFF0C\u66F4\u65B0\u53D1\u5E03\u65F6\u95F4");
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
          logger.debug("\u6587\u7AE0\u5DF2\u66F4\u65B0\uFF0Cpostid=>", postid);
        } else {
          postid = await api.newPost(post, publish);
          if (post.cate_slugs && post.cate_slugs.length > 0) {
            const repo = post.cate_slugs[0];
            postid = postid + "_" + repo;
          }
          logger.debug("\u5F53\u524D\u4FDD\u5B58\u7684posidKey=>", commonblogCfg.posidKey);
          const customAttr = {
            [commonblogCfg.posidKey || ""]: postid
          };
          await siyuanApi.setBlockAttrs(siyuanData.pageId, customAttr);
          logger.debug("CommonblogMain\u53D1\u5E03\u6210\u529F\uFF0C\u4FDD\u5B58postid,meta=>", customAttr);
          logger.debug("\u6587\u7AE0\u53D1\u5E03\u6210\u529F\uFF0Cpostid=>", postid);
        }
        await initPage();
        if (isPublished.value) {
          ElMessage.success(t("main.opt.status.updated"));
        } else {
          ElMessage.success(t("main.opt.status.publish"));
        }
      } catch (e) {
        isPublishLoading.value = false;
        logger.error("\u53D1\u5E03\u5F02\u5E38", e);
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
      logger.debug("\u51C6\u5907\u53D6\u6D88\u53D1\u5E03\uFF0Cpostid=>", formData.postid);
      const customAttr = {
        [commonblogCfg.posidKey || ""]: ""
      };
      await siyuanApi.setBlockAttrs(siyuanData.pageId, customAttr);
      logger.debug("MetaweblogMain\u53D6\u6D88\u53D1\u5E03,meta=>", customAttr);
      try {
        const api = new API(props.apiType);
        const flag = await api.deletePost(formData.postid);
        if (!flag) {
          ElMessage.error("\u6587\u7AE0\u5220\u9664\u5931\u8D25");
          throw new Error("\u6587\u7AE0\u5220\u9664\u5931\u8D25");
        }
      } catch (e) {
        logger.error("\u5F3A\u884C\u5220\u9664\u4E00\u6B21", e);
      }
      if (isInit) {
        await initPage();
      }
    };
    watch(() => props.isReload, async () => {
      await initPage();
      logger.debug(props.apiType + "_Main\u68C0\u6D4B\u5230\u8BBE\u7F6E\u66F4\u65B0\u64CD\u4F5C\uFF0C\u5237\u65B0\u9875\u9762");
    });
    watch(() => props.isMainReload, async () => {
      await initPage();
      logger.debug(props.apiType + "_Main\u5DE6\u53F3\u5207\u6362tab\uFF0C\u5237\u65B0\u9875\u9762");
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
            default: withCtx(() => [createBaseVNode("div", _hoisted_1$1, [createVNode(_component_el_form_item, {
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
const _hoisted_1 = {
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
    const logger = LogFactory.getLogger("components/publish/tab/PlatformMain.vue");
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
      logger.debug("dynamicJsonCfg=>", JSON.stringify(dynamicJsonCfg));
      logger.debug("\u5E73\u53F0\u8BBE\u7F6E\u521D\u59CB\u5316");
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
      })) : (openBlock(), createElementBlock("div", _hoisted_1, [createVNode(_component_el_alert, {
        class: "top-version-tip",
        title: _ctx.$t("config.platform.none"),
        type: "error",
        closable: false
      }, null, 8, ["title"])]));
    };
  }
});
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
    const logger = LogFactory.getLogger("components/publish/PublishService.vue");
    const defaultTab = ref("platform-main");
    const isReloadServiceTab = ref(false);
    const serviceTabChange = (name) => {
      const paneName = name.paneName;
      logger.debug("serviceTabChange=>", paneName);
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
          default: withCtx(() => [createVNode(PicgoSetting)]),
          _: 1
        }, 8, ["label"])]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
});
const PublishService_vue_vue_type_style_index_0_scoped_eec62261_lang = "";
const PublishService = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-eec62261"]]);
export {
  PublishService as P
};
