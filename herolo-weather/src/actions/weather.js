import { Get } from '../utils/api';
import config from '../config.json';
import {
  formatCurrentData,
  formatDaysData,
  formatAutocompleteData
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

    return setCurrentCity(
      result.data.AdministrativeArea.EnglishName,
      result.data.Key
    );
  } catch (error) {
    //toast
    return currentLocationError();
  }
};

const currentLocationError = () => {
  return setCurrentCity(config.defaultCityName, config.defaultCityKey);
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

export const getAutocompleteSearch = async text => {
  try {
    const result = await Get(`${config.autocompleteURL}`, { q: text });
    return formatAutocompleteData(result.data);
  } catch (error) {
    //toast
  }
};

export const setCurrentCity = (name, key) => ({
  type: 'SET_CURRENT',
  city: { name, key }
});
