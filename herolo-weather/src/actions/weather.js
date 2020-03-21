import { Get } from '../utils/api';
import config from '../config.json';

export const getCurrentLocation = () => {
  return dispatch => {
    navigator.geolocation.getCurrentPosition(
      pos => dispatch(currentLocationSuccess(pos)),
      () => dispatch(currentLocationError())
    );
  };
};

const currentLocationSuccess = async position => {
  try {
    const result = await Get(config.geopositionURL, {
      q: `${position.coords.latitude},${position.coords.longitude}`
    });
    debugger;
    return {
      type: 'SET_CURRENT',
      city: {
        name: result.data.AdministrativeArea.EnglishName,
        key: result.data.Key
      }
    };
  } catch (error) {
    return currentLocationError();
  }
};

const currentLocationError = () => {
  return {
    type: 'SET_CURRENT',
    city: { name: config.defaultCityName, key: config.defaultCityKey }
  };
};
