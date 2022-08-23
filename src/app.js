function displayTemp(response) {
  console.log(response);
  let tempElement = document.querySelector("#curr-temp");
  tempElement.innerHTML = Math.round(response.data.main.temp);

  let cityElement = document.querySelector("#curr-city");
  cityElement.innerHTML = response.data.name;

  let descElement = document.querySelector("#curr-description");
  descElement.innerHTML = response.data.weather[0].description;

  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);

  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;

  let lowElement = document.querySelector("#low-temp");
  lowElement.innerHTML = Math.round(response.data.main.temp_max);

  let highElement = document.querySelector("#high-temp");
  highElement.innerHTML = Math.round(response.data.main.temp_min);
}

let apiKey = "cac27e453346e9164edaf605b6536f2f";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New%20York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);
