import "./styles.css";

// Props
export default function App() {
  return (
    <div>
      <Greeting name="Klaus" />
      <Greeting name="Johannes" />
    </div>
  );
}

// component
function Greeting({ name }) {
  const coaches = ["Andrea", "Esraa", "Gemima", "Klaus", "Peter"];
  const isCoach = coaches.includes(name);
  return <h1>Hello {isCoach ? "Coach" : name}!</h1>;
}
