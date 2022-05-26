import type { Component } from 'solid-js';
import { createSignal, createEffect, createMemo } from 'solid-js';
//import { AppBar, ButtonGroup, Button } from '@mui/material';
import Button from "@suid/material/Button";
import Stack from "@suid/material/Stack";

import {PathFinder} from "./PathFinder";



function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}


const App: Component = () => {
  const [getCount, setCount] = createSignal(9);
  var test = 9;

  // setInterval(()=> setCount(c => c+1), 1000);
  // setInterval(() => setCount(getCount() + 1), 1000);
  const testCount = () => {
    // test non signal variable
    test = test * 2;
    console.log("test count", test);
    // getCount();
     // return test;
  }
  const doubleCount = () => {
    //getCount() * 2
     setCount(c => c * 2);
    console.log("test count", test);
  };

  const oldfib = () => {
    console.log("run oldfib");
    return fibonacci(getCount());

  }


  const fib = createMemo(() => {
    console.log("run fib");
    return fibonacci(getCount());
  })

  createEffect(() => {
    // console.log("effect", getCount());
  });

  return (
    // <>
    //     hello
    // </>
    // <ButtonGroup>
    // iers
    <div>
      {/* {getCount()} */}
      {/* <Stack spacing={2} direction="row"> */}
      {/*   <Button variant="contained" color="error" onClick={() => {setCount(9)}}> */}
      {/*     reset */}
      {/*   </Button> */}
      {/*   <Button variant="contained" onClick={() => { doubleCount() }}> */}
      {/*     double count */}
      {/*   </Button> */}
      {/*   <Button variant="contained" onClick={() => { testCount() }}> */}
      {/*     double test count */}
      {/*   </Button> */}
      {/* </Stack> */}
      {/* <div>1. fib = {fib()} {fib()} {fib()} {fib()} {fib()}</div> */}
      {/* <div>2. oldfib = {oldfib()} {oldfib()} {oldfib()} {oldfib()} {oldfib()}</div> */}

      {/* <div>double Count: {getCount()}</div> */}
      {/* <div>test Count: {test}</div> */}
      <PathFinder/>
    </div>

    // </ButtonGroup>
  );
};

export default App;
