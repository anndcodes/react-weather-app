import { useState } from "react";
import "./Temperature.css";

function Temperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function fahrenheit() {
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="Temperature d-flex">
        <h2 id="temperature">{props.celsius}</h2>
        <span className="units">
          C° |{" "}
          <a href="#" onClick={convertToFahrenheit}>
            F°
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Temperature d-flex">
        <h2 id="temperature">{Math.round(fahrenheit())}</h2>
        <span className="units">
          <a href="#" onClick={convertToCelsius}>
            C°
          </a>{" "}
          | F°
        </span>
      </div>
    );
  }
}

export default Temperature;
