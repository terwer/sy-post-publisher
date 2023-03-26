import{c as e}from"./vendor_before-after-hook-6380be1a.js";var o,t,n,r={exports:{}};t=e,n=function(){var e=function(){},o="undefined",t=typeof window!==o&&typeof window.navigator!==o&&/Trident\/|MSIE /.test(window.navigator.userAgent),n=["trace","debug","info","warn","error"];function r(e,o){var t=e[o];if("function"==typeof t.bind)return t.bind(e);try{return Function.prototype.bind.call(t,e)}catch(n){return function(){return Function.prototype.apply.apply(t,[e,arguments])}}}function l(){console.log&&(console.log.apply||Function.prototype.apply.apply(console.log,[console,arguments])),console.trace}function i(o,t){for(var r=0;r<n.length;r++){var l=n[r];this[l]=r<o?e:this.methodFactory(l,o,t)}this.log=this.debug}function c(e,t,n){return function(){typeof console!==o&&(i.call(this,t,n),this[e].apply(this,arguments))}}function a(n,i,a){return function(n){return"debug"===n&&(n="log"),typeof console!==o&&("trace"===n&&t?l:void 0!==console[n]?r(console,n):void 0!==console.log?r(console,"log"):e)}(n)||c.apply(this,arguments)}function s(e,t,r){var l,c=this;t=null==t?"WARN":t;var s="loglevel";function f(){var e;if(typeof window!==o&&s){try{e=window.localStorage[s]}catch(r){}if(typeof e===o)try{var t=window.document.cookie,n=t.indexOf(encodeURIComponent(s)+"=");-1!==n&&(e=/^([^;]+)/.exec(t.slice(n))[1])}catch(r){}return void 0===c.levels[e]&&(e=void 0),e}}"string"==typeof e?s+=":"+e:"symbol"==typeof e&&(s=void 0),c.name=e,c.levels={TRACE:0,DEBUG:1,INFO:2,WARN:3,ERROR:4,SILENT:5},c.methodFactory=r||a,c.getLevel=function(){return l},c.setLevel=function(t,r){if("string"==typeof t&&void 0!==c.levels[t.toUpperCase()]&&(t=c.levels[t.toUpperCase()]),!("number"==typeof t&&t>=0&&t<=c.levels.SILENT))throw"log.setLevel() called with invalid level: "+t;if(l=t,!1!==r&&function(e){var t=(n[e]||"silent").toUpperCase();if(typeof window!==o&&s){try{return void(window.localStorage[s]=t)}catch(r){}try{window.document.cookie=encodeURIComponent(s)+"="+t+";"}catch(r){}}}(t),i.call(c,t,e),typeof console===o&&t<c.levels.SILENT)return"No console available for logging"},c.setDefaultLevel=function(e){t=e,f()||c.setLevel(e,!1)},c.resetLevel=function(){c.setLevel(t,!1),function(){if(typeof window!==o&&s){try{return void window.localStorage.removeItem(s)}catch(e){}try{window.document.cookie=encodeURIComponent(s)+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC"}catch(e){}}}()},c.enableAll=function(e){c.setLevel(c.levels.TRACE,e)},c.disableAll=function(e){c.setLevel(c.levels.SILENT,e)};var u=f();null==u&&(u=t),c.setLevel(u,!1)}var f=new s,u={};f.getLogger=function(e){if("symbol"!=typeof e&&"string"!=typeof e||""===e)throw new TypeError("You must supply a name when creating a logger.");var o=u[e];return o||(o=u[e]=new s(e,f.getLevel(),f.methodFactory)),o};var p=typeof window!==o?window.log:void 0;return f.noConflict=function(){return typeof window!==o&&window.log===f&&(window.log=p),f},f.getLoggers=function(){return u},f.default=f,f},(o=r).exports?o.exports=n():t.log=n();const l=r.exports;export{l};
