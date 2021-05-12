import axios from 'axios';
import React, { Component } from 'react';
import { URL_SUBS } from './paths';

class Subscribe extends Component {
  state = {
    email:'',
    error: false,
    success: false,
    alreadyIn: false
  }

  handleSubmit = (event) => {
    event.preventDefault()
    // validate email
    //console.log(event)
    const email = this.state.email
    console.log(email)
    axios.get(`${URL_SUBS}?email=${email}`).then(response => {
      console.log(response.data.length);
      if(!response.data.length){
        console.log('not in database');
        axios(URL_SUBS, {
          method:'POST',
          headers:{
            'Content-Type': 'application/json'
          },
          data: JSON.stringify({email: email})
        }).then( () => {
          this.setState({
            email:''
          })
          //console.log(response.data);
        })
      } else {
        console.log('already in database');
      }
    })
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
          disclaimer
        </small>
      </div>
    )
  }
}
export default Subscribe;
