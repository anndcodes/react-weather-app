// import "./TemperatureApp.css";

import axios from "axios";
import { useState } from "react";
import FormattedDate from "./FormattedDate"

function TemperatureApp(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      name: response.data.name,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
    setReady(true);
  }

  if (weatherData.ready) {
    return (
      <div className="TemperatureApp">
        <h1>{weatherData.name}</h1>
        <ul>
          <li><FormattedDate date={weatherData.date}/></li>
          <li className="text-capitalized" id="description">
            {weatherData.description}
          </li>
        </ul>
        <div className="row">
          <div className="col-6 d-flex">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt={weatherData.description}
            />
            <h2 id="temperature">{weatherData.temperature}</h2>
            <span className="units">
              <a href="#" id="celsius" className="active">
                °C
              </a>
              |
              <a href="#" id="fahrenheit">
                °F
              </a>
            </span>
          </div>

          <div className="col-6">
            <ul className="weather-data">
              <li className="humidity">Humidity: {weatherData.humidity}%</li>
              <li className="wind">Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "aa09763d916df0424c840d55bfc2d2c9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return "Loading";
  }
}

export default TemperatureApp;
