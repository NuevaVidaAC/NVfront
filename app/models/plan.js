import DS from 'ember-data';

export default DS.Model.extend({
	topic: 			DS.attr('string'),
	organization: 	DS.attr('string'),
	subject: 		DS.attr('string'),
	audience: 		DS.attr('string'),
	activities: 	DS.attr('string'),
	material: 		DS.attr('string'),
	description: 	DS.attr('string'),

	lesson: 		DS.belongsTo('lesson')
});
