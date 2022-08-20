import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1>Kyiv</h1>
      <ul>
        <li>Saturday 07.00</li>
        <li>August 20, 2022</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6 m-auto">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                alt="Sunny"
                width={110}
              ></img>
            </div>
            <div className="col-6 m-auto">
              <span className="temperature">21°</span>
              <sup className="units">C | F </sup>
            </div>
          </div>
          <div className="main-img-description">Sunny</div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity</li>
            <li>Wind</li>
            <li>Sunrise</li>
            <li>Sunset</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
