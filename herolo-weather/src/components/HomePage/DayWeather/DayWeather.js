import React from 'react';
import PropTypes from 'prop-types';
import IconImg from '../../common/IconImg/IconImg';
import './DayWeather.scss';

const DayWeather = ({ day, max, min, unit, icon }) => {
  return (
    <div className="DayWeather__Wrapper">
      <div className="DayWeather__Day">{day}</div>
      <IconImg index={icon} className="DayWeather__Icon" />
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
  unit: PropTypes.string,
  icon: PropTypes.number
};

export default DayWeather;
