import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Vertex from './components/Vertex';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import nodeStates from './components/helper'

// interface Nodes {
//   id: number,
//   key: number,
//   state: number
// }
interface Nodes {
  id: number,
  state: number
}

function App() {
  const graphWidth = 20, graphHeight = 20;
  // const [test, setTest] = useState(12);
  // const [nodeCounter, setNodeCounter] = useState(graphHeight * graphWidth);
  const [nodes, setNodes] = useState<Nodes[]>(initNodesState);

  function initNodesState(): Nodes[] {
    console.log("init nodes States");
    var ns = [];
    for (var i = 0; i < graphHeight * graphWidth; i++) {
      ns.push({ id: i, state: nodeStates.alive })
    }
    return ns;
  }

  useEffect(() => {
    console.log("use effect");

  }, [])

  function vertexClicked(id: number): void {
    // console.log("here", id, nodes[id].key);
    if (nodes[id].state === nodeStates.alive || nodes[id].state === nodeStates.dead) {
      var ns = nodes.slice();
      // ns[id] = { key: nodeCounter, id, state: nodes[id].state === nodeStates.alive ? nodeStates.dead : nodeStates.alive }
      ns[id] = {id, state: nodes[id].state === nodeStates.alive ? nodeStates.dead : nodeStates.alive }
      setNodes(ns);
      // setNodeCounter(prev => prev + 1);
    }
  }

  function displayGraph() {
    // var a = new Array(graphHeight * graphWidth).fill(0);
    return (
      <Box sx={{ width: '90%', maxWidth: 700 }}>
        <Grid container columns={graphWidth}>
          {nodes.map((val: Nodes, i) => {
            return (
              <Grid item xs={1} key={val.id}>
                <Vertex state={val.state} onClick={() => vertexClicked(val.id)} />
              </Grid>
            )
          })}
        </Grid>
      </Box>
    );
  }

  function test(){
        var id = 50;
        var ns = nodes.slice();
        // ns[id] = { key: nodeCounter, id, state: nodes[id].state === nodeStates.alive ? nodeStates.dead : nodeStates.alive }
        ns[id] = {id, state: nodes[id].state === nodeStates.alive ? nodeStates.dead : nodeStates.alive }
        // setNodes(ns);
        // setNodeCounter(prev => prev + 1);

        id = 80;
        // ns = nodes.slice();
        ns[id] = {id, state: nodes[id].state === nodeStates.alive ? nodeStates.dead : nodeStates.alive }
        // ns[id] = { key: id, id, state: nodes[id].state === nodeStates.alive ? nodeStates.dead : nodeStates.alive }
        setNodes(ns);
        // setNodeCounter(prev => prev + 1);
  }
  return (
    <div>
      {displayGraph()}
      {/* <Box sx={{width: '100px', height: '100px', backgroundColor: 'primary.dark'}} onClick={()=> console.log("clikc")}/> */}
      <button onClick={() => { test()}}>
        test
      </button>
    </div>

  );
}

export default App;
