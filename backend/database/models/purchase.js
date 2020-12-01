/*
const { Model, Sequelize } = require('sequelize');
const sequelize = require('../index');
class Purchase extends Model {}
 PurchaseRecords.init(
 {
		ItemId: {
			type: DataTypes.INTEGER,
			references: {
				model: Item, 
				key: 'id'
			}
		},
		UserId: {
			type: DataTypes.INTEGER,
			references: {
				model: User, 
				key: 'id'
			}
		},
		Purchase: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		Wishlist: {
			type: DataTypes.BOOLEAN,
			defaultValue: false,
		},
		{ sequelize, modelName: 'PurchaseRecords', timestamps: true }
	});
module.exports = PurchaseRecords;

 */
