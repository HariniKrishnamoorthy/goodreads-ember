define('ember-simple-auth/utils/is-fastboot', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = isFastBoot;
  function isFastBoot() {
    return Ember.computed(function () {
      const container = Ember.getOwner(this);
      (true && !(container && typeof container.lookup === 'function') && Ember.assert('You may only use isFastBoot() on a container-aware object', container && typeof container.lookup === 'function'));


      const fastboot = container.lookup('service:fastboot');
      return fastboot ? fastboot.get('isFastBoot') : false;
    });
  }
});