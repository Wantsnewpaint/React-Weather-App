import React from "react";
import "./Weather.css";

export default function Weather() {
    return(
        <div className="wrapper">
    <div className="Weather">
        <div className="header">
        <div className="search-bar">
            <form className="Search-form">
            <input type="search" placeholder="Enter a city" className="form-control search-input" id="searchCity" autocomplete="off" />
            <input type="submit" class="btn btn-primary w-100" value="Search"></input>
            </form>
        </div>
        </div>


    <div className="information">
        <div className="row">
          <h1 className="mainCity">Montevideo</h1>
        
          <div className="mainTemp col-6"><strong id="temperature">12</strong>
            <span className="units">°C</span>
            <img src ="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" id="weatherImage" />
            </div>
 
            <div className="col-6">
            <ul>
              <b><li id="currentDate">Friday June 11, 2021 at 9:50 AM</li></b>
              <li id="description">Partly Cloudy</li>
              <li>Today's High: <strong id="tempHigh">12</strong>°</li>
              <li>Humidity: <strong id="humidity">55</strong>%</li>
              <li>Wind Speed: <strong id="windSpeed">13</strong> km/h</li>
            </ul>
            </div>
        </div>
    </div>

</div>
    </div>
    )
}