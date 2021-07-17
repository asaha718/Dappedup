import { connect } from 'react-redux';
import { fetchJobPosts, updateJobPost, deleteJobPost } from '../../../actions/job_posting_actions';
import { fetchProfiles } from '../../../actions/profile_actions';
import { createJobApp, fetchCurrentUserJobApps } from '../../../actions/job_app_actions';
import { openModal, closeModal } from '../../../actions/modal_actions'; 
import { logout } from '../../../actions/session_actions'; 
import JobPostIndex from './job_post_index';

const mSTP= state => {
    // console.log(state);
    const userId= state.session.id 
    return { 
        user: state.entities.users[userId], 
        companies: state.entities.users, 
        jobPosts: Object.values(state.entities.jobPosts)
}}; 

const mDTP= dispatch => ({ 
    fetchProfiles: ()=> dispatch(fetchProfiles()), 
    fetchJobPosts: () => dispatch(fetchJobPosts()),
    updateJobPost: (job) => dispatch(updateJobPost(job)), 
    deleteJobPost: (id) => dispatch(deleteJobPost(id)),
    createJobApp: (id)=> dispatch(createJobApp(id)),
    fetchCurrentUserJobApps: ()=> dispatch(fetchCurrentUserJobApps()), 
    closeModal: ()=> dispatch(closeModal()), 
    openModal: modal=> dispatch(openModal(modal)), 
    logout: ()=> dispatch(logout())
})

export default connect(mSTP, mDTP)(JobPostIndex); 