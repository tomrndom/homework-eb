import { createStore, applyMiddleware, combineReducers} from 'redux';

import postReducer from './reducers/post-reducer'
import userReducer from './reducers/user-reducers'

import thunk from 'redux-thunk';

const reducers = combineReducers({
  postState: postReducer,
  userState: userReducer,
})

const store = createStore(reducers, applyMiddleware(thunk));

export default store;

