import Service from '@ember/service';

export default Service.extend({
	currentUser: null,
	login(cred){
		this.set('currentUser',cred.email)

	}


});
