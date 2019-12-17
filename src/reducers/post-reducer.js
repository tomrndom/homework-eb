import { 
  CREATE_POSTS,  
  CREATE_POSTS_SUCCESS,
  CREATE_POSTS_ERROR,
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS,
  GET_FOLLOWING_POSTS,
  GET_FOLLOWING_POSTS_SUCCESS,
  GET_FOLLOWING_POSTS_ERROR,
  GET_MORE_POSTS,
  GET_MORE_POSTS_SUCCESS,
  GET_MORE_POSTS_ERROR
} from "../actions/post-actions";

const DEFAULT_STATE = {
    posts: [],
    followingPosts: [],
    loading: false,
    current_page: 1,
    last_page: 1,
    per_page: 5,
    total: 0,
}

const postReducer = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action

    switch(type){
        case CREATE_POSTS:
            return { ...state, loading: true };
        case CREATE_POSTS_SUCCESS:
            console.log('PAYLOAD', payload);
            return { ...state, posts: [payload, ...state.posts], loading: false };
        case CREATE_POSTS_ERROR:
            return { ...state, loading: false };
        case GET_POSTS:
            return {...state, loading: true};
        case GET_POSTS_SUCCESS:
            let ownPosts = [...state.posts].filter(p => p.picture);
            return { ...state, posts: [...ownPosts, ...payload.data], loading: false };
        case GET_POSTS_ERROR:
            return { ...state, loading: false };
        case GET_MORE_POSTS:
            return {...state, loading: true};
        case GET_MORE_POSTS_SUCCESS:            
            return { ...state, posts: [...state.posts, ...payload.data], loading: false };
        case GET_MORE_POSTS_ERROR:
            return { ...state, loading: false };
        case GET_FOLLOWING_POSTS:
            return { ...state, loading: true};
        case GET_FOLLOWING_POSTS_SUCCESS:
            return { ...state, followingPosts: [...state.followingPosts, ...payload]};
        case GET_FOLLOWING_POSTS_ERROR:
            return { ...state, loading: false };
        default:
            return state;
            break;
    }
}

export default postReducer
