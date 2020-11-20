const { Model, Sequelize } = require('sequelize');
const sequelize = require('../index')
class UrlPictures extends Model { }
UrlPictures.init({
    urlPictures: Sequelize.STRING
}, { sequelize, modelName: 'urlPictures',timestamps: false})

module.exports = UrlPictures;