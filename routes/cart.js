const express = require('express')
const router = express.Router()
const Cart = require('../models/cart')
module.exports = router


//GET user
router.get('/:email', getCart, (req,res) => {
    res.send(res.cart);
})

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


async function getCart(req,res,next){
    let cart
    try {
        cart = await Cart.find({key: req.params.email})
        if(cart.length == 0){
            return res.status(404).json({message: 'Cannot find user'})
        }
    } catch (error) {
        return res.status(500).json({message: err.message})
    }

    res.cart = cart
    next()
}



