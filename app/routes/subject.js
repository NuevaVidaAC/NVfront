import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.findAll('subject');
	},
	actions: {
		createSubject(name, date) {
			this.store.createRecord('subject', {
				name,
				date
			}).save();
		}
	}
});
