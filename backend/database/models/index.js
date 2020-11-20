const db = require('../index')

db.items = require('./item');
db.descriptions = require('./description');
db.Feedback = require('./feedback');
db.UrlVideos = require('./urlVideos');
db.UrlPictures = require('./urlPictures');

db.descriptions.belongsTo(db.items);
db.items.hasOne(db.descriptions);

db.Feedback.belongsTo(db.items);
db.items.hasMany(db.Feedback);

db.UrlVideos.belongsTo(db.items);
db.items.hasMany(db.UrlVideos);

db.UrlPictures.belongsTo(db.items);
db.items.hasMany(db.UrlPictures);

module.exports = db;