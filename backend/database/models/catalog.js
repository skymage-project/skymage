module.exports = (sequelize, Sequelize) => {
    const Catalog = sequelize.define("catalog", {
    name: Sequelize.STRING,
    urlVideo: Sequelize.STRING, 
    urlPictures: Sequelize.STRING,
    price: Sequelize.STRING, 
    difficulty: Sequelize.STRING, 
    author: Sequelize.STRING,
    description: Sequelize.STRING, 
    quantity: Sequelize.STRING, 
    color: Sequelize.STRING,
    size: Sequelize.STRING, 
    feedback: Sequelize.STRING,
    // (object: name, rating, comment, date) 
    userGuide: Sequelize.STRING
    })
    return Catalog;
};