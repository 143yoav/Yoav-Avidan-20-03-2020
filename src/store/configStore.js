import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import weatherReducer from '../reducers/weatherReducer';
import themeReducer from '../reducers/themeReducer';

const reducer = {
  weather: weatherReducer,
  theme: themeReducer
};

export default configureStore({
  reducer,
  middleware: [thunk]
});
