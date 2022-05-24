import type { Component } from 'solid-js';
import { createSignal, createEffect, createMemo } from 'solid-js';
import Button from "@suid/material/Button";
//import Grid from "@suid/material/Grid";

// import Grid from "./Grid";
import Vertex from "./Vertex";
import { SimpleGrid } from "@hope-ui/solid";
import PriorityQueue from "ts-priority-queue";

const nodeStatusType = {
  alive: 'secondary',
  visited: 'primary',
  dead: 'error',
  path: 'warning',
  startNode: 'success',
  endNode: 'success',
}


const PathFinder: Component = () => {
  let nodes: { id: number, status: string, hval: number, gval: number }[] = [];
  const gridWidth = 10;
  const startNode = 0;
  const endNode = (gridWidth ** 2) - 1;

  for (let i = 0; i < gridWidth ** 2; i++) {
    nodes.push({ "id": i, "status": nodeStatusType.alive, "hval": 0, "gval": 0 });
  }
  nodes[startNode].status = nodeStatusType.startNode;
  nodes[endNode].status = nodeStatusType.endNode;


  function updateNodes(id, status) {
    console.log("update Nodes", id, status);

    nodes[id].status = status;
    // console.log("clicked", node.id)
    console.log(nodes)
  }

  const dist = ((n1, n2) => {
    console.log('dist', n1, n2);
    return (
      Math.sqrt(((n1[0] - n2[0]) ** 2) + ((n1[1] - n2[1]) ** 2))
    )
  })

 // console.log(dist([1, 2], [4, 6]));
  //dist([1, 2], [4, 6])
  function findPath() {

    while (false){

    }
  }

  function renderNodes() {
    return (

      <>
        <SimpleGrid columns={gridWidth}>
          {nodes.map((node) => (
            <Vertex id={node.id} key={node.id} variant="contained" color={node.status} updateNodes={updateNodes} >
              {node.id}
            </Vertex>
          ))}
        </SimpleGrid>
      </>
    )
  }

  return (
    <>

      {renderNodes()}
    </>
  )
}

export { PathFinder, nodeStatusType };
