import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import JSON from './db.json'

import Header from './components/header';
import NewsList from './components/news_list';
// import Footer from './components/footer';
import Lifecycles from './components/lifecycles';

class App extends Component {

    state = {
        news:JSON,
        filtered:[],
        footerText:'I am a happy footer',
        visible: true
    }

    getKeywords = (event) => {
        let keywords = event.target.value;
        let filtered = this.state.news.filter((item)=>{
            return item.title.indexOf(keywords) > -1
        })

        this.setState({
            filtered
        })
    }

    toggleComp(){
        this.setState({
            visible: !this.state.visible
        })
    }


    render(){ 
        const state = this.state;
        let newsFiltered = state.filtered
        let newsAll = state.news

        return (
            <div>
                <Header keywords={this.getKeywords}/> 
                <NewsList news={newsFiltered.length === 0 ? newsAll : newsFiltered }>
                    <br/>
                    <h1>I am a children</h1>
                </NewsList>

                <button onClick={() => this.toggleComp()}>Toggle it</button>
                <br/>

                { this.state.visible ?
                    <Lifecycles/>
                    :
                    null
                }
        
                {/* <Footer footerText={this.state.footerText}/> */}
            </div>
        
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))