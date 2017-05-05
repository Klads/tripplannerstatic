const Sequelize = require('sequelize');
const dbConnection = require('./db');

const Hotel = dbConnection.define('hotel', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  num_stars: {
  	type: Sequelize.FLOAT,
  	validate: {
  		max: 5,
  		min: 1
  	}
  },
  amenities: {
  	type: Sequelize.STRING
  }
});

module.exports = Hotel;

