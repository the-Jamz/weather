
import React, { useState } from 'react';
import './Header.css';
import Location from '../Location/Location';
import { fetchWeatherByCity } from '../API/FetchWeather';
import MenuSvg from '../../assets/vectors/menu.svg';
import ProfileSvg from '../../assets/vectors/profile.svg';
import Menu from '../Menu/Menu';
import LocationSvg from '../../assets/vectors/location.svg';

// Header component displaying the app's header with menu, location search, and profile icons.
const Header = ({ weatherData, setWeatherData }) => {
  // State for the current city in the location search input.
  const [city, setCity] = useState('London,UK');
  // State to manage the menu's open/close status.
  const [menuOpen, setMenuOpen] = useState(false);

  // Handler for changes in the location search input.
  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  // Handler for submitting the location search form.
  const handleSubmit = (event) => {
    event.preventDefault();
    fetchWeatherByCity(city, setWeatherData);
    setCity('')
  };

  // Handler for successful location retrieval from the Location component.
  const handleLocationSuccess = (cityName) => {
    setCity(cityName);
  };

  // Handler for toggling the menu's open/close status.
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Handler for selecting a location from the menu.
  const handleLocationSelect = async (location) => {
    await fetchWeatherByCity(location, setWeatherData);
    setCity(location);
    setMenuOpen(false);
  };

  // JSX for rendering the Header component.
  return (
      <div className="header">
          <img src={MenuSvg} alt="Menu" className="menu-icon" onClick={toggleMenu}/>
          <Menu weatherData={weatherData} isOpen={menuOpen} onLocationSelect={handleLocationSelect}/>
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
                  <Location setWeatherData={setWeatherData} onLocationSuccess={handleLocationSuccess}/>
              </div>
          </div>
          <img src={ProfileSvg} alt="Settings" className="settings-icon"/>
      </div>
  );
};

export default Header;
