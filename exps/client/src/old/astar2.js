import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from 'react-grid-system';
//import DisplayGraph from './displayGraph';
import Vertex from './vertex';
import update from 'immutability-helper';
import PriorityQueue from 'js-priority-queue'


const Astar = () => {

  const [numNodes, setNumNodes] = useState(10);
  const [visited, setVisited] = useState(new Array(100).fill(false));
  const [endNode, setEndNode] = useState(75);
  const [startNode, setStartNode] = useState(0);
  const [dead, setDead] = useState([]);

  function visit(nodes, val) {

    var v = new Array(100).fill(false);
    nodes.forEach(node => {
    //let [x, y] = getPos(node);
      v[node] = true;
    })

    setVisited(v);

  }

  function makeDead(nodes, val) {
  }
  useEffect(() => {
    //visit([ startNode ], true);
  }, []);

  const getNode = (x, y) => {
    return (y * numNodes) + x
  }
  const displayGraph = () => {
    //const numNodes = 10;
    console.log('here');
    //console.log(visited);
    const g = [];
    for (var i = 0; i < numNodes; ++i) {
      const row = [];
      for (var j = 0; j < numNodes; ++j) {
        row.push(<Vertex key={(i * numNodes) + j + Date.now()}
                         visited={visited[(i * numNodes) + j]}
                         /* onClick={() => {makeDead([getNode(i,j)], true)}} />); */
                         onClick={(e) => {console.log(e)}} />);
      }
      g.push(<Row key={i + 1111} >{row}</Row>);
    }
    //setNodes(g);
    return g

  }


  function getNeighbours(node) {
    //var y = Math.floor(node/numNodes), x = node%numNodes;
    var neighs = [];

    if (node > numNodes - 1) {
      if (node % numNodes > 0) {
        neighs.push(node - numNodes - 1);
      }
      neighs.push(node - numNodes);
      if (node % numNodes < numNodes - 1) {
        neighs.push(node - numNodes + 1);
      }
    }


    if (node % numNodes > 0) {
      neighs.push(node - 1);
    }
    if (node % numNodes < numNodes - 1) {
      neighs.push(node + 1);
    }


    if (node < (numNodes ** 2) - numNodes) {
      if (node % numNodes > 0) {
        neighs.push(node + numNodes - 1);
      }
      neighs.push(node + numNodes);
      if (node % numNodes < numNodes - 1) {
        neighs.push(node + numNodes + 1);
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
    console.log('here');
    //var visited = [];
    var queue = new PriorityQueue({ comparator: (a, b) => { return a[1] - b[1] } });
    var gval = { 0: 0 };
    //var fval = {};
    var prev = { 0: 0 };
    var found = false;
    var path = [];




    queue.queue([startNode, 0])

    while (queue.length > 0 && !found) {
      //console.log('here')

      var [node, n] = queue.dequeue();

      var neighbours = getNeighbours(node)


      var [x, y] = getPos(node);
      //visit(node, true);
      path.push(node)

      console.log('visited', node)
      if (node === endNode) {
        found = true;
      } else {

        for (var neighbour of neighbours) {
          //console.log(neighbour)

          if (!(neighbour in prev)) {
            if (!(neighbour in prev) || gval[neighbour] > gval[node] + 1) {
              gval[neighbour] = gval[node] + 1;
              prev[neighbour] = node;
              //console.log('fval', gval[neighbour] , hval(neighbour))

              queue.queue([neighbour, gval[neighbour] + hval(neighbour)])
            }
          }
        }

      }
      //found = true

      //console.log('queue', queue)

    }

    visit(path, true);


  }

  return (
    <div>
      <Container>
        {displayGraph()}
      </Container>
      <button onClick={start} >
        start
      </button>
    </div>
  )
}


export default Astar;
