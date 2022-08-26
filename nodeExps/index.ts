// import tf = require('@tensorflow/tfjs')
// import { isArray, add } from 'mathjs';

// import { matrix, zeros, multiply, dotMultiply } from 'mathjs'
// import * as math from 'mathjs';
import '@tensorflow/tfjs-backend-cpu';
import * as tf from '@tensorflow/tfjs-core';








let a = tf.ones([3, 2]);
let b = tf.tensor([[ 2, 3 ]]);
let c = tf.add(a, b);
// let d = tf.
a.print();
b.print();
tf.transpose(b).print()
c.print();
tf.transpose(c).print()

// tf.matMul(tf.transpose(c), tf.ones([[  c.shape[0]  ]]));
tf.matMul(tf.transpose(c), tf.ones([3, 1])).print();
tf.sum(c, 0).print();

// tf.matMul(a, tf.transpose(b)).print();
// tf.dot(a, b).print();



tf.diag(tf.ones([5])).print();








// import math from 'mathjs'
// import { Vec2 } from 'planck';

// let a = [1,2,3,4,5];
// let b = [1,2,3,4,5];

// let am = math.matrix(a);
// let bm = math.matrix(b);
// // b.resize([ 5,1 ]);

// console.log(a);
// console.log(b);
// const c = math.dotMultiply(b, a);
// const cm = math.dotMultiply(bm, am);
// // let c = a * b;

// console.log(c);
// console.log(cm);
// // console.log(cm.subset(math.index(0)));
// console.log(math.add(am, cm));
// console.log(math.add(am, bm));
// console.log(am.get([ 1 ]));


// let d = math.matrix([a, b]);


// // d.resize([5,2])
// d = math.transpose(d);
// d.forEach(v => {
//     console.log(v)
// })

// console.log(d);
// // console.log(d.get([ 1 ]));
// console.log(math.multiply(d, math.matrix([ [1],[2] ])));

// console.log(math.multiply( math.matrix([1,2]), math.transpose(d)));
// console.log(math.multiply(d, math.matrix([ 1, 2 ])));
// console.log(math.multiply( math.transpose(d), math.matrix([1,1,1,1,1])));
// let v = math.matrix([[ 1,1 ]]);
// let d = math.random([5, 2]);
// let d = math.matrix(math.ones([5, 2]));
// let v = math.ones([1, 2]);
// let v = math.matrix(math.ones([5]));
// console.log(d);
// console.log(v);
// console.log(math.transpose(v));
// console.log(math.multiply( d, v ));
// console.log(math.multiply( d, v ));
// console.log(math.multiply( math.transpose(d), v ));
// v = math.matrix(math.ones(2, 1));
// v = math.matrix([[ 2 ], [ 1 ]]);
// console.log(d);
// console.log(v);

// console.log(math.ones(d.size()));
// console.log(math.identity(2));
// console.log(math.multiply( math.identity(2), v));
// console.log(math.multiply( math.identity(2), math.matrix([[ 2 ], [ 1 ]]) ));

// console.log(math.multiply(math.ones(d.size()), v) );
// console.log(math.add(d, math.multiply(math.ones(d.size()), v) ));


// console.log(math.transpose(d));

// console.log(math.add( d, v ));
// console.log(math.add( d, math.transpose(v) ));















// console.log(math.add( math.transpose(d), v ));
// console.log(d.map(a => math.add(a, v)));

// console.log(math.multiply( math.transpose(d), math.transpose(v) ));

// console.log(math.multiply( math.matrix([[ 1 ], [ 2 ]]), d));


// console.log(math.random(math.matrix( [ 5 ] )));
// console.log(math.random( math.matrix([2]), 10 ));




// let data: Array<Array<number>>;

// let d = { a: 1, b: 2 };

// console.log(Object.entries(d))

// console.log(tf.tensor2d([[1,1], [2,2]]))


// let a = [];
// a.push(1);
// a.push(2);
// a.push(3);
// a.push(4);
// // a.shift();

// console.log(Math.max(...a))

// console.log(add(a, 3));



// if([ ...a.map(c => c>5 ? true : false) ]){
//     console.log('works')
// }else {

//     console.log('not works')
// }



// let t = tf.tensor([1,2,3,5,6]);
// let array = t.dataSync()
// console.log(array);

// console.log(array[0]);

// a.push(tf.tensor([1,2,3,5,6]))
// a.push(tf.tensor([1,2,3,5,6]))
// a.push(tf.tensor([1,2,3,5,6]))
// a.push(tf.tensor([1,2,3,5,6]))
// a.shift()

// // let b = a[0].arraySync();
// let c = a[1].dataSync();

// a.push( a[0].concat(a[1]) )
// a[3].print()
// // let b = tf.tensor2d(a, [5, 5]);
// // let b = tf.reshape(a, [5,5])
// let b = a[3].reshape([5,2])
// b.print()
// b.max().print()
// a[3].max().print()



// var a = tf.data.array([1, 2, 3, 4, 5, 6]);
// var b = a.take(2);

// async function f() {

//     await a.forEachAsync(e => console.log(e));
//     console.log('')
//     await b.forEachAsync(e => console.log(e));
// }

// f();

// console.log(b.max())
// console.log(b.valueOf())
// console.log(isArray(b))
// console.log(isArray(c))
// console.log(typeof c)

// let b = tf.data.array(a);

// b.forEachAsync(c => c.print());
// b.batch()

// let a = tf.tensor([[1, 1, 2, 2]])

// a.print();

// a.reshape([-1]).print()
// a.unstack()[0].print()
// // console.log(a.unstack()[0].dataSync())

// // let b = tf.tensor2d([[3,3, 3,3]])
// async function func() {
//     console.log(await a.array());
// }

// func();


// let b = Array(5).fill([0, 1, 1])
// console.log(b);

// a.mul(2).print();
// a.maximum(tf.scalar(45)).print();

// b.print();
// b.add(a).print();
// console.log(a.dataSync(), b.dataSync())

// let c = zeros(5)
// c[1] = 5;
// console.log(c)

// tf.tensor2d(c);


// var a = Vec2(-1, -2);

// console.log(Array(3).fill(Array(2).fill(0)))
// console.log(Array(3).fill(0).map(()=> Math.random()))

// var norm = a.clone().add(Vec2(1,1))
// console.log(norm, a )


// console.log(a.mul(norm))
