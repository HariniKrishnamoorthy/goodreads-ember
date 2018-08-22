import Route from '@ember/routing/route';

export default Route.extend({
	session: Ember.inject.service(),
	model()
	{
		
		return Ember.RSVP.hash({
			res: $.ajax('/details',{
			type: 'GET',
			//url: 'http://localhost:3000/users/show',
			data: {email: this.get('session.currentUser') }
		})
		});
		
	}
});
