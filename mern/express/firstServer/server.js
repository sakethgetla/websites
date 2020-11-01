const express = require('express');
const app = express();

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
app.listen(3000)
