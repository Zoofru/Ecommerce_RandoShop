const models = require('../models')
const itemController = {}

itemController.retrieveAll = async (req, res) => {
    const item = await models.item.findAll()
    res.json({item})
}

itemController.getItemById = async (req, res) => {
    try {
        const item = await models.item.findOne({
            where: {
                id: req.params.itemId
            }
        })
        res.json({item})
    } catch (error) {
        res.json({error: error.message});
    }
}

itemController.getItemsByGenre = async (req, res) => {
    console.log(req.body.genre);
    try {
        const items = await models.item.findAll({
            where: {
                genreofitem: req.body.genre
            }
        })
        res.json({items})
    } catch (error) {
        res.json({error: error.message})
    }
}

module.exports = itemController