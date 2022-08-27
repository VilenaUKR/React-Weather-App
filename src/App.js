import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import DarkModeToggle from "react-dark-mode-toggle";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("theme" ? "light" : "dark");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <div className="App" data-theme={theme}>
      <div className="container">
        <Weather defaultCity="Kyiv" />
        <footer className="App-footer text-center">
          <p>
            This project was coded by{" "}
            <a
              className="Portfolio-site-link"
              href="https://vilena-martirosova.netlify.app/index.html"
              target="_blank"
              rel="noreferrer"
            >
              Vilena Martirosova
            </a>{" "}
            and is{" "}
            <a
              className="GitHub-link"
              href="https://github.com/VilenaUKR/React-Weather-App"
              target="_blank"
              rel="noreferrer"
            >
              open-sourced on GitHub
            </a>
            <div className="DarkModeToggle">
              <DarkModeToggle
                onChange={toggleTheme}
                checked={theme === "light"}
                size={50}
              />
            </div>{" "}
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
