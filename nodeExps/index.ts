import tf = require('@tensorflow/tfjs')

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

console.log(a)


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
