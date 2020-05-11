const express = require('express')
const router = express.Router()
const Adidas = require('../models/adidas')
module.exports = router

//GET All
router.get('/', async (req, res) => {
    try {
        const adidas = await Adidas.find({})
        res.json(adidas)
    } catch(err) {
        res.status(500).json({message: err.message})
    }
})