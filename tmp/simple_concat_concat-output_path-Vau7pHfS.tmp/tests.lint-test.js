QUnit.module('ESLint | tests');

QUnit.test('test-helper.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'test-helper.js should pass ESLint\n\n');
});

QUnit.test('unit/controllers/user-test.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'unit/controllers/user-test.js should pass ESLint\n\n');
});

QUnit.test('unit/models/user-test.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'unit/models/user-test.js should pass ESLint\n\n');
});

QUnit.test('unit/routes/user-test.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'unit/routes/user-test.js should pass ESLint\n\n');
});

