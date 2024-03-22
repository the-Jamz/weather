import React from 'react';
import WeatherIcon from '../WeatherIcon/WeatherIcon';
import './ForecastCard.css';

// Component to display the weather forecast for a specific day
const ForecastCard = ({ day, date, temperature_hi, temperature_lo, description }) => {
  // Grab the appropriate weather icon based on the weather description
  const icon = WeatherIcon(description);
  return (
    <div className="forecast-card">
      <div className="date-info">
        <div className="day">{day}</div>
        <div className="date">{date}</div>
      </div>
      <img className="weather-icon" src={icon} alt="current weather icon" />
      <div className="temperature">{temperature_hi}°C</div>
      <div className="temperature">{temperature_lo}°C</div>
    </div>
  );
};

export default ForecastCard;
