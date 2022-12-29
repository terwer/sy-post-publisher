var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
function getAugmentedNamespace(n) {
  var f = n.default;
  if (typeof f == "function") {
    var a = function() {
      return f.apply(this, arguments);
    };
    a.prototype = f.prototype;
  } else
    a = {};
  Object.defineProperty(a, "__esModule", { value: true });
  Object.keys(n).forEach(function(k) {
    var d = Object.getOwnPropertyDescriptor(n, k);
    Object.defineProperty(a, k, d.get ? d : {
      enumerable: true,
      get: function() {
        return n[k];
      }
    });
  });
  return a;
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
function addHook$1(state, kind, name, hook) {
  var orig = hook;
  if (!state.registry[name]) {
    state.registry[name] = [];
  }
  if (kind === "before") {
    hook = function(method, options) {
      return Promise.resolve().then(orig.bind(null, options)).then(method.bind(null, options));
    };
  }
  if (kind === "after") {
    hook = function(method, options) {
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
    hook = function(method, options) {
      return Promise.resolve().then(method.bind(null, options)).catch(function(error) {
        return orig(error, options);
      });
    };
  }
  state.registry[name].push({
    hook,
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
function bindApi(hook, state, name) {
  var removeHookRef = bindable(removeHook, null).apply(
    null,
    name ? [state, name] : [state]
  );
  hook.api = { remove: removeHookRef };
  hook.remove = removeHookRef;
  ["before", "error", "after", "wrap"].forEach(function(kind) {
    var args = name ? [state, kind, name] : [state, kind];
    hook[kind] = hook.api[kind] = bindable(addHook, null).apply(null, args);
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
  var hook = register.bind(null, state);
  bindApi(hook, state);
  return hook;
}
var collectionHookDeprecationMessageDisplayed = false;
function Hook() {
  if (!collectionHookDeprecationMessageDisplayed) {
    console.warn(
      '[before-after-hook]: "Hook()" repurposing warning, use "Hook.Collection()". Read more: https://git.io/upgrade-before-after-hook-to-1.4'
    );
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
export {
  Collection as C,
  getAugmentedNamespace as a,
  commonjsGlobal as c,
  getDefaultExportFromCjs as g
};
