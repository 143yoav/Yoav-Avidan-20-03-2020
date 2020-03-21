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
        return {
          ...state,
          favorites: state.favorites.filter(fav => fav.key != action.fav.key)
        };
      } else {
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
    default:
      return state;
  }
};
