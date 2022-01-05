import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from 'react-grid-system';
//import DisplayGraph from './displayGraph';
import Vertex from './vertex';
import update from 'immutability-helper';


const Astar = () => {

  const [nodes, setNodes] = useState([]);


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


  function setVisited(x, y, val){

    const numNodes = 10;
    setNodes(update(nodes, {$splice: [[[(y*numNodes)+x], 1, <Vertex
                                                              key={(y*numNodes)+x+100+eval(Date.now())}
                                                        visited={val} gval={0} fval={0} />]]}))
  }

  useEffect(() => {
    // displayGraph();
    const numNodes = 10;
    const g = [];
    for (var i = 0; i < numNodes*numNodes; ++i) {
      g.push(<Vertex key={i} visited={true} gval={0} fval={0} />);
    }
    setNodes(g);
  }, []);

  const displayGraph = () => {
    const numNodes = 10;
    const g = [];
    for (var i = 0; i < numNodes; ++i) {
      const row = [];
      for (var j = 0; j < numNodes; ++j) {
        // row.push(<Col key={j * numNodes + i}>
        //            <Vertex/>
        // </Col>)
        row.push(nodes[(i*numNodes)+j]);
      }
      g.push(<Row key={i+1111} >{row}</Row>);
    }
    //setNodes(g);
    return g

  }

  return (
    <div>
      <Container>
        {displayGraph()}
      </Container>
      <button onClick={() => setVisited(1, 3, true)}>
        true
      </button>
      <button onClick={() => setVisited(1, 3, false)}>
        false
      </button>
    </div>
  )
}


export default Astar;
