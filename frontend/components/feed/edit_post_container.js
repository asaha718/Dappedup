import { connect } from 'react-redux';
import EditPostItem from './edit_post_item';
import { withRouter } from 'react-router';

import { openModal, closeModal } from '../../actions/modal_actions'; 
import { fetchPost, updatePost} from '../../actions/post_actions'; 

const mSTP= (state, ownProps) => ({
    post: state.entities.posts //[ownProps.match.params.postId]- currently not working. cant find ownProps
}); 

const mDTP= (dispatch) => ({ 
    fetchPost: (postId)=> dispatch(fetchPost(postId)), 
    updatePost: (postId)=> dispatch(updatePost(postId)), 
    openModal: (modal)=> dispatch(openModal(modal)), 
    closeModal: ()=> dispatch(closeModal())
})

export default withRouter(connect(mSTP, mDTP)(EditPostItem)); 