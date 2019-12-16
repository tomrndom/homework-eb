import { 
  CREATE_POSTS,  
  CREATE_POSTS_SUCCESS,
  CREATE_POSTS_ERROR,
  GET_POSTS,
  GET_POSTS_ERROR,
  GET_POSTS_SUCCESS
} from "../actions/post-actions";

const DEFAULT_STATE = {
    posts: [],    
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
            return { state, loading: true };
        case CREATE_POSTS_SUCCESS:
            return { ...state, posts: [...state.posts, payload], loading: false };
        case CREATE_POSTS_ERROR:
            return { state, loading: false };
        case GET_POSTS:
            return {...state, loading: true};
        case GET_POSTS_SUCCESS:
            return { ...state, posts: [...state.posts, payload], loading: false };
        case GET_POSTS_ERROR:
            return { state, loading: false };                          
        default:
            return state;
            break;
    }
}

export default postReducer
