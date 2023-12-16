import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
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
          <WeatherIcon code={props.data.icon} />
          <Temperature celsius={props.data.temperature} />
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

export default WeatherInfo;
