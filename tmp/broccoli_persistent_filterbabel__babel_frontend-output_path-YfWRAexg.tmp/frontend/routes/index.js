define('frontend/routes/index', ['exports'], function (exports) {
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