const express = require('express');
const cartController = require('./controllers/cartController');
const productController = require('./controllers/productController');
const userController = require('./controllers/userController');

const Routes = express.Router();

//Main Route
Routes.get('/', function(req,res){return res.json('ola')})
//Route to sign-up a user
Routes.post('/cad_user', userController.store) 
//Route to Create a new Product
Routes.post('/cad_prod', productController.store)
//Route to Create a new Cart
Routes.post('/cart/', cartController.store)
module.exports= Routes;
