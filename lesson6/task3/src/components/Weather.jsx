import React from 'react';
import { connect } from 'react-redux';
import { weatherListSelector } from '../weather/weather.selectors';
import * as witherActions from '../weather/weather.actions';

const Wither = ({ weatherList, getWeather }) => {
  getWeather();
  return (
    <main className="weather">
      <h1 className="weather__title">Weather data</h1>
      {weatherList.map(city => (
        <li className="city">
          <span className="city__name">{city.name}</span>
          <span className="city__temperature">{city.temperature}</span>
        </li>
      ))}
      <ul className="cities-list"></ul>
    </main>
  );
};

const mapState = state => {
  return {
    weatherList: weatherListSelector(state),
  };
};

const mapDispatch = {
  getWeather: witherActions.fetchWeatherList,
};

const connector = connect(mapState, mapDispatch);

export default connector(Wither);
