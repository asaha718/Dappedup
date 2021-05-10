import { RECEIVE_ALL_POSTS, 
    RECEIVE_POST,
    REMOVE_POST
} from "../actions/post_actions"; 
import merge from 'lodash/merge';


const postsReducer = (oldState={}, action)=> { 
    Object.freeze(oldState); 
    let newState; 
    switch (action.type) {
      case RECEIVE_ALL_POSTS:
        return action.posts
      case RECEIVE_POST:
        newState= merge({}, oldState, {[action.post.id]: action.post})
        return newState; 
      case REMOVE_POST:
        newState= merge({}, oldState); 
        delete newState[action.postId]; 
        return newState; 
      default:
        return oldState
    }
}
  
export default postsReducer
