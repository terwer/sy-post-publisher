console.warn("\u4ECE0.6.8+\u5F00\u59CB\uFF0Csiyuanhook.js\u5C06\u4F5C\u4E3A\u7EDF\u4E00\u7684hook\u5165\u53E3\u3002");
/Electron/.test(navigator.userAgent);
const isSiyuanWidget = () => {
  return window.frameElement != null && window.frameElement.parentElement != null && window.frameElement.parentElement.parentElement != null && window.frameElement.parentElement.parentElement.getAttribute(
    "data-node-id"
  ) !== "";
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
  var _a;
  return (_a = window.terwer.dataDir) != null ? _a : "/notfound";
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
  console.log(entryName + "\u5C06\u8981\u4ECE\u4EE5\u4E0B\u4F4D\u7F6E\u5F15\u5165" + alias, libpath);
  return syWin.require(libpath);
};
const initMethods = {
  initLocalStorageMethod: (entryName) => {
    const syWin = getSiyuanWindow();
    const dataDir = getSiyuanDataDir();
    if (syWin.JsonLocalStorage) {
      console.warn("JsonLocalStorage\u5DF2\u6302\u8F7D\uFF0C\u5FFD\u7565", entryName);
      return;
    }
    const LocalStorage = requireLib(
      entryName,
      `${dataDir}/widgets/sy-post-publisher/lib/json-localstorage/json-localstorage.js`,
      "json-localstorage"
    );
    LocalStorage.init("../../../../storage/syp/");
  },
  initSlotMethod: (entryName) => {
    const dataDir = getSiyuanDataDir();
    const initSlot = requireLib(
      entryName,
      `${dataDir}/widgets/sy-post-publisher/lib/siyuan/silot.js`,
      "\u63D2\u69FD"
    );
    initSlot();
  },
  initThemeAdaptor: (entryName) => {
    const syWin = getSiyuanWindow();
    const dataDir = getSiyuanDataDir();
    if (syWin.customstyle) {
      console.warn("customstyle\u5DF2\u6302\u8F7D\uFF0C\u5FFD\u7565", entryName);
      return;
    }
    const initTheme = requireLib(
      entryName,
      `${dataDir}/widgets/sy-post-publisher/lib/siyuan/theme.js`,
      "\u81EA\u5B9A\u4E49\u4E3B\u9898\u7247\u6BB5"
    );
    setTimeout(initTheme, 3e3);
  },
  initPublishHelper: (entryName) => {
    const syWin = getSiyuanWindow();
    const dataDir = getSiyuanDataDir();
    if (syWin.syp) {
      console.warn("syp\u5DF2\u6302\u8F7D\uFF0C\u5FFD\u7565", entryName);
      return;
    }
    const initPublishHelper = requireLib(
      entryName,
      `${dataDir}/widgets/sy-post-publisher/lib/siyuan/publish-helper.js`,
      "\u53D1\u5E03\u8F85\u52A9\u529F\u80FD"
    );
    initPublishHelper();
  },
  initPicgoExtension: (entryName) => {
    const syWin = getSiyuanWindow();
    const dataDir = getSiyuanDataDir();
    console.log("initPicgoExtension=>", dataDir);
    console.log("syWin=>", syWin);
    if (syWin.SyPicgo) {
      console.warn("SyPicgo\u5DF2\u6302\u8F7D\uFF0C\u5FFD\u7565", entryName);
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
    const picgo_cfg_folder_070 = picgoExtension.joinPath(
      appDataFolder,
      "sy-picgo"
    );
    const picgo_cfg_070 = "picgo.cfg.json";
    picgoExtension.upgradeCfg(
      picgo_cfg_067,
      picgo_cfg_folder_070,
      picgo_cfg_070
    );
    console.warn("PicGO\u914D\u7F6E\u6587\u4EF6\u521D\u59CB\u5316\u4E3A=>", picgo_cfg_070);
    const syPicgo = picgoExtension.initPicgo(picgo_cfg_070);
    syWin.SyPicgo = syPicgo;
    console.log("syPicgo=>", syPicgo);
  },
  initCmder: (entryName) => {
    const syWin = getSiyuanWindow();
    const dataDir = getSiyuanDataDir();
    if (syWin.SyCmd) {
      console.warn("SyCmd\u5DF2\u6302\u8F7D\uFF0C\u5FFD\u7565", entryName);
      return;
    }
    const syCmd = requireLib(
      entryName,
      `${dataDir}/widgets/sy-post-publisher/lib/cmd/syCmd.js`,
      "sy-cmd"
    );
    syWin.SyCmd = syCmd;
    console.log("syCmd=>", syCmd);
  }
};
const initIframeWidaget = () => {
  initMethods.initLocalStorageMethod("iframe\u6302\u4EF6");
  initMethods.initThemeAdaptor("iframe\u6302\u4EF6");
  initMethods.initPublishHelper("iframe\u6302\u4EF6");
  initMethods.initPicgoExtension("iframe\u6302\u4EF6");
  initMethods.initCmder("iframe\u6302\u4EF6");
};
const initSiyuanNewWin = () => {
  initMethods.initLocalStorageMethod("\u601D\u6E90\u7B14\u8BB0\u65B0\u7A97\u53E3");
  initMethods.initPublishHelper("\u601D\u6E90\u7B14\u8BB0\u65B0\u7A97\u53E3");
  initMethods.initPicgoExtension("\u601D\u6E90\u7B14\u8BB0\u65B0\u7A97\u53E3");
  initMethods.initCmder("\u601D\u6E90\u7B14\u8BB0\u65B0\u7A97\u53E3");
};
const initJsCode = () => {
  initMethods.initLocalStorageMethod("\u81EA\u5B9A\u4E49js\u7247\u6BB5");
  initMethods.initSlotMethod("\u81EA\u5B9A\u4E49js\u7247\u6BB5");
  initMethods.initThemeAdaptor("\u81EA\u5B9A\u4E49js\u7247\u6BB5");
  initMethods.initPublishHelper("\u81EA\u5B9A\u4E49js\u7247\u6BB5");
  initMethods.initPicgoExtension("\u81EA\u5B9A\u4E49js\u7247\u6BB5");
  initMethods.initCmder("\u81EA\u5B9A\u4E49js\u7247\u6BB5");
};
const init = () => {
  const isElectron = /Electron/.test(navigator.userAgent);
  if (!isElectron) {
    console.warn("\u4E0D\u5728Electron\u73AF\u5883\u4E2D\uFF0C\u63D2\u69FD\u83DC\u5355\u3001JsonLocalStorage\u7B49\u5C06\u4E0D\u53EF\u7528");
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
  init();
} catch (e) {
  console.warn(
    "\u521D\u59CB\u5316siyuanhook\u5931\u8D25\uFF0C\u53EF\u80FD\u5BFC\u81F4\u6269\u5C55\u529F\u80FD\u65E0\u6CD5\u4F7F\u7528\uFF0C\u8BF7\u77E5\u6089\u3002\u9519\u8BEF\u4FE1\u606F\u5982\u4E0B",
    e
  );
}
export {
  getSiyuanDataDir
};
