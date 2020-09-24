import axios from 'axios';
import React, { Component } from 'react';

class Subscribe extends Component {
  state = {
    email:'',
    error: false,
    success: false,
    alreadyIn: false
  }

  handleSubmit = (event) => {
    event.preventDefault()
  }

  onChangeInput = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  render(){
    return(
      <div className="subscribe_panel">
        <h3>Subscribe</h3>
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.email}
              placeholder="email"
              onChange={this.onChangeInput}
            />

          </form>
        </div>
        <small>
          wakejhkewsjhf disclaimer
        </small>
      </div>
    )
  }
}
export default Subscribe;
