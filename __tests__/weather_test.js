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
    expect(temperature).toEqual(8.45)
  })

  // it('calls endpoint for London', async () => {
  //   const weather = new Weather();
  //   expect(weather.temp().called).toEqual('https://api.openweathermap.org/data/2.5/find?q=London,UK&units=metric&appid=aa2bbdb63ce7c4d92703142f9e23bbf2')
  // })

  //it ('returns the weather', async () => {})
});
