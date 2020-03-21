import { Get } from '../utils/api';
import config from '../config.json';
import {
  formatCurrentData,
  formatDaysData
} from '../formatters/weatherFormmater';

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

    return {
      type: 'SET_CURRENT',
      city: {
        name: result.data.AdministrativeArea.EnglishName,
        key: result.data.Key
      }
    };
  } catch (error) {
    //toast
    return currentLocationError();
  }
};

const currentLocationError = () => {
  return {
    type: 'SET_CURRENT',
    city: { name: config.defaultCityName, key: config.defaultCityKey }
  };
};

export const getCurrentWeather = async cityKey => {
  try {
    const result = await Get(`${config.currentWeatherURL}${cityKey}`);
    return formatCurrentData(result.data);
  } catch (error) {
    //toast
  }
};

export const getDailyWeather = async (cityKey, metric) => {
  try {
    const result = await Get(`${config.daysWeatherURL}${cityKey}`, { metric });
    return formatDaysData(result.data);
  } catch (error) {
    //toast
  }
};
