// Location.js
import React from 'react';
import { fetchWeatherByCoords } from '../API/FetchWeather';
import './Location.css';
import LocationSvg from '../../assets/vectors/location.svg';
const Location = ({ setWeatherData, onLocationSuccess }) => { // Receive setCity as prop
    const getGeolocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                fetchWeatherByCoords(latitude, longitude, setWeatherData, onLocationSuccess); // Pass setCity as argument
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
                <img src={LocationSvg} className="" alt="Use My Location"/>
            </button>
        </div>
    );
};

export default Location;