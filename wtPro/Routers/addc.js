const express = require('express');
const Router = express.Router();
const {addItems,getItems,deleteItem} = require('../Controller/addtocart')  
Router 
    .post('/item',addItems)
    .post('/getItem',getItems)
    .delete('/deleteItem/:id',deleteItem);
    
exports.router=Router;