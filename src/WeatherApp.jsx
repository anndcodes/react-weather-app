import SearchForm from "./SearchForm";
import TemperatureApp from "./TemperatureApp";


function WeatherApp() {
  
  return (
    <div className="weather-app px-5 rounded-4 shadow-lg">
      <SearchForm />
      <TemperatureApp city="paris"/>
    </div>
  );
}

export default WeatherApp;
