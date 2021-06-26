import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import {orderItems} from '../../../utils/selector';

import { fetchAllJobs, updateJob, deleteJob } from '../../../actions/job_actions'; 
import JobIndex from './job_index'; 

const mSTP= (state, ownProps) =>{ 
    return { 
    jobs: orderItems(state.entities.jobs), 
    currentUserId: state.session.id, 
    // profileId: ownProps.match.params.id
}}; 

const mDTP= dispatch => ({ 
    fetchJobs: ()=> dispatch(fetchAllJobs()), 
    updateJob: (job)=> dispatch(updateJob(job)), 
    deleteJob: (job)=> dispatch(deleteJob(job))
})

export default connect(mSTP, mDTP)(JobIndex); 