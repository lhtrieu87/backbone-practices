'user strict';

define(['backbone', 'underscore', 'underscore.string'], function (Backbone, _) {
  var Contact = Backbone.Model.extend({
    defaults: {
      firstName: '',
      lastName: '',
      phoneNumber: ''
    },

    validate: function (attrs, options) {
      var errors = {};

      if(_.str.isBlank(attrs.firstName)) {
        errors.firstName = 'Firstname cannot be blank!';
      }

      if(_.str.isBlank(attrs.lastName)) {
        errors.lastName = 'Lastname cannot be blank!';
      }

      if(!_.isEmpty(errors)) {
        return errors;
      }
    }
  });

  return Contact;
});
