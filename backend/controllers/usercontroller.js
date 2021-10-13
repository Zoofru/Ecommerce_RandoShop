const models = require('../models')
const userController = {}

userController.createAccount = async (req, res) => {
    try {
        const [user, created] = await models.user.findOrCreate({
            where: {
                username: req.body.username,
                password: req.body.password
            }
        })
        if (!created) {
            res.json('Exists')
        }
        await res.json({user})
    } catch (error) {
        res.json({error: error.message})
    }
}

module.exports = userController