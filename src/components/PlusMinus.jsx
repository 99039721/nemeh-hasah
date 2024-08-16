import { useState } from "react";

export function PlusMinus() {
  const [count, setCount] = useState(0);

  const plus = () => {
    setCount(count + 1);
  };

  const minus = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <div className="Counter">
        <button onClick={minus} disabled={count === 0}>
          Minus
        </button>
        <h1>{count}</h1>
        <button onClick={plus}>Plus</button>
      </div>
    </div>
  );
}
