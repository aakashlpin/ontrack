define(function(require) {
  'use strict';

  var Backbone = require('backbone');
  require('backbone-firebase');
  var Report = require('../models/report');

  return Backbone.Collection.extend({
    model: Report,
    firebase: new Backbone.Firebase('https://ontrack-2014.firebaseio.com')
  });

});