define('frontend/components/log-out', ['exports'], function (exports) {
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