// Header.js
import React, { useState } from 'react';
import './Header.css';
import Location from '../Location/Location';
import { fetchWeatherByCity } from '../API/FetchWeather';
import MenuSvg from '../../assets/vectors/menu.svg';
import ProfileSvg from '../../assets/vectors/profile.svg';
import Menu from '../Menu/Menu';
import LocationSvg from '../../assets/vectors/location.svg';

const Header = ({ setWeatherData }) => {
  const [city, setCity] = useState('London,UK');
  const [menuOpen, setMenuOpen] = useState(false);

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherByCity(city, setWeatherData);
    setCity('')
  };

  const handleLocationSuccess = (cityName) => {
    setCity(cityName);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLocationSelect = async (location) => {
    await fetchWeatherByCity(location, setWeatherData);
    setCity(location);
    setMenuOpen(false);
  };

  return (
      <div className="header">
          <img src={MenuSvg} alt="Menu" className="menu-icon" onClick={toggleMenu}/>
          <Menu isOpen={menuOpen} onLocationSelect={handleLocationSelect}/>
          <div className="location-form-container">
              <form onSubmit={handleSubmit} className="location-form">
                  <input
                      type="text"
                      className="location-input"
                      value={city}
                        placeholder="Search for a city..."
                      onChange={handleInputChange}
                  />
              </form>
              <div className="use-my-location-container">
                  <Location setWeatherData={setWeatherData} onLocationSuccess={handleLocationSuccess}/> {/* Pass setCity as prop */}
              </div>
          </div>
          <img src={ProfileSvg} alt="Settings" className="settings-icon"/>
      </div>
  );
};

export default Header;
