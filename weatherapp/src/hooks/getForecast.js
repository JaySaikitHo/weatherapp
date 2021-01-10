import axios from "axios";
import React, { useState } from "react";
export default function getForecast(city) {
  const [temperature, setTemp] = useState("not available yet");
  const [windSpeed, setWindspeed] = useState("not available yet");
  const [humidity, setHumidity] = useState("not available yet");
  console.log("temp before request",temperature)
  axios.get("/getforecast", {params: {city:city}} 
  )
    
  .then(response => {
    console.log("response",response)
    if(response.data.success === false) {
      console.log("temp in the if statement", temperature)
      return { temperature, windSpeed, humidity};
    }
    console.log("after request", temperature)
    setTemp(response.data.current.temperature);
    setWindspeed(response.data.current.wind_speed);
    setHumidity(response.data.current.humidity);
  })
  return { temperature, windSpeed, humidity};
  
}