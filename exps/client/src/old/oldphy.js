import React from "react";
import ReactDOM from "react-dom";
import Matter from "matter-js";

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World,
      Bodies = Matter.Bodies,
      Mouse = Matter.Mouse,
      MouseConstraint = Matter.MouseConstraint;

    var engine = Engine.create({
      // positionIterations: 20
        gravity: {
          x: 0,
          y: 0,
          //grid: true,
          scale: 0.001
        },
    });

    var render = Render.create({
      element: this.refs.scene,
      engine: engine,
      options: {
        width: 600,
        height: 600,
        wireframes: false,
        background: 'transparent'
        //wireframeBackground: 'transparent'
      }
    });

    //var ballA = Bodies.circle(210, 100, 30, { restitution: 0.5 });
    var ballB = Bodies.circle(110, 50, 30, {force: {x:0.01, y:0.01}, restitution: 1.0, frictionStatic: 0, friction: 0, frictionAir: 0.0});
    //Matter.Body.setVelocity(ballB, {x: 10, y: 1});
    World.add(engine.world, [
      // walls
      Bodies.rectangle(200, 0, 600, 50, {
        isStatic: true,
        restitution: 1.0,
        render: {
          fillStyle: 'red',
          strokeStyle: 'blue',
          lineWidth: 3
        }
      }),
      Bodies.rectangle(200, 600, 600, 50, {
        restitution: 1.0,
        isStatic: true,
        render: {
          fillStyle: 'pink',
          strokeStyle: 'blue',
          lineWidth: 3
        }}),
      Bodies.rectangle(500, 300, 50, 600, { restitution: 1.0, isStatic: true }),
      Bodies.rectangle(0, 300, 50, 600, {restitution: 1.0, isStatic: true })
    ]);

    //World.add(engine.world, [ballA, ballB]);
    World.add(engine.world, [ballB]);

    // add mouse control
    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false
          }
        }
      });

    World.add(engine.world, mouseConstraint);

    Matter.Events.on(mouseConstraint, "mousedown", function(event) {
      World.add(engine.world, Bodies.circle(150, 50, 30, { restitution: 0.7 }));
    });

    Engine.run(engine);

    Render.run(render);
  }

  render() {
    return <div ref="scene" />;
  }
}
export default Scene;
