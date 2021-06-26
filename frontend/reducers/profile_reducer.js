import { RECEIVE_PROFILE } from '../actions/profile_actions'; 

const profilesReducer= (oldState={}, action)=> { 
    Object.freeze(oldState);
    let nextState; 
    switch (action.type) {
        case RECEIVE_PROFILE:
            return nextState = Object.assign({}, oldState, { [action.user.id]: action.user }); 
        default:
            return oldState;
    }
}

export default profilesReducer; 