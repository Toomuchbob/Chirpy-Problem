// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

const Sequelize = require('sequelize');

const sequelize = new Sequelize('chirpy', 'root', 'rootroot', {
  port: 3306,
  dialect: "mysql"
});

async function f() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

f();

// Export connection
module.exports = sequelize;
