define('ember-promise-helpers/helpers/promise-hash', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Helper.extend({
    compute(params, hash) {
      return Ember.RSVP.hash(hash);
    }
  });
});