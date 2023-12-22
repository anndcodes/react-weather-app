import "./SearchForm.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

import { useState } from "react";

function SearchForm(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      feelsLike: response.data.main.feels_like,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "aa09763d916df0424c840d55bfc2d2c9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="SearchForm">
        <form onSubmit={handleSubmit} className="search-form">
          <div className="row justify-content-end">
            <div className="col-7 col-md-5">
              <input
                onChange={handleCityChange}
                className="form-control shadow"
                type="search"
                id="search"
                placeholder="Enter a city"
                autoFocus="on"
                autoComplete="off"
              />
            </div>
            <div className="col-5 col-md-3">
              <button
                type="submit"
                className="form-control btn shadow"
                id="search-btn"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    search();
    return "Loading";
  }
}

export default SearchForm;
