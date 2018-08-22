import Controller from '@ember/controller';

export default Controller.extend({
	actions :
	{
		postBook()
		{
			this.transitionToRoute('postBook');
		},
		discover()
		{
			this.transitionToRoute('discoverBook');
		},
		log(){
    		this.transitionToRoute('login');
		}
	}
	
});
