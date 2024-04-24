const express = require('express');
const ServiceController = require('../Controller/venue')
const ServicePhoController = require('../Controller/PhototGraphers')
const ServiceCloController = require('../Controller/Clothing')
const ServiceMakeController = require('../Controller/Makeup')
const ServiceDecoController = require('../Controller/Decoration')
const ServiceFoodController  =require('../Controller/Food')
const Router = express.Router()

Router
    .get('/venues/All', ServiceController.getVenues)
    .get('/venues/lawns',ServiceController.getLawnsvanue)
    .get('/venues/FarmHouse',ServiceController.getFarmHouseVenues)
    .get('/venues/lounge',ServiceController.getLounge)
    .get('/venues/weddingresort',ServiceController.getWeddingResort)
    .get('/venues/banquet hall',ServiceController.getbanquethall)
    .get('/Photos',ServicePhoController.getPhotoGraphers)
    .get('/clothing',ServiceCloController.getClothing)
    .get('/makeup',ServiceMakeController.getMakeup)
    .get('/food',ServiceFoodController.getFood)
    .get('/deco',ServiceDecoController.getDecoration)

exports.router = Router;