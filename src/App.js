import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <footer className="App-footer">
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
