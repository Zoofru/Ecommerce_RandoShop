const models = require('../models')
const itemController = {}

itemController.retrieveAll = async (req, res) => {
    const item = await models.item.findAll()
    res.json({item})
}

itemController.getItemById = async (req, res) => {
    console.log(req.params.itemname);
    const item = await models.item.findOne({
        where: {
            id: req.params.itemId
        }
    })
    res.json({item})
}

module.exports = itemController