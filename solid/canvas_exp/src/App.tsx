import type { Component } from 'solid-js';
import { onCleanup, onMount } from 'solid-js';

const App: Component = () => {
  let canvasRef: HTMLCanvasElement | undefined = undefined;
  let frame: number;
  let x: number = 0;

  const draw = (time: number) => {
    const ctx = canvasRef?.getContext("2d") ?? null;
    ctx.fillstyle = "green";
    // console.log('here')

    ctx?.clearRect(0, 0, 500, 500);
    // ctx?.beginPath(); // not sure what this does
    ctx.fillRect(x, 10, 150, 100);

    // if (ctx && isWaveAnimationRunning()) {

    frame = requestAnimationFrame(draw)
    x++;
    console.log('frame:', frame);

    // }
    // if (waveYOffset >= -WAVE_HEIGHT) {
    //   frame = requestAnimationFrame(draw);
    // } else {
    //   setIsWaveAnimationRunning(false);
    // }
  };

  onMount(() => {
    // frame = requestAnimationFrame(draw);
    console.log('frame:', frame);
    onCleanup(() => cancelAnimationFrame(frame));
  })

  return (
    <div>
      <canvas ref={canvasRef} width={500} height={500} />
    </div>
  );
};

export default App;
