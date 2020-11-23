const { Model, Sequelize } = require('sequelize');
const sequelize = require('../index')
class UrlVideos extends Model { }
UrlVideos.init({
    urlVideos: Sequelize.STRING

}, { sequelize, modelName: 'urlVideo',timestamps: true})

module.exports = UrlVideos;