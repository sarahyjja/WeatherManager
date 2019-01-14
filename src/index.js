import { Weather } from './weather';
const weather = new Weather();

async function todayWeather() {
  const londonTemp = await weather.temp()
  const elementById = document.getElementById('london_temp')
  elementById.innerHTML = londonTemp;
}
todayWeather();
