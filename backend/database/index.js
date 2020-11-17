const Sequelize = require("sequelize");
const db = require('../config/db.config.js')
const sequelize = new Sequelize(db.postgres)
        
    sequelize
    .authenticate()
    .then(() => {
        console.log('Database Connection has been established successfully');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

    sequelize.sync();

    module.exports = sequelize;