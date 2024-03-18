// Header.js
import React, { useState } from 'react';
import './Header.css';
import Location from '../Location/Location';
import { fetchWeatherByCity } from '../API/FetchWeather';

const Header = ({ setWeatherData }) => {
  const [city, setCity] = useState('London,UK');

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherByCity(city, setWeatherData);
    setCity('')
  };

  const handleLocationSuccess = (cityName) => {
      setCity('')
    setCity(cityName);
  };

  return (
      <div className="header">
          <img src="/vectors/menu.svg" alt="Menu" className="menu-icon"/>
          <div className="location-form-container">
              <form onSubmit={handleSubmit} className="location-form">
                  <img src="/vectors/location.svg" className="location-icon"/>
                  <input
                      type="text"
                      className="location-input"
                      value={city}
                      onChange={handleInputChange}
                  />
              </form>
              <div className="use-my-location-container">
                  <Location setWeatherData={setWeatherData} onLocationSuccess={handleLocationSuccess}/> {/* Pass setCity as prop */}
              </div>
          </div>
          <img src="/vectors/profile.svg" alt="Settings" className="settings-icon"/>
      </div>
  );
};

export default Header;