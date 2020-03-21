import config from '../config.json';

const weatherReducerDefaultState = {
  cityKey: config.defaultCityKey,
  cityName: config.defaultCityName,
  isMetric: true,
  favoritesKeys: []
};

export default (state = weatherReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_CURRENT':
      debugger;
      return {
        ...state,
        cityKey: action.city.key,
        cityName: action.city.name
      };
    default:
      return state;
  }
};
