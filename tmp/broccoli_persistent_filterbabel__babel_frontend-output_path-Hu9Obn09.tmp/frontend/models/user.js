define('frontend/models/user', ['exports', 'ember-data'], function (exports, _emberData) {
	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = _emberData.default.Model.extend({
		firstname: _emberData.default.attr('string'),
		lastname: _emberData.default.attr('string'),
		email: _emberData.default.attr('string'),
		password: _emberData.default.attr('string')
	});
});