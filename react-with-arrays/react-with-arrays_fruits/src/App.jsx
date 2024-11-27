import Card from "./components/Card";

export default function App() {
  const fruits = [
    { id: 0, name: "🍌 banana", color: "yellow" },
    {
      id: 1,
      name: "🥭 mango",
      color: "orange",
    },
    {
      id: 2,
      name: "🍏 apple",
      color: "green",
    },
    {
      id: 3,
      name: "🍒 cherry",
      color: "red",
    },
    {
      id: 4,
      name: "🍇 grapes",
      color: "purple",
    },
  ];

  console.log(fruits);
  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card key={fruit.id} name={fruit.name} color={fruit.color} />
      ))}
    </div>
  );
}
