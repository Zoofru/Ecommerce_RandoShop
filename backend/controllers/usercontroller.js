const models = require('../models')
const userController = {}

userController.createAccount = async (req, res) => {
    try {
        const user = await models.user.findOrCreate({
            where: {
                username: req.body.username,
                password: req.body.password,
                email: req.body.email
            }
        })
        res.json({user})
    } catch (error) {
        res.json({error})
    }
}

userController.login = async (req, res) => {
    console.log(req.body.email);
    try {
        const user = await models.user.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })

        res.json({user})
    } catch (error) {
        res.json({error: error.message})
    }
}

userController.verify = async (req,res) => {
    try {
        const user = await models.user.findOne({
            where: {
                id: req.body.id
            }
        })
        res.json({user})
    } catch (error) {
        res.json({error: error.message})
    }
}

module.exports = userController