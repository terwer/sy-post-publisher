import { b as browser$1 } from "./vendor_rollup-plugin-node-polyfills-43c96027.js";
function getUserAgent() {
  if (typeof navigator === "object" && "userAgent" in navigator) {
    return navigator.userAgent;
  }
  if (typeof browser$1 === "object" && "version" in browser$1) {
    return `Node.js/${browser$1.version.substr(1)} (${browser$1.platform}; ${browser$1.arch})`;
  }
  return "<environment undetectable>";
}
export {
  getUserAgent as g
};
