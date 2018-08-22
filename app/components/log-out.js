import Component from '@ember/component';

export default Component.extend({
	session: Ember.inject.service(),
	actions:{
		logout()
	{
		this.set('session.currentUser',null)
		debugger
		this.sendAction('log')
	}
}
});
