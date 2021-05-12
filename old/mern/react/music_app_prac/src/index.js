import React from 'react';
//import { BrowserRouter, Route , Link, Switch} from 'react-router-dom';
import Routes from './routes.js';
import ReactDOM from 'react-dom';

//function Index() {
//    console.log('hello')
//    return (
//        <>
//            <Header/>
//        </>
//    )
//}

ReactDOM.render(
    <Routes/>,
    document.getElementById('root')
);
