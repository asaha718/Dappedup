import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import sessionReducer from './session_reducer';
import errors from './errors_reducer';
import postsReducer from './posts_reducer'

const rootReducer = combineReducers({
    entities: entitiesReducer,
    session: sessionReducer, 
    errors, 
    posts: postsReducer
});
  
export default rootReducer;