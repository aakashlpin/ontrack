define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var IndexView = require('views/login');
  var app = require('../../app');

  // Defining the application router.
  module.exports = {
    indexHandler: function() {
      console.log("Hi there! " +
        "Moonlight with me on ideas, design and development. " +
        "Ping me at aakash.lpin@gmail.com");

      var indexView = new IndexView();
      app.ui.main.show(indexView.render());
    }
  };
});
