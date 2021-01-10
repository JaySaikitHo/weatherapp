const express = require("express")
const request = require("request");
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getweather', (req, res) => {
  let city = req.query.city
  request(`http://api.weatherstack.com/current?access_key=229bf4c0bd2e4aea85b977eb649c7026&query=${city}`, 
  function(error, response, body){
    if(!error && response.statusCode == 200) {
      console.log(body)
      res.send(body)
      // let parsedBody = JSON.parse(body);
      // let temp_c = parsedBody['current']['temperature']
      // res.send({ temp_c })
      
    }
  }
  )
});

app.get('/getforecast', (req,res) => {
  let city = req.query.city;
  let lat = 0;
  let long = 0;
  if(city === "Vancouver") {
    lat = 49.2827
    long = 123.1207
  } else if (city === "Toronto") {
    lat = 43.62532
    long = 79.3832
  } else if (city === "Calgary") {
    lat = 51.0447
    long = 114.0719
  }
 })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
