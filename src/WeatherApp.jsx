import Overview from "./Overview";
import SearchForm from "./SearchForm";

function WeatherApp() {
  return (
    <div className="weather-app px-5 rounded-4 shadow-lg">
      <SearchForm />
      <Overview />
    </div>
  );
}

export default WeatherApp;
