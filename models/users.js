const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    nickname: {
        type: String,
    },
    id: {
        type: String,
    },
})

module.exports = mongoose.model('User', userSchema)