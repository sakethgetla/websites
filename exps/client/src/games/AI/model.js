import React, { useState, useEffect } from "react";
import * as tf from '@tensorflow/tfjs';
import * as tfvis from '@tensorflow/tfjs-vis';
// import * as tf from '@tensorflow/tfjs';

const Model = () => {
  const a = tf.tensor([1, 2, 3, 4]);
  const b = a.sum(); // this is a 'chained' op.
  console.log(a.dataSync());
  console.log(b.dataSync());

  function createModel() {
    const model = tf.sequential();
    model.add(tf.layers.dense({ inputShape: [1], units: 5, useBias: true }));
    model.add(tf.layers.dense({ units: 10, useBias: true, activation: 'sigmoid' }));
    model.add(tf.layers.dense({ units: 1, useBias: true }));

    return model;
  }

  function createTestData(numSamples) {
    var inputs = [];
    var labels = [];

    for (let i = 0; i < numSamples; i++) {
      inputs.push(i);
      labels.push(Math.sin(i));
    }

    var inputTensor = tf.tensor2d(inputs, [inputs.length, 1])
    var labelTensor = tf.tensor2d(labels, [inputs.length, 1])

    const inMax = inputTensor.max();
    const inMin = inputTensor.min();
    const labMax = labelTensor.max();
    const labMin = labelTensor.min();

    const normalizecInputs = inputTensor.sub(inMin).div(inMax.sub(inMin))
    const normalizedLabels = labelTensor.sub(labMin).div(labMax.sub(labMin))

    // console.log(inputTensor.dataSync())
    // console.log(labelTensor.dataSync())

    return {
      inputs: normalizecInputs,
      labels: normalizedLabels,
      inMax,
      inMin,
      labMax,
      labMin
    };
  }

  var data = createTestData(500);
  // console.log(data.labMin.dataSync())
  // console.log(data.inputs.dataSync())
  // console.log(data.labels.dataSync())

  async function trainModel(model, inputs, labels) {
    model.compile({
      optimizer: tf.train.adam(),
      loss: tf.losses.meanSquaredError,
      metrics: ['mse']
    })

    const batchSize = 32;
    const epochs = 30;

    return await model.fit(inputs, labels, {
      batchSize,
      epochs,
      shuffle: true,
      callbacks: tfvis.show.fitCallbacks(
        {name: 'Training perf'},
        ['loss', 'mse'],
        {height: 200, callbacks: ['onEpochEnd']}
      )
    });
  }


  async function test() {
    var model = createModel();
    await trainModel(model, data.inputs, data.labels);
    console.log('done')

  }
  test();
  // console.log(trainModel(model, data.inputs, data.labels))

  return (
    <div>
      {}
      model
    </div>
  )
}


export default Model;
