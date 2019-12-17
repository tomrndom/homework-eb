import { createStore, applyMiddleware, combineReducers, compose} from 'redux';

import postReducer from './reducers/post-reducer'
import userReducer from './reducers/user-reducers'

import thunk from 'redux-thunk';

const reducers = combineReducers({
  postState: postReducer,
  userState: userReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)));

export default store;

