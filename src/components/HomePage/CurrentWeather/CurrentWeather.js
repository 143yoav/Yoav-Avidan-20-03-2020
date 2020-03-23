import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CurrentWeatherValue from './CurrentWeatherValue/CurrentWeatherValue';
import Heart from 'react-animated-heart';
import { updateFavorite } from '../../../actions/weather';
import './CurrentWeather.scss';

const CurrentWeather = props => {
  const { city, index, favorites, text } = props;
  const isFav = favorites.some(fav => fav.key == index);

  return (
    <div className="CurrentWeather__Wrapper">
      <CurrentWeatherValue {...props} className="CurrentWeather__Value" />
      <div className="CurrentWeather__Favorite">
        <Heart
          isClick={isFav}
          onClick={() => props.updateFavorite(city, index)}
        />
      </div>
      <div className="CurrentWeather__Text">{text}</div>
    </div>
  );
};

const mapStateToProps = state => ({
  city: state.weather.cityName,
  index: state.weather.cityKey,
  favorites: state.weather.favorites
});

const mapDispatchToProps = dispatch => ({
  updateFavorite: (city, key) => dispatch(updateFavorite(city, key))
});

CurrentWeather.propTypes = { text: PropTypes.string };

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
