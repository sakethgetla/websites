// require('@tensorflow/tfjs-backend-cpu');

import type { Component } from 'solid-js';
// import type { Vec2  as Vec2Type } from 'planck';
import { onCleanup, onMount } from 'solid-js';
// import * as math from "mathjs";
// import * as planck from 'planck';
// import { Vec2 } from 'planck';



import '@tensorflow/tfjs-backend-cpu';
import * as tf from '@tensorflow/tfjs-core';
// import * as tf from '@tensorflow/tfjs';
// import tt from '@tensorflow/tfjs-backend-cpu';

// interface Body {
//   pos: math.Matrix;
//   vel: math.Matrix;
//   // angle: number;
//   size: number;

//   // function get
// }

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
  let bodies: { pos: tf.Tensor, vel: tf.Tensor, size: number };

  // let bodies: Array<number[]>;
  // x, y, angle;
  // let bodies: Array<[number, number, number]>;


  const init = () => {

    // let a = tf.tensor([1, 1, 1, 1]);
    // a.print();

    // let pos = math.random(math.matrix([numBodies, 2]), frameSize[0] * 0.1, frameSize[0] * 0.9);
    // let vel = math.random(math.matrix([numBodies, 2]), -1, 1);


    let pos = tf.randomUniform([numBodies, 2], frameSize[0] * 0.1, frameSize[0] * 0.9);
    let vel = tf.randomUniform([numBodies, 2], -5, 5);
    // let vel = tf.rand([numBodies, 2]);
    bodies = { pos, vel, size: 10 };
    // pos.print();
    // vel.print();

    // console.log(bodies);
  }

  // function updateForces(bodies: {  pos: math.Matrix, vel: math.Matrix, size: number }): [number, number] {
  // function updateForces(bodies: { pos: tf.Tensor, vel: tf.Tensor, size: number }): void {
  function updateForces(): void {

    // *make the boids go to the centre*
    // let centreScreen = tf.tensor([[ frameSize[0]/2, frameSize[1]/2 ]]);
    // let dirVec = tf.sub(centreScreen, bodies.pos);
    // let forces = tf.mul(dirVec, 0.001);
    // bodies.vel = tf.add(bodies.vel, forces);



  }

  const draw = (time: number) => {
    const ctx = canvasRef?.getContext("2d") ?? null;

    if (ctx && time > lastTime + timeStep) {
      lastTime = time;

      ctx.clearRect(0, 0, frameSize[0], frameSize[1]);
      ctx.strokeRect(0, 0, frameSize[0], frameSize[1]);

      updateForces();

      let pos = bodies.pos.bufferSync();
      let dirPos = tf.add(bodies.pos, tf.mul(bodies.vel, 15)).bufferSync();

      for (var i = 0; i < numBodies; ++i) {
        ctx.beginPath();
        ctx.arc(pos.get(i, 0), pos.get(i, 1), bodies.size, 0, 2 * Math.PI);
        ctx.moveTo(pos.get(i, 0), pos.get(i, 1));
        ctx.lineTo(dirPos.get(i, 0), dirPos.get(i, 1));
        ctx.stroke();
      }


      bodies.pos = tf.add(bodies.pos, bodies.vel);
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
