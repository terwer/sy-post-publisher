import { B as Buffer, c as require$$1, d as require$$2, e as require$$3, b as browser$1 } from "./vendor_rollup-plugin-node-polyfills-2747d496.js";
import { l as lib } from "./vendor_xmlbuilder-c2ddcc20.js";
import { s as sax$1 } from "./vendor_sax-0603144b.js";
var serializer = {};
var DateFormatter = function(opts) {
  this.opts = {};
  this.setOpts(opts);
};
DateFormatter.DEFAULT_OPTIONS = {
  colons: true,
  hyphens: false,
  local: true,
  ms: false,
  offset: false
};
DateFormatter.ISO8601 = new RegExp(
  "([0-9]{4})([-]?([0-9]{2}))([-]?([0-9]{2}))(T([0-9]{2})(((:?([0-9]{2}))?((:?([0-9]{2}))?(.([0-9]+))?))?)(Z|([+-]([0-9]{2}(:?([0-9]{2}))?)))?)?"
);
DateFormatter.prototype.setOpts = function(opts) {
  if (!opts)
    opts = DateFormatter.DEFAULT_OPTIONS;
  var ctx = this;
  Object.keys(DateFormatter.DEFAULT_OPTIONS).forEach(function(k) {
    ctx.opts[k] = opts.hasOwnProperty(k) ? opts[k] : DateFormatter.DEFAULT_OPTIONS[k];
  });
};
DateFormatter.prototype.decodeIso8601 = function(time) {
  var dateParts = time.toString().match(DateFormatter.ISO8601);
  if (!dateParts) {
    throw new Error("Expected a ISO8601 datetime but got '" + time + "'");
  }
  var date = [
    [dateParts[1], dateParts[3] || "01", dateParts[5] || "01"].join("-"),
    "T",
    [
      dateParts[7] || "00",
      dateParts[11] || "00",
      dateParts[14] || "00"
    ].join(":"),
    ".",
    dateParts[16] || "000"
  ].join("");
  date += dateParts[17] !== void 0 ? dateParts[17] + (dateParts[19] && dateParts[20] === void 0 ? "00" : "") : DateFormatter.formatCurrentOffset(new Date(date));
  return new Date(date);
};
DateFormatter.prototype.encodeIso8601 = function(date) {
  var parts = this.opts.local ? DateFormatter.getLocalDateParts(date) : DateFormatter.getUTCDateParts(date);
  return [
    [parts[0], parts[1], parts[2]].join(this.opts.hyphens ? "-" : ""),
    "T",
    [parts[3], parts[4], parts[5]].join(this.opts.colons ? ":" : ""),
    this.opts.ms ? "." + parts[6] : "",
    this.opts.local ? this.opts.offset ? DateFormatter.formatCurrentOffset(date) : "" : "Z"
  ].join("");
};
DateFormatter.getUTCDateParts = function(date) {
  return [
    date.getUTCFullYear(),
    DateFormatter.zeroPad(date.getUTCMonth() + 1, 2),
    DateFormatter.zeroPad(date.getUTCDate(), 2),
    DateFormatter.zeroPad(date.getUTCHours(), 2),
    DateFormatter.zeroPad(date.getUTCMinutes(), 2),
    DateFormatter.zeroPad(date.getUTCSeconds(), 2),
    DateFormatter.zeroPad(date.getUTCMilliseconds(), 3)
  ];
};
DateFormatter.getLocalDateParts = function(date) {
  return [
    date.getFullYear(),
    DateFormatter.zeroPad(date.getMonth() + 1, 2),
    DateFormatter.zeroPad(date.getDate(), 2),
    DateFormatter.zeroPad(date.getHours(), 2),
    DateFormatter.zeroPad(date.getMinutes(), 2),
    DateFormatter.zeroPad(date.getSeconds(), 2),
    DateFormatter.zeroPad(date.getMilliseconds(), 3)
  ];
};
DateFormatter.zeroPad = function(digit, length) {
  var padded = "" + digit;
  while (padded.length < length) {
    padded = "0" + padded;
  }
  return padded;
};
DateFormatter.formatCurrentOffset = function(d) {
  var offset = (d || new Date()).getTimezoneOffset();
  return offset === 0 ? "Z" : [
    offset < 0 ? "+" : "-",
    DateFormatter.zeroPad(Math.abs(Math.floor(offset / 60)), 2),
    ":",
    DateFormatter.zeroPad(Math.abs(offset % 60), 2)
  ].join("");
};
var date_formatter = new DateFormatter();
var customtype = { exports: {} };
var CustomType$1 = customtype.exports = function(raw) {
  this.raw = raw;
};
CustomType$1.prototype.serialize = function(xml) {
  return xml.ele(this.tagName).txt(this.raw);
};
CustomType$1.prototype.tagName = "customType";
var xmlBuilder = lib, dateFormatter$1 = date_formatter, CustomType = customtype.exports;
var serializeMethodCall = serializer.serializeMethodCall = function(method, params, encoding) {
  var params = params || [];
  var options = { version: "1.0", allowSurrogateChars: true };
  if (encoding) {
    options.encoding = encoding;
  }
  var xml = xmlBuilder.create("methodCall", options).ele("methodName").txt(method).up().ele("params");
  params.forEach(function(param) {
    serializeValue(param, xml.ele("param"));
  });
  return xml.doc().toString();
};
serializer.serializeMethodResponse = function(result) {
  var xml = xmlBuilder.create("methodResponse", { version: "1.0", allowSurrogateChars: true }).ele("params").ele("param");
  serializeValue(result, xml);
  return xml.doc().toString();
};
serializer.serializeFault = function(fault) {
  var xml = xmlBuilder.create("methodResponse", { version: "1.0", allowSurrogateChars: true }).ele("fault");
  serializeValue(fault, xml);
  return xml.doc().toString();
};
function serializeValue(value, xml) {
  var stack = [{ value, xml }], current = null, valueNode = null, next = null;
  while (stack.length > 0) {
    current = stack[stack.length - 1];
    if (current.index !== void 0) {
      next = getNextItemsFrame(current);
      if (next) {
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
          if (current.value === null) {
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
            if (next) {
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
  var nextFrame = null;
  if (frame.keys) {
    if (frame.index < frame.keys.length) {
      var key = frame.keys[frame.index++], member = frame.xml.ele("member").ele("name").text(key).up();
      nextFrame = {
        value: frame.value[key],
        xml: member
      };
    }
  } else if (frame.index < frame.value.length) {
    nextFrame = {
      value: frame.value[frame.index],
      xml: frame.xml
    };
    frame.index++;
  }
  return nextFrame;
}
function appendBoolean(value, xml) {
  xml.ele("boolean").txt(value ? 1 : 0);
}
var illegalChars = /^(?![^<&]*]]>[^<&]*)[^<&]*$/;
function appendString(value, xml) {
  if (value.length === 0) {
    xml.ele("string");
  } else if (!illegalChars.test(value)) {
    xml.ele("string").d(value);
  } else {
    xml.ele("string").txt(value);
  }
}
function appendNumber(value, xml) {
  if (value % 1 == 0) {
    xml.ele("int").txt(value);
  } else {
    xml.ele("double").txt(value);
  }
}
function appendDatetime(value, xml) {
  xml.ele("dateTime.iso8601").txt(dateFormatter$1.encodeIso8601(value));
}
function appendBuffer(value, xml) {
  xml.ele("base64").txt(value.toString("base64"));
}
var xmlrpc = {};
var sax = sax$1, dateFormatter = date_formatter;
var Deserializer$2 = function(encoding) {
  this.type = null;
  this.responseType = null;
  this.stack = [];
  this.marks = [];
  this.data = [];
  this.methodname = null;
  this.encoding = encoding || "utf8";
  this.value = false;
  this.callback = null;
  this.error = null;
  this.parser = sax.createStream();
  this.parser.on("opentag", this.onOpentag.bind(this));
  this.parser.on("closetag", this.onClosetag.bind(this));
  this.parser.on("text", this.onText.bind(this));
  this.parser.on("cdata", this.onCDATA.bind(this));
  this.parser.on("end", this.onDone.bind(this));
  this.parser.on("error", this.onError.bind(this));
};
Deserializer$2.prototype.deserializeMethodResponse = function(stream, callback) {
  var that = this;
  this.callback = function(error, result) {
    if (error) {
      callback(error);
    } else if (result.length > 1) {
      callback(new Error("Response has more than one param"));
    } else if (that.type !== "methodresponse") {
      callback(new Error("Not a method response"));
    } else if (!that.responseType) {
      callback(new Error("Invalid method response"));
    } else {
      callback(null, result[0]);
    }
  };
  stream.setEncoding(this.encoding);
  stream.on("error", this.onError.bind(this));
  stream.pipe(this.parser);
};
Deserializer$2.prototype.deserializeMethodCall = function(stream, callback) {
  var that = this;
  this.callback = function(error, result) {
    if (error) {
      callback(error);
    } else if (that.type !== "methodcall") {
      callback(new Error("Not a method call"));
    } else if (!that.methodname) {
      callback(new Error("Method call did not contain a method name"));
    } else {
      callback(null, that.methodname, result);
    }
  };
  stream.setEncoding(this.encoding);
  stream.on("error", this.onError.bind(this));
  stream.pipe(this.parser);
};
Deserializer$2.prototype.onDone = function() {
  if (!this.error) {
    if (this.type === null || this.marks.length) {
      this.callback(new Error("Invalid XML-RPC message"));
    } else if (this.responseType === "fault") {
      var createFault = function(fault) {
        var error = new Error("XML-RPC fault" + (fault.faultString ? ": " + fault.faultString : ""));
        error.code = fault.faultCode;
        error.faultCode = fault.faultCode;
        error.faultString = fault.faultString;
        return error;
      };
      this.callback(createFault(this.stack[0]));
    } else {
      this.callback(void 0, this.stack);
    }
  }
};
Deserializer$2.prototype.onError = function(msg) {
  if (!this.error) {
    if (typeof msg === "string") {
      this.error = new Error(msg);
    } else {
      this.error = msg;
    }
    this.callback(this.error);
  }
};
Deserializer$2.prototype.push = function(value) {
  this.stack.push(value);
};
Deserializer$2.prototype.onOpentag = function(node) {
  if (node.name === "ARRAY" || node.name === "STRUCT") {
    this.marks.push(this.stack.length);
  }
  this.data = [];
  this.value = node.name === "VALUE";
};
Deserializer$2.prototype.onText = function(text) {
  this.data.push(text);
};
Deserializer$2.prototype.onCDATA = function(cdata) {
  this.data.push(cdata);
};
Deserializer$2.prototype.onClosetag = function(el) {
  var data = this.data.join("");
  try {
    switch (el) {
      case "BOOLEAN":
        this.endBoolean(data);
        break;
      case "INT":
      case "I4":
        this.endInt(data);
        break;
      case "I8":
        this.endI8(data);
        break;
      case "DOUBLE":
        this.endDouble(data);
        break;
      case "STRING":
      case "NAME":
        this.endString(data);
        break;
      case "ARRAY":
        this.endArray(data);
        break;
      case "STRUCT":
        this.endStruct(data);
        break;
      case "BASE64":
        this.endBase64(data);
        break;
      case "DATETIME.ISO8601":
        this.endDateTime(data);
        break;
      case "VALUE":
        this.endValue(data);
        break;
      case "PARAMS":
        this.endParams(data);
        break;
      case "FAULT":
        this.endFault(data);
        break;
      case "METHODRESPONSE":
        this.endMethodResponse(data);
        break;
      case "METHODNAME":
        this.endMethodName(data);
        break;
      case "METHODCALL":
        this.endMethodCall(data);
        break;
      case "NIL":
        this.endNil(data);
        break;
      case "DATA":
      case "PARAM":
      case "MEMBER":
        break;
      default:
        this.onError("Unknown XML-RPC tag '" + el + "'");
        break;
    }
  } catch (e) {
    this.onError(e);
  }
};
Deserializer$2.prototype.endNil = function(data) {
  this.push(null);
  this.value = false;
};
Deserializer$2.prototype.endBoolean = function(data) {
  if (data === "1") {
    this.push(true);
  } else if (data === "0") {
    this.push(false);
  } else {
    throw new Error("Illegal boolean value '" + data + "'");
  }
  this.value = false;
};
Deserializer$2.prototype.endInt = function(data) {
  var value = parseInt(data, 10);
  if (isNaN(value)) {
    throw new Error("Expected an integer but got '" + data + "'");
  } else {
    this.push(value);
    this.value = false;
  }
};
Deserializer$2.prototype.endDouble = function(data) {
  var value = parseFloat(data);
  if (isNaN(value)) {
    throw new Error("Expected a double but got '" + data + "'");
  } else {
    this.push(value);
    this.value = false;
  }
};
Deserializer$2.prototype.endString = function(data) {
  this.push(data);
  this.value = false;
};
Deserializer$2.prototype.endArray = function(data) {
  var mark = this.marks.pop();
  this.stack.splice(mark, this.stack.length - mark, this.stack.slice(mark));
  this.value = false;
};
Deserializer$2.prototype.endStruct = function(data) {
  var mark = this.marks.pop(), struct = {}, items = this.stack.slice(mark), i = 0;
  for (; i < items.length; i += 2) {
    struct[items[i]] = items[i + 1];
  }
  this.stack.splice(mark, this.stack.length - mark, struct);
  this.value = false;
};
Deserializer$2.prototype.endBase64 = function(data) {
  var buffer = new Buffer(data, "base64");
  this.push(buffer);
  this.value = false;
};
Deserializer$2.prototype.endDateTime = function(data) {
  var date = dateFormatter.decodeIso8601(data);
  this.push(date);
  this.value = false;
};
var isInteger = /^-?\d+$/;
Deserializer$2.prototype.endI8 = function(data) {
  if (!isInteger.test(data)) {
    throw new Error("Expected integer (I8) value but got '" + data + "'");
  } else {
    this.endString(data);
  }
};
Deserializer$2.prototype.endValue = function(data) {
  if (this.value) {
    this.endString(data);
  }
};
Deserializer$2.prototype.endParams = function(data) {
  this.responseType = "params";
};
Deserializer$2.prototype.endFault = function(data) {
  this.responseType = "fault";
};
Deserializer$2.prototype.endMethodResponse = function(data) {
  this.type = "methodresponse";
};
Deserializer$2.prototype.endMethodName = function(data) {
  this.methodname = data;
};
Deserializer$2.prototype.endMethodCall = function(data) {
  this.type = "methodcall";
};
var deserializer = Deserializer$2;
function Cookies$1() {
  this.cookies = {};
}
Cookies$1.prototype = {
  get: function(name) {
    var cookie = this.cookies[name];
    if (cookie && this.checkNotExpired(name)) {
      return this.cookies[name].value;
    }
    return null;
  },
  set: function(name, value, options) {
    var cookie = typeof options == "object" ? { value, expires: options.expires, secure: options.secure || false, new: options.new || false } : { value };
    if (this.checkNotExpired(name, cookie)) {
      this.cookies[name] = cookie;
    }
  },
  getExpirationDate: function(name) {
    return this.cookies[name] ? this.cookies[name].expires : null;
  },
  checkNotExpired: function(name, cookie) {
    if (typeof cookie === "undefined") {
      cookie = this.cookies[name];
    }
    var now = new Date();
    if (cookie && cookie.expires && now > cookie.expires) {
      delete this.cookies[name];
      return false;
    }
    return true;
  },
  parseResponse: function(headers) {
    var cookies2 = headers["set-cookie"];
    if (cookies2) {
      cookies2.forEach(function(c) {
        var cookiesParams = c.split(";");
        var cookiePair = cookiesParams.shift().split("=");
        var options = {};
        cookiesParams.forEach(function(param) {
          param = param.trim();
          if (param.toLowerCase().indexOf("expires") == 0) {
            var date = param.split("=")[1].trim();
            options.expires = new Date(date);
          }
        });
        this.set(cookiePair[0].trim(), cookiePair[1].trim(), options);
      }.bind(this));
    }
  },
  composeRequest: function(headers) {
    if (Object.keys(this.cookies).length == 0) {
      return;
    }
    headers["Cookie"] = this.toString();
  },
  toString: function() {
    return Object.keys(this.cookies).filter(this.checkNotExpired.bind(this)).map(function(name) {
      return name + "=" + this.cookies[name].value;
    }.bind(this)).join(";");
  }
};
var cookies = Cookies$1;
var http$1 = require$$1, https$1 = require$$1, url$1 = require$$2, Serializer$1 = serializer, Deserializer$1 = deserializer, Cookies = cookies;
function Client(options, isSecure) {
  if (false === this instanceof Client) {
    return new Client(options, isSecure);
  }
  if (typeof options === "string") {
    options = url$1.parse(options);
    options.host = options.hostname;
    options.path = options.pathname;
  }
  if (typeof options.url !== "undefined") {
    var parsedUrl = url$1.parse(options.url);
    options.host = parsedUrl.hostname;
    options.path = parsedUrl.pathname;
    options.port = parsedUrl.port;
  }
  var headers = {
    "User-Agent": "NodeJS XML-RPC Client",
    "Content-Type": "text/xml",
    "Accept": "text/xml",
    "Accept-Charset": "UTF8",
    "Connection": "Keep-Alive"
  };
  options.headers = options.headers || {};
  if (options.headers.Authorization == null && options.basic_auth != null && options.basic_auth.user != null && options.basic_auth.pass != null) {
    var auth = options.basic_auth.user + ":" + options.basic_auth.pass;
    options.headers["Authorization"] = "Basic " + new Buffer(auth).toString("base64");
  }
  for (var attribute in headers) {
    if (options.headers[attribute] === void 0) {
      options.headers[attribute] = headers[attribute];
    }
  }
  options.method = "POST";
  this.options = options;
  this.isSecure = isSecure;
  this.headersProcessors = {
    processors: [],
    composeRequest: function(headers2) {
      this.processors.forEach(function(p) {
        p.composeRequest(headers2);
      });
    },
    parseResponse: function(headers2) {
      this.processors.forEach(function(p) {
        p.parseResponse(headers2);
      });
    }
  };
  if (options.cookies) {
    this.cookies = new Cookies();
    this.headersProcessors.processors.unshift(this.cookies);
  }
}
Client.prototype.methodCall = function methodCall(method, params, callback) {
  var options = this.options;
  var xml = Serializer$1.serializeMethodCall(method, params, options.encoding);
  var transport = this.isSecure ? https$1 : http$1;
  options.headers["Content-Length"] = Buffer.byteLength(xml, "utf8");
  this.headersProcessors.composeRequest(options.headers);
  var request = transport.request(options, function(response) {
    var body = [];
    response.on("data", function(chunk) {
      body.push(chunk);
    });
    function __enrichError(err) {
      Object.defineProperty(err, "req", { value: request });
      Object.defineProperty(err, "res", { value: response });
      Object.defineProperty(err, "body", { value: body.join("") });
      return err;
    }
    if (response.statusCode == 404) {
      callback(__enrichError(new Error("Not Found")));
    } else {
      this.headersProcessors.parseResponse(response.headers);
      var deserializer2 = new Deserializer$1(options.responseEncoding);
      deserializer2.deserializeMethodResponse(response, function(err, result) {
        if (err) {
          err = __enrichError(err);
        }
        callback(err, result);
      });
    }
  }.bind(this));
  request.on("error", callback);
  request.write(xml, "utf8");
  request.end();
};
Client.prototype.getCookie = function getCookie(name) {
  if (!this.cookies) {
    throw "Cookies support is not turned on for this client instance";
  }
  return this.cookies.get(name);
};
Client.prototype.setCookie = function setCookie(name, value) {
  if (!this.cookies) {
    throw "Cookies support is not turned on for this client instance";
  }
  this.cookies.set(name, value);
  return this;
};
var client = Client;
var http = require$$1, https = require$$1, url = require$$2, EventEmitter = require$$3.EventEmitter, Serializer = serializer, Deserializer = deserializer;
function Server(options, isSecure, onListening) {
  if (false === this instanceof Server) {
    return new Server(options, isSecure);
  }
  onListening = onListening || function() {
  };
  var that = this;
  if (typeof options === "string") {
    options = url.parse(options);
    options.host = options.hostname;
    options.path = options.pathname;
  }
  function handleMethodCall(request, response) {
    var deserializer2 = new Deserializer();
    deserializer2.deserializeMethodCall(request, function(error, methodName, params) {
      if (Object.prototype.hasOwnProperty.call(that._events, methodName)) {
        that.emit(methodName, null, params, function(error2, value) {
          var xml = null;
          if (error2 !== null) {
            xml = Serializer.serializeFault(error2);
          } else {
            xml = Serializer.serializeMethodResponse(value);
          }
          response.writeHead(200, { "Content-Type": "text/xml" });
          response.end(xml);
        });
      } else {
        that.emit("NotFound", methodName, params);
        response.writeHead(404);
        response.end();
      }
    });
  }
  this.httpServer = isSecure ? https.createServer(options, handleMethodCall) : http.createServer(handleMethodCall);
  browser$1.nextTick(function() {
    this.httpServer.listen(options.port, options.host, onListening);
  }.bind(this));
  this.close = function(callback) {
    this.httpServer.once("close", callback);
    this.httpServer.close();
  }.bind(this);
}
Server.prototype.__proto__ = EventEmitter.prototype;
var server = Server;
(function(exports) {
  var Client2 = client, Server2 = server, CustomType2 = customtype.exports, dateFormatter2 = date_formatter;
  var xmlrpc2 = exports;
  xmlrpc2.createClient = function(options) {
    return new Client2(options, false);
  };
  xmlrpc2.createSecureClient = function(options) {
    return new Client2(options, true);
  };
  xmlrpc2.createServer = function(options, callback) {
    return new Server2(options, false, callback);
  };
  xmlrpc2.createSecureServer = function(options, callback) {
    return new Server2(options, true, callback);
  };
  xmlrpc2.CustomType = CustomType2;
  xmlrpc2.dateFormatter = dateFormatter2;
})(xmlrpc);
export {
  serializeMethodCall as s,
  xmlrpc as x
};
