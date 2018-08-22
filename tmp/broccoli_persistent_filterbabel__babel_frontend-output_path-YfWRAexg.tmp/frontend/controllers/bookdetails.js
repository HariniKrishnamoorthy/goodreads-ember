define('frontend/controllers/bookdetails', ['exports'], function (exports) {
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