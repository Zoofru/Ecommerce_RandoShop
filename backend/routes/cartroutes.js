const express = require('express')
const cartController = require('../controllers/cartcontroller')
const cartRoutes = express.Router()

cartRoutes.post('/add', cartController.addItem)

module.exports = cartRoutes