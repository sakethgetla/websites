
import type { Component } from 'solid-js';
// import type { Vec2  as Vec2Type } from 'planck';
import { onCleanup, onMount } from 'solid-js';
import * as math from "mathjs";
// import * as planck from 'planck';
// import { Vec2 } from 'planck';


interface Body {
  pos: math.Matrix;
  vel: math.Matrix;
  // angle: number;
  size: number;

  // function get
}

// let bodies: [{ x: number, y: number, vx: number, vy: number, angle: number }];

const BirdFlocking: Component = (props) => {
  let canvasRef: HTMLCanvasElement | undefined = undefined;
  let frame: number;
  let lastTime: number = 0;
  const FPS = 30;
  const numBodies = 10;
  const timeStep = 1000 / FPS;
  let x = 0;
  let frameSize: [number, number] = [500, 500];
  // let bodies: Array<Body>;
  let bodies: { pos: math.Matrix, vel: math.Matrix, size: number };

  // let bodies: Array<number[]>;
  // x, y, angle;
  // let bodies: Array<[number, number, number]>;


  const init = () => {

    let pos = math.random(math.matrix([numBodies, 2]), frameSize[0] * 0.1, frameSize[0] * 0.9);
    let vel = math.random(math.matrix([numBodies, 2]), -1, 1);

    bodies = { pos, vel, size: 10 };

    // for (var i = 0; i < numBodies; ++i) {
    //   // let b: Body ;
    //   // b.pos = [frameSize[0] * 0.9 * Math.random(), frameSize[1] * 0.9 * Math.random()];
    //   // b. = [frameSize[0] * 0.9 * Math.random(), frameSize[1] * 0.9 * Math.random()];
    //   // b = { pos: [frameSize[0] * 0.9 * Math.random(), frameSize[1] * 0.9 * Math.random()], vel: [(Math.random() * 4) - 2, (Math.random() * 4) - 2], size: 10 };
    //   // let pos = [frameSize[0] * (0.1 + ( 0.8 * Math.random() )), frameSize[1] * (0.1 + ( 0.8 * Math.random() ))];
    //   // let vel = [(Math.random() * 4) - 2, (Math.random() * 4) - 2];

    //   let pos = math.random(math.matrix([2]), frameSize[0] * 0.1, frameSize[0] * 0.9)
    //   let vel = math.random(math.matrix([2]), -10, 10);
    //   // let vel = [(Math.random() * 4) - 2, (Math.random() * 4) - 2];

    //   let size = 10;
    //   bodies.push({ pos, vel, size });
    //   // bodies.push({ pos: [frameSize[0] * 0.9 * Math.random(), frameSize[1] * 0.9 * Math.random()], vel: [(Math.random() * 4) - 2, (Math.random() * 4) - 2],  size: 10 });
    // }
    // bodies.push({ pos: [100, 100], vel: [2, -2], angle: 0, size: 10 });

    console.log(bodies);
  }

  function updateForces(bodies: Array<Body>): [number, number] {
    return [1, 1];
  }

  const draw = (time: number) => {
    const ctx = canvasRef?.getContext("2d") ?? null;

    if (ctx && time > lastTime + timeStep) {
      lastTime = time;

      ctx.clearRect(0, 0, frameSize[0], frameSize[1]);
      ctx.strokeRect(0, 0, frameSize[0], frameSize[1]);
      bodies.pos = math.add(bodies.pos, bodies.vel);


      for (var i = 0; i < numBodies; ++i) {
        ctx.beginPath();
        // console.log(bodies.pos.get([i, 0]), bodies.pos.get([i, 1]));
        ctx.arc(bodies.pos.get([i, 0]), bodies.pos.get([i, 1]), bodies.size, 0, 2 * Math.PI);
        ctx.moveTo(bodies.pos.get([i, 0]), bodies.pos.get([i, 1]))
        ctx.lineTo(20*bodies.vel.get([i, 0]) + bodies.pos.get([i, 0]), 20*bodies.vel.get([i, 1]) + bodies.pos.get([i, 1]))
        ctx.stroke();
      }

    }

    frame = requestAnimationFrame(draw)
  }
  onMount(() => {
    console.log("start");
    init();
    frame = requestAnimationFrame(draw);
    console.log(frame);
    onCleanup(() => cancelAnimationFrame(frame));
  })

  return (
    <div>
      <canvas ref={canvasRef} width={frameSize[0]} height={frameSize[1]} />
    </div>
  )
}
export default BirdFlocking;
