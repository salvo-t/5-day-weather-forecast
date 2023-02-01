let iconImage = document.getElementById('icon');


const key = "d91f911bcf2c0f925fb6535547a5ddc9"

function getLocation(cityName) {
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${key}
    `)
    .then(function (response) {
      console.log(response.status);
      if (response.status !== 200) {
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      getApi(data[0].lat, data[0].lon)
    });
}

function getApi(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`)
    .then(function (response) {
      console.log(response.status);
      if (response.status !== 200) {
      }
      return response.json();
    })
    .then(function (data) {
      console.log(data);


      let icon_id = data.list[0].weather[0].icon;
      console.log(icon_id);

      // update the img element on the DOM 
      // iconImage.setAttribute('src',`http://openweathermap.org/img/wn/${icon_id}@2x.png`)
    });
}




// iconUrl = `http://openweathermap.org/img/wn/${icon_id}@2x.png`;

function get5Days(lat, lon){
  fetch(`api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`)
  console.log(data)
  .then(function (response) {
    console.log(response.status);
    if (response.status !== 200) {
    }
    return response.json();
  })
}

getApi('london')
