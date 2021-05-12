const express = require('express');
const app = express();
//const {MongoClient} = require('mongodb');

//
//const mongoUri = 'mongodb+srv://admin:admin@cluster0.huayt.mongodb.net?retryWrites=true&w=majority'

app.get('/api/users', async(req, res)=>{
    try {
        await client.connect();
        const database = client.db('myapp')
        const collection = database.collection('users')
        const query = await collection.insertOne({
            name: "kaefjs",
            lastname: "Jones"
        })
        res.status(200).json({awesome:'yes'})
    } catch(error){
        throw error
    } finally {
        await client.close()
        console.log('done')
    }
})

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://admin:admin@cluster0.huayt.mongodb.net/final_website?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useUnifiedTopology : true, useNewUrlParser: true });

client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log('connected')
    client.close();
});

//MongoClient.connect(mongoUri, { useUnifiedTopology : true }, (err, client)=>{
//    if(err){
//        throw err;
//    }
//    console.log('connected')
//})

const port = process.env.PORT || 3001;
app.listen(port)
