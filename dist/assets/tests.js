'use strict';

define('frontend/tests/app.lint-test', [], function () {
  'use strict';

  QUnit.module('ESLint | app');

  QUnit.test('adapters/application.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'adapters/application.js should pass ESLint\n\n');
  });

  QUnit.test('app.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'app.js should pass ESLint\n\n');
  });

  QUnit.test('authenticators/oauth2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authenticators/oauth2.js should pass ESLint\n\n');
  });

  QUnit.test('authorizers/oauth2.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'authorizers/oauth2.js should pass ESLint\n\n');
  });

  QUnit.test('components/log-out.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'components/log-out.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n9:3 - Unexpected \'debugger\' statement. (no-debugger)\n10:3 - Use closure actions, unless you need bubbling (ember/closure-actions)');
  });

  QUnit.test('controllers/bookdetails.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/bookdetails.js should pass ESLint\n\n15:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('controllers/discover-book.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/discover-book.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n5:9 - Use import { computed } from \'@ember/object\'; instead of using Ember.computed (ember/new-module-imports)\n5:9 - \'Ember\' is not defined. (no-undef)\n7:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n7:15 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n7:15 - \'Ember\' is not defined. (no-undef)\n8:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n8:12 - \'$\' is not defined. (no-undef)\n14:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n15:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('controllers/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/login.js should pass ESLint\n\n6:10 - \'compare\' is defined but never used. (no-unused-vars)\n7:20 - \'service\' is defined but never used. (no-unused-vars)\n8:10 - \'bind\' is defined but never used. (no-unused-vars)\n13:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n13:11 - \'Ember\' is not defined. (no-undef)\n30:8 - \'credential\' is already defined. (no-redeclare)\n32:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n32:20 - \'$\' is not defined. (no-undef)\n33:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('controllers/post-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'controllers/post-book.js should pass ESLint\n\n');
  });

  QUnit.test('controllers/user.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'controllers/user.js should pass ESLint\n\n5:2 - Only string, number, symbol, boolean, null, undefined, and function are allowed as default properties (ember/avoid-leaking-state-in-ember-objects)\n44:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n45:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n46:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n47:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n49:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n51:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n52:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n53:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n54:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n55:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n62:20 - \'answer\' is defined but never used. (no-unused-vars)\n63:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n64:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n67:19 - \'reason\' is defined but never used. (no-unused-vars)\n68:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n69:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n71:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)');
  });

  QUnit.test('models/bookdetails.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/bookdetails.js should pass ESLint\n\n');
  });

  QUnit.test('models/discover-book.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'models/discover-book.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)');
  });

  QUnit.test('models/genre.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/genre.js should pass ESLint\n\n');
  });

  QUnit.test('models/login.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/login.js should pass ESLint\n\n');
  });

  QUnit.test('models/post-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/post-book.js should pass ESLint\n\n');
  });

  QUnit.test('models/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'models/user.js should pass ESLint\n\n');
  });

  QUnit.test('resolver.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'resolver.js should pass ESLint\n\n');
  });

  QUnit.test('router.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'router.js should pass ESLint\n\n15:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)\n16:3 - Unexpected capital letter in route\'s name (ember/no-capital-letters-in-routes)');
  });

  QUnit.test('routes/application.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/application.js should pass ESLint\n\n4:16 - Use import Route from \'@ember/routing/route\'; instead of using Ember.Route (ember/new-module-imports)');
  });

  QUnit.test('routes/bookdetails.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/bookdetails.js should pass ESLint\n\n1:8 - \'Route\' is defined but never used. (no-unused-vars)\n4:16 - Use import Route from \'@ember/routing/route\'; instead of using Ember.Route (ember/new-module-imports)\n4:16 - \'Ember\' is not defined. (no-undef)\n5:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n5:11 - \'Ember\' is not defined. (no-undef)\n6:2 - Mixed spaces and tabs. (no-mixed-spaces-and-tabs)\n6:16 - \'transition\' is defined but never used. (no-unused-vars)');
  });

  QUnit.test('routes/discover-book.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/discover-book.js should pass ESLint\n\n4:11 - Use import { inject } from \'@ember/service\'; instead of using Ember.inject.service (ember/new-module-imports)\n4:11 - \'Ember\' is not defined. (no-undef)\n8:10 - Use import { hash } from \'rsvp\'; instead of using Ember.RSVP.hash (ember/new-module-imports)\n8:10 - \'Ember\' is not defined. (no-undef)\n9:9 - \'$\' is not defined. (no-undef)');
  });

  QUnit.test('routes/index.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/index.js should pass ESLint\n\n');
  });

  QUnit.test('routes/login.js', function (assert) {
    assert.expect(1);
    assert.ok(false, 'routes/login.js should pass ESLint\n\n5:16 - Use import Route from \'@ember/routing/route\'; instead of using Ember.Route (ember/new-module-imports)');
  });

  QUnit.test('routes/post-book.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/post-book.js should pass ESLint\n\n');
  });

  QUnit.test('routes/user.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'routes/user.js should pass ESLint\n\n');
  });

  QUnit.test('services/session.js', function (assert) {
    assert.expect(1);
    assert.ok(true, 'services/session.js should pass ESLint\n\n');
  });
});
define('frontend/tests/helpers/destroy-app', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = destroyApp;
  function destroyApp(application) {
    Ember.run(application, 'destroy');
  }
});
define('frontend/tests/helpers/ember-simple-auth', ['exports', 'ember-simple-auth/authenticators/test'], function (exports, _test) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.authenticateSession = authenticateSession;
  exports.currentSession = currentSession;
  exports.invalidateSession = invalidateSession;


  const TEST_CONTAINER_KEY = 'authenticator:test';

  function ensureAuthenticator(app, container) {
    const authenticator = container.lookup(TEST_CONTAINER_KEY);
    if (!authenticator) {
      app.register(TEST_CONTAINER_KEY, _test.default);
    }
  }

  function authenticateSession(app, sessionData) {
    const { __container__: container } = app;
    const session = container.lookup('service:session');
    ensureAuthenticator(app, container);
    session.authenticate(TEST_CONTAINER_KEY, sessionData);
    return app.testHelpers.wait();
  }

  function currentSession(app) {
    return app.__container__.lookup('service:session');
  }

  function invalidateSession(app) {
    const session = app.__container__.lookup('service:session');
    if (session.get('isAuthenticated')) {
      session.invalidate();
    }
    return app.testHelpers.wait();
  }
});
define('frontend/tests/helpers/resolver', ['exports', 'frontend/resolver', 'frontend/config/environment'], function (exports, _resolver, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const resolver = _resolver.default.create();

  resolver.namespace = {
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix
  };

  exports.default = resolver;
});
define('frontend/tests/helpers/start-app', ['exports', 'frontend/app', 'frontend/config/environment'], function (exports, _app, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = startApp;
  function startApp(attrs) {
    let attributes = Ember.merge({}, _environment.default.APP);
    attributes.autoboot = true;
    attributes = Ember.merge(attributes, attrs); // use defaults, but you can override;

    return Ember.run(() => {
      let application = _app.default.create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
      return application;
    });
  }
});
define('frontend/tests/integration/components/log-out-test', ['qunit', 'ember-qunit', '@ember/test-helpers'], function (_qunit, _emberQunit, _testHelpers) {
  'use strict';

  (0, _qunit.module)('Integration | Component | log-out', function (hooks) {
    (0, _emberQunit.setupRenderingTest)(hooks);

    (0, _qunit.test)('it renders', async function (assert) {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.set('myAction', function(val) { ... });

      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "AU0tMJ1C",
        "block": "{\"symbols\":[],\"statements\":[[1,[20,\"log-out\"],false]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), '');

      // Template block usage:
      await (0, _testHelpers.render)(Ember.HTMLBars.template({
        "id": "mBnJ/hGm",
        "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[4,\"log-out\",null,null,{\"statements\":[[0,\"        template block text\\n\"]],\"parameters\":[]},null],[0,\"    \"]],\"hasEval\":false}",
        "meta": {}
      }));

      assert.equal(this.element.textContent.trim(), 'template block text');
    });
  });
});
define('frontend/tests/test-helper', ['frontend/tests/helpers/resolver', 'ember-mocha'], function (_resolver, _emberMocha) {
  'use strict';

  (0, _emberMocha.setResolver)(_resolver.default);
});
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
define('frontend/tests/unit/controllers/bookdetails-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | bookdetails', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:bookdetails');
      assert.ok(controller);
    });
  });
});
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
define('frontend/tests/unit/controllers/login-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:login');
      assert.ok(controller);
    });
  });
});
define('frontend/tests/unit/controllers/post-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | post-book', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:post-book');
      assert.ok(controller);
    });
  });
});
define('frontend/tests/unit/controllers/user-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Controller | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let controller = this.owner.lookup('controller:user');
      assert.ok(controller);
    });
  });
});
define('frontend/tests/unit/models/bookdetails-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | bookdetails', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('bookdetails', {});
      assert.ok(model);
    });
  });
});
define('frontend/tests/unit/models/login-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('login', {});
      assert.ok(model);
    });
  });
});
define('frontend/tests/unit/models/user-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Model | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let store = this.owner.lookup('service:store');
      let model = store.createRecord('user', {});
      assert.ok(model);
    });
  });
});
define('frontend/tests/unit/routes/bookdetails-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | bookdetails', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:bookdetails');
      assert.ok(route);
    });
  });
});
define('frontend/tests/unit/routes/discover-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | discoverBook', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:discover-book');
      assert.ok(route);
    });
  });
});
define('frontend/tests/unit/routes/index-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | index', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:index');
      assert.ok(route);
    });
  });
});
define('frontend/tests/unit/routes/login-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | login', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:login');
      assert.ok(route);
    });
  });
});
define('frontend/tests/unit/routes/post-book-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | postBook', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:post-book');
      assert.ok(route);
    });
  });
});
define('frontend/tests/unit/routes/user-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Route | user', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    (0, _qunit.test)('it exists', function (assert) {
      let route = this.owner.lookup('route:user');
      assert.ok(route);
    });
  });
});
define('frontend/tests/unit/services/session-test', ['qunit', 'ember-qunit'], function (_qunit, _emberQunit) {
  'use strict';

  (0, _qunit.module)('Unit | Service | session', function (hooks) {
    (0, _emberQunit.setupTest)(hooks);

    // Replace this with your real tests.
    (0, _qunit.test)('it exists', function (assert) {
      let service = this.owner.lookup('service:session');
      assert.ok(service);
    });
  });
});
define('frontend/config/environment', [], function() {
  var prefix = 'frontend';
try {
  var metaName = prefix + '/config/environment';
  var rawConfig = document.querySelector('meta[name="' + metaName + '"]').getAttribute('content');
  var config = JSON.parse(unescape(rawConfig));

  var exports = { 'default': config };

  Object.defineProperty(exports, '__esModule', { value: true });

  return exports;
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

});

require('frontend/tests/test-helper');
EmberENV.TESTS_FILE_LOADED = true;
//# sourceMappingURL=tests.map
