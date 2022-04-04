import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
//import { Container, Row, Col } from 'react-grid-system';
//import DisplayGraph from './displayGraph';
import { nodeStatusType, Vertex } from './vertex';
//import update from 'immutability-helper';
import PriorityQueue from 'js-priority-queue'
import { Container, Grid, Button, ButtonGroup, Paper } from '@mui/material';
import ReplayIcon from '@mui/icons-material/Replay';
import SendIcon from '@mui/icons-material/Send';
//import NavigationIcon from '@mui/icons-material/Psychology';
import NavigationIcon from '@mui/icons-material/TransferWithinAStation';
import walking from "./walking.jpg"


const Astar = () => {

  const [numNodes, setNumNodes] = useState(10);
  const [algoSelect, setAlgoSelect] = useState('astar');
  const [nodeStatus, setNodeStatus] = useState({});
  var algosList = ['heuristic', 'dijkstra', 'astar']
  var startNode = 0;
  var endNode = (numNodes ** 2) - 1;


  function visit(node) {
    //setNodeStatus({node: "visited"});
    setNodeStatus(prev => { return { ...prev, [node]: nodeStatusType.visited } });

  }

  function makeDead(node) {
    //console.log("nodes", nodeStatus);
    if (isDead(node)) {
      //console.log("revive", node);
      setNodeStatus(prev => { return { ...prev, [node]: nodeStatusType.alive } });

    } else {
      //console.log("kill", node);
      setNodeStatus(prev => { return { ...prev, [node]: nodeStatusType.dead } });
    }

  }

  function reset() {
    var n = {};
    for (var i = 0; i < numNodes ** 2; ++i) {
      n[i] = nodeStatusType.alive;
    }
    n[0] = nodeStatusType.startNode;
    n[-1 + (numNodes ** 2)] = nodeStatusType.endNode;
    setNodeStatus(n);
    //console.log('reset', n)
  }


  useEffect(() => {
    //console.log('');
    reset();
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
      <Grid container maxWidth='sm'>
        {/* <Container maxWidth='sm'> */}
        {Array.apply(0, Array(numNodes)).map((x, j) => (
          <Grid container key={j + Date.now()} spacing={0} columns={numNodes}>
            {Array.apply(0, Array(numNodes)).map((x, i) => (
              // <Grid item sx={{ height: 100, width: 100 }} >
              <Grid item xs={1} key={(j * numNodes) + i + Date.now()} >
                <Vertex
                  key={(j * numNodes) + i + Date.now()}
                  type={nodeStatus[(j * numNodes) + i]}
                  onClicked={makeDead}
                  value={(j * numNodes) + i}
                />

              </Grid>
            ))}
          </Grid>
        ))}
        {/* </Container  > */}
      </Grid>
    )
  }



  function isVisited(node) {
    return nodeStatus[node] === nodeStatusType.visited || nodeStatus[node] === nodeStatusType.path
  }

  function isDead(node) {
    //console.log('is dead', nodeStatus[node])
    return nodeStatus[node] === nodeStatusType.dead
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
    //console.log('here');

    var queue = new PriorityQueue({ comparator: (a, b) => { return a[1] - b[1] } });
    var gval = { 0: 0 };
    //var fval = {};
    var prev = { 0: 0 };
    var found = false;
    var visiting = {};


    queue.queue([startNode, 0])

    while (queue.length > 0 && !found) {
      //console.log('here')

      var [node, n] = queue.dequeue();

      var neighbours = getNeighbours(node)


      visiting[node] = nodeStatusType.visited;

      if (node === endNode) {
        found = true;
      } else {

        for (var neighbour of neighbours) {
          if (!(neighbour in prev) || gval[neighbour] > gval[node] + 1) {
            gval[neighbour] = gval[node] + 1;
            prev[neighbour] = node;

            switch (algoSelect) {
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
          }
        }

      }

    }


    var pp = visiting;
    if (found) {
      var p = endNode
      pp[p] = nodeStatusType.path;
      while (prev[p] !== startNode) {
        //pp.push(prev[p])
        //setNodeStatus(prev => { return{  ...prev,[  node ]: "path"} });
        p = prev[p];
        pp[p] = nodeStatusType.path;
      }
      pp[startNode] = nodeStatusType.path;
      //setPath(pp);
      //console.log('set path', nodeStatus)
    }

    setNodeStatus(prevNodes => {
      //console.log('set path', prevNodes)
      return { ...prevNodes, ...pp }
    });
  }

  function displayAlgosButtons() {
    //var algosList = ['heuristic', 'dijkstra', 'astar']
    return (
      <ButtonGroup variant="contained" size="large" sx={{ margin: 1 }} >
        {algosList.map((algo, i) => {
          return (
            <Button
              key={i}
              color={algoSelect === algo ? 'secondary' : 'primary'}
              onClick={() => { setAlgoSelect(algo) }}
              /* startIcon={<ReplayIcon />} */
              startIcon={<NavigationIcon />}
            >
              {algo}

            </Button>
          )
        }
        )}
      </ButtonGroup>
    )
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {displayAlgosButtons()}
          <ButtonGroup variant="contained" size="large" sx={{ margin: 1 }}>
            <Button onClick={() => { reset() }} color={'error'} startIcon={<ReplayIcon />}>
              reset
            </Button>
            <Button onClick={() => { start() }} color={'success'} endIcon={<SendIcon />}>
              start
            </Button>
          </ButtonGroup>
        </Grid>

        {/* <Grid item xs={4}> */}
        {/*   <ButtonGroup variant="contained" size="large" > */}
        {/*     <Button variant="contained" onClick={() => { start() }} > */}
        {/*       start */}
        {/*     </Button> */}
        {/*     <Button variant="contained" onClick={() => { reset() }} > */}
        {/*       reset */}
        {/*     </Button> */}
        {/*   </ButtonGroup> */}
        {/* </Grid> */}

        <Grid item xs={12}>
          {displayGraph()}
          {/* </Grid> */}
        </Grid>

      <span style={{backgroundImage: `url(${'./grandpa.png'})`}}>
        </span>

        <img alt="" src={"/grandpa.png"}/>
      </Grid>
    </>
  )
}


export default Astar;
