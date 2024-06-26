import React, { useState, useEffect } from 'react';
import './Menu.css';
import axios from 'axios';
import SunSvg from '../../assets/vectors/sun.svg';
import HumiditySvg from '../../assets/vectors/humidity.svg';
import WindSvg from '../../assets/vectors/wind.svg';
import GearSelector from "../GearSelector/GearSelector";

const Menu = ({ weatherData, isOpen, onLocationSelect }) => {
  const [savedLocations, setSavedLocations] = useState(
    JSON.parse(localStorage.getItem('savedLocations')) || []
  );
  const [newLocation, setNewLocation] = useState('');
  const [locationWeather, setLocationWeather] = useState({});

  // Effect to fetch weather data for saved locations.
  useEffect(() => {
    localStorage.setItem('savedLocations', JSON.stringify(savedLocations));
  }, [savedLocations]);

  useEffect(() => {
    const fetchWeatherForSavedLocations = async () => {
      const updatedWeatherData = {};
      for (const location of savedLocations) {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=47525f0e1fc90897595c78f5cbffc723`);
          const { main, wind } = response.data;
          updatedWeatherData[location] = {
            temperature: Math.round(main.temp),
            humidity: Math.round(main.humidity),
            windSpeed: Math.round(wind.speed)
          };
        } catch (error) {
          console.error(`Error fetching weather for ${location}:`, error);
          updatedWeatherData[location] = { temperature: 'N/A', humidity: 'N/A', windSpeed: 'N/A' };
        }
      }
      setLocationWeather(updatedWeatherData);
    };

    fetchWeatherForSavedLocations();
  }, [savedLocations]);

  // Handlers for adding, deleting locations, and updating new location input.
  const handleInputChange = (event) => {
    setNewLocation(event.target.value);
  };

  const handleAddLocation = () => {
    if (newLocation.trim() !== '') {
      setSavedLocations([...savedLocations, newLocation.trim()]);
      setNewLocation('');
    }
  };

  const handleDeleteLocation = (location, event) => {
    event.preventDefault();
    event.stopPropagation();

    const updatedLocations = savedLocations.filter((savedLocation) => savedLocation !== location);
    setSavedLocations(updatedLocations);
  };

  const handleLocationClick = (location) => {
    onLocationSelect(location);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddLocation();
    }
  };
  // Renders the menu UI with saved locations and their weather data.

  return (
    <div className={`menu ${isOpen ? 'open' : ''}`}>
      <div className="menu-background"></div>
      <div className="menu-content">
        <h2>Saved Locations</h2>
        <div className="add-location-container">
          <input
            type="text"
            value={newLocation}
            onChange={handleInputChange}
            onKeyPress={handleKeyPress}
            placeholder="Enter new location"
            className="add-location-input"
          />
          <button onClick={handleAddLocation} className="add-location-button">+</button>
        </div>
        <ul>
        {savedLocations.map((location, index) => (
          <li key={index} className="saved-location">
            <a onClick={() => handleLocationClick(location)} className="location-content">
              <span className="location-name">{location.charAt(0).toUpperCase() + location.slice(1)}</span>
              <button onClick={(event) => handleDeleteLocation(location, event)} className="delete-button">x</button>
              <div className="weather-info">
                <div className="weather-info-item">
                  <img src={SunSvg} />
                  <span>{locationWeather[location]?.temperature}°C</span>
                </div>
                <div className="weather-info-item">
                  <img src={HumiditySvg}  />
                  <span>{locationWeather[location]?.humidity}%</span>
                </div>
                <div className="weather-info-item">
                  <img src={WindSvg}  />
                  <span>{locationWeather[location]?.windSpeed}m/s</span>
                </div>
              </div>
            </a>
          </li>
        ))}
        </ul>
        <GearSelector weatherData={weatherData} />
      </div>

    </div>

  );
};

export default Menu;