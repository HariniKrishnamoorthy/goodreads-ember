define('frontend/tests/tests.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | tests');

  QUnit.test('helpers/destroy-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/destroy-app.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/resolver.js should pass ESLint\n\n');
  });

  QUnit.test('helpers/start-app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'helpers/start-app.js should pass ESLint\n\n');
  });

  QUnit.test('integration/components/log-out-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'integration/components/log-out-test.js should pass ESLint\n\n');
  });

  QUnit.test('test-helper.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'test-helper.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/bookdetails-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/bookdetails-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/discover-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/discover-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/post-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/post-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/controllers/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/controllers/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/bookdetails-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/bookdetails-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/models/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/bookdetails-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/bookdetails-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/discover-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/discover-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/index-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/index-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/login-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/login-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/post-book-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/post-book-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/routes/user-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/routes/user-test.js should pass ESLint\n\n');
  });

  QUnit.test('unit/services/session-test.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'unit/services/session-test.js should pass ESLint\n\n');
  });
});