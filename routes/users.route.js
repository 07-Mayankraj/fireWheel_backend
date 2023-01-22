const express = require('express')
const controller = require('../controllers/users.controller')
const userRoute = express.Router()

userRoute.post('/register', controller.register)
userRoute.post('/login', controller.login)
userRoute.post('/users', controller.allusers)

module.exports = userRoute