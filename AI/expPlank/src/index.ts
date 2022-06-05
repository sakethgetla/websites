import * as planck from 'planck';

const gravity = planck.Vec2(0.0, -10.0);

const world = planck.World({
    gravity: gravity,
})

// Define a body with position, damping, etc.

const groundBodyDef = {
    position: planck.Vec2(0.0, -10.0)
};

// Use the world object to create the body.
const groundBody = world.createBody(groundBodyDef);

// Define fixtures with a shape, friction, density, etc.
const groundBox = planck.Box(50.0, 10.0);

// Create fixtures on the body.
groundBody.createFixture(groundBox, 0.0);

//create the dynamic body (moving / non static)
const body= world.createBody({
    type: "dynamic",
    position: planck.Vec2(0.0, 4.0)
});

const dynamicBox = planck.Box(1.0, 1.0);

const fictureDef = {
    shape: dynamicBox,
    density: 1.0,
    friction: 0.3,
}

body.createFixture(fictureDef);
// done initalization, next simulation.


// simulation

const timestep = 1/60;

const velocityIterations = 8;
const positionIterations = 3;

for (let i = 0; i < 60 ; i++){
    world.step(timestep, velocityIterations, positionIterations);
    console.log(body.getPosition(), body.getAngle());
}
