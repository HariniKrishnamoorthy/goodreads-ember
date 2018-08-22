import DS from 'ember-data';

export default DS.Model.extend({
	bookname: DS.attr('string'),
	author: DS.attr('string'),
	price: DS.attr('number'),
	description: DS.attr('string'),
	genre :DS.attr('string')
});
