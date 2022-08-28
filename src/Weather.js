import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      coords: response.data.coord,
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      timezoneOffset: response.data.timezone,
    });
  }

  function showLocation(event) {
    event.preventDefault();
    navigator.geolocation.getCurrentPosition(searchLocation);
  }

  function searchLocation(position) {
    const currentCoords = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
    search(currentCoords);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const searchedCity = `q=${city}`;
    search(searchedCity);
    event.target.reset();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search(location) {
    const apiKey = "47cf9a4f3105e2e2829ab9feb92923d1";
    const apiUnits = "metric";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?${location}&appid=${apiKey}&units=${apiUnits}`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-8">
              <input
                type="search"
                placeholder="Type a city..."
                className="form-control"
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-2">
              <input type="submit" value="Go" className="btn btn-secondary" />
            </div>
            <div className="col-2 ">
              <input
                type="submit"
                value="🏠"
                className="btn btn-secondary"
                onClick={showLocation}
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coords={weatherData.coords} />
      </div>
    );
  } else {
    search(city);
    return "Loading...";
  }
}
