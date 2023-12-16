import FormattedDate from "./FormattedDate";

function TemperatureApp(props) {
  return (
    <div className="TemperatureApp">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalized" id="description">
          {props.data.description}
        </li>
      </ul>
      <div className="row">
        <div className="col-6 d-flex">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt={props.data.description}
          />
          <h2 id="temperature">{props.data.temperature}</h2>
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
            <li className="humidity">Humidity: {props.data.humidity}%</li>
            <li className="wind">Wind: {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TemperatureApp;
