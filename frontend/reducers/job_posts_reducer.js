import { RECEIVE_ALL_JOB_POSTS, 
    RECEIVE_JOB_POST,
    REMOVE_JOB_POST
} from "../actions/job_posting_actions"; 
import merge from 'lodash/merge';

const jobPostsReducer= (oldState={}, action)=> {
    Object.freeze(oldState); 
    let newState; 
    switch (action.type) {
        case RECEIVE_ALL_JOB_POSTS:
          return action.jobPosts
        case RECEIVE_JOB_POST:
          newState= merge({}, oldState, {[action.jobPost.id]: action.jobPost})
          return newState; 
        case REMOVE_JOB_POST:
          newState= merge({}, oldState); 
          delete newState[action.jobPostId]; 
          return newState; 
        default:
          return oldState
    }
}

export default jobPostsReducer; 