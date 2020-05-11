const express = require('express')
const router = express.Router()
const Underarmour = require('../models/underarmour')
module.exports = router

//GET All
router.get('/', async (req, res) => {
    try {
        const subscribers = await Underarmour.find({})
        res.json(subscribers)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})