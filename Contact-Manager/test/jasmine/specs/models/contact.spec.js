define(function (require) {
  'use strict';

  var Contact = require('models/contact');
  var c;

  describe('validate', function () {
    beforeEach(function () {
      c = new Contact();
    });

    it('blank fields', function () {
      var errors = c.validate({
        firstName: '',
        lastName: null
      }, {});

      expect(errors.firstName).toBe('Firstname cannot be blank!');
      expect(errors.lastName).toBe('Lastname cannot be blank!');
    });

    it('filled fields', function () {
      var errors = c.validate({
        firstName: 'firstName',
        lastName: 'lastName'
      }, {});

      expect(errors).toBeFalsy(); 
    });
  });
});