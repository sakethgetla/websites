import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

import nodeStates from './helper'

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   width: '100%',
//   height: '100%',
//   color: theme.palette.text.secondary,
// }));


var styles2 = {
  // width: 'auto',
  // height: '100px',
  height: 0,
  width: '100%',
  paddingBottom: '100%',
  backgroundColor: 'primary.dark',
  '&:hover': {
    backgroundColor: 'primary.main',
    opacity: [0.9, 0.8, 0.7],
  },
};
var styles1 = {
  // width: 'auto',
  // height: '100px',
  height: 0,
  width: '100%',
  paddingBottom: '100%',
  backgroundColor: 'secondary.dark',
  '&:hover': {
    backgroundColor: 'secondary.main',
    opacity: [0.9, 0.8, 0.7],
  },
};

function Vertex({ onClick, state }: any) {
  // console.log("vertex");
  // console.log(handleClick);
  // compon
  return (
    <Box
      onClick={() => onClick()}
      sx={state === nodeStates.alive ? styles1 : styles2}
    />
  );
}

export default Vertex;
