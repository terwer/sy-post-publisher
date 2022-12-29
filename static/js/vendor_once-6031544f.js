import { w as wrappy_1 } from "./vendor_wrappy-713fc6dc.js";
var once$1 = { exports: {} };
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
export {
  once$1 as o
};
