const dbConnection = require('./db');
const Hotel = require('./hotel');
const Activity = require('./activity');
const Restaurant = require('./restaurant');
const Place = require('./place');

Hotel.belongsTo(Place);
Restaurant.belongsTo(Place);
Activity.belongsTo(Place);


module.exports = {
  db: dbConnection,
  Hotel: Hotel,
  Activity: Activity,
  Restaurant: Restaurant,
  Place: Place
};