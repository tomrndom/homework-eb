import axios from 'axios';

export const FOLLOW_USER = 'FOLLOW_USER';
export const FOLLOW_USER_SUCCESS = 'FOLLOW_USER_SUCCESS';
export const FOLLOW_USER_ERROR = 'FOLLOW_USER_ERROR';

const API_URL = process.env.REACT_APP_BASE_API_URL;
const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

export const followUser = (user) => (dispatch, getState) => {
  
  let payload = { user };  

  dispatch({
    type: FOLLOW_USER
  });

  dispatch({
    type: FOLLOW_USER_SUCCESS,
    payload
  })
  
};
