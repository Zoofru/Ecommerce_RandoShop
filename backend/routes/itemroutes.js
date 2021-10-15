const express = require('express')
const itemController = require('../controllers/itemcontroller')
const itemRoutes = express.Router()

itemRoutes.get('/all', itemController.retrieveAll)


module.exports = itemRoutes