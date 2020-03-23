import React from 'react';
import PropTypes from 'prop-types';
import IconImg from '../../../common/IconImg/IconImg';
import './CurrentWeatherValue.scss';

const CurrentWeatherValue = ({ icon, city, value, unit }) => {
  return (
    <div className="CurrentWeatherValue__Wrapper">
      {icon && <IconImg index={icon} />}
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
