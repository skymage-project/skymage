const { Model, Sequelize } = require('sequelize');
const sequelize = require('../index');
class User extends Model {}
User.init(
	{
		firstName: Sequelize.STRING,
		lastName: Sequelize.STRING,
		email: Sequelize.STRING,
		password: Sequelize.STRING,
		dateOfBirth: Sequelize.STRING,
		access: Sequelize.BOOLEAN,
		status: Sequelize.STRING,
		phoneNumber: Sequelize.STRING,
		img: Sequelize.STRING,
		wishList: Sequelize.STRING,
		purchasedItems: Sequelize.STRING,
		address: Sequelize.STRING,
		company: Sequelize.STRING,
		addressOptional: Sequelize.STRING,
		postalCode: Sequelize.STRING,
		city: Sequelize.STRING,
		country: Sequelize.STRING,
		shippingRate: Sequelize.STRING,
		creditCardNumber: Sequelize.STRING,
		expirationCardDate: Sequelize.STRING,
		securityCode: Sequelize.STRING,
	},
	{ sequelize, modelName: 'user' }
);

module.exports = User;
