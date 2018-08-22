define('ember-promise-helpers/helpers/promise-all', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Helper.extend({
    compute(params) {
      const args = Array.isArray(params[0]) ? params[0] : params;

      return Ember.RSVP.all(args);
    }
  });
});