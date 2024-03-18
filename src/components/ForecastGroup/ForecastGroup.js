import React from 'react';
import ForecastCard from '../ForecastCard/ForecastCard';
import './ForecastGroup.css';

// This is an example prop structure, adjust it according to your actual data needs


const ForecastGroup = ({ data }) => {
  return (
    <div className="forecast-group">
      {data.map((item) => (
        <ForecastCard
          day={item.day}
          date={item.date}
          temperature={item.temperature}
        />
      ))}
    </div>
  );
};

export default ForecastGroup;
