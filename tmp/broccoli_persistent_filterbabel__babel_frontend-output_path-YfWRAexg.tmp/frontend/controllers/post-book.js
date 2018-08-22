define('frontend/controllers/post-book', ['exports'], function (exports) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = Ember.Controller.extend({
		actions: {

			setGenre(g) {
				this.set('Genre', g);
			},
			saveBook() {

				var record = this.store.createRecord('bookdetails', {
					bookname: this.get('bookname'),
					author: this.get('Authorname'),
					price: this.get('price'),
					description: this.get('description'),
					genre: this.get('Genre')
				});
				record.save();
			}

		}
	});
});