const safeAdd = (x, y) => {
  let lsw = (x & 65535) + (y & 65535);
  return (x >> 16) + (y >> 16) + (lsw >> 16) << 16 | lsw & 65535;
};
const bitRotateLeft = (num, cnt) => num << cnt | num >>> 32 - cnt;
const md5cmn = (q, a, b, x, s, t) => safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b), md5ff = (a, b, c, d, x, s, t) => md5cmn(b & c | ~b & d, a, b, x, s, t), md5gg = (a, b, c, d, x, s, t) => md5cmn(b & d | c & ~d, a, b, x, s, t), md5hh = (a, b, c, d, x, s, t) => md5cmn(b ^ c ^ d, a, b, x, s, t), md5ii = (a, b, c, d, x, s, t) => md5cmn(c ^ (b | ~d), a, b, x, s, t);
const firstChunk = (chunks, x, i) => {
  let [a, b, c, d] = chunks;
  a = md5ff(a, b, c, d, x[i + 0], 7, -680876936);
  d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
  c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
  b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
  a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
  d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
  c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
  b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
  a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
  d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
  c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
  b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
  a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
  d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
  c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
  b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
  return [a, b, c, d];
}, secondChunk = (chunks, x, i) => {
  let [a, b, c, d] = chunks;
  a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
  d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
  c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
  b = md5gg(b, c, d, a, x[i], 20, -373897302);
  a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
  d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
  c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
  b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
  a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
  d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
  c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
  b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
  a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
  d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
  c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
  b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
  return [a, b, c, d];
}, thirdChunk = (chunks, x, i) => {
  let [a, b, c, d] = chunks;
  a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
  d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
  c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
  b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
  a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
  d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
  c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
  b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
  a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
  d = md5hh(d, a, b, c, x[i], 11, -358537222);
  c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
  b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
  a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
  d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
  c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
  b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
  return [a, b, c, d];
}, fourthChunk = (chunks, x, i) => {
  let [a, b, c, d] = chunks;
  a = md5ii(a, b, c, d, x[i], 6, -198630844);
  d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
  c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
  b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
  a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
  d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
  c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
  b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
  a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
  d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
  c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
  b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
  a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
  d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
  c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
  b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
  return [a, b, c, d];
};
const binlMD5 = (x, len) => {
  x[len >> 5] |= 128 << len % 32;
  x[(len + 64 >>> 9 << 4) + 14] = len;
  let commands = [firstChunk, secondChunk, thirdChunk, fourthChunk], initialChunks = [
    1732584193,
    -271733879,
    -1732584194,
    271733878
  ];
  return Array.from({ length: Math.floor(x.length / 16) + 1 }, (v, i) => i * 16).reduce((chunks, i) => commands.reduce((newChunks, apply) => apply(newChunks, x, i), chunks.slice()).map((chunk, index) => safeAdd(chunk, chunks[index])), initialChunks);
};
const binl2rstr = (input) => Array(input.length * 4).fill(8).reduce((output, k, i) => output + String.fromCharCode(input[i * k >> 5] >>> i * k % 32 & 255), "");
const rstr2binl = (input) => Array.from(input).map((i) => i.charCodeAt(0)).reduce((output, cc, i) => {
  let resp = output.slice();
  resp[i * 8 >> 5] |= (cc & 255) << i * 8 % 32;
  return resp;
}, []);
const rstrMD5 = (string) => binl2rstr(binlMD5(rstr2binl(string), string.length * 8));
const strHMACMD5 = (key, data) => {
  let bkey = rstr2binl(key), ipad = Array(16).fill(void 0 ^ 909522486), opad = Array(16).fill(void 0 ^ 1549556828);
  if (bkey.length > 16) {
    bkey = binlMD5(bkey, key.length * 8);
  }
  bkey.forEach((k, i) => {
    ipad[i] = k ^ 909522486;
    opad[i] = k ^ 1549556828;
  });
  return binl2rstr(binlMD5(opad.concat(binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8)), 512 + 128));
};
const rstr2hex = (input) => {
  const hexTab = (pos) => "0123456789abcdef".charAt(pos);
  return Array.from(input).map((c) => c.charCodeAt(0)).reduce((output, x, i) => output + hexTab(x >>> 4 & 15) + hexTab(x & 15), "");
};
const str2rstrUTF8 = (unicodeString) => {
  if (typeof unicodeString !== "string")
    throw new TypeError("parameter \u2018unicodeString\u2019 is not a string");
  const cc = (c) => c.charCodeAt(0);
  return unicodeString.replace(
    /[\u0080-\u07ff]/g,
    (c) => String.fromCharCode(192 | cc(c) >> 6, 128 | cc(c) & 63)
  ).replace(
    /[\u0800-\uffff]/g,
    (c) => String.fromCharCode(224 | cc(c) >> 12, 128 | cc(c) >> 6 & 63, 128 | cc(c) & 63)
  );
};
const rawMD5 = (s) => rstrMD5(str2rstrUTF8(s));
const hexMD5 = (s) => rstr2hex(rawMD5(s));
const rawHMACMD5 = (k, d) => strHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
const hexHMACMD5 = (k, d) => rstr2hex(rawHMACMD5(k, d));
const md5 = (string, key, raw) => {
  if (!key) {
    if (!raw) {
      return hexMD5(string);
    }
    return rawMD5(string);
  }
  if (!raw) {
    return hexHMACMD5(key, string);
  }
  return rawHMACMD5(key, string);
};
export {
  md5 as m
};
