import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import video from "./video.mp4";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <video className="videoTag" autoPlay loop muted>
      <source src={video} type="video/mp4" />
    </video>
    ;
    <App />
  </React.StrictMode>
);
reportWebVitals();
