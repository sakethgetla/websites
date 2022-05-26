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

  const [found, setFound] = createSignal(false);

  let nodes: { id: number, status: string, hval: number, gval: number }[] = [];
  const gridWidth = 10;
  const startNode = 0;
  const endNode = (gridWidth ** 2) - 1;

  for (let i = 0; i < gridWidth ** 2; i++) {
    nodes.push({ "id": i, "status": nodeStatusType.alive });
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
    // console.log('dist', n1, n2);
    return Math.sqrt(((n1[0] - n2[0]) ** 2) + ((n1[1] - n2[1]) ** 2))
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


    // [priority, value]
    var queue = new PriorityQueue({ comparator: function(a, b) { return a[0] - b[0] } });
    var currNode = null;
    var foundPath = false;
    var neighbours = [];
    var gVal = {}; // the cost to tavel to that node.
    var prev = {};
    var visited = [];


    function hVal(node) {
      // the distence from this node to the endNode.
      return dist(nodeToPos(node), nodeToPos(endNode));
    }


    function fVal(node, gVal) {
      // console.log(hVal(node) + gVal[node]);
      console.log('here', hVal(node), gVal[node], node);
      // return hVal(node);
      // return (1*hVal(node)) + gVal[node];
      return (2*hVal(node)) + gVal[node];
    }

    queue.queue([hVal(startNode), startNode]);
    gVal[startNode] = 0;

    while (!foundPath && queue.length > 0) {
      currNode = queue.dequeue()[1];
      visited.push(currNode);
      if (currNode === endNode) {
        foundPath = true;
      } else {
        neighbours = getNeighbours(currNode);

        neighbours.map((neighbour) => {
          if (!gVal.hasOwnProperty(neighbour) || gVal[neighbour] > gVal[currNode] + 1) {
            // if (!(neighbour in visited)) {
            gVal[neighbour] = gVal[currNode] + 1;
            queue.queue([fVal(neighbour, gVal), neighbour]);
            prev[neighbour] = currNode;
            // if(gVal[neighbour] > gVal[currNode])
          }
        });
      }
    }


    visited.map(node => {
      nodes[node].status = nodeStatusType.visited;
    })

    if (foundPath) {
      currNode = prev[currNode];
      while (currNode != startNode) {
        nodes[currNode].status = nodeStatusType.path;
        currNode = prev[currNode];
        console.log('found');
      }

      // console.log('found');
      nodes[startNode].status = nodeStatusType.startNode;
      nodes[endNode].status = nodeStatusType.endNode;
      setFound(true);
    }
    console.log(nodes);
    console.log(visited.length);

  }

  // console.log('neighbours 8:', getNeighbours(8))
  function renderNodes() {
    return (
      <>
        {found()}
        <SimpleGrid columns={gridWidth}>
          {nodes.map((node) => (
            found() ?
              <Vertex id={node.id} key={node.id + 1000} variant="contained" color={node.status} updateNodes={updateNodes} >
                {node.id}
              </Vertex> :
              <Vertex id={node.id} key={node.id} variant="contained" color={nodeStatusType.alive} updateNodes={updateNodes} >
                {node.id}
              </Vertex>


          ))}
        </SimpleGrid>
        {console.log('rerender vertexs')}
      </>
    )
  }

  return (
    <>

      <Button variant="contained" onClick={findPath}>
        find Path
      </Button>

      {renderNodes()}
    </>
  )
}

export { PathFinder, nodeStatusType };
