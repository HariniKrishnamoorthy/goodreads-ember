import Route from '@ember/routing/route';


export default Ember.Route.extend({
	session: Ember.inject.service(),
  	beforeModel(transition){
    if(!this.get('session.currentUser')){
      this.transitionTo('login')
    }
}

	
});