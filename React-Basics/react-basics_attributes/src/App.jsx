import "./styles.css";

export default function App() {
  return <Article />;
}

function Article() {
  return (
    <article className="article">
      <h2 className="article__title">Nice to have you again</h2>

      <label htmlFor="name">What`s your name please:</label>

      <input type="text" id="name" />

      <a href="https://en.wikipedia.org/wiki/Name" className="article__link">
        What Wikepedia says about names
      </a>
    </article>
  );
}
