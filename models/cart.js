const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    key: {
        type: String,
        required: true
    },
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
var collectionName = 'cart'
module.exports = mongoose.model('Cart',cartSchema, collectionName)