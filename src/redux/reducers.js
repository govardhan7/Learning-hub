// src/redux/reducers.js

import { FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILURE, UPDATE_USER_DATA } from './types';

const initialState = {
  userData: null,
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        error: null,
      };
    case FETCH_USER_DATA_FAILURE:
      return {
        ...state,
        userData: null,
        error: action.payload,
      };
    case UPDATE_USER_DATA:
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
