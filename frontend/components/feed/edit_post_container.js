import { connect } from 'react-redux';
import EditPostItem from './edit_post_item';
import { withRouter } from 'react-router';

import { openModal, closeModal } from '../../actions/modal_actions'; 
import { fetchPost, updatePost} from '../../actions/post_actions'; 

const mSTP= (state, ownProps) => {
    // debugger
    return {
    post: state.entities.posts[ownProps.postId]

}}; 

const mDTP= (dispatch) => ({ 
    fetchPost: (postId)=> dispatch(fetchPost(postId)), 
    updatePost: (postId)=> dispatch(updatePost(postId)), 
    openModal: (modal)=> dispatch(openModal(modal)), 
    closeModal: ()=> dispatch(closeModal())
})

export default connect(mSTP, mDTP)(EditPostItem); 