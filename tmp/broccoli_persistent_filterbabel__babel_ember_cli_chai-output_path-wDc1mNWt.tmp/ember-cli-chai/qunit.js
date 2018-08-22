define('ember-cli-chai/qunit', ['exports', 'chai'], function (exports, _chai) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.withChai = withChai;


  /**
   * Returns a function that calls the passed in function with a wrapped
   * expect() and the original `assert` as parameters.
   */
  function withChai(fn) {
    return function (assert) {

      function _expect(...args) {
        let assertion = (0, _chai.expect)(...args);
        let originalAssert = assertion.assert;
        assertion.assert = function (...args) {
          let message = _chai.util.flag(assertion, 'message');

          try {
            originalAssert.apply(this, args);
            assert.pushResult({ result: true, message });
          } catch (error) {
            assert.pushResult({
              result: false,
              actual: error.showDiff ? error.actual : undefined,
              expected: error.showDiff ? error.expected : undefined,
              message: error.message
            });
          }
        };
        return assertion;
      }

      return fn.call(this, _expect, assert);
    };
  }
});