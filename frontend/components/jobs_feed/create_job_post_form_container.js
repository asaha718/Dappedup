import { connect } from 'react-redux';
import { createJobPost } from '../../actions/job_posting_actions';
import {closeModal} from '../../actions/modal_actions';
import JobPostForm from './job_post_form';

const mSTP= state =>({ 
    post: { 
        header: '', 
        body: '' 
    }, 
    formType: 'Post Job'
}); 

const mDTP = dispatch => ({ 
    createJobPost: jobPost=> dispatch(createJobPost(jobPost)), 
    closeModal: ()=> dispatch(closeModal())
})

export default connect(mSTP, mDTP)(JobPostForm)