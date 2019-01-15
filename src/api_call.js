const fetch = require("node-fetch");
require('dotenv').config();

export class ApiCall {

  async getTodayTemperature(){
    const url = 'https://api.openweathermap.org/data/2.5/find?q=London,UK&units=metric&appid='+process.env.API_KEY

    const store = await fetch(url);
    const data = await store.json();
    const temp = data.list[0].main.temp;
    return temp
  }

  async getForecast(){
    const url = 'https://api.openweathermap.org/data/2.5/forecast?q=London,UK&units=metric&appid='+process.env.API_KEY

    const store = await fetch(url);
    const data = await store.json();
    const forecast = data.list;
    return forecast 
  }
}
