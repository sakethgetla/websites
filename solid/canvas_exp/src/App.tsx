import type { Component } from 'solid-js';
import { onCleanup, onMount } from 'solid-js';
import * as planck from 'planck';
import { Vec2 } from 'planck';

// planck.testbed('VaryingRestitution', function(testbed) {
//   var pl = planck, Vec2 = pl.Vec2;
//   var world = new pl.World(Vec2(0, -10));

//   var ground = world.createBody();
//   ground.createFixture(pl.Edge(Vec2(-40.0, 0.0), Vec2(40.0, 0.0)));

//   var restitution = [ 0.0, 0.1, 0.3, 0.5, 0.75, 0.9, 1.0 ];

//   var circle = pl.Circle(1.0);

//   for (var i = 0; i < restitution.length; ++i) {
//     var ball = world.createDynamicBody(Vec2(-10.0 + 3.0 * i, 20.0));
//     ball.createFixture(circle, {
//       density: 1.0,
//       restitution: restitution[i]
//     });
//   }

//   return world;
// });
//
// var pl = planck, Vec2 = pl.Vec2;
// var world = new pl.World(Vec2(0, -10));

// var COUNT = 20;

// var ground = world.createBody();
// ground.createFixture(pl.Edge(Vec2(-40.0, 0.0), Vec2(40.0, 0.0)), 0.0);

// var a = 0.5;
// var box = pl.Box(a, a);

// var x = Vec2(-7.0, 0.75);
// var y = Vec2();
// var deltaX = Vec2(0.5625, 1.25);
// var deltaY = Vec2(1.125, 0.0);

// for (var i = 0; i < COUNT; ++i) {
//   y.set(x);
//   for (var j = i; j < COUNT; ++j) {

//     world.createDynamicBody(y).createFixture(box, 5.0);

//     y.add(deltaY);
//   }
//   x.add(deltaX);
// }

const App: Component = () => {
  let canvasRef: HTMLCanvasElement | undefined = undefined;
  let frame: number;
  let x: number = 0;
  let lastTime: number = 0;
  const FPS: number = 60;
  const ratio: number = 10;
  let circlePos: [number, number] = [1.0, 1.0];
  let radius: numbe = 1.0;
  let frameSize: [number, number] = [50.0, 50.0];


  // const gravity = planck.Vec2(0.0, 50.0);

  const world = new planck.World(planck.Vec2(0, 20));
  // const world = new planck.World({
  //   gravity: gravity,
  // })

  // Define a body with position, damping, etc.

  // const groundBodyDef = {
  //   position: planck.Vec2(0.0, -10.0)
  // };

  // Use the world object to create the body.
  // const groundBody = world.createBody(groundBodyDef);
  const groundBody = world.createBody();

  groundBody.createFixture(planck.Edge(Vec2(-40, 50), Vec2(40, 50)))
  // Define fixtures with a shape, friction, density, etc.
  // const groundBox = planck.Box(frameSize[0], frameSize[1]);
  // const groundBox = planck.Box(frameSize[0] /2, frameSize[1] /2);

  // Create fixtures on the body.
  // groundBody.createFixture(planck.Edge(planck.Vec2(-40.0, 0.0), planck.Vec2(40.0, 0.0)));
  // groundBody.createFixture(groundBox, 0.0);

  //create the dynamic body (moving / non static)
  // const body = world.createBody({
  //   type: "dynamic",
  //   position: planck.Vec2(circlePos[0], circlePos[1])
  // });


  const body = world.createDynamicBody(planck.Vec2(circlePos[0], circlePos[1]))

  // const dynamicBox = planck.Box(1.0, 1.0);
  // const dynamicBox = planck.Box(boxSize[0] /2, boxSize[1] /2);
  const dynamicCircle = planck.Circle(radius);

  // const fictureDef = {
  //   shape: dynamicBox,
  //   density: 1.0,
  //   // friction: 0.1,
  //   restitution: 0.9
  // }

  body.createFixture(dynamicCircle, {
    density: 1,
    restitution: 0.5
  });
  // done initalization, next simulation.

  // simulation

  const timestep = 1 / FPS;

  const velocityIterations = 8;
  const positionIterations = 3;


  const draw = (time: number) => {
    const ctx = canvasRef?.getContext("2d") ?? null;

    // ctx.fillstyle = "green";
    // console.log('here')
    if (ctx) {
      ctx.fillstyle = "#028888";
      x = x === FPS ? 0 : x;
      if (time > lastTime + (1000 / FPS)) {
        //
        // clear screen
        ctx.clearRect(0, 0, frameSize[0] * ratio, frameSize[1] * ratio);
        ctx.beginPath();


        world.step(timestep, velocityIterations, positionIterations);

        circlePos = [body.getPosition().x, body.getPosition().y]
        console.log(circlePos, body.getAngle());
        // console.log(body.getPosition(), body.getAngle());
        ctx.arc(circlePos[0] * ratio, circlePos[1] * ratio, radius * ratio, 0, 2 * Math.PI, false);
        // ctx.stroke();
        ctx.fill();
        // ctx.fillRect(x, 10, 150, 100);
        // ctx.arc(10 * ratio, 10 * ratio, radius * ratio, 0, 2 * Math.PI, true);

        frame = requestAnimationFrame(draw)
        x++;
        console.log('frame:', frame, x);
      }
    }

  };

  onMount(() => {
    frame = requestAnimationFrame(draw);
    console.log('frame:', frame);
    onCleanup(() => cancelAnimationFrame(frame));
  })

  return (
    <div>
      <canvas ref={canvasRef} width={frameSize[0] * ratio} height={frameSize[1] * ratio}
        style={{
          backgroundColor: "#134959",
          border: "1px solid #d3d3d3"
        }}
      />
    </div>
  );
};

export default App;
