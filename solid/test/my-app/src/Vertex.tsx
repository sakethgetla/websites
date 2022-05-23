
import type { Component } from 'solid-js';
import { createSignal, createEffect, createMemo } from 'solid-js';
import Button from "@suid/material/Button";

const nodeStatusType = {
  alive: 'secondary',
  visited: 'visited',
  dead: 'dead',
  path: 'path',
  startNode: 'startNode',
  endNode: 'endNode',
}
const Vertex: Component = (props) => {

  console.log(props)
  function handleClick() {

  }
  return (

    <Button variant={props.variant} color={props.color} onClick={handleClick} >
      {props.id}
    </Button>
  )
}

export default Vertex;
