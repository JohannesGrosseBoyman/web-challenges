import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

export default function Light({ room, onToggle }) {

  function handleToggle() {
    onToggle(room.id);
  }

  return (
    <LightButton
      type="button"
      onClick={() => {
        handleToggle();
      }}
      $isOn={room.isOn}
    >
      <Icon $isOn={room.isOn}>💡</Icon>
      <Text>
        <Name>{room.name}</Name>
        <State>{room.isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
