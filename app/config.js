// This is the runtime configuration file.  It complements the Gruntfile.js by
// supplementing shared properties.
require.config({
  paths: {
    // Make folders easier to access.
    "vendor": "../vendor",
    "views": "./modules/views",
    "models": "./modules/models",
    "collections": "./modules/collections",

    //firebase
    "firebase": "../vendor/bower/firebase/lib/firebase",
    "firebase-simple-login": "../vendor/bower/firebase/lib/firebase-simple-login",
    "backbone-firebase": '../vendor/bower/backfire/backbone-firebase',

    // Almond is used to lighten the output filesize.
    "almond": "../vendor/bower/almond/almond",

    // Opt for Lo-Dash Underscore compatibility build over Underscore.
    "underscore": "../vendor/bower/lodash/dist/lodash.underscore",

    //templates
    "templates": "templates",

    // Map remaining vendor dependencies.
    "jquery": "../vendor/bower/jquery/jquery",
    "backbone": "../vendor/bower/backbone/backbone",
    "backbone.babysitter": '../vendor/bower/marionette/public/javascripts/backbone.babysitter',
    "backbone.wreqr": '../vendor/bower/marionette/public/javascripts/backbone.wreqr',
    "marionette": "../vendor/bower/marionette/lib/core/amd/backbone.marionette.min",
    "tpl": "../vendor/bower/tpl/tpl",
    "semantic": "../vendor/bower/semantic/build/packaged/javascript/semantic"
  },

  shim: {
    // This is required to ensure Backbone works as expected within the AMD
    // environment.
    "backbone": {
      // These are the two hard dependencies that will be loaded first.
      deps: ["jquery", "underscore"],

      // This maps the global `Backbone` object to `require("backbone")`.
      exports: "Backbone"
    },
    "backbone.babysitter": {
      deps: ["backbone"]

    },
    "firebase": {
      exports: "Firebase"

    },
    "firebase-simple-login": {
      exports: "FirebaseSimpleLogin"

    },
    "backbone.wreqr": {
      deps: ["backbone"]

    },
    "backbone-firebase": {
      deps: ["backbone", "firebase"]

    },
    "semantic": {
      deps: ["jquery"]

    }

  }
});
