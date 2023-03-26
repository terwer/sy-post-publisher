import{c as e}from"./vendor_before-after-hook-6380be1a.js";var t,r,o,n={exports:{}};r=e,o=function(e){var t,r,o={template:"[%t] %l:",levelFormatter:function(e){return e.toUpperCase()},nameFormatter:function(e){return e||"root"},timestampFormatter:function(e){return e.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/,"$1")},format:void 0},n={},a={reg:function(e){if(!e||!e.getLogger)throw new TypeError("Argument is not a root logger");t=e},apply:function(e,r){if(!e||!e.setLevel)throw new TypeError("Argument is not a logger");var a=e.methodFactory,l=e.name||"",i=n[l]||n[""]||o;return n[l]||(e.methodFactory=function(e,t,r){var o=a(e,t,r),i=n[r]||n[""],p=-1!==i.template.indexOf("%t"),f=-1!==i.template.indexOf("%l"),m=-1!==i.template.indexOf("%n");return function(){for(var t="",a=arguments.length,u=Array(a),c=0;c<a;c++)u[c]=arguments[c];if(l||!n[r]){var s=i.timestampFormatter(new Date),g=i.levelFormatter(e),v=i.nameFormatter(r);i.format?t+=i.format(g,v,s):(t+=i.template,p&&(t=t.replace(/%t/,s)),f&&(t=t.replace(/%l/,g)),m&&(t=t.replace(/%n/,v))),u.length&&"string"==typeof u[0]?u[0]=t+" "+u[0]:u.unshift(t)}o.apply(void 0,u)}}),(r=r||{}).template&&(r.format=void 0),n[l]=function(e){for(var t,r=1,o=arguments.length;r<o;r++)for(t in arguments[r])Object.prototype.hasOwnProperty.call(arguments[r],t)&&(e[t]=arguments[r][t]);return e}({},i,r),e.setLevel(e.getLevel()),t||e.warn("It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"),e}};return e&&(r=e.prefix,a.noConflict=function(){return e.prefix===a&&(e.prefix=r),a}),a},(t=n).exports?t.exports=o():r.prefix=o(r);const a=n.exports;export{a as p};
