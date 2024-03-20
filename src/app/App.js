import React, { useEffect, useState } from 'react';
import Alert from '../components/Alert/Alert';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import ComfortIndex from '../components/ComfortIndex/ComfortIndex';
import DetailsCard from '../components/DetailsCard/DetailsCard';
import ForecastGroup from '../components/ForecastGroup/ForecastGroup';
import Header from '../components/Header/Header';
import axios from 'axios';
import './app.css';

const fetchWeatherData = async (city, setWeatherData) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=47525f0e1fc90897595c78f5cbffc723`
    );
    setWeatherData(response.data);
  } catch (error) {
    console.error(error);
  }
};

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [query, setQuery] = useState('');

  useEffect(() => {
    // Fetch weather data for default city on initial render
    fetchWeatherData('London,UK', setWeatherData);
  }, []);

  return (
    <main>
        <Header setWeatherData={setWeatherData} setQuery={setQuery} />
      <div className="weather-alert">
          { weatherData ? (
              <Alert message={weatherData.weather[0].main} />
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
      <div>
        { weatherData ? (
          <WeatherCard city ={weatherData.name} description={weatherData.weather[0].description} temp={Math.round(weatherData.main.temp)} feels_like={Math.round(weatherData.main.feels_like)} />
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
      <div className="comfort-index">
        { weatherData ? (
          <ComfortIndex size={250} strokeWidth={20} weatherData={weatherData} />
        ) : (
          <p>Loading weather data...</p>
        )}
      </div>
      <div>
        { weatherData ? (
          <DetailsCard humidity={weatherData.main.humidity} wind={Math.round(weatherData.wind.speed)} uvIndex={11} precipitation={20} />
        ) : (
          <p>...</p>
        )}
      </div>
      <h2>Weekly Forecast</h2>
      { weatherData ? (
        <ForecastGroup data={weatherData} />
      ) : (
        <p>...</p>
      )}
    </main>
  );
};

export default App;

