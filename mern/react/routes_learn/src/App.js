import React from 'react';
import { BrowserRouter, Route , Link, Switch} from 'react-router-dom';

import Home from './components/home.js';
import Posts from './components/posts.js';
import PostItem from './components/postItem.js';
import Profile from './components/profile.js';

function App() {
  return (
    <BrowserRouter >
        <header>
            <Link to="/">HOME</Link> <br/>
            <Link to="/posts">POSTS</Link> <br/>
            <Link to="/profile">PROFILE</Link> <br/>
        </header>
        <br/>
        <Switch>
            <Route path="/posts/:id" component={PostItem}/>
            <Route path="/posts" component={Posts}/>
            <Route path="/profile" component={Profile}/>
            <Route path="/" component={Home}/>
        </Switch>
      

        <br/>
        : hello
    </BrowserRouter>
  );
}

export default App;
