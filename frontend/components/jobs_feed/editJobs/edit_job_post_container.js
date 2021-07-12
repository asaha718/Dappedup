import { connect } from 'react-redux';
import { openModal, closeModal } from '../../../actions/modal_actions';
import {fetchJobPost, updateJobPost} from "../../../actions/job_posting_actions";
import EditJobPostItem from './edit_job_post'; 

const mSTP= (state, ownProps)=> { 
    return{ 
        jobPost: state.entities
    }
}

const mDTP= (dispatch)=> ({ 
    fetchJobPost: (postId)=> dispatch(fetchJobPost(postId)), 
    updateJobPost: (postId)=> dispatch(fetchJobPost(postId)),
    openModal: (modal)=> dispatch(openModal(modal)), 
    closeModal: ()=> dispatch(closeModal())
}); 

export default connect(mSTP, mDTP)(EditJobPostItem); 
