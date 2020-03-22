import React from 'react';
import PropTypes from 'prop-types';
import IconImg from '../../common/IconImg/IconImg';
import withLoading from '../../HOC/withLoading';
import './FavoriteWeatherData.scss';

const FavoriteWeatherData = ({ cityName, value, unit, icon, text }) => {
  return (
    <div className="FavoriteWeatherData__Wrapper">
      <label>{cityName}</label>
      <label>
        {value} °{unit}
      </label>
      <IconImg index={icon} />
      <label>{text}</label>
    </div>
  );
};

FavoriteWeatherData.propTypes = {
  cityName: PropTypes.string,
  value: PropTypes.number,
  unit: PropTypes.string,
  icon: PropTypes.number,
  title: PropTypes.string
};

export default withLoading(FavoriteWeatherData);
