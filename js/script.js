let citiesData = {
    tehran: {city: 'Tehran', temp: 12, weather: 'Sunny', humadity: 23, windSpeed: 32},
    shiraz: {city: 'Shiraz', temp: 8, weather: 'Windy', humadity: 12, windSpeed: 14},
    tabriz: {city: 'Tabriz', temp: 2, weather: 'Cold', humadity: 43, windSpeed: 12},
    mashhad: {city: 'Mashhad', temp: 17, weather: 'Rainy', humadity: 7, windSpeed: 24},
    esfahan: {city: 'Esfahan', temp: 25, weather: 'Sunny', humadity: 15, windSpeed: 18},
};

let $ = document
let searchBtn = $.querySelector('.search-button');
let searchBar = $.querySelector('.search-bar');

searchBtn.addEventListener('click', function () {
    let searchBarValue = searchBar.value
    let mainCityData = citiesData[searchBarValue];

    if (mainCityData) {
        $.querySelector('.city').innerHTML = 'Weather in ' + mainCityData.city
        $.querySelector('.temp').innerHTML = mainCityData.temp + '°C'
        $.querySelector('.description').innerHTML = 'Status: ' + mainCityData.weather
        $.querySelector('.humidity').innerHTML = 'Humadity: ' + mainCityData.humadity
        $.querySelector('.wind').innerHTML = 'Wind Speed: ' + mainCityData.windSpeed + ' Km/h'
        $.querySelector('.weather').classList.remove('loading')
    } else {
        alert('شهر مورد نظر موجود نمیباشد')
    }
})