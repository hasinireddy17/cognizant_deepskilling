import React, { useState } from "react";
import CurrencyConvertor from "./CurrencyConvertor";

function App() {
  const [count, setCount] = useState(0);

  // Increment + Hello
  const increment = () => {
    setCount(count + 1);
  };

  const sayHello = () => {
    alert("Hello! This is a static message");
  };

  const handleIncrement = () => {
    increment();
    sayHello();
  };

  // Decrement
  const decrement = () => {
    setCount(count - 1);
  };

  // Welcome with argument
  const sayWelcome = (msg) => {
    alert(msg);
  };

  // Synthetic event
  const handleClick = () => {
    alert("I was clicked");
  };

  return (
    <div>
      <h1>Event Examples App</h1>

      {/* Counter */}
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={decrement}>Decrement</button>

      <br /><br />

      {/* Welcome */}
      <button onClick={() => sayWelcome("Welcome")}>
        Say Welcome
      </button>

      <br /><br />

      {/* Synthetic Event */}
      <button onClick={handleClick}>
        Synthetic Event (OnPress)
      </button>

      <br /><br />

      {/* Currency Converter */}
      <CurrencyConvertor />
    </div>
  );
}

export default App;