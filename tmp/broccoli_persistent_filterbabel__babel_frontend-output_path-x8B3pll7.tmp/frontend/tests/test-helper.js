define('frontend/tests/test-helper', ['frontend/tests/helpers/resolver', 'ember-mocha'], function (_resolver, _emberMocha) {
  'use strict';

  (0, _emberMocha.setResolver)(_resolver.default);
});