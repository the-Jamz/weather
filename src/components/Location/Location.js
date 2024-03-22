import React from 'react';
import { fetchWeatherByCoords } from '../API/FetchWeather';
import './Location.css';
import LocationSvg from '../../assets/vectors/location.svg';

// Defines the Location component which handles geolocation for fetching weather data.
const Location = ({ setWeatherData, onLocationSuccess }) => {
    // Function to get the user's geolocation and fetch weather data for that location.
    const getGeolocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherByCoords(latitude, longitude, setWeatherData, onLocationSuccess);
            }, (error) => {
                console.error('Error obtaining location:', error);
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    // Renders a button that when clicked, triggers geolocation fetching.
    return (
        <div className="button-container">
            <button className="use-my-location-button" onClick={getGeolocation}>
                <img src={LocationSvg} className="" alt="Use My Location"/>
            </button>
        </div>
    );
};

export default Location;
