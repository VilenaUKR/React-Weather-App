import "./App.css";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="App">
      <Weather  defaultCity="Kyiv"/>
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
        </p>
      </footer>
    </div>
  );
}

export default App;
