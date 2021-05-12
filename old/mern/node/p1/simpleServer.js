const http = require('http');

// server accepts requests and sends responses
const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write(
        `<html>
            <body>
                <h1 style="background:red;">
                    skefhj
                <h1>
            </body>
        </html>`
    );
    res.end();

});

server.listen(8000, '127.0.0.1');
console.log('running');

// app.js

//const http = require('http');
//
//// Create an instance of the http server to handle HTTP requests
//let app = http.createServer((req, res) => {
//    // Set a response type of plain text for the response
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//
//    // Send back a response and end the connection
//    res.end('Hello World!\n');
//});
//
//// Start the server on port 3000
//app.listen(3000, '127.0.0.1');
//console.log('Node server running on port 3000');
