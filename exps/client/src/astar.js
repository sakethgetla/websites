import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from 'react-grid-system';
import Vertex from './vertex';


const Astar = (props) => {


  const [numNodes, setNumNodes] = useState(10);
  const [neighbours, setNeighbours] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [prev, setPrev] = useState([]);
  const [gval, setGval] = useState([]);
  const [fval, setFval] = useState([]);
  const [visited, setVisited] = useState(Array(100).fill(false));


  function t() {
    const numNodes = 10;
    const g = [];
    for (var i = 0; i < numNodes; ++i) {
      const row = [];
      for (var j = 0; j < numNodes; ++j) {
        // row.push(<Col key={j * numNodes + i}>
        //            <Vertex/>
        // </Col>)
        //
        //setVisited(...true)
        row.push(<Vertex key={j * numNodes + i} visited={visited[j * numNodes + i]} gval={0} fval={0} />);
      }
      g.push(<Row key={i * numNodes} >{row}</Row>);
    }
    return g;

  }

  useEffect(() => {
    console.log('here')
    setVisited(visited.map((item, index) => {
      if (index === 0) {
        console.log('found')
        //item = true;
        return true;
      }else{
        return false;
      }
    }))

    console.log(visited[0], '<<<<')
    console.log(visited)
  }, []);

  useEffect(() => {
  });
  console.log(props.children.props.children[0].props.children[0].props);
  //props.children.props.children[0].props.children[0].props.visited = true;
  //

  return (
    <>
      {/* {graph()} */}
      {/* {props.children} */}
      <Container>
        {t()}
      </Container>
      <button> start </button>
    </>
  )
}

export default Astar;
