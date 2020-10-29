const express = require('express');
const app = express();

app.get('/api/user', function(req, res){
    res.send({

        name: 'john doe'
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
