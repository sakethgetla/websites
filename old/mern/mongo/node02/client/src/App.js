import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {

  //componentDidMount(){
  //  axios.get('/api/users').then(response => {
  //    console.log(response.data)
  //  })
  //}

  onCarSubmit = () =>{
    console.log('button clicked')

    axios.post('/api/addCar', {
      brand: 'foed',
      model: 'facon',
      year: 3
    }).then(response=>{
      console.log(response.data)
    })
  }

  render(){
    return (
      <>
        <h1>Hello</h1>
        <button onClick={()=>this.onCarSubmit()}>
          add Car
        </button>
      </>
    );
  }

}

export default App;
