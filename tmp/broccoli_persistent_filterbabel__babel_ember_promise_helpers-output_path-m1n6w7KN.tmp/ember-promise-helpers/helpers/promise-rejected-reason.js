define('ember-promise-helpers/helpers/promise-rejected-reason', ['exports', 'ember-promise-helpers/helpers/await'], function (exports, _await) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _await.default.extend({
    compute(params) {
      const maybePromise = params[0];
      return this.ensureLatestPromise(maybePromise, promise => {
        promise.then(() => {
          this.setValue(null, maybePromise);
        }).catch(reason => {
          this.setValue(reason, maybePromise);
        });
      });
    }
  });
});