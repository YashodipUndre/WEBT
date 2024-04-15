const express = require('express');
const Router = express.Router();
const AddtoCartCon = require('../Controller/addtocart')  
Router 
    .post('/item',AddtoCartCon.addItems)
    .post('/getItem',AddtoCartCon.getItems)
exports.router=Router;