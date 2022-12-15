import React, { useState, useMemo } from "react";

function CounterMemo() {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incremnetOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incremnetTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <>
      <div>
        <button onClick={incremnetOne}>Count One - {counterOne}</button>
        <span>{isEven ? "Even" : "Odd"}</span>
      </div>
      <div>
        <button onClick={incremnetTwo}>Count Two - {counterTwo}</button>
      </div>
    </>
  );
}

export default CounterMemo;
