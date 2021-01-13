const express = require("express")
const request = require("request");
const app = express();
const port = 5000;
require('dotenv').config();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/getweather', (req, res) => {
  const api_key = process.env.API_WEATHERSTACK;
  let city = req.query.city;
  
  request(`http://api.weatherstack.com/current?access_key=${api_key}&query=${city}`, 
  function(error, response, body){
    if(!error && response.statusCode == 200) {
      
      res.send(body)
        
    }
      
  }
  )
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
