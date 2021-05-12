const os = require('os');
const fs = require('fs');

let user = os.userInfo();
console.log(user)

let message = 'write message'

fs.appendFile('createFile.txt', message, function(err){
    if(err){
        console.log('didnt create file')
    }
})
