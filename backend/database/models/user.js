const { Model, Sequelize } = require('sequelize');
const sequelize = require('../index')
class User extends Model {}
User.init({
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        dateOfBirth: Sequelize.STRING,
        country: Sequelize.STRING,
        phoneNumber: Sequelize.INTEGER,
        status: Sequelize.STRING,
    }, { sequelize, modelName: 'user' });
  
    module.exports = User;