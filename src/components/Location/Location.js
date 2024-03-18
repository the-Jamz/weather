// Location.js
import React from 'react';
import { fetchWeatherByCoords } from '../API/FetchWeather';
import './Location.css';

const Location = ({ setWeatherData, handleLocationSuccess }) => { // Receive setCity as prop
    const getGeolocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherByCoords(latitude, longitude, setWeatherData, handleLocationSuccess); // Pass setCity as argument
            }, (error) => {
                console.error('Error obtaining location:', error);
            });
        } else {
            alert('Geolocation is not supported by this browser.');
        }
    };

    return (
        <div className="button-container">
            <button className="use-my-location-button" onClick={getGeolocation}>
                Use My Location
            </button>
        </div>
    );
};

export default Location;