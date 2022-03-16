import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from 'react-grid-system';
import Vertex from '../vertex';



const Astar = (props) => {


  const [numNodes, setNumNodes] = useState(10);
  const [neighbours, setNeighbours] = useState([]);
  const [nodes, setNodes] = useState([]);
  const [prev, setPrev] = useState([]);
  const [gval, setGval] = useState([]);
  const [fval, setFval] = useState([]);
  const [visited, setVisited] = useState([]);

  useEffect(() => {
    console.log('use effect');
    console.log(props.children);
    //console.log(props.children[0].getLocation());


    // let neigh = [];
    // let nods =[];

    // for (var i = 0; i < numNodes * numNodes; ++i) {
    //   neigh[i] = getNeighbors(i);
    //   //nods.push(new Vertex({visited: false, gval: 0, fval: 0 }));
    // }
    // setNeighbours(neigh);
    // setNodes(nods);

    const v = new Vertex();

    console.log(v);

  }, []);

  useEffect(() => {
    console.log('here');
    //graph()
  });


  function getNeighbors(node) {
    console.log('get neighbours');
    console.log(node);
    let neigh = [];
    let x = node % numNodes, y = Math.floor(node / numNodes);
    for (var i = x - 1; i <= x + 1; ++i) {
      for (var j = y - 1; j <= y + 1; ++j) {
        if (x >= 0 && x < numNodes && y >= 0 && y < numNodes) {
          console.log('setting neighbours');
          neigh.push((j * numNodes) + i);
        }
      }
    }
    console.log(neigh);
    return neigh;
  }

  const graph = () => {
    function displayNode(i) {
      const g = []

      for (var i = 0; i < numNodes; ++i) {
        const row = [];
        for (var j = 0; j < numNodes; ++j) {
          console.log(i, j)
          row.push(<Col key={j * numNodes + i}>
                     {nodes[j * numNodes + i]}
                   </Col>)
          // if (visited[j * numNodes + i]) {
          //   row.push(<Col key={j * numNodes + i}>
          //              {/* {/\* nodes[j * numNodes + i] *\/} */}
          //              {/* nodes.map((node)=>( */}
          //              {/* <node/> */}
          //              <button>
          //                irest
          //              </button>
          //   </Col>)
          // }else {

          //   row.push(<Col key={j * numNodes + i}>
          //              {/* {/\* nodes[j * numNodes + i] *\/} */}
          //              {/* nodes.map((node)=>( */}
          //              {/* <node/> */}
          //              <button>
          //                {j+ ' ' +i}
          //              </button>
          //            </Col>)
          // }
        }
        g.push(<Row key={i * numNodes} >{row}</Row>);
      }

      return <Container> {g} </Container>;
    }

    return (

      <div>

        {/* {displayNode()} */}
      {props.children}

      </div>
    )

  }

  function visit(visitedNodes) {
    console.log(visitedNodes);
    for (let i in visitedNodes) {

      visited[i] = true;
    }

    setVisited(visited);
    console.log(visited[visitedNodes[0]]);
  }


  return (
    <>
      {graph()}
      <button onClick={() => {
        console.log(props.children[0])
        console.log(props.children[0].type.portotype.getLocation())
      }} >
        start
      </button>
    </>
  )
}

export default Astar;
