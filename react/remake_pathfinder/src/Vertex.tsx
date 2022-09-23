import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';


// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   width: '100%',
//   height: '100%',
//   color: theme.palette.text.secondary,
// }));


var styles = {
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

function Vertex({ handleClick }: any) {
  console.log("vertex");
  // console.log(handleClick);
  // compon
  return (
    <Box
      onClick={() => handleClick()}
      sx={styles}
    />
  );
}

export default Vertex;
