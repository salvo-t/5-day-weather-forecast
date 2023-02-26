var locationHistory = [];
var apiUrl1 = 'https://api.openweathermap.org'
var apiKey = 'd91f911bcf2c0f925fb6535547a5ddc9'

let weather = {
  apiKey: 'd91f911bcf2c0f925fb6535547a5ddc9',
  fetchWeather: function () {
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=42.331&lon=-83.0458&appid=d91f911bcf2c0f925fb6535547a5ddc9&units=imperial'
    ).then((responce) => responce.json ())
    .then((data) => console.log(data))
  }
}
