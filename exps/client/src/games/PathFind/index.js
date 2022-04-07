import React, { useState, useEffect } from "react";
import { Container, Grid, Button, ButtonGroup, Paper } from '@mui/material';
import NavigationIcon from '@mui/icons-material/TransferWithinAStation';
import Algo from './Algo';
import { Vertex } from './Vertex'

class PathFinder extends React.Component {
  constructor(props) {
    super(props);

    const v = Array.apply(0, Array(100)).map((x, i) => (
      <Grid item
        xs={1}
        key={i}>
        <Vertex
          type={''}
          onClicked={this.makeDead}
          value={i}
        />
      </Grid>
    ))
    this.state = {
      nodes: v

    }
  }
  makeDead(node) {
    console.log(node, this.state)
  }

  componentDidMount() {
    console.log(this.state)
    // const v = Array.apply(0, Array(100)).map((x, i) => (
    //   <Grid item
    //         xs={1}
    //         key={i}>
    //     <Vertex
    //       type={''}
    //       onClicked={this.makeDead}
    //       value={i}
    //     />
    //   </Grid>
    // ))
    //this.setState({ nodes: [v] })
  }

  handleClick() {
    console.log(this.state)
  }

  render() {
    return (
      <>
        <Grid container columns={10}>
          {this.state.nodes}
        </Grid>
        <Button onClick={() => this.handleClick()}>
          start
        </Button>
      </>
    )
  }
}

export default PathFinder;
