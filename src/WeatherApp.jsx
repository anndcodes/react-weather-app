import Overview from "./Overview";
import SearchForm from "./SearchForm";
import TemperatureApp from "./TemperatureApp";

function WeatherApp() {
  return (
    <div className="weather-app px-5 rounded-4 shadow-lg">
      <SearchForm />
      <Overview />
      <TemperatureApp />
    </div>
  );
}

export default WeatherApp;
