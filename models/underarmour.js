const mongoose = require('mongoose')

const underarmourSchema = new mongoose.Schema({
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
var collectionName = 'underarmour'
module.exports = mongoose.model('Underarmour',underarmourSchema, collectionName)