define('frontend/controllers/login', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({
		session: Ember.inject.service('session'),

		actions: {
			authenticate() {
				let { email, password } = this.getProperties('email', 'password');
				this.get('session').authenticate('authenticator:oauth2', email, password);
			}
		}
	});
});