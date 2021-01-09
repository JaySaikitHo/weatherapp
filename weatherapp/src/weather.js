import React, { useEffect, useState } from "react";
import axios from "axios";

import Humidity from './components/Humidity'
import WeatherAPI from './hooks/getWeather';

export default function Main() {
  
  const [city, setCity] = useState("");
  // const [weatherData, setweatherData] = useState("");  
  
  
  const onclick_setCity = function(event) {
    setCity(event.target.value)
  }
  
  
    // setweatherData(WeatherAPI(city));
    const weatherData = WeatherAPI(city);
  
    console.log("weatherData", weatherData)
  
  
    
  
  
  return (
    <div>
      <h2>Choose a city</h2>
      <select onChange={onclick_setCity}>
              <option className="location_option" value="location">Choose location
              </option>

                <option value="Calgary">
                Calgary
                </option>
                <option value="Vancouver">Vancouver</option>
                <option value="Toronto">Toronto</option>
              </select>
      
      <h1>This is the weather for {city} {weatherData.temperature} </h1>
      <h1>This is the windspeed for {city} {weatherData.windSpeed} </h1>
      <Humidity currentHumidity = {weatherData.humidity} />
    </div>
  )
}
