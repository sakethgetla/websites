var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("hello world");
});

app.post('/hello', (req, res)=>{
    res.send('you called post at /hello')
});

app.listen(8000);
