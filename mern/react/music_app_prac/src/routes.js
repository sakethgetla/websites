import React from 'react';
import { BrowserRouter, Route , Link, Switch} from 'react-router-dom';

import Header from './components/header';
import Home from './components/Home';
import Artist from './components/Artist';

function Routes() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/artist/:artistId" component={Artist}/> 
                <Route path="/" component={Home}/> 
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;
