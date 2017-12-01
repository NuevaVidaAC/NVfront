import Ember from 'ember';

export default Ember.Component.extend({
	session: Ember.inject.service(),
	router: Ember.inject.service('-routing'),

	actions: {
		signOut() {
  			this.get('session').close().then(() =>{
  				this.get('router').transitionTo('login');
  			});
    	}
	}
});
