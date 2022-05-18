import type { Component } from 'solid-js';
import { createSignal, createEffect, createMemo } from 'solid-js';
//import { AppBar, ButtonGroup, Button } from '@mui/material';
import Button from "@suid/material/Button";
import Stack from "@suid/material/Stack";



function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}


const App: Component = () => {
  const [getCount, setCount] = createSignal(0);
  var test = 9;

  // setInterval(()=> setCount(c => c+1), 1000);
  // setInterval(() => setCount(getCount() + 1), 1000);
  const testCount = () => {
    test = test * 2;
    console.log("test count", test);
    // getCount();
    return test;
  }
  const doubleCount = () => getCount() * 2;

  const oldfib = () => {
    console.log("run oldfib");
    fibonacci(getCount());
  }

  const fib = createMemo(() => {
    console.log("run fib");
    fibonacci(getCount());
  })
  createEffect(() => {
    // console.log("effect", getCount());
  });
  return (
    // <>
    //     hello
    // </>
    // <ButtonGroup>
    <div>
      {getCount()}
      <Stack spacing={2} direction="row">
        <Button variant="contained" onClick={() => { setCount(c => c+1) }}>
          reset
        </Button>
        <Button onClick={() => { testCount() }}>
          test count
        </Button>
      </Stack>
      <div>1. {fib()} {fib()} {fib()} {fib()} {fib()}</div>
      <div>1. {oldfib()} {oldfib()} {oldfib()} {oldfib()} {oldfib()}</div>

      <div>double Count: {doubleCount()}</div>
      <div>test Count: {testCount()}</div>
    </div>

    // </ButtonGroup>
  );
};

export default App;
