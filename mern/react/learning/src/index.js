import React from 'react';
import ReactDOM from 'react-dom';

import Header from './components/header'
import NewsList from './components/news_list'
import './styles/styles.css';

const App = () => {
    //return React.createElement('h1', { className:'title'});
    return(
        <div>
        <Header/>
        <NewsList/>
        </div>
    )
        //<h1 className="title">hwefkjhe</h1>
        //<h1>hwefkjhe</h1>
        //<h1>hwefkjhe</h1>
}

ReactDOM.render(<App/>, document.getElementById('root'))
