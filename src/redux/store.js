// src/redux/store.js

import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';
import logger from 'redux-logger';  // Import the redux-logger middleware
import rootReducer from './reducers';

const middlewares = [thunk, logger];  // Create an array of middlewares

const store = createStore(
  rootReducer,
  {},
  applyMiddleware(...middlewares)  // Spread the array of middlewares
);

export default store;
