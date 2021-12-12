import React, { useState, useEffect } from "react";

class Vertex extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props)
    this.state = {
      location: 0,
      visited: this.props.visited,
      gval: this.props.gval,
      prev: null,
      fval: this.props.fval
    }
  }
  handleClick() {
    this.setState({ visited: true })
    console.log('clicked')
  }
  render() {
    console.log('vertex here')
    return (this.state.visited ?
      <button onClick={(e) => this.handleClick(e)}>
        v
      </button>
      :
      <button onClick={(e) => this.handleClick(e)}>
        {this.state.location}
      </button>
    )
  }
}

export default Vertex;
