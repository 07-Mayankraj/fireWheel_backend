const express = require('express')
const controller  = require('../controllers/cart.controller')
const cartRoute = express.Router()

cartRoute.get('/' , controller.getall)
cartRoute.post('/add', controller.addtocart)
cartRoute.delete('/delete/:id', controller.delete)


module.exports = cartRoute

