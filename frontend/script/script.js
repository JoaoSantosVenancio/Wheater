const key = 'e4c9c6f21512a6ac9c72c554798db96d'
const apicountry = 'https://www.countryflagicons.com/FLAT/64/DE.png'

const cityInput = document.querySelector('#city_input')
const searchButton = document.querySelector('#search')
const cityElement = document.querySelector('#city')
const temp = document.querySelector('#temperature span')
const descripition = document.querySelector('#descripiton')
const weatherIcon = document.querySelector('#weather-icon')
const country = document.querySelector('#country')
const umidity = document.querySelector('#umdity span')
const wind = document.querySelector('#wind span')


const showWeathetData = (city)=>{
    getWeatherData(city)
 }

const getWeatherData = async(city)=>{
    const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${key}&lang=pt_br`

    const res = await fetch(apiWeatherURL)
    const data = await res.json()
    console.log(data)
}

searchButton.addEventListener('click',(e)=>{
    e.preventDefault()
    const city = cityInput.value

    showWeathetData(city)
})