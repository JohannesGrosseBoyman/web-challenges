import React from "react";
import "./styles.css";

export default function App() {
  return <HelloWorldArticle />;
}

function HelloWorldArticle() {
  return (
    <article>
      <h1>Hello World!</h1>
      <p>
        At the moment the northern World is starting to have the winter season
      </p>
    </article>
  );
}
