const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const url = 'mongodb://localhost:27017';

const cars = [
    {model: "a", year: 12},
    {model: "b", year: 32},
    {model: "c", year: 38}
]
app.get('/api/users', (req,res)=>{
    MongoClient.connect(url, {useUnifiedTopology: true}, (err, client)=>{
        client.db('Car').collection('items').insertMany(cars, async (err, res)=>{
            if(err){
                return console.log(`Error: ${err}`)
            }
        })
        client.close()
    })
})


const port = process.env.PORT || 3001;

app.listen(port);

