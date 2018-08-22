import Controller from '@ember/controller';
import DS from 'ember-data';
export default Controller.extend({
	session: Ember.inject.service(),
	result:Ember.computed(function(){
    return DS.PromiseObject.create({
    	promise: Ember.RSVP.hash({
    		res: $.ajax('/details',{
					type: 'GET',
					//url: 'http://localhost:3000/users/show',
				data: {email: this.get('session.currentUser') }
		})

    	}).then((result) => { return result;})
 		 });
  })
	
	
})
