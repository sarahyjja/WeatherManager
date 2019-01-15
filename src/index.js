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
  const londonFourDaysTemp = document.getElementById('london_fourDaysTemp')
  fourDaysTemp.forEach((item) => {
    const threeHoursBloc = document.createElement('div');
    const temp = document.createElement('p');
    const description = document.createElement('p');
    const dtTxt = document.createElement('p');

    temp.innerHTML = item.temp;
    description.innerHTML = item.description;
    dtTxt.innerHTML = item.dt_txt;

    threeHoursBloc.appendChild(temp)
    threeHoursBloc.appendChild(description)
    threeHoursBloc.appendChild(dtTxt)

    londonFourDaysTemp.appendChild(threeHoursBloc)
  });
}
fourDaysWeather();
