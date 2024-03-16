import React from 'react';
import './DetailsCard.css';
// Import your icons here. For example:
// import { ReactComponent as HumidityIcon } from './icons/humidity.svg';
// Repeat for the other icons.

const DetailsCard = ({ humidity, wind, uvIndex, precipitation }) => {
  return (
    <div className="details-card">
      <div className="weather-metric humidity">
        <img src="/vectors/humidity.svg" />
        <div className="icon-humidity"></div>
        <div className="weather-text">
            <span className="weather-metric-type">Humidity</span>
            <span className="weather-metric-value">{humidity} %</span>
        </div>
      </div>
      <div className="weather-metric wind">
        <img src="/vectors/wind.svg" />
        <div className="weather-text">
            <span className="weather-metric-type">Wind</span>
            <span className="weather-metric-value">{wind} MPH</span>
        </div>
      </div>
      <div className="weather-metric uv-index">
        <img src="/vectors/sun.svg" />
        <div className="weather-text">
            <span className="weather-metric-type">UV Index</span>
            <span className="weather-metric-value">{uvIndex}</span>
        </div>
      </div>
      <div className="weather-metric precipitation">
        <img src="/vectors/precipitation.svg" />
        <div className="weather-text">
            <span className="weather-metric-type">Precipitation</span>
            <span className="weather-metric-value">{precipitation} %</span>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
