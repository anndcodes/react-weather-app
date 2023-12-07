function TemperatureApp() {
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
            <div id="description">Sunny</div>
          </div>
        </div>
        <div className="weather col-6">
          <div className="d-flex gap-2">
            <h2 id="temperature">38</h2>
          </div>
          <div>
            <span className="units">
              <a href="#" id="celsius" className="active">°C</a> 
              |
              <a href="#" id="fahrenheit">°F</a>
            </span>
            <p>
              <small className="weather-data">
                <span className="humidity">Humidity: 80%</span>
                <div className="wind">Wind: 10km/h</div>
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemperatureApp