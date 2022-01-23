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
  //var visited = [];

  // function handleClick(e) {
  //   const numNodes = 10;
  //   const x=1, y=3;
  //   console.log('clicked')
  //   setVisited(x, y, true);
  //   const row = [];
  //   for (var j = 0; j < numNodes; ++j) {
  //     row.push(<Col key={j * numNodes + i}>
  //                <Vertex/>
  //     </Col>)
  //     row.push(<Vertex key={j * numNodes + 0} visited={true} gval={0} fval={0} />);
  //   }
  //   var n = (y*numNodes)+x;
  //   console.log(n, "here")
  //   setNodes(update(nodes, {eval(n) : {$set: <Vertex key={j * numNodes + 0} visited={true} gval={0} fval={0} />}}))
  //   setNodes(update(nodes, {[(y*numNodes)+x] : {$set: <Vertex key={j * numNodes + 0} visited={true} gval={0} fval={0} />}}))
  //   setNodes(update(nodes, {0: {$splice: [[2,1,<key Vertex={110} visited={true} gval={0} fval={0} />]]}})
  //   setNodes(update(nodes, { 0: { 2: { $set: <key Vertex={110} visited={true} gval={0} fval={0} /> } } }))
  //   const temp = update(nodes[0], { 0: { $set: <Vertex key={110} visited={true} gval={0} fval={0} /> } } )
  //   setNodes(update(nodes, {0: {$set: <Row key={0 * numNodes + 100} >{temp}</Row>}}))
  //   setNodes(update(nodes, { 0: { 2: { $set: <key Vertex={110} visited={true} gval={0} fval={0} /> } } }))
  //   setNodes(update(nodes, { 0: { 2: { $set: <key Vertex={110} visited={true} gval={0} fval={0} /> } } }))

  //   setNodes(update(nodes, {0: {$set: row}})

  // }


  function visit(nodes, val) {

    //const numNodes = 10;
    //
    var v = new Array(100).fill(false);
    nodes.forEach(node => {
    //let [x, y] = getPos(node);
      v[node] = true;
    })

    setVisited(v);

    //let [x, y] = getPos(node);
    //console.log(visited);
    // setVisited(update(visited, {
    //   [(y * numNodes) + x]: { $set: val }
    // }))
    //console.log((y * numNodes) + x)

    // setVisited(visited.map((item, index) => {
    //   if (index === node)
    //     return true;
    //   else
    //     return item;
    // }))

    //setVisited(visited => [...visited, val])

    //console.log(visited);
  }



  useEffect(() => {
    //displayGraph();
    //const numNodes = 10;
    // const g = [];
    // for (var i = 0; i < numNodes * numNodes; ++i) {
    //   g.push(<Vertex key={i} visited={false} gval={0} fval={0} />);
    // }
    //setNodes(g);
    //
    //visited = new Array(100).fill(false);
    //setVisited(new Array(100).fill(false))
    visit([ startNode ], true);
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
        // row.push(<Col key={j * numNodes + i}>
        //            <Vertex/>
        // </Col>)

        //if (getNode(i,j))
        row.push(<Vertex key={(i * numNodes) + j + Date.now()} visited={visited[(i * numNodes) + j]} />);
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

  // console.log(getNeighbours(3));
  // console.log(getPos(3));
  // console.log(hval(3));
  // console.log(getNeighbours(0));
  // console.log(hval(0));
  // console.log(hval(1));
  // console.log(hval(10));

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
      {/* <button onClick={() => visit(1, 3, true)}> */}
      {/*   true */}
      {/* </button> */}
      {/* <button onClick={() => visit(1, 3, false)}> */}
      {/*   false */}
      {/* </button> */}
      <button onClick={start} >
        start
      </button>
    </div>
  )
}


export default Astar;
