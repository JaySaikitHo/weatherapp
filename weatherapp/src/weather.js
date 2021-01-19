
import React, { useEffect, useState } from "react";
import '../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, DiscreteColorLegend, HorizontalGridLines, VerticalGridLines, XAxis, YAxis, ContinuousColorLegend } from 'react-vis';

import Getcurrentweather from './hooks/Getcurrentweather';
import Getforecast from './hooks/Getforecast';
import Temperature from './components/Temperature';
import Humidity from './components/Humidity';
import Windspeed from './components/Windspeed';
const get = require('lodash.get');

export default function Main() {

  const [highgraph, sethighGraph] = useState(
  [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]
);

const [lowgraph, setlowGraph] = useState(
  [
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
    { x: 0, y: 0 },
  ]
);

  let forecastArray = [];

  const [city, setCity] = useState("");
  const [dailyForecast, setDailyForecast] = useState([]);

  const onclick_setCity = function (event) {
    setCity(event.target.value);

  };




  useEffect(() => {
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    function Getdata(city) {
      //  console.log('getdata', city)

      if (city) {
        Getforecast(city)
          .then(data => {
            console.log("data from useeffect", data);
            if (data) {
              console.log('graph', data.daily[0].dt);
              const dailyhi = get(data, 'daily', []);
              
              const dailylow = get(data, 'daily', []);
              for (var i = 0; i < 7; i++) {
                dailyhi[i].x = weekdays[new Date(dailyhi[i].dt * 1000).getDay()] 
                dailyhi[i].y = get(dailyhi[i], 'temp.max', 0)
              }
              for (var i = 0; i < 7; i++) {
                dailylow[i].x = weekdays[new Date(dailylow[i].dt * 1000).getDay()] 
                dailylow[i].y = get(dailylow[i], 'temp.min', 0)
              }

              // dailies = dailies.map((day) => ({
              //   x: weekdays[new Date(day.dt * 1000).getDay()],
              //   y: get(day, 'temp.max', 0)
              // }));

              sethighGraph(dailyhi);
              setlowGraph(dailylow);
            }
          });
        }
        
      }
      
      Getdata(city);
      
  }, [city]);




  

  const currentWeather = Getcurrentweather(city);
  console.log("currentweather", currentWeather);





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

      <Temperature currentTemperature={currentWeather.temperature} />
      <Windspeed currentWindspeed={currentWeather.windSpeed} />
      <Humidity currentHumidity={currentWeather.humidity} />
      <h2>7 day Forecast</h2>
      <div className="graph">
        <XYPlot height={300} width={700} stackBy="y" xType="ordinal" style ={{backgroundColor: "lightgrey"}}>
          <LineSeries data={highgraph} stroke="red"/>
          <LineSeries data={lowgraph} stroke="blue"/>
          <DiscreteColorLegend items={[{title : 'high temp',color: 'red'},{title:'low temp',color: 'blue'}]} orientation='horizontal'/><XYPlot width={700} height={300}
           yDomain={[0, 100]}></XYPlot>
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Day" />
          <YAxis title="Temp degrees Celsius" />
        </XYPlot>
      </div>
    </div>
  );
}
