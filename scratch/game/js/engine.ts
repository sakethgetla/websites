var Engine = function(global) {
    var doc = global.document,
        win = global.window,
        canvas = doc.createElement('canvas'),
        ctx = canvas.getContext('2d'),
        lastTime;
    canvas.width = 707;
    canvas.height = 606;
    doc.body.appendChild(canvas);
    global.ctx = ctx;
    console.log('here');

}

window.onload = function() {
    // window.onload = Engine(this);
    Engine(this);
}


console.log('here');


let frame: number;
frame = 4;

console.log('here', frame);
frame = 'aires';
console.log('here', frame);
