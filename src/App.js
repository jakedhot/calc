// src/App.js
import './App.css';
import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input)); // Use eval carefully in production code!
    } catch (error) {
      setInput('Error');
    }
  };

  return (
    <div className="App">
      <h1>Calc</h1>
      <div className="calculator">
        <input type="text" value={input} readOnly />
        <div className="buttons">
          <button className="number" onClick={() => handleButtonClick('1')}>1</button>
          <button className="number" onClick={() => handleButtonClick('2')}>2</button>
          <button className="number" onClick={() => handleButtonClick('3')}>3</button>
          <button className="operator" onClick={() => handleButtonClick('+')}>+</button>

          <button className="number" onClick={() => handleButtonClick('4')}>4</button>
          <button className="number" onClick={() => handleButtonClick('5')}>5</button>
          <button className="number" onClick={() => handleButtonClick('6')}>6</button>
          <button className="operator" onClick={() => handleButtonClick('-')}>-</button>

          <button className="number" onClick={() => handleButtonClick('7')}>7</button>
          <button className="number" onClick={() => handleButtonClick('8')}>8</button>
          <button className="number" onClick={() => handleButtonClick('9')}>9</button>
          <button className="operator" onClick={() => handleButtonClick('*')}>*</button>

          <button className="operator" onClick={handleClear}>C</button>
          <button className="number" onClick={() => handleButtonClick('0')}>0</button>
          <button className="operator" onClick={handleCalculate}>=</button>
          <button className="operator" onClick={() => handleButtonClick('/')}>/</button>
        </div>
      </div>
    </div>
  );
}

export default App;
