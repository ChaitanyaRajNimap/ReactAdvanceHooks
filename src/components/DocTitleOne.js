import React, { useState } from "react";
import useDocumentTitle from "../hooks/useDocumentTitle";

function DocTitleOne() {
  const [count, setCount] = useState(0);

  useDocumentTitle(count);

  return (
    <>
      <h1>Count {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </>
  );
}

export default DocTitleOne;
