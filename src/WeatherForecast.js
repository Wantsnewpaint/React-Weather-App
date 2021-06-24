import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    function handleResponse(response) {
        console.log(response.data);
    }

    const apiKey = "dc3dd8fad72c3a037e39c29f90d88da6";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse)

    return <div className="WeatherForecast">
        <div className="row">
            <div className="col">
                <div className="ForecastDay">Wed</div>
                <WeatherIcon code="01d" size={32} />
                <div className="ForecastTemperature">
                    <span className="ForecastTemp-max">23</span>
                    <span className="ForecastTemp-min">18</span>
                </div>
            </div>
        </div>
    </div>
}