import './styles.css';
import testBg from './coffeeBg.jpg';

console.log(`Welcome To The Eye Of Odin Weather Project`);

const resultHeader = document.querySelector(`#resultHeader`);
const searchbar = document.querySelector(`#searchbar`);
const submit = document.querySelector(`#submit`);

const queryLocation = `Torrance`;
const query = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${queryLocation}?unitGroup=metric&key=5MGVRN4YAV8UJY9MGZB77KHLE&contentType=json`;

async function getWeather(data = `Torrance`) {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${data}?unitGroup=metric&key=5MGVRN4YAV8UJY9MGZB77KHLE&contentType=json`);
    const weatherData = await response.json();
    console.log(weatherData.currentConditions.temp);
    resultHeader.innerHTML = `The temperature in ${weatherData.resolvedAddress} is ${weatherData.currentConditions.temp} degrees Celsius`;
    return weatherData;
}

submit.addEventListener("click", () => {
    getWeather(searchbar.value);
});

getWeather();