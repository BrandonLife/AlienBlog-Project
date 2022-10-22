const mongoose = require('mongoose')
const {
    dbURL
} = require('./config')

module.exports = mongoose.connect(dbURL)