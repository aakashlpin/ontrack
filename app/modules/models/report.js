define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  require('backbone-firebase');

  return Backbone.Model.extend({
    firebase: new Backbone.Firebase('https://ontrack-2014.firebaseio.com/report')
  });

});