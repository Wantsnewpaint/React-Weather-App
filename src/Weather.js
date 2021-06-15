import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
    const [weatherData, setWeatherData] = useState({ ready: false });
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response){
        console.log(response.data);
        setWeatherData({
            ready:true,
            temperature: response.data.main.temp,
            city: response.data.name,
            icon: response.data.weather[0].icon,
            date: new Date(response.data.dt * 1000),
            description: response.data.weather[0].description,
            tempMax: response.data.main.temp_max,
            humidity: response.data.main.humidity,
            wind: response.data.wind.speed,
        })   
    }

    function search() {
        const apiKey = "dc3dd8fad72c3a037e39c29f90d88da6";
        let apiUrl =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse)
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function cityChange(event) {
        setCity(event.target.value);
    }

    if (weatherData.ready) {
        return(
            <div className="wrapper">
        <div className="Weather">
            <div className="header">
            <div className="search-bar">
                <form className="Search-form row" 
                onSubmit={handleSubmit}>
                    <div className="col-9">
                <input 
                type="search" 
                placeholder="Enter a city" 
                className="form-control search-input" 
                autocomplete="off" 
                onChange={cityChange}
                />
                </div>
                <div className="col-3">
                <input type="submit" 
                className="btn btn-primary w-100" 
                value="Search"></input>
                </div>
                </form>
            </div>
           </div>
    
            <WeatherInfo data={weatherData} />

    </div>
    <footer><small>
            <a href="https://github.com/Wantsnewpaint/React-Weather-App" target="_blank" rel="noreferrer">Open-source code</a> by Bridget Young
            </small></footer>
        </div>
        )
    } else {
        search();

        return "Loading..."
    }
}