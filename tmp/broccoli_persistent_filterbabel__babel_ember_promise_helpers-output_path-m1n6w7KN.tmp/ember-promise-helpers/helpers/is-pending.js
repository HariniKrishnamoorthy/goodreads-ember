define('ember-promise-helpers/helpers/is-pending', ['exports', 'ember-promise-helpers/helpers/await'], function (exports, _await) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _await.default.extend({
    valueBeforeSettled: true,

    compute(params) {
      const maybePromise = params[0];

      return this.ensureLatestPromise(maybePromise, promise => {
        promise.catch(() => {}).finally(() => {
          this.setValue(false, maybePromise);
        });
      });
    }
  });
});