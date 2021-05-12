import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

import Functional from './functional'

class App extends Component {

  componentDidMount(){
    this.props.dispatch(actions.getMoviesList())
  }

  render() {
    //return (
    //  <>
    //    hello
    //  </>
    //)//
    console.log(this.props)
     return (
      // <>
      // </>
      <div className="App">
        <Functional/>
        { this.props.movies.map((item)=>(
          <div key={item.id}>
            {item.title}
          </div>
        )) }
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    movies: state.movies
  }
}

export default connect(mapStateToProps)( App );
