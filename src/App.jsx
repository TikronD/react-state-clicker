import { useState } from "react";
import React from "react";

export default function App() {
  const [myCounterState, setMyState] = useState(0);

  function incrementCounter() {
    setMyState(myCounterState + 1);
  }
  function decrementCounter() {
    setMyState(myCounterState - 1);
  }
  function resetCounter() {
    setMyState(0);
  }
  return (
    <div>
      <p>{myCounterState} Cookies</p>
      <button onClick={incrementCounter}>Get another cookie</button>
      <button onClick={decrementCounter}>Remove a cookie</button>
      <button onClick={resetCounter}>Reset Cookie Counter</button>
    </div>
  );
}
