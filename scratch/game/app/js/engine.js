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

}

window.onload = function () {
    // window.onload = Engine(this);
    Engine(this);
}


  console.log('here');
  console.log('here');
  console.log('here');
