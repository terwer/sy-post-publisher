const isSiyuanWidget = () => {
  return window.frameElement != null && window.frameElement.parentElement != null && window.frameElement.parentElement.parentElement != null && window.frameElement.parentElement.parentElement.getAttribute("data-node-id") !== "";
};
const isSiyuanNewWin = () => {
  return typeof window.terwer !== "undefined";
};
const getSiyuanWindow = () => {
  if (isSiyuanWidget()) {
    return parent.window;
  } else {
    if (isSiyuanNewWin()) {
      return window;
    }
    return window;
  }
};
const getSiyuanNewWinDataDir = () => {
  return window.terwer.dataDir ?? "/notfound";
};
const getSiyuanDataDir = () => {
  const syWin = getSiyuanWindow();
  if (isSiyuanWidget()) {
    return syWin.siyuan.config.system.dataDir;
  } else {
    if (isSiyuanNewWin()) {
      return getSiyuanNewWinDataDir();
    } else {
      return syWin.siyuan.config.system.dataDir;
    }
  }
};
const requireLib = (entryName, libpath, alias) => {
  const syWin = getSiyuanWindow();
  console.log(entryName + "将要从以下位置引入" + alias, libpath);
  return syWin.require(libpath);
};
const initMethods = {
  /**
   * 初始化 sy-post-publisher 配置文件存储，适用于【iframe挂件模式】、【新窗口模式】以及【js片段模式】
   */
  initLocalStorageMethod: (entryName) => {
    const syWin = getSiyuanWindow();
    const dataDir = getSiyuanDataDir();
    if (syWin.JsonLocalStorage) {
      console.warn("JsonLocalStorage已挂载，忽略", entryName);
      return;
    }
    const LocalStorage = requireLib(
      entryName,
      `${dataDir}/widgets/sy-post-publisher/lib/json-localstorage/json-localstorage.js`,
      "json-localstorage"
    );
    LocalStorage.init("../../../../storage/syp/");
  },
  /**
   * 初始化插槽，仅【iframe挂件模式】、【自定义js片段模式】可用
   * @param entryName 入口名称
   */
  initSlotMethod: (entryName) => {
    const dataDir = getSiyuanDataDir();
    const initSlot = requireLib(entryName, `${dataDir}/widgets/sy-post-publisher/lib/siyuan/silot.js`, "插槽");
    initSlot();
  },
  /**
   * 初始化主题适配，仅【iframe挂件模式】、【自定义js片段模式】可用
   * @param entryName 入口名称
   */
  initThemeAdaptor: (entryName) => {
    const syWin = getSiyuanWindow();
    const dataDir = getSiyuanDataDir();
    if (syWin.customstyle) {
      console.warn("customstyle已挂载，忽略", entryName);
      return;
    }
    const initTheme = requireLib(
      entryName,
      `${dataDir}/widgets/sy-post-publisher/lib/siyuan/theme.js`,
      "自定义主题片段"
    );
    setTimeout(initTheme, 3e3);
  },
  /**
   * 初始化初始化发布辅助功能，仅【iframe挂件模式】、【自定义js片段模式】可用
   * @param entryName 入口名称
   */
  initPublishHelper: (entryName) => {
    const syWin = getSiyuanWindow();
    const dataDir = getSiyuanDataDir();
    if (syWin.syp) {
      console.warn("syp已挂载，忽略", entryName);
      return;
    }
    const initPublishHelper = requireLib(
      entryName,
      `${dataDir}/widgets/sy-post-publisher/lib/siyuan/publish-helper.js`,
      "发布辅助功能"
    );
    initPublishHelper();
  },
  /**
   * 初始化 PicGO 配置，适用于【iframe挂件模式】、【新窗口模式】以及【js片段模式】
   * @param entryName 入口名称
   */
  initPicgoExtension: (entryName) => {
    const syWin = getSiyuanWindow();
    const dataDir = getSiyuanDataDir();
    if (syWin.SyPicgo) {
      console.warn("SyPicgo已挂载，忽略", entryName);
      return;
    }
    const picgoExtension = requireLib(
      entryName,
      `${dataDir}/widgets/sy-post-publisher/lib/picgo/syPicgo.js`,
      "sy-picgo"
    ).default;
    const appDataFolder = picgoExtension.getCrossPlatformAppDataFolder();
    console.log("appDataFolder=>", appDataFolder);
    const picgo_cfg_067 = `${dataDir}/widgets/sy-post-publisher/lib/picgo/picgo.cfg.json`;
    const picgo_cfg_folder_070 = picgoExtension.joinPath(appDataFolder, "sy-picgo");
    const picgo_cfg_070_file = "picgo.cfg.json";
    const picgo_cfg_070 = picgoExtension.joinPath(picgo_cfg_folder_070, picgo_cfg_070_file);
    picgoExtension.upgradeCfg(picgo_cfg_067, picgo_cfg_folder_070, picgo_cfg_070_file);
    console.warn("PicGO配置文件初始化为=>", picgo_cfg_070);
    const syPicgo = picgoExtension.initPicgo(picgo_cfg_070);
    syWin.SyPicgo = syPicgo;
    console.log("syPicgo=>", syPicgo);
  },
  /**
   * 初始化 SyCmd 配置，适用于【iframe挂件模式】、【新窗口模式】以及【js片段模式】
   * @param entryName 入口名称
   */
  initCmder: (entryName) => {
    const syWin = getSiyuanWindow();
    const dataDir = getSiyuanDataDir();
    if (syWin.SyCmd) {
      console.warn("SyCmd已挂载，忽略", entryName);
      return;
    }
    const syCmd = requireLib(entryName, `${dataDir}/widgets/sy-post-publisher/lib/cmd/syCmd.js`, "sy-cmd");
    syWin.SyCmd = syCmd;
    console.log("syCmd=>", syCmd);
  }
};
const initIframeWidaget = () => {
  initMethods.initLocalStorageMethod("iframe挂件");
  initMethods.initThemeAdaptor("iframe挂件");
  initMethods.initPublishHelper("iframe挂件");
  initMethods.initPicgoExtension("iframe挂件");
  initMethods.initCmder("iframe挂件");
};
const initSiyuanNewWin = () => {
  initMethods.initLocalStorageMethod("思源笔记新窗口");
  initMethods.initPublishHelper("思源笔记新窗口");
  initMethods.initPicgoExtension("思源笔记新窗口");
  initMethods.initCmder("思源笔记新窗口");
};
const initJsCode = () => {
  initMethods.initLocalStorageMethod("自定义js片段");
  initMethods.initSlotMethod("自定义js片段");
  initMethods.initThemeAdaptor("自定义js片段");
  initMethods.initPublishHelper("自定义js片段");
  initMethods.initPicgoExtension("自定义js片段");
  initMethods.initCmder("自定义js片段");
};
const init = () => {
  const isElectron = /Electron/.test(navigator.userAgent);
  if (!isElectron) {
    console.warn("不在Electron环境中，插槽菜单、JsonLocalStorage等将不可用");
    return;
  }
  if (isSiyuanWidget()) {
    initIframeWidaget();
  } else {
    if (isSiyuanNewWin()) {
      initSiyuanNewWin();
    } else {
      initJsCode();
    }
  }
};
try {
  console.warn(
    "从 0.6.8+ 开始，siyuanhook.js 将作为挂件统一的 hook 入口。当前 siyuanhook.js 源码已迁移至：https://github.com/terwer/siyuan-plugin-publisher/tree/main/libs/siyuan-hook 统一管理。"
  );
  init();
} catch (e) {
  console.warn("初始化siyuanhook失败，可能导致扩展功能无法使用，请知悉。错误信息如下", e);
}
