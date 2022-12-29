import { c as commonjsGlobal } from "./vendor_before-after-hook-6380be1a.js";
var lib = {};
var Utility = {};
var hasRequiredUtility;
function requireUtility() {
  if (hasRequiredUtility)
    return Utility;
  hasRequiredUtility = 1;
  (function() {
    var assign, camelCase, capitalize, isArray, isEmpty, isFunction, isObject, isPlainObject, kebabCase, snakeCase, titleCase, words, slice = [].slice, hasProp = {}.hasOwnProperty;
    assign = function() {
      var i, key, len, source, sources, target;
      target = arguments[0], sources = 2 <= arguments.length ? slice.call(arguments, 1) : [];
      if (isFunction(Object.assign)) {
        Object.assign.apply(null, arguments);
      } else {
        for (i = 0, len = sources.length; i < len; i++) {
          source = sources[i];
          if (source != null) {
            for (key in source) {
              if (!hasProp.call(source, key))
                continue;
              target[key] = source[key];
            }
          }
        }
      }
      return target;
    };
    isFunction = function(val) {
      return !!val && Object.prototype.toString.call(val) === "[object Function]";
    };
    isObject = function(val) {
      var ref;
      return !!val && ((ref = typeof val) === "function" || ref === "object");
    };
    isArray = function(val) {
      if (isFunction(Array.isArray)) {
        return Array.isArray(val);
      } else {
        return Object.prototype.toString.call(val) === "[object Array]";
      }
    };
    isEmpty = function(val) {
      var key;
      if (isArray(val)) {
        return !val.length;
      } else {
        for (key in val) {
          if (!hasProp.call(val, key))
            continue;
          return false;
        }
        return true;
      }
    };
    isPlainObject = function(val) {
      var ctor, proto;
      return isObject(val) && (proto = Object.getPrototypeOf(val)) && (ctor = proto.constructor) && typeof ctor === "function" && ctor instanceof ctor && Function.prototype.toString.call(ctor) === Function.prototype.toString.call(Object);
    };
    words = function(val) {
      return (val.split(/[-_\s]+|(?=[A-Z][a-z])/) || []).filter(function(n) {
        return !!n;
      });
    };
    camelCase = function(val) {
      var i, index, len, r, ref, word;
      r = "";
      ref = words(val);
      for (index = i = 0, len = ref.length; i < len; index = ++i) {
        word = ref[index];
        r += index ? capitalize(word.toLowerCase()) : word.toLowerCase();
      }
      return r;
    };
    titleCase = function(val) {
      var i, index, len, r, ref, word;
      r = "";
      ref = words(val);
      for (index = i = 0, len = ref.length; i < len; index = ++i) {
        word = ref[index];
        r += capitalize(word.toLowerCase());
      }
      return r;
    };
    kebabCase = function(val) {
      var i, index, len, r, ref, word;
      r = "";
      ref = words(val);
      for (index = i = 0, len = ref.length; i < len; index = ++i) {
        word = ref[index];
        r += (index ? "-" : "") + word.toLowerCase();
      }
      return r;
    };
    snakeCase = function(val) {
      var i, index, len, r, ref, word;
      r = "";
      ref = words(val);
      for (index = i = 0, len = ref.length; i < len; index = ++i) {
        word = ref[index];
        r += (index ? "_" : "") + word.toLowerCase();
      }
      return r;
    };
    capitalize = function(val) {
      return val.charAt(0).toUpperCase() + val.slice(1);
    };
    Utility.assign = assign;
    Utility.isFunction = isFunction;
    Utility.isObject = isObject;
    Utility.isArray = isArray;
    Utility.isEmpty = isEmpty;
    Utility.isPlainObject = isPlainObject;
    Utility.camelCase = camelCase;
    Utility.titleCase = titleCase;
    Utility.kebabCase = kebabCase;
    Utility.snakeCase = snakeCase;
    Utility.capitalize = capitalize;
    Utility.words = words;
  }).call(commonjsGlobal);
  return Utility;
}
var XMLDocument = { exports: {} };
var XMLNode = { exports: {} };
var XMLElement = { exports: {} };
var XMLAttribute = { exports: {} };
var hasRequiredXMLAttribute;
function requireXMLAttribute() {
  if (hasRequiredXMLAttribute)
    return XMLAttribute.exports;
  hasRequiredXMLAttribute = 1;
  (function() {
    XMLAttribute.exports = function() {
      function XMLAttribute2(parent, name, value) {
        this.options = parent.options;
        this.stringify = parent.stringify;
        if (name == null) {
          throw new Error("Missing attribute name of element " + parent.name);
        }
        if (value == null) {
          throw new Error("Missing attribute value for attribute " + name + " of element " + parent.name);
        }
        this.name = this.stringify.attName(name);
        this.value = this.stringify.attValue(value);
      }
      XMLAttribute2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLAttribute2.prototype.toString = function(options) {
        return this.options.writer.set(options).attribute(this);
      };
      return XMLAttribute2;
    }();
  }).call(commonjsGlobal);
  return XMLAttribute.exports;
}
var hasRequiredXMLElement;
function requireXMLElement() {
  if (hasRequiredXMLElement)
    return XMLElement.exports;
  hasRequiredXMLElement = 1;
  (function() {
    var XMLAttribute2, XMLNode2, isFunction, isObject, ref, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    ref = requireUtility(), isObject = ref.isObject, isFunction = ref.isFunction;
    XMLNode2 = requireXMLNode();
    XMLAttribute2 = requireXMLAttribute();
    XMLElement.exports = function(superClass) {
      extend(XMLElement2, superClass);
      function XMLElement2(parent, name, attributes) {
        XMLElement2.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing element name");
        }
        this.name = this.stringify.eleName(name);
        this.attributes = {};
        if (attributes != null) {
          this.attribute(attributes);
        }
        if (parent.isDocument) {
          this.isRoot = true;
          this.documentObject = parent;
          parent.rootObject = this;
        }
      }
      XMLElement2.prototype.clone = function() {
        var att, attName, clonedSelf, ref1;
        clonedSelf = Object.create(this);
        if (clonedSelf.isRoot) {
          clonedSelf.documentObject = null;
        }
        clonedSelf.attributes = {};
        ref1 = this.attributes;
        for (attName in ref1) {
          if (!hasProp.call(ref1, attName))
            continue;
          att = ref1[attName];
          clonedSelf.attributes[attName] = att.clone();
        }
        clonedSelf.children = [];
        this.children.forEach(function(child) {
          var clonedChild;
          clonedChild = child.clone();
          clonedChild.parent = clonedSelf;
          return clonedSelf.children.push(clonedChild);
        });
        return clonedSelf;
      };
      XMLElement2.prototype.attribute = function(name, value) {
        var attName, attValue;
        if (name != null) {
          name = name.valueOf();
        }
        if (isObject(name)) {
          for (attName in name) {
            if (!hasProp.call(name, attName))
              continue;
            attValue = name[attName];
            this.attribute(attName, attValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          if (!this.options.skipNullAttributes || value != null) {
            this.attributes[name] = new XMLAttribute2(this, name, value);
          }
        }
        return this;
      };
      XMLElement2.prototype.removeAttribute = function(name) {
        var attName, i, len;
        if (name == null) {
          throw new Error("Missing attribute name");
        }
        name = name.valueOf();
        if (Array.isArray(name)) {
          for (i = 0, len = name.length; i < len; i++) {
            attName = name[i];
            delete this.attributes[attName];
          }
        } else {
          delete this.attributes[name];
        }
        return this;
      };
      XMLElement2.prototype.toString = function(options) {
        return this.options.writer.set(options).element(this);
      };
      XMLElement2.prototype.att = function(name, value) {
        return this.attribute(name, value);
      };
      XMLElement2.prototype.a = function(name, value) {
        return this.attribute(name, value);
      };
      return XMLElement2;
    }(XMLNode2);
  }).call(commonjsGlobal);
  return XMLElement.exports;
}
var XMLCData = { exports: {} };
var hasRequiredXMLCData;
function requireXMLCData() {
  if (hasRequiredXMLCData)
    return XMLCData.exports;
  hasRequiredXMLCData = 1;
  (function() {
    var XMLNode2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode2 = requireXMLNode();
    XMLCData.exports = function(superClass) {
      extend(XMLCData2, superClass);
      function XMLCData2(parent, text) {
        XMLCData2.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing CDATA text");
        }
        this.text = this.stringify.cdata(text);
      }
      XMLCData2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLCData2.prototype.toString = function(options) {
        return this.options.writer.set(options).cdata(this);
      };
      return XMLCData2;
    }(XMLNode2);
  }).call(commonjsGlobal);
  return XMLCData.exports;
}
var XMLComment = { exports: {} };
var hasRequiredXMLComment;
function requireXMLComment() {
  if (hasRequiredXMLComment)
    return XMLComment.exports;
  hasRequiredXMLComment = 1;
  (function() {
    var XMLNode2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode2 = requireXMLNode();
    XMLComment.exports = function(superClass) {
      extend(XMLComment2, superClass);
      function XMLComment2(parent, text) {
        XMLComment2.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing comment text");
        }
        this.text = this.stringify.comment(text);
      }
      XMLComment2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLComment2.prototype.toString = function(options) {
        return this.options.writer.set(options).comment(this);
      };
      return XMLComment2;
    }(XMLNode2);
  }).call(commonjsGlobal);
  return XMLComment.exports;
}
var XMLDeclaration = { exports: {} };
var hasRequiredXMLDeclaration;
function requireXMLDeclaration() {
  if (hasRequiredXMLDeclaration)
    return XMLDeclaration.exports;
  hasRequiredXMLDeclaration = 1;
  (function() {
    var XMLNode2, isObject, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = requireUtility().isObject;
    XMLNode2 = requireXMLNode();
    XMLDeclaration.exports = function(superClass) {
      extend(XMLDeclaration2, superClass);
      function XMLDeclaration2(parent, version, encoding, standalone) {
        var ref;
        XMLDeclaration2.__super__.constructor.call(this, parent);
        if (isObject(version)) {
          ref = version, version = ref.version, encoding = ref.encoding, standalone = ref.standalone;
        }
        if (!version) {
          version = "1.0";
        }
        this.version = this.stringify.xmlVersion(version);
        if (encoding != null) {
          this.encoding = this.stringify.xmlEncoding(encoding);
        }
        if (standalone != null) {
          this.standalone = this.stringify.xmlStandalone(standalone);
        }
      }
      XMLDeclaration2.prototype.toString = function(options) {
        return this.options.writer.set(options).declaration(this);
      };
      return XMLDeclaration2;
    }(XMLNode2);
  }).call(commonjsGlobal);
  return XMLDeclaration.exports;
}
var XMLDocType = { exports: {} };
var XMLDTDAttList = { exports: {} };
var hasRequiredXMLDTDAttList;
function requireXMLDTDAttList() {
  if (hasRequiredXMLDTDAttList)
    return XMLDTDAttList.exports;
  hasRequiredXMLDTDAttList = 1;
  (function() {
    var XMLNode2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode2 = requireXMLNode();
    XMLDTDAttList.exports = function(superClass) {
      extend(XMLDTDAttList2, superClass);
      function XMLDTDAttList2(parent, elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        XMLDTDAttList2.__super__.constructor.call(this, parent);
        if (elementName == null) {
          throw new Error("Missing DTD element name");
        }
        if (attributeName == null) {
          throw new Error("Missing DTD attribute name");
        }
        if (!attributeType) {
          throw new Error("Missing DTD attribute type");
        }
        if (!defaultValueType) {
          throw new Error("Missing DTD attribute default");
        }
        if (defaultValueType.indexOf("#") !== 0) {
          defaultValueType = "#" + defaultValueType;
        }
        if (!defaultValueType.match(/^(#REQUIRED|#IMPLIED|#FIXED|#DEFAULT)$/)) {
          throw new Error("Invalid default value type; expected: #REQUIRED, #IMPLIED, #FIXED or #DEFAULT");
        }
        if (defaultValue && !defaultValueType.match(/^(#FIXED|#DEFAULT)$/)) {
          throw new Error("Default value only applies to #FIXED or #DEFAULT");
        }
        this.elementName = this.stringify.eleName(elementName);
        this.attributeName = this.stringify.attName(attributeName);
        this.attributeType = this.stringify.dtdAttType(attributeType);
        this.defaultValue = this.stringify.dtdAttDefault(defaultValue);
        this.defaultValueType = defaultValueType;
      }
      XMLDTDAttList2.prototype.toString = function(options) {
        return this.options.writer.set(options).dtdAttList(this);
      };
      return XMLDTDAttList2;
    }(XMLNode2);
  }).call(commonjsGlobal);
  return XMLDTDAttList.exports;
}
var XMLDTDEntity = { exports: {} };
var hasRequiredXMLDTDEntity;
function requireXMLDTDEntity() {
  if (hasRequiredXMLDTDEntity)
    return XMLDTDEntity.exports;
  hasRequiredXMLDTDEntity = 1;
  (function() {
    var XMLNode2, isObject, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = requireUtility().isObject;
    XMLNode2 = requireXMLNode();
    XMLDTDEntity.exports = function(superClass) {
      extend(XMLDTDEntity2, superClass);
      function XMLDTDEntity2(parent, pe, name, value) {
        XMLDTDEntity2.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing entity name");
        }
        if (value == null) {
          throw new Error("Missing entity value");
        }
        this.pe = !!pe;
        this.name = this.stringify.eleName(name);
        if (!isObject(value)) {
          this.value = this.stringify.dtdEntityValue(value);
        } else {
          if (!value.pubID && !value.sysID) {
            throw new Error("Public and/or system identifiers are required for an external entity");
          }
          if (value.pubID && !value.sysID) {
            throw new Error("System identifier is required for a public external entity");
          }
          if (value.pubID != null) {
            this.pubID = this.stringify.dtdPubID(value.pubID);
          }
          if (value.sysID != null) {
            this.sysID = this.stringify.dtdSysID(value.sysID);
          }
          if (value.nData != null) {
            this.nData = this.stringify.dtdNData(value.nData);
          }
          if (this.pe && this.nData) {
            throw new Error("Notation declaration is not allowed in a parameter entity");
          }
        }
      }
      XMLDTDEntity2.prototype.toString = function(options) {
        return this.options.writer.set(options).dtdEntity(this);
      };
      return XMLDTDEntity2;
    }(XMLNode2);
  }).call(commonjsGlobal);
  return XMLDTDEntity.exports;
}
var XMLDTDElement = { exports: {} };
var hasRequiredXMLDTDElement;
function requireXMLDTDElement() {
  if (hasRequiredXMLDTDElement)
    return XMLDTDElement.exports;
  hasRequiredXMLDTDElement = 1;
  (function() {
    var XMLNode2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode2 = requireXMLNode();
    XMLDTDElement.exports = function(superClass) {
      extend(XMLDTDElement2, superClass);
      function XMLDTDElement2(parent, name, value) {
        XMLDTDElement2.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing DTD element name");
        }
        if (!value) {
          value = "(#PCDATA)";
        }
        if (Array.isArray(value)) {
          value = "(" + value.join(",") + ")";
        }
        this.name = this.stringify.eleName(name);
        this.value = this.stringify.dtdElementValue(value);
      }
      XMLDTDElement2.prototype.toString = function(options) {
        return this.options.writer.set(options).dtdElement(this);
      };
      return XMLDTDElement2;
    }(XMLNode2);
  }).call(commonjsGlobal);
  return XMLDTDElement.exports;
}
var XMLDTDNotation = { exports: {} };
var hasRequiredXMLDTDNotation;
function requireXMLDTDNotation() {
  if (hasRequiredXMLDTDNotation)
    return XMLDTDNotation.exports;
  hasRequiredXMLDTDNotation = 1;
  (function() {
    var XMLNode2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode2 = requireXMLNode();
    XMLDTDNotation.exports = function(superClass) {
      extend(XMLDTDNotation2, superClass);
      function XMLDTDNotation2(parent, name, value) {
        XMLDTDNotation2.__super__.constructor.call(this, parent);
        if (name == null) {
          throw new Error("Missing notation name");
        }
        if (!value.pubID && !value.sysID) {
          throw new Error("Public or system identifiers are required for an external entity");
        }
        this.name = this.stringify.eleName(name);
        if (value.pubID != null) {
          this.pubID = this.stringify.dtdPubID(value.pubID);
        }
        if (value.sysID != null) {
          this.sysID = this.stringify.dtdSysID(value.sysID);
        }
      }
      XMLDTDNotation2.prototype.toString = function(options) {
        return this.options.writer.set(options).dtdNotation(this);
      };
      return XMLDTDNotation2;
    }(XMLNode2);
  }).call(commonjsGlobal);
  return XMLDTDNotation.exports;
}
var hasRequiredXMLDocType;
function requireXMLDocType() {
  if (hasRequiredXMLDocType)
    return XMLDocType.exports;
  hasRequiredXMLDocType = 1;
  (function() {
    var XMLDTDAttList2, XMLDTDElement2, XMLDTDEntity2, XMLDTDNotation2, XMLNode2, isObject, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    isObject = requireUtility().isObject;
    XMLNode2 = requireXMLNode();
    XMLDTDAttList2 = requireXMLDTDAttList();
    XMLDTDEntity2 = requireXMLDTDEntity();
    XMLDTDElement2 = requireXMLDTDElement();
    XMLDTDNotation2 = requireXMLDTDNotation();
    XMLDocType.exports = function(superClass) {
      extend(XMLDocType2, superClass);
      function XMLDocType2(parent, pubID, sysID) {
        var ref, ref1;
        XMLDocType2.__super__.constructor.call(this, parent);
        this.documentObject = parent;
        if (isObject(pubID)) {
          ref = pubID, pubID = ref.pubID, sysID = ref.sysID;
        }
        if (sysID == null) {
          ref1 = [pubID, sysID], sysID = ref1[0], pubID = ref1[1];
        }
        if (pubID != null) {
          this.pubID = this.stringify.dtdPubID(pubID);
        }
        if (sysID != null) {
          this.sysID = this.stringify.dtdSysID(sysID);
        }
      }
      XMLDocType2.prototype.element = function(name, value) {
        var child;
        child = new XMLDTDElement2(this, name, value);
        this.children.push(child);
        return this;
      };
      XMLDocType2.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        var child;
        child = new XMLDTDAttList2(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
        this.children.push(child);
        return this;
      };
      XMLDocType2.prototype.entity = function(name, value) {
        var child;
        child = new XMLDTDEntity2(this, false, name, value);
        this.children.push(child);
        return this;
      };
      XMLDocType2.prototype.pEntity = function(name, value) {
        var child;
        child = new XMLDTDEntity2(this, true, name, value);
        this.children.push(child);
        return this;
      };
      XMLDocType2.prototype.notation = function(name, value) {
        var child;
        child = new XMLDTDNotation2(this, name, value);
        this.children.push(child);
        return this;
      };
      XMLDocType2.prototype.toString = function(options) {
        return this.options.writer.set(options).docType(this);
      };
      XMLDocType2.prototype.ele = function(name, value) {
        return this.element(name, value);
      };
      XMLDocType2.prototype.att = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        return this.attList(elementName, attributeName, attributeType, defaultValueType, defaultValue);
      };
      XMLDocType2.prototype.ent = function(name, value) {
        return this.entity(name, value);
      };
      XMLDocType2.prototype.pent = function(name, value) {
        return this.pEntity(name, value);
      };
      XMLDocType2.prototype.not = function(name, value) {
        return this.notation(name, value);
      };
      XMLDocType2.prototype.up = function() {
        return this.root() || this.documentObject;
      };
      return XMLDocType2;
    }(XMLNode2);
  }).call(commonjsGlobal);
  return XMLDocType.exports;
}
var XMLRaw = { exports: {} };
var hasRequiredXMLRaw;
function requireXMLRaw() {
  if (hasRequiredXMLRaw)
    return XMLRaw.exports;
  hasRequiredXMLRaw = 1;
  (function() {
    var XMLNode2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode2 = requireXMLNode();
    XMLRaw.exports = function(superClass) {
      extend(XMLRaw2, superClass);
      function XMLRaw2(parent, text) {
        XMLRaw2.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing raw text");
        }
        this.value = this.stringify.raw(text);
      }
      XMLRaw2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLRaw2.prototype.toString = function(options) {
        return this.options.writer.set(options).raw(this);
      };
      return XMLRaw2;
    }(XMLNode2);
  }).call(commonjsGlobal);
  return XMLRaw.exports;
}
var XMLText = { exports: {} };
var hasRequiredXMLText;
function requireXMLText() {
  if (hasRequiredXMLText)
    return XMLText.exports;
  hasRequiredXMLText = 1;
  (function() {
    var XMLNode2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode2 = requireXMLNode();
    XMLText.exports = function(superClass) {
      extend(XMLText2, superClass);
      function XMLText2(parent, text) {
        XMLText2.__super__.constructor.call(this, parent);
        if (text == null) {
          throw new Error("Missing element text");
        }
        this.value = this.stringify.eleText(text);
      }
      XMLText2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLText2.prototype.toString = function(options) {
        return this.options.writer.set(options).text(this);
      };
      return XMLText2;
    }(XMLNode2);
  }).call(commonjsGlobal);
  return XMLText.exports;
}
var XMLProcessingInstruction = { exports: {} };
var hasRequiredXMLProcessingInstruction;
function requireXMLProcessingInstruction() {
  if (hasRequiredXMLProcessingInstruction)
    return XMLProcessingInstruction.exports;
  hasRequiredXMLProcessingInstruction = 1;
  (function() {
    var XMLNode2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLNode2 = requireXMLNode();
    XMLProcessingInstruction.exports = function(superClass) {
      extend(XMLProcessingInstruction2, superClass);
      function XMLProcessingInstruction2(parent, target, value) {
        XMLProcessingInstruction2.__super__.constructor.call(this, parent);
        if (target == null) {
          throw new Error("Missing instruction target");
        }
        this.target = this.stringify.insTarget(target);
        if (value) {
          this.value = this.stringify.insValue(value);
        }
      }
      XMLProcessingInstruction2.prototype.clone = function() {
        return Object.create(this);
      };
      XMLProcessingInstruction2.prototype.toString = function(options) {
        return this.options.writer.set(options).processingInstruction(this);
      };
      return XMLProcessingInstruction2;
    }(XMLNode2);
  }).call(commonjsGlobal);
  return XMLProcessingInstruction.exports;
}
var hasRequiredXMLNode;
function requireXMLNode() {
  if (hasRequiredXMLNode)
    return XMLNode.exports;
  hasRequiredXMLNode = 1;
  (function() {
    var XMLCData2, XMLComment2, XMLDeclaration2, XMLDocType2, XMLElement2, XMLProcessingInstruction2, XMLRaw2, XMLText2, isEmpty, isFunction, isObject, ref, hasProp = {}.hasOwnProperty;
    ref = requireUtility(), isObject = ref.isObject, isFunction = ref.isFunction, isEmpty = ref.isEmpty;
    XMLElement2 = null;
    XMLCData2 = null;
    XMLComment2 = null;
    XMLDeclaration2 = null;
    XMLDocType2 = null;
    XMLRaw2 = null;
    XMLText2 = null;
    XMLProcessingInstruction2 = null;
    XMLNode.exports = function() {
      function XMLNode2(parent) {
        this.parent = parent;
        if (this.parent) {
          this.options = this.parent.options;
          this.stringify = this.parent.stringify;
        }
        this.children = [];
        if (!XMLElement2) {
          XMLElement2 = requireXMLElement();
          XMLCData2 = requireXMLCData();
          XMLComment2 = requireXMLComment();
          XMLDeclaration2 = requireXMLDeclaration();
          XMLDocType2 = requireXMLDocType();
          XMLRaw2 = requireXMLRaw();
          XMLText2 = requireXMLText();
          XMLProcessingInstruction2 = requireXMLProcessingInstruction();
        }
      }
      XMLNode2.prototype.element = function(name, attributes, text) {
        var childNode, item, j, k, key, lastChild, len, len1, ref1, val;
        lastChild = null;
        if (attributes == null) {
          attributes = {};
        }
        attributes = attributes.valueOf();
        if (!isObject(attributes)) {
          ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
        }
        if (name != null) {
          name = name.valueOf();
        }
        if (Array.isArray(name)) {
          for (j = 0, len = name.length; j < len; j++) {
            item = name[j];
            lastChild = this.element(item);
          }
        } else if (isFunction(name)) {
          lastChild = this.element(name.apply());
        } else if (isObject(name)) {
          for (key in name) {
            if (!hasProp.call(name, key))
              continue;
            val = name[key];
            if (isFunction(val)) {
              val = val.apply();
            }
            if (isObject(val) && isEmpty(val)) {
              val = null;
            }
            if (!this.options.ignoreDecorators && this.stringify.convertAttKey && key.indexOf(this.stringify.convertAttKey) === 0) {
              lastChild = this.attribute(key.substr(this.stringify.convertAttKey.length), val);
            } else if (!this.options.separateArrayItems && Array.isArray(val)) {
              for (k = 0, len1 = val.length; k < len1; k++) {
                item = val[k];
                childNode = {};
                childNode[key] = item;
                lastChild = this.element(childNode);
              }
            } else if (isObject(val)) {
              lastChild = this.element(key);
              lastChild.element(val);
            } else {
              lastChild = this.element(key, val);
            }
          }
        } else {
          if (!this.options.ignoreDecorators && this.stringify.convertTextKey && name.indexOf(this.stringify.convertTextKey) === 0) {
            lastChild = this.text(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertCDataKey && name.indexOf(this.stringify.convertCDataKey) === 0) {
            lastChild = this.cdata(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertCommentKey && name.indexOf(this.stringify.convertCommentKey) === 0) {
            lastChild = this.comment(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertRawKey && name.indexOf(this.stringify.convertRawKey) === 0) {
            lastChild = this.raw(text);
          } else if (!this.options.ignoreDecorators && this.stringify.convertPIKey && name.indexOf(this.stringify.convertPIKey) === 0) {
            lastChild = this.instruction(name.substr(this.stringify.convertPIKey.length), text);
          } else {
            lastChild = this.node(name, attributes, text);
          }
        }
        if (lastChild == null) {
          throw new Error("Could not create any elements with: " + name);
        }
        return lastChild;
      };
      XMLNode2.prototype.insertBefore = function(name, attributes, text) {
        var child, i, removed;
        if (this.isRoot) {
          throw new Error("Cannot insert elements at root level");
        }
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i);
        child = this.parent.element(name, attributes, text);
        Array.prototype.push.apply(this.parent.children, removed);
        return child;
      };
      XMLNode2.prototype.insertAfter = function(name, attributes, text) {
        var child, i, removed;
        if (this.isRoot) {
          throw new Error("Cannot insert elements at root level");
        }
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i + 1);
        child = this.parent.element(name, attributes, text);
        Array.prototype.push.apply(this.parent.children, removed);
        return child;
      };
      XMLNode2.prototype.remove = function() {
        var i;
        if (this.isRoot) {
          throw new Error("Cannot remove the root element");
        }
        i = this.parent.children.indexOf(this);
        [].splice.apply(this.parent.children, [i, i - i + 1].concat([]));
        return this.parent;
      };
      XMLNode2.prototype.node = function(name, attributes, text) {
        var child, ref1;
        if (name != null) {
          name = name.valueOf();
        }
        attributes || (attributes = {});
        attributes = attributes.valueOf();
        if (!isObject(attributes)) {
          ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
        }
        child = new XMLElement2(this, name, attributes);
        if (text != null) {
          child.text(text);
        }
        this.children.push(child);
        return child;
      };
      XMLNode2.prototype.text = function(value) {
        var child;
        child = new XMLText2(this, value);
        this.children.push(child);
        return this;
      };
      XMLNode2.prototype.cdata = function(value) {
        var child;
        child = new XMLCData2(this, value);
        this.children.push(child);
        return this;
      };
      XMLNode2.prototype.comment = function(value) {
        var child;
        child = new XMLComment2(this, value);
        this.children.push(child);
        return this;
      };
      XMLNode2.prototype.commentBefore = function(value) {
        var i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i);
        this.parent.comment(value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };
      XMLNode2.prototype.commentAfter = function(value) {
        var i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i + 1);
        this.parent.comment(value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };
      XMLNode2.prototype.raw = function(value) {
        var child;
        child = new XMLRaw2(this, value);
        this.children.push(child);
        return this;
      };
      XMLNode2.prototype.instruction = function(target, value) {
        var insTarget, insValue, instruction, j, len;
        if (target != null) {
          target = target.valueOf();
        }
        if (value != null) {
          value = value.valueOf();
        }
        if (Array.isArray(target)) {
          for (j = 0, len = target.length; j < len; j++) {
            insTarget = target[j];
            this.instruction(insTarget);
          }
        } else if (isObject(target)) {
          for (insTarget in target) {
            if (!hasProp.call(target, insTarget))
              continue;
            insValue = target[insTarget];
            this.instruction(insTarget, insValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          instruction = new XMLProcessingInstruction2(this, target, value);
          this.children.push(instruction);
        }
        return this;
      };
      XMLNode2.prototype.instructionBefore = function(target, value) {
        var i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i);
        this.parent.instruction(target, value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };
      XMLNode2.prototype.instructionAfter = function(target, value) {
        var i, removed;
        i = this.parent.children.indexOf(this);
        removed = this.parent.children.splice(i + 1);
        this.parent.instruction(target, value);
        Array.prototype.push.apply(this.parent.children, removed);
        return this;
      };
      XMLNode2.prototype.declaration = function(version, encoding, standalone) {
        var doc, xmldec;
        doc = this.document();
        xmldec = new XMLDeclaration2(doc, version, encoding, standalone);
        if (doc.children[0] instanceof XMLDeclaration2) {
          doc.children[0] = xmldec;
        } else {
          doc.children.unshift(xmldec);
        }
        return doc.root() || doc;
      };
      XMLNode2.prototype.doctype = function(pubID, sysID) {
        var child, doc, doctype, i, j, k, len, len1, ref1, ref2;
        doc = this.document();
        doctype = new XMLDocType2(doc, pubID, sysID);
        ref1 = doc.children;
        for (i = j = 0, len = ref1.length; j < len; i = ++j) {
          child = ref1[i];
          if (child instanceof XMLDocType2) {
            doc.children[i] = doctype;
            return doctype;
          }
        }
        ref2 = doc.children;
        for (i = k = 0, len1 = ref2.length; k < len1; i = ++k) {
          child = ref2[i];
          if (child.isRoot) {
            doc.children.splice(i, 0, doctype);
            return doctype;
          }
        }
        doc.children.push(doctype);
        return doctype;
      };
      XMLNode2.prototype.up = function() {
        if (this.isRoot) {
          throw new Error("The root node has no parent. Use doc() if you need to get the document object.");
        }
        return this.parent;
      };
      XMLNode2.prototype.root = function() {
        var node;
        node = this;
        while (node) {
          if (node.isDocument) {
            return node.rootObject;
          } else if (node.isRoot) {
            return node;
          } else {
            node = node.parent;
          }
        }
      };
      XMLNode2.prototype.document = function() {
        var node;
        node = this;
        while (node) {
          if (node.isDocument) {
            return node;
          } else {
            node = node.parent;
          }
        }
      };
      XMLNode2.prototype.end = function(options) {
        return this.document().end(options);
      };
      XMLNode2.prototype.prev = function() {
        var i;
        i = this.parent.children.indexOf(this);
        if (i < 1) {
          throw new Error("Already at the first node");
        }
        return this.parent.children[i - 1];
      };
      XMLNode2.prototype.next = function() {
        var i;
        i = this.parent.children.indexOf(this);
        if (i === -1 || i === this.parent.children.length - 1) {
          throw new Error("Already at the last node");
        }
        return this.parent.children[i + 1];
      };
      XMLNode2.prototype.importDocument = function(doc) {
        var clonedRoot;
        clonedRoot = doc.root().clone();
        clonedRoot.parent = this;
        clonedRoot.isRoot = false;
        this.children.push(clonedRoot);
        return this;
      };
      XMLNode2.prototype.ele = function(name, attributes, text) {
        return this.element(name, attributes, text);
      };
      XMLNode2.prototype.nod = function(name, attributes, text) {
        return this.node(name, attributes, text);
      };
      XMLNode2.prototype.txt = function(value) {
        return this.text(value);
      };
      XMLNode2.prototype.dat = function(value) {
        return this.cdata(value);
      };
      XMLNode2.prototype.com = function(value) {
        return this.comment(value);
      };
      XMLNode2.prototype.ins = function(target, value) {
        return this.instruction(target, value);
      };
      XMLNode2.prototype.doc = function() {
        return this.document();
      };
      XMLNode2.prototype.dec = function(version, encoding, standalone) {
        return this.declaration(version, encoding, standalone);
      };
      XMLNode2.prototype.dtd = function(pubID, sysID) {
        return this.doctype(pubID, sysID);
      };
      XMLNode2.prototype.e = function(name, attributes, text) {
        return this.element(name, attributes, text);
      };
      XMLNode2.prototype.n = function(name, attributes, text) {
        return this.node(name, attributes, text);
      };
      XMLNode2.prototype.t = function(value) {
        return this.text(value);
      };
      XMLNode2.prototype.d = function(value) {
        return this.cdata(value);
      };
      XMLNode2.prototype.c = function(value) {
        return this.comment(value);
      };
      XMLNode2.prototype.r = function(value) {
        return this.raw(value);
      };
      XMLNode2.prototype.i = function(target, value) {
        return this.instruction(target, value);
      };
      XMLNode2.prototype.u = function() {
        return this.up();
      };
      XMLNode2.prototype.importXMLBuilder = function(doc) {
        return this.importDocument(doc);
      };
      return XMLNode2;
    }();
  }).call(commonjsGlobal);
  return XMLNode.exports;
}
var XMLStringifier = { exports: {} };
var hasRequiredXMLStringifier;
function requireXMLStringifier() {
  if (hasRequiredXMLStringifier)
    return XMLStringifier.exports;
  hasRequiredXMLStringifier = 1;
  (function() {
    var camelCase, kebabCase, ref, snakeCase, titleCase, bind = function(fn, me) {
      return function() {
        return fn.apply(me, arguments);
      };
    }, hasProp = {}.hasOwnProperty;
    ref = requireUtility(), camelCase = ref.camelCase, titleCase = ref.titleCase, kebabCase = ref.kebabCase, snakeCase = ref.snakeCase;
    XMLStringifier.exports = function() {
      function XMLStringifier2(options) {
        this.assertLegalChar = bind(this.assertLegalChar, this);
        var key, ref1, value;
        options || (options = {});
        this.allowSurrogateChars = options.allowSurrogateChars;
        this.noDoubleEncoding = options.noDoubleEncoding;
        this.textCase = options.textCase;
        ref1 = options.stringify || {};
        for (key in ref1) {
          if (!hasProp.call(ref1, key))
            continue;
          value = ref1[key];
          this[key] = value;
        }
      }
      XMLStringifier2.prototype.eleName = function(val) {
        val = "" + val || "";
        val = this.applyCase(val);
        return this.assertLegalChar(val);
      };
      XMLStringifier2.prototype.eleText = function(val) {
        val = "" + val || "";
        return this.assertLegalChar(this.elEscape(val));
      };
      XMLStringifier2.prototype.cdata = function(val) {
        val = "" + val || "";
        val = val.replace("]]>", "]]]]><![CDATA[>");
        return this.assertLegalChar(val);
      };
      XMLStringifier2.prototype.comment = function(val) {
        val = "" + val || "";
        if (val.match(/--/)) {
          throw new Error("Comment text cannot contain double-hypen: " + val);
        }
        return this.assertLegalChar(val);
      };
      XMLStringifier2.prototype.raw = function(val) {
        return "" + val || "";
      };
      XMLStringifier2.prototype.attName = function(val) {
        val = "" + val || "";
        return val = this.applyCase(val);
      };
      XMLStringifier2.prototype.attValue = function(val) {
        val = "" + val || "";
        return this.attEscape(val);
      };
      XMLStringifier2.prototype.insTarget = function(val) {
        return "" + val || "";
      };
      XMLStringifier2.prototype.insValue = function(val) {
        val = "" + val || "";
        if (val.match(/\?>/)) {
          throw new Error("Invalid processing instruction value: " + val);
        }
        return val;
      };
      XMLStringifier2.prototype.xmlVersion = function(val) {
        val = "" + val || "";
        if (!val.match(/1\.[0-9]+/)) {
          throw new Error("Invalid version number: " + val);
        }
        return val;
      };
      XMLStringifier2.prototype.xmlEncoding = function(val) {
        val = "" + val || "";
        if (!val.match(/^[A-Za-z](?:[A-Za-z0-9._-]|-)*$/)) {
          throw new Error("Invalid encoding: " + val);
        }
        return val;
      };
      XMLStringifier2.prototype.xmlStandalone = function(val) {
        if (val) {
          return "yes";
        } else {
          return "no";
        }
      };
      XMLStringifier2.prototype.dtdPubID = function(val) {
        return "" + val || "";
      };
      XMLStringifier2.prototype.dtdSysID = function(val) {
        return "" + val || "";
      };
      XMLStringifier2.prototype.dtdElementValue = function(val) {
        return "" + val || "";
      };
      XMLStringifier2.prototype.dtdAttType = function(val) {
        return "" + val || "";
      };
      XMLStringifier2.prototype.dtdAttDefault = function(val) {
        if (val != null) {
          return "" + val || "";
        } else {
          return val;
        }
      };
      XMLStringifier2.prototype.dtdEntityValue = function(val) {
        return "" + val || "";
      };
      XMLStringifier2.prototype.dtdNData = function(val) {
        return "" + val || "";
      };
      XMLStringifier2.prototype.convertAttKey = "@";
      XMLStringifier2.prototype.convertPIKey = "?";
      XMLStringifier2.prototype.convertTextKey = "#text";
      XMLStringifier2.prototype.convertCDataKey = "#cdata";
      XMLStringifier2.prototype.convertCommentKey = "#comment";
      XMLStringifier2.prototype.convertRawKey = "#raw";
      XMLStringifier2.prototype.assertLegalChar = function(str) {
        var chars, chr;
        if (this.allowSurrogateChars) {
          chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uFFFE-\uFFFF]/;
        } else {
          chars = /[\u0000-\u0008\u000B-\u000C\u000E-\u001F\uD800-\uDFFF\uFFFE-\uFFFF]/;
        }
        chr = str.match(chars);
        if (chr) {
          throw new Error("Invalid character (" + chr + ") in string: " + str + " at index " + chr.index);
        }
        return str;
      };
      XMLStringifier2.prototype.applyCase = function(str) {
        switch (this.textCase) {
          case "camel":
            return camelCase(str);
          case "title":
            return titleCase(str);
          case "kebab":
          case "lower":
            return kebabCase(str);
          case "snake":
            return snakeCase(str);
          case "upper":
            return kebabCase(str).toUpperCase();
          default:
            return str;
        }
      };
      XMLStringifier2.prototype.elEscape = function(str) {
        var ampregex;
        ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
        return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\r/g, "&#xD;");
      };
      XMLStringifier2.prototype.attEscape = function(str) {
        var ampregex;
        ampregex = this.noDoubleEncoding ? /(?!&\S+;)&/g : /&/g;
        return str.replace(ampregex, "&amp;").replace(/</g, "&lt;").replace(/"/g, "&quot;").replace(/\t/g, "&#x9;").replace(/\n/g, "&#xA;").replace(/\r/g, "&#xD;");
      };
      return XMLStringifier2;
    }();
  }).call(commonjsGlobal);
  return XMLStringifier.exports;
}
var XMLStringWriter = { exports: {} };
var XMLWriterBase = { exports: {} };
var hasRequiredXMLWriterBase;
function requireXMLWriterBase() {
  if (hasRequiredXMLWriterBase)
    return XMLWriterBase.exports;
  hasRequiredXMLWriterBase = 1;
  (function() {
    var hasProp = {}.hasOwnProperty;
    XMLWriterBase.exports = function() {
      function XMLWriterBase2(options) {
        var key, ref, ref1, ref2, ref3, ref4, value;
        options || (options = {});
        this.pretty = options.pretty || false;
        this.allowEmpty = (ref = options.allowEmpty) != null ? ref : false;
        if (this.pretty) {
          this.indent = (ref1 = options.indent) != null ? ref1 : "  ";
          this.newline = (ref2 = options.newline) != null ? ref2 : "\n";
          this.offset = (ref3 = options.offset) != null ? ref3 : 0;
        } else {
          this.indent = "";
          this.newline = "";
          this.offset = 0;
        }
        ref4 = options.writer || {};
        for (key in ref4) {
          if (!hasProp.call(ref4, key))
            continue;
          value = ref4[key];
          this[key] = value;
        }
      }
      XMLWriterBase2.prototype.set = function(options) {
        var key, ref, value;
        options || (options = {});
        if ("pretty" in options) {
          this.pretty = options.pretty;
        }
        if ("allowEmpty" in options) {
          this.allowEmpty = options.allowEmpty;
        }
        if (this.pretty) {
          this.indent = "indent" in options ? options.indent : "  ";
          this.newline = "newline" in options ? options.newline : "\n";
          this.offset = "offset" in options ? options.offset : 0;
        } else {
          this.indent = "";
          this.newline = "";
          this.offset = 0;
        }
        ref = options.writer || {};
        for (key in ref) {
          if (!hasProp.call(ref, key))
            continue;
          value = ref[key];
          this[key] = value;
        }
        return this;
      };
      XMLWriterBase2.prototype.space = function(level) {
        if (this.pretty) {
          return new Array((level || 0) + this.offset + 1).join(this.indent);
        } else {
          return "";
        }
      };
      return XMLWriterBase2;
    }();
  }).call(commonjsGlobal);
  return XMLWriterBase.exports;
}
var hasRequiredXMLStringWriter;
function requireXMLStringWriter() {
  if (hasRequiredXMLStringWriter)
    return XMLStringWriter.exports;
  hasRequiredXMLStringWriter = 1;
  (function() {
    var XMLCData2, XMLComment2, XMLDTDAttList2, XMLDTDElement2, XMLDTDEntity2, XMLDTDNotation2, XMLDeclaration2, XMLDocType2, XMLElement2, XMLProcessingInstruction2, XMLRaw2, XMLText2, XMLWriterBase2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLDeclaration2 = requireXMLDeclaration();
    XMLDocType2 = requireXMLDocType();
    XMLCData2 = requireXMLCData();
    XMLComment2 = requireXMLComment();
    XMLElement2 = requireXMLElement();
    XMLRaw2 = requireXMLRaw();
    XMLText2 = requireXMLText();
    XMLProcessingInstruction2 = requireXMLProcessingInstruction();
    XMLDTDAttList2 = requireXMLDTDAttList();
    XMLDTDElement2 = requireXMLDTDElement();
    XMLDTDEntity2 = requireXMLDTDEntity();
    XMLDTDNotation2 = requireXMLDTDNotation();
    XMLWriterBase2 = requireXMLWriterBase();
    XMLStringWriter.exports = function(superClass) {
      extend(XMLStringWriter2, superClass);
      function XMLStringWriter2(options) {
        XMLStringWriter2.__super__.constructor.call(this, options);
      }
      XMLStringWriter2.prototype.document = function(doc) {
        var child, i, len, r, ref;
        r = "";
        ref = doc.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          r += function() {
            switch (false) {
              case !(child instanceof XMLDeclaration2):
                return this.declaration(child);
              case !(child instanceof XMLDocType2):
                return this.docType(child);
              case !(child instanceof XMLComment2):
                return this.comment(child);
              case !(child instanceof XMLProcessingInstruction2):
                return this.processingInstruction(child);
              default:
                return this.element(child, 0);
            }
          }.call(this);
        }
        if (this.pretty && r.slice(-this.newline.length) === this.newline) {
          r = r.slice(0, -this.newline.length);
        }
        return r;
      };
      XMLStringWriter2.prototype.attribute = function(att) {
        return " " + att.name + '="' + att.value + '"';
      };
      XMLStringWriter2.prototype.cdata = function(node, level) {
        return this.space(level) + "<![CDATA[" + node.text + "]]>" + this.newline;
      };
      XMLStringWriter2.prototype.comment = function(node, level) {
        return this.space(level) + "<!-- " + node.text + " -->" + this.newline;
      };
      XMLStringWriter2.prototype.declaration = function(node, level) {
        var r;
        r = this.space(level);
        r += '<?xml version="' + node.version + '"';
        if (node.encoding != null) {
          r += ' encoding="' + node.encoding + '"';
        }
        if (node.standalone != null) {
          r += ' standalone="' + node.standalone + '"';
        }
        r += "?>";
        r += this.newline;
        return r;
      };
      XMLStringWriter2.prototype.docType = function(node, level) {
        var child, i, len, r, ref;
        level || (level = 0);
        r = this.space(level);
        r += "<!DOCTYPE " + node.root().name;
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        if (node.children.length > 0) {
          r += " [";
          r += this.newline;
          ref = node.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            r += function() {
              switch (false) {
                case !(child instanceof XMLDTDAttList2):
                  return this.dtdAttList(child, level + 1);
                case !(child instanceof XMLDTDElement2):
                  return this.dtdElement(child, level + 1);
                case !(child instanceof XMLDTDEntity2):
                  return this.dtdEntity(child, level + 1);
                case !(child instanceof XMLDTDNotation2):
                  return this.dtdNotation(child, level + 1);
                case !(child instanceof XMLCData2):
                  return this.cdata(child, level + 1);
                case !(child instanceof XMLComment2):
                  return this.comment(child, level + 1);
                case !(child instanceof XMLProcessingInstruction2):
                  return this.processingInstruction(child, level + 1);
                default:
                  throw new Error("Unknown DTD node type: " + child.constructor.name);
              }
            }.call(this);
          }
          r += "]";
        }
        r += ">";
        r += this.newline;
        return r;
      };
      XMLStringWriter2.prototype.element = function(node, level) {
        var att, child, i, len, name, r, ref, ref1, space;
        level || (level = 0);
        space = this.space(level);
        r = "";
        r += space + "<" + node.name;
        ref = node.attributes;
        for (name in ref) {
          if (!hasProp.call(ref, name))
            continue;
          att = ref[name];
          r += this.attribute(att);
        }
        if (node.children.length === 0 || node.children.every(function(e) {
          return e.value === "";
        })) {
          if (this.allowEmpty) {
            r += "></" + node.name + ">" + this.newline;
          } else {
            r += "/>" + this.newline;
          }
        } else if (this.pretty && node.children.length === 1 && node.children[0].value != null) {
          r += ">";
          r += node.children[0].value;
          r += "</" + node.name + ">" + this.newline;
        } else {
          r += ">" + this.newline;
          ref1 = node.children;
          for (i = 0, len = ref1.length; i < len; i++) {
            child = ref1[i];
            r += function() {
              switch (false) {
                case !(child instanceof XMLCData2):
                  return this.cdata(child, level + 1);
                case !(child instanceof XMLComment2):
                  return this.comment(child, level + 1);
                case !(child instanceof XMLElement2):
                  return this.element(child, level + 1);
                case !(child instanceof XMLRaw2):
                  return this.raw(child, level + 1);
                case !(child instanceof XMLText2):
                  return this.text(child, level + 1);
                case !(child instanceof XMLProcessingInstruction2):
                  return this.processingInstruction(child, level + 1);
                default:
                  throw new Error("Unknown XML node type: " + child.constructor.name);
              }
            }.call(this);
          }
          r += space + "</" + node.name + ">" + this.newline;
        }
        return r;
      };
      XMLStringWriter2.prototype.processingInstruction = function(node, level) {
        var r;
        r = this.space(level) + "<?" + node.target;
        if (node.value) {
          r += " " + node.value;
        }
        r += "?>" + this.newline;
        return r;
      };
      XMLStringWriter2.prototype.raw = function(node, level) {
        return this.space(level) + node.value + this.newline;
      };
      XMLStringWriter2.prototype.text = function(node, level) {
        return this.space(level) + node.value + this.newline;
      };
      XMLStringWriter2.prototype.dtdAttList = function(node, level) {
        var r;
        r = this.space(level) + "<!ATTLIST " + node.elementName + " " + node.attributeName + " " + node.attributeType;
        if (node.defaultValueType !== "#DEFAULT") {
          r += " " + node.defaultValueType;
        }
        if (node.defaultValue) {
          r += ' "' + node.defaultValue + '"';
        }
        r += ">" + this.newline;
        return r;
      };
      XMLStringWriter2.prototype.dtdElement = function(node, level) {
        return this.space(level) + "<!ELEMENT " + node.name + " " + node.value + ">" + this.newline;
      };
      XMLStringWriter2.prototype.dtdEntity = function(node, level) {
        var r;
        r = this.space(level) + "<!ENTITY";
        if (node.pe) {
          r += " %";
        }
        r += " " + node.name;
        if (node.value) {
          r += ' "' + node.value + '"';
        } else {
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          if (node.nData) {
            r += " NDATA " + node.nData;
          }
        }
        r += ">" + this.newline;
        return r;
      };
      XMLStringWriter2.prototype.dtdNotation = function(node, level) {
        var r;
        r = this.space(level) + "<!NOTATION " + node.name;
        if (node.pubID && node.sysID) {
          r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
        } else if (node.pubID) {
          r += ' PUBLIC "' + node.pubID + '"';
        } else if (node.sysID) {
          r += ' SYSTEM "' + node.sysID + '"';
        }
        r += ">" + this.newline;
        return r;
      };
      XMLStringWriter2.prototype.openNode = function(node, level) {
        var att, name, r, ref;
        level || (level = 0);
        if (node instanceof XMLElement2) {
          r = this.space(level) + "<" + node.name;
          ref = node.attributes;
          for (name in ref) {
            if (!hasProp.call(ref, name))
              continue;
            att = ref[name];
            r += this.attribute(att);
          }
          r += (node.children ? ">" : "/>") + this.newline;
          return r;
        } else {
          r = this.space(level) + "<!DOCTYPE " + node.rootNodeName;
          if (node.pubID && node.sysID) {
            r += ' PUBLIC "' + node.pubID + '" "' + node.sysID + '"';
          } else if (node.sysID) {
            r += ' SYSTEM "' + node.sysID + '"';
          }
          r += (node.children ? " [" : ">") + this.newline;
          return r;
        }
      };
      XMLStringWriter2.prototype.closeNode = function(node, level) {
        level || (level = 0);
        switch (false) {
          case !(node instanceof XMLElement2):
            return this.space(level) + "</" + node.name + ">" + this.newline;
          case !(node instanceof XMLDocType2):
            return this.space(level) + "]>" + this.newline;
        }
      };
      return XMLStringWriter2;
    }(XMLWriterBase2);
  }).call(commonjsGlobal);
  return XMLStringWriter.exports;
}
var hasRequiredXMLDocument;
function requireXMLDocument() {
  if (hasRequiredXMLDocument)
    return XMLDocument.exports;
  hasRequiredXMLDocument = 1;
  (function() {
    var XMLNode2, XMLStringWriter2, XMLStringifier2, isPlainObject, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    isPlainObject = requireUtility().isPlainObject;
    XMLNode2 = requireXMLNode();
    XMLStringifier2 = requireXMLStringifier();
    XMLStringWriter2 = requireXMLStringWriter();
    XMLDocument.exports = function(superClass) {
      extend(XMLDocument2, superClass);
      function XMLDocument2(options) {
        XMLDocument2.__super__.constructor.call(this, null);
        options || (options = {});
        if (!options.writer) {
          options.writer = new XMLStringWriter2();
        }
        this.options = options;
        this.stringify = new XMLStringifier2(options);
        this.isDocument = true;
      }
      XMLDocument2.prototype.end = function(writer) {
        var writerOptions;
        if (!writer) {
          writer = this.options.writer;
        } else if (isPlainObject(writer)) {
          writerOptions = writer;
          writer = this.options.writer.set(writerOptions);
        }
        return writer.document(this);
      };
      XMLDocument2.prototype.toString = function(options) {
        return this.options.writer.set(options).document(this);
      };
      return XMLDocument2;
    }(XMLNode2);
  }).call(commonjsGlobal);
  return XMLDocument.exports;
}
var XMLDocumentCB = { exports: {} };
var hasRequiredXMLDocumentCB;
function requireXMLDocumentCB() {
  if (hasRequiredXMLDocumentCB)
    return XMLDocumentCB.exports;
  hasRequiredXMLDocumentCB = 1;
  (function() {
    var XMLAttribute2, XMLCData2, XMLComment2, XMLDTDAttList2, XMLDTDElement2, XMLDTDEntity2, XMLDTDNotation2, XMLDeclaration2, XMLDocType2, XMLElement2, XMLProcessingInstruction2, XMLRaw2, XMLStringWriter2, XMLStringifier2, XMLText2, isFunction, isObject, isPlainObject, ref, hasProp = {}.hasOwnProperty;
    ref = requireUtility(), isObject = ref.isObject, isFunction = ref.isFunction, isPlainObject = ref.isPlainObject;
    XMLElement2 = requireXMLElement();
    XMLCData2 = requireXMLCData();
    XMLComment2 = requireXMLComment();
    XMLRaw2 = requireXMLRaw();
    XMLText2 = requireXMLText();
    XMLProcessingInstruction2 = requireXMLProcessingInstruction();
    XMLDeclaration2 = requireXMLDeclaration();
    XMLDocType2 = requireXMLDocType();
    XMLDTDAttList2 = requireXMLDTDAttList();
    XMLDTDEntity2 = requireXMLDTDEntity();
    XMLDTDElement2 = requireXMLDTDElement();
    XMLDTDNotation2 = requireXMLDTDNotation();
    XMLAttribute2 = requireXMLAttribute();
    XMLStringifier2 = requireXMLStringifier();
    XMLStringWriter2 = requireXMLStringWriter();
    XMLDocumentCB.exports = function() {
      function XMLDocumentCB2(options, onData, onEnd) {
        var writerOptions;
        options || (options = {});
        if (!options.writer) {
          options.writer = new XMLStringWriter2(options);
        } else if (isPlainObject(options.writer)) {
          writerOptions = options.writer;
          options.writer = new XMLStringWriter2(writerOptions);
        }
        this.options = options;
        this.writer = options.writer;
        this.stringify = new XMLStringifier2(options);
        this.onDataCallback = onData || function() {
        };
        this.onEndCallback = onEnd || function() {
        };
        this.currentNode = null;
        this.currentLevel = -1;
        this.openTags = {};
        this.documentStarted = false;
        this.documentCompleted = false;
        this.root = null;
      }
      XMLDocumentCB2.prototype.node = function(name, attributes, text) {
        var ref1;
        if (name == null) {
          throw new Error("Missing node name");
        }
        if (this.root && this.currentLevel === -1) {
          throw new Error("Document can only have one root node");
        }
        this.openCurrent();
        name = name.valueOf();
        if (attributes == null) {
          attributes = {};
        }
        attributes = attributes.valueOf();
        if (!isObject(attributes)) {
          ref1 = [attributes, text], text = ref1[0], attributes = ref1[1];
        }
        this.currentNode = new XMLElement2(this, name, attributes);
        this.currentNode.children = false;
        this.currentLevel++;
        this.openTags[this.currentLevel] = this.currentNode;
        if (text != null) {
          this.text(text);
        }
        return this;
      };
      XMLDocumentCB2.prototype.element = function(name, attributes, text) {
        if (this.currentNode && this.currentNode instanceof XMLDocType2) {
          return this.dtdElement.apply(this, arguments);
        } else {
          return this.node(name, attributes, text);
        }
      };
      XMLDocumentCB2.prototype.attribute = function(name, value) {
        var attName, attValue;
        if (!this.currentNode || this.currentNode.children) {
          throw new Error("att() can only be used immediately after an ele() call in callback mode");
        }
        if (name != null) {
          name = name.valueOf();
        }
        if (isObject(name)) {
          for (attName in name) {
            if (!hasProp.call(name, attName))
              continue;
            attValue = name[attName];
            this.attribute(attName, attValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          if (!this.options.skipNullAttributes || value != null) {
            this.currentNode.attributes[name] = new XMLAttribute2(this, name, value);
          }
        }
        return this;
      };
      XMLDocumentCB2.prototype.text = function(value) {
        var node;
        this.openCurrent();
        node = new XMLText2(this, value);
        this.onData(this.writer.text(node, this.currentLevel + 1));
        return this;
      };
      XMLDocumentCB2.prototype.cdata = function(value) {
        var node;
        this.openCurrent();
        node = new XMLCData2(this, value);
        this.onData(this.writer.cdata(node, this.currentLevel + 1));
        return this;
      };
      XMLDocumentCB2.prototype.comment = function(value) {
        var node;
        this.openCurrent();
        node = new XMLComment2(this, value);
        this.onData(this.writer.comment(node, this.currentLevel + 1));
        return this;
      };
      XMLDocumentCB2.prototype.raw = function(value) {
        var node;
        this.openCurrent();
        node = new XMLRaw2(this, value);
        this.onData(this.writer.raw(node, this.currentLevel + 1));
        return this;
      };
      XMLDocumentCB2.prototype.instruction = function(target, value) {
        var i, insTarget, insValue, len, node;
        this.openCurrent();
        if (target != null) {
          target = target.valueOf();
        }
        if (value != null) {
          value = value.valueOf();
        }
        if (Array.isArray(target)) {
          for (i = 0, len = target.length; i < len; i++) {
            insTarget = target[i];
            this.instruction(insTarget);
          }
        } else if (isObject(target)) {
          for (insTarget in target) {
            if (!hasProp.call(target, insTarget))
              continue;
            insValue = target[insTarget];
            this.instruction(insTarget, insValue);
          }
        } else {
          if (isFunction(value)) {
            value = value.apply();
          }
          node = new XMLProcessingInstruction2(this, target, value);
          this.onData(this.writer.processingInstruction(node, this.currentLevel + 1));
        }
        return this;
      };
      XMLDocumentCB2.prototype.declaration = function(version, encoding, standalone) {
        var node;
        this.openCurrent();
        if (this.documentStarted) {
          throw new Error("declaration() must be the first node");
        }
        node = new XMLDeclaration2(this, version, encoding, standalone);
        this.onData(this.writer.declaration(node, this.currentLevel + 1));
        return this;
      };
      XMLDocumentCB2.prototype.doctype = function(root, pubID, sysID) {
        this.openCurrent();
        if (root == null) {
          throw new Error("Missing root node name");
        }
        if (this.root) {
          throw new Error("dtd() must come before the root node");
        }
        this.currentNode = new XMLDocType2(this, pubID, sysID);
        this.currentNode.rootNodeName = root;
        this.currentNode.children = false;
        this.currentLevel++;
        this.openTags[this.currentLevel] = this.currentNode;
        return this;
      };
      XMLDocumentCB2.prototype.dtdElement = function(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDElement2(this, name, value);
        this.onData(this.writer.dtdElement(node, this.currentLevel + 1));
        return this;
      };
      XMLDocumentCB2.prototype.attList = function(elementName, attributeName, attributeType, defaultValueType, defaultValue) {
        var node;
        this.openCurrent();
        node = new XMLDTDAttList2(this, elementName, attributeName, attributeType, defaultValueType, defaultValue);
        this.onData(this.writer.dtdAttList(node, this.currentLevel + 1));
        return this;
      };
      XMLDocumentCB2.prototype.entity = function(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDEntity2(this, false, name, value);
        this.onData(this.writer.dtdEntity(node, this.currentLevel + 1));
        return this;
      };
      XMLDocumentCB2.prototype.pEntity = function(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDEntity2(this, true, name, value);
        this.onData(this.writer.dtdEntity(node, this.currentLevel + 1));
        return this;
      };
      XMLDocumentCB2.prototype.notation = function(name, value) {
        var node;
        this.openCurrent();
        node = new XMLDTDNotation2(this, name, value);
        this.onData(this.writer.dtdNotation(node, this.currentLevel + 1));
        return this;
      };
      XMLDocumentCB2.prototype.up = function() {
        if (this.currentLevel < 0) {
          throw new Error("The document node has no parent");
        }
        if (this.currentNode) {
          if (this.currentNode.children) {
            this.closeNode(this.currentNode);
          } else {
            this.openNode(this.currentNode);
          }
          this.currentNode = null;
        } else {
          this.closeNode(this.openTags[this.currentLevel]);
        }
        delete this.openTags[this.currentLevel];
        this.currentLevel--;
        return this;
      };
      XMLDocumentCB2.prototype.end = function() {
        while (this.currentLevel >= 0) {
          this.up();
        }
        return this.onEnd();
      };
      XMLDocumentCB2.prototype.openCurrent = function() {
        if (this.currentNode) {
          this.currentNode.children = true;
          return this.openNode(this.currentNode);
        }
      };
      XMLDocumentCB2.prototype.openNode = function(node) {
        if (!node.isOpen) {
          if (!this.root && this.currentLevel === 0 && node instanceof XMLElement2) {
            this.root = node;
          }
          this.onData(this.writer.openNode(node, this.currentLevel));
          return node.isOpen = true;
        }
      };
      XMLDocumentCB2.prototype.closeNode = function(node) {
        if (!node.isClosed) {
          this.onData(this.writer.closeNode(node, this.currentLevel));
          return node.isClosed = true;
        }
      };
      XMLDocumentCB2.prototype.onData = function(chunk) {
        this.documentStarted = true;
        return this.onDataCallback(chunk);
      };
      XMLDocumentCB2.prototype.onEnd = function() {
        this.documentCompleted = true;
        return this.onEndCallback();
      };
      XMLDocumentCB2.prototype.ele = function() {
        return this.element.apply(this, arguments);
      };
      XMLDocumentCB2.prototype.nod = function(name, attributes, text) {
        return this.node(name, attributes, text);
      };
      XMLDocumentCB2.prototype.txt = function(value) {
        return this.text(value);
      };
      XMLDocumentCB2.prototype.dat = function(value) {
        return this.cdata(value);
      };
      XMLDocumentCB2.prototype.com = function(value) {
        return this.comment(value);
      };
      XMLDocumentCB2.prototype.ins = function(target, value) {
        return this.instruction(target, value);
      };
      XMLDocumentCB2.prototype.dec = function(version, encoding, standalone) {
        return this.declaration(version, encoding, standalone);
      };
      XMLDocumentCB2.prototype.dtd = function(root, pubID, sysID) {
        return this.doctype(root, pubID, sysID);
      };
      XMLDocumentCB2.prototype.e = function(name, attributes, text) {
        return this.element(name, attributes, text);
      };
      XMLDocumentCB2.prototype.n = function(name, attributes, text) {
        return this.node(name, attributes, text);
      };
      XMLDocumentCB2.prototype.t = function(value) {
        return this.text(value);
      };
      XMLDocumentCB2.prototype.d = function(value) {
        return this.cdata(value);
      };
      XMLDocumentCB2.prototype.c = function(value) {
        return this.comment(value);
      };
      XMLDocumentCB2.prototype.r = function(value) {
        return this.raw(value);
      };
      XMLDocumentCB2.prototype.i = function(target, value) {
        return this.instruction(target, value);
      };
      XMLDocumentCB2.prototype.att = function() {
        if (this.currentNode && this.currentNode instanceof XMLDocType2) {
          return this.attList.apply(this, arguments);
        } else {
          return this.attribute.apply(this, arguments);
        }
      };
      XMLDocumentCB2.prototype.a = function() {
        if (this.currentNode && this.currentNode instanceof XMLDocType2) {
          return this.attList.apply(this, arguments);
        } else {
          return this.attribute.apply(this, arguments);
        }
      };
      XMLDocumentCB2.prototype.ent = function(name, value) {
        return this.entity(name, value);
      };
      XMLDocumentCB2.prototype.pent = function(name, value) {
        return this.pEntity(name, value);
      };
      XMLDocumentCB2.prototype.not = function(name, value) {
        return this.notation(name, value);
      };
      return XMLDocumentCB2;
    }();
  }).call(commonjsGlobal);
  return XMLDocumentCB.exports;
}
var XMLStreamWriter = { exports: {} };
var hasRequiredXMLStreamWriter;
function requireXMLStreamWriter() {
  if (hasRequiredXMLStreamWriter)
    return XMLStreamWriter.exports;
  hasRequiredXMLStreamWriter = 1;
  (function() {
    var XMLCData2, XMLComment2, XMLDTDAttList2, XMLDTDElement2, XMLDTDEntity2, XMLDTDNotation2, XMLDeclaration2, XMLDocType2, XMLElement2, XMLProcessingInstruction2, XMLRaw2, XMLText2, XMLWriterBase2, extend = function(child, parent) {
      for (var key in parent) {
        if (hasProp.call(parent, key))
          child[key] = parent[key];
      }
      function ctor() {
        this.constructor = child;
      }
      ctor.prototype = parent.prototype;
      child.prototype = new ctor();
      child.__super__ = parent.prototype;
      return child;
    }, hasProp = {}.hasOwnProperty;
    XMLDeclaration2 = requireXMLDeclaration();
    XMLDocType2 = requireXMLDocType();
    XMLCData2 = requireXMLCData();
    XMLComment2 = requireXMLComment();
    XMLElement2 = requireXMLElement();
    XMLRaw2 = requireXMLRaw();
    XMLText2 = requireXMLText();
    XMLProcessingInstruction2 = requireXMLProcessingInstruction();
    XMLDTDAttList2 = requireXMLDTDAttList();
    XMLDTDElement2 = requireXMLDTDElement();
    XMLDTDEntity2 = requireXMLDTDEntity();
    XMLDTDNotation2 = requireXMLDTDNotation();
    XMLWriterBase2 = requireXMLWriterBase();
    XMLStreamWriter.exports = function(superClass) {
      extend(XMLStreamWriter2, superClass);
      function XMLStreamWriter2(stream, options) {
        this.stream = stream;
        XMLStreamWriter2.__super__.constructor.call(this, options);
      }
      XMLStreamWriter2.prototype.document = function(doc) {
        var child, i, j, len, len1, ref, ref1, results;
        ref = doc.children;
        for (i = 0, len = ref.length; i < len; i++) {
          child = ref[i];
          child.isLastRootNode = false;
        }
        doc.children[doc.children.length - 1].isLastRootNode = true;
        ref1 = doc.children;
        results = [];
        for (j = 0, len1 = ref1.length; j < len1; j++) {
          child = ref1[j];
          switch (false) {
            case !(child instanceof XMLDeclaration2):
              results.push(this.declaration(child));
              break;
            case !(child instanceof XMLDocType2):
              results.push(this.docType(child));
              break;
            case !(child instanceof XMLComment2):
              results.push(this.comment(child));
              break;
            case !(child instanceof XMLProcessingInstruction2):
              results.push(this.processingInstruction(child));
              break;
            default:
              results.push(this.element(child));
          }
        }
        return results;
      };
      XMLStreamWriter2.prototype.attribute = function(att) {
        return this.stream.write(" " + att.name + '="' + att.value + '"');
      };
      XMLStreamWriter2.prototype.cdata = function(node, level) {
        return this.stream.write(this.space(level) + "<![CDATA[" + node.text + "]]>" + this.endline(node));
      };
      XMLStreamWriter2.prototype.comment = function(node, level) {
        return this.stream.write(this.space(level) + "<!-- " + node.text + " -->" + this.endline(node));
      };
      XMLStreamWriter2.prototype.declaration = function(node, level) {
        this.stream.write(this.space(level));
        this.stream.write('<?xml version="' + node.version + '"');
        if (node.encoding != null) {
          this.stream.write(' encoding="' + node.encoding + '"');
        }
        if (node.standalone != null) {
          this.stream.write(' standalone="' + node.standalone + '"');
        }
        this.stream.write("?>");
        return this.stream.write(this.endline(node));
      };
      XMLStreamWriter2.prototype.docType = function(node, level) {
        var child, i, len, ref;
        level || (level = 0);
        this.stream.write(this.space(level));
        this.stream.write("<!DOCTYPE " + node.root().name);
        if (node.pubID && node.sysID) {
          this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
        } else if (node.sysID) {
          this.stream.write(' SYSTEM "' + node.sysID + '"');
        }
        if (node.children.length > 0) {
          this.stream.write(" [");
          this.stream.write(this.endline(node));
          ref = node.children;
          for (i = 0, len = ref.length; i < len; i++) {
            child = ref[i];
            switch (false) {
              case !(child instanceof XMLDTDAttList2):
                this.dtdAttList(child, level + 1);
                break;
              case !(child instanceof XMLDTDElement2):
                this.dtdElement(child, level + 1);
                break;
              case !(child instanceof XMLDTDEntity2):
                this.dtdEntity(child, level + 1);
                break;
              case !(child instanceof XMLDTDNotation2):
                this.dtdNotation(child, level + 1);
                break;
              case !(child instanceof XMLCData2):
                this.cdata(child, level + 1);
                break;
              case !(child instanceof XMLComment2):
                this.comment(child, level + 1);
                break;
              case !(child instanceof XMLProcessingInstruction2):
                this.processingInstruction(child, level + 1);
                break;
              default:
                throw new Error("Unknown DTD node type: " + child.constructor.name);
            }
          }
          this.stream.write("]");
        }
        this.stream.write(">");
        return this.stream.write(this.endline(node));
      };
      XMLStreamWriter2.prototype.element = function(node, level) {
        var att, child, i, len, name, ref, ref1, space;
        level || (level = 0);
        space = this.space(level);
        this.stream.write(space + "<" + node.name);
        ref = node.attributes;
        for (name in ref) {
          if (!hasProp.call(ref, name))
            continue;
          att = ref[name];
          this.attribute(att);
        }
        if (node.children.length === 0 || node.children.every(function(e) {
          return e.value === "";
        })) {
          if (this.allowEmpty) {
            this.stream.write("></" + node.name + ">");
          } else {
            this.stream.write("/>");
          }
        } else if (this.pretty && node.children.length === 1 && node.children[0].value != null) {
          this.stream.write(">");
          this.stream.write(node.children[0].value);
          this.stream.write("</" + node.name + ">");
        } else {
          this.stream.write(">" + this.newline);
          ref1 = node.children;
          for (i = 0, len = ref1.length; i < len; i++) {
            child = ref1[i];
            switch (false) {
              case !(child instanceof XMLCData2):
                this.cdata(child, level + 1);
                break;
              case !(child instanceof XMLComment2):
                this.comment(child, level + 1);
                break;
              case !(child instanceof XMLElement2):
                this.element(child, level + 1);
                break;
              case !(child instanceof XMLRaw2):
                this.raw(child, level + 1);
                break;
              case !(child instanceof XMLText2):
                this.text(child, level + 1);
                break;
              case !(child instanceof XMLProcessingInstruction2):
                this.processingInstruction(child, level + 1);
                break;
              default:
                throw new Error("Unknown XML node type: " + child.constructor.name);
            }
          }
          this.stream.write(space + "</" + node.name + ">");
        }
        return this.stream.write(this.endline(node));
      };
      XMLStreamWriter2.prototype.processingInstruction = function(node, level) {
        this.stream.write(this.space(level) + "<?" + node.target);
        if (node.value) {
          this.stream.write(" " + node.value);
        }
        return this.stream.write("?>" + this.endline(node));
      };
      XMLStreamWriter2.prototype.raw = function(node, level) {
        return this.stream.write(this.space(level) + node.value + this.endline(node));
      };
      XMLStreamWriter2.prototype.text = function(node, level) {
        return this.stream.write(this.space(level) + node.value + this.endline(node));
      };
      XMLStreamWriter2.prototype.dtdAttList = function(node, level) {
        this.stream.write(this.space(level) + "<!ATTLIST " + node.elementName + " " + node.attributeName + " " + node.attributeType);
        if (node.defaultValueType !== "#DEFAULT") {
          this.stream.write(" " + node.defaultValueType);
        }
        if (node.defaultValue) {
          this.stream.write(' "' + node.defaultValue + '"');
        }
        return this.stream.write(">" + this.endline(node));
      };
      XMLStreamWriter2.prototype.dtdElement = function(node, level) {
        return this.stream.write(this.space(level) + "<!ELEMENT " + node.name + " " + node.value + ">" + this.endline(node));
      };
      XMLStreamWriter2.prototype.dtdEntity = function(node, level) {
        this.stream.write(this.space(level) + "<!ENTITY");
        if (node.pe) {
          this.stream.write(" %");
        }
        this.stream.write(" " + node.name);
        if (node.value) {
          this.stream.write(' "' + node.value + '"');
        } else {
          if (node.pubID && node.sysID) {
            this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
          } else if (node.sysID) {
            this.stream.write(' SYSTEM "' + node.sysID + '"');
          }
          if (node.nData) {
            this.stream.write(" NDATA " + node.nData);
          }
        }
        return this.stream.write(">" + this.endline(node));
      };
      XMLStreamWriter2.prototype.dtdNotation = function(node, level) {
        this.stream.write(this.space(level) + "<!NOTATION " + node.name);
        if (node.pubID && node.sysID) {
          this.stream.write(' PUBLIC "' + node.pubID + '" "' + node.sysID + '"');
        } else if (node.pubID) {
          this.stream.write(' PUBLIC "' + node.pubID + '"');
        } else if (node.sysID) {
          this.stream.write(' SYSTEM "' + node.sysID + '"');
        }
        return this.stream.write(">" + this.endline(node));
      };
      XMLStreamWriter2.prototype.endline = function(node) {
        if (!node.isLastRootNode) {
          return this.newline;
        } else {
          return "";
        }
      };
      return XMLStreamWriter2;
    }(XMLWriterBase2);
  }).call(commonjsGlobal);
  return XMLStreamWriter.exports;
}
(function() {
  var XMLDocument2, XMLDocumentCB2, XMLStreamWriter2, XMLStringWriter2, assign, isFunction, ref;
  ref = requireUtility(), assign = ref.assign, isFunction = ref.isFunction;
  XMLDocument2 = requireXMLDocument();
  XMLDocumentCB2 = requireXMLDocumentCB();
  XMLStringWriter2 = requireXMLStringWriter();
  XMLStreamWriter2 = requireXMLStreamWriter();
  lib.create = function(name, xmldec, doctype, options) {
    var doc, root;
    if (name == null) {
      throw new Error("Root element needs a name");
    }
    options = assign({}, xmldec, doctype, options);
    doc = new XMLDocument2(options);
    root = doc.element(name);
    if (!options.headless) {
      doc.declaration(options);
      if (options.pubID != null || options.sysID != null) {
        doc.doctype(options);
      }
    }
    return root;
  };
  lib.begin = function(options, onData, onEnd) {
    var ref1;
    if (isFunction(options)) {
      ref1 = [options, onData], onData = ref1[0], onEnd = ref1[1];
      options = {};
    }
    if (onData) {
      return new XMLDocumentCB2(options, onData, onEnd);
    } else {
      return new XMLDocument2(options);
    }
  };
  lib.stringWriter = function(options) {
    return new XMLStringWriter2(options);
  };
  lib.streamWriter = function(stream, options) {
    return new XMLStreamWriter2(stream, options);
  };
}).call(commonjsGlobal);
export {
  lib as l
};
