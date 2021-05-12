import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'
import NewsList from './components/news_list'
import Footer from './components/footer'
import './styles/styles.css';
import JSON from './db.json';
//import {css} from 'glamor';


class App extends Component {
    //return React.createElement('h1', { className:'title'});
    state = {
        news:JSON,
        filteredNews:JSON
    };

    //getInputs(event){
    getInputs = (event) => {
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(event.target.value) > -1
        })
        this.setState({
            filteredNews: (event.target.value === null) ? this.state.news : filtered
        })
        console.log(this.state.filteredNews)
        console.log('got it')
    }


    render(){
        console.log(JSON)
        console.log(this.state.news)
        return(
            <div>
            <Header getInputs={this.getInputs}/>
            <NewsList news={this.state.filteredNews}/>
            <Footer/>
            </div>
            //<h1 className="title">hwefkjhe</h1>
            //<h1>hwefkjhe</h1>
            //<h1>hwefkjhe</h1>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))
