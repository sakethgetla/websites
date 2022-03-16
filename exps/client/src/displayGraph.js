import React, { useState, useEffect } from "react";
//import Astar from './astar';
import Vertex from './vertex';
import { Container, Row, Col } from 'react-grid-system';

const DisplayGraph = () => {
  function t() {
    const numNodes = 10;
    const g = [];
    for (var i = 0; i < numNodes; ++i) {
      const row = [];
      for (var j = 0; j < numNodes; ++j) {
        // row.push(<Col key={j * numNodes + i}>
        //            <Vertex/>
        // </Col>)
        row.push(<Vertex key={j * numNodes + i} visited={false} gval={0} fval={0}/>);
      }
      g.push(<Row key={i * numNodes} >{row}</Row>);
    }
    return g;

  }

  return (
      <Container>
        {/* {t()} */}
      </Container>
  )
}

export default DisplayGraph;
