define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var Backbone = require("backbone");
  var Controller = require("../controllers/index");

  // Defining the application router.
  module.exports = Backbone.Router.extend({
    routes: {
      "": "index"
    },

    index: function() {
      Controller.indexHandler();
    }
  });
});
