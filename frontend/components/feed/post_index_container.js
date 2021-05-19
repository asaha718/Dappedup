import { connect } from 'react-redux';
import PostIndex from './post_index'; 
import { fetchPosts, updatePost, deletePost } from '../../actions/post_actions'; 
import { openModal, closeModal } from '../../actions/modal_actions'; 
import {orderItems} from '../../utils/selector'; 
// import {withRouter} from 'react-router';

const mSTP = state => ({ 
    posts: orderItems(state.entities.posts)

}); 

const mDTP = dispatch => ({ 
    fetchPosts: () => dispatch(fetchPosts()), 
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId)),
    openModal: (modal)=> dispatch(openModal(modal)),  
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(PostIndex)