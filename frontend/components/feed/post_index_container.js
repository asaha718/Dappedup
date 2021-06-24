import { connect } from 'react-redux';
import PostIndex from './post_index'; 
import { fetchPosts, updatePost, deletePost } from '../../actions/post_actions'; 
import { fetchProfiles } from '../../actions/profile_actions';
import { openModal, closeModal } from '../../actions/modal_actions'; 
import {orderItems} from '../../utils/selector'; 
// import {withRouter} from 'react-router';

const mSTP = state => {
    // console.log(state)
    return{ 
        posts: orderItems(state.entities.posts), 
        current_userId: state.session.id,
        users: state.entities.users 
    }

}; 

const mDTP = dispatch => ({
    fetchProfiles: () => dispatch(fetchProfiles()),  
    fetchPosts: () => dispatch(fetchPosts()), 
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId)),
    openModal: (modal)=> dispatch(openModal(modal)),  
    closeModal: () => dispatch(closeModal())
})

export default connect(mSTP, mDTP)(PostIndex)