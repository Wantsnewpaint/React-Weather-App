import React from "react";
import "./Weather.css";

export default function Weather() {
    return(
        <div className="wrapper">
    <div className="Weather">
        <div className="header">
        <div className="search-bar">
            <form className="Search-form">
            <input type="search" placeholder="Enter a city" className="form-control search-input" autocomplete="off" />
            <input type="submit" class="btn btn-primary w-100" value="Search"></input>
            </form>
        </div>
        </div>


    <div className="information">
        <div className="row">
          <h1 className="mainCity">Montevideo</h1>
        
          <div className="mainTemp col-6"><strong>12</strong>
            <span className="units">°C</span>
            <img src ="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" alt="partly-cloudy" />
            </div>
 
            <div className="col-6">
            <ul>
              <b><li>Friday June 11, 2021 at 9:50 AM</li></b>
              <li>Partly Cloudy</li>
              <li>Today's High: <strong>12</strong>°</li>
              <li>Humidity: <strong>55</strong>%</li>
              <li>Wind Speed: <strong>13</strong> km/h</li>
            </ul>
            </div>
        </div>
    </div>

</div>
<footer><small>
        <a href="https://github.com/Wantsnewpaint/React-Weather-App" target="_blank" rel="noreferrer">Open-source code</a> by Bridget Young
        </small></footer>
    </div>
    )
}