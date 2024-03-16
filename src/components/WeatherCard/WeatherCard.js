import React from 'react';
import './WeatherCard.css'; // Your CSS file

const WeatherCard = () => {
  return (
    <div className="weather-card">
      <div className="left"> { /* TODO: cloud etc on one row with temperature, two rows both sides, second row right side cyclist */}
      <div className="weather-visual"><img className="weather-icon" src="/vectors/cloud.svg" />{/* TODO: different components for different weather */}</div> 
        <div className="weather-description">Rain showers</div>
        <div className="date">Monday, 25 Feb</div>
      </div>
      <div className="right">
        <div className="temperature">18°C</div>
        <div className="feels-like">Feels like 16°C</div>
        <div className="icon"><img className="cyclistIcon" src="/vectors/cyclist.svg" /></div>
      </div>
    </div>
  );
};

export default WeatherCard;
