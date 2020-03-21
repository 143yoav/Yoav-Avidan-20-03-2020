import React from 'react';
import { connect } from 'react-redux';
import config from '../../../config.json';
import PropTypes from 'prop-types';
import './CurrentWeather.scss';

const CurrentWeather = ({ city, value, unit, text, icon }) => {
  return (
    <div className="CurrentWeather__Wrapper">
      <div className="CurrentWeather__Value">
        <img
          src={`${config.weatherIconsPre}${icon}${config.weatherIconsSuf}`}
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

const mapStateToProps = state => ({
  city: state.weather.cityName
});

CurrentWeather.propTypes = {};

export default connect(mapStateToProps)(CurrentWeather);
