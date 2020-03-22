import React from 'react';
import { connect } from 'react-redux';
import PropTypes, { array } from 'prop-types';
import FavoriteWeather from './FavoriteWeather/FavoriteWeather';
import './FavoritesPage.scss';

const FavoritesPage = ({ favorites }) => {
  return (
    <div className="FavoritesPage__Wrapper">
      {favorites &&
        favorites.map(fav => (
          <FavoriteWeather cityKey={fav.key} city={fav.city} />
        ))}
    </div>
  );
};

const mapStateToProps = state => ({
  favorites: state.weather.favorites
});

FavoritesPage.propTypes = {
  favorites: PropTypes.arrayOf(PropTypes.object)
};

export default connect(mapStateToProps)(FavoritesPage);
