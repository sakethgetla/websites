import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from 'react-grid-system';
//import DisplayGraph from './displayGraph';
import Vertex from './vertex';
//import update from 'immutability-helper';
import PriorityQueue from 'js-priority-queue'
import Grid from '@mui/material/Grid';



const Astar = () => {

  const [numNodes, setNumNodes] = useState(10);
  //const [visited, setVisited] = useState(new Array(100).fill(false));
  const [visited, setVisited] = useState([]);
  const [path, setPath] = useState([]);
  const [endNode, setEndNode] = useState(99);
  const [startNode, setStartNode] = useState(0);
  const [dead, setDead] = useState([]);

  function visit(node) {
    console.log("visit: ", node, visited);
    setVisited([...visited, node]);

  }

  function makeDead(node) {
    console.log("dead: ", node, dead);
    setDead([...dead, node])

  }

  function reset() {
    setVisited([])
    setDead([])
    setPath([])

  }


  useEffect(() => {
    //visit([ startNode ], true);
    console.log('render');
  });

  const getNode = ([x, y]) => {
    return (y * numNodes) + x;
  }
  const displayGraph = () => {
    //const numNodes = 10;
    //console.log('here');
    console.log('visited:', visited);
    console.log('dead:', dead);
    const g = [];

    for (var i = 0; i < numNodes**2; ++i) {
      g.push(
      <Vertex
        key={i + Date.now()}
        path={path.includes(i)}
        visited={isVisited(i)}
        dead={isDead(i)}
        value={i}
        onClicked={makeDead}
      />
      )
    }

    // for (var j = 0; j < numNodes; ++j) {
    //   const row = [];
    //   for (var i = 0; i < numNodes; ++i) {
    //     row.push(<button key={(i * numNodes) + j + Date.now()}
    //                      value={(i * numNodes) + j}
    //                      onClick={(e) => {
    //                        console.log("dead: ", e.target.value);
    //                        makeDead( parseInt(e.target.value) );
    //                      }}>
    //                {(i * numNodes) + j}
    //              </button>);

    //     console.log((j * numNodes) + i + Date.now());
    //     row.push(<Vertex
    //       key={(j * numNodes) + i + Date.now()}
    //       path={path.includes(getNode([i, j]))}
    //       visited={isVisited(getNode([i, j]))}
    //       dead={isDead(getNode([i, j]))}
    //       value={getNode([i, j])}
    //       onClicked={makeDead}
    //     />);
    //     onClick = {(e) => { console.log(e) }} />);
    //   }
    //   g.push(<Grid item xs={2} key={j + 1111} >{row}</Grid>);
    // }
    // return g;

    //setNodes(g);

    return (
      <Grid container rowSpacing={1} columnSpacing={{xs: 1}} columns={10}>
        {g.map((v, i) => (<Grid item xs={1} key={i}>
                            {v}
                          </Grid> ))}
      </Grid>
    );

  }

  function isVisited(node) {
    return visited.includes(node)
  }

  function isDead(node) {
    return dead.includes(node)
  }

  function inGraph(node) {
    if (node[0] >= 0 && node[0] < numNodes && node[1] >= 0 && node[1] < numNodes) {
      return true;
    }
    else {
      return false;

    }
  }


  function getNeighbours(node) {
    //var y = Math.floor(node/numNodes), x = node%numNodes;
    var neighs = [];
    var pos = getPos(node);

    const n = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
    // console.log(pos);

    for (const i of n) {
      var v = [pos[0] + i[0], pos[1] + i[1]];
      // console.log(i);
      // console.log(v, pos);
      if (inGraph(v) && !isDead(getNode(v))) {
        neighs.push(getNode(v));
      }
    }

    // if (node > numNodes - 1) {
    //   if (node % numNodes > 0) {
    //     neighs.push(node - numNodes - 1);
    //   }
    //   neighs.push(node - numNodes);
    //   if (node % numNodes < numNodes - 1) {
    //     neighs.push(node - numNodes + 1);
    //   }
    // }


    // if (node % numNodes > 0) {
    //   neighs.push(node - 1);
    // }
    // if (node % numNodes < numNodes - 1) {
    //   neighs.push(node + 1);
    // }


    // if (node < (numNodes ** 2) - numNodes) {
    //   if (node % numNodes > 0) {
    //     neighs.push(node + numNodes - 1);
    //   }
    //   neighs.push(node + numNodes);
    //   if (node % numNodes < numNodes - 1) {
    //     neighs.push(node + numNodes + 1);
    //   }
    // }

    return neighs;
  }
  function hval(node) {
    var [x1, y1] = getPos(endNode);
    var [x, y] = getPos(node);
    return Math.sqrt(((x1 - x) ** 2) + ((y1 - y) ** 2))
  }


  function getPos(node) {
    return [node % numNodes, Math.floor(node / numNodes)];
  }

  const start = () => {
    console.log('here');

    var queue = new PriorityQueue({ comparator: (a, b) => { return a[1] - b[1] } });
    var gval = { 0: 0 };
    //var fval = {};
    var prev = { 0: 0 };
    var found = false;
    var visiting = [];



    setVisited([]);

    queue.queue([startNode, 0])

    while (queue.length > 0 && !found) {
      //console.log('here')

      var [node, n] = queue.dequeue();

      var neighbours = getNeighbours(node)


      var [x, y] = getPos(node);
      //visit(node);
      visiting.push(node)
      // console.log(node);

      //console.log('visited', node)
      if (node === endNode) {
        found = true;
      } else {

        for (var neighbour of neighbours) {
          //console.log(neighbour)

          if (!(neighbour in prev)) {
            // if (!(neighbour in prev) || gval[neighbour] > gval[node] + 1) {
            gval[neighbour] = gval[node] + 1;
            prev[neighbour] = node;
            //console.log('fval', gval[neighbour] , hval(neighbour))

            queue.queue([neighbour, gval[neighbour] + hval(neighbour)])
          }
          // }
        }

      }
      //found = true

      //console.log('queue', queue)

    }

    //setVisited([...visited, path ]);
    setVisited([...visited, ...visiting]);
    //console.log('path', path, visited);
    //setVisited([...visited, ...path])
    // path.forEach(p => {
    //   console.log('path', p)
    //   visit(p)
    // });


    // set final path

    if (found) {
      var p = endNode
      var pp = [p];
      while (prev[p] != startNode) {
        pp.push(prev[p])
        p = prev[p];
      }
      setPath(pp);
    }


  }

  return (
    <div>
      {/* <Grid container spacing={2}> */}
        {displayGraph()}
      {/* </Grid> */}
      <button onClick={() => {
        start()
      }} >
        start
      </button>
      <button onClick={() => {
        reset()
      }} >
        reset
      </button>
    </div>
  )
}


export default Astar;
