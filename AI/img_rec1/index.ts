const app = require('express')();
const server = require('http').createServer(app);
const cors = require('cors');
const mobilenet = require('@tensorflow-models/mobilenet');
// import '@tensorflow/tfjs-backend-cpu';
import '@tensorflow/tfjs-node';
import * as url from '../images/image001.png';

// const img = require('./images/soilders.jpg');
// const img = require('./images/image001.png');

app.use(cors());
const PORT = process.env.PORT || 8080;


// const img = document.getElementById('img');

// let img = document.createElement('img');
// img.src = './images/soilders.jpg';
// Load the model.
// const model = await mobilenet.load();

// var model = mobilenet.load();

// mobilenet.load().then((model) => {

mobilenet.load().then(() => {
    console.log('here: ');
});

// Classify the image.
// const predictions = await model.classify(img);

console.log('Predictions: ');
// console.log(predictions);

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
