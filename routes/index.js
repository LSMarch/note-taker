const express = require('express')
const noteRouter = require('./apiRoutes')

const app = express()

app.use('/notes', noteRouter)

module.exports = app