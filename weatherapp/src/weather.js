
import React, { useEffect, useState } from "react";
import '../node_modules/react-vis/dist/style.css';
import { XYPlot, LineSeries, HorizontalGridLines, VerticalGridLines, XAxis, YAxis } from 'react-vis';

import Getcurrentweather from './hooks/Getcurrentweather';
import Getforecast from './hooks/Getforecast';
import Temperature from './components/Temperature';
import Humidity from './components/Humidity';
import Windspeed from './components/Windspeed';
const get = require('lodash.get');

export default function Main() {

  const [graph, setGraph] = useState(
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
              var dailies = get(data, 'daily', []);
              
              for (var i = 0; i < 7; i++) {
                dailies[i].x = weekdays[new Date(dailies[i].dt * 1000).getDay()] 
                dailies[i].y = get(dailies[i], 'temp.max', 0)
              }

              // dailies = dailies.map((day) => ({
              //   x: weekdays[new Date(day.dt * 1000).getDay()],
              //   y: get(day, 'temp.max', 0)
              // }));

              setGraph(dailies);
            }
          });
      }

    }

    Getdata(city);
  }, [city]);

  /*
  function getForecastTest(city ) {
    return fetch('https://api.openweathermap.org/data/2.5/onecall?lat=49.2827&lon=-123.1207&exclude=current,minutely,hourly,alerts&units=metric&appid=9fc18a0269d603fe395f54a64d2f07ec')
      .then(response => response.json())
  }
  */


  console.log("dailyForecast", dailyForecast);

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
        <XYPlot height={300} width={700} stroke="red" xType="ordinal">
          <LineSeries data={graph} />
          <VerticalGridLines />
          <HorizontalGridLines />
          <XAxis title="Day" />
          <YAxis title="Temp degrees Celsius" />
        </XYPlot>
      </div>
    </div>
  );
}
