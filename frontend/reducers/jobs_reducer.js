import { RECEIVE_ALL_JOBS, 
    RECEIVE_JOB, REMOVE_JOB
} from '../actions/job_actions'; 
import merge from 'lodash/merge'; 

const jobReducer = (oldState={}, action) => { 
    Object.freeze(oldState); 
    let newState; 
    switch (action.type) {
        case RECEIVE_ALL_JOBS:
            return action.jobs;
        case RECEIVE_JOB: 
            newState= merge({}, oldState, {[action.job.id]: action.job});
            return newState;
        case REMOVE_JOB:
            newState= merge({}, oldState); 
            delete newState[action.jobId]; 
            return newState; 
        default:
            return oldState 
    }
}

export default jobReducer; 