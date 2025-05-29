import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');
  const [prevResult, setPrevResult] = useState(null);
  const [calculatorType, setCalculatorType] = useState('basic');

  // Handle number button clicks
  const handleNumber = (num) => {
    if (display === '0' || display === 'Error') {
      setDisplay(num);
    } else {
      setDisplay(display + num);
    }
  };

  // Handle decimal point
  const handleDecimal = () => {
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  // Handle operators
  const handleOperator = (op) => {
    if (display !== 'Error') {
      setEquation(equation + display + ' ' + op + ' ');
      setDisplay('0');
    }
  };

  // Handle equals
  const handleEquals = () => {
    try {
      const fullEquation = equation + display;
      setEquation(fullEquation + ' = ');
      
      // Using Function constructor to evaluate the expression
      // Note: In a production app, you'd want a more secure way to evaluate expressions
      const result = new Function('return ' + fullEquation)();
      
      setPrevResult(result.toString());
      setDisplay(result.toString());
      setEquation('');
    } catch (error) {
      setDisplay('Error');
      setEquation('');
    }
  };

  // Clear the calculator
  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  // Delete the last character
  const handleDelete = () => {
    if (display.length === 1 || display === 'Error') {
      setDisplay('0');
    } else {
      setDisplay(display.slice(0, -1));
    }
  };

  // Handle special functions for scientific calculator
  const handleSpecialFunction = (func) => {
    try {
      let result;
      const num = parseFloat(display);
      
      switch (func) {
        case 'sqrt':
          result = Math.sqrt(num);
          break;
        case 'square':
          result = Math.pow(num, 2);
          break;
        case 'sin':
          result = Math.sin(num * (Math.PI / 180)); // Convert to radians
          break;
        case 'cos':
          result = Math.cos(num * (Math.PI / 180)); // Convert to radians
          break;
        case 'tan':
          result = Math.tan(num * (Math.PI / 180)); // Convert to radians
          break;
        case 'log':
          result = Math.log10(num);
          break;
        case 'ln':
          result = Math.log(num);
          break;
        case 'pi':
          result = Math.PI;
          break;
        case 'e':
          result = Math.E;
          break;
        default:
          result = num;
      }
      
      setDisplay(result.toString());
    } catch (error) {
      setDisplay('Error');
    }
  };

  return (
    <div className="calculator-page">
      <div className="container">
        <header className="calculator-header">
          <h1 className="calculator-title">Math Calculator</h1>
          <p className="calculator-description">
            Use our calculator to solve math problems quickly and easily.
          </p>
        </header>

        <div className="calculator-type-selector">
          <button
            className={`type-btn ${calculatorType === 'basic' ? 'active' : ''}`}
            onClick={() => setCalculatorType('basic')}
          >
            Basic
          </button>
          <button
            className={`type-btn ${calculatorType === 'scientific' ? 'active' : ''}`}
            onClick={() => setCalculatorType('scientific')}
          >
            Scientific
          </button>
        </div>

        <div className="calculator-container">
          <div className="calculator">
            <div className="calculator-display">
              <div className="equation">{equation}</div>
              <div className="current-value">{display}</div>
            </div>

            <div className="calculator-buttons">
              {calculatorType === 'scientific' && (
                <div className="scientific-buttons">
                  <button onClick={() => handleSpecialFunction('sqrt')}>√</button>
                  <button onClick={() => handleSpecialFunction('square')}>x²</button>
                  <button onClick={() => handleSpecialFunction('sin')}>sin</button>
                  <button onClick={() => handleSpecialFunction('cos')}>cos</button>
                  <button onClick={() => handleSpecialFunction('tan')}>tan</button>
                  <button onClick={() => handleSpecialFunction('log')}>log</button>
                  <button onClick={() => handleSpecialFunction('ln')}>ln</button>
                  <button onClick={() => handleSpecialFunction('pi')}>π</button>
                  <button onClick={() => handleSpecialFunction('e')}>e</button>
                  <button onClick={() => handleOperator('**')}>^</button>
                </div>
              )}

              <div className="main-buttons">
                <button className="clear-btn" onClick={handleClear}>
                  C
                </button>
                <button onClick={handleDelete}>⌫</button>
                <button onClick={() => handleOperator('%')}>%</button>
                <button className="operator-btn" onClick={() => handleOperator('/')}>
                  ÷
                </button>

                <button onClick={() => handleNumber('7')}>7</button>
                <button onClick={() => handleNumber('8')}>8</button>
                <button onClick={() => handleNumber('9')}>9</button>
                <button className="operator-btn" onClick={() => handleOperator('*')}>
                  ×
                </button>

                <button onClick={() => handleNumber('4')}>4</button>
                <button onClick={() => handleNumber('5')}>5</button>
                <button onClick={() => handleNumber('6')}>6</button>
                <button className="operator-btn" onClick={() => handleOperator('-')}>
                  −
                </button>

                <button onClick={() => handleNumber('1')}>1</button>
                <button onClick={() => handleNumber('2')}>2</button>
                <button onClick={() => handleNumber('3')}>3</button>
                <button className="operator-btn" onClick={() => handleOperator('+')}>
                  +
                </button>

                <button onClick={() => handleNumber('0')}>0</button>
                <button onClick={handleDecimal}>.</button>
                <button className="equals-btn" onClick={handleEquals} style={{ gridColumn: 'span 2' }}>
                  =
                </button>
              </div>
            </div>
          </div>

          {prevResult && (
            <div className="calculator-history">
              <h3>Last Result</h3>
              <div className="history-item">{prevResult}</div>
            </div>
          )}
        </div>

        <div className="calculator-info">
          <h3>Calculator Features</h3>
          <ul>
            <li>Basic arithmetic operations: addition, subtraction, multiplication, division</li>
            <li>Scientific functions: square root, trigonometric functions, logarithms, and more</li>
            <li>Memory of your last calculation</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Calculator;