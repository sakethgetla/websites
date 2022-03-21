import React, { useState, useEffect } from "react";
import Button from '@mui/material/Button';


class Vertex extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props)
    // this.state = {
    //   location: this.props.location,
    //   visited: this.props.visited,
    //   gval: this.props.gval,
    //   prev: null,
    //   fval: this.props.fval,
    //   neighbours: []
    // }
    this.state = {
      visited: false
    }
  }
  handleClick() {
    // this.setState({ visited: true })
    // this.setState({ location: -1 })
    //console.log('vertex clicked')
  }

  getLocation() {
    return this.props.value;
  }

  render() {
    //console.log('vertex here')
    return (
      // <button >
      //   {this.props.value}
      // </button>
      this.props.path ?
        <Button variant="contained" onClick={() => this.props.onClicked(this.props.value)}>
          p
        </Button>
        :
      this.props.visited ?
        <Button variant="contained" onClick={() => this.props.onClicked(this.props.value)}>
          v
        </Button>
        :
        this.props.dead ?
          <Button variant="contained" onClick={() => this.props.onClicked(this.props.value)}>
            d
          </Button>
          :
          <Button variant="contained" onClick={() => this.props.onClicked(this.props.value)}>
            {this.props.value}
          </Button>
    )
  }
}

export default Vertex;
