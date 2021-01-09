import axios from "axios";
import React, { useState } from "react";
export default function WeatherAPI(city) {
  const [temperature, setTemp] = useState("not available yet");
  const [windSpeed, setWindspeed] = useState("not available yet");
  const [humidity, setHumidity] = useState("not available yet");
 
  axios.get("/getweather", {params: {city:city}} 
  )
    
  .then(response => {
    console.log("response",response)
    if(response.data.success === false) {
      
      return {};
    }
    
    setTemp(response.data.current.temperature);
    setWindspeed(response.data.current.wind_speed);
    setHumidity(response.data.current.humidity);
  })
  return { temperature, windSpeed, humidity};
  
}