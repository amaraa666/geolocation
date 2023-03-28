const express = require('express');
const route = express.Router();

const Restaurants = require('../controllers/restaurants.controller.js');


route.get('/res', Restaurants.getAll);
route.get('/res:_id', Restaurants.get);
route.post('/nearRes', Restaurants.getResbyNear);

route.post('/res', Restaurants.create);


module.exports = route; 