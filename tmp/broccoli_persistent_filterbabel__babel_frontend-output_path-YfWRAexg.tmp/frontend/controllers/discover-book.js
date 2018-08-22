define('frontend/controllers/discover-book', ['exports', 'ember-data'], function (exports, _emberData) {
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