import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import postsReducer from './posts_reducer';
import educationReducer from './edus_reducer'; 
import jobReducer from './jobs_reducer'; 
import profilesReducer from "./profile_reducer";
// import connectionReducer from "./connections_reducer";
import followsReducer from "./follows_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer, 
  posts: postsReducer, 
  educations: educationReducer, 
  jobs: jobReducer, 
  profiles: profilesReducer, 
  follows: followsReducer
  // connections: connectionReducer
});

export default entitiesReducer;