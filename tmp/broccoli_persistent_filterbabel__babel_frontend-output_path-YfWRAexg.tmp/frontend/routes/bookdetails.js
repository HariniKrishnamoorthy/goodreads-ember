define('frontend/routes/bookdetails', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    session: Ember.inject.service(),
    beforeModel(transition) {
      if (!this.get('session.currentUser')) {
        this.transitionTo('login');
      }
    }

  });
});