import * as planck from 'planck';

let gravity = planck.Vec2(0.0, -10.0);

let world = planck.World({
    gravity: gravity,
})

// Define a body with position, damping, etc.

let groundBodyDef = {
    position: planck.Vec2(0.0, -10.0)
};

// Use the world object to create the body.
let groundBody = world.createBody(groundBodyDef);

// Define fixtures with a shape, friction, density, etc.
let groundBox = planck.Box(50.0, 10.0);

// Create fixtures on the body.
groundBody.createFixture(groundBox, 0.0);

//create the dynamic body (moving / non static)
let body= world.createBody({
    type: "dynamic",
    position: planck.Vec2(0.0, 4.0)
});

let dynamicBox = planck.Box(1.0, 1.0);

let fictureDef = {
    shape: dynamicBox,
    density: 1.0,
    friction: 0.3,
}

body.createFixture(fictureDef);
// done initalization, next simulation.


// simulation

let timestep = 1/60;

let velocityIterations = 8;
let positionIterations = 3;

for (let i = 0; i < 60 ; i++){
    world.step(timestep, velocityIterations, positionIterations);
    console.log(body.getPosition(), body.getAngle());
}
