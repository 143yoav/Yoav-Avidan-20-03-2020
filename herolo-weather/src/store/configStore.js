import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';

export default configureStore({ x: () => {} }, applyMiddleware(thunk));
