import React, { useState, useEffect } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

export default function WeatherForecast(props) {
    let [ready, setReady] = useState(false);
    let [forecast, setForecast] = useState(null);

    useEffect(() =>{
        setReady(false);
    }, [props.coordinates]);

    function handleResponse(response) {
        setForecast(response.data.daily);
        setReady(true);
    }

    function load() {
        const apiKey = "dc3dd8fad72c3a037e39c29f90d88da6";
        let longitude = props.coordinates.lon;
        let latitude = props.coordinates.lat;
        let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse)
    }
    
    if(ready) {
        return (
        <div className="WeatherForecast">
        <div className="row">
            {forecast.map(function(dailyForecast, index) {
                if (index < 5) {
                return (
                    <div className="col" key={index}>
                    <WeatherForecastDay data={dailyForecast} />
                </div>
                );
                } else {
                    return null;
                }
            })}
        </div>
    </div>
        );

    } else {
        load()

        return null;

    }
}