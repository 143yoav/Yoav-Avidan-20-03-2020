import React from 'react';
import PropTypes from 'prop-types';
import config from '../../../../config.json';
import './CurrentWeatherValue.scss';

const CurrentWeatherValue = ({ icon, city, value, unit }) => {
  return (
    <div className="CurrentWeatherValue__Wrapper">
      <img src={`${config.weatherIconsPre}${icon}${config.weatherIconsSuf}`} />
      <label>{city}</label>
      <label>
        {value} °{unit}
      </label>
    </div>
  );
};

CurrentWeatherValue.propTypes = {
  icon: PropTypes.number,
  city: PropTypes.string,
  value: PropTypes.string,
  unit: PropTypes.string
};

export default CurrentWeatherValue;
