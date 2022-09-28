var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { j as effectScope, r as ref, m as markRaw, w as watch, k as reactive, n as isRef, p as isReactive, t as toRaw, q as getCurrentInstance, s as onUnmounted, u as nextTick, v as inject, x as toRefs, y as computed, z as getBooleanConf, A as getDynamicJsonCfg, B as getConf, d as defineComponent, C as useI18n, o as onMounted, D as resolveComponent, b as openBlock, E as createBlock, F as withCtx, a as createVNode, G as unref, c as createElementBlock, H as renderList, I as Fragment, J as createBaseVNode, K as createCommentVNode, L as setBooleanConf, l as logUtil, M as createTextVNode, N as toDisplayString, O as getJSONConf, P as API, Q as setJSONConf, R as ElMessage, S as isEmptyObject, T as API_TYPE_CONSTANTS, U as browser$1, V as commonjsGlobal, W as getDefaultExportFromCjs, X as gBase64, Y as onBeforeMount, Z as formatIsoToZhDate, _ as _export_sfc, $ as DynamicConfig, a0 as getPageId, a1 as getPageAttrs, a2 as setPageAttrs, a3 as withDirectives, a4 as vShow, a5 as isEmptyString, a6 as getPage, a7 as formatNumToZhDate, a8 as getPageMd, a9 as removeMdWidgetTag, aa as getPublishStatus, ab as getApiParams, ac as covertStringToDate, ad as obj2yaml, ae as withKeys, af as zhSlugify, ag as pingyinSlugify, ah as mdToPlainText, ai as parseHtml, aj as cutWords, ak as jiebaToHotWords, al as yaml2Obj, am as ElMessageBox, an as CONSTANTS, ao as removeTitleNumber, ap as removeWidgetTag, aq as mdToHtml, ar as Post, as as PlantformType, at as checkKeyExists, au as setDynamicJsonCfg, av as reloadPage, aw as _sfc_main$q } from "./css-vars-c55e66ec.js";
var isVue2 = false;
const SWITCH_VUEPRESS_KEY = "switch-vuepress";
const SWITCH_JVUE_KEY = "switch-jvue";
const SWITCH_CONF_KEY = "switch-conf";
const SWITCH_CNBLOGS_KEY = "switch-cnblogs";
const SWITCH_WORDPRESS_KEY = "switch-wordpress";
const SWITCH_LIANDI_KEY = "switch-liandi";
const SWITCH_YUQUE_KEY = "switch-yuque";
const SWITCH_KMS_KEY = "switch-kms";
const SWITCH_CONSTSNTS = {
  SWITCH_VUEPRESS_KEY,
  SWITCH_JVUE_KEY,
  SWITCH_CONF_KEY,
  SWITCH_CNBLOGS_KEY,
  SWITCH_WORDPRESS_KEY,
  SWITCH_LIANDI_KEY,
  SWITCH_YUQUE_KEY,
  SWITCH_KMS_KEY
};
/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
let activePinia;
const setActivePinia = (pinia) => activePinia = pinia;
const piniaSymbol = Symbol();
function isPlainObject$1(o) {
  return o && typeof o === "object" && Object.prototype.toString.call(o) === "[object Object]" && typeof o.toJSON !== "function";
}
var MutationType;
(function(MutationType2) {
  MutationType2["direct"] = "direct";
  MutationType2["patchObject"] = "patch object";
  MutationType2["patchFunction"] = "patch function";
})(MutationType || (MutationType = {}));
function createPinia() {
  const scope = effectScope(true);
  const state = scope.run(() => ref({}));
  let _p = [];
  let toBeInstalled = [];
  const pinia = markRaw({
    install(app) {
      setActivePinia(pinia);
      {
        pinia._a = app;
        app.provide(piniaSymbol, pinia);
        app.config.globalProperties.$pinia = pinia;
        toBeInstalled.forEach((plugin) => _p.push(plugin));
        toBeInstalled = [];
      }
    },
    use(plugin) {
      if (!this._a && !isVue2) {
        toBeInstalled.push(plugin);
      } else {
        _p.push(plugin);
      }
      return this;
    },
    _p,
    _a: null,
    _e: scope,
    _s: /* @__PURE__ */ new Map(),
    state
  });
  return pinia;
}
const noop = () => {
};
function addSubscription(subscriptions, callback, detached, onCleanup = noop) {
  subscriptions.push(callback);
  const removeSubscription = () => {
    const idx = subscriptions.indexOf(callback);
    if (idx > -1) {
      subscriptions.splice(idx, 1);
      onCleanup();
    }
  };
  if (!detached && getCurrentInstance()) {
    onUnmounted(removeSubscription);
  }
  return removeSubscription;
}
function triggerSubscriptions(subscriptions, ...args) {
  subscriptions.slice().forEach((callback) => {
    callback(...args);
  });
}
function mergeReactiveObjects(target, patchToApply) {
  if (target instanceof Map && patchToApply instanceof Map) {
    patchToApply.forEach((value, key) => target.set(key, value));
  }
  if (target instanceof Set && patchToApply instanceof Set) {
    patchToApply.forEach(target.add, target);
  }
  for (const key in patchToApply) {
    if (!patchToApply.hasOwnProperty(key))
      continue;
    const subPatch = patchToApply[key];
    const targetValue = target[key];
    if (isPlainObject$1(targetValue) && isPlainObject$1(subPatch) && target.hasOwnProperty(key) && !isRef(subPatch) && !isReactive(subPatch)) {
      target[key] = mergeReactiveObjects(targetValue, subPatch);
    } else {
      target[key] = subPatch;
    }
  }
  return target;
}
const skipHydrateSymbol = Symbol();
function shouldHydrate(obj) {
  return !isPlainObject$1(obj) || !obj.hasOwnProperty(skipHydrateSymbol);
}
const { assign } = Object;
function isComputed(o) {
  return !!(isRef(o) && o.effect);
}
function createOptionsStore(id, options, pinia, hot) {
  const { state, actions, getters } = options;
  const initialState = pinia.state.value[id];
  let store;
  function setup() {
    if (!initialState && true) {
      {
        pinia.state.value[id] = state ? state() : {};
      }
    }
    const localState = toRefs(pinia.state.value[id]);
    return assign(localState, actions, Object.keys(getters || {}).reduce((computedGetters, name) => {
      computedGetters[name] = markRaw(computed(() => {
        setActivePinia(pinia);
        const store2 = pinia._s.get(id);
        return getters[name].call(store2, store2);
      }));
      return computedGetters;
    }, {}));
  }
  store = createSetupStore(id, setup, options, pinia, hot, true);
  store.$reset = function $reset() {
    const newState = state ? state() : {};
    this.$patch(($state) => {
      assign($state, newState);
    });
  };
  return store;
}
function createSetupStore($id, setup, options = {}, pinia, hot, isOptionsStore) {
  let scope;
  const optionsForPlugin = assign({ actions: {} }, options);
  const $subscribeOptions = {
    deep: true
  };
  let isListening;
  let isSyncListening;
  let subscriptions = markRaw([]);
  let actionSubscriptions = markRaw([]);
  let debuggerEvents;
  const initialState = pinia.state.value[$id];
  if (!isOptionsStore && !initialState && true) {
    {
      pinia.state.value[$id] = {};
    }
  }
  ref({});
  let activeListener;
  function $patch(partialStateOrMutator) {
    let subscriptionMutation;
    isListening = isSyncListening = false;
    if (typeof partialStateOrMutator === "function") {
      partialStateOrMutator(pinia.state.value[$id]);
      subscriptionMutation = {
        type: MutationType.patchFunction,
        storeId: $id,
        events: debuggerEvents
      };
    } else {
      mergeReactiveObjects(pinia.state.value[$id], partialStateOrMutator);
      subscriptionMutation = {
        type: MutationType.patchObject,
        payload: partialStateOrMutator,
        storeId: $id,
        events: debuggerEvents
      };
    }
    const myListenerId = activeListener = Symbol();
    nextTick().then(() => {
      if (activeListener === myListenerId) {
        isListening = true;
      }
    });
    isSyncListening = true;
    triggerSubscriptions(subscriptions, subscriptionMutation, pinia.state.value[$id]);
  }
  const $reset = noop;
  function $dispose() {
    scope.stop();
    subscriptions = [];
    actionSubscriptions = [];
    pinia._s.delete($id);
  }
  function wrapAction(name, action) {
    return function() {
      setActivePinia(pinia);
      const args = Array.from(arguments);
      const afterCallbackList = [];
      const onErrorCallbackList = [];
      function after(callback) {
        afterCallbackList.push(callback);
      }
      function onError(callback) {
        onErrorCallbackList.push(callback);
      }
      triggerSubscriptions(actionSubscriptions, {
        args,
        name,
        store,
        after,
        onError
      });
      let ret;
      try {
        ret = action.apply(this && this.$id === $id ? this : store, args);
      } catch (error) {
        triggerSubscriptions(onErrorCallbackList, error);
        throw error;
      }
      if (ret instanceof Promise) {
        return ret.then((value) => {
          triggerSubscriptions(afterCallbackList, value);
          return value;
        }).catch((error) => {
          triggerSubscriptions(onErrorCallbackList, error);
          return Promise.reject(error);
        });
      }
      triggerSubscriptions(afterCallbackList, ret);
      return ret;
    };
  }
  const partialStore = {
    _p: pinia,
    $id,
    $onAction: addSubscription.bind(null, actionSubscriptions),
    $patch,
    $reset,
    $subscribe(callback, options2 = {}) {
      const removeSubscription = addSubscription(subscriptions, callback, options2.detached, () => stopWatcher());
      const stopWatcher = scope.run(() => watch(() => pinia.state.value[$id], (state) => {
        if (options2.flush === "sync" ? isSyncListening : isListening) {
          callback({
            storeId: $id,
            type: MutationType.direct,
            events: debuggerEvents
          }, state);
        }
      }, assign({}, $subscribeOptions, options2)));
      return removeSubscription;
    },
    $dispose
  };
  const store = reactive(assign(
    {},
    partialStore
  ));
  pinia._s.set($id, store);
  const setupStore = pinia._e.run(() => {
    scope = effectScope();
    return scope.run(() => setup());
  });
  for (const key in setupStore) {
    const prop = setupStore[key];
    if (isRef(prop) && !isComputed(prop) || isReactive(prop)) {
      if (!isOptionsStore) {
        if (initialState && shouldHydrate(prop)) {
          if (isRef(prop)) {
            prop.value = initialState[key];
          } else {
            mergeReactiveObjects(prop, initialState[key]);
          }
        }
        {
          pinia.state.value[$id][key] = prop;
        }
      }
    } else if (typeof prop === "function") {
      const actionValue = wrapAction(key, prop);
      {
        setupStore[key] = actionValue;
      }
      optionsForPlugin.actions[key] = prop;
    } else
      ;
  }
  {
    assign(store, setupStore);
    assign(toRaw(store), setupStore);
  }
  Object.defineProperty(store, "$state", {
    get: () => pinia.state.value[$id],
    set: (state) => {
      $patch(($state) => {
        assign($state, state);
      });
    }
  });
  pinia._p.forEach((extender) => {
    {
      assign(store, scope.run(() => extender({
        store,
        app: pinia._a,
        pinia,
        options: optionsForPlugin
      })));
    }
  });
  if (initialState && isOptionsStore && options.hydrate) {
    options.hydrate(store.$state, initialState);
  }
  isListening = true;
  isSyncListening = true;
  return store;
}
function defineStore(idOrOptions, setup, setupOptions) {
  let id;
  let options;
  const isSetupStore = typeof setup === "function";
  if (typeof idOrOptions === "string") {
    id = idOrOptions;
    options = isSetupStore ? setupOptions : setup;
  } else {
    options = idOrOptions;
    id = idOrOptions.id;
  }
  function useStore(pinia, hot) {
    const currentInstance = getCurrentInstance();
    pinia = pinia || currentInstance && inject(piniaSymbol);
    if (pinia)
      setActivePinia(pinia);
    pinia = activePinia;
    if (!pinia._s.has(id)) {
      if (isSetupStore) {
        createSetupStore(id, setup, options, pinia);
      } else {
        createOptionsStore(id, options, pinia);
      }
    }
    const store = pinia._s.get(id);
    return store;
  }
  useStore.$id = id;
  return useStore;
}
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
function useTabCount() {
  const tabCountStore = useTabCountStore();
  const vuepressEnabled = ref(false);
  const jvueEnabled = ref(false);
  const confEnabled = ref(false);
  const cnblogsEnabled = ref(false);
  const wordpressEnabled = ref(false);
  const liandiEnabled = ref(false);
  const yuqueEnabled = ref(false);
  const kmsEnabled = ref(false);
  let switchFormData = reactive({
    dynamicConfigArray: []
  });
  function doCount() {
    tabCountStore.resetCount();
    vuepressEnabled.value = getBooleanConf(SWITCH_CONSTSNTS.SWITCH_VUEPRESS_KEY);
    tabCountStore.incrementIf(vuepressEnabled.value);
    jvueEnabled.value = getBooleanConf(SWITCH_CONSTSNTS.SWITCH_JVUE_KEY);
    tabCountStore.incrementIf(jvueEnabled.value);
    confEnabled.value = getBooleanConf(SWITCH_CONSTSNTS.SWITCH_CONF_KEY);
    tabCountStore.incrementIf(confEnabled.value);
    cnblogsEnabled.value = getBooleanConf(SWITCH_CONSTSNTS.SWITCH_CNBLOGS_KEY);
    tabCountStore.incrementIf(cnblogsEnabled.value);
    wordpressEnabled.value = getBooleanConf(SWITCH_CONSTSNTS.SWITCH_WORDPRESS_KEY);
    tabCountStore.incrementIf(wordpressEnabled.value);
    liandiEnabled.value = getBooleanConf(SWITCH_CONSTSNTS.SWITCH_LIANDI_KEY);
    tabCountStore.incrementIf(liandiEnabled.value);
    yuqueEnabled.value = getBooleanConf(SWITCH_CONSTSNTS.SWITCH_YUQUE_KEY);
    tabCountStore.incrementIf(yuqueEnabled.value);
    kmsEnabled.value = getBooleanConf(SWITCH_CONSTSNTS.SWITCH_KMS_KEY);
    tabCountStore.incrementIf(kmsEnabled.value);
    const dynamicJsonCfg = getDynamicJsonCfg();
    const results = dynamicJsonCfg.totalCfg || [];
    switchFormData.dynamicConfigArray = [];
    results.forEach((item) => {
      const switchKey = "switch-" + item.plantformKey;
      const switchValue = getConf(switchKey);
      item.modelValue = item.plantformKey + "_" + switchValue;
      const dynEnabled = switchValue.toLowerCase() === "true";
      tabCountStore.incrementIf(dynEnabled);
      switchFormData.dynamicConfigArray.push(item);
    });
  }
  return {
    tabCountStore,
    vuepressEnabled,
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
}
const _hoisted_1$9 = {
  key: 0
};
const __default__$p = {
  name: "ServiceSwitch"
};
const _sfc_main$p = /* @__PURE__ */ defineComponent({
  ...__default__$p,
  setup(__props) {
    useI18n();
    const {
      tabCountStore,
      vuepressEnabled,
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
    let showSwitchTip = ref(false);
    const vuepressOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTSNTS.SWITCH_VUEPRESS_KEY, val);
      initConf();
    };
    const jvueOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTSNTS.SWITCH_JVUE_KEY, val);
      initConf();
    };
    const confOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTSNTS.SWITCH_CONF_KEY, val);
      initConf();
    };
    const cnblogsOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTSNTS.SWITCH_CNBLOGS_KEY, val);
      initConf();
    };
    const wordpressOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTSNTS.SWITCH_WORDPRESS_KEY, val);
      initConf();
    };
    const liandiOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTSNTS.SWITCH_LIANDI_KEY, val);
      initConf();
    };
    const yuqueOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTSNTS.SWITCH_YUQUE_KEY, val);
      initConf();
    };
    const kmsOnChange = (val) => {
      setBooleanConf(SWITCH_CONSTSNTS.SWITCH_KMS_KEY, val);
      initConf();
    };
    const dynamicOnChange = (val) => {
      logUtil.logWarn("dynamicOnChange,val=>", val);
      const valArr = val.split("_");
      const switchKey = "switch-" + valArr[0];
      const switchStatus = valArr[1];
      setBooleanConf(switchKey, switchStatus);
      initConf();
    };
    const initConf = () => {
      doCount();
      if (tabCountStore.tabCount == 0) {
        showSwitchTip.value = true;
      } else {
        showSwitchTip.value = false;
      }
    };
    onMounted(() => {
      initConf();
    });
    return (_ctx, _cache) => {
      const _component_el_switch = resolveComponent("el-switch");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_alert = resolveComponent("el-alert");
      const _component_el_form = resolveComponent("el-form");
      return openBlock(), createBlock(_component_el_form, {
        "label-width": "100px",
        inline: ""
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
          label: _ctx.$t("service.switch.jvue")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(jvueEnabled),
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => isRef(jvueEnabled) ? jvueEnabled.value = $event : null),
            onChange: jvueOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.conf")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(confEnabled),
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => isRef(confEnabled) ? confEnabled.value = $event : null),
            onChange: confOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.cnblogs")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(cnblogsEnabled),
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => isRef(cnblogsEnabled) ? cnblogsEnabled.value = $event : null),
            onChange: cnblogsOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.wordpress")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(wordpressEnabled),
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => isRef(wordpressEnabled) ? wordpressEnabled.value = $event : null),
            onChange: wordpressOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.liandi")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(liandiEnabled),
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => isRef(liandiEnabled) ? liandiEnabled.value = $event : null),
            onChange: liandiOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.yuque")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(yuqueEnabled),
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => isRef(yuqueEnabled) ? yuqueEnabled.value = $event : null),
            onChange: yuqueOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("service.switch.kms")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: unref(kmsEnabled),
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => isRef(kmsEnabled) ? kmsEnabled.value = $event : null),
            onChange: kmsOnChange
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(switchFormData).dynamicConfigArray, (cfg) => {
          return openBlock(), createBlock(_component_el_form_item, {
            label: cfg.plantformName + "_" + cfg.plantformType.toUpperCase().substring(0, 1)
          }, {
            default: withCtx(() => [createVNode(_component_el_switch, {
              modelValue: cfg.modelValue,
              "onUpdate:modelValue": ($event) => cfg.modelValue = $event,
              "active-value": cfg.plantformKey + "_true",
              "inactive-value": cfg.plantformKey + "_false",
              onChange: dynamicOnChange
            }, null, 8, ["modelValue", "onUpdate:modelValue", "active-value", "inactive-value"])]),
            _: 2
          }, 1032, ["label"]);
        }), 256)), unref(showSwitchTip) ? (openBlock(), createElementBlock("div", _hoisted_1$9, [createBaseVNode("p", null, [createVNode(_component_el_alert, {
          title: _ctx.$t("plantform.must.select.one"),
          type: "error",
          closable: false
        }, null, 8, ["title"])])])) : createCommentVNode("", true)]),
        _: 1
      });
    };
  }
});
var PageType = /* @__PURE__ */ ((PageType2) => {
  PageType2[PageType2["Markdown"] = 0] = "Markdown";
  PageType2[PageType2["Html"] = 1] = "Html";
  return PageType2;
})(PageType || {});
class MetaweblogCfg {
  constructor(home, apiUrl, username, password) {
    __publicField(this, "apiStatus");
    __publicField(this, "blogName");
    __publicField(this, "posidKey");
    __publicField(this, "previewUrl");
    __publicField(this, "pageType");
    this.home = home;
    this.apiUrl = apiUrl;
    this.username = username;
    this.password = password;
    this.home = home;
    this.apiUrl = apiUrl;
    this.username = username;
    this.password = password;
    this.apiStatus = false;
    this.blogName = "";
    this.posidKey = "";
    this.previewUrl = "";
    this.pageType = PageType.Markdown;
  }
}
const _hoisted_1$8 = /* @__PURE__ */ createTextVNode("Markdown");
const _hoisted_2$2 = /* @__PURE__ */ createTextVNode("HTML");
const __default__$o = {
  name: "MetaweblogSetting"
};
const _sfc_main$o = /* @__PURE__ */ defineComponent({
  ...__default__$o,
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
    const {
      t
    } = useI18n();
    const ptype_md = parseInt(PageType.Markdown.toString());
    parseInt(PageType.Html.toString());
    const home = ref("");
    const apiUrl = ref("");
    const previewUrl = ref("");
    const username = ref("");
    const password = ref("");
    const ptype = ref(ptype_md);
    const isLoading = ref(false);
    const apiStatus = ref(false);
    const blogName = ref("");
    const apiTypeInfo = ref(t("setting.blog.platform.support.metaweblog") + props.apiType + " ");
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
      logUtil.logInfo("Metaweblog\u901A\u7528Setting\u9A8C\u8BC1\u5B8C\u6BD5");
    };
    const saveConf = (hideTip) => {
      logUtil.logInfo("Metaweblog\u901A\u7528Setting\u4FDD\u5B58\u914D\u7F6E");
      const cfg = props.cfg;
      cfg.home = home.value;
      cfg.username = username.value;
      cfg.password = password.value;
      cfg.apiUrl = apiUrl.value;
      cfg.previewUrl = previewUrl.value;
      cfg.apiStatus = apiStatus.value;
      cfg.blogName = blogName.value;
      cfg.pageType = ptype.value;
      setJSONConf(props.apiType, cfg);
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const initConf = () => {
      logUtil.logInfo("Metaweblog\u901A\u7528Setting\u914D\u7F6E\u521D\u59CB\u5316");
      let conf = getJSONConf(props.apiType);
      if (isEmptyObject(conf)) {
        conf = props.cfg;
      }
      if (conf) {
        logUtil.logInfo("get setting conf=>", conf);
        home.value = conf.home;
        apiUrl.value = conf.apiUrl;
        previewUrl.value = conf.previewUrl;
        username.value = conf.username;
        password.value = conf.password;
        apiStatus.value = conf.apiStatus;
        blogName.value = conf.blogName;
        ptype.value = conf.pageType;
      }
    };
    onMounted(async () => {
      initConf();
    });
    return (_ctx, _cache) => {
      const _component_el_alert = resolveComponent("el-alert");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_radio = resolveComponent("el-radio");
      const _component_el_radio_group = resolveComponent("el-radio-group");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_form = resolveComponent("el-form");
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
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => home.value = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.username")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: username.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => username.value = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.password")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            type: "password",
            modelValue: password.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => password.value = $event),
            "show-password": ""
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.apiurl")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: apiUrl.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => apiUrl.value = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.previewUrl")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: previewUrl.value,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => previewUrl.value = $event)
          }, null, 8, ["modelValue"])]),
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
              default: withCtx(() => [_hoisted_1$8]),
              _: 1
            }), createVNode(_component_el_radio, {
              label: 1,
              size: "large"
            }, {
              default: withCtx(() => [_hoisted_2$2]),
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
const CNBLOGS_POSTID_KEY = "custom-cnblogs-post-id";
const WORDPRESS_POSTID_KEY = "custom-wordpress-post-id";
const CONFLUENCE_POSTID_KEY = "custom-conf-post-id";
const JVUE_POSTID_KEY = "custom-jvue-post-id";
const YUQUE_POSTID_KEY = "custom-yuque-post-id";
const WECHAT_POSTID_KEY = "custom-wechat-post-id";
const LIANDI_POSTID_KEY = "custom-liandi-post-id";
const VUEPRESS_POSTID_KEY = "custom-vuepress-slug";
const KMS_POSTID_KEY = "custom-kms-post-id";
const POSTID_KEY_CONSTANTS = {
  CNBLOGS_POSTID_KEY,
  WORDPRESS_POSTID_KEY,
  CONFLUENCE_POSTID_KEY,
  JVUE_POSTID_KEY,
  YUQUE_POSTID_KEY,
  WECHAT_POSTID_KEY,
  LIANDI_POSTID_KEY,
  VUEPRESS_POSTID_KEY,
  KMS_POSTID_KEY
};
class JVueCfg extends MetaweblogCfg {
  constructor() {
    super("https://[your-jvue-site]", "https://[your-jvue-site]/xmlrpc", "", "");
    this.posidKey = POSTID_KEY_CONSTANTS.JVUE_POSTID_KEY;
    this.previewUrl = "/post/[postid].html";
    this.pageType = PageType.Markdown;
  }
}
const __default__$n = {
  name: "JVueSetting",
  components: {
    MetaweblogSetting: _sfc_main$o
  }
};
const _sfc_main$n = /* @__PURE__ */ defineComponent({
  ...__default__$n,
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_JVUE);
    const cfg = ref(new JVueCfg());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$o, {
        "api-type": apiType.value,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
function getUserAgent() {
  if (typeof navigator === "object" && "userAgent" in navigator) {
    return navigator.userAgent;
  }
  if (typeof browser$1 === "object" && "version" in browser$1) {
    return `Node.js/${browser$1.version.substr(1)} (${browser$1.platform}; ${browser$1.arch})`;
  }
  return "<environment undetectable>";
}
var beforeAfterHook = { exports: {} };
var register_1 = register$1;
function register$1(state, name, method, options) {
  if (typeof method !== "function") {
    throw new Error("method for before hook must be a function");
  }
  if (!options) {
    options = {};
  }
  if (Array.isArray(name)) {
    return name.reverse().reduce(function(callback, name2) {
      return register$1.bind(null, state, name2, callback, options);
    }, method)();
  }
  return Promise.resolve().then(function() {
    if (!state.registry[name]) {
      return method(options);
    }
    return state.registry[name].reduce(function(method2, registered) {
      return registered.hook.bind(null, method2, options);
    }, method)();
  });
}
var add = addHook$1;
function addHook$1(state, kind, name, hook2) {
  var orig = hook2;
  if (!state.registry[name]) {
    state.registry[name] = [];
  }
  if (kind === "before") {
    hook2 = function(method, options) {
      return Promise.resolve().then(orig.bind(null, options)).then(method.bind(null, options));
    };
  }
  if (kind === "after") {
    hook2 = function(method, options) {
      var result;
      return Promise.resolve().then(method.bind(null, options)).then(function(result_) {
        result = result_;
        return orig(result, options);
      }).then(function() {
        return result;
      });
    };
  }
  if (kind === "error") {
    hook2 = function(method, options) {
      return Promise.resolve().then(method.bind(null, options)).catch(function(error) {
        return orig(error, options);
      });
    };
  }
  state.registry[name].push({
    hook: hook2,
    orig
  });
}
var remove = removeHook$1;
function removeHook$1(state, name, method) {
  if (!state.registry[name]) {
    return;
  }
  var index = state.registry[name].map(function(registered) {
    return registered.orig;
  }).indexOf(method);
  if (index === -1) {
    return;
  }
  state.registry[name].splice(index, 1);
}
var register = register_1;
var addHook = add;
var removeHook = remove;
var bind = Function.bind;
var bindable = bind.bind(bind);
function bindApi(hook2, state, name) {
  var removeHookRef = bindable(removeHook, null).apply(null, name ? [state, name] : [state]);
  hook2.api = { remove: removeHookRef };
  hook2.remove = removeHookRef;
  ["before", "error", "after", "wrap"].forEach(function(kind) {
    var args = name ? [state, kind, name] : [state, kind];
    hook2[kind] = hook2.api[kind] = bindable(addHook, null).apply(null, args);
  });
}
function HookSingular() {
  var singularHookName = "h";
  var singularHookState = {
    registry: {}
  };
  var singularHook = register.bind(null, singularHookState, singularHookName);
  bindApi(singularHook, singularHookState, singularHookName);
  return singularHook;
}
function HookCollection() {
  var state = {
    registry: {}
  };
  var hook2 = register.bind(null, state);
  bindApi(hook2, state);
  return hook2;
}
var collectionHookDeprecationMessageDisplayed = false;
function Hook() {
  if (!collectionHookDeprecationMessageDisplayed) {
    console.warn('[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4');
    collectionHookDeprecationMessageDisplayed = true;
  }
  return HookCollection();
}
Hook.Singular = HookSingular.bind();
Hook.Collection = HookCollection.bind();
beforeAfterHook.exports = Hook;
beforeAfterHook.exports.Hook = Hook;
beforeAfterHook.exports.Singular = Hook.Singular;
var Collection = beforeAfterHook.exports.Collection = Hook.Collection;
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function isObject(o) {
  return Object.prototype.toString.call(o) === "[object Object]";
}
function isPlainObject(o) {
  var ctor, prot;
  if (isObject(o) === false)
    return false;
  ctor = o.constructor;
  if (ctor === void 0)
    return true;
  prot = ctor.prototype;
  if (isObject(prot) === false)
    return false;
  if (prot.hasOwnProperty("isPrototypeOf") === false) {
    return false;
  }
  return true;
}
function lowercaseKeys(object) {
  if (!object) {
    return {};
  }
  return Object.keys(object).reduce((newObj, key) => {
    newObj[key.toLowerCase()] = object[key];
    return newObj;
  }, {});
}
function mergeDeep(defaults, options) {
  const result = Object.assign({}, defaults);
  Object.keys(options).forEach((key) => {
    if (isPlainObject(options[key])) {
      if (!(key in defaults))
        Object.assign(result, { [key]: options[key] });
      else
        result[key] = mergeDeep(defaults[key], options[key]);
    } else {
      Object.assign(result, { [key]: options[key] });
    }
  });
  return result;
}
function removeUndefinedProperties(obj) {
  for (const key in obj) {
    if (obj[key] === void 0) {
      delete obj[key];
    }
  }
  return obj;
}
function merge(defaults, route, options) {
  if (typeof route === "string") {
    let [method, url] = route.split(" ");
    options = Object.assign(url ? { method, url } : { url: method }, options);
  } else {
    options = Object.assign({}, route);
  }
  options.headers = lowercaseKeys(options.headers);
  removeUndefinedProperties(options);
  removeUndefinedProperties(options.headers);
  const mergedOptions = mergeDeep(defaults || {}, options);
  if (defaults && defaults.mediaType.previews.length) {
    mergedOptions.mediaType.previews = defaults.mediaType.previews.filter((preview) => !mergedOptions.mediaType.previews.includes(preview)).concat(mergedOptions.mediaType.previews);
  }
  mergedOptions.mediaType.previews = mergedOptions.mediaType.previews.map((preview) => preview.replace(/-preview/, ""));
  return mergedOptions;
}
function addQueryParameters(url, parameters) {
  const separator = /\?/.test(url) ? "&" : "?";
  const names = Object.keys(parameters);
  if (names.length === 0) {
    return url;
  }
  return url + separator + names.map((name) => {
    if (name === "q") {
      return "q=" + parameters.q.split("+").map(encodeURIComponent).join("+");
    }
    return `${name}=${encodeURIComponent(parameters[name])}`;
  }).join("&");
}
const urlVariableRegex = /\{[^}]+\}/g;
function removeNonChars(variableName) {
  return variableName.replace(/^\W+|\W+$/g, "").split(/,/);
}
function extractUrlVariableNames(url) {
  const matches = url.match(urlVariableRegex);
  if (!matches) {
    return [];
  }
  return matches.map(removeNonChars).reduce((a, b) => a.concat(b), []);
}
function omit(object, keysToOmit) {
  return Object.keys(object).filter((option) => !keysToOmit.includes(option)).reduce((obj, key) => {
    obj[key] = object[key];
    return obj;
  }, {});
}
function encodeReserved(str) {
  return str.split(/(%[0-9A-Fa-f]{2})/g).map(function(part) {
    if (!/%[0-9A-Fa-f]/.test(part)) {
      part = encodeURI(part).replace(/%5B/g, "[").replace(/%5D/g, "]");
    }
    return part;
  }).join("");
}
function encodeUnreserved(str) {
  return encodeURIComponent(str).replace(/[!'()*]/g, function(c) {
    return "%" + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
function encodeValue(operator, value, key) {
  value = operator === "+" || operator === "#" ? encodeReserved(value) : encodeUnreserved(value);
  if (key) {
    return encodeUnreserved(key) + "=" + value;
  } else {
    return value;
  }
}
function isDefined(value) {
  return value !== void 0 && value !== null;
}
function isKeyOperator(operator) {
  return operator === ";" || operator === "&" || operator === "?";
}
function getValues(context, operator, key, modifier) {
  var value = context[key], result = [];
  if (isDefined(value) && value !== "") {
    if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
      value = value.toString();
      if (modifier && modifier !== "*") {
        value = value.substring(0, parseInt(modifier, 10));
      }
      result.push(encodeValue(operator, value, isKeyOperator(operator) ? key : ""));
    } else {
      if (modifier === "*") {
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function(value2) {
            result.push(encodeValue(operator, value2, isKeyOperator(operator) ? key : ""));
          });
        } else {
          Object.keys(value).forEach(function(k) {
            if (isDefined(value[k])) {
              result.push(encodeValue(operator, value[k], k));
            }
          });
        }
      } else {
        const tmp = [];
        if (Array.isArray(value)) {
          value.filter(isDefined).forEach(function(value2) {
            tmp.push(encodeValue(operator, value2));
          });
        } else {
          Object.keys(value).forEach(function(k) {
            if (isDefined(value[k])) {
              tmp.push(encodeUnreserved(k));
              tmp.push(encodeValue(operator, value[k].toString()));
            }
          });
        }
        if (isKeyOperator(operator)) {
          result.push(encodeUnreserved(key) + "=" + tmp.join(","));
        } else if (tmp.length !== 0) {
          result.push(tmp.join(","));
        }
      }
    }
  } else {
    if (operator === ";") {
      if (isDefined(value)) {
        result.push(encodeUnreserved(key));
      }
    } else if (value === "" && (operator === "&" || operator === "?")) {
      result.push(encodeUnreserved(key) + "=");
    } else if (value === "") {
      result.push("");
    }
  }
  return result;
}
function parseUrl(template) {
  return {
    expand: expand.bind(null, template)
  };
}
function expand(template, context) {
  var operators = ["+", "#", ".", "/", ";", "?", "&"];
  return template.replace(/\{([^\{\}]+)\}|([^\{\}]+)/g, function(_, expression, literal) {
    if (expression) {
      let operator = "";
      const values = [];
      if (operators.indexOf(expression.charAt(0)) !== -1) {
        operator = expression.charAt(0);
        expression = expression.substr(1);
      }
      expression.split(/,/g).forEach(function(variable) {
        var tmp = /([^:\*]*)(?::(\d+)|(\*))?/.exec(variable);
        values.push(getValues(context, operator, tmp[1], tmp[2] || tmp[3]));
      });
      if (operator && operator !== "+") {
        var separator = ",";
        if (operator === "?") {
          separator = "&";
        } else if (operator !== "#") {
          separator = operator;
        }
        return (values.length !== 0 ? operator : "") + values.join(separator);
      } else {
        return values.join(",");
      }
    } else {
      return encodeReserved(literal);
    }
  });
}
function parse(options) {
  let method = options.method.toUpperCase();
  let url = (options.url || "/").replace(/:([a-z]\w+)/g, "{$1}");
  let headers = Object.assign({}, options.headers);
  let body;
  let parameters = omit(options, [
    "method",
    "baseUrl",
    "url",
    "headers",
    "request",
    "mediaType"
  ]);
  const urlVariableNames = extractUrlVariableNames(url);
  url = parseUrl(url).expand(parameters);
  if (!/^http/.test(url)) {
    url = options.baseUrl + url;
  }
  const omittedParameters = Object.keys(options).filter((option) => urlVariableNames.includes(option)).concat("baseUrl");
  const remainingParameters = omit(parameters, omittedParameters);
  const isBinaryRequest = /application\/octet-stream/i.test(headers.accept);
  if (!isBinaryRequest) {
    if (options.mediaType.format) {
      headers.accept = headers.accept.split(/,/).map((preview) => preview.replace(/application\/vnd(\.\w+)(\.v3)?(\.\w+)?(\+json)?$/, `application/vnd$1$2.${options.mediaType.format}`)).join(",");
    }
    if (options.mediaType.previews.length) {
      const previewsFromAcceptHeader = headers.accept.match(/[\w-]+(?=-preview)/g) || [];
      headers.accept = previewsFromAcceptHeader.concat(options.mediaType.previews).map((preview) => {
        const format2 = options.mediaType.format ? `.${options.mediaType.format}` : "+json";
        return `application/vnd.github.${preview}-preview${format2}`;
      }).join(",");
    }
  }
  if (["GET", "HEAD"].includes(method)) {
    url = addQueryParameters(url, remainingParameters);
  } else {
    if ("data" in remainingParameters) {
      body = remainingParameters.data;
    } else {
      if (Object.keys(remainingParameters).length) {
        body = remainingParameters;
      } else {
        headers["content-length"] = 0;
      }
    }
  }
  if (!headers["content-type"] && typeof body !== "undefined") {
    headers["content-type"] = "application/json; charset=utf-8";
  }
  if (["PATCH", "PUT"].includes(method) && typeof body === "undefined") {
    body = "";
  }
  return Object.assign({ method, url, headers }, typeof body !== "undefined" ? { body } : null, options.request ? { request: options.request } : null);
}
function endpointWithDefaults(defaults, route, options) {
  return parse(merge(defaults, route, options));
}
function withDefaults$2(oldDefaults, newDefaults) {
  const DEFAULTS2 = merge(oldDefaults, newDefaults);
  const endpoint2 = endpointWithDefaults.bind(null, DEFAULTS2);
  return Object.assign(endpoint2, {
    DEFAULTS: DEFAULTS2,
    defaults: withDefaults$2.bind(null, DEFAULTS2),
    merge: merge.bind(null, DEFAULTS2),
    parse
  });
}
const VERSION$3 = "7.0.0";
const userAgent = `octokit-endpoint.js/${VERSION$3} ${getUserAgent()}`;
const DEFAULTS = {
  method: "GET",
  baseUrl: "https://api.github.com",
  headers: {
    accept: "application/vnd.github.v3+json",
    "user-agent": userAgent
  },
  mediaType: {
    format: "",
    previews: []
  }
};
const endpoint = withDefaults$2(null, DEFAULTS);
var browserPonyfill = { exports: {} };
(function(module, exports) {
  var global = typeof self !== "undefined" ? self : commonjsGlobal;
  var __self__ = function() {
    function F() {
      this.fetch = false;
      this.DOMException = global.DOMException;
    }
    F.prototype = global;
    return new F();
  }();
  (function(self2) {
    (function(exports2) {
      var support = {
        searchParams: "URLSearchParams" in self2,
        iterable: "Symbol" in self2 && "iterator" in Symbol,
        blob: "FileReader" in self2 && "Blob" in self2 && function() {
          try {
            new Blob();
            return true;
          } catch (e) {
            return false;
          }
        }(),
        formData: "FormData" in self2,
        arrayBuffer: "ArrayBuffer" in self2
      };
      function isDataView(obj) {
        return obj && DataView.prototype.isPrototypeOf(obj);
      }
      if (support.arrayBuffer) {
        var viewClasses = [
          "[object Int8Array]",
          "[object Uint8Array]",
          "[object Uint8ClampedArray]",
          "[object Int16Array]",
          "[object Uint16Array]",
          "[object Int32Array]",
          "[object Uint32Array]",
          "[object Float32Array]",
          "[object Float64Array]"
        ];
        var isArrayBufferView = ArrayBuffer.isView || function(obj) {
          return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
        };
      }
      function normalizeName(name) {
        if (typeof name !== "string") {
          name = String(name);
        }
        if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
          throw new TypeError("Invalid character in header field name");
        }
        return name.toLowerCase();
      }
      function normalizeValue(value) {
        if (typeof value !== "string") {
          value = String(value);
        }
        return value;
      }
      function iteratorFor(items) {
        var iterator = {
          next: function() {
            var value = items.shift();
            return { done: value === void 0, value };
          }
        };
        if (support.iterable) {
          iterator[Symbol.iterator] = function() {
            return iterator;
          };
        }
        return iterator;
      }
      function Headers(headers) {
        this.map = {};
        if (headers instanceof Headers) {
          headers.forEach(function(value, name) {
            this.append(name, value);
          }, this);
        } else if (Array.isArray(headers)) {
          headers.forEach(function(header) {
            this.append(header[0], header[1]);
          }, this);
        } else if (headers) {
          Object.getOwnPropertyNames(headers).forEach(function(name) {
            this.append(name, headers[name]);
          }, this);
        }
      }
      Headers.prototype.append = function(name, value) {
        name = normalizeName(name);
        value = normalizeValue(value);
        var oldValue = this.map[name];
        this.map[name] = oldValue ? oldValue + ", " + value : value;
      };
      Headers.prototype["delete"] = function(name) {
        delete this.map[normalizeName(name)];
      };
      Headers.prototype.get = function(name) {
        name = normalizeName(name);
        return this.has(name) ? this.map[name] : null;
      };
      Headers.prototype.has = function(name) {
        return this.map.hasOwnProperty(normalizeName(name));
      };
      Headers.prototype.set = function(name, value) {
        this.map[normalizeName(name)] = normalizeValue(value);
      };
      Headers.prototype.forEach = function(callback, thisArg) {
        for (var name in this.map) {
          if (this.map.hasOwnProperty(name)) {
            callback.call(thisArg, this.map[name], name, this);
          }
        }
      };
      Headers.prototype.keys = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push(name);
        });
        return iteratorFor(items);
      };
      Headers.prototype.values = function() {
        var items = [];
        this.forEach(function(value) {
          items.push(value);
        });
        return iteratorFor(items);
      };
      Headers.prototype.entries = function() {
        var items = [];
        this.forEach(function(value, name) {
          items.push([name, value]);
        });
        return iteratorFor(items);
      };
      if (support.iterable) {
        Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
      }
      function consumed(body) {
        if (body.bodyUsed) {
          return Promise.reject(new TypeError("Already read"));
        }
        body.bodyUsed = true;
      }
      function fileReaderReady(reader) {
        return new Promise(function(resolve, reject) {
          reader.onload = function() {
            resolve(reader.result);
          };
          reader.onerror = function() {
            reject(reader.error);
          };
        });
      }
      function readBlobAsArrayBuffer(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsArrayBuffer(blob);
        return promise;
      }
      function readBlobAsText(blob) {
        var reader = new FileReader();
        var promise = fileReaderReady(reader);
        reader.readAsText(blob);
        return promise;
      }
      function readArrayBufferAsText(buf) {
        var view = new Uint8Array(buf);
        var chars = new Array(view.length);
        for (var i = 0; i < view.length; i++) {
          chars[i] = String.fromCharCode(view[i]);
        }
        return chars.join("");
      }
      function bufferClone(buf) {
        if (buf.slice) {
          return buf.slice(0);
        } else {
          var view = new Uint8Array(buf.byteLength);
          view.set(new Uint8Array(buf));
          return view.buffer;
        }
      }
      function Body() {
        this.bodyUsed = false;
        this._initBody = function(body) {
          this._bodyInit = body;
          if (!body) {
            this._bodyText = "";
          } else if (typeof body === "string") {
            this._bodyText = body;
          } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
            this._bodyBlob = body;
          } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
            this._bodyFormData = body;
          } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
            this._bodyText = body.toString();
          } else if (support.arrayBuffer && support.blob && isDataView(body)) {
            this._bodyArrayBuffer = bufferClone(body.buffer);
            this._bodyInit = new Blob([this._bodyArrayBuffer]);
          } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
            this._bodyArrayBuffer = bufferClone(body);
          } else {
            this._bodyText = body = Object.prototype.toString.call(body);
          }
          if (!this.headers.get("content-type")) {
            if (typeof body === "string") {
              this.headers.set("content-type", "text/plain;charset=UTF-8");
            } else if (this._bodyBlob && this._bodyBlob.type) {
              this.headers.set("content-type", this._bodyBlob.type);
            } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
              this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8");
            }
          }
        };
        if (support.blob) {
          this.blob = function() {
            var rejected = consumed(this);
            if (rejected) {
              return rejected;
            }
            if (this._bodyBlob) {
              return Promise.resolve(this._bodyBlob);
            } else if (this._bodyArrayBuffer) {
              return Promise.resolve(new Blob([this._bodyArrayBuffer]));
            } else if (this._bodyFormData) {
              throw new Error("could not read FormData body as blob");
            } else {
              return Promise.resolve(new Blob([this._bodyText]));
            }
          };
          this.arrayBuffer = function() {
            if (this._bodyArrayBuffer) {
              return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
            } else {
              return this.blob().then(readBlobAsArrayBuffer);
            }
          };
        }
        this.text = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected;
          }
          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob);
          } else if (this._bodyArrayBuffer) {
            return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
          } else if (this._bodyFormData) {
            throw new Error("could not read FormData body as text");
          } else {
            return Promise.resolve(this._bodyText);
          }
        };
        if (support.formData) {
          this.formData = function() {
            return this.text().then(decode);
          };
        }
        this.json = function() {
          return this.text().then(JSON.parse);
        };
        return this;
      }
      var methods = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
      function normalizeMethod(method) {
        var upcased = method.toUpperCase();
        return methods.indexOf(upcased) > -1 ? upcased : method;
      }
      function Request(input, options) {
        options = options || {};
        var body = options.body;
        if (input instanceof Request) {
          if (input.bodyUsed) {
            throw new TypeError("Already read");
          }
          this.url = input.url;
          this.credentials = input.credentials;
          if (!options.headers) {
            this.headers = new Headers(input.headers);
          }
          this.method = input.method;
          this.mode = input.mode;
          this.signal = input.signal;
          if (!body && input._bodyInit != null) {
            body = input._bodyInit;
            input.bodyUsed = true;
          }
        } else {
          this.url = String(input);
        }
        this.credentials = options.credentials || this.credentials || "same-origin";
        if (options.headers || !this.headers) {
          this.headers = new Headers(options.headers);
        }
        this.method = normalizeMethod(options.method || this.method || "GET");
        this.mode = options.mode || this.mode || null;
        this.signal = options.signal || this.signal;
        this.referrer = null;
        if ((this.method === "GET" || this.method === "HEAD") && body) {
          throw new TypeError("Body not allowed for GET or HEAD requests");
        }
        this._initBody(body);
      }
      Request.prototype.clone = function() {
        return new Request(this, { body: this._bodyInit });
      };
      function decode(body) {
        var form = new FormData();
        body.trim().split("&").forEach(function(bytes) {
          if (bytes) {
            var split = bytes.split("=");
            var name = split.shift().replace(/\+/g, " ");
            var value = split.join("=").replace(/\+/g, " ");
            form.append(decodeURIComponent(name), decodeURIComponent(value));
          }
        });
        return form;
      }
      function parseHeaders(rawHeaders) {
        var headers = new Headers();
        var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, " ");
        preProcessedHeaders.split(/\r?\n/).forEach(function(line) {
          var parts = line.split(":");
          var key = parts.shift().trim();
          if (key) {
            var value = parts.join(":").trim();
            headers.append(key, value);
          }
        });
        return headers;
      }
      Body.call(Request.prototype);
      function Response(bodyInit, options) {
        if (!options) {
          options = {};
        }
        this.type = "default";
        this.status = options.status === void 0 ? 200 : options.status;
        this.ok = this.status >= 200 && this.status < 300;
        this.statusText = "statusText" in options ? options.statusText : "OK";
        this.headers = new Headers(options.headers);
        this.url = options.url || "";
        this._initBody(bodyInit);
      }
      Body.call(Response.prototype);
      Response.prototype.clone = function() {
        return new Response(this._bodyInit, {
          status: this.status,
          statusText: this.statusText,
          headers: new Headers(this.headers),
          url: this.url
        });
      };
      Response.error = function() {
        var response = new Response(null, { status: 0, statusText: "" });
        response.type = "error";
        return response;
      };
      var redirectStatuses = [301, 302, 303, 307, 308];
      Response.redirect = function(url, status) {
        if (redirectStatuses.indexOf(status) === -1) {
          throw new RangeError("Invalid status code");
        }
        return new Response(null, { status, headers: { location: url } });
      };
      exports2.DOMException = self2.DOMException;
      try {
        new exports2.DOMException();
      } catch (err) {
        exports2.DOMException = function(message, name) {
          this.message = message;
          this.name = name;
          var error = Error(message);
          this.stack = error.stack;
        };
        exports2.DOMException.prototype = Object.create(Error.prototype);
        exports2.DOMException.prototype.constructor = exports2.DOMException;
      }
      function fetch(input, init) {
        return new Promise(function(resolve, reject) {
          var request2 = new Request(input, init);
          if (request2.signal && request2.signal.aborted) {
            return reject(new exports2.DOMException("Aborted", "AbortError"));
          }
          var xhr = new XMLHttpRequest();
          function abortXhr() {
            xhr.abort();
          }
          xhr.onload = function() {
            var options = {
              status: xhr.status,
              statusText: xhr.statusText,
              headers: parseHeaders(xhr.getAllResponseHeaders() || "")
            };
            options.url = "responseURL" in xhr ? xhr.responseURL : options.headers.get("X-Request-URL");
            var body = "response" in xhr ? xhr.response : xhr.responseText;
            resolve(new Response(body, options));
          };
          xhr.onerror = function() {
            reject(new TypeError("Network request failed"));
          };
          xhr.ontimeout = function() {
            reject(new TypeError("Network request failed"));
          };
          xhr.onabort = function() {
            reject(new exports2.DOMException("Aborted", "AbortError"));
          };
          xhr.open(request2.method, request2.url, true);
          if (request2.credentials === "include") {
            xhr.withCredentials = true;
          } else if (request2.credentials === "omit") {
            xhr.withCredentials = false;
          }
          if ("responseType" in xhr && support.blob) {
            xhr.responseType = "blob";
          }
          request2.headers.forEach(function(value, name) {
            xhr.setRequestHeader(name, value);
          });
          if (request2.signal) {
            request2.signal.addEventListener("abort", abortXhr);
            xhr.onreadystatechange = function() {
              if (xhr.readyState === 4) {
                request2.signal.removeEventListener("abort", abortXhr);
              }
            };
          }
          xhr.send(typeof request2._bodyInit === "undefined" ? null : request2._bodyInit);
        });
      }
      fetch.polyfill = true;
      if (!self2.fetch) {
        self2.fetch = fetch;
        self2.Headers = Headers;
        self2.Request = Request;
        self2.Response = Response;
      }
      exports2.Headers = Headers;
      exports2.Request = Request;
      exports2.Response = Response;
      exports2.fetch = fetch;
      Object.defineProperty(exports2, "__esModule", { value: true });
      return exports2;
    })({});
  })(__self__);
  __self__.fetch.ponyfill = true;
  delete __self__.fetch.polyfill;
  var ctx = __self__;
  exports = ctx.fetch;
  exports.default = ctx.fetch;
  exports.fetch = ctx.fetch;
  exports.Headers = ctx.Headers;
  exports.Request = ctx.Request;
  exports.Response = ctx.Response;
  module.exports = exports;
})(browserPonyfill, browserPonyfill.exports);
const nodeFetch = /* @__PURE__ */ getDefaultExportFromCjs(browserPonyfill.exports);
class Deprecation extends Error {
  constructor(message) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = "Deprecation";
  }
}
var once$1 = { exports: {} };
var wrappy_1 = wrappy$1;
function wrappy$1(fn, cb) {
  if (fn && cb)
    return wrappy$1(fn)(cb);
  if (typeof fn !== "function")
    throw new TypeError("need wrapper function");
  Object.keys(fn).forEach(function(k) {
    wrapper[k] = fn[k];
  });
  return wrapper;
  function wrapper() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    var ret = fn.apply(this, args);
    var cb2 = args[args.length - 1];
    if (typeof ret === "function" && ret !== cb2) {
      Object.keys(cb2).forEach(function(k) {
        ret[k] = cb2[k];
      });
    }
    return ret;
  }
}
var wrappy = wrappy_1;
once$1.exports = wrappy(once);
once$1.exports.strict = wrappy(onceStrict);
once.proto = once(function() {
  Object.defineProperty(Function.prototype, "once", {
    value: function() {
      return once(this);
    },
    configurable: true
  });
  Object.defineProperty(Function.prototype, "onceStrict", {
    value: function() {
      return onceStrict(this);
    },
    configurable: true
  });
});
function once(fn) {
  var f = function() {
    if (f.called)
      return f.value;
    f.called = true;
    return f.value = fn.apply(this, arguments);
  };
  f.called = false;
  return f;
}
function onceStrict(fn) {
  var f = function() {
    if (f.called)
      throw new Error(f.onceError);
    f.called = true;
    return f.value = fn.apply(this, arguments);
  };
  var name = fn.name || "Function wrapped with `once`";
  f.onceError = name + " shouldn't be called more than once";
  f.called = false;
  return f;
}
const logOnceCode = once$1.exports((deprecation) => console.warn(deprecation));
const logOnceHeaders = once$1.exports((deprecation) => console.warn(deprecation));
class RequestError extends Error {
  constructor(message, statusCode, options) {
    super(message);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
    this.name = "HttpError";
    this.status = statusCode;
    let headers;
    if ("headers" in options && typeof options.headers !== "undefined") {
      headers = options.headers;
    }
    if ("response" in options) {
      this.response = options.response;
      headers = options.response.headers;
    }
    const requestCopy = Object.assign({}, options.request);
    if (options.request.headers.authorization) {
      requestCopy.headers = Object.assign({}, options.request.headers, {
        authorization: options.request.headers.authorization.replace(/ .*$/, " [REDACTED]")
      });
    }
    requestCopy.url = requestCopy.url.replace(/\bclient_secret=\w+/g, "client_secret=[REDACTED]").replace(/\baccess_token=\w+/g, "access_token=[REDACTED]");
    this.request = requestCopy;
    Object.defineProperty(this, "code", {
      get() {
        logOnceCode(new Deprecation("[@octokit/request-error] `error.code` is deprecated, use `error.status`."));
        return statusCode;
      }
    });
    Object.defineProperty(this, "headers", {
      get() {
        logOnceHeaders(new Deprecation("[@octokit/request-error] `error.headers` is deprecated, use `error.response.headers`."));
        return headers || {};
      }
    });
  }
}
const VERSION$2 = "6.2.0";
function getBufferResponse(response) {
  return response.arrayBuffer();
}
function fetchWrapper(requestOptions) {
  const log = requestOptions.request && requestOptions.request.log ? requestOptions.request.log : console;
  if (isPlainObject(requestOptions.body) || Array.isArray(requestOptions.body)) {
    requestOptions.body = JSON.stringify(requestOptions.body);
  }
  let headers = {};
  let status;
  let url;
  const fetch = requestOptions.request && requestOptions.request.fetch || globalThis.fetch || nodeFetch;
  return fetch(requestOptions.url, Object.assign(
    {
      method: requestOptions.method,
      body: requestOptions.body,
      headers: requestOptions.headers,
      redirect: requestOptions.redirect
    },
    requestOptions.request
  )).then(async (response) => {
    url = response.url;
    status = response.status;
    for (const keyAndValue of response.headers) {
      headers[keyAndValue[0]] = keyAndValue[1];
    }
    if ("deprecation" in headers) {
      const matches = headers.link && headers.link.match(/<([^>]+)>; rel="deprecation"/);
      const deprecationLink = matches && matches.pop();
      log.warn(`[@octokit/request] "${requestOptions.method} ${requestOptions.url}" is deprecated. It is scheduled to be removed on ${headers.sunset}${deprecationLink ? `. See ${deprecationLink}` : ""}`);
    }
    if (status === 204 || status === 205) {
      return;
    }
    if (requestOptions.method === "HEAD") {
      if (status < 400) {
        return;
      }
      throw new RequestError(response.statusText, status, {
        response: {
          url,
          status,
          headers,
          data: void 0
        },
        request: requestOptions
      });
    }
    if (status === 304) {
      throw new RequestError("Not modified", status, {
        response: {
          url,
          status,
          headers,
          data: await getResponseData(response)
        },
        request: requestOptions
      });
    }
    if (status >= 400) {
      const data = await getResponseData(response);
      const error = new RequestError(toErrorMessage(data), status, {
        response: {
          url,
          status,
          headers,
          data
        },
        request: requestOptions
      });
      throw error;
    }
    return getResponseData(response);
  }).then((data) => {
    return {
      status,
      url,
      headers,
      data
    };
  }).catch((error) => {
    if (error instanceof RequestError)
      throw error;
    else if (error.name === "AbortError")
      throw error;
    throw new RequestError(error.message, 500, {
      request: requestOptions
    });
  });
}
async function getResponseData(response) {
  const contentType = response.headers.get("content-type");
  if (/application\/json/.test(contentType)) {
    return response.json();
  }
  if (!contentType || /^text\/|charset=utf-8$/.test(contentType)) {
    return response.text();
  }
  return getBufferResponse(response);
}
function toErrorMessage(data) {
  if (typeof data === "string")
    return data;
  if ("message" in data) {
    if (Array.isArray(data.errors)) {
      return `${data.message}: ${data.errors.map(JSON.stringify).join(", ")}`;
    }
    return data.message;
  }
  return `Unknown error: ${JSON.stringify(data)}`;
}
function withDefaults$1(oldEndpoint, newDefaults) {
  const endpoint2 = oldEndpoint.defaults(newDefaults);
  const newApi = function(route, parameters) {
    const endpointOptions = endpoint2.merge(route, parameters);
    if (!endpointOptions.request || !endpointOptions.request.hook) {
      return fetchWrapper(endpoint2.parse(endpointOptions));
    }
    const request2 = (route2, parameters2) => {
      return fetchWrapper(endpoint2.parse(endpoint2.merge(route2, parameters2)));
    };
    Object.assign(request2, {
      endpoint: endpoint2,
      defaults: withDefaults$1.bind(null, endpoint2)
    });
    return endpointOptions.request.hook(request2, endpointOptions);
  };
  return Object.assign(newApi, {
    endpoint: endpoint2,
    defaults: withDefaults$1.bind(null, endpoint2)
  });
}
const request = withDefaults$1(endpoint, {
  headers: {
    "user-agent": `octokit-request.js/${VERSION$2} ${getUserAgent()}`
  }
});
const VERSION$1 = "5.0.0";
function _buildMessageForResponseErrors(data) {
  return `Request failed due to following response errors:
` + data.errors.map((e) => ` - ${e.message}`).join("\n");
}
class GraphqlResponseError extends Error {
  constructor(request2, headers, response) {
    super(_buildMessageForResponseErrors(response));
    this.request = request2;
    this.headers = headers;
    this.response = response;
    this.name = "GraphqlResponseError";
    this.errors = response.errors;
    this.data = response.data;
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}
const NON_VARIABLE_OPTIONS = [
  "method",
  "baseUrl",
  "url",
  "headers",
  "request",
  "query",
  "mediaType"
];
const FORBIDDEN_VARIABLE_OPTIONS = ["query", "method", "url"];
const GHES_V3_SUFFIX_REGEX = /\/api\/v3\/?$/;
function graphql(request2, query, options) {
  if (options) {
    if (typeof query === "string" && "query" in options) {
      return Promise.reject(new Error(`[@octokit/graphql] "query" cannot be used as variable name`));
    }
    for (const key in options) {
      if (!FORBIDDEN_VARIABLE_OPTIONS.includes(key))
        continue;
      return Promise.reject(new Error(`[@octokit/graphql] "${key}" cannot be used as variable name`));
    }
  }
  const parsedOptions = typeof query === "string" ? Object.assign({ query }, options) : query;
  const requestOptions = Object.keys(parsedOptions).reduce((result, key) => {
    if (NON_VARIABLE_OPTIONS.includes(key)) {
      result[key] = parsedOptions[key];
      return result;
    }
    if (!result.variables) {
      result.variables = {};
    }
    result.variables[key] = parsedOptions[key];
    return result;
  }, {});
  const baseUrl = parsedOptions.baseUrl || request2.endpoint.DEFAULTS.baseUrl;
  if (GHES_V3_SUFFIX_REGEX.test(baseUrl)) {
    requestOptions.url = baseUrl.replace(GHES_V3_SUFFIX_REGEX, "/api/graphql");
  }
  return request2(requestOptions).then((response) => {
    if (response.data.errors) {
      const headers = {};
      for (const key of Object.keys(response.headers)) {
        headers[key] = response.headers[key];
      }
      throw new GraphqlResponseError(requestOptions, headers, response.data);
    }
    return response.data.data;
  });
}
function withDefaults(request$1, newDefaults) {
  const newRequest = request$1.defaults(newDefaults);
  const newApi = (query, options) => {
    return graphql(newRequest, query, options);
  };
  return Object.assign(newApi, {
    defaults: withDefaults.bind(null, newRequest),
    endpoint: request.endpoint
  });
}
withDefaults(request, {
  headers: {
    "user-agent": `octokit-graphql.js/${VERSION$1} ${getUserAgent()}`
  },
  method: "POST",
  url: "/graphql"
});
function withCustomRequest(customRequest) {
  return withDefaults(customRequest, {
    method: "POST",
    url: "/graphql"
  });
}
const REGEX_IS_INSTALLATION_LEGACY = /^v1\./;
const REGEX_IS_INSTALLATION = /^ghs_/;
const REGEX_IS_USER_TO_SERVER = /^ghu_/;
async function auth(token) {
  const isApp = token.split(/\./).length === 3;
  const isInstallation = REGEX_IS_INSTALLATION_LEGACY.test(token) || REGEX_IS_INSTALLATION.test(token);
  const isUserToServer = REGEX_IS_USER_TO_SERVER.test(token);
  const tokenType = isApp ? "app" : isInstallation ? "installation" : isUserToServer ? "user-to-server" : "oauth";
  return {
    type: "token",
    token,
    tokenType
  };
}
function withAuthorizationPrefix(token) {
  if (token.split(/\./).length === 3) {
    return `bearer ${token}`;
  }
  return `token ${token}`;
}
async function hook(token, request2, route, parameters) {
  const endpoint2 = request2.endpoint.merge(route, parameters);
  endpoint2.headers.authorization = withAuthorizationPrefix(token);
  return request2(endpoint2);
}
const createTokenAuth = function createTokenAuth2(token) {
  if (!token) {
    throw new Error("[@octokit/auth-token] No token passed to createTokenAuth");
  }
  if (typeof token !== "string") {
    throw new Error("[@octokit/auth-token] Token passed to createTokenAuth is not a string");
  }
  token = token.replace(/^(token|bearer) +/i, "");
  return Object.assign(auth.bind(null, token), {
    hook: hook.bind(null, token)
  });
};
const VERSION = "4.0.4";
class Octokit {
  constructor(options = {}) {
    const hook2 = new Collection();
    const requestDefaults = {
      baseUrl: request.endpoint.DEFAULTS.baseUrl,
      headers: {},
      request: Object.assign({}, options.request, {
        hook: hook2.bind(null, "request")
      }),
      mediaType: {
        previews: [],
        format: ""
      }
    };
    requestDefaults.headers["user-agent"] = [
      options.userAgent,
      `octokit-core.js/${VERSION} ${getUserAgent()}`
    ].filter(Boolean).join(" ");
    if (options.baseUrl) {
      requestDefaults.baseUrl = options.baseUrl;
    }
    if (options.previews) {
      requestDefaults.mediaType.previews = options.previews;
    }
    if (options.timeZone) {
      requestDefaults.headers["time-zone"] = options.timeZone;
    }
    this.request = request.defaults(requestDefaults);
    this.graphql = withCustomRequest(this.request).defaults(requestDefaults);
    this.log = Object.assign({
      debug: () => {
      },
      info: () => {
      },
      warn: console.warn.bind(console),
      error: console.error.bind(console)
    }, options.log);
    this.hook = hook2;
    if (!options.authStrategy) {
      if (!options.auth) {
        this.auth = async () => ({
          type: "unauthenticated"
        });
      } else {
        const auth2 = createTokenAuth(options.auth);
        hook2.wrap("request", auth2.hook);
        this.auth = auth2;
      }
    } else {
      const { authStrategy, ...otherOptions } = options;
      const auth2 = authStrategy(Object.assign({
        request: this.request,
        log: this.log,
        octokit: this,
        octokitOptions: otherOptions
      }, options.auth));
      hook2.wrap("request", auth2.hook);
      this.auth = auth2;
    }
    const classConstructor = this.constructor;
    classConstructor.plugins.forEach((plugin) => {
      Object.assign(this, plugin(this, options));
    });
  }
  static defaults(defaults) {
    const OctokitWithDefaults = class extends this {
      constructor(...args) {
        const options = args[0] || {};
        if (typeof defaults === "function") {
          super(defaults(options));
          return;
        }
        super(Object.assign({}, defaults, options, options.userAgent && defaults.userAgent ? {
          userAgent: `${options.userAgent} ${defaults.userAgent}`
        } : null));
      }
    };
    return OctokitWithDefaults;
  }
  static plugin(...newPlugins) {
    var _a;
    const currentPlugins = this.plugins;
    const NewOctokit = (_a = class extends this {
    }, _a.plugins = currentPlugins.concat(newPlugins.filter((plugin) => !currentPlugins.includes(plugin))), _a);
    return NewOctokit;
  }
}
Octokit.VERSION = VERSION;
Octokit.plugins = [];
class VuepressApiV1 {
  constructor(vuepressCfg, octokit) {
    __publicField(this, "vuepressCfg", {});
    __publicField(this, "octokit", {});
    this.vuepressCfg = vuepressCfg;
    this.octokit = octokit;
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
    let res;
    try {
      const route = "GET /repos/" + this.vuepressCfg.githubUser + "/" + this.vuepressCfg.githubRepo + "/contents/" + docPath;
      logUtil.logInfo("getPage route=>", route);
      res = await this.octokit.request(route, {
        owner: this.vuepressCfg.githubUser,
        repo: this.vuepressCfg.githubRepo,
        path: docPath
      });
      logUtil.logInfo("getPage res=>", res);
    } catch (e) {
      logUtil.logError("getPage error=>", e);
    }
    if (res) {
      data = res.data;
    }
    return data;
  }
  async createOrUpdatePage(docPath, mdContent, sha) {
    let res;
    try {
      const base64 = gBase64.toBase64(mdContent);
      const route = "PUT /repos/" + this.vuepressCfg.githubUser + "/" + this.vuepressCfg.githubRepo + "/contents/" + docPath;
      let options = {
        owner: this.vuepressCfg.githubUser,
        repo: this.vuepressCfg.githubRepo,
        path: docPath,
        message: this.vuepressCfg.defaultMsg,
        committer: {
          name: this.vuepressCfg.author,
          email: this.vuepressCfg.email
        },
        content: base64
      };
      if (sha) {
        Object.assign(options, {
          sha
        });
      }
      res = await this.octokit.request(route, options);
      logUtil.logInfo("createOrUpdatePage res=>", res);
    } catch (e) {
      logUtil.logError("createOrUpdatePage error=>", e);
    }
    return res;
  }
  async deletePage(docPath, sha) {
    let res;
    try {
      const route = "DELETE /repos/" + this.vuepressCfg.githubUser + "/" + this.vuepressCfg.githubRepo + "/contents/" + docPath;
      let options = {
        owner: this.vuepressCfg.githubUser,
        repo: this.vuepressCfg.githubRepo,
        path: docPath,
        message: this.vuepressCfg.defaultMsg,
        committer: {
          name: this.vuepressCfg.author,
          email: this.vuepressCfg.email
        },
        sha
      };
      res = await this.octokit.request(route, options);
      logUtil.logInfo("deletePage res=>", res);
    } catch (e) {
      logUtil.logError("deletePage error=>", e);
    }
    return res;
  }
}
async function publishPage(vuepressCfg, docPath, mdContent) {
  const octokit = new Octokit({
    auth: vuepressCfg.githubToken
  });
  const v1 = new VuepressApiV1(vuepressCfg, octokit);
  const sha = void 0;
  let res;
  res = await v1.createOrUpdatePage(docPath, mdContent, sha);
  logUtil.logInfo("Vuepress V1 publishPage,res=>", res);
  return res;
}
async function deletePage(vuepressCfg, docPath) {
  const octokit = new Octokit({
    auth: vuepressCfg.githubToken
  });
  const v1 = new VuepressApiV1(vuepressCfg, octokit);
  const sha = await v1.getPageSha(docPath);
  let res;
  res = await v1.deletePage(docPath, sha);
  logUtil.logInfo("Vuepress V1 deletePage,res=>", res);
  return res;
}
async function getPageTreeNode(vuepressCfg, docPath) {
  const octokit = new Octokit({
    auth: vuepressCfg.githubToken
  });
  const v1 = new VuepressApiV1(vuepressCfg, octokit);
  const data = await v1.getPageData(docPath);
  let treeNode = [];
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
      let node = {
        value: item.path,
        label: item.name,
        isLeaf: item.name.indexOf(".md") > -1
      };
      treeNode.push(node);
    }
    logUtil.logInfo("getPageTreeNode,data=>", data);
  }
  return treeNode;
}
class VuepressCfg {
  constructor(githubUser, githubRepo, githubToken, defaultBranch, defaultPath, defaultMsg, author, email) {
    __publicField(this, "posidKey", "");
    this.githubUser = githubUser;
    this.githubRepo = githubRepo;
    this.githubToken = githubToken;
    this.defaultBranch = defaultBranch;
    this.defaultPath = defaultPath;
    this.defaultMsg = defaultMsg;
    this.author = author;
    this.email = email;
    this.githubUser = githubUser;
    this.githubRepo = githubRepo;
    this.githubToken = githubToken;
    this.defaultBranch = defaultBranch;
    this.defaultPath = defaultPath;
    this.defaultMsg = defaultMsg;
    this.author = author;
    this.email = email;
    this.posidKey = POSTID_KEY_CONSTANTS.VUEPRESS_POSTID_KEY;
  }
}
const API_STATUS_VUEPRESS = "vuepress-status";
const API_STATUS_CNBLPGS = "cnblogs-status";
const API_STATUS_WORDPRESS = "wordpress-status";
const API_STATUS_CONFLUENCE = "confluence-status";
const API_STATUS_JVUE = "jvue-status";
const API_STATUS_YUQUE = "yuque-status";
const API_STATUS_WECHAT = "wechat-status";
const API_STATUS_LIANDI = "liandi-status";
const API_STATUS_CONSTANTS = {
  API_STATUS_VUEPRESS,
  API_STATUS_CNBLPGS,
  API_STATUS_WORDPRESS,
  API_STATUS_CONFLUENCE,
  API_STATUS_JVUE,
  API_STATUS_YUQUE,
  API_STATUS_WECHAT,
  API_STATUS_LIANDI
};
const _hoisted_1$7 = {
  href: "https://github.com/settings/tokens/new",
  target: "_blank"
};
const _hoisted_2$1 = ["href"];
const __default__$m = {
  name: "VuepressSetting"
};
const _sfc_main$m = /* @__PURE__ */ defineComponent({
  ...__default__$m,
  setup(__props) {
    const {
      t
    } = useI18n();
    const isLoading = ref(false);
    const apiStatus = ref(false);
    const autoDeleteTest = ref(true);
    const formSize = ref("default");
    const formRef = ref();
    const formData = reactive({
      githubUser: "",
      githubRepo: "",
      githubToken: "",
      defaultBranch: "main",
      defaultPath: "docs/_posts/",
      msg: "auto published by sy-post-publisher",
      author: "terwer",
      email: "youweics@163.com",
      previewUrl: "#preview"
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
    const testOnChange = (val) => {
      autoDeleteTest.value = val;
    };
    const submitForm = async (formEl) => {
      if (!formEl)
        return;
      const result = await formEl.validate((valid, fields) => {
        if (valid) {
          logUtil.logInfo("\u6821\u9A8C\u6210\u529F");
        } else {
          logUtil.logError(t("main.opt.failure"), fields);
          return;
        }
      });
      if (!result) {
        return;
      }
      const vuepressCfg = new VuepressCfg(formData.githubUser, formData.githubRepo, formData.githubToken, formData.defaultBranch, formData.defaultPath, formData.msg, formData.author, formData.email);
      setJSONConf(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS, vuepressCfg);
      ElMessage.success(t("main.opt.success"));
    };
    const valiConf = async () => {
      isLoading.value = true;
      const vuepressCfg = new VuepressCfg(formData.githubUser, formData.githubRepo, formData.githubToken, formData.defaultBranch, formData.defaultPath, formData.msg, formData.author, formData.email);
      const testFile = "test.md";
      const docPath = formData.defaultPath + testFile;
      const mdContent = "Hello World!" + formatIsoToZhDate(new Date().toISOString(), true);
      const res = await publishPage(vuepressCfg, docPath, mdContent);
      isLoading.value = false;
      if (!res) {
        apiStatus.value = false;
        setBooleanConf(API_STATUS_CONSTANTS.API_STATUS_VUEPRESS, apiStatus.value);
        ElMessage.error(t("main.opt.failure"));
        return;
      }
      if (autoDeleteTest.value) {
        await deletePage(vuepressCfg, docPath);
      }
      apiStatus.value = true;
      setBooleanConf(API_STATUS_CONSTANTS.API_STATUS_VUEPRESS, apiStatus.value);
      formData.previewUrl = "https://github.com/" + formData.githubUser + "/" + formData.githubRepo + "/blob/" + formData.defaultBranch + "/" + formData.defaultPath + testFile;
      ElMessage.success(t("main.opt.success"));
    };
    const resetForm = (formEl) => {
      if (!formEl)
        return;
      formEl.resetFields();
    };
    const initConf = () => {
      logUtil.logInfo("Vuepress\u914D\u7F6E\u521D\u59CB\u5316");
      const conf = getJSONConf(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS);
      if (conf) {
        logUtil.logInfo("vuepress conf=>", conf);
        formData.githubUser = conf.githubUser;
        formData.githubRepo = conf.githubRepo;
        formData.githubToken = conf.githubToken;
        formData.defaultBranch = conf.defaultBranch;
        formData.defaultPath = conf.defaultPath;
        formData.msg = conf.defaultMsg;
        formData.author = conf.author;
        formData.email = conf.email;
      }
      apiStatus.value = getBooleanConf(API_STATUS_CONSTANTS.API_STATUS_VUEPRESS);
    };
    onBeforeMount(async () => {
      initConf();
    });
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_switch = resolveComponent("el-switch");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_alert = resolveComponent("el-alert");
      const _component_el_form = resolveComponent("el-form");
      return openBlock(), createBlock(_component_el_form, {
        "label-width": "120px",
        ref_key: "formRef",
        ref: formRef,
        model: formData,
        rules,
        size: formSize.value,
        "status-icon": ""
      }, {
        default: withCtx(() => [createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.vuepress.github.user"),
          prop: "githubUser"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.githubUser,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => formData.githubUser = $event),
            placeholder: _ctx.$t("setting.blog.type.vuepress.github.user.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.vuepress.github.repo"),
          prop: "githubRepo"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.githubRepo,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.githubRepo = $event),
            placeholder: _ctx.$t("setting.blog.type.vuepress.github.repo.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.vuepress.github.token"),
          prop: "githubToken"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            type: "password",
            modelValue: formData.githubToken,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.githubToken = $event),
            placeholder: _ctx.$t("setting.blog.type.vuepress.github.token.tip"),
            "show-password": ""
          }, null, 8, ["modelValue", "placeholder"]), createBaseVNode("a", _hoisted_1$7, toDisplayString(_ctx.$t("setting.blog.type.vuepress.github.token.gen")), 1)]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.vuepress.github.default.path"),
          prop: "defaultPath"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.defaultPath,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.defaultPath = $event),
            placeholder: _ctx.$t("setting.blog.type.vuepress.github.default.path.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.vuepress.github.default.branch"),
          prop: "defaultBranch"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.defaultBranch,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.defaultBranch = $event),
            placeholder: _ctx.$t("setting.blog.type.vuepress.github.default.branch.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.vuepress.github.msg"),
          prop: "msg"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.msg,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.msg = $event),
            placeholder: _ctx.$t("setting.blog.type.vuepress.github.msg.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.vuepress.github.author"),
          prop: "author"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.author,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.author = $event),
            placeholder: _ctx.$t("setting.blog.type.vuepress.github.author.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.blog.type.vuepress.github.email"),
          prop: "email"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: formData.email,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => formData.email = $event),
            placeholder: _ctx.$t("setting.blog.type.vuepress.github.email.tip")
          }, null, 8, ["modelValue", "placeholder"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_form_item, {
          label: _ctx.$t("form.validate.vuepress.auto.delete")
        }, {
          default: withCtx(() => [createVNode(_component_el_switch, {
            modelValue: autoDeleteTest.value,
            "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => autoDeleteTest.value = $event),
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
            onClick: _cache[9] || (_cache[9] = ($event) => submitForm(formRef.value))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.blog.save")), 1)]),
            _: 1
          }), createVNode(_component_el_button, {
            onClick: _cache[10] || (_cache[10] = ($event) => resetForm(formRef.value))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("setting.blog.cancel")), 1)]),
            _: 1
          })]),
          _: 1
        }), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createBaseVNode("a", {
            href: formData.previewUrl,
            target: "_blank"
          }, toDisplayString(formData.previewUrl), 9, _hoisted_2$1)]),
          _: 1
        })]),
        _: 1
      }, 8, ["model", "rules", "size"]);
    };
  }
});
const VuepressSetting_vue_vue_type_style_index_0_scoped_10057320_lang = "";
const VuepressSetting = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-10057320"]]);
class CnblogsCfg extends MetaweblogCfg {
  constructor() {
    super("https://www.cnblogs.com/[yourblog]", "https://rpc.cnblogs.com/metaweblog/[yourblog]", "", "");
    this.posidKey = POSTID_KEY_CONSTANTS.CNBLOGS_POSTID_KEY;
    this.previewUrl = "/p/[postid].html";
    this.pageType = PageType.Markdown;
  }
}
const __default__$l = {
  name: "CnblogsSetting",
  components: {
    MetaweblogSetting: _sfc_main$o
  }
};
const _sfc_main$l = /* @__PURE__ */ defineComponent({
  ...__default__$l,
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_CNBLOGS);
    const cnblogsCfg = new CnblogsCfg();
    const cfg = ref(cnblogsCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$o, {
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
const __default__$k = {
  name: "ConfluenceSetting"
};
const _sfc_main$k = /* @__PURE__ */ defineComponent({
  ...__default__$k,
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_CONFLUENCE);
    const cfg = ref(new ConfCfg());
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$o, {
        "api-type": apiType.value,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
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
  }
}
const _hoisted_1$6 = ["href"];
const _hoisted_2 = ["href"];
const __default__$j = {
  name: "CommonBlogSetting"
};
const _sfc_main$j = /* @__PURE__ */ defineComponent({
  ...__default__$j,
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
      logUtil.logInfo("\u901A\u7528Setting\u9A8C\u8BC1\u5B8C\u6BD5");
    };
    const saveConf = (hideTip) => {
      logUtil.logInfo("Metaweblog\u901A\u7528Setting\u4FDD\u5B58\u914D\u7F6E");
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
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const initConf = () => {
      logUtil.logInfo("\u901A\u7528Setting\u914D\u7F6E\u521D\u59CB\u5316");
      let conf = getJSONConf(props.apiType);
      if (isEmptyObject(conf)) {
        conf = props.cfg;
      }
      if (conf) {
        logUtil.logInfo("get setting conf=>", conf);
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
      const _component_el_alert = resolveComponent("el-alert");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_form = resolveComponent("el-form");
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
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => home.value = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"]), props.usernameEnabled ? (openBlock(), createBlock(_component_el_form_item, {
          key: 0,
          label: _ctx.$t("setting.common.username")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: username.value,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => username.value = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), props.passwordEnabled ? (openBlock(), createBlock(_component_el_form_item, {
          key: 1,
          label: _ctx.$t("setting.common.password")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            type: "password",
            modelValue: password.value,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => password.value = $event),
            "show-password": ""
          }, null, 8, ["modelValue"]), createBaseVNode("a", {
            href: tokenSettingUrl.value,
            target: "_blank"
          }, toDisplayString(_ctx.$t("setting.common.username.gen")) + "\uFF1A" + toDisplayString(tokenSettingUrl.value), 9, _hoisted_1$6)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), props.tokenEnabled ? (openBlock(), createBlock(_component_el_form_item, {
          key: 2,
          label: _ctx.$t("setting.common.token")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            type: "password",
            modelValue: token.value,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => token.value = $event),
            "show-password": ""
          }, null, 8, ["modelValue"]), createBaseVNode("a", {
            href: tokenSettingUrl.value,
            target: "_blank"
          }, toDisplayString(_ctx.$t("setting.common.token.gen")) + "\uFF1A" + toDisplayString(tokenSettingUrl.value), 9, _hoisted_2)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
          label: _ctx.$t("setting.common.apiurl")
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: apiUrl.value,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => apiUrl.value = $event)
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
const __default__$i = {
  name: "LiandiSetting",
  components: {
    CommonBlogSetting: _sfc_main$j
  }
};
const _sfc_main$i = /* @__PURE__ */ defineComponent({
  ...__default__$i,
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_LIANDI);
    const liandiCfg = new LiandiCfg();
    const cfg = ref(liandiCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$j, {
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
const __default__$h = {
  name: "YuqueSetting",
  components: {
    CommonBlogSetting: _sfc_main$j
  }
};
const _sfc_main$h = /* @__PURE__ */ defineComponent({
  ...__default__$h,
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_YUQUE);
    const yuqueCfg = new YuqueCfg();
    const cfg = ref(yuqueCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$j, {
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
const __default__$g = {
  name: "KmsSetting",
  components: {
    CommonBlogSetting: _sfc_main$j
  }
};
const _sfc_main$g = /* @__PURE__ */ defineComponent({
  ...__default__$g,
  setup(__props) {
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_KMS);
    const kmsCfg = new KmsCfg();
    const cfg = ref(kmsCfg);
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$j, {
        "api-type": apiType.value,
        "username-enabled": true,
        "password-enabled": true,
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
const __default__$f = {
  name: "WordpressSetting",
  components: {
    MetaweblogSetting: _sfc_main$o
  }
};
const _sfc_main$f = /* @__PURE__ */ defineComponent({
  ...__default__$f,
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
    const apiType = ref(API_TYPE_CONSTANTS.API_TYPE_WORDPRESS);
    const cfg = ref(new WordpressCfg());
    if (props.apiType) {
      apiType.value = props.apiType;
    }
    if (props.cfg) {
      cfg.value = props.cfg;
    }
    return (_ctx, _cache) => {
      return openBlock(), createBlock(_sfc_main$o, {
        "api-type": apiType.value,
        cfg: cfg.value
      }, null, 8, ["api-type", "cfg"]);
    };
  }
});
class DynamicMCfg extends MetaweblogCfg {
  constructor(postidKey) {
    super("", "", "", "");
    this.posidKey = postidKey;
    this.previewUrl = "/p/[postid].html";
    this.pageType = PageType.Html;
  }
}
class DynamicWCfg extends MetaweblogCfg {
  constructor(postidKey) {
    super("http://localhost:8000", "http://localhost:8000/xmlrpc.php", "", "");
    this.posidKey = postidKey;
    this.previewUrl = "/?p=[postid]";
    this.pageType = PageType.Html;
  }
}
const _hoisted_1$5 = {
  key: 1
};
const __default__$e = {
  name: "PlantformSetting",
  components: {
    VuepressSetting,
    JVueSetting: _sfc_main$n,
    CnblogsSetting: _sfc_main$l,
    ConfluenceSetting: _sfc_main$k,
    LiandiSetting: _sfc_main$i,
    YuqueSetting: _sfc_main$h,
    KmsSetting: _sfc_main$g,
    MetaweblogSetting: _sfc_main$o,
    WordpressSetting: _sfc_main$f
  }
};
const _sfc_main$e = /* @__PURE__ */ defineComponent({
  ...__default__$e,
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
      jvueEnabled,
      confEnabled,
      cnblogsEnabled,
      wordpressEnabled,
      liandiEnabled,
      yuqueEnabled,
      kmsEnabled,
      doCount
    } = useTabCount();
    let formData = reactive({
      dynamicConfigArray: [],
      metaweblogArray: [],
      wordpressArray: []
    });
    const createMCfg = ref((mcfg) => {
      return new DynamicMCfg("custom-" + mcfg.plantformKey + "-post-id");
    });
    const createWCfg = ref((wcfg) => {
      return new DynamicWCfg("custom-" + wcfg.plantformKey + "-post-id");
    });
    const initDynCfg = (dynCfg) => {
      const newCfg = [];
      dynCfg.forEach((item) => {
        const newItem = new DynamicConfig(item.plantformType, item.plantformKey, item.plantformName);
        const switchKey = "switch-" + item.plantformKey;
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
      formData.metaweblogArray = initDynCfg(dynamicJsonCfg.metaweblogCfg || []);
      formData.wordpressArray = initDynCfg(dynamicJsonCfg.wordpressCfg || []);
      logUtil.logInfo("dynamicJsonCfg=>");
      logUtil.logInfo(JSON.stringify(dynamicJsonCfg));
      logUtil.logInfo("\u5E73\u53F0\u8BBE\u7F6E\u521D\u59CB\u5316");
    };
    watch(() => props.isReload, (oldValue, newValue) => {
      initConf();
      logUtil.logInfo("plantform-setting\u521D\u59CB\u5316");
    });
    return (_ctx, _cache) => {
      const _component_el_tab_pane = resolveComponent("el-tab-pane");
      const _component_el_tabs = resolveComponent("el-tabs");
      const _component_el_alert = resolveComponent("el-alert");
      return unref(tabCountStore).tabCount > 0 ? (openBlock(), createBlock(_component_el_tabs, {
        key: 0,
        type: "border-card"
      }, {
        default: withCtx(() => [unref(vuepressEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 0,
          label: _ctx.$t("setting.vuepress")
        }, {
          default: withCtx(() => [createVNode(VuepressSetting)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(jvueEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 1,
          label: _ctx.$t("setting.jvue")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$n)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(confEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 2,
          label: _ctx.$t("setting.conf")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$k)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(cnblogsEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 3,
          label: _ctx.$t("setting.cnblogs")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$l)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(wordpressEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 4,
          label: _ctx.$t("setting.wordpress")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$f)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(liandiEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 5,
          label: _ctx.$t("setting.liandi")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$i)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(yuqueEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 6,
          label: _ctx.$t("setting.yuque")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$h)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(kmsEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 7,
          label: _ctx.$t("setting.kms")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$g)]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(formData).metaweblogArray, (mcfg) => {
          return openBlock(), createBlock(_component_el_tab_pane, {
            label: mcfg.plantformName + "_" + mcfg.plantformType.toUpperCase().substring(0, 1)
          }, {
            default: withCtx(() => [createVNode(_sfc_main$o, {
              "api-type": mcfg.plantformKey,
              cfg: createMCfg.value(mcfg)
            }, null, 8, ["api-type", "cfg"])]),
            _: 2
          }, 1032, ["label"]);
        }), 256)), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(formData).wordpressArray, (wcfg) => {
          return openBlock(), createBlock(_component_el_tab_pane, {
            label: wcfg.plantformName + "_" + wcfg.plantformType.toUpperCase().substring(0, 1)
          }, {
            default: withCtx(() => [createVNode(_sfc_main$f, {
              "api-type": wcfg.plantformKey,
              cfg: createWCfg.value(wcfg)
            }, null, 8, ["api-type", "cfg"])]),
            _: 2
          }, 1032, ["label"]);
        }), 256))]),
        _: 1
      })) : (openBlock(), createElementBlock("div", _hoisted_1$5, [createVNode(_component_el_alert, {
        class: "top-version-tip",
        title: _ctx.$t("config.platform.none"),
        type: "error",
        closable: false
      }, null, 8, ["title"])]));
    };
  }
});
const _hoisted_1$4 = {
  key: 1
};
const __default__$d = {
  name: "PostBind"
};
const _sfc_main$d = /* @__PURE__ */ defineComponent({
  ...__default__$d,
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
    const {
      t
    } = useI18n();
    const {
      tabCountStore,
      vuepressEnabled,
      jvueEnabled,
      confEnabled,
      cnblogsEnabled,
      wordpressEnabled,
      liandiEnabled,
      yuqueEnabled,
      kmsEnabled,
      doCount
    } = useTabCount();
    let formData = reactive({
      dynamicConfigArray: []
    });
    const initConf = () => {
      doCount();
      const dynamicJsonCfg = getDynamicJsonCfg();
      const results = dynamicJsonCfg.totalCfg || [];
      formData.dynamicConfigArray = [];
      results.forEach((item) => {
        const switchKey = "switch-" + item.plantformKey;
        const switchValue = getBooleanConf(switchKey);
        item.modelValue = switchValue;
        formData.dynamicConfigArray.push(item);
      });
      logUtil.logInfo(formData.dynamicConfigArray);
      logUtil.logInfo("\u5E73\u53F0\u8BBE\u7F6E\u521D\u59CB\u5316");
    };
    watch(() => props.isReload, async (oldValue, newValue) => {
      initConf();
      await initPage();
    });
    onBeforeMount(async () => {
      initConf();
      await initPage();
    });
    onMounted(() => {
    });
    const siyuanData = {
      pageId: "",
      meta: {}
    };
    const formSize = ref("default");
    const ruleFormRef = ref();
    const ruleForm = reactive({
      vuepressSlug: "",
      jvuePostid: "",
      cnblogsPostid: "",
      confPostid: "",
      wordpressPostid: "",
      liandiPostid: "",
      yuquePostid: "",
      kmsPostid: ""
    });
    const rules = reactive({});
    async function initPage() {
      const pageId = await getPageId(true, props.pageId);
      logUtil.logInfo("PostBind pageId=>", pageId);
      if (!pageId || pageId == "") {
        return;
      }
      const meta = await getPageAttrs(pageId);
      siyuanData.pageId = pageId;
      siyuanData.meta = meta;
      ruleForm.vuepressSlug = meta[POSTID_KEY_CONSTANTS.VUEPRESS_POSTID_KEY];
      ruleForm.jvuePostid = meta[POSTID_KEY_CONSTANTS.JVUE_POSTID_KEY];
      ruleForm.confPostid = meta[POSTID_KEY_CONSTANTS.CONFLUENCE_POSTID_KEY];
      ruleForm.cnblogsPostid = meta[POSTID_KEY_CONSTANTS.CNBLOGS_POSTID_KEY];
      ruleForm.wordpressPostid = meta[POSTID_KEY_CONSTANTS.WORDPRESS_POSTID_KEY];
      ruleForm.liandiPostid = meta[POSTID_KEY_CONSTANTS.LIANDI_POSTID_KEY];
      ruleForm.yuquePostid = meta[POSTID_KEY_CONSTANTS.YUQUE_POSTID_KEY];
      ruleForm.kmsPostid = meta[POSTID_KEY_CONSTANTS.KMS_POSTID_KEY];
      const results = formData.dynamicConfigArray;
      formData.dynamicConfigArray = [];
      results.forEach((item) => {
        const posidKey = "custom-" + item.plantformKey + "-post-id";
        item.posid = meta[posidKey] || "";
        formData.dynamicConfigArray.push(item);
      });
    }
    const assignPostid = (enabled, customAttr, key, value) => {
      if (enabled && !isEmptyString(value)) {
        Object.assign(customAttr, {
          [key]: value
        });
      } else {
        Object.assign(customAttr, {
          [key]: ""
        });
      }
    };
    const submitForm = async (formEl) => {
      if (!formEl)
        return;
      const result = await formEl.validate((valid, fields) => {
        if (valid) {
          logUtil.logInfo("\u6821\u9A8C\u6210\u529F");
        } else {
          logUtil.logError(t("main.opt.failure"), fields);
          return;
        }
      });
      if (!result) {
        return;
      }
      const customAttr = {};
      assignPostid(vuepressEnabled.value, customAttr, POSTID_KEY_CONSTANTS.VUEPRESS_POSTID_KEY, ruleForm.vuepressSlug);
      assignPostid(jvueEnabled.value, customAttr, POSTID_KEY_CONSTANTS.JVUE_POSTID_KEY, ruleForm.jvuePostid);
      assignPostid(confEnabled.value, customAttr, POSTID_KEY_CONSTANTS.CONFLUENCE_POSTID_KEY, ruleForm.confPostid);
      assignPostid(cnblogsEnabled.value, customAttr, POSTID_KEY_CONSTANTS.CNBLOGS_POSTID_KEY, ruleForm.cnblogsPostid);
      assignPostid(wordpressEnabled.value, customAttr, POSTID_KEY_CONSTANTS.WORDPRESS_POSTID_KEY, ruleForm.wordpressPostid);
      assignPostid(liandiEnabled.value, customAttr, POSTID_KEY_CONSTANTS.LIANDI_POSTID_KEY, ruleForm.liandiPostid);
      assignPostid(yuqueEnabled.value, customAttr, POSTID_KEY_CONSTANTS.YUQUE_POSTID_KEY, ruleForm.yuquePostid);
      assignPostid(kmsEnabled.value, customAttr, POSTID_KEY_CONSTANTS.KMS_POSTID_KEY, ruleForm.kmsPostid);
      formData.dynamicConfigArray.forEach((item) => {
        const posidKey = "custom-" + item.plantformKey + "-post-id";
        assignPostid(item.modelValue, customAttr, posidKey, item.posid);
      });
      logUtil.logInfo("PostBind\u4FDD\u5B58\u5C5E\u6027\u5230\u601D\u6E90\u7B14\u8BB0,meta=>", customAttr);
      await setPageAttrs(siyuanData.pageId, customAttr);
      ElMessage.success(t("main.opt.success"));
    };
    const resetForm = (formEl) => {
      if (!formEl)
        return;
      formEl.resetFields();
    };
    return (_ctx, _cache) => {
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_alert = resolveComponent("el-alert");
      return unref(tabCountStore).tabCount > 0 ? (openBlock(), createBlock(_component_el_form, {
        key: 0,
        "label-width": "125px",
        ref_key: "ruleFormRef",
        ref: ruleFormRef,
        model: ruleForm,
        rules,
        size: formSize.value,
        "status-icon": ""
      }, {
        default: withCtx(() => [unref(vuepressEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 0,
          label: _ctx.$t("post.bind.vuepress.slug"),
          prop: "vuepressSlug"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.vuepressSlug,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => ruleForm.vuepressSlug = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(jvueEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 1,
          label: _ctx.$t("post.bind.jvue.postid"),
          prop: "jvuePostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.jvuePostid,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => ruleForm.jvuePostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(confEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 2,
          label: _ctx.$t("post.bind.conf.postid"),
          prop: "confPostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.confPostid,
            "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => ruleForm.confPostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(cnblogsEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 3,
          label: _ctx.$t("post.bind.cnblogs.postid"),
          prop: "cnblogsPostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.cnblogsPostid,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => ruleForm.cnblogsPostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(wordpressEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 4,
          label: _ctx.$t("post.bind.wordpress.postid"),
          prop: "wordpressPostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.wordpressPostid,
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => ruleForm.wordpressPostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(liandiEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 5,
          label: _ctx.$t("post.bind.liandi.postid"),
          prop: "liandiPostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.liandiPostid,
            "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => ruleForm.liandiPostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(yuqueEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 6,
          label: _ctx.$t("post.bind.yuque.postid"),
          prop: "yuquePostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.yuquePostid,
            "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => ruleForm.yuquePostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(kmsEnabled) ? (openBlock(), createBlock(_component_el_form_item, {
          key: 7,
          label: _ctx.$t("post.bind.kms.postid"),
          prop: "kmsPostid"
        }, {
          default: withCtx(() => [createVNode(_component_el_input, {
            modelValue: ruleForm.kmsPostid,
            "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => ruleForm.kmsPostid = $event)
          }, null, 8, ["modelValue"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(formData).dynamicConfigArray, (cfg) => {
          return withDirectives((openBlock(), createBlock(_component_el_form_item, {
            label: cfg.plantformName + "_" + cfg.plantformType.toUpperCase().substring(0, 1) + " ID"
          }, {
            default: withCtx(() => [createVNode(_component_el_input, {
              modelValue: cfg.posid,
              "onUpdate:modelValue": ($event) => cfg.posid = $event
            }, null, 8, ["modelValue", "onUpdate:modelValue"])]),
            _: 2
          }, 1032, ["label"])), [[vShow, cfg.modelValue]]);
        }), 256)), createVNode(_component_el_form_item, null, {
          default: withCtx(() => [createVNode(_component_el_button, {
            type: "primary",
            onClick: _cache[8] || (_cache[8] = ($event) => submitForm(ruleFormRef.value))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("post.bind.conf.save")), 1)]),
            _: 1
          }), createVNode(_component_el_button, {
            onClick: _cache[9] || (_cache[9] = ($event) => resetForm(ruleFormRef.value))
          }, {
            default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("post.bind.conf.cancel")), 1)]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      }, 8, ["model", "rules", "size"])) : (openBlock(), createElementBlock("div", _hoisted_1$4, [createVNode(_component_el_alert, {
        class: "top-version-tip",
        title: _ctx.$t("config.platform.none"),
        type: "error",
        closable: false
      }, null, 8, ["title"])]));
    };
  }
});
const SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY = "custom-slug";
const SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY = "custom-desc";
const SIYUAN_PAGE_ATTR_KEY = {
  SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY,
  SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY
};
var toggleSelection = function() {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function() {
    };
  }
  var active = document.activeElement;
  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }
  switch (active.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      active.blur();
      break;
    default:
      active = null;
      break;
  }
  selection.removeAllRanges();
  return function() {
    selection.type === "Caret" && selection.removeAllRanges();
    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }
    active && active.focus();
  };
};
var deselectCurrent = toggleSelection;
var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
};
var defaultMessage = "Copy to clipboard: #{key}, Enter";
function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}
function copy(text, options) {
  var debug, message, reselectPrevious, range, selection, mark, success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();
    range = document.createRange();
    selection = document.getSelection();
    mark = document.createElement("span");
    mark.textContent = text;
    mark.style.all = "unset";
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    mark.style.whiteSpace = "pre";
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") {
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format2 = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"];
          window.clipboardData.setData(format2, text);
        } else {
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });
    document.body.appendChild(mark);
    range.selectNodeContents(mark);
    selection.addRange(range);
    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err2) {
      debug && console.error("unable to copy using clipboardData: ", err2);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }
    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }
  return success;
}
var copyToClipboard = copy;
var bitwise = function(str) {
  var hash = 0;
  if (str.length == 0)
    return hash;
  for (var i = 0; i < str.length; i++) {
    var ch = str.charCodeAt(i);
    hash = (hash << 5) - hash + ch;
    hash = hash & hash;
  }
  return hash;
};
var binaryTransfer = function(integer, binary) {
  var dictionary = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  binary = binary || 62;
  var stack = [];
  var num;
  var result = "";
  var sign = integer < 0 ? "-" : "";
  integer = Math.abs(integer);
  while (integer >= binary) {
    num = integer % binary;
    integer = Math.floor(integer / binary);
    stack.push(dictionary[num]);
  }
  if (integer > 0) {
    stack.push(dictionary[integer]);
  }
  for (var i = stack.length - 1; i >= 0; i--) {
    result += stack[i];
  }
  return sign + result;
};
var shortHash = function(text) {
  var type = typeof text;
  if (type === "string" || type === "number") {
    var id = binaryTransfer(bitwise(String(text)), 61);
    return id.replace("-", "Z");
  } else {
    throw new Error("Unexpected input type");
  }
};
var dist = shortHash;
const _hoisted_1$3 = ["href", "title"];
const __default__$c = {
  name: "VuepressMain"
};
const _sfc_main$c = /* @__PURE__ */ defineComponent({
  ...__default__$c,
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
    const {
      t
    } = useI18n();
    watch(() => props.isReload, async (oldValue, newValue) => {
      await initPage();
      logUtil.logInfo("VuepressMain\u68C0\u6D4B\u5230\u66F4\u65B0\u64CD\u4F5C\uFF0C\u5237\u65B0\u9875\u9762");
    });
    onBeforeMount(async () => {
      await initPage();
    });
    const isSlugLoading = ref(false);
    const isDescLoading = ref(false);
    const isTagLoading = ref(false);
    const isGenLoading = ref(false);
    const isPublishLoading = ref(false);
    const isCancelLoading = ref(false);
    const isInitLoadding = ref(false);
    const editMode = ref(false);
    const slugHashEnabled = ref(false);
    const vuepressGithubEnabled = ref(false);
    const useDefaultPath = ref(true);
    const isPublished = ref(false);
    const previewUrl = ref("");
    const forceRefresh = ref(false);
    const tagSwitch = ref(false);
    const formData = ref({
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
      customPath: "",
      categories: ["\u9ED8\u8BA4\u5206\u7C7B"]
    });
    const siyuanData = ref({
      pageId: "",
      meta: {
        tags: ""
      }
    });
    const vuepressData = ref({
      yamlObj: {
        title: "",
        date: new Date(),
        permalink: "/post/convert-npm-dependencies-to-local.html",
        meta: [{
          name: "keywords",
          content: ""
        }, {
          name: "description",
          content: ""
        }],
        categories: [],
        tags: [],
        author: {
          name: "terwer",
          link: "https://github.com/terwer"
        }
      },
      formatter: "",
      vuepressContent: "",
      vuepressFullContent: ""
    });
    const simpleMode = () => {
      editMode.value = false;
    };
    const complexMode = () => {
      editMode.value = true;
    };
    async function initPage() {
      isInitLoadding.value = true;
      const pageId = await getPageId(true, props.pageId);
      logUtil.logInfo("VuepressMain pageId=>", pageId);
      if (!pageId || pageId == "") {
        isInitLoadding.value = false;
        return;
      }
      const page = await getPage(pageId);
      if (!page) {
        isInitLoadding.value = false;
        ElMessage.error(t("config.error.msg") + "_vuepress");
        throw new Error(t("config.error.msg") + "_vuepress");
      }
      logUtil.logInfo("VuepressMain\u83B7\u53D6\u4E3B\u6587\u6863", page);
      siyuanData.value.pageId = pageId;
      siyuanData.value.meta = await getPageAttrs(pageId);
      formData.value.title = page.content + ".md";
      formData.value.customSlug = siyuanData.value.meta[SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY];
      formData.value.desc = siyuanData.value.meta[SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY];
      formData.value.created = formatNumToZhDate(page.created);
      formData.value.tag.dynamicTags = [];
      const tagstr = siyuanData.value.meta.tags || "";
      const tgarr = tagstr.split(",");
      for (let i = 0; i < tgarr.length; i++) {
        const tg = tgarr[i];
        if (tg != "") {
          formData.value.tag.dynamicTags.push(tgarr[i]);
        }
      }
      const isOk = getBooleanConf(API_STATUS_CONSTANTS.API_STATUS_VUEPRESS);
      vuepressGithubEnabled.value = isOk;
      slugHashEnabled.value = true;
      logUtil.logInfo("Vuepress\u7684api\u72B6\u6001=>");
      logUtil.logInfo(isOk);
      convertAttrToYAML();
      const data = await getPageMd(siyuanData.value.pageId);
      const md = removeMdWidgetTag(data.content);
      vuepressData.value.vuepressContent = md;
      vuepressData.value.vuepressFullContent = vuepressData.value.formatter + "\n" + vuepressData.value.vuepressContent;
      isPublished.value = getPublishStatus(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS, siyuanData.value.meta);
      if (isPublished.value) {
        const vuepressCfg = getJSONConf(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS);
        const docPath = getDocPath();
        useDefaultPath.value = false;
        formData.value.customPath = docPath;
        previewUrl.value = "https://github.com/" + vuepressCfg.githubUser + "/" + vuepressCfg.githubRepo + "/blob/" + vuepressCfg.defaultBranch + "/" + docPath;
      }
      isInitLoadding.value = false;
    }
    function getDocPath() {
      const postidKey = getApiParams(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS).posidKey;
      const meta = siyuanData.value.meta;
      const docPath = meta[postidKey] || "";
      return docPath;
    }
    function checkForce() {
      if (isEmptyString(formData.value.customSlug)) {
        return true;
      }
      if (!forceRefresh.value) {
        logUtil.logInfo(t("main.force.refresh.tip"));
        return false;
      }
      return true;
    }
    async function makeSlug(hideTip) {
      if (!checkForce()) {
        return;
      }
      isSlugLoading.value = true;
      const page = await getPage(siyuanData.value.pageId);
      logUtil.logInfo("page=>", page);
      let fmtTitle = page.content;
      fmtTitle = mdFileToTitle(fmtTitle);
      logUtil.logInfo("fmtTitle=>", fmtTitle);
      if (formData.value.checkList.length > 0) {
        const result = await zhSlugify(fmtTitle);
        logUtil.logInfo("result=>", result);
        if (result) {
          formData.value.customSlug = result;
        } else {
          ElMessage.success(t("main.opt.failure"));
        }
      } else {
        formData.value.customSlug = await pingyinSlugify(fmtTitle);
      }
      if (slugHashEnabled.value) {
        const newstr = page.content + new Date().toISOString();
        const hashstr = "-" + dist(newstr).toLowerCase();
        formData.value.customSlug += hashstr;
      }
      isSlugLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    }
    async function makeDesc(hideTip) {
      isDescLoading.value = true;
      const data = await getPageMd(siyuanData.value.pageId);
      const md = data.content;
      let html = mdToPlainText(md);
      formData.value.desc = parseHtml(html, CONSTANTS.MAX_PREVIEW_LENGTH, true);
      isDescLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    }
    const createTimeChanged = (val) => {
      logUtil.logInfo("createTimeChanged=>", val);
    };
    const tagHandleClose = (tag) => {
      formData.value.tag.dynamicTags.splice(formData.value.tag.dynamicTags.indexOf(tag), 1);
    };
    const tagRefInput = ref();
    const tagShowInput = () => {
      formData.value.tag.inputVisible = true;
      nextTick(() => {
        tagRefInput.value.focus();
      });
    };
    const tagHandleInputConfirm = () => {
      if (formData.value.tag.inputValue) {
        formData.value.tag.dynamicTags.push(formData.value.tag.inputValue);
      }
      formData.value.tag.inputVisible = false;
      formData.value.tag.inputValue = "";
    };
    async function fetchTag(hideTip) {
      if (!tagSwitch.value) {
        ElMessage.warning(t("main.tag.auto.switch.no.tip"));
        return;
      }
      isTagLoading.value = true;
      const data = await getPageMd(siyuanData.value.pageId);
      const md = data.content;
      const genTags = await cutWords(md);
      logUtil.logInfo("genTags=>", genTags);
      const hotTags = jiebaToHotWords(genTags, 5);
      logUtil.logInfo("hotTags=>", hotTags);
      for (let i = 0; i < hotTags.length; i++) {
        if (!formData.value.tag.dynamicTags.includes(hotTags[i])) {
          formData.value.tag.dynamicTags.push(hotTags[i]);
        }
      }
      isTagLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    }
    async function saveAttrToSiyuan(hideTip) {
      const customAttr = {
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY]: formData.value.customSlug,
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY]: formData.value.desc,
        tags: formData.value.tag.dynamicTags.join(",")
      };
      await setPageAttrs(siyuanData.value.pageId, customAttr);
      logUtil.logInfo("VuepressMain\u4FDD\u5B58\u5C5E\u6027\u5230\u601D\u6E90\u7B14\u8BB0,meta=>", customAttr);
      if (hideTip != true) {
        await initPage();
        ElMessage.success(t("main.opt.success"));
      }
    }
    const mdFileToTitle = (fmtTitle) => {
      if (fmtTitle.indexOf(".md") > -1) {
        fmtTitle = fmtTitle.replace(/\.md/g, "");
      }
      if (fmtTitle.indexOf(".") > -1) {
        fmtTitle = fmtTitle.replace(/\d*\./g, "");
      }
      return fmtTitle;
    };
    const convertAttrToYAML = () => {
      logUtil.logInfo("convertAttrToYAML,formData=>", formData);
      let fmtTitle = formData.value.title;
      fmtTitle = mdFileToTitle(fmtTitle);
      vuepressData.value.yamlObj.title = fmtTitle;
      vuepressData.value.yamlObj.permalink = "/post/" + formData.value.customSlug + ".html";
      vuepressData.value.yamlObj.date = covertStringToDate(formData.value.created);
      const meta = [{
        name: "keywords",
        content: formData.value.tag.dynamicTags.join(" ")
      }, {
        name: "description",
        content: formData.value.desc
      }];
      vuepressData.value.yamlObj.meta = meta;
      vuepressData.value.yamlObj.tags = formData.value.tag.dynamicTags;
      vuepressData.value.yamlObj.categories = formData.value.categories;
      let yaml = obj2yaml(vuepressData.value.yamlObj);
      yaml = formatIsoToZhDate(yaml, true);
      vuepressData.value.formatter = yaml;
      vuepressData.value.vuepressFullContent = vuepressData.value.formatter;
    };
    const convertYAMLToAttr = () => {
      vuepressData.value.formatter = vuepressData.value.vuepressFullContent;
      vuepressData.value.yamlObj = yaml2Obj(vuepressData.value.formatter);
      logUtil.logInfo("convertYAMLToAttr,yamlObj=>", vuepressData.value.yamlObj);
      formData.value.title = vuepressData.value.yamlObj.title + ".md";
      formData.value.customSlug = vuepressData.value.yamlObj.permalink.replace("/pages/", "").replace("/post/", "").replace(".html", "").replace("/", "");
      formData.value.created = formatIsoToZhDate(vuepressData.value.yamlObj.date.toISOString(), false);
      const yamlMeta = vuepressData.value.yamlObj.meta;
      for (let i = 0; i < yamlMeta.length; i++) {
        const m = yamlMeta[i];
        if (m.name === "description") {
          formData.value.desc = m.content;
          break;
        }
      }
      for (let j = 0; j < vuepressData.value.yamlObj.tags.length; j++) {
        const tag = vuepressData.value.yamlObj.tags[j];
        if (!formData.value.tag.dynamicTags.includes(tag) && tag != "") {
          formData.value.tag.dynamicTags.push(tag);
        }
      }
      formData.value.categories = vuepressData.value.yamlObj.categories;
    };
    const fmtRefInput = ref();
    const copyToClipboard$1 = () => {
      nextTick(() => {
        fmtRefInput.value.focus();
        copyToClipboard(vuepressData.value.vuepressFullContent);
        ElMessage.success(t("main.opt.success"));
      });
    };
    const githubOnChange = (val) => {
      slugHashEnabled.value = val;
      vuepressGithubEnabled.value = val;
    };
    const defaultPathOnChange = (val) => {
      useDefaultPath.value = val;
    };
    const customProps = {
      label: "label",
      children: "children",
      isLeaf: "isLeaf"
    };
    const customLoad = async (node, resolve) => {
      if (node.isLeaf)
        return resolve([]);
      logUtil.logInfo("\u76EE\u524D\u5DF2\u4FDD\u5B58\u8DEF\u5F84=>", formData.value.customPath);
      logUtil.logInfo("\u5F53\u524D\u8282\u70B9=>", node.data);
      const vuepressCfg = getJSONConf(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS);
      let docPath;
      let parentDocPath = node.data.value || "";
      if (parentDocPath == "") {
        parentDocPath = "docs/";
      }
      docPath = parentDocPath;
      const treeNode = await getPageTreeNode(vuepressCfg, docPath);
      resolve(treeNode);
    };
    async function doPublish() {
      isPublishLoading.value = true;
      await doCancel(false);
      const fmtTitle = mdFileToTitle(formData.value.title);
      if (/[\s*|\\.]/g.test(fmtTitle)) {
        logUtil.logInfo("fmtTitle=>", fmtTitle);
        ElMessage.error("\u6587\u4EF6\u540D\u4E0D\u80FD\u5305\u542B\u7A7A\u683C\u6216\u8005\u7279\u6B8A\u5B57\u7B26");
        return;
      }
      await oneclickAttr(true);
      const isOk = getBooleanConf(API_STATUS_CONSTANTS.API_STATUS_VUEPRESS);
      if (!isOk && vuepressGithubEnabled.value) {
        await initPage();
        isPublishLoading.value = false;
        ElMessage.error("\u68C0\u6D4B\u5230api\u4E0D\u53EF\u7528\u6216\u8005\u914D\u7F6E\u9519\u8BEF\uFF0C\u65E0\u6CD5\u53D1\u5E03\u5230Github\uFF0C\u8BF7\u81EA\u884C\u590D\u5236\u6587\u672C");
        return;
      } else if (isOk && vuepressGithubEnabled.value) {
        logUtil.logInfo("\u5F00\u59CB\u771F\u6B63\u8C03\u7528api\u53D1\u5E03\u5230Github");
        const vuepressCfg = getJSONConf(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS);
        const mdFile = formData.value.title;
        let docPath = vuepressCfg.defaultPath + mdFile;
        if (!useDefaultPath.value) {
          if (formData.value.customPath.indexOf(".md") > -1) {
            docPath = formData.value.customPath;
            logUtil.logInfo("\u5DF2\u7ECF\u6709\u5B8C\u6574\u8DEF\u5F84\uFF0C\u4E0D\u62FC\u63A5");
          } else {
            docPath = formData.value.customPath + "/" + mdFile;
          }
          logUtil.logInfo(formData.value.customPath);
          logUtil.logInfo("\u6587\u7AE0\u8BB2\u53D1\u5E03\u4E8E\u4EE5\u4E0B\u8DEF\u5F84=>", docPath);
        }
        const data = await getPageMd(siyuanData.value.pageId);
        const md = removeMdWidgetTag(data.content);
        const mdContent = vuepressData.value.formatter + "\n" + md;
        vuepressData.value.vuepressContent = md;
        vuepressData.value.vuepressFullContent = mdContent;
        logUtil.logInfo("\u5373\u5C06\u53D1\u5E03\u7684\u5185\u5BB9\uFF0CmdContent=>", {
          "mdContent": mdContent
        });
        const res = await publishPage(vuepressCfg, docPath, mdContent);
        if (!res) {
          isPublishLoading.value = false;
          await initPage();
          ElMessage.error(t("main.publish.vuepress.failure"));
          return;
        }
        const customAttr = {
          [POSTID_KEY_CONSTANTS.VUEPRESS_POSTID_KEY]: docPath
        };
        await setPageAttrs(siyuanData.value.pageId, customAttr);
        logUtil.logInfo("VuepressMain\u53D1\u5E03\u6210\u529F\uFF0C\u4FDD\u5B58\u8DEF\u5F84,meta=>", customAttr);
        await initPage();
        logUtil.logInfo("\u6587\u7AE0\u9884\u89C8\u94FE\u63A5=>", previewUrl);
      } else {
        await initPage();
      }
      logUtil.logInfo("\u53D1\u5E03\u5185\u5BB9\u5B8C\u6210");
      isPublishLoading.value = false;
      ElMessage.success(t("main.opt.status.publish"));
    }
    async function oneclickAttr(hideTip) {
      isGenLoading.value = true;
      await makeSlug(true);
      await makeDesc(true);
      await fetchTag(true);
      convertAttrToYAML();
      await saveAttrToSiyuan(true);
      logUtil.logInfo("\u53D1\u5E03\u5C5E\u6027\u5B8C\u6210");
      isGenLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.publish.oneclick.attr.finish"));
      }
    }
    async function cancelPublish() {
      isCancelLoading.value = true;
      ElMessageBox.confirm(t("main.opt.warning.tip"), t("main.opt.warning"), {
        confirmButtonText: t("main.opt.ok"),
        cancelButtonText: t("main.opt.cancel"),
        type: "warning"
      }).then(async () => {
        await doCancel(true);
        isCancelLoading.value = false;
        ElMessage.warning(t("main.opt.status.cancel"));
      }).catch(() => {
        isCancelLoading.value = false;
        logUtil.logInfo("\u64CD\u4F5C\u5DF2\u53D6\u6D88");
      });
    }
    async function doCancel(isInit) {
      const vuepressCfg = getJSONConf(API_TYPE_CONSTANTS.API_TYPE_VUEPRESS);
      const docPath = getDocPath();
      logUtil.logInfo("\u51C6\u5907\u53D6\u6D88\u53D1\u5E03\uFF0CdocPath=>", docPath);
      await deletePage(vuepressCfg, docPath);
      const customAttr = {
        [POSTID_KEY_CONSTANTS.VUEPRESS_POSTID_KEY]: ""
      };
      await setPageAttrs(siyuanData.value.pageId, customAttr);
      logUtil.logInfo("VuepressMain\u53D6\u6D88\u53D1\u5E03,meta=>", customAttr);
      if (isInit) {
        await initPage();
      }
    }
    return (_ctx, _cache) => {
      const _component_el_alert = resolveComponent("el-alert");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_button_group = resolveComponent("el-button-group");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_switch = resolveComponent("el-switch");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
      const _component_el_date_picker = resolveComponent("el-date-picker");
      const _component_el_tag = resolveComponent("el-tag");
      const _component_el_tree_select = resolveComponent("el-tree-select");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_aside = resolveComponent("el-aside");
      const _component_el_main = resolveComponent("el-main");
      const _component_el_container = resolveComponent("el-container");
      const _component_el_skeleton = resolveComponent("el-skeleton");
      return openBlock(), createElementBlock(Fragment, null, [!isInitLoadding.value ? (openBlock(), createBlock(_component_el_container, {
        key: 0
      }, {
        default: withCtx(() => [createVNode(_component_el_aside, {
          width: "45%",
          class: "p-aside"
        }, {
          default: withCtx(() => [createVNode(_component_el_alert, {
            class: "top-version-tip",
            title: _ctx.$t("main.publish.vuepress.tip"),
            type: "info",
            closable: false
          }, null, 8, ["title"]), createCommentVNode("", true), createVNode(_component_el_form, {
            "label-width": "100px"
          }, {
            default: withCtx(() => [createVNode(_component_el_form_item, {
              label: _ctx.$t("main.publish.vuepress.editmode")
            }, {
              default: withCtx(() => [createVNode(_component_el_button_group, null, {
                default: withCtx(() => [createVNode(_component_el_button, {
                  type: editMode.value ? "default" : "primary",
                  onClick: simpleMode
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.vuepress.editmode.simple")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: editMode.value ? "primary" : "default",
                  onClick: complexMode
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.vuepress.editmode.complex")), 1)]),
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
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => forceRefresh.value = $event)
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
                modelValue: formData.value.customSlug,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.value.customSlug = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 2
            }, {
              default: withCtx(() => [createVNode(_component_el_checkbox_group, {
                modelValue: formData.value.checkList,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.value.checkList = $event)
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
              key: 3,
              label: _ctx.$t("main.use.hash")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: slugHashEnabled.value,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => slugHashEnabled.value = $event)
              }, null, 8, ["modelValue"]), !slugHashEnabled.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.use.hash.tip"),
                type: "warning",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 4
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
              key: 5,
              label: _ctx.$t("main.desc")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                type: "textarea",
                modelValue: formData.value.desc,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.value.desc = $event)
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
                modelValue: formData.value.created,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.value.created = $event),
                format: "YYYY-MM-DD HH:mm:ss",
                "value-format": "YYYY-MM-DD HH:mm:ss",
                onChange: createTimeChanged,
                placeholder: _ctx.$t("main.create.time.placeholder")
              }, null, 8, ["modelValue", "placeholder"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.tag")
            }, {
              default: withCtx(() => [(openBlock(true), createElementBlock(Fragment, null, renderList(formData.value.tag.dynamicTags, (tag) => {
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
              }), 128)), formData.value.tag.inputVisible ? (openBlock(), createBlock(_component_el_input, {
                key: 0,
                ref_key: "tagRefInput",
                ref: tagRefInput,
                modelValue: formData.value.tag.inputValue,
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.value.tag.inputValue = $event),
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
              key: 8
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
              label: _ctx.$t("main.tag.auto.switch")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: tagSwitch.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => tagSwitch.value = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.opt.quick")
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: oneclickAttr,
                loading: isGenLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isGenLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.publish.oneclick.attr")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: saveAttrToSiyuan
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.save.attr.to.siyuan")), 1)]),
                _: 1
              })]),
              _: 1
            }), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.publish.vuepress.github")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: vuepressGithubEnabled.value,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => vuepressGithubEnabled.value = $event),
                onChange: githubOnChange
              }, null, 8, ["modelValue"]), vuepressGithubEnabled.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.publish.vuepress.github.tip"),
                type: "info",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true), !vuepressGithubEnabled.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 1,
                title: _ctx.$t("main.publish.vuepress.github.no.tip"),
                type: "warning",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"]), vuepressGithubEnabled.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 9,
              label: _ctx.$t("main.publish.vuepress.choose.path.use.default")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: useDefaultPath.value,
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => useDefaultPath.value = $event),
                onChange: defaultPathOnChange
              }, null, 8, ["modelValue"]), useDefaultPath.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.publish.vuepress.choose.path.use.default.tip"),
                type: "info",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), vuepressGithubEnabled.value && !useDefaultPath.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 10,
              label: _ctx.$t("main.publish.vuepress.choose.path")
            }, {
              default: withCtx(() => [createVNode(_component_el_tree_select, {
                modelValue: formData.value.customPath,
                "onUpdate:modelValue": _cache[10] || (_cache[10] = ($event) => formData.value.customPath = $event),
                lazy: "",
                "check-strictly": true,
                load: customLoad,
                placeholder: _ctx.$t("main.cat.select"),
                "empty-text": _ctx.$t("main.cat.empty"),
                "no-data-text": _ctx.$t("main.cat.empty"),
                props: customProps
              }, null, 8, ["modelValue", "placeholder", "empty-text", "no-data-text"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), vuepressGithubEnabled.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 11,
              label: _ctx.$t("main.publish.vuepress.choose.title")
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: formData.value.title,
                "onUpdate:modelValue": _cache[11] || (_cache[11] = ($event) => formData.value.title = $event)
              }, null, 8, ["modelValue"]), vuepressGithubEnabled.value ? (openBlock(), createBlock(_component_el_alert, {
                key: 0,
                title: _ctx.$t("main.publish.vuepress.choose.title.tip"),
                type: "error",
                closable: false
              }, null, 8, ["title"])) : createCommentVNode("", true)]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: doPublish,
                loading: isPublishLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isPublishLoading.value ? _ctx.$t("main.publish.loading") : isPublished.value ? _ctx.$t("main.update") : _ctx.$t("main.publish")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            }), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                onClick: cancelPublish,
                loading: isCancelLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.cancel")), 1)]),
                _: 1
              }, 8, ["loading"])]),
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
              }, toDisplayString(_ctx.$t("main.publish.vuepress.see.preview")), 9, _hoisted_1$3)) : createCommentVNode("", true)]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        }), createVNode(_component_el_main, null, {
          default: withCtx(() => [createVNode(_component_el_form, {
            "label-width": "75px"
          }, {
            default: withCtx(() => [createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_alert, {
                class: "top-data-tip",
                title: _ctx.$t("main.yaml.formatter"),
                type: "info",
                closable: false
              }, null, 8, ["title"])]),
              _: 1
            }), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: vuepressData.value.vuepressFullContent,
                "onUpdate:modelValue": _cache[12] || (_cache[12] = ($event) => vuepressData.value.vuepressFullContent = $event),
                autosize: {
                  minRows: 5,
                  maxRows: 8
                },
                onFocus: _cache[13] || (_cache[13] = ($event) => $event.target.select()),
                ref_key: "fmtRefInput",
                ref: fmtRefInput,
                type: "textarea"
              }, null, 8, ["modelValue"])]),
              _: 1
            }), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: convertAttrToYAML
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.siyuan.to.yaml")), 1)]),
                _: 1
              })]),
              _: 1
            }), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: convertYAMLToAttr
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.yaml.to.siyuan")), 1)]),
                _: 1
              })]),
              _: 1
            }), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: copyToClipboard$1
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.copy")), 1)]),
                _: 1
              })]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })]),
        _: 1
      })) : createCommentVNode("", true), createVNode(_component_el_skeleton, {
        loading: isInitLoadding.value,
        rows: 5,
        animated: ""
      }, null, 8, ["loading"])], 64);
    };
  }
});
const VuepressMain_vue_vue_type_style_index_0_scoped_cc8df0b3_lang = "";
const VuepressMain = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["__scopeId", "data-v-cc8df0b3"]]);
const _hoisted_1$2 = ["href", "title"];
const __default__$b = {
  name: "MetaweblogMain"
};
const _sfc_main$b = /* @__PURE__ */ defineComponent({
  ...__default__$b,
  props: {
    isReload: {
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
    const {
      t
    } = useI18n();
    const blogName = ref("");
    const apiTypeInfo = ref(t("setting.blog.platform.support.metaweblog") + props.apiType + " ");
    const apiStatus = ref(false);
    const isSlugLoading = ref(false);
    const isDescLoading = ref(false);
    const isTagLoading = ref(false);
    const isGenLoading = ref(false);
    const isPublishLoading = ref(false);
    const isCancelLoading = ref(false);
    const isInitLoadding = ref(false);
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
      isInitLoadding.value = true;
      const pageId = await getPageId(true, props.pageId);
      if (!pageId || pageId === "") {
        return;
      }
      let conf = getJSONConf(props.apiType);
      if (!isEmptyObject(conf)) {
        blogName.value = conf.blogName;
      }
      slugHashEnabled.value = true;
      siyuanData.pageId = pageId;
      siyuanData.meta = await getPageAttrs(pageId);
      const page = await getPage(pageId);
      if (!page) {
        isInitLoadding.value = false;
        ElMessage.error(t("config.error.msg") + "_" + props.apiType);
        throw new Error(t("config.error.msg") + "_" + props.apiType);
      }
      logUtil.logInfo("MetaweblogMain\u521D\u59CB\u5316\u9875\u9762,meta=>", siyuanData.meta);
      formData.title = page.content;
      formData.customSlug = siyuanData.meta[SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY];
      formData.desc = siyuanData.meta[SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY];
      formData.created = formatNumToZhDate(page.created);
      formData.tag.dynamicTags = [];
      const tagstr = siyuanData.meta.tags || "";
      const tgarr = tagstr.split(",");
      for (let i = 0; i < tgarr.length; i++) {
        const tg = tgarr[i];
        if (tg != "") {
          formData.tag.dynamicTags.push(tgarr[i]);
        }
      }
      isPublished.value = getPublishStatus(props.apiType, siyuanData.meta);
      const metaweblogCfg = getJSONConf(props.apiType);
      const api = new API(props.apiType);
      let catData = [];
      if (isPublished.value) {
        const meta = siyuanData.meta;
        formData.postid = meta[metaweblogCfg.posidKey];
        previewUrl.value = await api.getPrevireUrl(formData.postid.toString());
        try {
          const post = await api.getPost(formData.postid.toString());
          catData = post.categories;
          logUtil.logInfo("postid=>", formData.postid);
          logUtil.logInfo("post=>", post);
          logUtil.logInfo("\u521D\u59CB\u5316\u9009\u62E9\u8FC7\u7684\u5206\u7C7B,catData=>", catData);
        } catch (e) {
          ElMessage.error(t("post.delete.by.platform"));
          isInitLoadding.value = false;
          logUtil.logError("\u6587\u7AE0\u65B0\u83B7\u53D6\u5931\u8D25", e);
        }
      }
      let catInfo = [];
      try {
        catInfo = await api.getCategories();
      } catch (e) {
        isInitLoadding.value = false;
        logUtil.logError("\u5206\u7C7B\u83B7\u53D6\u5931\u8D25", e);
      }
      logUtil.logInfo("catInfo=>", catInfo);
      let catArr = [];
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
      isInitLoadding.value = false;
    };
    onMounted(async () => {
      await initPage();
    });
    function checkForce() {
      if (isEmptyString(formData.customSlug)) {
        return true;
      }
      if (!forceRefresh.value) {
        logUtil.logInfo(t("main.force.refresh.tip"));
        return false;
      }
      return true;
    }
    const makeSlug = async (hideTip) => {
      if (!checkForce()) {
        return;
      }
      isSlugLoading.value = true;
      const page = await getPage(siyuanData.pageId);
      logUtil.logInfo("page=>", page);
      let fmtTitle = page.content;
      if (fmtTitle.indexOf(".") > -1) {
        fmtTitle = fmtTitle.replace(/\d*\./g, "");
      }
      logUtil.logInfo("fmtTitle=>", fmtTitle);
      if (formData.checkList.length > 0) {
        const result = await zhSlugify(fmtTitle);
        logUtil.logInfo("result=>", result);
        if (result) {
          formData.customSlug = result;
        } else {
          ElMessage.success(t("main.opt.failure"));
        }
      } else {
        formData.customSlug = await pingyinSlugify(fmtTitle);
      }
      if (slugHashEnabled.value) {
        const newstr = page.content + new Date().toISOString();
        const hashstr = "-" + dist(newstr).toLowerCase();
        formData.customSlug += hashstr;
      }
      isSlugLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const makeDesc = async (hideTip) => {
      isDescLoading.value = true;
      const data = await getPageMd(siyuanData.pageId);
      const md = data.content;
      const plainText = mdToPlainText(md);
      formData.desc = parseHtml(plainText, CONSTANTS.MAX_PREVIEW_LENGTH, true);
      isDescLoading.value = false;
      if (hideTip != true) {
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
      const data = await getPageMd(siyuanData.pageId);
      const md = data.content;
      const genTags = await cutWords(md);
      logUtil.logInfo("genTags=>", genTags);
      const hotTags = jiebaToHotWords(genTags, 5);
      logUtil.logInfo("hotTags=>", hotTags);
      for (let i = 0; i < hotTags.length; i++) {
        if (!formData.tag.dynamicTags.includes(hotTags[i])) {
          formData.tag.dynamicTags.push(hotTags[i]);
        }
      }
      isTagLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    }
    const saveAttrToSiyuan = async (hideTip) => {
      const customAttr = {
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY]: formData.customSlug,
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY]: formData.desc,
        tags: formData.tag.dynamicTags.join(",")
      };
      await setPageAttrs(siyuanData.pageId, customAttr);
      logUtil.logInfo("MetaweblogMain\u4FDD\u5B58\u5C5E\u6027\u5230\u601D\u6E90\u7B14\u8BB0,meta=>", customAttr);
      if (hideTip != true) {
        await initPage();
        ElMessage.success(t("main.opt.success"));
      }
    };
    const handleCatNodeClick = (event, data, node, nodeItem) => {
    };
    const handleCatNodeCheck = (data, status) => {
      console.log("data=>", data);
      console.log("status=>", status);
      let cats = [];
      const values = status.checkedKeys;
      values.forEach((item) => {
        cats.push(item.toString());
      });
      formData.categories = cats;
      logUtil.logInfo(" formData.categories=>", formData.categories);
    };
    const oneclickAttr = async (hideTip) => {
      isGenLoading.value = true;
      await makeSlug(true);
      await makeDesc(true);
      await fetchTag(true);
      await saveAttrToSiyuan(true);
      logUtil.logInfo("\u53D1\u5E03\u5C5E\u6027\u5B8C\u6210");
      isGenLoading.value = false;
      if (hideTip != true) {
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
        let fmtTitle = removeTitleNumber(formData.title);
        const data = await getPageMd(siyuanData.pageId);
        const md = removeWidgetTag(data.content);
        let content = md;
        if (PageType.Html == metaweblogCfg.pageType) {
          content = mdToHtml(md);
        } else {
          content = removeMdWidgetTag(content);
        }
        const post = new Post();
        post.title = fmtTitle;
        post.wp_slug = formData.customSlug;
        post.description = content;
        post.categories = formData.categories;
        post.mt_keywords = formData.tag.dynamicTags.join(",");
        if (props.apiType == API_TYPE_CONSTANTS.API_TYPE_CNBLOGS) {
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
          logUtil.logInfo("\u6587\u7AE0\u5DF2\u66F4\u65B0\uFF0Cpostid=>", postid);
        } else {
          postid = await api.newPost(post, publish);
          logUtil.logInfo("\u5F53\u524D\u4FDD\u5B58\u7684posidKey=>", metaweblogCfg.posidKey);
          const customAttr = {
            [metaweblogCfg.posidKey]: postid
          };
          await setPageAttrs(siyuanData.pageId, customAttr);
          logUtil.logInfo("MetaweblogMain\u53D1\u5E03\u6210\u529F\uFF0C\u4FDD\u5B58postid,meta=>", customAttr);
          logUtil.logInfo("\u6587\u7AE0\u53D1\u5E03\u6210\u529F\uFF0Cpostid=>", postid);
        }
        await initPage();
        ElMessage.success(t("main.opt.success"));
      } catch (e) {
        logUtil.logError("\u53D1\u5E03\u5F02\u5E38");
        ElMessage.error(t("main.opt.failure"));
        throw new Error(e);
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
      logUtil.logInfo("\u51C6\u5907\u53D6\u6D88\u53D1\u5E03\uFF0Cpostid=>", formData.postid);
      const customAttr = {
        [metaweblogCfg.posidKey]: ""
      };
      await setPageAttrs(siyuanData.pageId, customAttr);
      logUtil.logInfo("MetaweblogMain\u53D6\u6D88\u53D1\u5E03,meta=>", customAttr);
      try {
        const api = new API(props.apiType);
        const flag = await api.deletePost(formData.postid);
        if (!flag) {
          ElMessage.error("\u6587\u7AE0\u5220\u9664\u5931\u8D25");
        }
      } catch (e) {
        logUtil.logError("\u5F3A\u884C\u5220\u9664\u4E00\u6B21", e);
      }
      if (isInit) {
        await initPage();
      }
    };
    return (_ctx, _cache) => {
      const _component_el_alert = resolveComponent("el-alert");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_button_group = resolveComponent("el-button-group");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_switch = resolveComponent("el-switch");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
      const _component_el_date_picker = resolveComponent("el-date-picker");
      const _component_el_tag = resolveComponent("el-tag");
      const _component_el_tree_select = resolveComponent("el-tree-select");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_main = resolveComponent("el-main");
      const _component_el_skeleton = resolveComponent("el-skeleton");
      const _component_el_container = resolveComponent("el-container");
      return openBlock(), createBlock(_component_el_container, null, {
        default: withCtx(() => [!isInitLoadding.value ? (openBlock(), createBlock(_component_el_main, {
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
            type: "error",
            closable: false
          }, null, 8, ["title"])) : createCommentVNode("", true), createVNode(_component_el_form, {
            "label-width": "120px"
          }, {
            default: withCtx(() => [createVNode(_component_el_form_item, {
              label: _ctx.$t("main.publish.vuepress.editmode")
            }, {
              default: withCtx(() => [createVNode(_component_el_button_group, null, {
                default: withCtx(() => [createVNode(_component_el_button, {
                  type: editMode.value ? "default" : "primary",
                  onClick: simpleMode
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.vuepress.editmode.simple")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: editMode.value ? "primary" : "default",
                  onClick: complexMode
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.vuepress.editmode.complex")), 1)]),
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
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => forceRefresh.value = $event)
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
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.customSlug = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 2
            }, {
              default: withCtx(() => [createVNode(_component_el_checkbox_group, {
                modelValue: formData.checkList,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.checkList = $event)
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
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => slugHashEnabled.value = $event)
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
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.desc = $event)
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
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.created = $event),
                format: "YYYY-MM-DD HH:mm:ss",
                "value-format": "YYYY-MM-DD HH:mm:ss",
                placeholder: _ctx.$t("main.create.time.placeholder")
              }, null, 8, ["modelValue", "placeholder"])]),
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
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.tag.inputValue = $event),
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
              key: 8
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
              label: _ctx.$t("main.tag.auto.switch")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: tagSwitch.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => tagSwitch.value = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, {
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
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => formData.cat.categorySelected = $event),
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
            }, 8, ["label"]), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.opt.quick")
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: oneclickAttr,
                loading: isGenLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isGenLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.publish.oneclick.attr")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: saveAttrToSiyuan
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.save.attr.to.siyuan")), 1)]),
                _: 1
              })]),
              _: 1
            }), createVNode(_component_el_form_item, {
              label: ""
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: doPublish,
                loading: isPublishLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isPublishLoading.value ? _ctx.$t("main.publish.loading") : isPublished.value ? _ctx.$t("main.update") : _ctx.$t("main.publish")), 1)]),
                _: 1
              }, 8, ["loading"]), createVNode(_component_el_button, {
                onClick: cancelPublish,
                loading: isCancelLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.cancel")), 1)]),
                _: 1
              }, 8, ["loading"])]),
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
              }, toDisplayString(_ctx.$t("main.publish.vuepress.see.preview")), 9, _hoisted_1$2)) : createCommentVNode("", true)]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })) : createCommentVNode("", true), createVNode(_component_el_skeleton, {
          loading: isInitLoadding.value,
          rows: 5,
          animated: ""
        }, null, 8, ["loading"])]),
        _: 1
      });
    };
  }
});
const MetaweblogMain_vue_vue_type_style_index_0_scoped_ef78e835_lang = "";
const MetaweblogMain = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["__scopeId", "data-v-ef78e835"]]);
const __default__$a = {
  name: "JVueMain",
  components: {
    MetaweblogMain
  }
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  ...__default__$a,
  props: {
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
        "page-id": props.pageId
      }, null, 8, ["api-type", "page-id"]);
    };
  }
});
const __default__$9 = {
  name: "CnblogsMain",
  components: {
    MetaweblogMain
  }
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  ...__default__$9,
  props: {
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
        "page-id": props.pageId
      }, null, 8, ["api-type", "page-id"]);
    };
  }
});
const __default__$8 = {
  name: "ConfluenceMain",
  components: {
    MetaweblogMain
  }
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  ...__default__$8,
  props: {
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
        "api-type": apiType.value,
        "use-adaptor": true,
        "page-id": props.pageId
      }, null, 8, ["api-type", "page-id"]);
    };
  }
});
const __default__$7 = {
  name: "WordpressMain",
  components: {
    MetaweblogMain
  }
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  ...__default__$7,
  props: {
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
        "page-id": props.pageId
      }, null, 8, ["api-type", "page-id"]);
    };
  }
});
const _hoisted_1$1 = ["href", "title"];
const __default__$6 = {
  name: "CommonBlogMain"
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  ...__default__$6,
  props: {
    isReload: {
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
    }
  },
  setup(__props) {
    const props = __props;
    const {
      t
    } = useI18n();
    const blogName = ref("");
    const apiTypeInfo = ref(t("setting.blog.platform.support.common") + props.apiType + " ");
    const apiStatus = ref(false);
    const isSlugLoading = ref(false);
    const isDescLoading = ref(false);
    const isTagLoading = ref(false);
    const isGenLoading = ref(false);
    const isPublishLoading = ref(false);
    const isCancelLoading = ref(false);
    const isInitLoadding = ref(false);
    const editMode = ref(false);
    const forceRefresh = ref(false);
    const slugHashEnabled = ref(false);
    const isPublished = ref(false);
    const previewUrl = ref("");
    const tagSwitch = ref(false);
    const catEnabled = ref(false);
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
      isInitLoadding.value = true;
      const pageId = await getPageId(true, props.pageId);
      if (!pageId || pageId === "") {
        return;
      }
      const conf = getJSONConf(props.apiType);
      if (!isEmptyObject(conf)) {
        blogName.value = conf.blogName || "";
      }
      slugHashEnabled.value = true;
      siyuanData.pageId = pageId;
      siyuanData.meta = await getPageAttrs(pageId);
      let page;
      try {
        page = await getPage(pageId);
      } catch (e) {
        isInitLoadding.value = false;
        logUtil.logError("\u9875\u9762\u4FE1\u606F\u83B7\u53D6\u5931\u8D25", e);
        throw new Error("\u9875\u9762\u4FE1\u606F\u83B7\u53D6\u5931\u8D25");
      }
      if (!page) {
        isInitLoadding.value = false;
        ElMessage.error(t("config.error.msg") + "_" + props.apiType);
        throw new Error(t("config.error.msg") + "_" + props.apiType);
      }
      logUtil.logInfo("CommonblogMain\u521D\u59CB\u5316\u9875\u9762,meta=>", siyuanData.meta);
      formData.title = page.content;
      formData.customSlug = siyuanData.meta[SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY];
      formData.desc = siyuanData.meta[SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY];
      formData.created = formatNumToZhDate(page.created);
      formData.tag.dynamicTags = [];
      const tagstr = siyuanData.meta.tags || "";
      const tgarr = tagstr.split(",");
      for (let i = 0; i < tgarr.length; i++) {
        const tg = tgarr[i];
        if (tg != "") {
          formData.tag.dynamicTags.push(tgarr[i]);
        }
      }
      isPublished.value = getPublishStatus(props.apiType, siyuanData.meta);
      catEnabled.value = !isPublished.value;
      const commonCfg = getJSONConf(props.apiType);
      const api = new API(props.apiType);
      let catData = [];
      let catSlugData = [];
      if (isPublished.value) {
        const meta = siyuanData.meta;
        formData.postid = meta[commonCfg.posidKey || ""];
        previewUrl.value = await api.getPrevireUrl(formData.postid.toString());
        if (props.useCat) {
          try {
            const post = await api.getPost(formData.postid.toString());
            catData = post.categories;
            catSlugData = post.cate_slugs;
            logUtil.logInfo("postid=>", formData.postid);
            logUtil.logInfo("post=>", post);
            logUtil.logInfo("\u521D\u59CB\u5316\u9009\u62E9\u8FC7\u7684\u5206\u7C7B,catData=>", catData);
          } catch (e) {
            ElMessage.error(t("post.delete.by.platform"));
            isInitLoadding.value = false;
            logUtil.logError("\u5E73\u53F0\u6587\u7AE0\u65B0\u83B7\u53D6\u5931\u8D25", e);
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
          isInitLoadding.value = false;
          logUtil.logError("\u5206\u7C7B\u83B7\u53D6\u5931\u8D25", e);
        }
        logUtil.logInfo("catInfo=>", catInfo);
        let catArr = [];
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
      isInitLoadding.value = false;
    };
    onMounted(async () => {
      await initPage();
    });
    function checkForce() {
      if (isEmptyString(formData.customSlug)) {
        return true;
      }
      if (!forceRefresh.value) {
        logUtil.logInfo(t("main.force.refresh.tip"));
        return false;
      }
      return true;
    }
    const makeSlug = async (hideTip) => {
      if (!checkForce()) {
        return;
      }
      isSlugLoading.value = true;
      const page = await getPage(siyuanData.pageId);
      logUtil.logInfo("page=>", page);
      let fmtTitle = page.content;
      if (fmtTitle.indexOf(".") > -1) {
        fmtTitle = fmtTitle.replace(/\d*\./g, "");
      }
      logUtil.logInfo("fmtTitle=>", fmtTitle);
      if (formData.checkList.length > 0) {
        const result = await zhSlugify(fmtTitle);
        logUtil.logInfo("result=>", result);
        if (result) {
          formData.customSlug = result;
        } else {
          ElMessage.success(t("main.opt.failure"));
        }
      } else {
        formData.customSlug = await pingyinSlugify(fmtTitle);
      }
      if (slugHashEnabled.value) {
        const newstr = page.content + new Date().toISOString();
        const hashstr = "-" + dist(newstr).toLowerCase();
        formData.customSlug += hashstr;
      }
      isSlugLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    };
    const makeDesc = async (hideTip) => {
      isDescLoading.value = true;
      const data = await getPageMd(siyuanData.pageId);
      const md = data.content;
      let html = mdToPlainText(md);
      formData.desc = parseHtml(html, CONSTANTS.MAX_PREVIEW_LENGTH, true);
      isDescLoading.value = false;
      if (hideTip != true) {
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
      const data = await getPageMd(siyuanData.pageId);
      const md = data.content;
      const genTags = await cutWords(md);
      logUtil.logInfo("genTags=>", genTags);
      const hotTags = jiebaToHotWords(genTags, 5);
      logUtil.logInfo("hotTags=>", hotTags);
      for (let i = 0; i < hotTags.length; i++) {
        if (!formData.tag.dynamicTags.includes(hotTags[i])) {
          formData.tag.dynamicTags.push(hotTags[i]);
        }
      }
      isTagLoading.value = false;
      if (hideTip != true) {
        ElMessage.success(t("main.opt.success"));
      }
    }
    const handleCatNodeSingleCheck = (val) => {
      logUtil.logInfo("val=>", val);
      const conf = getJSONConf(props.apiType);
      let cats = [];
      let catSlugs = [];
      cats.push(val.label);
      formData.categories = cats;
      catSlugs.push(conf.username + "/" + val.value);
      formData.cat_slugs = catSlugs;
      blogName.value = val.label;
      logUtil.logInfo(" formData.categories=>", formData.categories);
      logUtil.logInfo(" formData.cat_slugs=>", formData.cat_slugs);
    };
    const saveAttrToSiyuan = async (hideTip) => {
      const customAttr = {
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_SLUG_KEY]: formData.customSlug,
        [SIYUAN_PAGE_ATTR_KEY.SIYUAN_PAGE_ATTR_CUSTOM_DESC_KEY]: formData.desc,
        tags: formData.tag.dynamicTags.join(",")
      };
      await setPageAttrs(siyuanData.pageId, customAttr);
      logUtil.logInfo("CommonblogMain\u4FDD\u5B58\u5C5E\u6027\u5230\u601D\u6E90\u7B14\u8BB0,meta=>", customAttr);
      if (hideTip != true) {
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
      logUtil.logInfo("\u53D1\u5E03\u5C5E\u6027\u5B8C\u6210");
      isGenLoading.value = false;
      if (hideTip != true) {
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
        const commonblogCfg = getJSONConf(props.apiType);
        const api = new API(props.apiType);
        let fmtTitle = removeTitleNumber(formData.title);
        const data = await getPageMd(siyuanData.pageId);
        const md = removeMdWidgetTag(data.content);
        let content = md;
        if (PageType.Html == commonblogCfg.pageType) {
          content = mdToHtml(md);
        } else {
          content = removeMdWidgetTag(content);
        }
        const post = new Post();
        post.title = fmtTitle;
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
          logUtil.logInfo("\u6587\u7AE0\u5DF2\u66F4\u65B0\uFF0Cpostid=>", postid);
        } else {
          postid = await api.newPost(post, publish);
          if (post.cate_slugs && post.cate_slugs.length > 0) {
            const repo = post.cate_slugs[0];
            postid = postid + "_" + repo;
          }
          logUtil.logInfo("\u5F53\u524D\u4FDD\u5B58\u7684posidKey=>", commonblogCfg.posidKey);
          const customAttr = {
            [commonblogCfg.posidKey || ""]: postid
          };
          await setPageAttrs(siyuanData.pageId, customAttr);
          logUtil.logInfo("CommonblogMain\u53D1\u5E03\u6210\u529F\uFF0C\u4FDD\u5B58postid,meta=>", customAttr);
          logUtil.logInfo("\u6587\u7AE0\u53D1\u5E03\u6210\u529F\uFF0Cpostid=>", postid);
        }
        await initPage();
        ElMessage.success(t("main.opt.success"));
      } catch (e) {
        isPublishLoading.value = false;
        logUtil.logError("\u53D1\u5E03\u5F02\u5E38");
        ElMessage.error(t("main.opt.failure"));
        throw new Error(e);
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
      logUtil.logInfo("\u51C6\u5907\u53D6\u6D88\u53D1\u5E03\uFF0Cpostid=>", formData.postid);
      const customAttr = {
        [commonblogCfg.posidKey || ""]: ""
      };
      await setPageAttrs(siyuanData.pageId, customAttr);
      logUtil.logInfo("MetaweblogMain\u53D6\u6D88\u53D1\u5E03,meta=>", customAttr);
      try {
        const api = new API(props.apiType);
        const flag = await api.deletePost(formData.postid);
        if (!flag) {
          ElMessage.error("\u6587\u7AE0\u5220\u9664\u5931\u8D25");
          throw new Error("\u6587\u7AE0\u5220\u9664\u5931\u8D25");
        }
      } catch (e) {
        logUtil.logError("\u5F3A\u884C\u5220\u9664\u4E00\u6B21", e);
      }
      if (isInit) {
        await initPage();
      }
    };
    return (_ctx, _cache) => {
      const _component_el_alert = resolveComponent("el-alert");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_button_group = resolveComponent("el-button-group");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_switch = resolveComponent("el-switch");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_checkbox = resolveComponent("el-checkbox");
      const _component_el_checkbox_group = resolveComponent("el-checkbox-group");
      const _component_el_date_picker = resolveComponent("el-date-picker");
      const _component_el_tag = resolveComponent("el-tag");
      const _component_el_option = resolveComponent("el-option");
      const _component_el_select = resolveComponent("el-select");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_main = resolveComponent("el-main");
      const _component_el_skeleton = resolveComponent("el-skeleton");
      const _component_el_container = resolveComponent("el-container");
      return openBlock(), createBlock(_component_el_container, null, {
        default: withCtx(() => [!isInitLoadding.value ? (openBlock(), createBlock(_component_el_main, {
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
            title: "\u4EC5\u652F\u6301\u65B0\u5EFA\u4FEE\u6539\uFF0C\u6682\u65F6\u4E0D\u652F\u6301\u7F16\u8F91\u6240\u5C5E\u77E5\u8BC6\u5E93\u3002\u5982\u679C\u60A8\u60F3\u79FB\u52A8\u6587\u6863\uFF0C\u8BF7\u5148\u70B9\u51FB\u53D6\u6D88\u5220\u9664\u8BE5\u6587\u6863\uFF0C\u7136\u540E\u91CD\u65B0\u9009\u62E9\u65B0\u7684\u77E5\u8BC6\u5E93\u53D1\u5E03\u3002",
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
            default: withCtx(() => [createVNode(_component_el_form_item, {
              label: _ctx.$t("main.publish.vuepress.editmode")
            }, {
              default: withCtx(() => [createVNode(_component_el_button_group, null, {
                default: withCtx(() => [createVNode(_component_el_button, {
                  type: editMode.value ? "default" : "primary",
                  onClick: simpleMode
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.vuepress.editmode.simple")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: editMode.value ? "primary" : "default",
                  onClick: complexMode
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.publish.vuepress.editmode.complex")), 1)]),
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
                "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => forceRefresh.value = $event)
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
                "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => formData.customSlug = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), editMode.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 2
            }, {
              default: withCtx(() => [createVNode(_component_el_checkbox_group, {
                modelValue: formData.checkList,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => formData.checkList = $event)
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
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => slugHashEnabled.value = $event)
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
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.desc = $event)
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
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => formData.created = $event),
                format: "YYYY-MM-DD HH:mm:ss",
                "value-format": "YYYY-MM-DD HH:mm:ss",
                placeholder: _ctx.$t("main.create.time.placeholder")
              }, null, 8, ["modelValue", "placeholder"])]),
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
                "onUpdate:modelValue": _cache[6] || (_cache[6] = ($event) => formData.tag.inputValue = $event),
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
              key: 8
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
              label: _ctx.$t("main.tag.auto.switch")
            }, {
              default: withCtx(() => [createVNode(_component_el_switch, {
                modelValue: tagSwitch.value,
                "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => tagSwitch.value = $event)
              }, null, 8, ["modelValue"])]),
              _: 1
            }, 8, ["label"]), props.useCat ? (openBlock(), createBlock(_component_el_form_item, {
              key: 9,
              label: _ctx.$t("main.cat"),
              style: {
                "width": "100%"
              }
            }, {
              default: withCtx(() => [catEnabled.value ? (openBlock(), createBlock(_component_el_select, {
                key: 0,
                modelValue: formData.cat.categorySelected,
                "onUpdate:modelValue": _cache[8] || (_cache[8] = ($event) => formData.cat.categorySelected = $event),
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
                "onUpdate:modelValue": _cache[9] || (_cache[9] = ($event) => formData.cat.categorySelected = $event),
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
            }, 8, ["label"])) : createCommentVNode("", true), createVNode(_component_el_form_item, {
              label: _ctx.$t("main.opt.quick")
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: oneclickAttr,
                loading: isGenLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isGenLoading.value ? _ctx.$t("main.opt.loading") : _ctx.$t("main.publish.oneclick.attr")), 1)]),
                _: 1
              }, 8, ["loading"])]),
              _: 1
            }, 8, ["label"]), createVNode(_component_el_form_item, null, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: saveAttrToSiyuan
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.save.attr.to.siyuan")), 1)]),
                _: 1
              })]),
              _: 1
            }), createVNode(_component_el_form_item, {
              label: ""
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: doPublish,
                loading: isPublishLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(isPublishLoading.value ? _ctx.$t("main.publish.loading") : isPublished.value ? _ctx.$t("main.update") : _ctx.$t("main.publish")), 1)]),
                _: 1
              }, 8, ["loading"]), createVNode(_component_el_button, {
                onClick: cancelPublish,
                loading: isCancelLoading.value
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("main.cancel")), 1)]),
                _: 1
              }, 8, ["loading"])]),
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
              }, toDisplayString(_ctx.$t("main.publish.vuepress.see.preview")), 9, _hoisted_1$1)) : createCommentVNode("", true)]),
              _: 1
            })]),
            _: 1
          })]),
          _: 1
        })) : createCommentVNode("", true), createVNode(_component_el_skeleton, {
          loading: isInitLoadding.value,
          rows: 5,
          animated: ""
        }, null, 8, ["loading"])]),
        _: 1
      });
    };
  }
});
const CommonBlogMain_vue_vue_type_style_index_0_scoped_6bbb118d_lang = "";
const CommonBlogMain = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["__scopeId", "data-v-6bbb118d"]]);
const __default__$5 = {
  name: "LiandiMain",
  components: {
    CommonBlogMain
  }
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  ...__default__$5,
  props: {
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
        "api-type": apiType.value,
        "page-id": props.pageId
      }, null, 8, ["api-type", "page-id"]);
    };
  }
});
const __default__$4 = {
  name: "YuqueMain",
  components: {
    CommonBlogMain
  }
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  ...__default__$4,
  props: {
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
        "page-id": props.pageId,
        "use-cat": true
      }, null, 8, ["api-type", "page-id"]);
    };
  }
});
const __default__$3 = {
  name: "KmsMain",
  components: {
    CommonBlogMain
  }
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  ...__default__$3,
  props: {
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
        "page-id": props.pageId
      }, null, 8, ["api-type", "page-id"]);
    };
  }
});
const _hoisted_1 = {
  key: 1
};
const __default__$2 = {
  name: "PlantformMain",
  components: {
    VuepressMain,
    JVueMain: _sfc_main$a,
    CnblogsMain: _sfc_main$9,
    ConfluenceMain: _sfc_main$8,
    WordpressMain: _sfc_main$7,
    LiandiMain: _sfc_main$5,
    YuqueMain: _sfc_main$4,
    KmsMain: _sfc_main$3,
    MetaweblogMain
  }
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  ...__default__$2,
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
    const {
      tabCountStore,
      vuepressEnabled,
      jvueEnabled,
      confEnabled,
      cnblogsEnabled,
      wordpressEnabled,
      liandiEnabled,
      yuqueEnabled,
      kmsEnabled,
      doCount
    } = useTabCount();
    let formData = reactive({
      dynamicConfigArray: [],
      metaweblogArray: [],
      wordpressArray: []
    });
    const initDynCfg = (dynCfg) => {
      const newCfg = [];
      dynCfg.forEach((item) => {
        const newItem = new DynamicConfig(item.plantformType, item.plantformKey, item.plantformName);
        const switchKey = "switch-" + item.plantformKey;
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
      formData.metaweblogArray = initDynCfg(dynamicJsonCfg.metaweblogCfg || []);
      formData.wordpressArray = initDynCfg(dynamicJsonCfg.wordpressCfg || []);
      logUtil.logInfo("dynamicJsonCfg=>");
      logUtil.logInfo(JSON.stringify(dynamicJsonCfg));
      logUtil.logInfo("\u5E73\u53F0\u8BBE\u7F6E\u521D\u59CB\u5316");
    };
    const isReloadVuepressMain = ref(false);
    watch(() => props.isReload, (oldValue, newValue) => {
      initConf();
      logUtil.logInfo("plantform-main\u521D\u59CB\u5316");
    });
    onMounted(() => {
      initConf();
      logUtil.logInfo("plantform-main\u521D\u59CB\u5316 onMounted");
    });
    return (_ctx, _cache) => {
      const _component_el_tab_pane = resolveComponent("el-tab-pane");
      const _component_el_tabs = resolveComponent("el-tabs");
      const _component_el_alert = resolveComponent("el-alert");
      return unref(tabCountStore).tabCount > 0 ? (openBlock(), createBlock(_component_el_tabs, {
        key: 0,
        type: "border-card"
      }, {
        default: withCtx(() => [unref(vuepressEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 0,
          label: _ctx.$t("main.publish.to.vuepress")
        }, {
          default: withCtx(() => [createVNode(VuepressMain, {
            "is-reload": isReloadVuepressMain.value,
            "page-id": props.pageId
          }, null, 8, ["is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(jvueEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 1,
          label: _ctx.$t("main.publish.to.jvue")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$a, {
            "page-id": props.pageId
          }, null, 8, ["page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(confEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 2,
          label: _ctx.$t("main.publish.to.conf")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$8, {
            "page-id": props.pageId
          }, null, 8, ["page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(cnblogsEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 3,
          label: _ctx.$t("main.publish.to.cnblogs")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$9, {
            "page-id": props.pageId
          }, null, 8, ["page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(wordpressEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 4,
          label: _ctx.$t("main.publish.to.wordpress")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$7, {
            "page-id": props.pageId
          }, null, 8, ["page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(liandiEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 5,
          label: _ctx.$t("main.publish.to.liandi")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$5, {
            "page-id": props.pageId
          }, null, 8, ["page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(yuqueEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 6,
          label: _ctx.$t("main.publish.to.yuque")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$4, {
            "page-id": props.pageId
          }, null, 8, ["page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), unref(kmsEnabled) ? (openBlock(), createBlock(_component_el_tab_pane, {
          key: 7,
          label: _ctx.$t("main.publish.to.kms")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$3, {
            "page-id": props.pageId
          }, null, 8, ["page-id"])]),
          _: 1
        }, 8, ["label"])) : createCommentVNode("", true), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(formData).metaweblogArray, (mcfg) => {
          return openBlock(), createBlock(_component_el_tab_pane, {
            label: mcfg.plantformName + "_" + mcfg.plantformType.toUpperCase().substring(0, 1)
          }, {
            default: withCtx(() => [createVNode(MetaweblogMain, {
              "api-type": mcfg.plantformKey,
              "page-id": props.pageId
            }, null, 8, ["api-type", "page-id"])]),
            _: 2
          }, 1032, ["label"]);
        }), 256)), (openBlock(true), createElementBlock(Fragment, null, renderList(unref(formData).wordpressArray, (wcfg) => {
          return openBlock(), createBlock(_component_el_tab_pane, {
            label: wcfg.plantformName + "_" + wcfg.plantformType.toUpperCase().substring(0, 1)
          }, {
            default: withCtx(() => [createVNode(MetaweblogMain, {
              "api-type": wcfg.plantformKey,
              "page-id": props.pageId
            }, null, 8, ["api-type", "page-id"])]),
            _: 2
          }, 1032, ["label"]);
        }), 256))]),
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
const __default__$1 = {
  name: "DynamicPlantform"
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  ...__default__$1,
  setup(__props) {
    const {
      t
    } = useI18n();
    const pType = ref();
    pType.value = PlantformType.Metaweblog;
    const showForm = ref(true);
    let dynamicConfigArray = reactive([]);
    const formRef = ref();
    const formData = reactive(new DynamicConfig(PlantformType.Metaweblog, "", ""));
    const rules = reactive({
      plantformKey: [{
        required: true,
        message: () => t("form.validate.name.required")
      }],
      plantformName: [{
        required: true,
        message: () => t("form.validate.name.required")
      }]
    });
    const onPlantformTypeChange = (val) => {
      pType.value = val;
      showForm.value = pType.value == PlantformType.Metaweblog || pType.value == PlantformType.Wordpress;
      logUtil.logInfo(pType.value);
    };
    const submitForm = async (formEl) => {
      if (pType.value == "") {
        ElMessage.error(t("dynamic.platform.opt.noselect"));
        return;
      }
      const pkey = formData.plantformKey;
      const ptypeKey = pType.value.toLowerCase() + "-" + formData.plantformKey;
      logUtil.logInfo("\u5C06\u8981\u4FDD\u5B58\u7684\u5E73\u53F0key", ptypeKey);
      if (isDynamicKeyExists(ptypeKey)) {
        ElMessage.error(t("dynamic.platform.opt.key.exist"));
        return;
      }
      const switchKey = "switch-" + ptypeKey;
      const postidKey = "custom-" + ptypeKey + "-post-id";
      if (checkKeyExists(pkey) || checkKeyExists(ptypeKey) || checkKeyExists(switchKey) || checkKeyExists(postidKey)) {
        ElMessage.error(t("dynamic.platform.opt.key.exist"));
        return;
      }
      if (!formEl)
        return;
      const result = await formEl.validate((valid, fields) => {
        if (valid) {
          logUtil.logInfo("\u6821\u9A8C\u6210\u529F");
        } else {
          logUtil.logError(t("main.opt.failure"), fields);
          return;
        }
      });
      if (!result) {
        return;
      }
      const newCfg = new DynamicConfig(pType.value, ptypeKey, formData.plantformName);
      dynamicConfigArray.push(newCfg);
      setDynamicJsonCfg(dynamicConfigArray);
      reloadPage();
      ElMessage.success(t("main.opt.success"));
    };
    const tableData = [];
    const num = ref(0);
    const currentRow = ref();
    const currentTip = ref(t("dynamic.platform.opt.item.select"));
    const handleCurrentChange = (val) => {
      currentRow.value = val;
      currentTip.value = t("dynamic.platform.opt.item.select.tip") + currentRow.value.plantformName;
      logUtil.logInfo(currentRow.value);
    };
    const isDynamicKeyExists = (key) => {
      let flag = false;
      logUtil.logInfo("isDynamicKeyExists,dynamicConfigArray=>");
      logUtil.logInfo(dynamicConfigArray);
      for (let i = 0; i < dynamicConfigArray.length; i++) {
        if (dynamicConfigArray[i].plantformKey == key) {
          flag = true;
          break;
        }
      }
      return flag;
    };
    const delRow = async () => {
      if (!currentRow.value || !currentRow.value.plantformKey) {
        ElMessage.error(t("dynamic.platform.opt.item.no.select.tip"));
      }
      for (let i = 0; i < dynamicConfigArray.length; i++) {
        logUtil.logInfo(currentRow.value.plantformKey);
        logUtil.logInfo(dynamicConfigArray[i].plantformKey);
        logUtil.logInfo("------------------------");
        if (currentRow.value.plantformKey == dynamicConfigArray[i].plantformKey) {
          dynamicConfigArray.splice(i, 1);
        }
      }
      setDynamicJsonCfg(dynamicConfigArray);
      reloadPage();
      ElMessage.success(t("main.opt.success"));
    };
    const initPage = async () => {
      dynamicConfigArray = getDynamicJsonCfg().totalCfg || [];
      for (let i = 0; i < dynamicConfigArray.length; i++) {
        tableData.push(dynamicConfigArray[i]);
      }
      num.value = dynamicConfigArray.length;
      logUtil.logInfo("dynamic init page=>", dynamicConfigArray);
    };
    onMounted(async () => {
      await initPage();
    });
    return (_ctx, _cache) => {
      const _component_el_alert = resolveComponent("el-alert");
      const _component_el_button = resolveComponent("el-button");
      const _component_el_button_group = resolveComponent("el-button-group");
      const _component_el_form_item = resolveComponent("el-form-item");
      const _component_el_input = resolveComponent("el-input");
      const _component_el_form = resolveComponent("el-form");
      const _component_el_header = resolveComponent("el-header");
      const _component_el_table_column = resolveComponent("el-table-column");
      const _component_el_table = resolveComponent("el-table");
      const _component_el_main = resolveComponent("el-main");
      const _component_el_container = resolveComponent("el-container");
      return openBlock(), createBlock(_component_el_container, null, {
        default: withCtx(() => [createVNode(_component_el_header, {
          height: "250px",
          class: "publish-dyn-header"
        }, {
          default: withCtx(() => [createVNode(_component_el_form, {
            "label-width": "180px",
            ref_key: "formRef",
            ref: formRef,
            model: formData,
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
                  type: pType.value === unref(PlantformType).Metaweblog ? "primary" : "",
                  onClick: _cache[0] || (_cache[0] = ($event) => onPlantformTypeChange(unref(PlantformType).Metaweblog))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("dynamic.platform.type.metaweblog")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: pType.value === unref(PlantformType).Wordpress ? "primary" : "",
                  onClick: _cache[1] || (_cache[1] = ($event) => onPlantformTypeChange(unref(PlantformType).Wordpress))
                }, {
                  default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("dynamic.platform.type.wordpress")), 1)]),
                  _: 1
                }, 8, ["type"]), createVNode(_component_el_button, {
                  type: pType.value === unref(PlantformType).Custom ? "primary" : "",
                  onClick: _cache[2] || (_cache[2] = ($event) => onPlantformTypeChange(unref(PlantformType).Custom))
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
            })) : createCommentVNode("", true), showForm.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 1,
              label: pType.value + _ctx.$t("dynamic.platform.key"),
              prop: "plantformKey"
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: formData.plantformKey,
                "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => formData.plantformKey = $event),
                placeholder: _ctx.$t("dynamic.platform.key.tip")
              }, null, 8, ["modelValue", "placeholder"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), showForm.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 2,
              label: pType.value + _ctx.$t("dynamic.platform.name"),
              prop: "plantformName"
            }, {
              default: withCtx(() => [createVNode(_component_el_input, {
                modelValue: formData.plantformName,
                "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => formData.plantformName = $event),
                placeholder: _ctx.$t("dynamic.platform.name.tip")
              }, null, 8, ["modelValue", "placeholder"])]),
              _: 1
            }, 8, ["label"])) : createCommentVNode("", true), showForm.value ? (openBlock(), createBlock(_component_el_form_item, {
              key: 3
            }, {
              default: withCtx(() => [createVNode(_component_el_button, {
                type: "primary",
                onClick: _cache[5] || (_cache[5] = ($event) => submitForm(formRef.value))
              }, {
                default: withCtx(() => [createTextVNode(toDisplayString(_ctx.$t("dynamic.platform.opt.add")), 1)]),
                _: 1
              })]),
              _: 1
            })) : createCommentVNode("", true)]),
            _: 1
          }, 8, ["model", "rules"])]),
          _: 1
        }), createVNode(_component_el_main, null, {
          default: withCtx(() => [createVNode(_component_el_form_item, null, {
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
          }), (openBlock(), createBlock(_component_el_table, {
            data: tableData,
            key: num.value,
            border: "",
            stripe: "",
            "highlight-current-row": "",
            "empty-text": "\u6682\u65E0\u6570\u636E",
            onCurrentChange: handleCurrentChange
          }, {
            default: withCtx(() => [createVNode(_component_el_table_column, {
              prop: "plantformType",
              label: _ctx.$t("dynamic.platform.type")
            }, null, 8, ["label"]), createVNode(_component_el_table_column, {
              prop: "plantformKey",
              label: _ctx.$t("dynamic.platform.key")
            }, null, 8, ["label"]), createVNode(_component_el_table_column, {
              prop: "plantformName",
              label: _ctx.$t("dynamic.platform.name")
            }, null, 8, ["label"])]),
            _: 1
          }))]),
          _: 1
        })]),
        _: 1
      });
    };
  }
});
const __default__ = {
  name: "PublishService",
  components: {
    PlantformSetting: _sfc_main$e,
    ServiceSwitch: _sfc_main$p,
    ChangeLocale: _sfc_main$q,
    PostBind: _sfc_main$d,
    PlantformMain: _sfc_main$2,
    DynamicPlantform: _sfc_main$1
  }
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  ...__default__,
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
    let defaultTab = ref("plantform-main");
    let isReloadSetting = ref(false);
    let isReloadMain = ref(false);
    let isReloadPostBind = ref(false);
    const serviceTabChange = (name) => {
      logUtil.logInfo("serviceTabChange=>", name);
      if ("plantform-setting" == name) {
        isReloadSetting.value = !isReloadSetting.value;
        logUtil.logInfo("plantform-setting change=>");
      } else if ("plantform-main" == name) {
        isReloadMain.value = !isReloadMain.value;
        logUtil.logInfo("plantform-main change=>");
      } else if ("post-bind" == name) {
        isReloadPostBind.value = !isReloadPostBind.value;
        logUtil.logInfo("post-bind change=>");
      }
    };
    onMounted(() => {
    });
    return (_ctx, _cache) => {
      const _component_el_tab_pane = resolveComponent("el-tab-pane");
      const _component_el_tabs = resolveComponent("el-tabs");
      return openBlock(), createBlock(_component_el_tabs, {
        "model-value": unref(defaultTab),
        "tab-position": "left",
        onTabChange: serviceTabChange
      }, {
        default: withCtx(() => [createVNode(_component_el_tab_pane, {
          name: "plantform-main",
          label: _ctx.$t("service.tab.publish.service")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$2, {
            "is-reload": unref(isReloadMain),
            "page-id": props.pageId
          }, null, 8, ["is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          name: "plantform-setting",
          label: _ctx.$t("service.tab.publish.setting")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$e, {
            "is-reload": unref(isReloadSetting)
          }, null, 8, ["is-reload"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          name: "post-bind",
          label: _ctx.$t("service.tab.post.bind")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$d, {
            "is-reload": unref(isReloadPostBind),
            "page-id": props.pageId
          }, null, 8, ["is-reload", "page-id"])]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          name: "service-switch",
          label: _ctx.$t("service.tab.service.switch")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$p)]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          name: "dynamicp-platform",
          label: _ctx.$t("dynamic.platform.new")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$1)]),
          _: 1
        }, 8, ["label"]), createVNode(_component_el_tab_pane, {
          name: "change-local",
          label: _ctx.$t("service.tab.change.local")
        }, {
          default: withCtx(() => [createVNode(_sfc_main$q)]),
          _: 1
        }, 8, ["label"])]),
        _: 1
      }, 8, ["model-value"]);
    };
  }
});
export {
  _sfc_main as _,
  createPinia as c
};
