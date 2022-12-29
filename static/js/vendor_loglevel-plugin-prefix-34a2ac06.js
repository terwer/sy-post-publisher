import { c as commonjsGlobal } from "./vendor_before-after-hook-6380be1a.js";
var loglevelPluginPrefix = { exports: {} };
(function(module) {
  (function(root, factory) {
    if (module.exports) {
      module.exports = factory();
    } else {
      root.prefix = factory(root);
    }
  })(commonjsGlobal, function(root) {
    var merge = function(target) {
      var i = 1;
      var length = arguments.length;
      var key;
      for (; i < length; i++) {
        for (key in arguments[i]) {
          if (Object.prototype.hasOwnProperty.call(arguments[i], key)) {
            target[key] = arguments[i][key];
          }
        }
      }
      return target;
    };
    var defaults = {
      template: "[%t] %l:",
      levelFormatter: function(level) {
        return level.toUpperCase();
      },
      nameFormatter: function(name) {
        return name || "root";
      },
      timestampFormatter: function(date) {
        return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
      },
      format: void 0
    };
    var loglevel;
    var configs = {};
    var reg = function(rootLogger) {
      if (!rootLogger || !rootLogger.getLogger) {
        throw new TypeError("Argument is not a root logger");
      }
      loglevel = rootLogger;
    };
    var apply = function(logger, config) {
      if (!logger || !logger.setLevel) {
        throw new TypeError("Argument is not a logger");
      }
      var originalFactory = logger.methodFactory;
      var name = logger.name || "";
      var parent = configs[name] || configs[""] || defaults;
      function methodFactory(methodName, logLevel, loggerName) {
        var originalMethod = originalFactory(methodName, logLevel, loggerName);
        var options = configs[loggerName] || configs[""];
        var hasTimestamp = options.template.indexOf("%t") !== -1;
        var hasLevel = options.template.indexOf("%l") !== -1;
        var hasName = options.template.indexOf("%n") !== -1;
        return function() {
          var content = "";
          var length = arguments.length;
          var args = Array(length);
          var key = 0;
          for (; key < length; key++) {
            args[key] = arguments[key];
          }
          if (name || !configs[loggerName]) {
            var timestamp = options.timestampFormatter(new Date());
            var level = options.levelFormatter(methodName);
            var lname = options.nameFormatter(loggerName);
            if (options.format) {
              content += options.format(level, lname, timestamp);
            } else {
              content += options.template;
              if (hasTimestamp) {
                content = content.replace(/%t/, timestamp);
              }
              if (hasLevel)
                content = content.replace(/%l/, level);
              if (hasName)
                content = content.replace(/%n/, lname);
            }
            if (args.length && typeof args[0] === "string") {
              args[0] = content + " " + args[0];
            } else {
              args.unshift(content);
            }
          }
          originalMethod.apply(void 0, args);
        };
      }
      if (!configs[name]) {
        logger.methodFactory = methodFactory;
      }
      config = config || {};
      if (config.template)
        config.format = void 0;
      configs[name] = merge({}, parent, config);
      logger.setLevel(logger.getLevel());
      if (!loglevel) {
        logger.warn(
          "It is necessary to call the function reg() of loglevel-plugin-prefix before calling apply. From the next release, it will throw an error. See more: https://github.com/kutuluk/loglevel-plugin-prefix/blob/master/README.md"
        );
      }
      return logger;
    };
    var api = {
      reg,
      apply
    };
    var save;
    if (root) {
      save = root.prefix;
      api.noConflict = function() {
        if (root.prefix === api) {
          root.prefix = save;
        }
        return api;
      };
    }
    return api;
  });
})(loglevelPluginPrefix);
const prefix = loglevelPluginPrefix.exports;
export {
  prefix as p
};
