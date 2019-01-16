const fetch = require("node-fetch");
require('dotenv').config();
import { ApiCall } from './api_call'

export class Weather {

  constructor(){
    this.apiCall = new ApiCall()

  }
  async todayTemperature(){
    const data = await this.apiCall.getTodayTemperature()
    return Math.round(data)+'\xB0C';
  }

  async forecast(){
    const todayDate = new Date()
    const dateInString = JSON.stringify(todayDate)
    const today = dateInString.substring(1, 11)

    const data = await this.apiCall.getForecast()
    let storageBox = [];

     data.forEach((item) => {
       if(!item.dt_txt.includes(today)){
         storageBox.push({
           temp: Math.round(item.main.temp)+'\xB0C',
           description: item.weather[0].description,
           dt_txt: item.dt_txt,
         })
       }
    })
    //console.log(storageBox)
    return storageBox;
  }
}
