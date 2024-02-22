import React, { useState } from 'react';
import './App.css'

function App() {
  
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  const handleCalculate = () => {
    try {
      setInput(eval(input).toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const handleClear = () => {
    setInput('');
  };

  return (
    <>
      <div className="calculator">
        <h2 style={{textAlign:'center'}}>CALCULATOR</h2>
      <input style={{border: '0px', borderRadius:'5px', padding:'10px 10px', fontSize:'18px'}}
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value) }
      />
      <br />
      <br />
      <div className="buttons">
        <button style={{margin:'5px'}} onClick={() => handleButtonClick('1')}>1</button>
        <button style={{margin:'5px'}} onClick={() => handleButtonClick('2')}>2</button>
        <button style={{margin:'5px'}} onClick={() => handleButtonClick('3')}>3</button>
        <button style={{margin:'5px'}} onClick={() => handleButtonClick('+')}>+</button>
        <br />
        <button style={{margin:'5px'}} onClick={() => handleButtonClick('4')}>4</button>
        <button style={{margin:'5px'}} onClick={() => handleButtonClick('5')}>5</button>
        <button style={{margin:'5px'}} onClick={() => handleButtonClick('6')}>6</button>
        <button style={{margin:'5px'}} onClick={() => handleButtonClick('-')}>-</button>
        <br />
        <button style={{margin:'5px'}} onClick={() => handleButtonClick('7')}>7</button>
        <button style={{margin:'5px'}} onClick={() => handleButtonClick('8')}>8</button>
        <button style={{margin:'5px'}} onClick={() => handleButtonClick('9')}>9</button>
        <button style={{margin:'5px'}} onClick={() => handleButtonClick('*')}>*</button>
        <br />
        <button style={{margin:'5px'}} onClick={() => handleButtonClick('0')}>0</button>
        <button style={{margin:'5px'}} onClick={() => handleButtonClick('.')}>.</button>
        <button style={{margin:'5px'}} onClick={() => handleButtonClick('/')}>/</button>
        <button style={{margin:'5px'}} onClick={handleCalculate}>=</button>

        <br />
        <button style={{margin:'5px'}} onClick={handleClear}>Clear</button>
      </div>
    </div>
     
    
    </>
  )
}

export default App
