import React from 'react';
import Consts from '../../../utils/consts.json';
import PropTypes from 'prop-types';
import './CurrentWeather.scss';

const CurrentWeather = ({ city, value, unit, text, icon }) => {
  return (
    <div className="CurrentWeather__Wrapper">
      <div className="CurrentWeather__Value">
        <img
          src={`${Consts.weatherIconsPre}${icon}${Consts.weatherIconsSuf}`}
        />
        <label>{city}</label>
        <label>
          {value} °{unit}
        </label>
      </div>
      <div className="CurrentWeather__Text">{text}</div>
    </div>
  );
};

CurrentWeather.propTypes = {};

export default CurrentWeather;
