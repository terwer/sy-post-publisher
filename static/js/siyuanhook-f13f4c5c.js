console.warn("\u4ECE0.6.8+\u5F00\u59CB\uFF0Csiyuanhook.js\u5C06\u4F5C\u4E3A\u7EDF\u4E00\u7684hook\u5165\u53E3\u3002");
const isSiyuanWidget = () => {
  return window.frameElement != null && window.frameElement.parentElement != null && window.frameElement.parentElement.parentElement != null && window.frameElement.parentElement.parentElement.getAttribute(
    "data-node-id"
  ) !== "";
};
const isSiyuanNewWin = () => {
  return typeof window.terwer !== "undefined";
};
const init = () => {
  const isElectron = /Electron/.test(navigator.userAgent);
  if (!isElectron) {
    console.warn("\u4E0D\u5728Electron\u73AF\u5883\u4E2D\uFF0C\u63D2\u69FD\u83DC\u5355\u3001JsonLocalStorage\u7B49\u5C06\u4E0D\u53EF\u7528");
    return;
  }
  if (isSiyuanWidget()) {
    const slotLibPath = `${parent.window.siyuan.config.system.dataDir}/widgets/sy-post-publisher/lib/siyuan/silot.js`;
    console.log("iframe\u6302\u4EF6\u5C06\u8981\u4ECE\u4EE5\u4E0B\u4F4D\u7F6E\u5F15\u5165\u63D2\u69FD", slotLibPath);
    const initSlot = parent.window.require(slotLibPath);
    initSlot();
    const publishHelperLibPath = `${parent.window.siyuan.config.system.dataDir}/widgets/sy-post-publisher/lib/siyuan/publish-helper.js`;
    console.log(
      "iframe\u6302\u4EF6\u5C06\u8981\u4ECE\u4EE5\u4E0B\u4F4D\u7F6E\u5F15\u5165\u53D1\u5E03\u8F85\u52A9\u529F\u80FD",
      publishHelperLibPath
    );
    const initPublishHelper = parent.window.require(publishHelperLibPath);
    initPublishHelper();
    const jsonLocalstorageLibPath = `${parent.window.siyuan.config.system.dataDir}/widgets/sy-post-publisher/lib/json-localstorage/json-localstorage.js`;
    console.log(
      "iframe\u6302\u4EF6\u5C06\u8981\u4ECE\u4EE5\u4E0B\u4F4D\u7F6E\u5F15\u5165json-localstorage",
      jsonLocalstorageLibPath
    );
    const LocalStorage = parent.window.require(jsonLocalstorageLibPath);
    LocalStorage.init("../../../../storage/syp/");
  } else {
    if (isSiyuanNewWin()) {
      const jsonLocalstorageLibPath = `${window.terwer.dataDir}/widgets/sy-post-publisher/lib/json-localstorage/json-localstorage.js`;
      console.log(
        "\u81EA\u5B9A\u4E49js\u7247\u6BB5\u5C06\u8981\u4ECE\u4EE5\u4E0B\u4F4D\u7F6E\u5F15\u5165json-localstorage",
        jsonLocalstorageLibPath
      );
      const LocalStorage = window.require(jsonLocalstorageLibPath);
      LocalStorage.init("../../../../storage/syp/");
    } else {
      const slotLibPath = `${window.siyuan.config.system.dataDir}/widgets/sy-post-publisher/lib/siyuan/silot.js`;
      console.log("\u81EA\u5B9A\u4E49js\u7247\u6BB5\u5C06\u8981\u4ECE\u4EE5\u4E0B\u4F4D\u7F6E\u5F15\u5165\u63D2\u69FD", slotLibPath);
      const initSlot = window.require(slotLibPath);
      initSlot();
      const publishHelperLibPath = `${window.siyuan.config.system.dataDir}/widgets/sy-post-publisher/lib/siyuan/publish-helper.js`;
      console.log(
        "\u81EA\u5B9A\u4E49js\u7247\u6BB5\u5C06\u8981\u4ECE\u4EE5\u4E0B\u4F4D\u7F6E\u5F15\u5165\u53D1\u5E03\u8F85\u52A9\u529F\u80FD",
        publishHelperLibPath
      );
      const initPublishHelper = window.require(publishHelperLibPath);
      initPublishHelper();
      const jsonLocalstorageLibPath = `${parent.window.siyuan.config.system.dataDir}/widgets/sy-post-publisher/lib/json-localstorage/json-localstorage.js`;
      console.log(
        "\u81EA\u5B9A\u4E49js\u7247\u6BB5\u5C06\u8981\u4ECE\u4EE5\u4E0B\u4F4D\u7F6E\u5F15\u5165json-localstorage",
        jsonLocalstorageLibPath
      );
      const LocalStorage = window.require(jsonLocalstorageLibPath);
      LocalStorage.init("../../../../storage/syp/");
    }
  }
};
init();
