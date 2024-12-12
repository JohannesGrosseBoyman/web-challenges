import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState([
    { id: 0, name: "Living Room", isOn: false },
    { id: 1, name: "Kitchen", isOn: false },
    { id: 2, name: "Bedroom", isOn: false },
    { id: 3, name: "Bathroom", isOn: false },
    { id: 4, name: "Garage", isOn: false },
    { id: 5, name: "Porch", isOn: false },
    { id: 6, name: "Garden", isOn: false },
    { id: 7, name: "Office", isOn: false },
  ]);

  const lightsSum = lights.filter((room) => room.isOn === true).length;
  console.log("lights turned on: ", lightsSum);

  function handleToggle(id) {
    setLights(
      lights.map((room) =>
        room.id === id ? { ...room, isOn: !room.isOn } : room
      )
    );
  }

  function toggleLightsOut() {
    setLights(
      lights.map((room) => room = { ...room, isOn: false}
      ));
  }

  function toggleLightsOn() {
    setLights(
      lights.map((room) => room = { ...room, isOn: true}
      ));
  }

  return (
    <Layout>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        onToggle={handleToggle}
        lightsSum={lightsSum}
        onOut={toggleLightsOut}
        onOn={toggleLightsOn}
      />
    </Layout>
  );
}
