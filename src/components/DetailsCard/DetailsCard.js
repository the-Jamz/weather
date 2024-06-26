import React from 'react';
import './DetailsCard.css';
import Humidity from '../../assets/vectors/humidity.svg';
import Wind from '../../assets/vectors/wind.svg';
import Sun from '../../assets/vectors/sun.svg';
import Precipitation from '../../assets/vectors/precipitation.svg';

// Component to display details about the current weather condition
const DetailsCard = ({ humidity, wind, uvIndex, precipitation }) => {
  return (
    <div className="details-card">
      <div className="weather-metric humidity">
        <img src={Humidity} alt="humidity icon" />
        <div className="icon-humidity"></div>
        <div className="weather-text">
            <span className="weather-metric-type">Humidity</span>
            <span className="weather-metric-value">{humidity} %</span>
        </div>
      </div>
      <div className="weather-metric wind">
        <img src={Wind} alt="wind icon" />
        <div className="weather-text">
            <span className="weather-metric-type">Wind</span>
            <span className="weather-metric-value">{wind} m/s</span>
        </div>
      </div>
      <div className="weather-metric uv-index">
        <img src={Sun} alt="uv index icon" />
        <div className="weather-text">
            <span className="weather-metric-type">UV Index</span>
            <span className="weather-metric-value">{uvIndex}</span>
        </div>
      </div>
      <div className="weather-metric precipitation">
        <img src={Precipitation} alt="precipitation icon" />
        <div className="weather-text">
            <span className="weather-metric-type">Precipitation</span>
            <span className="weather-metric-value">{precipitation} %</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
