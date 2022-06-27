import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//import Astar from './Astar';
// import PathFinder from './games/oldPathFind/PathFind';
 import PathFinder from './games/PathFind/PathFind';
//import DisplayGraph from './old/displayGraph';
import Scene from './games/AI/phy';
import Model from './games/AI/model';
// import Home from './Home'
import { AppBar, ButtonGroup, Button } from '@mui/material';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <AppBar position='static'>
              <ButtonGroup variant="" size="large">

                <Link to="/">
                  <Button variant="contained">
                    Home
                  </Button>
                </Link>

                <Link to="/about">
                  <Button variant="contained">
                    about
                  </Button>
                </Link>

                <Link to="/users">
                  <Button variant="contained">
                    users
                  </Button>
                </Link>

                <Link to="/scene">
                  <Button variant="contained">
                    Scene
                  </Button>
                </Link>

                <Link to="/pathFinder">
                  <Button variant="contained">
                    Path finding
                  </Button>
                </Link>

              </ButtonGroup>
            </AppBar>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Scene />} />
          <Route path="/pathFinder" element={<PathFinder />} />
          <Route path="/scene" element={<Scene />} />
        </Routes>
      </div>
    </Router>
  );
}

// function Home() {
//   console.log('home')
//   return <h2>Home</h2>;
// }

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <Model/>
}
