//import { expect } from 'chai';

import Controller from '@ember/controller';


import { compare } from '@ember/utils'
import { inject as service} from '@ember/service';
import { bind } from '@ember/runloop';


export default Controller.extend({
	
	session: Ember.inject.service(),
	actions:
	{
		authenticate(credential){
			function accept(res)
			{
				
				alert(res['sucess'])
				this.get("session").login(credential);
				this.transitionToRoute('bookdetails');
			}
			function failure(err)
			{
				alert(err['error'])
				this.transitionTo('user');
			}
			
			var credential = this.getProperties('email','password');
			
			  var request = $.post("/login", credential)
    		request.then(accept.bind(this), failure.bind(this));
			// promise.then(onSuccess,onFailure)
			
			//$.get("/index",function(cred,status))
			
			

		}
	}
});


