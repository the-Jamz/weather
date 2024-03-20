import React from 'react';
import './ForecastCard.css';

const ForecastCard = ({ day, date, temperature_hi, temperature_lo }) => {
  return (
    <div className="forecast-card">
      <div className="date-info">
        <div className="day">{day}</div>
        <div className="date">{date}</div>
      </div>
      {/* Replace the next line with your actual WeatherIcon component */}
      <img className="weather-icon" src="/vectors/cloud.svg" />
      <div className="temperature">{temperature_hi}°C</div>
      <div className="temperature">{temperature_lo}°C</div>
    </div>
  );
};

export default ForecastCard;
