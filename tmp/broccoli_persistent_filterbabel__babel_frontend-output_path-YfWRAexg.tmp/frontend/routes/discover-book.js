define('frontend/routes/discover-book', ['exports'], function (exports) {
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