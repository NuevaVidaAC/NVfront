import DS from 'ember-data';

export default DS.Model.extend({
	date: 			DS.attr('string'),
	startHour: 	 	DS.attr('string'),
	endHour: 		DS.attr('string'),

	responsable: 	DS.belongsTo('responsable')
});
