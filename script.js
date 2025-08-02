let apikey = "dae9c28e4fa632a300a2fded38b581f2";
let apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searcBox = document.querySelector(".search input");
let searcBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");

async function checweather(city) {
  let response = await fetch(apiurl + city + `&appid=${apikey}`);
  
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";  
  } else {
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    let iconCode = data.weather[0].icon;
weatherIcon.src = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
weatherIcon.alt = data.weather[0].description;


    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searcBtn.addEventListener("click", () => {
  checweather(searcBox.value);
});
