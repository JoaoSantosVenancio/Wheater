const key = 'e4c9c6f21512a6ac9c72c554798db96d'
var apicountry = 'https://www.countryflagicons.com/FLAT/64/'
const cityInput = document.querySelector('#city_input')
const searchButton = document.querySelector('#search')
const cityElement = document.querySelector('#city')
const temp = document.querySelector('#temperature span')
const descripition = document.querySelector('#descripition')
const weatherIcon = document.querySelector('#weather-icon')
const country = document.querySelector('#country')
const umidity = document.querySelector('#umidity span')
const wind = document.querySelector('#wind span')
const weatherContainer = document.querySelector('.weather-data')

const getWeatherData = async(city)=>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()
    console.log(data)
    return data
}
const showWeathetData = async (city)=>{
    const data = await getWeatherData(city)
    if(data.cod == '404'){
        alert('Verifique se o nome da cidade foi digitado corretamente!')
        cityInput.focus()
        cityInput.value = ' '
    }
    else{
        weatherContainer.removeAttribute('id')
        let countryCode = data.sys.country
        let windToKmH = data.wind.speed * 3.6
        windToKmH = Math.floor(windToKmH*100) /100

        country.setAttribute('src',`https://www.countryflagicons.com/FLAT/64/${countryCode}.png`)
        cityElement.innerText = data.name
        temp.innerText = data.main.temp
        descripition.innerText = data.weather[0].description
        weatherIcon.setAttribute('src',`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`)
        umidity.innerText = data.main.humidity + '%'
        wind.innerText = windToKmH + 'Km/h' 
        }
}

searchButton.addEventListener('click',(e)=>{
    e.preventDefault()
    const city = cityInput.value

    showWeathetData(city)
})
cityInput.addEventListener('keyup',(e)=>{
    if(e.code === 'Enter'){
        const city = e.target.value
        showWeathetData(city)
    }
})