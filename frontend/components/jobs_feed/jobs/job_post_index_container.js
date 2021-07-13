import { connect } from 'react-redux';
import { fetchJobPosts, updateJobPost, deleteJobPost } from '../../../actions/job_posting_actions';
import { fetchProfiles } from '../../../actions/profile_actions';
import { openModal, closeModal } from '../../../actions/modal_actions'; 
import JobPostIndex from './job_post_index';

const mSTP= state => {
    return { 
        current_userId: state.session.id,
        companies: state.entities.users, 
        jobPosts: Object.values(state.entities.jobPosts)
}}; 

const mDTP= dispatch => ({ 
    fetchProfiles: ()=> dispatch(fetchProfiles()), 
    fetchJobPosts: () => dispatch(fetchJobPosts()),
    updateJobPost: (job) => dispatch(updateJobPost(job)), 
    deleteJobPost: (id) => dispatch(deleteJobPost(id)), 
    closeModal: ()=> dispatch(closeModal()), 
    openModal: modal=> dispatch(openModal(modal)) 
})

export default connect(mSTP, mDTP)(JobPostIndex); 