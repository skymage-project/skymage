const { Model, Sequelize } = require('sequelize');
const sequelize = require('../index');

class Description extends Model {}
Description.init(
	{
		descriptionText: Sequelize.TEXT,
		descriptionTitle: Sequelize.STRING,
		descriptionInstruction: Sequelize.STRING,
	},
	{ sequelize, modelName: 'description', timestamps: true }
);

module.exports = Description;
