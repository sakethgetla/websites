import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'
import NewsList from './components/news_list'
import './styles/styles.css';
import JSON from './db.json';


class App extends Component {
    //return React.createElement('h1', { className:'title'});
    state = {
        news:JSON
    }
    render(){
        console.log(JSON)
        console.log(this.state.news)
        return(
            <div>
            <Header/>
            <NewsList news={this.state.news}/>
            </div>
            //<h1 className="title">hwefkjhe</h1>
            //<h1>hwefkjhe</h1>
            //<h1>hwefkjhe</h1>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
