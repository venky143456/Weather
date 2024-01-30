const axios = require('axios');


const apiKey = '490f0dafd5bd908781dc99cb51b44b22';
const city = 'Narasaraopet'; 

const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

axios.get(apiUrl)
  .then(response => {
    const weatherData = response.data;
    console.log(`Weather in ${city}:`);
    console.log( `Temperature: ${weatherData.main.temp}°C`);
    console.log(` Weather: ${weatherData.weather[0].description}`);
    console.log(` Humidity: ${weatherData.main.humidity}%`);
  })
  .catch(error => {
    console.error('Error fetching weather data:', error.message);
  });