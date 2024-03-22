import React, { useEffect, useState } from 'react';
import Alert from '../components/Alert/Alert';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import ComfortIndex from '../components/ComfortIndex/ComfortIndex';
import DetailsCard from '../components/DetailsCard/DetailsCard';
import ForecastGroup from '../components/ForecastGroup/ForecastGroup';
import Header from '../components/Header/Header';
import { fetchWeatherByCity } from '../components/API/FetchWeather';
import RainGif from '../assets/GIF/rain.gif';
import './app.css';

const App = () => {
    // State hooks for storing weather data and the search query
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        // Fetch weather data for default city on initial render
        fetchWeatherByCity('London,UK', setWeatherData);
    }, []);

    return (
        <main style={weatherData && weatherData.weather[0].main === 'Rain' ? {
            backgroundImage: `url(${RainGif})`,
        } : {}}>
            { /* Header and inner components including menu, gear recommender, and saved locations */ }
            <Header weatherData={weatherData} setWeatherData={setWeatherData} />
            { /* Alert component for displaying weather warnings */}
            <div className="weather-alert">
                {weatherData ? (
                    <Alert message={weatherData.weather[0].main}/>
                ) : (
                    <p>Loading weather data...</p>
                )}
            </div>
            <div>
                { /* Upper card containing main current weather details */ }
                {weatherData ? (
                    <WeatherCard city={weatherData.name} description={weatherData.weather[0].description}
                                temp={Math.round(weatherData.main.temp)}
                                feels_like={Math.round(weatherData.main.feels_like)}/>
                ) : (
                    <p>Loading weather data...</p>
                )}
            </div>
            { /* Comfort index gauge demonstrating how conducive the weather to cycling */}
            <div className="comfort-index">
                {weatherData ? (
                    <ComfortIndex size={250} strokeWidth={20} weatherData={weatherData}/>
                ) : (
                    <p>Loading weather data...</p>
                )}
            </div>
            { /* Details of the weather including the humidity, wind, uv index, and precipitation */ }
            <div>
                {weatherData ? (
                    <DetailsCard humidity={weatherData.main.humidity} wind={Math.round(weatherData.wind.speed)}
                                uvIndex={11} precipitation={20}/>
                ) : (
                    <p>...</p>
                )}
            </div>
            { /* Forecast group displaying the weekly weather forecast */ }
            <h2>Weekly Forecast</h2>
            {weatherData ? (
                <ForecastGroup data={weatherData}/>
            ) : (
                <p>...</p>
            )}
        </main>
    );
};

export default App;

