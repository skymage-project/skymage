const { Model, Sequelize } = require('sequelize');
const sequelize = require('../index');
class Feedback extends Model {}
Feedback.init(
	{
		feedbackUserName: Sequelize.STRING,
		feedbackRating: Sequelize.INTEGER,
		feedbackComment: Sequelize.STRING,
		feedbackDate: Sequelize.DATE,
	},
	{ sequelize, modelName: 'feedback', timestamps: true }
);

module.exports = Feedback;
