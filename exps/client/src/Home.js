
import React, { useState, useEffect } from "react";


export default function Home() {
  const [dead, setDead] = useState(0);



  console.log('home')

  useEffect(() => {
  //setDead(1);
    console.log('dead changed' + dead);
  }, [dead]);

  useEffect(() => {
  //setDead(1);
    console.log('run once ' + dead);
  }, []);
  return <button onClick={ () => setDead(dead+1)} > HOME! </button>
}
