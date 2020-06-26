const express = require('express')
const router = express.Router()
const Cart = require('../models/cart')
module.exports = router

//POST 
router.post('/', async (req, res) => {
    const cart = new Cart({
        key: req.body.key,
        name: req.body.name,
        image_url: req.body.image_url,
        site: req.body.site,
        category: req.body.category,
        gender: req.body.gender
    })

    try {
        const newCart = await cart.save()
        res.status(201).json(newCart);
    } catch(err) {
        res.status(400).json({message: err.message})
    }
})



