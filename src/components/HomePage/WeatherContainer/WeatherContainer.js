import React from 'react';
import PropTypes from 'prop-types';
import DayWeather from '../DayWeather/DayWeather';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import withLoading from '../../HOC/withLoading';
import './WeatherContainer.scss';

const WeatherContainer = ({ days, current }) => {
  return (
    <div className="WeatherContainer__Wrapper">
      <div className="WeatherContainer__Current">
        <CurrentWeather {...current} />
      </div>
      <div className="WeatherContainer__Days">
        {days && days.map(day => <DayWeather {...day} />)}
      </div>
    </div>
  );
};

WeatherContainer.propTypes = {
  days: PropTypes.array,
  current: PropTypes.object
};

export default withLoading(WeatherContainer);
