export const weatherListSelector = state => {
  console.log(state.weather.weatherList);
  return state.weather.weatherList;
};
