import Controller from '@ember/controller';

export default Controller.extend({

	selectedGenres : [],

	/*genres: [
	{
		code: 'Thriller',
		name: 'Thriller'
	},
	{
		code: 'Romance',
		name: 'Romance'
	},
	{
		code: 'Historic',
		name: 'Historic'
	},
	{
		code: 'fiction',
		name: 'fiction'
	},
	],*/


	actions:{

		toggleCheckBox(g){

			let selectedGenres = this.get('selectedGenres');
			let code = g;
			if(selectedGenres.includes(code))
				selectedGenres.removeObject(code);
			else
				this.get('selectedGenres').pushObject(code);
			
		},
		
		signup(){
			var email = this.get('email');
			var test = this.get('selectedGenres');
			
		    var rec = this.store.createRecord('user',{ 
		  	firstname: this.get('firstname'), 
		  	lastname: this.get('lastname'), 
		  	email: email, 

		  	password: this.get('password'),

		  	selectedGenre: test
		 	
		  });
		 
		 // rec.save().then(onSuccess,onFail)


		let promise = rec.save();

		promise.then(fulfill, reject);

		function fulfill(answer) {
  			alert("Successfully logged in");
  			// this.transitionToRoute('user');
		}

		function reject(reason) {
  			alert("email already exists");
  			//this.transitionToRoute('user');
		}	
	 }
	}
	
});
