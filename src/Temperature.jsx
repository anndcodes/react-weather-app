import "./Temperature.css";
import { IconTemperatureCelsius } from "@tabler/icons-react";

function Temperature(props) {
  return (
    <div className="Temperature d-flex">
      <h2 id="temperature">{props.celsius}</h2>
      <span className="units">
        <IconTemperatureCelsius color="#90A8C8" />
      </span>
    </div>
  );
}

export default Temperature;
