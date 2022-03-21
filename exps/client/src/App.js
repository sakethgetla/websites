import React from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//import Astar from './Astar';
import Astar2 from './old/astar2';
import DisplayGraph from './old/displayGraph';
import Scene from './phy'
import Home from './Home'

export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/scene">scene</Link>
            </li>
            <li>
              <Link to="/astar">astar</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/about" element={<About/>} />
          {/* <Route path="/about"> */}
          {/*   <About /> */}
          {/* </Route> */}
          <Route path="/users" element={<Users/>} />
          {/* <Route path="/users"> */}
          {/*   <Users /> */}
          {/* </Route> */}
          <Route path="/" element={<Home/>} />
          {/* <Route path="/astar" element={<DisplayGraph/>} /> */}
          {/* <Route path="/astar" element={<Astar/>} /> */}
          <Route path="/astar" element={<Astar2/>} />
          <Route path="/scene" element={<Scene/>} />
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
