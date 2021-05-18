import { RECEIVE_ALL_EDU, 
    RECEIVE_EDU
} from '../actions/edu_actions'; 
import merge from 'lodash/merge'; 

const educationReducer = (oldState={}, action) => { 
    Object.freeze(oldState); 
    let newState; 
    switch (action.type) {
        case RECEIVE_ALL_EDU:
            return action.educations;
        case RECEIVE_EDU: 
            newState= merge({}, oldState, {[action.edu.id]: action.edu})
            return newState;
        default:
            return oldState 
    }
}

export default educationReducer; 