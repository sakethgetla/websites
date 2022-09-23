import React, {useState} from 'react';
// import logo from './logo.svg';
// import './App.css';
import Vertex from './Vertex';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

function App() {
  const graphWidth = 10, graphHeight = 12;
  const [test, setTest] = useState(12);


  function vertexClicked(): void {
    console.log("here");
  }

  function displayGraph() {
    var a = new Array(graphHeight * graphWidth).fill(0);

    return (
      <Box sx={{ width: '90%', maxWidth: 700}}>
        <Grid container columns={graphWidth}>
          {a.map((val, i) => (
            <Grid item xs={1} key={i}>
              <Vertex handleClick={vertexClicked} />
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }

  return (
    <div>
      {displayGraph()}
      <Box sx={{width: '100px', height: '100px', backgroundColor: 'primary.dark'}} onClick={()=> setTest(30)}/>
    </div>

  );
}

export default App;
