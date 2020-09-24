import React from 'react';
import Home from './components/Home';
import Header from './components/header';
import Footer from './components/footer';
import { BrowserRouter, Route , Link, Switch} from 'react-router-dom';

const Routes = () => {
  return(
    <BrowserRouter>
      <Header/>
      <Switch>
        <Route path="/" component={ Home }/>
      </Switch>
      <Footer/>
    </BrowserRouter>
  )
}
export default Routes;
