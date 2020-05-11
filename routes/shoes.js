const express = require('express')
const router = express.Router()
const Adidas = require('../models/adidas')
const Nike = require('../models/nike')
const Underarmour = require('../models/underarmour')
module.exports = router

//GET All
router.get('/', async (req, res) => {
    try {
        const adidas = await Adidas.find({})
        const underarmour = await Underarmour.find({})
        const nike = await Nike.find({})
        const combine = nike.concat(adidas).concat(underarmour)
        res.json(combine)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})