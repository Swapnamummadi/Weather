

// const apiKey = '84b45aca17365ea691cd922c72828e00';
// const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=matrics';

const locationInput = document.getElementById('takeInput');
const searchButton = document.getElementById('searchbtn');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=2b0dd57b1c162fb3727b8543c49018ac`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
