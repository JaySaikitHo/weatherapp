import React, { useState } from "react";
import axios from "axios";
export default function Getweather() {
  const [city, setCity] = useState("");
  const [temperature, setTemp] = useState("not available yet");
  const [windSpeed, setWindspeed] = useState("not available yet");
   function weatherAPI(props) {
    axios.get("/getweather", {params: {city:city}} 
    )
      
    .then(response => {
      
      setTemp(response.data.current.temperature)
      setWindspeed(response.data.current.wind_speed)
    })
  };
  
  const onclick_setCity = function(event) {
    setCity(event.target.value)
  }
  console.log("city",city)
    
  
  
  return (
    <div>
      <select onChange={onclick_setCity}>
              <option className="location_option" value="location">Choose location
              </option>

                <option value="Calgary">
                Calgary
                </option>
                <option value="Vancouver">Vancouver</option>
                <option value="Toronto">Toronto</option>
              </select>
      <button onClick ={() => weatherAPI()}>get the weather</button>
      <h1>This is the weather for {city}: {temperature}</h1>
      <h1>This is the windspeed for {city} : {windSpeed}</h1>
    </div>
  )
}
