import React, { useState, useEffect } from 'react';
import ForecastCard from '../ForecastCard/ForecastCard';
import { fetchForecastByCoords } from '../API/FetchWeather';
import './ForecastGroup.css';

const ForecastGroup = ({ data }) => {
  const [weatherForecast, setWeatherForecast] = useState(null);  // State to hold the weather forecast

  useEffect(() => {
    if (data?.coord) {  // Check if coordinates are provided
      const fetchAndSetForecast = async () => {
        const forecast = await fetchForecastByCoords(data.coord.lat, data.coord.lon);  // Fetch weather forecast using provided coordinates
        setWeatherForecast(forecast);
      };
      fetchAndSetForecast();  // Call the async function to fetch and set forecast
    }
  }, [data?.coord?.lat, data?.coord?.lon]);  // Effect depends on latitude and longitude

  return (
    <div className="forecast-group">
      {weatherForecast?.map((item) => (  // Render forecast cards for each forecast item if available
        <div key={item.id} className="forecast-group-child-card">  
          <ForecastCard
            day={item.day}
            date={item.date}
            temperature_hi={item.temperature_hi}
            temperature_lo={item.temperature_lo}
            description={item.description}
          />
        </div>
      ))}
    </div>
  );
};

export default ForecastGroup;
