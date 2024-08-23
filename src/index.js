import './styles.css';
import testBg from './coffeeBg.jpg';

console.log(`Welcome To The Eye Of Odin Weather Project`);

const resultHeader = document.querySelector(`#resultHeader`);
const description = document.querySelector(`#description`);
const searchbar = document.querySelector(`#searchbar`);
const submit = document.querySelector(`#submit`);
const loadAnimation = document.querySelector(`#loadAnimationOff`);

const queryLocation = `Las Vegas`;

async function getWeather(data = `Las Vegas`) {
    try {
        loadAnimation.setAttribute(`id`, `loadAnimation`);
        let response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${data}?unitGroup=metric&key=5MGVRN4YAV8UJY9MGZB77KHLE&contentType=json`);
        if (!response.ok) {
            throw new Error(response.status)
        }
        let weatherData = await response.json();
        loadAnimation.setAttribute(`id`, `loadAnimationOff`)
        console.log(weatherData.currentConditions.temp);
        resultHeader.innerHTML = `The temperature in ${weatherData.resolvedAddress} is ${weatherData.currentConditions.temp}` + `&#8451`;
        description.innerHTML = `${weatherData.description}`
    }
    catch (error) {
        if (error.message === `400`) {
            loadAnimation.setAttribute(`id`, `loadAnimationOff`);
            resultHeader.innerHTML = `Error ${error.message}: Invalid search parameters, please try again with a different location.`;
        }
        else {
            loadAnimation.setAttribute(`id`, `loadAnimationOff`);
            resultHeader.innerHTML = `Error ${error.message}`;
        }
        description.innerHTML = ``;
    }
}

submit.addEventListener("click", () => {
    getWeather(searchbar.value);
});

getWeather();