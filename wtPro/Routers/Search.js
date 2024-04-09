const express = require('express');
const SearchController = require('../Controller/Search')
const Router = express.Router()
Router 
     .get('/All',SearchController.getSearchv)
  

exports.router = Router;