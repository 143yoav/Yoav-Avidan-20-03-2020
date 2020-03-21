import axios from 'axios';
import config from '../config.json';

export const Get = async (url, params = {}) => {
  try {
    params.apikey = config.apiKey;
    const response = await axios.get(url, { params });
    return response;
  } catch (error) {
    throw error;
  }
};
