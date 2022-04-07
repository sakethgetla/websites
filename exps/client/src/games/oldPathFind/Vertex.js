import React, { useState, useEffect } from "react";
import { Box, ButtonGroup, Button } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';
import { DirectionsRun } from '@mui/icons-material/'

const nodeStatusType = {
  alive: 'alive',
  visited: 'visited',
  dead: 'dead',
  path: 'path',
  startNode: 'startNode',
  endNode: 'endNode',
}

// const nodeStatusType = {
//   alive: 0,
//   visited: 1,
//   dead: 3,
//   path: 4,
//   startNode: 5,
//   endNode: 6,
// }
// const theme = createTheme({
//   breakpoints: {
//     values: {
//       mobile: 0,
//       tablet: 640,
//       laptop: 1024,
//       desktop: 1280,
//     },
//   },
//   palette: {
//     primary: {
//       main: orange[500],
//     },
//   },
// });

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
      status: props.type
    }
  }
  toggleStatus() {
    if (this.state.status === nodeStatusType.alive) {
      this.setState({ status: nodeStatusType.dead });
    } else if (this.state.status === nodeStatusType.dead) {
      this.setState({ status: nodeStatusType.alive });
    }
    // this.setState({ visited: true })
    // this.setState({ location: -1 })
    //console.log('vertex clicked')
  }

  getLocation() {
    return this.props.value;
  }

  render() {
    // console.log('vertex render ', this.props.type)
    console.log('vertex render');

    var color = '';

    switch (this.state.status) {
      case nodeStatusType.endNode:
        color = 'success';
        break;
      case nodeStatusType.startNode:
        color = 'success';
        break;
      case nodeStatusType.path:
        color = 'warning';
        break;
      case nodeStatusType.visited:
        color = 'primary';
        break;
      case nodeStatusType.dead:
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

      // <ThemeProvider theme={theme}>
      // </ThemeProvider>
      <>
        <Button variant="contained"
          sx={{
            height: 0,
            width: '100%',
            paddingBottom: '100%',
            /* margin: '5px', */
            minWidth: 0,
            borderRadius: 0,
            minHeight: 0,
            '&:hover': {
              /* backgroundColor: 'primary.dark', */
            }
          }}
          color={color}
          /* startIcon={<DirectionsRun/>} */
          onClick={() => {
            this.toggleStatus();
            this.props.onClicked(this.props.value)
          }}>

          {/* <DirectionsRun size="large" sx={{ width: '100%' }} /> */}
          {/*    + */}
          {/* {this.props.value} */}
        </Button>
      </>
      // <ThemeProvider theme={theme}>
      //   <Box
      //     color='primary'
      //     sx={{
      //       width: '90%',
      //       height: 0,
      //       paddingBottom:'90%',
      //       /* minWidth: ' 100px', */
      //       /* maxWidth: ' 1500px', */
      //       borderStyle: 'solid',
      //       overflow: 'scroll',
      //       backgroundColor: 'primary.dark',
      //       margin: '2px',
      //       '&:hover': {
      //         backgroundColor: 'primary.main',
      //         opacity: [0.9, 0.8, 0.7],
      //       },
      //     }}
      //     onClick={() => this.props.onClicked(this.props.value)}
      //   >
      //   </Box>

      // </ThemeProvider >
    )
  }
}

export { nodeStatusType, Vertex };
