import { 
  FOLLOW_USER,
  FOLLOW_USER_SUCCESS,
  FOLLOW_USER_ERROR
} from "../actions/user-actions";

const DEFAULT_STATE = {
    following: [],    
    loading: false,
    current_page: 1,
    last_page: 1,
    per_page: 5,
    total: 0,
}

const userReducer = (state = DEFAULT_STATE, action) => {
    const { type, payload } = action

    switch(type){
        case FOLLOW_USER:
            return { ...state, loading: true };
        case FOLLOW_USER_SUCCESS:
            let following = state.following.filter(f => f.user !== payload.user);
            return { ...state, following: [...following, payload], loading: false };
        case FOLLOW_USER_ERROR:
            return { state, loading: false };        
        default:
            return state;
            break;
    }
}

export default userReducer
