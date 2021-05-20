import * as JobApiUtil from '../utils/job'; 

export const RECEIVE_ALL_JOBS= "RECEIVE_ALL_JOBS"; 
export const RECEIVE_JOB= "RECEIVE_JOB";
export const REMOVE_JOB= "REMOVE_JOB";

const receiveJobs= (jobs)=> ({ 
    type: RECEIVE_ALL_JOBS, 
    jobs
})

const receiveJob= (job)=> ({ 
    type: RECEIVE_JOB, 
    job
})

const removeJob= (job) => ({ 
    type: REMOVE_JOB, 
    jobId: job.id
}) 

export const fetchAllJobs= () => (dispatch)=>( 
    JobApiUtil.fetchJobs().then(jobs => dispatch(receiveJobs(jobs)))
);

export const fetchJob=(jobId)=> (dispatch)=> ( 
    JobApiUtil.fetchJob(jobId).then(job=> dispatch(receiveJob(job)))
); 

export const createJob= (job) => (dispatch) => ( 
    JobApiUtil.createJob(job).then(job => dispatch(receiveJob(job)))
); 

export const updateJob= (job) => (dispatch) => ( 
    JobApiUtil.updateJob(job).then(job => dispatch(receiveJob(job)))
);

export const deleteJob= (jobId) => dispatch => ( 
    JobApiUtil.deleteJob(jobId).then((job) => dispatch(removeJob(job)))
);