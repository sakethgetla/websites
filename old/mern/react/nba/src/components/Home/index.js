import React, { Component } from 'react';
import Slider from './slider.js';
import HomeArticles from './articles.js';
import Subscribe from '../utils/subscribe';

class Home extends Component {
  state = {
    Home:''
  }

  render(){
    return(
      <>
        <Slider/>
        <Subscribe/>
        <HomeArticles/>
      </>
    )
  }
}
export default Home;
