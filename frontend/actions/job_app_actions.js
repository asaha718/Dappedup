import * as JobAppAPIUtil from '../utils/job_app'; 

export const RECEIVE_JOB_APP = 'RECEIVE_JOB_APP';
export const RECEIVE_CURRENT_USER_JOB_APPS = 'RECEIVE_CURRENT_USER_JOB_APPS';

const receiveJobApp= jobPostId => ({ 
    type: RECEIVE_JOB_APP, 
    jobPostId
}); 

const receiveCurrentUserJobApps= (jobApps)=> { 
    return({ 
    type: RECEIVE_CURRENT_USER_JOB_APPS, 
    jobApps
})}; 

export const createJobApp = postId => dispatch =>{ 
    return JobAppAPIUtil.createJobApp(postId).then(()=> dispatch(receiveJobApp(postId)))
} 

export const fetchCurrentUserJobApps =() => dispatch => { 
    return JobAppAPIUtil.fetchCurrentUserJobApps().then((jobApps)=> dispatch(receiveCurrentUserJobApps(jobApps)))
}