import "./TemperatureApp.css";

import axios from "axios";
import { useState } from "react";

function TemperatureApp(props) {
  // const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
    console.log(response.data)
    setWeatherData ({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    })
    setReady(true)

  }

  if(weatherData.ready) {
    return (
      <div className="TemperatureApp">
        <div className="row">
          <div className="col-3 d-flex justify-content-start weather-temperature">
            <div className="weather-status d-flex flex-column align-items-center row-gap-3">
              <div className="weather-img">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                  alt="weather icon"
                />
              </div>
              <div id="description" className="text-capitalized">{weatherData.description}</div>
            </div>
          </div>
          <div className="weather col-6">
            <div className="d-flex gap-2">
              <h2 id="temperature">{weatherData.temperature}</h2>
              <div>
                <span className="units">
                  <a href="#" id="celsius" className="active">
                    °C
                  </a>
                  |
                  <a href="#" id="fahrenheit">
                    °F
                  </a>
                </span>
                <p>
                  <small className="weather-data">
                    <span className="humidity d-block">Humidity: {weatherData.humidity}%</span>
                    <span className="wind d-block">Wind: {weatherData.wind}km/h</span>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "aa09763d916df0424c840d55bfc2d2c9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  
    axios.get(apiUrl).then(handleResponse);
    return "Loading"
  }

  
}

export default TemperatureApp;
