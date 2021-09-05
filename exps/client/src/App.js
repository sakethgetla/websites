import React, { useState, useEffect } from "react";
import Peer from 'simple-peer';
import io from "socket.io-client";
const CONNECTION_PORT = "localhost:8080";
//let socket = io.connect('/');
let socket = io.connect(CONNECTION_PORT);


const App = () => {
  //let peer1 = new Peer({initiator: true});
  //let peer2 = new Peer({initiator: false});

  const [peerSid, setPeerSid] = useState(null);
  const [id, setId] = useState(null);
  const [signal, setSignal] = useState(null);

  useEffect(() => {
    socket.on("me", (data) => {
      setId(data)
    });

    socket.on("connectUser", (data) => {
      console.log('got user connection');
    });
    //socket.on("connectUser", (data) => {
    //  console.log('got user connection');
    //  console.log(data);
    //  setSignal(data);

    //  let peer1 = new Peer({initiator: true});

    //  peer1.signal(data);
    //  peer1.on('data', (data)=>{
    //    console.log(data)
    //  })
    //
      // });
  }, []);


  const connect = () => {
    let peer1 = new Peer({initiator: true});
    peer1.on('signal', data =>{
      console.log(data);
      socket.emit('connectUser', {'signal': data, 'to': peerSid})
    })

    socket.on("connectUser", (data) => {
      console.log('connect user');
      console.log(data);
      setSignal(data);
    });

    //peer1.signal(signal);

    peer1.on('connect', ()=>{
      peer1.send(`hello from ${id}`)
    })

    peer1.on('data', (data)=>{
      console.log(data)
    })
  }
  return (
    <div>
      <div>
        {id}
      </div>
      <input
        placeholder="Message..."
        onChange={(e) => {
          setPeerSid(e.target.value);
        }}
        onKeyPress={event => {
          if (event.key === 'Enter') {
            connect();
          }
        }}
      />
    <button onClick={connect}>
      itae
    </button>
    </div>
  )
}

export default App;
