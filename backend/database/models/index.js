const db = require('../index');
db.users = require('./user');
db.items = require('./item');
db.descriptions = require('./description');
db.Feedback = require('./Feedback');
db.UrlVideos = require('./urlVideos');
db.UrlPictures = require('./urlPictures');
db.wishlists = require('./wishlist');

db.descriptions.belongsTo(db.items);
db.items.hasOne(db.descriptions);

db.Feedback.belongsTo(db.items);
db.items.hasMany(db.Feedback);

db.UrlVideos.belongsTo(db.items);
db.items.hasMany(db.UrlVideos);

db.UrlPictures.belongsTo(db.items);
db.items.hasMany(db.UrlPictures);

db.items.belongsToMany(db.users, { through: 'PurchaseRecords' });
db.users.belongsToMany(db.items, { through: 'PurchaseRecords' });

module.exports = db;
