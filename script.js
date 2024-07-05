function getWeather() {
    const city = document.getElementById('cityInput').value.trim().toLowerCase();
    const weatherData = generateWeatherData(city);

    if (weatherData) {
        displayWeather(city, weatherData);
    } else {
        alert(`Weather data not available for ${city}`);
    }
}

function generateWeatherData(city) {
    const cities = {
        'karachi': { 
            temp: '33°C',
            tempF: '91°F',
            description: 'Haze', 
            humidity: '63%', 
            windSpeed: '16 km/h', 
            precipitation: '1%' 
        },
        'lahore': { 
            temp: '34°C', 
            tempF: '93°F',
            description: 'Smoke', 
            humidity: '67%', 
            windSpeed: '23 km/h', 
            precipitation: '14%' 
        },
        'islamabad': { 
            temp: '33°C',
            tempF: '91°F',
            description: 'Smoke', 
            humidity: '62%', 
            windSpeed: '14 km/h', 
            precipitation: '10%' 
        },
        'faisalabad': { 
            temp: '36°C', 
            tempF: '97°F',
            description: 'Smoke', 
            humidity: '59%', 
            windSpeed: '11 km/h', 
            precipitation: '5%' 
        },
        'peshawar': { 
            temp: '36°C', 
            tempF: '97°F',
            description: 'Partly Cloudy', 
            humidity: '57%', 
            windSpeed: '26 km/h', 
            precipitation: '4%' 
        },
        'quetta': { 
            temp: '38°C', 
            tempF: '100°F',
            description: 'Sunny', 
            humidity: '15%', 
            windSpeed: '23 km/h', 
            precipitation: '20%' 
        }
    };

    return cities[city];
}

function displayWeather(city, data) {
    const cityName = document.getElementById('cityName');
    const weatherData = document.getElementById('weatherData');

    cityName.textContent = city.toUpperCase();
    weatherData.innerHTML = `
        <p>Temperature: ${data.temp} / ${data.tempF}</p>
        <p>Description: ${data.description}</p>
        <p>Humidity: ${data.humidity}</p>
        <p>Wind Speed: ${data.windSpeed}</p>
        <p>Precipitation: ${data.precipitation}</p>
    `;
}
