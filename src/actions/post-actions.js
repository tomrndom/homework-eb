import axios from 'axios';

export const CREATE_POSTS = 'CREATE_POSTS';
export const CREATE_POSTS_SUCCESS = 'CREATE_POSTS_SUCCESS';
export const CREATE_POSTS_ERROR = 'CREATE_POSTS_ERROR';
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';

const API_URL = process.env.REACT_APP_BASE_API_URL;
const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

export const createPost = (picture, description, tags) => {

  // var bodyFormData = new FormData();
  // bodyFormData.append('image', picture);  

  // let urlUpload = `Pictures/pictures/upload`;
  // let urlPost   = `Posts/`;

  // return axios.post(urlUpload, bodyFormData).then(pic => {
  //   console.log(pic);
  //   if(pic.status === 200) {
  //     axios.post(urlPost, {"picture": picture.name, comment: description}).then(post => console.log('new post!'));
  //   }
  // })
  
};

export const getPosts = () => (dispatch, getSTate) => {

  dispatch({
    type: CREATE_POSTS    
  })

  return axios.get('https://api.unsplash.com/photos/random?count=30', {
    headers: {
    Authorization: UNSPLASH_KEY
    }
  }).then(pictures => {
    console.log(pictures)
    dispatch({
      type: CREATE_POSTS_SUCCESS,
      payload: pictures
    });
  }).catch(error => {
    console.log(error);
    dispatch({
      type: CREATE_POSTS_ERROR      
    });
  })
  
};
