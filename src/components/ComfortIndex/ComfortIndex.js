import React from 'react';
import CircularProgress from '../CircularProgress/CircularProgress';
import CyclingGif from '../../assets/GIF/cycling.gif';
import './ComfortIndex.css';

// Algorithm to calculate the comfort index based on temperature, humidity, wind speed, and weather condition
function calculateComfortLevel(weatherData) {
  // Return 0 if the weather data is invalid
  if (!weatherData || !weatherData.main || !weatherData.weather || weatherData.weather.length === 0) {
    console.error("Invalid weather data:", weatherData);
    return 0;
  }

  // Base case for comfort level calculation
  let comfortLevel = 100; // Start with a base comfort level of 100

  // Reduce the comfort level based on temperature, humidity, and wind speed, where attributes differ from the ideal
  comfortLevel -= (
    0.1 * Math.pow(weatherData.main.temp - 20, 2) +
    0.03 * Math.pow(weatherData.main.humidity - 50, 2) +
    0.1 * Math.pow(weatherData.wind.speed - 10, 2)
  );

  // Reduce the comfort level based on the weather condition
  if (weatherData.weather[0].main === 'Rain' || weatherData.weather[0].main === 'Drizzle') {
    comfortLevel -= 15;
  } else if (weatherData.weather[0].main === 'Snow') {
    comfortLevel -= 25;
  } else if (weatherData.weather[0].main === 'Thunderstorm') {
    comfortLevel -= 30;
  }

  // Ensure the comfort level is within the range of -100 to 100
  comfortLevel = Math.max(-100, Math.min(comfortLevel, 100));
  return Math.round(comfortLevel);
}

const ComfortIndex = ({ size, strokeWidth, weatherData}) => {
  // Calculate the comfort level based on the weather data
  const progress = calculateComfortLevel(weatherData);
  // Size the giff inside the comfort index based on the size of the comfort index
  const gifSize = size * 0.00225;

  return (
      <div className="comfort-index" width={size} height={size}>
          <CircularProgress size={size} progress={progress} strokeWidth={strokeWidth}/>
          <div className="centered-content">
              <img src={CyclingGif} style={{transform: `scale(${gifSize})`}} alt="gif of cyclist pedaling" />
          </div>
          <p className="comfort-text">COMFORT</p>
      </div>
  );
};

export default ComfortIndex;
