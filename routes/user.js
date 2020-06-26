const express = require('express')
const router = express.Router()
const User = require('../models/user')
module.exports = router

//GET user
router.get('/:email/pass/:password', getUser, (req,res) => {
    res.send(res.user[0]);
})

//POST 
router.post('/', async (req, res) => {
    const user = new User({
        first: req.body.first,
        last: req.body.last,
        email: req.body.email,
        password: req.body.password
    })

    try {
        let duplicate = await User.find({email: req.body.email})
        if(duplicate.length > 0){
            return res.status(400).json({message: "Already have an account!"})
        }
        const newUser = await user.save()
        res.status(201).json(newUser);
    } catch(err) {
        res.status(400).json({message: err.message})
    }
})


async function getUser(req,res,next){
    let user
    try {
        user = await User.find({email: req.params.email,password: req.params.password})
        if(user.length == 0){
            return res.status(404).json({message: 'Cannot find user'})
        }
    } catch (error) {
        return res.status(500).json({message: err.message})
    }

    res.user = user
    next()
}

