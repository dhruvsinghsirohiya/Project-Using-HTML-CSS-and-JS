const searchBox = document.querySelector(".search");
const API_KEY = `38acdf1aa28f7e8e3ba9d65fbbc3137b`;
const weatherBox = document.querySelector(".weather");

searchBox.addEventListener(
    "keyup",
    function (event) {
        if (event.key == "Enter") {
            getWeatherData(event.target.value);
            console.log(event);
        }
    }
)
async function getWeatherData(city) {
  
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`

    console.log(url)
    weatherBox.innerHTML = `<h2 class="loader">Loading...</h2>`
    const response = await fetch(url);
    if (response.status == "200") {
        //get the data 
        const data = await response.json();
        weatherBox.innerHTML = `
        <div>
                <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
            </div>
            <div>
            <h1>${data.name}</h1>
                <h2>${(data.main.temp - 273.15).toFixed(2)} ℃</h2>
                <h4>${data.weather[0].main} </h4>
            </div> 
        `
    } else if(response.status == "404"){
        weatherBox.innerHTML = `<h1>City Not Found</h1>`
    }
}