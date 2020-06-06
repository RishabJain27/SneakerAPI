const mongoose = require('mongoose')

const nikeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    }
})
var collectionName = 'nike'
module.exports = mongoose.model('Nike',nikeSchema, collectionName)