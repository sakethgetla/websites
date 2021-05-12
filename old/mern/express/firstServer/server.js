const express = require('express');
const bodyParser = require('body-parser');
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

app.get('/api/addCar', function(req, res){
    console.log('get, addcar')
})


app.post('/api/addCar', function(req, res){
    console.log(req.body)
    console.log('post addcar')
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
