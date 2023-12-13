import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WeatherApp from "./WeatherApp";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <WeatherApp />
        <footer>
          Open-source code by Annd on {""}
          <a href="https://github.com/anndcodes/react-weather-app" target="_blank"><strong>Github</strong></a>
        </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
