import FormattedDate from "./FormattedDate";
import Temperature from "./Temperature";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css"
import { IconWind } from "@tabler/icons-react";
import { IconThermometer } from "@tabler/icons-react";
import { IconDropletQuestion } from "@tabler/icons-react";

function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 id="city">{props.data.city}</h1>
      <ul className="weather-infos m-0 p-0 ">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize" id="description">
          {props.data.description}
        </li>
      </ul>
      <div className="weather-temp row d-flex align-items-center">
        <div className="temperature-section col d-flex align-items-baseline">
          <WeatherIcon code={props.data.icon} size={60} />
          <Temperature celsius={props.data.temperature} />
        </div>

        <div className="weather-data-section col d-md-flex justify-content-end">
          <ul className="weather-data">
            <li className="feels-like">
              <IconThermometer/> {Math.round(props.data.feelsLike)}° <span>|</span>
            </li>
            <li className="humidity">
              <IconDropletQuestion/> {props.data.humidity}% <span>|</span>
            </li>
            <li className="wind"><IconWind/> {props.data.wind}km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WeatherInfo;
