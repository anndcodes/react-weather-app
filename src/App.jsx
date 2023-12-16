import { useState } from "react";
import "./App.css";
import SearchForm from "./SearchForm";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app px-5 rounded-4 shadow-lg">
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
