import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'
import NewsList from './components/news_list'
import Footer from './components/footer'
import './styles/styles.css';
import JSON from './db.json';
import {css} from 'glamor';


class App extends Component {
    //return React.createElement('h1', { className:'title'});
    state = {
        news:JSON
    };


    render(){
        let item_back = css({
            background: 'grey'
        });
        console.log(JSON)
        console.log(this.state.news)
        return(
            <div>
            <Header/>
            <NewsList news={this.state.news}/>
            <Footer/>
            </div>
            //<h1 className="title">hwefkjhe</h1>
            //<h1>hwefkjhe</h1>
            //<h1>hwefkjhe</h1>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
