const weatherContainer = document.querySelector("#weather-container");
const body = document.querySelector(".body");

function renderWeather(weather) {
    body.style.background = "";
    weatherContainer.style.background = "";

    weatherContainer.innerHTML = `
    <div class="weather__main">
         <div class="bla">
            <div class="weather__city">${weather.city}</div>
            <div class="weather__temp"><span>${weather.temp}</span>°C</div>
         </div> 
         <div class="weather__feels-like">Feels like: <span>${weather.feelsLike}</span>°C</div>
         <div class="weather__overall">${weather.overal} 
           <img src="${weather.iconSrc}" class="weather__icon" alt="Weather icon">
         </div>
    </div>     
    <div class="weather__box">
        <div class="weather__wind">Wind<div><span>${weather.wind}</span> m/s</div></div>
        <div class="weather__pressure">Pressure<div><span>${weather.pressure}</span> hPa</div></div>
        <div class="weather__humidity">Humidity<div><span>${weather.humidity}</span> %</div></div>
    </div>
    <div class="weather__last-update">Last update: <span>${weather.lastUpdate[0]}</span> at <span>${weather.lastUpdate[1]}</span></div>  
    `
}

let weather = {};

function createWeatherObj(data) {
    weather.city = data.name;
    weather.temp = Math.round(data.main.temp);
    weather.feelsLike = Math.round(data.main.feels_like);
    weather.overal = data.weather[0].main;
    weather.pressure = data.main.pressure;
    weather.humidity = data.main.humidity;
    weather.wind = data.wind.speed;
    weather.iconSrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

    const date = new Date (data.dt * 1000);
    weather.lastUpdate = [date.toLocaleDateString("uk-UA"), date.toLocaleTimeString("uk-UA")];

    renderWeather(weather);
}

function slowLoading() {
    weatherContainer.innerHTML = "<div class='weather__message'>Loading...</div>";
}

function getWeather() {
   return fetch("https://api.openweathermap.org/data/2.5/weather?q=Kharkiv&appid=a797e22d039d90b942c2a16fca1b57bc&units=metric")
        .then(res => {
            if (!res.ok) {
                throw new Error("Error occurred!");
            }
            return res.json()
        });
}

function updateWeather() {
    slowLoading()

    getWeather()
        .then(data => createWeatherObj(data))
        .catch(err => {
            weatherContainer.innerHTML = `<div class='weather__message'>${err.message}</div>`;
            weatherContainer.style.background = "linear-gradient(to bottom, #f6a4a4, #9f1717)"
            body.style.background = "#ffeeee";
        });
}

updateWeather();

setInterval(updateWeather, 10 * 60 * 1000);
