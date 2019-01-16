const fetch = require("node-fetch");

import { ApiCall } from '../src/api_call';

describe('api_call', () => {
  it('create an instance of the ApiCall class', () => {
    const apiCall = new ApiCall();
    expect(apiCall instanceof ApiCall).toEqual(true);
  });

  it('get the temperature of today', async () => {
    const apiCall = new ApiCall();
    const getTodayTemp = await apiCall.getTodayTemperature()
    expect(typeof getTodayTemp).toEqual('number')
  })

  it('get forecast', async () => {
    const apiCall = new ApiCall();
    const getForecast = await apiCall.getForecast()
    expect(getForecast.length).toEqual(40)
  })

});
