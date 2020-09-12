import React from 'react';
import { BrowserRouter, Route , Link, Switch} from 'react-router-dom';

import Header from './components/header';
import Home from './components/Home';

function Routes() {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/" component={Home}/> 
            </Switch>
        </BrowserRouter>
    )
}
export default Routes;
