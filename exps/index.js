const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');
const mobilenet = require('@tensorflow-models/mobilenet');
// let img = await import('./images/soilders.jpg');
// import('./images/soilders.jpg').then((m) => {
//   // console.log(m);
// });
// const img = require('./images/soilders.jpg');

// const img = document.createElement('img');
// img.src('./images/soilders.jpg');

// let img = new Image(100, 100);
// img.src = './images/soilders.jpg';

// const io = require('socket.io')(server, {
//   cors: {
//     origin: "*",
//     methods: ["GET", "POST"]
//   }
// })


function f () {
  // import im from "./images/soilders.jpg";
}


app.use(cors());
const PORT = process.env.PORT || 8080;



mobilenet.load().then(model => {
  console.log('ariet');
})


app.get("/", (req, res) => {
  res.send('get it');
  console.log('got get req');
})

// io.on('connection', (socket)=>{
//   console.log('connected');
//   socket.emit('me', socket.id);

//   socket.on('replyUser', data =>{
//     io.to(data.to).emit('replyUser', {'signal': data.signal, 'from': socket.id})
//   })
//   socket.on('connectUser', data =>{
//     io.to(data.to).emit('connectUser', {'signal': data.signal, 'from': socket.id})
//   })

// })

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
