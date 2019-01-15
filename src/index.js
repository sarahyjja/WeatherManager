import { Weather } from './weather';
const weather = new Weather();

async function todayWeather() {
  const londonTodayTemp = await weather.todayTemperature()
  const elementById = document.getElementById('london_todayTemp')
  elementById.innerHTML = londonTodayTemp;
}
todayWeather();

async function fourDaysWeather(){
  const fourDaysTemp = await weather.forecast()
  document.getElementById('london_fourDaysTemp').innerHTML = date();
}
