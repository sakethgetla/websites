import React, { useState, useEffect } from "react";
import { Box, ButtonGroup, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';


const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 640,
      laptop: 1024,
      desktop: 1280,
    },
  },
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

class Vertex extends React.Component {
  constructor(props) {
    super(props);
    //console.log(props)
    // this.state = {
    //   location: this.props.location,
    //   visited: this.props.visited,
    //   gval: this.props.gval,
    //   prev: null,
    //   fval: this.props.fval,
    //   neighbours: []
    // }
    this.state = {
      visited: false
    }
  }
  handleClick() {
    // this.setState({ visited: true })
    // this.setState({ location: -1 })
    //console.log('vertex clicked')
  }

  getLocation() {
    return this.props.value;
  }

  render() {
    console.log('vertex render')

    var color = '';

    switch (this.props.type) {
      case 'endNode':
        color = 'success';
        break;
      case 'startNode':
        color = 'success';
        break;
      case 'path':
        color = 'warning';
        break;
      case 'visited':
        color = 'primary';
        break;
      case 'dead':
        color = 'error';
        break;
      default:
        color = 'secondary';
        break;

    }
    //console.log(color);
    return (
      // <button >
      //   {this.props.value}
      // </button>
      // <Button variant="contained" size={'large'} color={color} onClick={() => this.props.onClicked(this.props.value)}>
      // <Button variant="contained" sx={{ height: 50, width:10 }} color={color} onClick={() => this.props.onClicked(this.props.value)}>
      // <Button variant="contained"  size={'large'} fullWidth={true} color={color} onClick={() => this.props.onClicked(this.props.value)}>

      // <Button variant="contained" sx={{ height: '100%', width:'100%' }} color={color} onClick={() => this.props.onClicked(this.props.value)}>
      //      {/* + */}
      //   {/* {this.props.value} */}
      // </Button>

      <ThemeProvider theme={theme}>
        <Box
          color='primary'
          sx={{
            width: '90%',
            height: 0,
            paddingBottom:'90%',
            /* minWidth: ' 100px', */
            /* maxWidth: ' 1500px', */
            borderStyle: 'solid',
            overflow: 'scroll',
            backgroundColor: 'primary.dark',
            margin: '2px',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}
          onClick={() => this.props.onClicked(this.props.value)}
        >
        </Box>

      </ThemeProvider >
    )
  }
}

export default Vertex;
