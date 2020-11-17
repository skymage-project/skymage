module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        firstName: Sequelize.STRING,
        lastName: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.STRING,
        dateOfBirth: Sequelize.STRING,
        country: Sequelize.STRING,
        phoneNumber: Sequelize.INTEGER,
        status: Sequelize.STRING,
    });
  
    return User;
  };