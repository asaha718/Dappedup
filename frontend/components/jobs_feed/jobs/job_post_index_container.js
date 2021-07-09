import { connect } from 'react-redux';
import { fetchJobPosts } from '../../../actions/job_posting_actions';
import JobPostIndex from './job_post_index';

const mSTP= state => ({ 
    jobPosts: Object.values(state.entities.jobPosts)
})

const mDTP= dispatch => ({ 
    fetchJobPosts: () => dispatch(fetchJobPosts())
})

export default connect(mSTP, mDTP)(JobPostIndex); 