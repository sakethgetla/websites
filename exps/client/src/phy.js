import React from "react";
import ReactDOM from "react-dom";
import Matter from "matter-js";



var particleSpeed = 3,
  particleSize = 9,
  sceneWidth = 600,
  sceneHeight = 600;

const adjustE = function(p) {
  const baseSpeed = particleSpeed;

  if (p.speed !== 0) {
    let speedMultiplier = baseSpeed / p.speed;

    Matter.Body.setVelocity(p, {
      x: p.velocity.x * speedMultiplier,
      y: p.velocity.y * speedMultiplier
    });
  }
};


const createParticles = (num = 100) => {
  const particleOptions = {
    restitution: 1,
    friction: 0,
    frictionAir: 0,
  };

  const player = Matter.Bodies.circle(
    // initial particle position
    Math.random() * sceneWidth,
    Math.random() * sceneHeight,
    particleSize * 2,
    {restitution: 1,
     frictionAir: 0,
     inertia: Infinity,
     mass: 1}

    // particleOptions
  );
  //Matter.Body.setInertia(player, Infinity);
  var particles = [];
  for (var i = 0; i < num; i++) {

    const particle = Matter.Bodies.circle(
      // initial particle position
      Math.random() * sceneWidth,
      Math.random() * sceneHeight,

      particleSize,
      particleOptions
    );

    Matter.Body.setInertia(particle, Infinity);
    const direction = Math.random() * Math.PI * 2;

    Matter.Body.setVelocity(particle, {
      x: Math.sin(direction) * particleSpeed,
      y: Math.cos(direction) * particleSpeed
    });

    particles.push(particle);
  }

  return { particles, player };
}

class Scene extends React.Component {
  constructor(props) {
    super(props);
    this.state = { player: null };
    this.myRef = React.createRef();
  }


  componentDidMount() {
    var Engine = Matter.Engine,
      Render = Matter.Render,
      World = Matter.World;
    // Bodies = Matter.Bodies,
    // Mouse = Matter.Mouse,
    // MouseConstraint = Matter.MouseConstraint;



    var engine = Engine.create();
    engine.world.gravity.y = 0;

    var render = Render.create({
      //element: this.myRef.re,
      element: this.refs.scene,
      engine: engine,
      options: {
        width: 600,
        height: 600,
        wireframes: false,
        showAngleIndicator: true,
        background: 'transparent'

        //wireframeBackground: 'transparent'
      }
    });

    var { particles, player } = createParticles(50);
    this.setState({ player })
    let counter0 = 0;
    Matter.Events.on(engine, 'beforeUpdate', function(e) {
      if (e.timestamp >= counter0 + 500) {
        particles.forEach(function(p) {
          adjustE(p);
        });

        counter0 = e.timestamp;
      }
    });

    const node = this.refs.scene;
    node.addEventListener('keydown', function(e) {

      if (e.key === 'ArrowUp') {

        player.force = {
          x: 0,
          y: 0.01
        }

        Matter.Body.setAngularVelocity(player, 0.1 );
        // Matter.Body.applyForce(player,
        //   {
        //     x: 0,
        //     y: 1
        //   },
        //   {
        //     x: 0,
        //     y: 0.01
        //   });
      }
    })

    World.add(engine.world, drawWalls());
    //World.add(engine.world, particles);
    World.add(engine.world, [player]);
    Engine.run(engine);
    Render.run(render);
  }
  handleClick(event) {

    console.log('nes')
    if (event.key === 'Enter') {
      this.state.player.fillStyle = 'Blue';
      console.log('nes')
    }
  }

  render() {
    // if(keys[KEY_A]){
    //     let force = (-0.0004 * player.mass) ;
    //   Matter.Body.applyForce(player,player.position,{x:force,y:0});
    // }

    return <div ref="scene"
      tabIndex="0" />

  };
}


const drawWalls = function() {
  const Bodies = Matter.Bodies;
  const margin = 1;
  const wallOptions = {
    isStatic: true,
    render: {
      fillStyle: 'black',
      strokeStyle: 'white',
      lineWidth: 0
    },
    collisionFilter: {
      mask: 1
    }
  };

  return [
    // Bottom wall
    Bodies.rectangle(
      // x, y
      0, sceneHeight,
      // width, height
      sceneWidth * 2, margin,
      wallOptions
    ),
    // right wall
    Bodies.rectangle(
      // x, y
      sceneWidth, 0,
      // width, height
      margin, sceneHeight * 2,
      wallOptions
    ),
    // top wall
    Bodies.rectangle(
      // x, y
      0, 0,
      // width, height
      sceneWidth * 2, margin,
      wallOptions
    ),
    // left wall
    Bodies.rectangle(
      // x, y
      0, 0,
      // width, height
      margin, sceneHeight * 2,
      wallOptions
    ),
  ];
};


export default Scene;
