import config from '../config.json';

const weatherReducerDefaultState = {
  cityKey: config.defaultCityKey,
  cityName: config.defaultCityName,
  isMetric: true,
  favorites: []
};

export default (state = weatherReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT':
      return {
        ...state,
        cityKey: action.city.key,
        cityName: action.city.name
      };
    case 'UPDATE_FAVORITE':
      if (state.favorites.some(fav => fav.key == action.fav.key)) {
        let favorites = state.favorites.filter(
          fav => fav.key != action.fav.key
        );
        localStorage.setItem('favorites', JSON.stringify(favorites));
        return {
          ...state,
          favorites
        };
      } else {
        localStorage.setItem(
          'favorites',
          JSON.stringify([...state.favorites, action.fav])
        );
        return {
          ...state,
          favorites: [...state.favorites, action.fav]
        };
      }
    case 'UPDATE_UNIT':
      return {
        ...state,
        isMetric: action.isMetric
      };
    case 'LOAD_FAVORITES':
      return {
        ...state,
        favorites: action.favorites
      };
    default:
      return state;
  }
};
