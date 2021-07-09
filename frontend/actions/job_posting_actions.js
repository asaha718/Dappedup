import * as JobPostApiUtil from '../utils/job_post'; 

export const RECEIVE_ALL_JOB_POSTS= "RECEIVE_ALL_JOB_POSTS"; 
export const RECEIVE_JOB_POST= "RECEIVE_JOB_POST"; 
export const REMOVE_JOB_POST= "REMOVE_JOB_POST"; 

const receiveJobPosts= (jobPosts)=> ({ 
    type: RECEIVE_ALL_JOB_POSTS, 
    jobPosts
})

const receiveJobPost= (jobPost)=> ({ 
    type: RECEIVE_JOB_POST, 
    jobPost
})

const removeJobPost= (jobPost) => ({ 
    type: REMOVE_JOB_POST, 
    jobPostId: jobPost.id
}) 

export const fetchJobPosts= () => (dispatch)=>( 
    JobPostApiUtil.fetchJobPosts().then(jobPosts => dispatch(receiveJobPosts(jobPosts))
));

export const fetchJobPost=(jobPostId)=> (dispatch)=> ( 
    JobPostApiUtil.fetchJobPost(jobPostId).then(jobPost=> dispatch(receiveJobPost(jobPost)))
); 

export const createJobPost= (jobPost) => (dispatch) => ( 
    JobPostApiUtil.createJobPost(jobPost).then(jobPost => dispatch(receiveJobPost(jobPost)))
); 

export const updateJobPost= (jobPost) => (dispatch) => ( 
    JobPostApiUtil.updateJobPost(jobPost).then(jobPost => dispatch(receiveJobPost(jobPost)))
); 

export const deleteJobPost= (jobPostId) => dispatch => ( 
    JobPostApiUtil.deleteJobPost(jobPostId).then((jobPost) => dispatch(removeJobPost(jobPost)))
);