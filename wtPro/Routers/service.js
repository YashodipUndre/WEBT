const express = require('express');
const ServiceController = require('../Controller/venue')
const Router = express.Router()

Router
    .get('/venues/All', ServiceController.getVenues)
    .get('/venues/lawns',ServiceController.getLawnsvanue)
    .get('/venues/FarmHouse',ServiceController.getFarmHouseVenues)

exports.router = Router;