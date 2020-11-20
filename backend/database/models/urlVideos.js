const { Model, Sequelize } = require('sequelize');
const sequelize = require('../index')
class UrlVideos extends Model { }
UrlVideos.init({
    urlVideos: Sequelize.STRING

}, { sequelize, modelName: 'urlVideos',timestamps: false})

module.exports = UrlVideos;