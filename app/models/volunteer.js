import DS from 'ember-data';

export default DS.Model.extend({
	name: 			DS.attr('string'),
	age: 			DS.attr('number'),
	institution: 	DS.attr('string'),
	studentId: 		DS.attr('string'),
	career: 		DS.attr('string'),
	email: 			DS.attr('string'),
	password: 		DS.attr('string'),

	lesson: 		DS.belongsTo('lesson'),
	session: 		DS.belongsTo('session')
});
