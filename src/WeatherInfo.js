import React from "react";
import DayAndTime from "./DayAndTime";
import MonthAndYear from "./MonthAndYear";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <DayAndTime date={props.data.date} />
        </li>
        <li>
          <MonthAndYear />
        </li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6 m-auto">
              <WeatherIcon
                icon={props.data.icon}
                size={72}
               />
            </div>
            <div className="col-6 m-auto">
              <span className="temperature">
                {Math.round(props.data.temperature)}
              </span>
              <sup className="units">C | F </sup>
            </div>
          </div>
          <div className="main-img-description text-capitalize">
            {props.data.description}
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>Sunrise</li>
            <li>Sunset</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
