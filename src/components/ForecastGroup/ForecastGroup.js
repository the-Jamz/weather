import React, { useState, useEffect } from 'react';
import ForecastCard from '../ForecastCard/ForecastCard';
import { fetchForecastByCoords } from '../API/FetchWeather';
import './ForecastGroup.css';

const ForecastGroup = ({ data }) => {
  const [weatherForecast, setWeatherForecast] = useState(null);

  useEffect(() => {
    if (data?.coord) {
      const fetchAndSetForecast = async () => {
        const forecast = await fetchForecastByCoords(data.coord.lat, data.coord.lon);

        setWeatherForecast(forecast);
      };
      fetchAndSetForecast();
    }
  }, [data?.coord?.lat, data?.coord?.lon]);

  return (
    <div className="forecast-group">
      {weatherForecast?.map((item) => (
        <div key={item.id} className="forecast-group-child-card">
          <ForecastCard
          day={item.day}
          date={item.date}
          temperature_hi={item.temperature_hi}
          temperature_lo={item.temperature_lo}
        />
        </div>
      ))}
    </div>
  );
};

export default ForecastGroup;
