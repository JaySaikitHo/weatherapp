
export default function Getforecast(city) {
  // const [dailyData, setDailyData] = useState([]);
  const test = "9fc18a0269d603fe395f54a64d2f07ec"
  
  let dailyData = [];
  if(!city) {
    return dailyData;
  }
  let lat = "0";
  let long = "0";
  if (city === "Vancouver") {
    lat = "49.2827";
    long = "-123.1207";
  } else if (city === "Toronto") {
    lat = "43.62532";
    long = "-79.3832";
  } else if (city === "Calgary") {
    lat = "51.0447";
    long = "-114.0719";
  }
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&units=metric&appid=${test}`)
    .then(response => response.json())
    .then(response => {
      console.log("response",response)
      dailyData = response;
      return dailyData;
    })   
   
}

