import React, { useState, useEffect } from "react";

class Vertex extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props)
    this.state = {
      location: this.props.location,
      visited: this.props.visited,
      gval: this.props.gval,
      prev: null,
      fval: this.props.fval,
      neighbours: []
    }
  }
  handleClick() {
    this.setState({ visited: true })
    this.setState({ location: -1 })
    console.log('clicked')
  }

  getLocation(){
    return this.state.location;
  }

  render() {
    console.log('vertex here')
    return (
      <button onClick={(e) => this.handleClick(e)}>
        {this.state.location}
      </button>
      // this.state.visited ?
      // <button onClick={(e) => this.handleClick(e)}>
      //   v
      // </button>
      // :
      // <button onClick={(e) => this.handleClick(e)}>
      //   {this.state.location}
      // </button>
    )
  }
}

export default Vertex;
