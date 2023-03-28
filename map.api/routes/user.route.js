

const express = require('express');
const route = express.Router();

const User = require('../controllers/user.controller');

route.post('/user', User.create);
route.get('/user', User.getAll);


module.exports = route;