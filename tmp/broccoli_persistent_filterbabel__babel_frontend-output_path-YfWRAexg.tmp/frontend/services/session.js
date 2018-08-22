define('frontend/services/session', ['exports'], function (exports) {
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