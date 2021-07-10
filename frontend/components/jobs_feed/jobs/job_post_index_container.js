import { connect } from 'react-redux';
import { fetchJobPosts } from '../../../actions/job_posting_actions';
import { openModal } from '../../../actions/modal_actions'; 
import JobPostIndex from './job_post_index';

const mSTP= state => ({ 
    jobPosts: Object.values(state.entities.jobPosts)
})

const mDTP= dispatch => ({ 
    fetchJobPosts: () => dispatch(fetchJobPosts()), 
    openModal: modal=> dispatch(openModal(modal)) 
})

export default connect(mSTP, mDTP)(JobPostIndex); 