import { useState } from "react";
import "./styles.css";
import Form from "./components/Form";
import List from "./components/List";

export default function App() {
  const [tags, setTags] = useState(["JavaScript", "React", "CSS", "HTML"]);

  function handleOnAddTag(newTag) {
    setTags([...tags, newTag ])
  }

  function handleDeleteTag(tagToDelete) {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  }

  return (
    <main className="app">
      <Form onAddTag={handleOnAddTag}/>
      <List  tags={tags} onDeleteTag={handleDeleteTag} />
    </main>
  );
}
