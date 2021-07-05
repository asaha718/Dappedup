import { RECEIVE_PROFILE } from '../actions/profile_actions'; 
import { RECEIVE_FOLLOW, RECEIVE_CURRENT_USER_FOLLOWS, REMOVE_FOLLOW } from "../actions/follow_actions"; 

const followsReducer = (state = { profile: {}, current:{}}, action)=> { 
    Object.freeze(state);
    let newState = {...state};

    switch (action.type) {
        case RECEIVE_PROFILE:
            newState.profile.followers = action.user.followers;
            newState.profile.followings = action.user.followings;
            return newState; 
        case RECEIVE_CURRENT_USER_FOLLOWS:
            newState.current.followers = action.follows.followers;
            newState.current.followings = action.follows.followings;
        case RECEIVE_FOLLOW: 
            newState.current.followings.push(action.followedId)
            return newState;
        case REMOVE_FOLLOW:
            newState.current.followings.splice(newState.current.followings.indexOf(action.followedId), 1);
            return newState
        default:
            return state; 
    }
}

export default followsReducer; 