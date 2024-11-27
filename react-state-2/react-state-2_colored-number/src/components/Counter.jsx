import { useState } from "react";
import ColoredNumber from "./ColoredNumber";

export default function Counter() {
  const [value, setValue] = useState(0);

  function handleOnClickPlus() {
    setValue(value + 30);
    console.log("value: ", value);
  }

  function handleOnClickMinus() {
    setValue(value - 30);
    console.log("value: ", value);
  }

  return (
    <div className="counter">
      <h1>Colored Number</h1>
      <ColoredNumber value={value} />
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment count"
          onClick={handleOnClickPlus}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement count"
          onClick={handleOnClickMinus}
        >
          -
        </button>
      </div>
    </div>
  );
}
