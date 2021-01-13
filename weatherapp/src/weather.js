import React, { useEffect, useState } from "react";

import Getcurrentweather from './hooks/Getcurrentweather';
import Getforecast from './hooks/Getforecast';
import Temperature from './components/Temperature';
import Humidity from './components/Humidity';
import Windspeed from './components/Windspeed';

export default function Main() {
  let forecastArray = [];
  
  const [city, setCity] = useState("");
  const [dailyForecast, setDailyForecast] = useState([])
  
  const onclick_setCity = function(event) {
    setCity(event.target.value)
    
  }
  
  function fillArray (city) {
    forecastArray.push(Getforecast(city))
  }
  
  fillArray(city);
  useEffect(()=> {
    Promise.all(forecastArray)
    .then((data) => {setDailyForecast(data[0].daily)})

  },[city])
  
  console.log("dailyForecast", dailyForecast)
  
  
  const currentWeather = Getcurrentweather(city);
  console.log("currentweather",currentWeather)
  
  
    
  
  
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
      
      <Temperature currentTemperature = {currentWeather.temperature} />
      <Windspeed currentWindspeed = {currentWeather.windSpeed} />
      <Humidity currentHumidity = {currentWeather.humidity} />
    </div>
  )
}
