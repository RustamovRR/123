const axios = require("axios");
const router = require('express').Router()
const User = require('./models/users')

router.get('/bot/api', async (req, res) => {
    let users = await User.find()
    res.json(users)
})

router.post('/bot/api', async (req, res) => {
    try {
        let user = new User({
            username: req.body.username,
            nickname: req.body.nickname,
            id: req.body.id
        })
        const saved = await user.save()
        res.json(saved)

    } catch (error) {
        res.status(500).send(error.message)
    }

})

router.delete('/bot/api:id', async (req, res) => {
    let user = await User.findByIdAndDelete(req.params.id)
    res.json(user)
})

module.exports = router