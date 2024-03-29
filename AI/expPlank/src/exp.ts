// console.log("htraies");
import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

// var planck = require('./dist/planck')

// var Vec2 = planck.Vec2;

// // Define the gravity vector.
// var gravity = Vec2(0.0, -10.0);

// // Construct a world object, which will hold and simulate the rigid bodies.
// var world = planck.World(gravity);

// // Define the ground body.
// var groundBodyDef = {
//   position: Vec2(0.0, -10.0)
// };

// // Call the body factory which allocates memory for the ground body
// // from a pool and creates the ground box shape (also from a pool).
// // The body is also added to the world.
// var groundBody = world.createBody(groundBodyDef);

// // Define the ground box shape.
// // The extents are the half-widths of the box.
// var groundBox = planck.Box(50.0, 10.0);

// // Add the ground fixture to the ground body.
// groundBody.createFixture(groundBox, 0.0);

// // Define the dynamic body. We set its position and call the body factory.
// var bodyDef = {
//     type: 'dynamic',
//     position: Vec2(0.0, 4.0),
// }
// var body = world.createBody(bodyDef);

// // Define another box shape for our dynamic body.
// var dynamicBox = planck.Box(1.0, 1.0);

// // Define the dynamic body fixture.
// var fixtureDef = {
//     shape: dynamicBox,
//     // Set the box density to be non-zero, so it will be dynamic.
//     density: 1.0,
//     // Override the default friction.
//     friction: 0.3,
// };

// // Add the shape to the body.
// body.createFixture(fixtureDef);

// // Prepare for simulation. Typically we use a time step of 1/60 of a
// // second (60Hz) and 10 iterations. This provides a high quality simulation
// // in most game scenarios.
// var timeStep = 1.0 / 60.0;
// var velocityIterations = 6;
// var positionIterations = 2;


// // This is our little game loop.
// for (var i = 0; i < 60; ++i) {
//     // Instruct the world to perform a single step of simulation.
//     // It is generally best to keep the time step and iterations fixed.
//     world.step(timeStep, velocityIterations, positionIterations);

//     // Now print the position and angle of the body.
//     var position = body.getPosition();
//     var angle = body.getAngle();

//     console.log(position.x.toFixed(2), position.y.toFixed(2), angle.toFixed(2));
// }

// console.log(Math.abs(position.x) < 0.01);
// console.log(Math.abs(position.y - 1.01) < 0.01);
// console.log(Math.abs(angle) < 0.01);
