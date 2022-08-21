import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      date: response.data.main.humidity,
      month: response.data.main.humidity,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoFocus="on"
              ></input>
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Search"
                className="btn btn-secondary w-100"
              ></input>
            </div>
            <div className="col-2">
              <input
                type="submit"
                value="Current"
                className="btn btn-secondary w-100"
              ></input>
            </div>
          </div>
        </form>
        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li>{weatherData.month}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="row">
              <div className="col-6 m-auto">
                <img
                  src={weatherData.icon}
                  alt={weatherData.description}
                  width={110}
                ></img>
              </div>
              <div className="col-6 m-auto">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <sup className="units">C | F </sup>
              </div>
            </div>
            <div className="main-img-description text-capitalize">
              {weatherData.description}
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity} %</li>
              <li>Wind: {weatherData.wind} km/h</li>
              <li>Sunrise</li>
              <li>Sunset</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "47cf9a4f3105e2e2829ab9feb92923d1";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
