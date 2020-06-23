const express = require('express')
const router = express.Router()
const User = require('../models/user')
module.exports = router

//POST 
router.post('/', async (req, res) => {
    const user = new User({
        first: req.body.first,
        last: req.body.last,
        email: req.body.email,
        password: req.body.password
    })

    try {
        const newUser = await user.save()
        res.status(201).json(newUser);
    } catch(err) {
        res.status(400).json({message: err.message})
    }
})