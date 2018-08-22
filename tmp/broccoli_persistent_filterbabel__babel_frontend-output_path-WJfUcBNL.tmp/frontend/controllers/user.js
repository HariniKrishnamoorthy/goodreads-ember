define('frontend/controllers/user', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({
		actions: {
			signup() {
				var email = this.get('email');
				//console.log(email);
				var rec = this.store.createRecord('user', {
					firstname: this.get('firstname'),
					lastname: this.get('lastname'),
					email: email,

					password: this.get('password')

				});

				// rec.save().then(onSuccess,onFail)


				let promise = rec.save();

				promise.then(fulfill, reject);

				function fulfill(answer) {
					console.log();
				}

				function reject(reason) {
					console.log(session["message"]);
				}
			}
		}

	});
});