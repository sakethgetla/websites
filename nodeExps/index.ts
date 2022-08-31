// import tf = require('@tensorflow/tfjs')
// import { isArray, add } from 'mathjs';

// import { matrix, zeros, multiply, dotMultiply } from 'mathjs'
// import * as math from 'mathjs';
import '@tensorflow/tfjs-backend-cpu';
import * as tf from '@tensorflow/tfjs-core';





// let a = tf.ones([6, 6]);
// let b = tf.tensor2d([1,2,3,4,5,6], [6,1]);

// a.print();
// b.print();


// tf.matMul(a, b).print();
// let c;
// c = tf.add(a, b);
// c = tf.add(c, tf.transpose(b));
// c.print();


// let x = tf.ones([6, 6, 2]);
// let y = tf.tensor2d([1,2,3,4,5,6, 7, 8, 9, 10, 11, 12], [6,2]);

let x = tf.zeros([6, 6, 2]);
let y = tf.randomUniform([6,2]);

y = tf.mul(y, 10);
y = tf.floor(y);
y.print();


x = tf.add(x, y);
x.print();
x = tf.sub(tf.transpose(x, [1, 0, 2]), x);

x.print();

x = tf.pow(x, 2);
x.print();
let z = tf.sum(x, 2);
z.print();
// z = tf.mul(1, z);


// z = tf.pow(z, -1.5);
z = tf.divNoNan(1, z);


z.print();

let a = tf.ones([6, 6, 2]);

a = tf.transpose(tf.mul(tf.transpose(a), tf.transpose(z)));
a.print();


tf.sum(a, 1).print();


// let a = tf.ones([6, 6, 2]);
// let b = tf.randomUniform([6,6]);
// b = tf.mul(b, 10);
// b = tf.floor(b);

// a.print()
// tf.transpose(a).print();
// b.print()

// tf.transpose(tf.mul(tf.transpose(a), tf.transpose(b))).print();

// tf.matMul(a, z).print();
