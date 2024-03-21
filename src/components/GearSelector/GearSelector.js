import React, { useState, useEffect } from 'react';
import { fetchWeatherByCoords } from '../API/FetchWeather';
import './GearSelector.css';

const GearSelector = ({ weatherData }) => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  //const [weather, setWeather] = useState(null);
  const [gearSuggestion, setGearSuggestion] = useState('Loading...');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude
      });
    });
  }, []);

  /*useEffect(() => {
    if (location.latitude && location.longitude) {
      fetchWeatherByCoords(location.latitude, location.longitude, setWeather, (name) => console.log(`Location: ${name}`));
    }
  }, [location]);*/

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
