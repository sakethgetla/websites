import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Vertex from './components/Vertex';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import nodeStates from './components/helper'
import PriorityQueue from 'ts-priority-queue';

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
  const startNode = 0, endNode = (graphHeight * graphWidth) - 1;
  const [nodes, setNodes] = useState<Nodes[]>(initNodesState);
  const [algo, setAlgo] = useState<'astar' | 'dijkstra' | 'heuristic'>('dijkstra');
  var queue = new PriorityQueue({ comparator: (a: number[], b: number[]) => a[0] - b[0], initialValues: [[0, startNode], [1000, endNode]] });
  var cost: number[] = new Array<number>(graphHeight * graphWidth).fill(graphHeight * graphWidth);
  var prev: number[] = new Array<number>(graphHeight * graphWidth).fill(-1);

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
      ns[id] = { id, state: nodes[id].state === nodeStates.alive ? nodeStates.dead : nodeStates.alive }

      var neigh = getNeighbours(id);
      console.log(neigh);
      for (var n of neigh) {
        ns[n] = { id: n, state: nodes[n].state === nodeStates.alive ? nodeStates.dead : nodeStates.alive }
      }

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

  function isAlive(node: number): boolean {
    return nodes[node].state === nodeStates.alive;
  }

  function inRange(x: number, y: number): boolean {
    return x >= 0 && x <= graphWidth && y >= 0 && y < graphHeight;
  }

  function getNeighbours(node: number): number[] {
    const x = graphWidth % node, y = Math.floor(graphWidth / node);
    var neighbours: number[] = [];

    for (var [nx, ny, n] of [[x + 1, y, node + 1], [x - 1, y, node - 1], [x, y - 1, node - graphWidth], [x, y + 1, node + graphWidth]]) {
      console.log(nx, ny, n);
      if ( inRange(nx, ny) && isAlive(n) ){
        neighbours.push(n);
      }

    }
    return neighbours;

  }


  function test() {
    var id = 50;
    var ns = nodes.slice();
    // ns[id] = { key: nodeCounter, id, state: nodes[id].state === nodeStates.alive ? nodeStates.dead : nodeStates.alive }
    ns[id] = { id, state: nodes[id].state === nodeStates.alive ? nodeStates.dead : nodeStates.alive }
    // setNodes(ns);
    // setNodeCounter(prev => prev + 1);

    id = 80;
    // ns = nodes.slice();
    ns[id] = { id, state: nodes[id].state === nodeStates.alive ? nodeStates.dead : nodeStates.alive }
    // ns[id] = { key: id, id, state: nodes[id].state === nodeStates.alive ? nodeStates.dead : nodeStates.alive }
    setNodes(ns);
    // setNodeCounter(prev => prev + 1);
  }

  function startSearch() {
    console.log(queue);
    console.log(queue.peek());
    console.log(cost);
    console.log(prev);

    console.log(getNeighbours(20));
    console.log(getNeighbours(35));


    // get neightbous
    // set visited


  }

  return (
    <div>
      <button onClick={() => { startSearch() }}>
        start
      </button>
      {displayGraph()}
      {/* <Box sx={{width: '100px', height: '100px', backgroundColor: 'primary.dark'}} onClick={()=> console.log("clikc")}/> */}
      <button onClick={() => { test() }}>
        test
      </button>
    </div>

  );
}

export default App;
