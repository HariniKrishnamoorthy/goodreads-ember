define('frontend/controllers/user', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({
		actions: {
			signup() {
				var rec = this.store.createRecord('User', {
					firstname: this.get('firstname'),
					lastname: this.get('lastname'),
					email: this.get('email'),
					password: this.get('password')
				});
				rec.save();
			}
		}

	});
});