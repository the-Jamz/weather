import React, { useState, useEffect } from 'react';
import './GearSelector.css';

const GearSelector = ({ weatherData }) => {
  const [gearSuggestion, setGearSuggestion] = useState('Loading...');

  useEffect(() => {
    if (weatherData) {
      determineGear(weatherData);
    }
  }, [weatherData]);

  const determineGear = (weatherData) => {
    let suggestion = 'Standard Gear';
    const { main, weather } = weatherData;

    if (main.temp < 10) {
      suggestion = 'Warm Gear with Thermal Layers';
    } else if (main.temp >= 10 && main.temp < 20) {
      suggestion = 'Mid-Weight Gear';
    } else if (main.temp >= 20) {
      suggestion = 'Lightweight Gear';
    }

    if (weather[0].main === 'Rain') {
      suggestion += ' and Waterproof Jacket';
    }

    setGearSuggestion(suggestion);
  };

  return (
      <div className="gear-selector">
          <div className="gear-selector-text-container">
              <h2>Today's Cycling Gear Recommendation</h2>
              <p>{gearSuggestion}</p>
          </div>
      </div>

  );
};

export default GearSelector;
