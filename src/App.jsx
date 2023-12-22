import { useState } from "react";
import "./App.css";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app rounded-4">
            <SearchForm defaultCity="sao paulo" />
          </div>
          <footer>
            Open-source code by Annd on {""}
            <a
              href="https://github.com/anndcodes/react-weather-app"
              target="_blank"
            >
              <strong>Github</strong>
            </a>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
