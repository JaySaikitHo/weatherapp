
export default function Getforecast(city) {
  
  const test = "9fc18a0269d603fe395f54a64d2f07ec"
  
  let lat = "0";
  let long = "0";
  switch(city) {
    case "Vancouver":
      lat = "49.2827";
      long = "-123.1207";
      break;
    case "Toronto":
      lat = "43.62532";
      long = "-79.3832";
      break;
    case "Calgary":
      lat = "51.0447";
      long = "-114.0719";
      break;
  }
  
  return fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=current,minutely,hourly,alerts&units=metric&appid=${test}`)
    .then(response => response.json())


  
}

