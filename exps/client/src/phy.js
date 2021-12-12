import React from "react";
import ReactDOM from "react-dom";
import Matter from "matter-js";
//import { ifft } from "@tensorflow/tfjs";



var particleSpeed = 3,
  playerSpeed = 5,
  particleSize = 9,
  playerSize = 18,
  sceneWidth = 600,
  infectedColor = '#333',
  cleanColor = '#e32e4a',
  numInfected = 0,
  numClean = 0,
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

const updateStats = (particles) => {
  numInfected = 0;
  numClean = 0;
  particles.forEach(p => {
    if (p.render.fillStyle === infectedColor)
      numInfected++;
    else if (p.render.fillStyle === cleanColor)
      numClean++;
  });

  //return { numClean, numInfected };
};


const createParticles = (num = 100) => {
  const particleOptions = {
    restitution: 1,
    friction: 0,
    frictionAir: 0,
    label: 'particle',
    render: {
      fillStyle: cleanColor,
    }
  };

  const player = Matter.Bodies.circle(
    // initial particle position
    Math.random() * sceneWidth,
    Math.random() * sceneHeight,
    playerSize,
    {
      restitution: 1,
      frictionAir: 0,
      inertia: Infinity,
      //isSensor: true,
      mass: 1
    }

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
    this.state = { player: null, numClean: 0, numInfected: 0 };
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

    var { particles, player } = createParticles(20);
    updateStats(particles);
        //console.log('kere');
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

    node.addEventListener('keyup', function(e) {
      if (e.key === 'ArrowRight') {
        Matter.Body.setVelocity(player, { x: 0, y: player.velocity.y })
      }
      if (e.key === 'ArrowLeft') {
        Matter.Body.setVelocity(player, { x: 0, y: player.velocity.y })
      }
      if (e.key === 'ArrowDown') {
        Matter.Body.setVelocity(player, { x: player.velocity.x, y: 0 })
      }
      if (e.key === 'ArrowUp') {
        Matter.Body.setVelocity(player, { x: player.velocity.x, y: 0 })
      }
    });


    node.addEventListener('keydown', function(e) {
      if (e.key === 'ArrowRight') {
        //console.log('kere');
        Matter.Body.setVelocity(player, { x: playerSpeed, y: player.velocity.y })
      }
      if (e.key === 'ArrowLeft') {
        Matter.Body.setVelocity(player, { x: -playerSpeed, y: player.velocity.y })
      }
      if (e.key === 'ArrowDown') {
        Matter.Body.setVelocity(player, { x: player.velocity.x, y: playerSpeed })
      }

      if (e.key === 'ArrowUp') {

        // player.force = {
        //   x: 0,
        //   y: 0.01
        // }

        Matter.Body.setVelocity(player, { x: player.velocity.x, y: -playerSpeed })
        //Matter.Body.setAngularVelocity(player, 0.1 );
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


    // an example of using collisionActive event on an engine
    Matter.Events.on(engine, 'collisionStart', function(event) {
      var pairs = event.pairs;

      // change object colours to show those in an active collision (e.g. resting contact)


      for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i];

        //console.log(pairs[i].bodyA.label);
        if (player === pairs[i].bodyA && 'particle' === pairs[i].bodyB.label) {
          //pair.bodyB.render.visible = false;
          Matter.Body.setPosition(pair.bodyB,
            {
              x: Math.random() * sceneWidth,
              y: Math.random() * sceneHeight
            });

          pair.bodyB.render.fillStyle = cleanColor;

          // pair.bodyB.position = {x: Math.random() * sceneWidth,
          //                          y: Math.random() * sceneHeight};

          updateStats(particles);
        } else if (player === pairs[i].bodyB && 'particle' === pairs[i].bodyA.label) {
          //pair.bodyA.render.visible = false;
          //pair.bodyB.render.fillStyle = '#333';
          // pair.bodyA.position = {x: Math.random() * sceneWidth,
          //                          y: Math.random() * sceneHeight};

          Matter.Body.setPosition(pair.bodyA,
            {
              x: Math.random() * sceneWidth,
              y: Math.random() * sceneHeight
            });
          pair.bodyA.render.fillStyle = cleanColor;

          updateStats(particles);
        }
      }

      player.render.visible = true;
    });

    // an example of using beforeUpdate event on an engine
    Matter.Events.on(engine, 'beforeUpdate', function(event) {
      //var engine = event.source;

      // apply infection to random every 5 secs
      if (event.timestamp % 5000 < 50) {
        particles[~~(Math.random() * 10)].render.fillStyle = infectedColor;
        //console.log(particles.length);
      }
      var collisions = Matter.Query.ray(particles, player.position,
        { x: player.position.x, y: player.position.y - (2 * playerSize) });

      for (var i = 0; i < collisions.length; i++) {
        var collision = collisions[i];
        //console.log('kere');
        collision.bodyA.render.fillStyle = '#85b41d';
        //collision.bodyB.render.fillStyle = '#85b41d';
        //collision.bodyB.fillStyle = 'Blue';
      }
      //this.setState({numClean: 8, numInfected: 9});
      //console.log(numClean, numInfected);

    })


    Matter.Events.on(render, 'afterRender', function() {
      var context = render.context,
        //bodies = Composite.allBodies(engine.world),
        startPoint = { x: 400, y: 100 },
        endPoint = { x: 500, y: 200 };


      var collisions = Matter.Query.ray(particles, startPoint, endPoint);

      Render.startViewTransform(render);

      context.beginPath();
      context.moveTo(startPoint.x, startPoint.y);
      context.lineTo(endPoint.x, endPoint.y);
      if (collisions.length > 0) {
        context.strokeStyle = '#fff';
      } else {
        context.strokeStyle = '#555';
      }


      context.lineWidth = 0.5;
      context.stroke();

      for (var i = 0; i < collisions.length; i++) {
        var collision = collisions[i];
        context.rect(collision.bodyA.position.x - 4.5, collision.bodyA.position.y - 4.5, 8, 8);
      }

      context.fillStyle = 'rgba(255,165,0,0.7)';
      context.fill();

      Render.endViewTransform(render);

    });


    World.add(engine.world, drawWalls());
    World.add(engine.world, particles);
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

    return (
      <>
        <div ref="scene" tabIndex="0" />
        <h1>
          num infected: {numInfected}
          num clean: {numClean}
        </h1>
      </>
    );

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
