const { Model, Sequelize } = require('sequelize');
const sequelize = require('../index')
class Description extends Model {}
Description.init({
    text: Sequelize.STRING,
    title: Sequelize.STRING,
    instruct: Sequelize.STRING,

},{sequelize, modelName : 'description',timestamps: false })

module.exports = Description;