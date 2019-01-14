import { Weather } from '../src/weather';

describe('weather', () => {
  it('create an instance of the Weather class', () => {
    const weather = new Weather();
    expect(weather instanceof Weather).toEqual(true);
  });

  it('get the temperature', () => {
    const weather = new Weather();
    const temperature = weather.temp();
    expect(temperature).toEqual(8)
  })
});
