import React from "react";
import "./styles.css";

export default function App() {
  const handleClick = () => { alert("Why did you click me?"); };
  return (
    <Button
      text="Click Me"
      color="blue"
      backgroundcolor="grey"
      disabled={false}
      onclick={handleClick}
      width="200px"
      height="100px"
      fontSize = "3rem"
    />
  );
}

function Button({ color, backgroundcolor, disabled, text,  width, height, fontSize, onclick }) { 
  
  return (
    <button
      style={{ color: color, backgroundColor: backgroundcolor, width: width, height: height, fontSize: fontSize }}
      disabled={disabled}
      onClick = {onclick}
    >
      {text}
    </button>
  );
}
