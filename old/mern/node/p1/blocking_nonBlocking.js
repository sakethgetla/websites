const fs = require('fs')

// blocking
const data = fs.readFileSync('./createFile.txt', 'utf8')

//// non blocking
//const data = fs.readFile('./createFile.txt', 'utf8', (err, data)=>{
//    if(err) throw error;
//    console.log(data)
//});

console.log(data)
console.log('hello')
