import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);

  function handleCountClickMinus() {
    setCount(count - 1);
    //console.log("Should decrease count ", count);
  }

  function handleCountClickPlus() {
    setCount(count + 1);
    //console.log("Should increase count ", count);
  }

  return (
    <div className="container">
      <h1>{count}</h1>
      <div className="button-container">
        <button
          type="button"
          onClick={handleCountClickMinus}
        >
          -
        </button>
        <button
          type="button"
          onClick={handleCountClickPlus}
        >
          +
        </button>
      </div>
    </div>
  );
}
