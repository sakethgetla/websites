
import React, { useState, useEffect } from "react";
import { Container, Grid, Button, ButtonGroup, Paper } from '@mui/material';

const Algo = (props) => {

  console.log(props);
  return (
    // {props}
    <Grid container columns={10}>
      {props.children.map((item, i) => {

        if (i === 10) {
          item.props.children.props.variant = 'outlined';
        }
        return {
          item
        }
      })}
    </Grid>
  )
}
export default Algo;
