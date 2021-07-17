import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import postsReducer from './posts_reducer';
import educationReducer from './edus_reducer'; 
import jobReducer from './jobs_reducer'; 
import profilesReducer from "./profile_reducer";
import followsReducer from "./follows_reducer";
import jobPostsReducer from "./job_posts_reducer"; 
import jobAppsReducer from "./job_apps_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer, 
  posts: postsReducer, 
  educations: educationReducer, 
  jobs: jobReducer, 
  profiles: profilesReducer, 
  follows: followsReducer, 
  jobPosts: jobPostsReducer, 
  jobApps: jobAppsReducer
});

export default entitiesReducer;