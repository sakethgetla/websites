import React, { Component } from 'react';
import Slider from './slider.js';
import Subscribe from '../utils/subscribe';

class Home extends Component {
  state = {
    Home:''
  }

  render(){
    return(
      <>
        <Slider/>
        HOme
        <Subscribe/>
      </>
    )
  }
}
export default Home;
