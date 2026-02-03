// card search  weather  weather-icon  temp city   details col  humidity  wind
// const apiUrl =
//   "https://api.open-meteo.com/v1/forecast?latitude=24.8607&longitude=67.0011&current_weather=true";
// async function checkWeather() {
//   const response = await fetch(apiUrl);
//   console.log(response);
//   const data = await response.json();
//   console.log(data);
// }
// checkWeather();
// const apiKey = "4c2f0d742b016e46462d725f9bf9d58f";
// const apiUrl =
//   "https://api.openweathermap.org/data/2.5/weather?lat=24.8607&lon=67.0011&units=metric";
// async function checkWeather() {
//   const response = await fetch(`${apiUrl}&appid=${apiKey}`);
//   const data = await response.json();
//   console.log(data);
// }
// checkWeather();
const apiKey = "4c2f0d742b016e46462d725f9bf9d58f";
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  console.log(data);
  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
  if (data.weather[0].main == "Clouds") {
    weatherIcon.src = "images/clouds.png";
  } else if (data.weather[0].main == "Clear") {
    weatherIcon.src = "images/clear.png";
  } else if (data.weather[0].main == "Rain") {
    weatherIcon.src = "images/rain.png";
  } else if (data.weather[0].main == "Drizzle") {
    weatherIcon.src = "images/drizzle.png";
  } else if (data.weather[0].main == "Mist") {
    weatherIcon.src = "images/mist.png";
  }

  console.log("City:", data.name);
}
searchbtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
checkWeather("Haripur");
