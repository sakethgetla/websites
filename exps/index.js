const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');

const io = require('socket.io')(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
})

app.use(cors());
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
  res.send('get it');
  console.log('got get req');
})

io.on('connection', (socket)=>{
  console.log('connected');
  socket.emit('me', socket.id);

  socket.on('replyUser', data =>{
    io.to(data.to).emit('replyUser', {'signal': data.signal, 'from': socket.id})
  })
  socket.on('connectUser', data =>{
    io.to(data.to).emit('connectUser', {'signal': data.signal, 'from': socket.id})
  })

})

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
