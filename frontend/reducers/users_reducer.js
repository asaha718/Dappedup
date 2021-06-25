import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_ALL_USERS } from '../actions/profile_actions';
import { RECEIVE_PROFILE } from '../actions/profile_actions'

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState; 
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      nextState = Object.assign({}, oldState, { [action.currentUser.id]: action.currentUser }); 
      return nextState;
    case RECEIVE_ALL_USERS: 
      return action.users; 
    case RECEIVE_PROFILE: 
      return nextState = Object.assign({}, oldState, { [action.user.id]: action.user })
    default:
      return oldState;
  }
};

export default usersReducer;
