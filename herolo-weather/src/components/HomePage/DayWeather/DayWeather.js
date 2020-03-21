import React from 'react';
import PropTypes from 'prop-types';
import './DayWeather.scss';

const DayWeather = ({ day, max, min, unit }) => {
  return (
    <div className="DayWeather__Wrapper">
      <div className="DayWeather__Day">{day}</div>
      <div className="DayWeather__Temps">
        <label>
          {min} °{unit}
        </label>
        <label>-</label>
        <label>
          {max} °{unit}
        </label>
      </div>
    </div>
  );
};

DayWeather.propTypes = {
  day: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  unit: PropTypes.string
};

export default DayWeather;
