import React from "react";
import DayAndTime from "./DayAndTime";
import MonthAndYear from "./MonthAndYear";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import Sunrise from "./Sunrise";
import Sunset from "./Sunset";
import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6 text-left">
          {" "}
          <ul>
            <li>
              <DayAndTime date={props.data.date} />
            </li>
            <li>
              <MonthAndYear />
            </li>
          </ul>
        </div>{" "}
        <div className="col-6 text-right">
          <h1>{props.data.city}</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6 m-auto">
              <WeatherIcon icon={props.data.icon} size={65} />
            </div>
            <div className="col-6 m-auto">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
          <div className="main-img-description text-capitalize">
            {props.data.description}
          </div>
        </div>
        <div className="descriptions-weather col-1"></div>
        <div className="col-5">
          <ul className="">
            <li>Humidity: {props.data.humidity} %</li>
            <li>Wind: {props.data.wind} km/h</li>
            <li>
              Sunrise:{" "}
              <Sunrise
                sunrise={props.data.sunrise}
                timezoneOffset={props.data.timezoneOffset}
              />
            </li>
            <li>
              Sunset:{" "}
              <Sunset
                sunset={props.data.sunset}
                timezoneOffset={props.data.timezoneOffset}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
