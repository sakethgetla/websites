
import type { Component } from 'solid-js';
// import type { Vec2  as Vec2Type } from 'planck';
import { onCleanup, onMount } from 'solid-js';
// import * as planck from 'planck';
// import { Vec2 } from 'planck';


interface Body {
  pos: [number, number];
  // pos: number<2>;
  vel: [number, number];
  // angle: number;
  size: number;
}

// let bodies: [{ x: number, y: number, vx: number, vy: number, angle: number }];

const BirdFlocking: Component = (props) => {
  let canvasRef: HTMLCanvasElement | undefined = undefined;
  let frame: number;
  let lastTime: number = 0;
  const FPS = 30;
  const timeStep = 1000 / FPS;
  let x = 0;
  let frameSize: [number, number] = [500, 500];
  let bodies: Array<Body>;

  // let bodies: Array<number[]>;
  // x, y, angle;
  // let bodies: Array<[number, number, number]>;


  const init = () => {
    bodies = [];

    for (var i = 0; i < 10; ++i) {
      let b: Body ;
      // b.pos = [frameSize[0] * 0.9 * Math.random(), frameSize[1] * 0.9 * Math.random()];
      // b. = [frameSize[0] * 0.9 * Math.random(), frameSize[1] * 0.9 * Math.random()];
      // b = { pos: [frameSize[0] * 0.9 * Math.random(), frameSize[1] * 0.9 * Math.random()], vel: [(Math.random() * 4) - 2, (Math.random() * 4) - 2], size: 10 };
      bodies.push({ pos: [frameSize[0] * 0.9 * Math.random(), frameSize[1] * 0.9 * Math.random()], vel: [(Math.random() * 4) - 2, (Math.random() * 4) - 2],  size: 10 });
    }
    // bodies.push({ pos: [100, 100], vel: [2, -2], angle: 0, size: 10 });
  }

  const draw = (time: number) => {
    const ctx = canvasRef?.getContext("2d") ?? null;

    if (ctx && time > lastTime + timeStep) {
      // if (ctx) {
      // console.log("here", time);
      lastTime = time;

      ctx.clearRect(0, 0, frameSize[0], frameSize[1]);
      ctx.strokeRect(0, 0, frameSize[0], frameSize[1]);
      // ctx.rect(0, 0, frameSize[0], frameSize[1]);
      // ctx.stroke();

      // ctx.beginPath();
      // ctx.rect(40 + x, 40, 80, 90);
      // ctx.arc()
      bodies.forEach((body) => {
        ctx.beginPath();
        ctx.lineTo(body.pos[0], body.pos[1]);
        ctx.lineTo(body.pos[0] + (10*body.vel[0]), body.pos[1] + (10*body.vel[1]));
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(body.pos[0], body.pos[1], body.size, 0, 2 * Math.PI);
        // ctx.arc(body.pos[0], body.pos[1], body.size, 0, Mat);
        body.pos[0] += body.vel[0];
        body.pos[1] += body.vel[1];
        // ctx.fill();
        ctx.stroke();
      })
      // ctx.ar
      // ctx.fill();
      x++;
    }

    frame = requestAnimationFrame(draw)
  }
  onMount(() => {
    // console.log("here");
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
