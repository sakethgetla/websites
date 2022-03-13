
import React, { useEffect, useRef } from "react";

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


  const canvasRef = useRef(null);

  useEffect(() => {
    function render() {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.fillstyle = "green";
      console.log('here')
      ctx.fillRect(x, 10, 150, 100);
      x++;

      requestAnimationFrame(render)
    };
    //render();
  }, []);

  return <canvas
    id="canvas"
    ref={canvasRef}
    height="500px"
    width="800px"
    style={{
      backgroundColor: "#134959",
      border: "1px solid #d3d3d3"
    }}
  />
}
