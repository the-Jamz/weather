import React from 'react';
import './WeatherCard.css'; // Your CSS file


const capitalizeWords = (words) => {
  return words.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

const getCurrentDay = () => {
  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const monthsOfYear = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const today = new Date();
  const dayOfWeek = daysOfWeek[today.getDay()];
  const month = monthsOfYear[today.getMonth()];
  const dayOfMonth = today.getDate();

  return `${dayOfWeek}, ${dayOfMonth} ${month}`;
}

const WeatherCard = ({city, description, temp, feels_like}) => {
  const currentDay = getCurrentDay();
  return (
    <div className="weather-card">
      <div className="weather-visual"><img className="weather-card-icon" src="/vectors/cloud.svg" /></div>
      <div className="weathercard-temperature-section">
        <div className="weathercard-temperature">{temp}°C</div>
        <div className="feels-like">Feels like {feels_like}°C</div>
      </div>
        <div className="weathercard-description-section">
            <div className="weather-description">{capitalizeWords(description)}</div>
            <div className="weathercard-city">{city}</div>
            <div className="weathercard-date">{currentDay}</div>
        </div>
        <div className="weathercard-icon"><img className="cyclist-icon" src="/vectors/cyclist.svg" /></div>
    </div>
  );
};

export default WeatherCard;
