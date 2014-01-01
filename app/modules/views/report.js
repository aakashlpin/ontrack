define(function(require, exports, module) {

  var Marionette = require('marionette'),
    templates = require('templates');

  require('semantic');

  module.exports = Marionette.Layout.extend({
    template: templates.fillReport,
    events: {
      'keyup form input': 'actionOnKeyUpInFormInput',
      'keyup form textarea': 'actionOnKeyUpInFormInput',
      'submit form': 'actionOnFormSubmit',
      'click #sync': 'actionOnSync'
    },
    ui: {
      syncBtn: '#sync'
    },
    dui: {
      formSubmitButton: 'input[type="submit"]'
    },
    payload: [],
    actionOnSync: function(e) {
      e.preventDefault();
      var date = new Date();
      var self = this;
      var report = {
        on: date.toDateString(),
        data: this.payload
      };

      this.ui.syncBtn.addClass('disabled');

      this.model.set(report);
      this.model.save(null, {
        success: function() {
          self.ui.syncBtn.val('Done!');
        }
      });

    },
    actionOnKeyUpInFormInput: function(e) {
      var empty,
        targetElement = $(e.target),
        targetForm = targetElement.closest('form'),
        submitBtn = targetForm.find(this.dui.formSubmitButton);

      empty = $.trim(targetElement.val()).length == 0;

      if (empty) {
        submitBtn.attr('disabled', 'disabled');
        submitBtn.addClass('disabled');
      } else {
        submitBtn.removeAttr('disabled');
        submitBtn.removeClass('disabled');
      }
    },
    actionOnFormSubmit: function(e) {
      e.preventDefault();
      var targetForm = $(e.target);
      var serializedArray = targetForm.serializeArray();
      serializedArray = serializedArray.concat(
            targetForm.find('input[type=checkbox]:not(:checked)').map(function() {
                        return {"name": this.name, "value": false}
                    }).get()
            );

      var data = JSON.parse(JSON.stringify(serializedArray));
      this.payload.push(data[0]);

      targetForm
      .closest('.item')
        .hide()
      .next()
        .show()
        .find('input, textarea')
        .focus()
      ;

    }
  });
});