import { useState } from "react";

const UseStateExample = () => {
  // Counter example
  const [number, updateNumber] = useState(0);
  const subTract = () => updateNumber(number - 1);
  const addTion = () => updateNumber(number + 1);
  const reset = () => updateNumber(0);

  // Text input example
  const [text, setText] = useState("");

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const resetText = () => {
    setText("");
  };

  return (
    <div>
      {/* Counter */}
      <h2>UseState Counter</h2>
      <button onClick={subTract}>-</button>
      <input type="number" value={number} readOnly />
      <button onClick={addTion}>+</button>
      <button onClick={reset}>Reset</button>

      <hr />

      {/* Text input */}
      <h2>UseState Text Input</h2>
      <input
        type="text"
        placeholder=""
        value={text}
        onChange={handleChange}
      />
      <p>You typed: {text}</p>
      <button onClick={resetText}>Reset Text</button>
    </div>
  );
};

export default UseStateExample;