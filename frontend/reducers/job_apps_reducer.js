import { RECEIVE_PROFILE } from '../actions/profile_actions'; 
import { RECEIVE_JOB_APP, RECEIVE_CURRENT_USER_JOB_APPS } from "../actions/job_app_actions"; 

import {merge} from "lodash"; 

const jobAppsReducer= (state= {current: {}}, action)=> { 
    Object.freeze(state);
    let newState = merge({}, state); 

    switch (action.type) {
        case RECEIVE_JOB_APP:
            newState.current.job_applications.push(action.jobPostId)
            return newState;
        case RECEIVE_CURRENT_USER_JOB_APPS: 
            newState.current.job_applications = action.jobApps.job_applications; 
        default:
            return state;
    }
}

export default jobAppsReducer; 