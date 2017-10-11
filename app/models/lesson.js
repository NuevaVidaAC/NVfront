import DS from 'ember-data';

export default DS.Model.extend({
	name: 			DS.attr('string'),
	description: 	DS.attr('string'),
	date: 			DS.attr('string'),
	startHour: 		DS.attr('string'),
	endHour: 		DS.attr('string'),

	volunteers: 	DS.hasMany('volunteer'),
	plans: 			DS.hasMany('plan'),
	session: 		DS.belongsTo('session')
});
