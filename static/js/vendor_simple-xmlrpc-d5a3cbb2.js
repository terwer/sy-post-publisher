var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { s as sax } from "./vendor_sax-8f0ba4c8.js";
import { f as fetch } from "./vendor_cross-fetch-e4e57030.js";
import { b as bytesToBase64 } from "./vendor_byte-base64-0dbd845f.js";
import { x as xmlbuilder2_min } from "./vendor_xmlbuilder2-780b1a8c.js";
const _DateFormatter = class {
  constructor(options) {
    __publicField(this, "_colons", true);
    __publicField(this, "_hyphens", true);
    __publicField(this, "_ms", true);
    var _a, _b, _c;
    if (options != void 0) {
      this._colons = (_a = options.colons) != null ? _a : this._colons;
      this._hyphens = (_b = options.hyphens) != null ? _b : this._hyphens;
      this._ms = (_c = options.ms) != null ? _c : this._ms;
    }
  }
  decodeIso8601(time) {
    var _a, _b, _c, _d, _e, _f;
    const dateParts = _DateFormatter.ISO8601.exec(time.toString());
    if (dateParts == null) {
      throw new Error(`Expected a ISO8601 datetime but got "${time}"`);
    }
    let date = [[dateParts[1], (_a = dateParts[3]) != null ? _a : "01", (_b = dateParts[5]) != null ? _b : "01"].join("-"), "T", [(_c = dateParts[7]) != null ? _c : "00", (_d = dateParts[11]) != null ? _d : "00", (_e = dateParts[14]) != null ? _e : "00"].join(":"), ".", (_f = dateParts[16]) != null ? _f : "000"].join("");
    date += dateParts[17] != void 0 ? dateParts[17] + (dateParts[19] != void 0 && dateParts[20] == void 0 ? "00" : "") : "Z";
    return new Date(date);
  }
  encodeIso8601(date) {
    const parts = _DateFormatter.getUTCDateParts(date);
    return [[parts[0], parts[1], parts[2]].join(this._hyphens ? "-" : ""), "T", [parts[3], parts[4], parts[5]].join(this._colons ? ":" : ""), this._ms ? "." + parts[6] : "", "Z"].join("");
  }
  static formatCurrentOffset(d) {
    const offset = (d != null ? d : new Date()).getTimezoneOffset();
    return offset === 0 ? "Z" : [offset < 0 ? "+" : "-", _DateFormatter.zeroPad(Math.abs(Math.floor(offset / 60)), 2), ":", _DateFormatter.zeroPad(Math.abs(offset % 60), 2)].join("");
  }
  static zeroPad(digit, length) {
    return digit.toString().padStart(length, "0");
  }
  static getUTCDateParts(date) {
    return [date.getUTCFullYear().toString(), _DateFormatter.zeroPad(date.getUTCMonth() + 1, 2), _DateFormatter.zeroPad(date.getUTCDate(), 2), _DateFormatter.zeroPad(date.getUTCHours(), 2), _DateFormatter.zeroPad(date.getUTCMinutes(), 2), _DateFormatter.zeroPad(date.getUTCSeconds(), 2), _DateFormatter.zeroPad(date.getUTCMilliseconds(), 3)];
  }
};
let DateFormatter = _DateFormatter;
__publicField(DateFormatter, "ISO8601", /([0-9]{4})([-]?([0-9]{2}))([-]?([0-9]{2}))(T-?([0-9]{2})(((:?([0-9]{2}))?((:?([0-9]{2}))?(\.([0-9]+))?))?)(Z|([+-]([0-9]{2}(:?([0-9]{2}))?)))?)?/);
class XmlRpcFault extends Error {
  constructor(faultString, faultCode) {
    const msg = `XML-RPC fault${faultString != void 0 ? ": " + faultString : ""}`;
    super(msg);
    __publicField(this, "code");
    __publicField(this, "faultCode");
    __publicField(this, "faultString");
    this.code = this.faultCode = faultCode;
    this.faultString = faultString;
  }
}
const _Deserializer = class {
  constructor(encoding = "utf-8") {
    __publicField(this, "dateFormatter", new DateFormatter());
    __publicField(this, "_type");
    __publicField(this, "_responseType");
    __publicField(this, "_stack", []);
    __publicField(this, "_marks", []);
    __publicField(this, "_data", []);
    __publicField(this, "_methodname");
    __publicField(this, "_encoding");
    __publicField(this, "_value", false);
    __publicField(this, "_callback", () => {
      return;
    });
    __publicField(this, "_error");
    __publicField(this, "_parser");
    __publicField(this, "_onDone", () => {
      var _a;
      if (this._error == void 0) {
        if (this._type == void 0 || this._marks.length !== 0) {
          this._callback(new Error(`Invalid XML-RPC ${(_a = this._type) != null ? _a : "message"}`));
        } else if (this._responseType === "fault") {
          const createFault = (fault) => {
            const faultString = typeof fault.faultString === "string" ? fault.faultString : void 0;
            const faultCode = typeof fault.faultCode === "number" ? fault.faultCode : void 0;
            return new XmlRpcFault(faultString, faultCode);
          };
          this._callback(createFault(this._stack[0]));
        } else {
          this._callback(void 0, this._stack);
        }
      }
    });
    __publicField(this, "_onError", (err) => {
      if (this._error == void 0) {
        this._error = err;
        this._callback(this._error);
      }
    });
    __publicField(this, "_push", (value) => {
      this._stack.push(value);
    });
    __publicField(this, "_onOpentag", (node) => {
      if (node.name === "ARRAY" || node.name === "STRUCT") {
        this._marks.push(this._stack.length);
      }
      this._data = [];
      this._value = node.name === "VALUE";
    });
    __publicField(this, "_onText", (text) => {
      this._data.push(text);
    });
    __publicField(this, "_onCDATA", (cdata) => {
      this._data.push(cdata);
    });
    __publicField(this, "_onClosetag", (el) => {
      const data = this._data.join("");
      try {
        switch (el) {
          case "BOOLEAN":
            this._endBoolean(data);
            break;
          case "INT":
          case "I4":
            this._endInt(data);
            break;
          case "I8":
            this._endI8(data);
            break;
          case "DOUBLE":
            this._endDouble(data);
            break;
          case "STRING":
          case "NAME":
            this._endString(data);
            break;
          case "ARRAY":
            this._endArray(data);
            break;
          case "STRUCT":
            this._endStruct(data);
            break;
          case "BASE64":
            this._endBase64(data);
            break;
          case "DATETIME.ISO8601":
            this._endDateTime(data);
            break;
          case "VALUE":
            this._endValue(data);
            break;
          case "PARAMS":
            this._endParams(data);
            break;
          case "FAULT":
            this._endFault(data);
            break;
          case "METHODRESPONSE":
            this._endMethodResponse(data);
            break;
          case "METHODNAME":
            this._endMethodName(data);
            break;
          case "METHODCALL":
            this._endMethodCall(data);
            break;
          case "NIL":
            this._endNil(data);
            break;
          case "DATA":
          case "PARAM":
          case "MEMBER":
            break;
          case "BR":
            break;
          default:
            this._onError(new Error(`Unknown XML-RPC tag "${el}"`));
            break;
        }
      } catch (e) {
        this._onError(e);
      }
    });
    __publicField(this, "_endNil", (_data) => {
      this._push(void 0);
      this._value = false;
    });
    __publicField(this, "_endBoolean", (data) => {
      if (data === "1") {
        this._push(true);
      } else if (data === "0") {
        this._push(false);
      } else {
        throw new Error("Illegal boolean value '" + data + "'");
      }
      this._value = false;
    });
    __publicField(this, "_endInt", (data) => {
      const value = parseInt(data, 10);
      if (isNaN(value)) {
        throw new Error("Expected an integer but got '" + data + "'");
      } else {
        this._push(value);
        this._value = false;
      }
    });
    __publicField(this, "_endDouble", (data) => {
      const value = parseFloat(data);
      if (isNaN(value)) {
        const lower = data.toLowerCase();
        if (lower === "nan") {
          this._push(NaN);
          this._value = false;
        } else if (lower === "-inf" || lower === "-infinity") {
          this._push(-Infinity);
          this._value = false;
        } else if (lower === "inf" || lower === "infinity") {
          this._push(Infinity);
          this._value = false;
        } else {
          throw new Error("Expected a double but got '" + data + "'");
        }
      } else {
        this._push(value);
        this._value = false;
      }
    });
    __publicField(this, "_endString", (data) => {
      this._push(data);
      this._value = false;
    });
    __publicField(this, "_endArray", (_data) => {
      var _a;
      const mark = (_a = this._marks.pop()) != null ? _a : 0;
      this._stack.splice(mark, this._stack.length - mark, this._stack.slice(mark));
      this._value = false;
    });
    __publicField(this, "_endStruct", (_data) => {
      var _a;
      const mark = (_a = this._marks.pop()) != null ? _a : 0;
      const struct = {};
      const items = this._stack.slice(mark);
      for (let i = 0; i < items.length; i += 2) {
        const key = String(items[i]);
        struct[key] = items[i + 1];
      }
      this._stack.splice(mark, this._stack.length - mark, struct);
      this._value = false;
    });
    __publicField(this, "_endBase64", (data) => {
      const buffer = Buffer.from(data, "base64");
      this._push(buffer);
      this._value = false;
    });
    __publicField(this, "_endDateTime", (data) => {
      const date = this.dateFormatter.decodeIso8601(data);
      this._push(date);
      this._value = false;
    });
    __publicField(this, "_endI8", (data) => {
      if (!_Deserializer.isInteger.test(data)) {
        throw new Error(`Expected integer (I8) value but got "${data}"`);
      } else {
        this._endString(data);
      }
    });
    __publicField(this, "_endValue", (data) => {
      if (this._value) {
        this._endString(data);
      }
    });
    __publicField(this, "_endParams", (_data) => {
      this._responseType = "params";
    });
    __publicField(this, "_endFault", (_data) => {
      this._responseType = "fault";
    });
    __publicField(this, "_endMethodResponse", (_data) => {
      this._type = "methodresponse";
    });
    __publicField(this, "_endMethodName", (data) => {
      this._methodname = data;
    });
    __publicField(this, "_endMethodCall", (_data) => {
      this._type = "methodcall";
    });
    this._encoding = encoding;
    this._parser = sax.createStream();
    this._parser.on("opentag", this._onOpentag);
    this._parser.on("closetag", this._onClosetag);
    this._parser.on("text", this._onText);
    this._parser.on("cdata", this._onCDATA);
    this._parser.on("end", this._onDone);
    this._parser.on("error", this._onError);
  }
  async deserializeMethodResponse(data) {
    return await new Promise((resolve, reject) => {
      this._callback = (error, result) => {
        if (error != void 0) {
          reject(error);
        } else if (result != void 0 && result.length > 1) {
          reject(new Error("Response has more than one param"));
        } else if (this._type !== "methodresponse") {
          reject(new Error("Not a method response"));
        } else if (this._responseType == void 0) {
          reject(new Error("Invalid method response"));
        } else {
          resolve(result == null ? void 0 : result[0]);
        }
      };
      this._parser.end(data, this._encoding);
    });
  }
  async deserializeMethodCall(data) {
    return await new Promise((resolve, reject) => {
      this._callback = (error, result) => {
        if (error != void 0) {
          reject(error);
        } else if (this._type !== "methodcall") {
          reject(new Error("Not a method call"));
        } else if (this._methodname == void 0) {
          reject(new Error("Method call did not contain a method name"));
        } else {
          resolve([this._methodname, result != null ? result : []]);
        }
      };
      this._parser.end(data, this._encoding);
    });
  }
};
let Deserializer = _Deserializer;
__publicField(Deserializer, "isInteger", /^-?\d+$/);
class CustomType {
  constructor(raw) {
    __publicField(this, "tagName", "customType");
    this.raw = raw;
  }
  serialize(xml) {
    return xml.ele(this.tagName).txt(this.raw);
  }
}
const illegalChars = /^(?![^<&]*]]>[^<&]*)[^<&]*$/;
const dateFormatter = new DateFormatter();
function serializeMethodCall(method, params = [], encoding) {
  const xml = xmlbuilder2_min.exports.create({
    version: "1.0",
    encoding
  }).ele("methodCall").ele("methodName").txt(method).up().ele("params");
  params.forEach((param) => serializeValue(param, xml.ele("param")));
  return xml.doc().toString();
}
function serializeValue(value, xml) {
  let current = {
    value,
    xml
  };
  const stack = [current];
  let valueNode;
  let next;
  while (stack.length > 0) {
    current = stack[stack.length - 1];
    if (current.index != void 0) {
      next = getNextItemsFrame(current);
      if (next != void 0) {
        stack.push(next);
      } else {
        stack.pop();
      }
    } else {
      valueNode = current.xml.ele("value");
      switch (typeof current.value) {
        case "boolean":
          appendBoolean(current.value, valueNode);
          stack.pop();
          break;
        case "string":
          appendString(current.value, valueNode);
          stack.pop();
          break;
        case "number":
          appendNumber(current.value, valueNode);
          stack.pop();
          break;
        case "object":
          if (current.value == void 0) {
            valueNode.ele("nil");
            stack.pop();
          } else if (current.value instanceof Date) {
            appendDatetime(current.value, valueNode);
            stack.pop();
          } else if (Buffer.isBuffer(current.value)) {
            appendBuffer(current.value, valueNode);
            stack.pop();
          } else if (current.value instanceof CustomType) {
            current.value.serialize(valueNode);
            stack.pop();
          } else {
            if (Array.isArray(current.value)) {
              current.xml = valueNode.ele("array").ele("data");
            } else {
              current.xml = valueNode.ele("struct");
              current.keys = Object.keys(current.value);
            }
            current.index = 0;
            next = getNextItemsFrame(current);
            if (next != void 0) {
              stack.push(next);
            } else {
              stack.pop();
            }
          }
          break;
        default:
          stack.pop();
          break;
      }
    }
  }
}
function getNextItemsFrame(frame) {
  let nextFrame;
  if (frame.keys != void 0 && frame.index != void 0) {
    if (frame.index < frame.keys.length) {
      const key = frame.keys[frame.index++];
      const member = frame.xml.ele("member").ele("name").txt(key).up();
      nextFrame = {
        value: frame.value[key],
        xml: member
      };
    }
  } else if (frame.index != void 0 && Array.isArray(frame.value) && frame.index < frame.value.length) {
    nextFrame = {
      value: frame.value[frame.index],
      xml: frame.xml
    };
    frame.index++;
  }
  return nextFrame;
}
function appendBoolean(value, xml) {
  xml.ele("boolean").txt(value ? "1" : "0");
}
function appendString(value, xml) {
  if (!illegalChars.test(value)) {
    xml.ele("string").dat(value);
  } else {
    xml.ele("string").txt(value);
  }
}
function appendNumber(value, xml) {
  if (value % 1 === 0) {
    xml.ele("int").txt(String(value));
  } else if (value === Infinity) {
    xml.ele("double").txt("inf");
  } else if (value === -Infinity) {
    xml.ele("double").txt("-inf");
  } else if (isNaN(value)) {
    xml.ele("double").txt("nan");
  } else {
    xml.ele("double").txt(String(value));
  }
}
function appendDatetime(value, xml) {
  xml.ele("dateTime.iso8601").txt(dateFormatter.encodeIso8601(value));
}
function appendBuffer(value, xml) {
  xml.ele("base64").txt(bytesToBase64(value));
}
class XmlrpcUtil {
  static removeXmlHeader(resText) {
    const startIndex = resText.indexOf("<?xml");
    if (startIndex > 0) {
      console.warn("xml\u5934\u90E8\u6709\u975E\u6CD5\u5B57\u7B26\uFF0C\u5C06\u53BB\u9664=>", resText);
      resText = resText.substring(startIndex, resText.length);
    }
    console.log("methodCall resText=>", resText);
    return resText;
  }
}
class XmlRpcClient {
  constructor(url, options) {
    __publicField(this, "url");
    __publicField(this, "encoding");
    __publicField(this, "headers", {
      "Content-Type": "text/xml",
      Accept: "text/xml"
    });
    this.url = url;
    this.encoding = options == null ? void 0 : options.encoding;
    if ((options == null ? void 0 : options.headers) != void 0) {
      this.headers = {
        ...this.headers,
        ...options.headers
      };
    }
  }
  async methodCall(method, params) {
    const body = serializeMethodCall(method, params, this.encoding);
    const headers = this.headers;
    let res;
    try {
      res = await fetch(this.url, {
        method: "POST",
        headers,
        body
      });
    } catch (err) {
      if (err.message === "Failed to fetch") {
        throw new Error(`XML-RPC call "${method}" to ${this.url} failed to connect`);
      }
      throw err;
    }
    if (!res.ok) {
      throw new Error(`XML-RPC call "${method}" to ${this.url} returned ${res.status}: "${res.statusText}"`);
    }
    let resText = await res.text();
    resText = XmlrpcUtil.removeXmlHeader(resText);
    const deserializer = new Deserializer(this.encoding);
    return await deserializer.deserializeMethodResponse(resText);
  }
  async multiMethodCall(requests) {
    const res = await this.methodCall("system.multicall", [requests]);
    if (!Array.isArray(res) || res.length !== requests.length) {
      throw new Error(`malformed system.multicall response`);
    }
    const output = [];
    const createFault = (fault = {}) => {
      const faultString = typeof fault.faultString === "string" ? fault.faultString : void 0;
      const faultCode = typeof fault.faultCode === "number" ? fault.faultCode : void 0;
      return new XmlRpcFault(faultString, faultCode);
    };
    for (const entry of res) {
      if (!Array.isArray(entry) || entry.length !== 1) {
        output.push(createFault(entry));
      } else {
        output.push(entry[0]);
      }
    }
    return output;
  }
}
class SimpleXmlRpcClient extends XmlRpcClient {
}
export {
  SimpleXmlRpcClient as S
};
