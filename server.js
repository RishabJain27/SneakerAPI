const express = require('express')
const app = express()
const mongoose = require('mongoose');
const uri = "mongodb+srv://rjain9:Ilikepie16%21@cluster0-wgm3y.mongodb.net/test?retryWrites=true&w=majority";


mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true, dbName: 'Shoes'})
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

const nikeRouter = require('./routes/nikeShoes')
app.use('/nikeShoes', nikeRouter)

const adidasRouter = require('./routes/adidasShoes')
app.use('/adidasShoes', adidasRouter)

const underarmourRouter = require('./routes/underarmourShoes')
app.use('/underarmourShoes', underarmourRouter)

const shoesRouter = require('./routes/shoes')
app.use('/shoes', shoesRouter)

app.listen(3001, () => console.log('Server Started'))