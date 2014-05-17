define([
  'jquery',
  'backbone',
  'chai',
  'lib/contact-manager'
], function($, Backbone, chai, ContactManager) {
  'use strict';

  var expect = chai.expect;

  describe('ContactManager', function() {
    it('should have a name attribute by default', function() {
      expect(new ContactManager().get('name')).to.equal('');
    });
  });
});
