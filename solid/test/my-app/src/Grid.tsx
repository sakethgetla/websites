import type { Component } from 'solid-js';
// import { container, Box } from "@suid/material";
import Box from '@suid/material/Box';

const Grid: Component = (props) => {
  return (
    <div>
      {props.container &&
        <>
          <div sx={{
            display: 'grid',
            grid_auto_flow: 'row'
          }} >
            {props.children.map((child) => (
              <div sx={{
                margin: '50px',
                border: '2px solid'
              }}>

                {child}
                iets
              </div>
            ))}
          </div>
        </>
      }
      {
        props.item &&
        <>
          {props.children}
        </>
      }
    </div >
  )
}


export default Grid;
