// Generated by CoffeeScript 1.8.0
(function() {
  var debug, log;

  debug = require('debug')("app:test");

  log = require('debug')('app:log');

  require('../lib/log')(debug);

  require('../lib/log')(log);

  debug.error("123");

  debug.error("youqing");

  log.error("log error");

}).call(this);

//# sourceMappingURL=test_log.js.map
