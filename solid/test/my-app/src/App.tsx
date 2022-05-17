import type { Component } from 'solid-js';
//import { AppBar, ButtonGroup, Button } from '@mui/material';
import Button from "@suid/material/Button";
import Stack from "@suid/material/Stack";


const App: Component = () => {
  return (
    // <>
    //     hello
    // </>
    // <ButtonGroup>
    <Stack spacing={2} direction="row">
      <Button variant="contained">
        hello
      </Button>
      <Button >
        hello
      </Button>
    </Stack>
    // </ButtonGroup>
  );
};

export default App;
