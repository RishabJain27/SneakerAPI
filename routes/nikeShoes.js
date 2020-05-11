const express = require('express')
const router = express.Router()
const Nike = require('../models/nike')
module.exports = router

//GET All
router.get('/', async (req, res) => {
    try {
        const subscribers = await Nike.find({})
        res.json(subscribers)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})