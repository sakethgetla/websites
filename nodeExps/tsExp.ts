
let myPromise = new Promise((myResolve, myReject) => {
    // console.log("resolving...");
    setTimeout(() => {
        if (false) {
            myResolve("resolved!");
        } else {
            myReject("rejected");
        }
    }, 3000);
});




console.log("operation 1");

myPromise.then(function(value) {
    console.log(value);
    console.log("after resolving");
    console.log("operation 3");
}).catch(value => {
    console.log(value);
    console.log("after error occured");
}).finally( ()=>{

    console.log("operation 4");
} );


console.log("operation 2");
