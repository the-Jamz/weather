import React from 'react';
import Weather from '../weather';
import Alert from '../components/Alert/Alert';
import WeatherCard from '../components/WeatherCard/WeatherCard';
import ComfortIndex from '../components/ComfortIndex/ComfortIndex';
import DetailsCard from '../components/DetailsCard/DetailsCard';
import './app.css';

const App = () => {
  return (
    <div>
      <div className="weather-alert">
        <Alert message="Snow" />
      </div>
      <div>
        <WeatherCard />
      </div>
      <div className="comfort-index">
        <ComfortIndex size={250} progress={50} strokeWidth={20} />
      </div>
      <div>
        <DetailsCard humidity={60} wind={5} uvIndex={11} precipitation={20} />
      </div>
      <h1>Weather Forecast App</h1>
      <Weather />
    </div>
  );
};

export default App;
// test
