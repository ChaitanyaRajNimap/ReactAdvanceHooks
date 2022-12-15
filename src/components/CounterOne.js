import React from "react";
import useCounter from "../hooks/useCounter";

function CounterOne() {
  const [count, increment, decrement, reset] = useCounter(10, 5);

  return (
    <>
      <h1>Count - {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default CounterOne;
