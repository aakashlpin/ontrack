define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var _ = require("underscore");
  var $ = require("jquery");
  var Marionette = require("marionette");
  require('backbone-firebase');

  // Alias the module for easier identification.
  var app = module.exports;

  // The root path to run the application through.
  app.root = "/";

  app.ui = new Marionette.Application();
  app.ui.addRegions({
    main: '#main'
  });

});
