const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

const app = express();


// middleware
app.use(bodyParser.json())

//model
const {User} = require('./models/user')


mongoose.connect('mongodb://localhost:27017/AuthApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
mongoose.set('useCreateIndex', true)

// routes
app.post('/api/user', (req, res)=>{
    console.log('posting')
    const user = new User({
        email: req.body.inputEmail,
        passord: req.body.password
    })

    user.save((err, doc)=>{
        if(err) res.status(400).send(err)
        res.status(200).send(doc)
    })
})

const port = 3000
app.listen(port, ()=>{
    console.log('server running ' + port)
})
