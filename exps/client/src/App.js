import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//import Astar from './Astar';
import Astar from './games/Astar/Astar';
//import DisplayGraph from './old/displayGraph';
import Scene from './games/AI/phy'
import Home from './Home'
import { ButtonGroup, Button } from '@mui/material';

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <ButtonGroup variant="" size="large">
              <Link to="/">
                <Button >
                  Home
                </Button>
              </Link>
                  <Link to="/about">
                    <Button >
                      about
                    </Button>
                  </Link>

                  <Link to="/users">
                    <Button >
                      users
                    </Button>
                  </Link>

                  <Link to="/scene">
                    <Button >
                      Scene
                    </Button>
                  </Link>

                  <Link to="/astar">
                    <Button >
                      astar
                    </Button>
                  </Link>

            </ButtonGroup>

          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/" element={<Home />} />
          <Route path="/astar" element={<Astar />} />
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
  return <h2>Users</h2>;
}
