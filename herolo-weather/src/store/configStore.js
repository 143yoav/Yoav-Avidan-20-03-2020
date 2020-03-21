import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import weatherReducer from '../reducers/weatherReducer';

const reducer = {
  weather: weatherReducer
};

export default configureStore({
  reducer,
  middleware: [thunk]
});
