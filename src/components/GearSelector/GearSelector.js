import React, { useState, useEffect } from 'react';
import './GearSelector.css';

// GearSelector component determines cycling gear based on weather data.
const GearSelector = ({ weatherData }) => {

  const [gearSuggestion, setGearSuggestion] = useState('Loading...');

  // Effect hook to determine gear when weatherData changes.
  useEffect(() => {
    if (weatherData) {
      determineGear(weatherData);
    }
  }, [weatherData]);

  // Function to determine gear based on temperature and weather conditions.
  const determineGear = (weatherData) => {
    let suggestion = 'Standard Gear';
    const { main, weather } = weatherData;

    // Determines gear based on temperature.
    if (main.temp < 10) {
      suggestion = 'Warm Gear with Thermal Layers';
    } else if (main.temp >= 10 && main.temp < 20) {
      suggestion = 'Mid-Weight Gear';
    } else if (main.temp >= 20) {
      suggestion = 'Lightweight Gear';
    }

    // Adds waterproof jacket suggestion if it's raining.
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
