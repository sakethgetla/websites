// require('@tensorflow/tfjs-backend-cpu');
// var tf = require( '@tensorflow/tfjs-core');
// import * as tf from;
import '@tensorflow/tfjs-backend-cpu';
import * as tf from '@tensorflow/tfjs-core';

var Engine = function(global) {
  var doc = global.document,
    win = global.window,
    canvas = doc.createElement('canvas'),
    ctx = canvas.getContext('2d'),
    lastTime = 0;
  canvas.width = 707;
  canvas.height = 606;
  doc.body.appendChild(canvas);
  global.ctx = ctx;
  const FPS = 50;
  const timestep = 1000 / FPS;
  var x = 0;
  let frameSize = [500, 500];
  const numBodies = 15;
  // let bodies: { pos: tf.Tensor, vel: tf.Tensor, size: number };



  function init() {
    console.log('init');
    console.log('init');
    let pos = tf.randomUniform([numBodies, 2], 0, frameSize[0] * 0.2);
    let vel = tf.randomUniform([numBodies, 2], -0.1, 0.2);
    // let pos = null, vel = null;
    // vel = tf.tensor([1,2,3])
    // vel = tf.rand
    vel.print();
    bodies = { pos, vel, size: 5 };

    main();
  }


  function main() {
    // console.log('main');
    var now = Date.now(),
      dt = now - lastTime;
    // console.log('time', now, lastTime, dt);

    if (dt > timestep) {
      update();
      lastTime = now;
    }
    // render();

    // update();

    // if (game_over === true) {
    //   // refresh();
    // }

    win.requestAnimationFrame(main);
  }

  function update() {
    ctx.beginPath();

    ctx.clearRect(0, 0, frameSize[0], frameSize[1]);
    ctx.strokeRect(0, 0, frameSize[0], frameSize[1]);


    // cohesion
    let avgPos = tf.sum(bodies.pos, 0);
    avgPos = tf.sub(avgPos, bodies.pos);
    avgPos = tf.mul(avgPos, 1 / (numBodies - 1))
    avgPos = tf.sub(avgPos, bodies.pos);
    // let forces = tf.mul(avgPos, 0.001);
    // forces = tf.mul(avgPos, 0.001);
    forces = tf.divNoNan(avgPos, 500);
    // forces.print();
    bodies.vel = tf.add(bodies.vel, forces);


    // alignment
    // add all velocities

    let avgVel = tf.sum(bodies.vel, 0);
    avgVel = tf.sub(avgVel, bodies.vel);
    avgVel = tf.divNoNan(avgVel, (numBodies-1)*100);
    // avgVel = tf.mul(avgVel, 0.001/(numBodies-1));
    bodies.vel = tf.add(bodies.vel, avgVel);



    // separation

    let x = tf.zeros([numBodies, numBodies, 2]);

    x = tf.add(x, bodies.pos)
    // x.print();
    // console.log(x.shape);

    x = tf.sub(tf.transpose(x, [1, 0, 2]), x);

    let y;
    y = tf.pow(x, 2);
    y = tf.sum(y, 2);
    // y = tf.pow(y, -1.1);
    y = tf.divNoNan(1, y);
    // y.print();
    // console.log(y.shape);

    // x =
    // y = tf.clipByValue(y, 0, 10);
    // x = tf.clipByValue(x, 0, 10);
    x = tf.transpose(tf.mul(tf.transpose(x), tf.transpose(y)));

    // x.print();
    // x = tf.clipByValue(x, 0, 10);
    // x.print();

    x = tf.sum(x, 1);
    // x.print();

    bodies.vel = tf.add(bodies.vel, x);




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

    // ctx.rect(x, x, 100, 100);
    // ctx.fill();
    // // canvas.getContext('2d').begin()
    // x++;

  }


  init();
  global.ctx = ctx;

}



window.onload = function() {
  console.log('load');
  // window.onload = Engine(this);
  var a = Engine(this);
  // a.init();
}
