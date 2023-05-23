//1
let h4 = document.querySelector("h4");
let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();

if (hours < 10) {
  hours = `0${hours}`;
}

if (minutes < 10) {
  minutes = `0${minutes}`;
}
h4.innerHTML = `${day}, ${hours}:${minutes}`;

//2
function displayWeather(response) {
  document.querySelector("#result").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
  document.querySelector("#minimum").innerHTML = Math.round(
    response.data.main.temp_min
  );
  document.querySelector("#maximum").innerHTML = Math.round(
    response.data.main.temp_max
  );
}

function searchButton(event) {
  event.preventDefault();
  let apiKey = "46fac47dd8b8fa26d1b6852218ad3dfe";
  let city = document.querySelector("#city").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${url}&appid=${apiKey}`).then(displayWeather);
}

let form = document.querySelector("form");
form.addEventListener("submit", searchButton);