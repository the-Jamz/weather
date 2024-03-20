import axios from 'axios';
const api = {
  key: "47525f0e1fc90897595c78f5cbffc723",
  base: "https://api.openweathermap.org/data/2.5/"
};

const fetchWeatherByCoords = async (latitude, longitude, setWeather, onLocationSuccess) => {
  try {
    const response = await axios.get(
      `${api.base}weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${api.key}`
    );
    setWeather(response.data);
    console.log(response.data.name)
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
    console.error('Error fetching weather by city:', error);
  }
};

export { fetchWeatherByCoords, fetchWeatherByCity };
