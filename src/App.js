import React, { useState } from "react";
import { Navbar, Counter } from "./components";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Navbar title="Counter" />
      <Counter counter={counter} setCounter={setCounter} />
    </div>
  );
}

export default App;
