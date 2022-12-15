import React from "react";
import useCounter from "../hooks/useCounter";

function CounterTwo() {
  const [count, increment, decrement, reset] = useCounter(0, 1);

  return (
    <>
      <h1>Count - {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default CounterTwo;
