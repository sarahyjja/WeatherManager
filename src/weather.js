const fetch = require("node-fetch");
require('dotenv').config();

export class Weather {

  async todayTemperature(){
    const url = 'https://api.openweathermap.org/data/2.5/find?q=London,UK&units=metric&appid='+process.env.API_KEY

    const store = await fetch(url);
    const data = await store.json();
    const temp = data.list[0].main.temp;
    return Math.round(temp)+'\xB0C';
  }

  async forecast(){
    const todayDate = new Date()
    const dateInString = JSON.stringify(todayDate)
    const today = dateInString.substring(1, 11)

    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=London,UK&units=metric&appid='+process.env.API_KEY

    const store = await fetch(url);
    const data = await store.json();
    const forecast = data.list;
    let storageBox = [];

     forecast.forEach((item) => {
       if(!item.dt_txt.includes(today)){
         storageBox.push({
           temp: item.main.temp,
           description: item.weather[0].description,
           dt_txt: item.dt_txt,
         })
       }
    })
    console.log(storageBox)
    return storageBox;
  }

  // async extractLastObjectJsonFile(){
  //
  // }
  //
  // async date(){
  //   const allDates = new Date("2019-01-15 12:00:00")
  //
  // }
}
