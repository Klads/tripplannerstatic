const router = require('express').Router();
const models = require('../models');

router.get('/', function(req, res, next) {
  var contentObject = {};

  models.Hotel.findAll()
  .then(allHotels => {
    //console.log(hotels)
    contentObject.hotels = allHotels;
    return models.Restaurant.findAll()
  }).then(allRestaurants => {
  	contentObject.restaurants = allRestaurants;
  	return models.Activity.findAll()
  }).then(allActivites => {
  	res.render('index', {hotels: contentObject.hotels, restaurants: contentObject.restaurants, activities: allActivites});
  }).catch(next)
  
})

module.exports = router;