import DS from 'ember-data';

export default DS.Model.extend({
	session: Ember.inject.service(),
	
});
