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

QUnit.test('components/log-out.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'components/log-out.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n9:3 - Unexpected \'debugger\' statement. (no-debugger)\n10:3 - Use closure actions, unless you need bubbling (ember/closure-actions)');
});

QUnit.test('controllers/bookdetails.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/bookdetails.js should pass ESLint\n\n15:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
});

QUnit.test('controllers/discover-book.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/discover-book.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n5:9 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n5:9 - \'Ember\' is not defined. (no-undef)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:15 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n7:15 - \'Ember\' is not defined. (no-undef)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:12 - \'$\' is not defined. (no-undef)\n14:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n15:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
});

QUnit.test('controllers/login.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/login.js should pass ESLint\n\n6:10 - \'compare\' is defined but never used. (no-unused-vars)\n7:20 - \'service\' is defined but never used. (no-unused-vars)\n8:10 - \'bind\' is defined but never used. (no-unused-vars)\n13:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n13:11 - \'Ember\' is not defined. (no-undef)\n30:8 - \'credential\' is already defined. (no-redeclare)\n32:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n32:20 - \'$\' is not defined. (no-undef)\n33:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
});

QUnit.test('controllers/post-book.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'controllers/post-book.js should pass ESLint\n\n');
});

QUnit.test('controllers/user.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'controllers/user.js should pass ESLint\n\n5:2 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n44:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n45:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n46:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n47:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n49:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n51:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n52:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n53:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n54:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n55:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n62:20 - \'answer\' is defined but never used. (no-unused-vars)\n63:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n64:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n67:19 - \'reason\' is defined but never used. (no-unused-vars)\n68:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n69:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n71:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
});

QUnit.test('models/bookdetails.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/bookdetails.js should pass ESLint\n\n');
});

QUnit.test('models/discover-book.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'models/discover-book.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)');
});

QUnit.test('models/genre.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/genre.js should pass ESLint\n\n');
});

QUnit.test('models/login.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/login.js should pass ESLint\n\n');
});

QUnit.test('models/post-book.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'models/post-book.js should pass ESLint\n\n');
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
  assert.ok(false, 'router.js should pass ESLint\n\n15:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)\n16:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)');
});

QUnit.test('routes/application.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/application.js should pass ESLint\n\n4:16 - Use import Route from \'@ember/routing/route\'; instead of using Ember.Route (ember/new-module-imports)');
});

QUnit.test('routes/bookdetails.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/bookdetails.js should pass ESLint\n\n1:8 - \'Route\' is defined but never used. (no-unused-vars)\n4:16 - Use import Route from \'@ember/routing/route\'; instead of using Ember.Route (ember/new-module-imports)\n4:16 - \'Ember\' is not defined. (no-undef)\n5:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:11 - \'Ember\' is not defined. (no-undef)\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n6:16 - \'transition\' is defined but never used. (no-unused-vars)');
});

QUnit.test('routes/discover-book.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/discover-book.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n8:10 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n8:10 - \'Ember\' is not defined. (no-undef)\n9:9 - \'$\' is not defined. (no-undef)');
});

QUnit.test('routes/index.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/index.js should pass ESLint\n\n');
});

QUnit.test('routes/login.js', function(assert) {
  assert.expect(1);
  assert.ok(false, 'routes/login.js should pass ESLint\n\n5:16 - Use import Route from \'@ember/routing/route\'; instead of using Ember.Route (ember/new-module-imports)');
});

QUnit.test('routes/post-book.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/post-book.js should pass ESLint\n\n');
});

QUnit.test('routes/user.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'routes/user.js should pass ESLint\n\n');
});

QUnit.test('services/session.js', function(assert) {
  assert.expect(1);
  assert.ok(true, 'services/session.js should pass ESLint\n\n');
});

