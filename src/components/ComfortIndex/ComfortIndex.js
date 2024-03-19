import React from 'react';
import CircularProgress from '../CircularProgress/CircularProgress';
import './ComfortIndex.css';




const ComfortIndex = ({ size, strokeWidth, weatherData}) => {

    function calculateComfortLevel(weatherData) {
      if (!weatherData || !weatherData.main || !weatherData.weather || weatherData.weather.length === 0) {
        console.error("Invalid weather data:", weatherData);
        return 0;
      }

      let comfortLevel = 100; // Start with a base comfort level of 100

      comfortLevel -= (
        0.1 * Math.pow(weatherData.main.temp - 20, 2) +
        0.03 * Math.pow(weatherData.main.humidity - 50, 2) +
        0.1 * Math.pow(weatherData.wind.speed - 10, 2)
      );

      if (weatherData.weather[0].main === 'Rain' || weatherData.weather[0].main === 'Drizzle') {
        comfortLevel -= 15;
      } else if (weatherData.weather[0].main === 'Snow') {
        comfortLevel -= 25;
      } else if (weatherData.weather[0].main === 'Thunderstorm') {
        comfortLevel -= 30;
      }

      comfortLevel = Math.max(-100, Math.min(comfortLevel, 100));
      return Math.round(comfortLevel);
    }
    
    const progress = calculateComfortLevel(weatherData);
    const scale = size / 200;

    return (
        <div className="comfort-index" width={size} height={size}>
            <CircularProgress size={size} progress={progress} strokeWidth={strokeWidth} />
                <div className="centered-content">
                    <img src="/vectors/weather-lines/icons/rain.svg" style={{ transform: `scale(${scale})` }} />
                </div>
            <p className="comfort-text">COMFORT</p>
        </div>
    );
};

export default ComfortIndex;
