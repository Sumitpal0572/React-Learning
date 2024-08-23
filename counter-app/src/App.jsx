import { useState } from "react";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const addValue = () => {
    counter = counter + 1;
    setCounter(counter);
    console.log(counter);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    } else {
      setCounter(counter == 0);
    }
  };

  return (
    <>
      <h1>First project using react</h1>
      <h3>Counter App:{counter}</h3>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  );
}

export default App;
