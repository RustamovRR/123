const express = require('express')
const mongoose = require('mongoose')
const usersRouter = require('./userRouter')
require('dotenv/config')

const app = express()

const DB = process.env.DB_URL
mongoose
    .connect(DB, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    })
    .then(console.log('bazaga ulandi'))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/', usersRouter)

app.listen(5000, () => {
    console.log('listen port')
})