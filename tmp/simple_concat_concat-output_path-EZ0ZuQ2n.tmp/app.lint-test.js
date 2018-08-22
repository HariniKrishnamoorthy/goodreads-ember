QUnit.module('ESLint | app');

QUnit.test('adapters/application.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
});

QUnit.test('app.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'app.js should pass ESLint\n\n');
});

QUnit.test('authenticators/oauth2.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'authenticators/oauth2.js should pass ESLint\n\n');
});

QUnit.test('authorizers/oauth2.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'authorizers/oauth2.js should pass ESLint\n\n');
});

QUnit.test('controllers/login.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'controllers/login.js should pass ESLint\n\n');
});

QUnit.test('controllers/user.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/user.js should pass ESLint\n\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n9:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n10:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n11:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n13:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n14:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n15:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n16:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n17:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n24:20 - \'answer\' is defined but never used. (no-unused-vars)\n25:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n25:6 - Unexpected console statement. (no-console)\n28:19 - \'reason\' is defined but never used. (no-unused-vars)\n29:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n29:6 - Unexpected console statement. (no-console)\n29:18 - \'session\' is not defined. (no-undef)\n31:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
});

QUnit.test('models/login.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/login.js should pass ESLint\n\n');
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

QUnit.test('routes/application.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/application.js should pass ESLint\n\n4:16 - Use import Route from \'@ember/routing/route\'; instead of using Ember.Route (ember/new-module-imports)');
});

QUnit.test('routes/login.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/login.js should pass ESLint\n\n4:16 - Use import Route from \'@ember/routing/route\'; instead of using Ember.Route (ember/new-module-imports)');
});

QUnit.test('routes/user.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/user.js should pass ESLint\n\n');
});

