import Ember from 'ember';

export default Ember.Route.extend({
	session: Ember.inject.service(),
	beforeModel() {
	    return this.get('session').fetch().catch(function() {});
	},	
	actions: {
		accessDenied() {
		  this.transitionTo('login');
		}
	}
});
