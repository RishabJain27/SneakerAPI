const mongoose = require('mongoose')

const adidasSchema = new mongoose.Schema({
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
var collectionName = 'adidas'
module.exports = mongoose.model('Adidas',adidasSchema, collectionName)