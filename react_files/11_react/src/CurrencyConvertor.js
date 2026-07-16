import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = () => {
    // Example conversion: 1 Euro = 90 INR
    const result = rupees / 90;
    setEuro(result);
  };

  return (
    <div>
      <h2>Currency Converter (INR → Euro)</h2>

      <input
        type="number"
        placeholder="Enter amount in INR"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
      />

      <button onClick={handleSubmit}>Convert</button>

      <p>Euro: {euro}</p>
    </div>
  );
}

export default CurrencyConvertor;