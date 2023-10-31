//import React from 'react'
import './WeatherApp.css'

import React, {useState} from 'react';


import search_icon from "../Assets/search.png";
import cloud_icon from "../Assets/cloud.png";
import clear_icon from "../Assets/clear.png";
import rain_icon from "../Assets/rain.png";
import drizzle_icon from "../Assets/drizzle.png";
import snow_icon from "../Assets/snow.png";
import wind_icon from "../Assets/wind.png";
import humidity_icon from "../Assets/humidity.png";


const WeatherApp = () => {


    let api_key = "60d4c65b5d81319c268df540bf610731";
    

    // 131cb5c18205d69f26fcef8914ebaae4

    const [wicon,setWicon] = useState(cloud_icon);

// https://api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
    const search = async () => {

        const element = document.getElementsByClassName("cityInput");

        if(element[0].value === ""){
            return 0;
        }
 
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Imperial&appid=${api_key}`
        let response = await fetch(url);

        if(response.ok){

            let data = await response.json();
            const humidity = document.getElementsByClassName("humidity-percent");
            const wind = document.getElementsByClassName("wind-rate");
            const temprature = document.getElementsByClassName("weather-temp");
            const location = document.getElementsByClassName("weather-location");

            humidity[0].innerHTML = data.main.humidity;
            wind[0].innerrHTML = data.wind.speed;
            temprature[0].innerHTML = data.main.temp;
            location[0].innerHTML = data.name;

            if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n")

            {
                setWicon(clear_icon);

            }

            else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n")

            {
                setWicon(cloud_icon);
            }
            else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n")

            {
                setWicon(drizzle_icon);
            }
            else if(data.weather[0].icon==="04d" || data.weather[0].icon==="04n")

            {
                setWicon(drizzle_icon);
            }
            else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n")

            {
                setWicon(rain_icon);
            }
            else if(data.weather[0].icon==="10d" || data.weather[0].icon==="10n")

            {
                setWicon(rain_icon);
            }
            else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n")

            {
                setWicon(snow_icon);
            }
            else{
                setWicon(clear_icon);
            }
            
        
        } 
        else {
            console.error('Error fetching weather data: ', response.statusText);
        }

    }

    return (
        <div className = 'container'>
            <div className = "top-bar">
                <input type = "text" className = "cityInput" placeholder = 'Search' />
                <div className = "search-icon" onClick={()=>{search()}}>
                    <img src = {search_icon} alt = ""/>
                </div>

            </div>
            <div className = "weather-image">
                <img src = {wicon} alt = "" />

            </div>
            <div className = "weather-temp">20° C</div>
            <div className = "weather-location">London</div>
            <div className = "data-container">
                <div className = "element">
                    <img src={humidity_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="humidity-percent">70%</div>
                        <div className="text">Humidity</div>
                    </div>
                </div>
                <div className = "element">
                    <img src={wind_icon} alt="" className="icon" />
                    <div className="data">
                        <div className="wind-rate">18km/hr</div>
                        <div className="text">Wind Speed</div>
                    </div>
                </div>
            </div>
            


        </div>
    )

    
}

export default WeatherApp;