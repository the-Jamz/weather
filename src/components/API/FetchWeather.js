import axios from 'axios';
const api = {
  key: "47525f0e1fc90897595c78f5cbffc723",
  base: "https://api.openweathermap.org/data/2.5/"
};

const processWeatherData = (weatherData) => {
  const groupedByDay = {};

  // group all entries by day
  var j = 0;
  for (var i = 0; i < weatherData.list.length; i++) {
    var entry = weatherData.list[i];
    const date = new Date(entry.dt * 1000);
    const dayKey = date.toISOString().split('T')[0];

    if (!groupedByDay[dayKey]) {
      groupedByDay[dayKey] = { id: j, weather: [], temp_min: Infinity, temp_max: -Infinity };
      j += 1;
      groupedByDay[dayKey].temp_min = Infinity;
      groupedByDay[dayKey].temp_max = -Infinity;
    }

    groupedByDay[dayKey].weather.push(entry);
    groupedByDay[dayKey].temp_min = Math.min(groupedByDay[dayKey].temp_min, entry.main.temp_min);
    groupedByDay[dayKey].temp_max = Math.max(groupedByDay[dayKey].temp_max, entry.main.temp_max);
  }

  // process the grouped data
  const dailyForecasts = [];
  for (const [day, entries] of Object.entries(groupedByDay)) {
    const date = new Date(day);
    const dayOfWeek = date.toLocaleString('en-US', { weekday: 'short' });
    const shortDate = date.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });

    const representativeWeather = entries.weather[0].weather[0];

    dailyForecasts.push({
      id: entries.id,
      day: dayOfWeek,
      date: shortDate,
      temperature_hi: Math.round(groupedByDay[day].temp_max),
      temperature_lo: Math.round(groupedByDay[day].temp_min),
      weather: representativeWeather.main,
      description: representativeWeather.description,
    });
  }

  return dailyForecasts;
};

const fetchForecastByCoords = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `${api.base}forecast?lat=${latitude}&lon=${longitude}&exclude=current,minutely,hourly&units=metric&appid=${api.key}`
    );
    const processedData = processWeatherData(response.data);
    return processedData;
  } catch (error) {
    console.error('Error fetching and processing weather data:', error);
    return [];
  }
};

const fetchWeatherByCoords = async (latitude, longitude, setWeather, onLocationSuccess) => {
  try {
    const response = await axios.get(
      `${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`
    );
    setWeather(response.data);
    onLocationSuccess(response.data.name);

  } catch (error) {
    console.error('Error fetching weather by coordinates:', error);
  }

};


const fetchWeatherByCity = async (city, setWeather) => {
  try {
    const response = await axios.get(
      `${api.base}weather?q=${city}&units=metric&appid=${api.key}`
    );
    setWeather(response.data);
  } catch (error) {
    return null;
  }
};

export { fetchWeatherByCoords, fetchWeatherByCity, fetchForecastByCoords };
