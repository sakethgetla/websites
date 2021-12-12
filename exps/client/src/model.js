import React, { useState, useEffect } from "react";
import * as tf from '@tensorflow/tfjs';
import * as tf from '@tensorflow/tfjs';

const Model = () => {
  const a = tf.tensor([1, 2, 3, 4]);
  const b = a.sum(); // this is a 'chained' op.
  console.log(a.dataSync());
  console.log(b.dataSync());

  return (
    <div>
      model
    </div>
  )
}


export default Model;
