import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [people, setPeople] = useState(2);

  const handleAddPerson = () => {
    setPeople(people + 1);
  }

  const handleSubtractPerson = () => {
    setPeople(people - 1);
  }
    
  
  return (
    <div className="container">
      <h1>Place a Table Reservation</h1>
      <Counter onAdd={handleAddPerson} onMinus={handleSubtractPerson} />
      <p>You are going to reserve a table for {people} people.</p>
    </div>
  );
}
