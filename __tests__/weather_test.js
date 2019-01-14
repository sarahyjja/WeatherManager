const fetch = require("node-fetch");

import { Weather } from '../src/weather';

describe('weather', () => {
  it('create an instance of the Weather class', () => {
    const weather = new Weather();
    expect(weather instanceof Weather).toEqual(true);
  });

  it('get the temperature', async () => {
    const weather = new Weather();
    const temperature = await weather.temp();
    expect(temperature).toContain('°C')
  })

  it('get 32 pieces of data', async () => {
    const weather = new Weather();
    const forecastData = await weather.forecast()
    expect(forecastData.length).toEqual(32)
  })

});
