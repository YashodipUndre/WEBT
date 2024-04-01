const express = require('express');
const ServiceController = require('../Controller/Service')
const Router = express.Router()

Router
    .get('/venues', ServiceController.getVenues)

exports.router = Router;