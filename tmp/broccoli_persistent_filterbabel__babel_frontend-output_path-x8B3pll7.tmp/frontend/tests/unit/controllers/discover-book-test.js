define('frontend/tests/unit/controllers/discover-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | discover-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:discover-book');
      assert.ok(controller);
    });
  });
});