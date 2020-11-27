const { Model, Sequelize } = require('sequelize');
const sequelize = require('../index')
class Item extends Model {}
Item.init({
    name: Sequelize.STRING,
    category : Sequelize.STRING,
    price: Sequelize.STRING,
    quickDescription : Sequelize.STRING,
    difficulty: Sequelize.STRING,
    author: Sequelize.STRING,
    quantity: Sequelize.STRING,
    color: Sequelize.STRING,
    size: Sequelize.STRING,
}, { sequelize, modelName: 'item', timestamps: true });

module.exports = Item;

