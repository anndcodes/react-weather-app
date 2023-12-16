import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";

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
          <WeatherIcon code={props.data.icon}/>
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
