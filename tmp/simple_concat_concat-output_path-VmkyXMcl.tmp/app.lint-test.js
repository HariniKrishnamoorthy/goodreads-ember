QUnit.module('ESLint | app');

QUnit.test('adapters/application.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
});

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('controllers/user.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/user.js should pass ESLint\n\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n9:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n10:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n11:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n12:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n13:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
});

QUnit.test('models/user.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/user.js should pass ESLint\n\n');
});

QUnit.test('resolver.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'resolver.js should pass ESLint\n\n');
});

QUnit.test('router.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'router.js should pass ESLint\n\n');
});

QUnit.test('routes/user.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/user.js should pass ESLint\n\n');
});

