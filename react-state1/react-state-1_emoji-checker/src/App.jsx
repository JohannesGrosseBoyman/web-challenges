import "./styles.css";
import { useState } from "react";

export default function App() {
  let  [code, setCode] = useState("");

  const validCode = "🐡🐠🐋";

  function handleClick(emoji) {
    setCode(code + emoji);

  }

  function handleReset() {
    setCode("");
   // console.log("Code after Reset ", code);
  }

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={() => {
            handleClick("🐡");
          }}
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐋");
          }}
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={() => {
            handleClick("🐠");
          }}
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>
      </div>

      <button
        type="button"
        onClick={handleReset}
      >
        Reset
      </button>
      <p>{code}</p>
      {code === validCode && <p>Valid code! 🎉</p>}
    </div>
  );
}
