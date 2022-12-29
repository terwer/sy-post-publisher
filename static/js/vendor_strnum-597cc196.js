const hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
const numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
if (!Number.parseInt && window.parseInt) {
  Number.parseInt = window.parseInt;
}
if (!Number.parseFloat && window.parseFloat) {
  Number.parseFloat = window.parseFloat;
}
const consider = {
  hex: true,
  leadingZeros: true,
  decimalPoint: ".",
  eNotation: true
};
function toNumber(str, options = {}) {
  options = Object.assign({}, consider, options);
  if (!str || typeof str !== "string")
    return str;
  let trimmedStr = str.trim();
  if (options.skipLike !== void 0 && options.skipLike.test(trimmedStr))
    return str;
  else if (options.hex && hexRegex.test(trimmedStr)) {
    return Number.parseInt(trimmedStr, 16);
  } else {
    const match = numRegex.exec(trimmedStr);
    if (match) {
      const sign = match[1];
      const leadingZeros = match[2];
      let numTrimmedByZeros = trimZeros(match[3]);
      const eNotation = match[4] || match[6];
      if (!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".")
        return str;
      else if (!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".")
        return str;
      else {
        const num = Number(trimmedStr);
        const numStr = "" + num;
        if (numStr.search(/[eE]/) !== -1) {
          if (options.eNotation)
            return num;
          else
            return str;
        } else if (eNotation) {
          if (options.eNotation)
            return num;
          else
            return str;
        } else if (trimmedStr.indexOf(".") !== -1) {
          if (numStr === "0" && numTrimmedByZeros === "")
            return num;
          else if (numStr === numTrimmedByZeros)
            return num;
          else if (sign && numStr === "-" + numTrimmedByZeros)
            return num;
          else
            return str;
        }
        if (leadingZeros) {
          if (numTrimmedByZeros === numStr)
            return num;
          else if (sign + numTrimmedByZeros === numStr)
            return num;
          else
            return str;
        }
        if (trimmedStr === numStr)
          return num;
        else if (trimmedStr === sign + numStr)
          return num;
        return str;
      }
    } else {
      return str;
    }
  }
}
function trimZeros(numStr) {
  if (numStr && numStr.indexOf(".") !== -1) {
    numStr = numStr.replace(/0+$/, "");
    if (numStr === ".")
      numStr = "0";
    else if (numStr[0] === ".")
      numStr = "0" + numStr;
    else if (numStr[numStr.length - 1] === ".")
      numStr = numStr.substr(0, numStr.length - 1);
    return numStr;
  }
  return numStr;
}
var strnum = toNumber;
export {
  strnum as s
};
