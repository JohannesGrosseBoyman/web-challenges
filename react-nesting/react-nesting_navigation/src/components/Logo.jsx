import logo from "../img/logo.jpg";

import Image from "./Image.jsx";

export default function Logo() {
  return (
    <a href="#">
      <Image src={logo} alt="logo" />
    </a>
  );
}
