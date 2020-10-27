import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';

class App extends Component {

  componentDidMount(){
    this.props.dispatch(actions.getMoviesList())
  }

  render() {
    //return (
    //  <>
    //    hello
    //  </>
    //)
     return (
      <div className="App">
        { this.props.movies.map((item)=>(
          <div key={item.id}>
            {item.name}
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
