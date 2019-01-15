const fetch = require("node-fetch");

import { Weather } from '../src/weather';

describe('weather', () => {
  it('create an instance of the Weather class', () => {
    const weather = new Weather();
    expect(weather instanceof Weather).toEqual(true);
  });

  it('get the temperature of today', async () => {
    const weather = new Weather();
    const temp = await weather.todayTemperature();
    expect(temp).toContain('°C')
  })

  it('get a range of data in between 32 to 40', async () => {
    const weather = new Weather();
    const forecastData = await weather.forecast()
    const rangeLength = [32, 33, 34, 35, 36, 37, 38, 39, 40]
    const forecastDataLength = forecastData.length
    
    expect(rangeLength.includes(forecastDataLength)).toEqual(true)
  })


});
