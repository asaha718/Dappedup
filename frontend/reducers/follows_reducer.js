import { RECEIVE_PROFILE } from '../actions/profile_actions'; 
import { RECEIVE_FOLLOW } from "../actions/follow_actions"; 

const followsReducer = (state = { profile: {}, current:{}}, action)=> { 
    Object.freeze(state);
    let newState = {...state};

    switch (action.type) {
        case RECEIVE_PROFILE:
            newState.profile.followers = action.user.followers;
            newState.profile.followings = action.user.followings;
            return newState; 
        case RECEIVE_FOLLOW: 
            newState.current.followings.push(action.followedId)
            return newState;
        default:
            return state; 
    }
}

export default followsReducer; 