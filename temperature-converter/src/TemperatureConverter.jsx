
import React, { useState } from 'react';
import './TemperatureConverter.css';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (e) => {
    const value = e.target.value;
    setCelsius(value);
    setFahrenheit((parseFloat(value) * 9/5) + 32 || '');
  };

  const handleFahrenheitChange = (e) => {
    const value = e.target.value;
    setFahrenheit(value);
    setCelsius((parseFloat(value) - 32) * 5/9 || '');
  };

  return (
    <div className="container">
      <div>
        <label>Enter Temperature in Celsius:</label>
        <input
          type="text"
          value={celsius}
          onChange={handleCelsiusChange}
        />
      </div>
      <div>
        <label>Enter Temperature in Fahrenheit:</label>
        <input
          type="text"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
        />
      </div>
    </div>
  );
};

export default TemperatureConverter;
