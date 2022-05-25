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

  function inGraph(pos) {
    return pos[0] >= 0 && pos[0] < gridWidth && pos[1] >= 0 && pos[1] < gridWidth
  }
  function isDead(node) {
    return nodes[node].status === nodeStatusType.dead;
  }

  function posToNode(pos) {
    return (pos[1] * gridWidth) + pos[0];
  }

  function nodeToPos(node) {
    return [node % gridWidth, Math.floor(node / gridWidth)];
  }

  function getNeighbours(node) {
    var neighbours = [];
    // var neighbour = [];
    var pos = nodeToPos(node);
    [[0, -1], [-1, 0], [1, 0], [0, 1]].map(([i, j]) => {
      var neighbour = [];
      neighbour = [pos[0] + i, pos[1] + j];
      if ((i !== 0 || j !== 0) && inGraph(neighbour) && !isDead(posToNode(neighbour))) {
        neighbours.push(posToNode(neighbour));
      }
    });

    return neighbours;
  }



  // console.log(dist([1, 2], [4, 6]));
  //dist([1, 2], [4, 6])
  function findPath() {

    function hValue(node1) {
      return dist(nodeToPos(startNode), nodeToPos(endNode))
    }

    // [priority, value]
    var queue = new PriorityQueue({ comparator: function(a, b) { return b[0] - a[0] } });


    queue.queue([hValue(startNode), startNode]);

    while (false) {

    }
  }

  // console.log('neighbours 8:', getNeighbours(8))
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

      <button onClick={() => console.log('findpath', findPath())}>
        h
      </button>
    </>
  )
}

export { PathFinder, nodeStatusType };
