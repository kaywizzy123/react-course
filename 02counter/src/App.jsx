import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter((count) => count + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <h1>React Course with Hitesh</h1>
      {counter < 0 ? (
        <h2>
          Counter Value : <span className="negative">{counter}</span>
        </h2>
      ) : (
        <h2>
          Counter Value : <span className="positive">{counter}</span>
        </h2>
      )}

      <div className="button-wrapper">
        <button onClick={removeValue}>Remove Value</button>
        <button onClick={addValue}>Add Value</button>
      </div>
      <footer>Footer: {counter}</footer>
    </>
  );
}

export default App;
