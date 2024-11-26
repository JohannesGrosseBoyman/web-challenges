import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>A way to go</Button>
      <Button>Where are you heading for?</Button>
      <Button>Do you like to take this way?</Button>
      <Button>Or do you want to pause?</Button>
    </main>
  );
}

function Button({children}) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
