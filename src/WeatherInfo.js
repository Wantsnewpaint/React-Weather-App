import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
    return (
       <div className="information">
        <div className="row">
    <h1 className="mainCity">{props.data.city}</h1>
    <div className="mainTemp col-6">
        <div className="clearfix">

          <WeatherIcon code={props.data.icon} />
 
        <span className="displayTemp">{Math.round(props.data.temperature)}</span>
      <span className="units">°C</span>
      </div>
      </div>

      <div className="col-6">
      <ul>
        <b><li><FormatDate date={props.data.date} /></li></b>
        <li className="text-capitalize">{props.data.description}</li>
        <li>Today's High: <strong>{Math.round(props.data.tempMax)}</strong>°</li>
        <li>Humidity: <strong>{props.data.humidity}</strong>%</li>
        <li>Wind Speed: <strong>{props.data.wind}</strong> km/h</li>
      </ul>
      </div>
      </div>
  </div>
  );
}