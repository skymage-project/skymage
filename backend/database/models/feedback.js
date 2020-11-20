const { Model, Sequelize } = require('sequelize');
const sequelize = require('../index') 
class Feedback extends Model {}
Feedback.init({
    userName: Sequelize.STRING,
    rating: Sequelize.INTEGER,
    comment: Sequelize.STRING,
    date: Sequelize.DATE
}, { sequelize, modelName: 'feedback',timestamps: true})

module.exports = Feedback;