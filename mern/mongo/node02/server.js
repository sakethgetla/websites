const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

const url = 'mongodb://localhost:27017'

app.get('/api/users',(req,res)=>{
    MongoClient.connect(url, {useUnifiedTopology: true}, (err, client)=>{
        if(err){
            console.log('couldnt connect')
        } else {
            console.log('connected')
        }
        client.db('Cars').collection('items').insertOne({
            model:"ford",
            year:2020
        }), (err, res)=>{
            if(err){
                console.log('not inserted')
            } else {
                console.log('inserted')
            }

        }
        client.close()
    })
})


const port = process.env.PORT || 3001;

app.listen(port);

