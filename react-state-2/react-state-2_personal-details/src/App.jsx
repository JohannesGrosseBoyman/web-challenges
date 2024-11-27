import "./styles.css";
import Form from "./components/Form";
import { useState } from "react";



export default function App() {
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleCreateUser = (name, email) => {
    setName(name);
    setEmail(email);

}
 
 
  return (
    <div className="container">
      <h1>Personal Details Form</h1>
      <Form onCreateUser={handleCreateUser}/>
      <h2>Your submitted details:</h2>
      <p>
        Name: <span className="output">{name || "No input yet!"}</span>
      </p>
      <p>
        Email: <span className="output">{email || "No input yet!"}</span>
      </p>
    </div>
  );
}
