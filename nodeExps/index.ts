import tf = require('@tensorflow/tfjs')
import { isArray } from 'mathjs';

// import { matrix, zeros } from 'mathjs'
// import { Vec2 } from 'planck';


// let data: Array<Array<number>>;

// let d = { a: 1, b: 2 };

// console.log(Object.entries(d))

// console.log(tf.tensor2d([[1,1], [2,2]]))


// let a = [];
// a.push(1);
// a.push(2);
// a.push(3);
// a.push(4);
// a.shift();

let a = [];
a.push(tf.tensor([1,2,3,5,6]))
a.push(tf.tensor([1,2,3,5,6]))
a.push(tf.tensor([1,2,3,5,6]))
a.push(tf.tensor([1,2,3,5,6]))
a.shift()

// let b = a[0].arraySync();
let c = a[1].dataSync();

a.push( a[0].concat(a[1]) )
a[3].print()
// let b = tf.tensor2d(a, [5, 5]);
// let b = tf.reshape(a, [5,5])
let b = a[3].reshape([5,2])
b.print()
// console.log(b)
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

// console.log(a)

// var norm = a.clone().add(Vec2(1,1))
// console.log(norm, a )


// console.log(a.mul(norm))
