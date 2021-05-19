import { connect } from 'react-redux';
import {orderItems} from '../../../utils/selector';

import { fetchAllJobs, updateJob } from '../../../actions/job_actions'; 
import JobIndex from './job_index'; 

const mSTP= state =>{ 
    return { 
    jobs: orderItems(state.entities.jobs)
}}; 

const mDTP= dispatch => ({ 
    fetchJobs: ()=> dispatch(fetchAllJobs()), 
    updateJob: (job)=> dispatch(updateJob(job))
})

export default connect(mSTP, mDTP)(JobIndex); 