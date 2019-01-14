const fetch = require("node-fetch");
require('dotenv').config();

export class Weather {

  async temp(){
    const url = 'https://api.openweathermap.org/data/2.5/find?q=London,UK&units=metric&appid='+process.env.API_KEY

    const store = await fetch(url);
    const data = await store.json();
    const temperature = data.list[0].main.temp;
    return Math.round(temperature)+'\xB0C';
  }

  async forecast(){
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=London,UK&units=metric&appid='+process.env.API_KEY

    const store = await fetch(url);
    const data = await store.json();
    const forecast = data.list;
    let storageBox = [];
    forecast.forEach((item) => {
      storageBox.push(item.dt_txt)
    })
    console.log(storageBox);
    return storageBox;
  }
}
