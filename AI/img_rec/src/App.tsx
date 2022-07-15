import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import { mobilenet } from '@tensorflow-models/mobilenet';
import mobilenet from '@tensorflow-models/mobilenet';
// import  {MobileNet}  from '@tensorflow-models/mobilenet';
// import mobilenet  from '@tensorflow-models/mobilenet/dist/index/';
// import img from './images/image001.png';
import { useState, useEffect } from 'react';


function App() {

  // useEffect(async () => {
  useEffect(() => {
    // const model = await mobilenet.load();
    mobilenet.load().then((model)=> {

    });
    // var out = await model.classify(img);

    // model.classify(img).then((out) => {
    //   console.log(out);
    // });

  })

  return (
    <div>
      hello
    </div>
  );
}

export default App;
