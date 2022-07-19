import React from 'react';
import { useState, useEffect } from 'react';
import '@tensorflow/tfjs-backend-cpu';
import * as tf from '@tensorflow/tfjs';
// import {browser} as tf from '@tensorflow/tfjs';

// import logo from './logo.svg';
// import './App.css';
// import { mobilenet } from '@tensorflow-models/mobilenet';
// import mobilenet from '@tensorflow-models/mobilenet';
const mobilenet = require('@tensorflow-models/mobilenet');
// import  {MobileNet}  from '@tensorflow-models/mobilenet';
// import mobilenet  from '@tensorflow-models/mobilenet/dist/index/';
// import img from '../src/images/image001.png';
// import soildersImg from "../src/images/image001.png";
// import soildersImg from "../public/images/soilders.jpg";
// import soildersImg from './images/image001.png';
// import soildersImg from "./images/soilders.jpg";
// import soildersImg from './src/images/soilders.jpg';
// import l = require('./images/soilders.jpg');


function App() {

  // useEffect(async () => {
  useEffect(() => {

    const im = new Image();
    im.src = "./images/soilders.jpg";
    im.onload = () => {
      // const a = tf.browser.fromPixels(im, 3);
      const a = tf.browser.fromPixels(im);
      a.print();
      console.log(a.shape);
      mobilenet.load().then((model) => {
        console.log('here: ');
        model.classify(a).then((out) => {
          console.log(out);
        });
      });
    }

    // const model = await mobilenet.load();

    // mobilenet.load().then(() => {
    //   console.log('here: ');
    // });

    // var out = await model.classify(img);

    // model.classify(img).then((out) => {
    //   console.log(out);
    // });

  }, []);

  return (
    <div>
      hello
      <img src="images/soilders.jpg" alt="ietra" />
    </div>

  );
}

export default App;
