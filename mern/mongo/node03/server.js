const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();

app.use(bodyParser.json())

app.get('/api/:user', function(req, res){
    // http://localhost:3000/api/sam?year=1000
    // if i type the above in a browse
    let user = req.params.user;
    let year = req.query.year;

    res.send({
        name: user,
        year: year
    })
})

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

app.get('/api/addCar', function(req, res){
    console.log('get, addcar')
})


app.post('/api/addCar', function(req, res){
    const addcar = new Car({
        brand: req.body.brand,
        model: req.body.model,
        year: req.body.year
    })
    addcar.save((err, doc)=>{
        if (err) return console.log(err)
        console.log(doc)
    })
})


app.get('/', function(req, res){
    res.send(
        `<html>
            <body>
                <h1 style="background:red;">
                    skefhj
                <h1>
            </body>
        </html>`
    )
})
app.listen(3001)
