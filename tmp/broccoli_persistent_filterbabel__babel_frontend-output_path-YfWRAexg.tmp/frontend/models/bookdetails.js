define('frontend/models/bookdetails', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		bookname: _emberData.default.attr('string'),
		author: _emberData.default.attr('string'),
		price: _emberData.default.attr('number'),
		description: _emberData.default.attr('string'),
		genre: _emberData.default.attr('string')
	});
});