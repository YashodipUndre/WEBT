const express = require('express');
const ServiceController = require('../Controller/venue')
const ServicePhoController = require('../Controller/PhototGraphers')
const Router = express.Router()

Router
    .get('/venues/All', ServiceController.getVenues)
    .get('/venues/lawns',ServiceController.getLawnsvanue)
    .get('/venues/FarmHouse',ServiceController.getFarmHouseVenues)
    .get('/Photos',ServicePhoController.getPhotoGraphers)

exports.router = Router;