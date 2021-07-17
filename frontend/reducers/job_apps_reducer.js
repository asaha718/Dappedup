import { RECEIVE_PROFILE } from '../actions/profile_actions'; 
import { RECEIVE_JOB_APP, RECEIVE_CURRENT_USER_JOB_APPS } from "../actions/job_app_actions"; 

import {merge} from "lodash"; 

const jobAppsReducer= (state= {current: {}}, action)=> { 
    Object.freeze(state);
    let newState = merge({}, state); 
    // debugger
    switch (action.type) {
        case RECEIVE_JOB_APP:
            newState.current.applications.push(action.jobPostId)
            return newState;
        case RECEIVE_CURRENT_USER_JOB_APPS: 
            newState.current.applications = action.jobApps.applications; 
            return newState; 
        default:
            return state;
    }
}

export default jobAppsReducer; 