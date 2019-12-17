import axios from 'axios';

export const CREATE_POSTS = 'CREATE_POSTS';
export const CREATE_POSTS_SUCCESS = 'CREATE_POSTS_SUCCESS';
export const CREATE_POSTS_ERROR = 'CREATE_POSTS_ERROR';
export const GET_POSTS = 'GET_POSTS';
export const GET_POSTS_SUCCESS = 'GET_POSTS_SUCCESS';
export const GET_POSTS_ERROR = 'GET_POSTS_ERROR';
export const GET_MORE_POSTS = 'GET_MORE_POSTS';
export const GET_MORE_POSTS_SUCCESS = 'GET_MORE_POSTS_SUCCESS';
export const GET_MORE_POSTS_ERROR = 'GET_MORE_POSTS_ERROR';
export const GET_FOLLOWING_POSTS = 'GET_FOLLOWING_POSTS';
export const GET_FOLLOWING_POSTS_SUCCESS = 'GET_FOLLOWING_POSTS_SUCCESS';
export const GET_FOLLOWING_POSTS_ERROR = 'GET_FOLLOWING_POSTS_ERROR';

const API_URL = process.env.REACT_APP_BASE_API_URL;
const UNSPLASH_KEY = process.env.REACT_APP_UNSPLASH_KEY;

export const createPost = (picture, description, tags, author) => (dispatch, getState) => {
  
  let payload = { picture, description, tags, author };  

  dispatch({
    type: CREATE_POSTS
  });

  dispatch({
    type: CREATE_POSTS_SUCCESS,
    payload
  })

  // return axios.post(urlUpload, bodyFormData).then(pic => {
  //   console.log(pic);
  //   if(pic.status === 200) {
  //     axios.post(urlPost, {"picture": picture.name, comment: description}).then(post => console.log('new post!'));
  //   }
  // })
  
};

export const getPosts = () => (dispatch, getState) => {

  let { postState: { current_page, per_page } } = getState();

  dispatch({
    type: GET_POSTS    
  });

  const request = axios.get(`https://picsum.photos/v2/list?page=${current_page}?limit=${per_page}`);

  return request.then(pictures => {    
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: pictures
    });
  }).catch(error => {
    console.log(error);
    dispatch({
      type: GET_POSTS_ERROR      
    });
  })
}

export const getFollowersPosts = () => (dispatch, getState) => {
  let { postState: { current_page }, userState: {following} } = getState();

  dispatch({
    type: GET_FOLLOWING_POSTS
  });

  const request = axios.get(`https://picsum.photos/v2/list?page=${current_page}?limit=100`);

  return request.then(pictures => {
    let followedPosts = [];
    
    pictures.data.map(pic => {
      let post = following.find(f => f.user === pic.author);
      if(post) followedPosts.push(pic);      
    })
    dispatch({
      type: GET_FOLLOWING_POSTS_SUCCESS,
      payload: followedPosts
    });
  }).catch(error => {
    console.log(error);
    dispatch({
      type: GET_FOLLOWING_POSTS_ERROR      
    });
  })
}

export const getMorePosts = () => (dispatch, getState) => {
  let { postState: { current_page, per_page } } = getState();

  dispatch({
    type: GET_MORE_POSTS    
  });

  const request = axios.get(`https://picsum.photos/v2/list?page=${current_page+1}?limit=${per_page}`);

  return request.then(pictures => {    
    dispatch({
      type: GET_MORE_POSTS_SUCCESS,
      payload: pictures
    });
  }).catch(error => {
    console.log(error);
    dispatch({
      type: GET_MORE_POSTS_ERROR      
    });
  })
}
