const { modalUnstyledClasses } = require('@mui/core')
const models = require('../models')
const cartController = {}

cartController.addItem = async (req, res) => {
    try {
        const cart = await models.shoppingcart.create({
            itemid: req.body.itemId,
            userid: req.body.userId
        })
        res.json({cart})
    } catch (error) {
        res.json({error: error.message})
    }
}

module.exports = cartController