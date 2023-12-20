import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css"

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="city">{props.data.city}</h1>
      <ul className="m-0 p-0">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize" id="description">
          {props.data.description}
        </li>
      </ul>
      <div className="row d-flex align-items-center">
        <div className="col-6 d-flex align-items-baseline">
          <WeatherIcon code={props.data.icon} size={60} />
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
