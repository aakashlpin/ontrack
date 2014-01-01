define(function(require, exports, module) {
  "use strict";

  // External dependencies.
  var IndexView = require('views/report');
  var IndexCollection = require('collections/reports');
  var IndexModel = require('models/report');
  var app = require('../../app');

  // Defining the application router.
  module.exports = {
    indexHandler: function() {
      console.log("Hi there! " +
        "Moonlight with me on ideas, design and development. " +
        "Ping me at aakash.lpin@gmail.com");

      var indexCollection = new IndexCollection();
      var indexModel = new IndexModel();
      var indexView = new IndexView({collection: indexCollection, model: indexModel});
      app.ui.main.show(indexView.render());
    }
  };
});
