const express = require('express')
const userController = require('../controllers/usercontroller')
const userRoutes = express.Router()

userRoutes.post('/ca', userController.createAccount)
userRoutes.post('/login', userController.login)
userRoutes.post('/verify', userController.verify)

module.exports = userRoutes