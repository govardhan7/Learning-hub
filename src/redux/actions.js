// src/redux/actions.js

import axios from 'axios';
import { FETCH_USER_DATA_SUCCESS, FETCH_USER_DATA_FAILURE } from './types';

export const fetchUserData = () => async (dispatch) => {
  try {
    const response = await axios.get('https://learning-hub-function.azurewebsites.net/api/HttpTrigger1?code=cni1_MeGBJ3DjG10Wt5TRFKGrtuPqM9wnO8YnrYqThSCAzFulbD_Sg==');
    dispatch({
      type: FETCH_USER_DATA_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: FETCH_USER_DATA_FAILURE,
      payload: error.message,
    });
  }
};

export const updateUserData = (updatedUserData) => ({
  type: 'UPDATE_USER_DATA',
  payload: updatedUserData,
})
