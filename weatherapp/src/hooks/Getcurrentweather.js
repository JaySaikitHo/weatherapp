import axios from "axios";
import { useState } from "react";
export default function Getcurrentweather(city) {
  const [temperature, setTemp] = useState("not available yet");
  const [windSpeed, setWindspeed] = useState("not available yet");
  const [humidity, setHumidity] = useState("not available yet");
 
  axios.get("/getweather", {params: {city:city}} 
  )
    
  .then(response => {
    
    if(response.data.success === false) {
      console.log("response failed",response.data)
      return { temperature, windSpeed, humidity};
    }
    
    setTemp(response.data.current.temperature);
    setWindspeed(response.data.current.wind_speed);
    setHumidity(response.data.current.humidity);
  })
  return { temperature, windSpeed, humidity};
  
}