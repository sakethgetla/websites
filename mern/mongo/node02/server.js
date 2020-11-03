const express = require('express');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');

const app = express();

app.use(bodyParse.json())

const url = 'mongodb://localhost:27017';

const cars = [
    {model: "a", year: 12},
    {model: "b", year: 32},
    {model: "c", year: 38}
]

mongoose.connect( 'mongodb://localhost:27017/App', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// create schema
const carSchema = mongoose.Schema({
    brand: String,
    model: String,
    year: Number
})

const Car = mongoose.model('Car', carSchema)

app.get('api/addcar',(req,res)=>{
    console.log(req.data)
})

app.post('api/addcar',(req,res)=>{
    console.log('post car')
    console.log(req.data)

})

app.get('/api/users', (req,res)=>{
    //MongoClient.connect(url, {useUnifiedTopology: true}, (err, client)=>{
    //    client.db('Car').collection('items').insertMany(cars, (err, res)=>{
    //        if(err){
    //            return console.log(`Error: ${err}`)
    //        }
    //    })
    //    client.close()
    //})
})


const port = 3001;

app.listen(port);

