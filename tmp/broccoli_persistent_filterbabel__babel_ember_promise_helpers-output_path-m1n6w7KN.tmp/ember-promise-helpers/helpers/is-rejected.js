define('ember-promise-helpers/helpers/is-rejected', ['exports', 'ember-promise-helpers/helpers/await'], function (exports, _await) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _await.default.extend({
    compute(params) {
      const maybePromise = params[0];

      return this.ensureLatestPromise(maybePromise, promise => {
        promise.then(() => {
          this.setValue(false, maybePromise);
        }).catch(() => {
          this.setValue(true, maybePromise);
        });
      });
    }
  });
});