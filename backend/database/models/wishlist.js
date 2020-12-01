const { Model, Sequelize } = require('sequelize');
const sequelize = require('../index');
const Item = require('./item');
const User = require('./user');
class WishList extends Model {}

WishList.init(
	{
		ItemId: {
			type: Sequelize.INTEGER,
			references: {
				model: Item,
				key: 'id',
			},
			primaryKey: true,
		},
		UserId: {
			type: Sequelize.INTEGER,
			references: {
				model: User,
				key: 'id',
			},
			primaryKey: true,
		},
	},
	{ sequelize, modelName: 'WishList', timestamps: true }
);
module.exports = WishList;
