import React from 'react';
import { connect } from 'react-redux';
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

export default connect(mapStateToProps)(FavoritesPage);
