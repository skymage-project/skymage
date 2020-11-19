const db = require('../index')

db.items = require('./item');
db.descriptions = require('./description');

db.items.hasOne(db.descriptions,{as : 'descriptions'});
db.descriptions.belongsTo(db.items,{
    foreignKey: "itemId",
    as : 'item'
});

module.exports = db;