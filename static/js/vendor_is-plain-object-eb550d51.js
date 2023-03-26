/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function t(t){return"[object Object]"===Object.prototype.toString.call(t)}function o(o){var r,e;return!1!==t(o)&&(void 0===(r=o.constructor)||!1!==t(e=r.prototype)&&!1!==e.hasOwnProperty("isPrototypeOf"))}export{o as i};
