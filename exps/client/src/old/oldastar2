
import React, { useEffect, useRef } from "react";
import Astar3 from './old/astar3';

let x = 0;
export default function Astar() {
  // useEffect(() => {
  //   var c = document.getElementById("myCanvas");
  //   var ctx = c.getContext("2d");
  //   ctx.moveTo(0, 0);
  //   ctx.lineTo(200, 100);
  //   ctx.stroke();
  // }, []);

  // return (
  //   <div>
  //     <h1>HTML5 Canvas + React.js</h1>
  //     <canvas
  //       id="myCanvas"
  //       width="200"
  //       height="100"
  //       style={{ border: "1px solid #d3d3d3" }}
  //     >
  //       Your browser does not support the HTML canvas tag.
  //     </canvas>
  //   </div>
  // );

  //Function to get the mouse position
  function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top
    };
  }
  //Function to check whether a point is inside a rectangle
  function isInside(pos, rect) {
    return pos.x > rect.x && pos.x < rect.x + rect.width && pos.y < rect.y + rect.height && pos.y > rect.y
  }

  // var canvas = document.getElementById('myCanvas');
  // var context = canvas.getContext('2d');
  //The rectangle should have x,y,width,height properties
  var rect = {
    x: 250,
    y: 350,
    width: 200,
    height: 100
  };

  const canvasRef = useRef(null);

  function gameStep() {
  }
  function render() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillstyle = "green";
    console.log('here')
    ctx.fillRect(x, 10, 150, 100);
    x++;

    requestAnimationFrame(render)
  //Binding the click event on the canvas
  canvas.addEventListener('click', function(evt) {
    var mousePos = getMousePos(canvas, evt);

    if (isInside(mousePos, rect)) {
      alert('clicked inside rect');
    } else {
      alert('clicked outside rect');
    }
  }, false);
  };

  useEffect(() => {
    gameStep();
    // render();
  }, []);

  return <div>
  <canvas
    id="canvas"
    ref={canvasRef}
    height="500px"
    width="800px"
    style={{
      backgroundColor: "#134959",
      border: "1px solid #d3d3d3"
    }}
  />
           <Astar3/>
         </div>
}
