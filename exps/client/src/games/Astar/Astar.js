import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from 'react-grid-system';
//import DisplayGraph from './displayGraph';
import Vertex from './vertex';
//import update from 'immutability-helper';
import PriorityQueue from 'js-priority-queue'
import { Grid, Button, ButtonGroup, Paper } from '@mui/material';



const Astar = () => {

  const [numNodes, setNumNodes] = useState(9);
  //const [visited, setVisited] = useState(new Array(100).fill(false));
  // const [visited, setVisited] = useState([]);
  // const [path, setPath] = useState([]);
  // const [endNode, setEndNode] = useState(99);
  // const [startNode, setStartNode] = useState(0);
  // const [dead, setDead] = useState([]);

  const [algo, setAlgo] = useState('astar');
  const [nodeStatus, setNodeStatus] = useState({});
  var algosList = ['heuristic', 'dijkstra', 'astar']
  var startNode = 0;
  var endNode = (numNodes ** 2) - 1;

  function visit(node) {
    //console.log("visit: ", node, visited);
    //setVisited([...'dead'

    //setNodeStatus({node: "visited"});
    setNodeStatus(prev => { return { ...prev, [node]: "visited" } });

  }

  function makeDead(node) {
    //setNodeStatus({node: "dead"});
    //console.log("nodes", nodeStatus);
    if (isDead(node)) {
      console.log("revive", node);
      //var dd = dead.filter((d) => { return d !== node })
      //setDead(dd);
      //setNodeStatus({node: "alive"});
      setNodeStatus(prev => { return { ...prev, [node]: "alive" } });

    } else {
      //console.log("kill: ", node, dead);
      console.log("kill", node);
      //setDead([...dead, node])

      setNodeStatus(prev => { return { ...prev, [node]: "dead" } });
    }

  }

  function reset() {
    //setVisited([])
    //setDead([])
    //setPath([])
    var n = {};
    for (var i = 0; i < numNodes ** 2; ++i) {
      n[i] = "alive";
    }
    n[0] = 'startNode';
    n[-1 + (numNodes ** 2)] = 'endNode';
    setNodeStatus(n);
    console.log('reset', n)
  }


  useEffect(() => {
    //visit([ startNode ], true);
    console.log('render');
    reset();
    //console.log(nodeStatus)

  }, []);

  const getNode = ([x, y]) => {
    return (y * numNodes) + x;
  }

  // const displayGraph = () => {

  //   console.log("nodes", nodeStatus);
  //   return (
  //     <Grid container spacing={3} columns={numNodes}>
  //       {Array.apply(0, Array(numNodes ** 2)).map((x, i) => (

  //         <Grid item xs={1, {maxWidth: 1}} key={i + Date.now()}>
  //           <Vertex
  //             key={i + Date.now()}
  //             type={nodeStatus[i]}
  //             onClicked={makeDead}
  //             value={i}
  //           />

  //         </Grid>
  //       ))}
  //     </Grid>
  //   )
  // }

  const displayGraph = () => {
    return (
      <Grid container >
        {Array.apply(0, Array(numNodes)).map((x, j) => (
          <Grid container  key={ j + Date.now()} spacing={0} sx={{height: '100%'}} columns={numNodes}>
            {Array.apply(0, Array(numNodes)).map((x, i) => (
              // <Grid item sx={{height: 100, width: 100}} >
              <Grid item xs={1} key={ (j * numNodes) + i+ Date.now()} >
                <Vertex
                  key={ (j * numNodes) + i+ Date.now()}
                  type={nodeStatus[(j * numNodes) + i]}
                  onClicked={makeDead}
                  value={(j * numNodes) + i}
                />

              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    )
  }


  // const displayGraph = () => {
  //   //const numNodes = 10;
  //   //console.log('here');
  //   console.log('visited:', visited);
  //   console.log('dead:', dead);
  //   var g = [];

  //   for (var j = 0; j < numNodes; ++j) {
  //     var type = "";

  //     if (j === startNode) {
  //       type = "start"
  //     } else if (j === endNode) {
  //       type = "end"
  //     } else if (path.includes(j)) {
  //       type = "path"
  //     } else if (isVisited(j)) {
  //       type = "visited"
  //     } else if (isDead(j)) {
  //       type = "dead"
  //     } else {
  //     }

  //     g.push(
  //       <Vertex
  //         key={j + Date.now()}
  //         type={type}
  //         onClicked={makeDead}
  //         value={j}
  //       />);
  //   }


  //   return (
  //     // <Grid container rowSpacing={1} columnSpacing={{ xs: 1 }} columns={10}>
  //     <Grid container spacing={1} columns={10}>
  //       {g}
  //       {/* {g.map((v, i) => (<Grid item key={i}> */}
  //       {/*   {v} */}
  //       {/* </Grid>))} */}
  //     </Grid>
  //   );

  // }

  function isVisited(node) {
    return nodeStatus[node] === 'visited' || nodeStatus[node] === 'path'
  }

  function isDead(node) {
    console.log('is dead', nodeStatus[node])
    return nodeStatus[node] === 'dead'
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

    //const n = [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]];
    const n = [[0, -1], [-1, 0], [1, 0], [0, 1]];
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
    var visiting = {};



    //setVisited([]); doesnt work. why?
    //visited = []

    queue.queue([startNode, 0])

    while (queue.length > 0 && !found) {
      //console.log('here')

      var [node, n] = queue.dequeue();

      var neighbours = getNeighbours(node)


      var [x, y] = getPos(node);
      //visit(node);
      // visiting.push(node)
      visiting[node] = 'visited';

      // console.log(node);

      //console.log('visited', node)
      if (node === endNode) {
        found = true;
      } else {

        for (var neighbour of neighbours) {
          //console.log(neighbour)

          //if (!(neighbour in prev)) {
          if (!(neighbour in prev) || gval[neighbour] > gval[node] + 1) {
            //if (neighbour in prev && neighbour in gval && gval[neighbour] < gval[node] + 1 ){

            gval[neighbour] = gval[node] + 1;
            prev[neighbour] = node;
            //console.log('fval', gval[neighbour] , hval(neighbour))

            switch (algo) {
              case algosList[0]:
                queue.queue([neighbour, hval(neighbour)])
                break;
              case algosList[1]:
                queue.queue([neighbour, gval[neighbour]])
                break;
              case algosList[2]:
                queue.queue([neighbour, gval[neighbour] + (2 * hval(neighbour))])
                break;
              default:
                alert('algo select');
            }
            // queue.queue([neighbour, gval[neighbour] + (2 * hval(neighbour))])
            // queue.queue([neighbour, gval[neighbour]])
            // queue.queue([neighbour, hval(neighbour)])
            //}
          }
          // }
        }

      }
      //found = true

      //console.log('queue', queue)

    }

    //setVisited([...visited, path ]);
    //setVisited([...visited, ...visiting]);
    //console.log('path', path, visited);
    //setVisited([...visited, ...path])
    // path.forEach(p => {
    //   console.log('path', p)
    //   visit(p)
    // });

    //setNodeStatus(visiting);

    //setNodeStatus(prev => { return{  ...prev,[  node ]: "path"} });
    // set final path


    var pp = visiting;
    if (found) {
      var p = endNode
      pp[p] = 'path';
      while (prev[p] !== startNode) {
        //pp.push(prev[p])
        //setNodeStatus(prev => { return{  ...prev,[  node ]: "path"} });
        p = prev[p];
        pp[p] = 'path';
      }
      pp[startNode] = 'path';
      //setPath(pp);
      //console.log('set path', nodeStatus)
    }

    setNodeStatus(prevNodes => {
      console.log('set path', prevNodes)
      return { ...prevNodes, ...pp }
    });
  }

  function displayAlgosButtons() {
    var algosList = ['heuristic', 'dijkstra', 'astar']
    return (
      // <ButtonGroup variant="contained" size="large">
      // </ButtonGroup>
      <Grid container spacing={3}>
        <Grid item >
          <Button variant="contained" color={algo === algosList[0] ? 'secondary' : 'primary'} onClick={() => { setAlgo(algosList[0]) }}>
            {algosList[0]}
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color={algo === algosList[1] ? 'secondary' : 'primary'} onClick={() => { setAlgo(algosList[1]) }}>
            {algosList[1]}
          </Button>
        </Grid>
        <Grid item>
          <Button variant="contained" color={algo === algosList[2] ? 'secondary' : 'primary'} onClick={() => { setAlgo(algosList[2]) }}>
            {algosList[2]}
          </Button>
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid container spacing={4}>
      <Grid item >
        {displayAlgosButtons()}
      </Grid>
      <Grid item xs={12}>
        {displayGraph()}
        {/* </Grid> */}
      </Grid>
      <Grid item xs={1.5}>
        <Button variant="contained" onClick={() => {
          start()
        }} >
          start
        </Button>
      </Grid>
      <Grid item >
        <Button variant="contained" onClick={() => {
          reset()
        }} >
          reset
        </Button>
      </Grid>
    </Grid>
  )
}


export default Astar;
