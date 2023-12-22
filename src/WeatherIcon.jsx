import ReactAnimatedWeather from "react-animated-weather";

function WeatherIcon(props) {
  // console.log(props.code)
  const codeMapping = {
    "01d": "CLEAR_DAY",
    "01n": "CLEAR_NIGHT",
    "02d": "PARTLY_CLOUDY_DAY",
    "02n": "PARTLY_CLOUDY_NIGHT",
    "03d": "PARTLY_CLOUDY_DAY",
    "03n": "PARTLY_CLOUDY_NIGHT",
    "04d": "CLOUDY",
    "04n": "CLOUDY",
    "09d": "RAIN",
    "09n": "RAIN",
    "10d": "RAIN",
    "10n": "RAIN",
    "11d": "SLEET",
    "11n": "SLEET",
    "13d": "SNOW",
    "13n": "SNOW",
    "50d": "FOG",
    "50n": "FOG",
  }
  return (
    <ReactAnimatedWeather
      icon={codeMapping[props.code]}
      color={"#90A8C8"}
      size={props.size}
      animate={true}
    />
  );
}

export default WeatherIcon;
