const express = require('express')
const itemController = require('../controllers/itemcontroller')
const itemRoutes = express.Router()

itemRoutes.get('/all', itemController.retrieveAll)
itemRoutes.get('/:itemId', itemController.getItemById)


module.exports = itemRoutes