define(function(require, exports, module) {

  var Marionette = require('marionette'),
    templates = require('templates'),
    Firebase = require('firebase'),
    FirebaseSimpleLogin = require('firebase-simple-login'),
    app = require('../../app');

  require('semantic');

  module.exports = Marionette.Layout.extend({
    template: templates.login,
    events: {
      'submit form': 'actionOnFormSubmit'
    },
    actionOnFormSubmit: function(e) {
      e.preventDefault();

      this.auth.login('facebook');

    },
    onShow: function() {
      var firebaseRef = new Firebase('https://ontrack-2014.firebaseio.com');
      this.auth = new FirebaseSimpleLogin(firebaseRef, function(error, user) {
        if (error) {
          // an error occurred while attempting login
          alert(error);
        } else if (user) {
          // user authenticated with Firebase
          if (user.username == 'aakash.lpin') {
            var ReportView = require('views/report');
            var ReportModel = require('models/report');
            var reportModel = new ReportModel();
            var reportView = new ReportView({model: reportModel});
            app.ui.main.show(reportView.render());

          } else {            
            console.log('Sorry this app only supports my personal facebook login. Contribute!');
          }
        } else {
          // user is logged out
        }
      });

    }
  });
});