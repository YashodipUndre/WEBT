const express = require('express');
const Router = express.Router();
const Controller = require('../Controller/WeddingReg')

Router 
     .post('/Reg',Controller.setWeddingReg)
     .post('/Check',Controller.checkWeddingemail)
exports.router = Router;