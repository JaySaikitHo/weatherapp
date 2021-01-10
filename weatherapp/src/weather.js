import React, { useEffect, useState } from "react";
import axios from "axios";
import getCurrentWeather from './hooks/getCurrentWeather';
import getForecast from './hooks/getForecast';
import Temperature from './components/Temperature';
import Humidity from './components/Humidity';
import Windspeed from './components/Windspeed';

export default function Main() {
  
  const [city, setCity] = useState("");
  // const [weatherData, setweatherData] = useState("");  
  
  
  const onclick_setCity = function(event) {
    setCity(event.target.value)
  }
  
  
    // setweatherData(WeatherAPI(city));
    const currentWeatherData = getCurrentWeather(city);
    const forecastData = getForecast(city);
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
      
      <Temperature currentTemperature = {currentWeatherData.temperature} />
      <Windspeed currentWindspeed = {currentWeatherData.windSpeed} />
      <Humidity currentHumidity = {currentWeatherData.humidity} />
    </div>
  )
}
