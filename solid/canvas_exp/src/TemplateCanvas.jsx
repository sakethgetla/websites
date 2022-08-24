
import type { Component } from 'solid-js';
// import type { Vec2  as Vec2Type } from 'planck';
import { onCleanup, onMount } from 'solid-js';
// import * as planck from 'planck';
// import { Vec2 } from 'planck';

const Gravity: Component = (props) => {
  let canvasRef: HTMLCanvasElement | undefined = undefined;
  let frame: number;
  let lastTime: number = 0;
  const FPS = 30;
  const timeStep = 1000/FPS;
    let x = 0;
  let frameSize: [number, number] = [500, 500];

  const draw = (time: number) => {
    const ctx = canvasRef?.getContext("2d") ?? null;

    if (ctx && time > lastTime + timeStep) {
      // if (ctx) {
      // console.log("here", time);
      lastTime = time;

      ctx.clearRect(0, 0, frameSize[0], frameSize[1]);
      ctx.rect(0, 0, frameSize[0], frameSize[1]);
      ctx.stroke();

      ctx.beginPath();
      ctx.rect(40+x, 40, 80, 90);
      ctx.fill();
      x++;
    }

    frame = requestAnimationFrame(draw)
  }
  onMount(() => {
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
export default Gravity;
