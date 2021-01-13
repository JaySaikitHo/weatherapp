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
      
      res.send(body)
        
    }
      
  }
  )
});



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
