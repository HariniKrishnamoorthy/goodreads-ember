define('frontend/routes/post-book', ['exports'], function (exports) {
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