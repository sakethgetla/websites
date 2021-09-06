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
  const [peerSignal, setPeerSignal] = useState({});
  const [recieveCall, setRecieveCall] = useState(false);

  useEffect(() => {
    console.log('use effect');
    socket.on("me", (data) => {
      setId(data)
    });

    //socket.on("connectUser", (data) => {
    //  console.log('got user connection');
    //});
    socket.on("connectUser", (data) => {
      console.log('got user connection');
      setPeerSignal(JSON.stringify(data.signal));
      setPeerSid(data.from);
      console.log(data);
      console.log(data.signal);
      console.log(JSON.stringify(data.signal));
      console.log(peerSignal);

      ansCall(data.signal, data.from);
      //ansCall(JSON.stringify(data.signal), data.from);

      //let peer1 = new Peer({initiator: true});
      //peer1.signal(data.signal);
      //peer1.on('signal', thisSignal =>{
      //  console.log('got signal');
      //  console.log(thisSignal);
      //  socket.emit('replyUser', {'signal': thisSignal, 'to': data.from})
      //})
      //console.log('here');
      ////peer1.send('hey peer2, how is it going?')
      //peer1.on('connect', () => {
      //  // wait for 'connect' event before using the data channel
      //  console.log('2 send');
      //  peer1.send('hey peer2, how is it going?')
      //  console.log('sending');
      //})

      //peer1.on('data', (data)=>{
      //  console.log(data)
      //  //peer1.send(`hello from ${id}`)
      //})
    })
    //
      // });
    console.log('used effect');
  }, []);


  const ansCall = (signalfrompeer, idfrompeer) => {
    let peer1 = new Peer({initiator: false});
    console.log(signalfrompeer);
    peer1.signal(signalfrompeer);
    console.log('answering call');

    peer1.on('signal', thisSignal =>{
      console.log('got signal');
      console.log(thisSignal);
      socket.emit('replyUser', {'signal': thisSignal, 'to': idfrompeer})
    })
    console.log('here');
    //peer1.send('hey peer2, how is it going?')
    peer1.on('connect', () => {
      // wait for 'connect' event before using the data channel
      console.log('sending');
      console.log(JSON.stringify(`hello from ${id}`));
      //peer1.send('hey peer2, how is it going?')
      peer1.send(JSON.stringify(`hello from ${id}`))
    })

    peer1.on('data', (data)=>{
      console.log('reciving');
      console.log('' + data)
      console.log(data)
      //console.log(JSON.stringify(data))
      //peer1.send(`hello from ${id}`)
    })
  }
  const callUser = () => {
    let peer1 = new Peer({initiator: true});
    peer1.on('signal', data =>{
      console.log('signal user');
      console.log(data);
      socket.emit('connectUser', {'signal': data, 'to': peerSid})
    })

    socket.on("replyUser", (data) => {
      setPeerSignal(data.signal);
      console.log('replyUser user');
      console.log(data);
      console.log(peerSignal);
      peer1.signal(data.signal);
    });

    peer1.on('connect', ()=>{
      console.log('connected')
      peer1.send(JSON.stringify(`hello from ${id}`))
      console.log('sending');
      console.log(JSON.stringify(`hello from ${id}`))
    })

    peer1.on('data', (data)=>{
      //setPeerSignal(JSON.stringify(data.signal));
      console.log('reciving');
      console.log('' + data)
      console.log(data)
      //console.log(JSON.stringify(data))
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
      />
    <button onClick={callUser}>
      itae
    </button>
    </div>
  )
}

export default App;
