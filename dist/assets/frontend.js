"use strict";



;define('frontend/adapters/application', ['exports', 'active-model-adapter'], function (exports, _activeModelAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _activeModelAdapter.default.extend({});
});
;define('frontend/app', ['exports', 'frontend/resolver', 'ember-load-initializers', 'frontend/config/environment'], function (exports, _resolver, _emberLoadInitializers, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const App = Ember.Application.extend({
    modulePrefix: _environment.default.modulePrefix,
    podModulePrefix: _environment.default.podModulePrefix,
    Resolver: _resolver.default
  });

  (0, _emberLoadInitializers.default)(App, _environment.default.modulePrefix);

  exports.default = App;
});
;define('frontend/authenticators/oauth2', ['exports', 'ember-simple-auth/authenticators/oauth2-password-grant'], function (exports, _oauth2PasswordGrant) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _oauth2PasswordGrant.default.extend();
});
;define('frontend/authorizers/oauth2', ['exports', 'ember-simple-auth/authorizers/oauth2-bearer'], function (exports, _oauth2Bearer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _oauth2Bearer.default.extend();
});
;define('frontend/components/log-out', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Component.extend({
		session: Ember.inject.service(),
		actions: {
			logout() {
				this.set('session.currentUser', null);
				debugger;
				this.sendAction('log');
			}
		}
	});
});
;define('frontend/components/welcome-page', ['exports', 'ember-welcome-page/components/welcome-page'], function (exports, _welcomePage) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _welcomePage.default;
    }
  });
});
;define('frontend/controllers/bookdetails', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({
		actions: {
			postBook() {
				this.transitionToRoute('postBook');
			},
			discover() {
				this.transitionToRoute('discoverBook');
			},
			log() {
				this.transitionToRoute('login');
			}
		}

	});
});
;define('frontend/controllers/discover-book', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({
		session: Ember.inject.service(),
		result: Ember.computed(function () {
			return _emberData.default.PromiseObject.create({
				promise: Ember.RSVP.hash({
					res: $.ajax('/details', {
						type: 'GET',
						//url: 'http://localhost:3000/users/show',
						data: { email: this.get('session.currentUser') }
					})

				}).then(result => {
					return result;
				})
			});
		})

	});
});
;define('frontend/controllers/login', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({

		session: Ember.inject.service(),
		actions: {
			authenticate(credential) {
				function accept(res) {

					alert(res['sucess']);
					this.get("session").login(credential);
					this.transitionToRoute('bookdetails');
				}
				function failure(err) {
					alert(err['error']);
					this.transitionTo('user');
				}

				var credential = this.getProperties('email', 'password');

				var request = $.post("/login", credential);
				request.then(accept.bind(this), failure.bind(this));
				// promise.then(onSuccess,onFailure)

				//$.get("/index",function(cred,status))

			}
		}
	});
});
;define('frontend/controllers/post-book', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({
		actions: {

			setGenre(g) {
				this.set('Genre', g);
			},
			saveBook() {

				var record = this.store.createRecord('bookdetails', {
					bookname: this.get('bookname'),
					author: this.get('Authorname'),
					price: this.get('price'),
					description: this.get('description'),
					genre: this.get('Genre')
				});
				record.save();
			}

		}
	});
});
;define('frontend/controllers/user', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({

		selectedGenres: [],

		/*genres: [
  {
  	code: 'Thriller',
  	name: 'Thriller'
  },
  {
  	code: 'Romance',
  	name: 'Romance'
  },
  {
  	code: 'Historic',
  	name: 'Historic'
  },
  {
  	code: 'fiction',
  	name: 'fiction'
  },
  ],*/

		actions: {

			toggleCheckBox(g) {

				let selectedGenres = this.get('selectedGenres');
				let code = g;
				if (selectedGenres.includes(code)) selectedGenres.removeObject(code);else this.get('selectedGenres').pushObject(code);
			},

			signup() {
				var email = this.get('email');
				var test = this.get('selectedGenres');

				var rec = this.store.createRecord('user', {
					firstname: this.get('firstname'),
					lastname: this.get('lastname'),
					email: email,

					password: this.get('password'),

					selectedGenre: test

				});

				// rec.save().then(onSuccess,onFail)


				let promise = rec.save();

				promise.then(fulfill, reject);

				function fulfill(answer) {
					alert("Successfully logged in");
					// this.transitionToRoute('user');
				}

				function reject(reason) {
					alert("email already exists");
					//this.transitionToRoute('user');
				}
			}
		}

	});
});
;define('frontend/helpers/app-version', ['exports', 'frontend/config/environment', 'ember-cli-app-version/utils/regexp'], function (exports, _environment, _regexp) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.appVersion = appVersion;
  function appVersion(_, hash = {}) {
    const version = _environment.default.APP.version;
    // e.g. 1.0.0-alpha.1+4jds75hf

    // Allow use of 'hideSha' and 'hideVersion' For backwards compatibility
    let versionOnly = hash.versionOnly || hash.hideSha;
    let shaOnly = hash.shaOnly || hash.hideVersion;

    let match = null;

    if (versionOnly) {
      if (hash.showExtended) {
        match = version.match(_regexp.versionExtendedRegExp); // 1.0.0-alpha.1
      }
      // Fallback to just version
      if (!match) {
        match = version.match(_regexp.versionRegExp); // 1.0.0
      }
    }

    if (shaOnly) {
      match = version.match(_regexp.shaRegExp); // 4jds75hf
    }

    return match ? match[0] : version;
  }

  exports.default = Ember.Helper.helper(appVersion);
});
;define('frontend/helpers/await', ['exports', 'ember-promise-helpers/helpers/await'], function (exports, _await) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _await.default;
    }
  });
});
;define('frontend/helpers/is-fulfilled', ['exports', 'ember-promise-helpers/helpers/is-fulfilled'], function (exports, _isFulfilled) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isFulfilled.default;
    }
  });
  Object.defineProperty(exports, 'isFulfilled', {
    enumerable: true,
    get: function () {
      return _isFulfilled.isFulfilled;
    }
  });
});
;define('frontend/helpers/is-pending', ['exports', 'ember-promise-helpers/helpers/is-pending'], function (exports, _isPending) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isPending.default;
    }
  });
  Object.defineProperty(exports, 'isPending', {
    enumerable: true,
    get: function () {
      return _isPending.isPending;
    }
  });
});
;define('frontend/helpers/is-rejected', ['exports', 'ember-promise-helpers/helpers/is-rejected'], function (exports, _isRejected) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _isRejected.default;
    }
  });
  Object.defineProperty(exports, 'isRejected', {
    enumerable: true,
    get: function () {
      return _isRejected.isRejected;
    }
  });
});
;define('frontend/helpers/pluralize', ['exports', 'ember-inflector/lib/helpers/pluralize'], function (exports, _pluralize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _pluralize.default;
});
;define('frontend/helpers/promise-all', ['exports', 'ember-promise-helpers/helpers/promise-all'], function (exports, _promiseAll) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseAll.default;
    }
  });
  Object.defineProperty(exports, 'promiseAll', {
    enumerable: true,
    get: function () {
      return _promiseAll.promiseAll;
    }
  });
});
;define('frontend/helpers/promise-hash', ['exports', 'ember-promise-helpers/helpers/promise-hash'], function (exports, _promiseHash) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseHash.default;
    }
  });
  Object.defineProperty(exports, 'promiseHash', {
    enumerable: true,
    get: function () {
      return _promiseHash.promiseHash;
    }
  });
});
;define('frontend/helpers/promise-rejected-reason', ['exports', 'ember-promise-helpers/helpers/promise-rejected-reason'], function (exports, _promiseRejectedReason) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _promiseRejectedReason.default;
    }
  });
});
;define('frontend/helpers/singularize', ['exports', 'ember-inflector/lib/helpers/singularize'], function (exports, _singularize) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _singularize.default;
});
;define("frontend/initializers/active-model-adapter", ["exports", "active-model-adapter", "active-model-adapter/active-model-serializer"], function (exports, _activeModelAdapter, _activeModelSerializer) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'active-model-adapter',
    initialize: function () {
      var application = arguments[1] || arguments[0];
      application.register('adapter:-active-model', _activeModelAdapter.default);
      application.register('serializer:-active-model', _activeModelSerializer.default);
    }
  };
});
;define('frontend/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'frontend/config/environment'], function (exports, _initializerFactory, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  let name, version;
  if (_environment.default.APP) {
    name = _environment.default.APP.name;
    version = _environment.default.APP.version;
  }

  exports.default = {
    name: 'App Version',
    initialize: (0, _initializerFactory.default)(name, version)
  };
});
;define('frontend/initializers/container-debug-adapter', ['exports', 'ember-resolver/resolvers/classic/container-debug-adapter'], function (exports, _containerDebugAdapter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'container-debug-adapter',

    initialize() {
      let app = arguments[1] || arguments[0];

      app.register('container-debug-adapter:main', _containerDebugAdapter.default);
      app.inject('container-debug-adapter:main', 'namespace', 'application:main');
    }
  };
});
;define('frontend/initializers/ember-data', ['exports', 'ember-data/setup-container', 'ember-data'], function (exports, _setupContainer) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-data',
    initialize: _setupContainer.default
  };
});
;define('frontend/initializers/ember-simple-auth', ['exports', 'frontend/config/environment', 'ember-simple-auth/configuration', 'ember-simple-auth/initializers/setup-session', 'ember-simple-auth/initializers/setup-session-service', 'ember-simple-auth/initializers/setup-session-restoration'], function (exports, _environment, _configuration, _setupSession, _setupSessionService, _setupSessionRestoration) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize(registry) {
      const config = _environment.default['ember-simple-auth'] || {};
      config.rootURL = _environment.default.rootURL || _environment.default.baseURL;
      _configuration.default.load(config);

      (0, _setupSession.default)(registry);
      (0, _setupSessionService.default)(registry);
      (0, _setupSessionRestoration.default)(registry);
    }
  };
});
;define('frontend/initializers/export-application-global', ['exports', 'frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.initialize = initialize;
  function initialize() {
    var application = arguments[1] || arguments[0];
    if (_environment.default.exportApplicationGlobal !== false) {
      var theGlobal;
      if (typeof window !== 'undefined') {
        theGlobal = window;
      } else if (typeof global !== 'undefined') {
        theGlobal = global;
      } else if (typeof self !== 'undefined') {
        theGlobal = self;
      } else {
        // no reasonable global, just bail
        return;
      }

      var value = _environment.default.exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember.String.classify(_environment.default.modulePrefix);
      }

      if (!theGlobal[globalName]) {
        theGlobal[globalName] = application;

        application.reopen({
          willDestroy: function () {
            this._super.apply(this, arguments);
            delete theGlobal[globalName];
          }
        });
      }
    }
  }

  exports.default = {
    name: 'export-application-global',

    initialize: initialize
  };
});
;define("frontend/instance-initializers/ember-data", ["exports", "ember-data/initialize-store-service"], function (exports, _initializeStoreService) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: "ember-data",
    initialize: _initializeStoreService.default
  };
});
;define('frontend/instance-initializers/ember-simple-auth', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = {
    name: 'ember-simple-auth',

    initialize() {}
  };
});
;define('frontend/models/bookdetails', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		bookname: _emberData.default.attr('string'),
		author: _emberData.default.attr('string'),
		price: _emberData.default.attr('number'),
		description: _emberData.default.attr('string'),
		genre: _emberData.default.attr('string')
	});
});
;define('frontend/models/discover-book', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		session: Ember.inject.service()

	});
});
;define('frontend/models/genre', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		genre: _emberData.default.attr('string')
	});
});
;define('frontend/models/login', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		email: _emberData.default.attr('string'),
		password: _emberData.default.attr('string')
	});
});
;define('frontend/models/post-book', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({});
});
;define('frontend/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		firstname: _emberData.default.attr('string'),
		lastname: _emberData.default.attr('string'),
		email: _emberData.default.attr('string'),
		password: _emberData.default.attr('string'),
		error: _emberData.default.attr(),
		selectedGenre: _emberData.default.attr('string')
	});
});
;define('frontend/resolver', ['exports', 'ember-resolver'], function (exports, _emberResolver) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _emberResolver.default;
});
;define('frontend/router', ['exports', 'frontend/config/environment'], function (exports, _environment) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });


  const Router = Ember.Router.extend({
    location: _environment.default.locationType,
    rootURL: _environment.default.rootURL
  });
  //import { expect } from 'chai';


  Router.map(function () {
    this.route('login');
    this.route('user');

    this.route('bookdetails');
    this.route('postBook');
    this.route('discoverBook');
  });

  exports.default = Router;
});
;define('frontend/routes/application', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({});
});
;define('frontend/routes/bookdetails', ['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.Route.extend({
    session: Ember.inject.service(),
    beforeModel(transition) {
      if (!this.get('session.currentUser')) {
        this.transitionTo('login');
      }
    }

  });
});
;define('frontend/routes/discover-book', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		session: Ember.inject.service(),
		model() {

			return Ember.RSVP.hash({
				res: $.ajax('/details', {
					type: 'GET',
					//url: 'http://localhost:3000/users/show',
					data: { email: this.get('session.currentUser') }
				})
			});
		}
	});
});
;define('frontend/routes/index', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		beforeModel() {
			this.replaceWith('login');
		}
	});
});
;define('frontend/routes/login', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({});
});
;define('frontend/routes/post-book', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		model() {
			return this.get('store').findAll('genre');
		}

	});
});
;define('frontend/routes/user', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Route.extend({
		model() {
			return this.get('store').findAll('genre');
		}
	});
});
;define('frontend/services/ajax', ['exports', 'ember-ajax/services/ajax'], function (exports, _ajax) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.defineProperty(exports, 'default', {
    enumerable: true,
    get: function () {
      return _ajax.default;
    }
  });
});
;define('frontend/services/cookies', ['exports', 'ember-cookies/services/cookies'], function (exports, _cookies) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _cookies.default;
});
;define('frontend/services/session', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Service.extend({
		currentUser: null,
		login(cred) {
			this.set('currentUser', cred.email);
		}

	});
});
;define('frontend/session-stores/application', ['exports', 'ember-simple-auth/session-stores/adaptive'], function (exports, _adaptive) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = _adaptive.default.extend();
});
;define("frontend/templates/application", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rvip+j02", "block": "{\"symbols\":[],\"statements\":[[0,\"\\n\"],[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "frontend/templates/application.hbs" } });
});
;define("frontend/templates/bookdetails", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "JalGOxim", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[6,\"button\"],[3,\"action\",[[21,0,[]],\"postBook\"]],[8],[0,\"Post book\"],[9],[6,\"br\"],[8],[9],[0,\"\\n\"],[6,\"button\"],[3,\"action\",[[21,0,[]],\"discover\"]],[8],[0,\"Discover book\"],[9],[0,\"\\n\\n\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "frontend/templates/bookdetails.hbs" } });
});
;define("frontend/templates/components/log-out", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "KICBP+at", "block": "{\"symbols\":[\"&default\"],\"statements\":[[13,1],[0,\"\\n\"],[6,\"button\"],[3,\"action\",[[21,0,[]],\"logout\"]],[8],[0,\"logout\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "frontend/templates/components/log-out.hbs" } });
});
;define("frontend/templates/discover-book", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "jwcU3dhB", "block": "{\"symbols\":[\"b\"],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\\n\"],[4,\"if\",[[22,[\"result\",\"isPending\"]]],null,{\"statements\":[[0,\"\\n\"]],\"parameters\":[]},{\"statements\":[[4,\"each\",[[22,[\"result\",\"res\",\"books\"]]],null,{\"statements\":[[0,\"\\t\"],[6,\"ul\"],[8],[0,\"\\n\\n\\t\"],[6,\"li\"],[8],[0,\"NAME: \"],[1,[21,1,[\"bookname\"]],false],[9],[6,\"br\"],[8],[9],[0,\"\\n\\t\"],[6,\"li\"],[8],[0,\"AUTHOR: \"],[1,[21,1,[\"author\"]],false],[9],[6,\"br\"],[8],[9],[0,\"\\n\\t\"],[6,\"li\"],[8],[0,\"DESCRIPTION: \"],[1,[21,1,[\"description\"]],false],[9],[6,\"br\"],[8],[9],[0,\"\\n\\t\"],[6,\"li\"],[8],[0,\"PRICE: \"],[1,[21,1,[\"price\"]],false],[9],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n\\t\\n\\n\\t\"],[9],[0,\"\\n\"]],\"parameters\":[1]},null]],\"parameters\":[]}]],\"hasEval\":false}", "meta": { "moduleName": "frontend/templates/discover-book.hbs" } });
});
;define("frontend/templates/index", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "64RUENid", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false]],\"hasEval\":false}", "meta": { "moduleName": "frontend/templates/index.hbs" } });
});
;define("frontend/templates/login", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "fJVkNoxo", "block": "{\"symbols\":[],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"email\",\"Registered Email\",[22,[\"email\"]]]]],false],[0,\" \"],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n\"],[1,[26,\"input\",null,[[\"type\",\"placeholder\",\"value\"],[\"password\",\"password\",[22,[\"password\"]]]]],false],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n\"],[6,\"button\"],[3,\"action\",[[21,0,[]],\"authenticate\"]],[8],[0,\"login\"],[9],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\nNew user?\"],[4,\"link-to\",[\"user\"],null,{\"statements\":[[0,\"\\n Sign up\\n\"]],\"parameters\":[]},null]],\"hasEval\":false}", "meta": { "moduleName": "frontend/templates/login.hbs" } });
});
;define("frontend/templates/post-book", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "rlB5Fl/C", "block": "{\"symbols\":[\"g\"],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\"],[1,[26,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[22,[\"bookname\"]],\"Enter book name\"]]],false],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n\"],[1,[26,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[22,[\"Authorname\"]],\"Author\"]]],false],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n\"],[1,[26,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"number\",[22,[\"price\"]],\"Enter price\"]]],false],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n\"],[1,[26,\"textarea\",null,[[\"value\",\"placeholder\",\"cols\",\"rows\"],[[22,[\"description\"]],\"Book description\",\"50\",\"6\"]]],false],[6,\"br\"],[8],[9],[0,\"\\nGenres : \\n\"],[6,\"select\"],[11,\"onchange\",[26,\"action\",[[21,0,[]],\"setGenre\"],[[\"value\"],[\"target.value\"]]]],[8],[0,\"\\n\\t\"],[6,\"option\"],[10,\"disabled\",\"\"],[10,\"selected\",\"\"],[8],[0,\" Genres \"],[9],[0,\"\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[0,\"\\n\\t\"],[6,\"option\"],[8],[1,[21,1,[\"genre\"]],false],[9],[0,\"\\n\\n\"]],\"parameters\":[1]},null],[9],[0,\" \"],[6,\"br\"],[8],[9],[6,\"br\"],[8],[9],[0,\"\\n\"],[6,\"button\"],[3,\"action\",[[21,0,[]],\"saveBook\"]],[8],[0,\"Submit\"],[9]],\"hasEval\":false}", "meta": { "moduleName": "frontend/templates/post-book.hbs" } });
});
;define("frontend/templates/user", ["exports"], function (exports) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = Ember.HTMLBars.template({ "id": "WAPZlm0x", "block": "{\"symbols\":[\"g\"],\"statements\":[[1,[20,\"outlet\"],false],[0,\"\\n\"],[1,[26,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[22,[\"firstname\"]],\"Firstname\"]]],false],[6,\"br\"],[8],[9],[0,\"\\n\"],[1,[26,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"text\",[22,[\"lastname\"]],\"Lastname\"]]],false],[6,\"br\"],[8],[9],[0,\"\\n\"],[1,[26,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"email\",[22,[\"email\"]],\"Email\"]]],false],[6,\"br\"],[8],[9],[0,\"\\n\"],[1,[26,\"input\",null,[[\"type\",\"value\",\"placeholder\"],[\"password\",[22,[\"password\"]],\"Password\"]]],false],[6,\"br\"],[8],[9],[0,\"\\n\\n\\n\\n\"],[4,\"each\",[[22,[\"model\"]]],null,{\"statements\":[[6,\"input\"],[11,\"onclick\",[26,\"action\",[[21,0,[]],\"toggleCheckBox\",[21,1,[\"genre\"]]],null]],[10,\"type\",\"checkbox\"],[8],[9],[0,\"\\n\"],[1,[21,1,[\"genre\"]],false],[0,\"\\n\"],[6,\"br\"],[8],[9],[0,\"\\n\"]],\"parameters\":[1]},null],[6,\"button\"],[3,\"action\",[[21,0,[]],\"signup\"]],[8],[0,\" submit \"],[9],[0,\"\\n\"]],\"hasEval\":false}", "meta": { "moduleName": "frontend/templates/user.hbs" } });
});
;

;define('frontend/config/environment', [], function() {
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

;
          if (!runningTests) {
            require("frontend/app")["default"].create({"name":"frontend","version":"0.0.0+3dc76988"});
          }
        
//# sourceMappingURL=frontend.map
