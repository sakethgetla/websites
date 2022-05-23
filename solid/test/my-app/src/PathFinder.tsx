import type { Component } from 'solid-js';
import { createSignal, createEffect, createMemo } from 'solid-js';
import Button from "@suid/material/Button";

import Vertex from "./Vertex";

const nodeStatusType = {
  alive: 'secondary',
  visited: 'visited',
  dead: 'dead',
  path: 'path',
  startNode: 'startNode',
  endNode: 'endNode',
}


const PathFinder: Component = () => {
  let nodes: { id: number, status: string, hval: number, gval: number }[] = [];

  for (let i = 0; i < 100; i++) {
    nodes.push({ "id": i, "status": "alive", "hval": 0, "gval": 0 });
  }

  let testNodes = [];
  for (let i = 0; i < 100; i++) {
    // testing initiation a component like a noraml class.
     testNodes.push( new Vertex({"variant": "contained", "color":"Secondary", "key": 111  }))
  }

  function handleClick() {

  }

  console.log(nodes);
  return (
    <>
      {nodes.map((node) => (
      /* <Button key={i} variant="contained"> */
      /*   a */
      /*   </Button> */
        <Vertex key={node.id} variant="contained" color={nodeStatusType[node.status]} onClick={ () => console.log("clicked", node.id) } >
        {node.id}
        </Vertex>

      ))}
    </>
  )
}

export default PathFinder;
