const db = require('../index');
db.user = require('./user');
db.items = require('./item');
db.descriptions = require('./description');
db.Feedback = require('./Feedback');
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

/* db.items.belongsToMany(db.user, { through: 'PurchaseRecords' });
db.user.belongsToMany(db.items, { through: 'PurchaseRecords' });
 */

module.exports = db;
