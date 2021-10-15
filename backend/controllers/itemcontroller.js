const models = require('../models')
const itemController = {}

itemController.retrieveAll = async (req, res) => {
    const item = await models.item.findAll()
    res.json({item})
}

module.exports = itemController