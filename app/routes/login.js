import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),
	firebase: Ember.inject.service(),
	actions: {
		login(email, password) {
			this.get('session').open('firebase', {
			  provider: 'password',
			  email,
			  password
			}).then(() => {
				this.transitionTo('home');
			}).catch((error) => {
				alert('ÑO!');
			});
		}
	}
});