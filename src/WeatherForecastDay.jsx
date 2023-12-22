import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  return (
    <div className="forecast-daily">
      <p className="forecast-day">{day()}</p>
      <WeatherIcon code={props.data.weather[0].icon} size={35} />

      <div className="forecast-temperatures">
        <span className="max-temp">{maxTemperature()}</span>
        <span className="min-temp">{minTemperature()}</span>
      </div>
    </div>
  );
}

export default WeatherForecastDay;
