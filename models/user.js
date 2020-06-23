const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    first: {
        type: String,
        required: true
    },
    last: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})
var collectionName = 'user'
module.exports = mongoose.model('User',userSchema, collectionName)