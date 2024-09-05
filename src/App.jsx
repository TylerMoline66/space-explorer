import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import SpaceScene from "./Components/Space";
import Planet from "./Components/Planet1";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SpaceScene />
    </>
  );
}

export default App;
