import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  const decrement = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };

  return (
    <>
      <h1>Counter: {count} </h1>
      <button className="bg-green-500" onClick={increment}>
        Increment
      </button>
      <button className="bg-red-500 ml-4" onClick={decrement}>
        Decrement
      </button>
    </>
  );
}

export default Counter;
