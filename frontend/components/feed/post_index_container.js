import { connect } from 'react-redux';
import PostIndex from './post_index'; 
import { fetchPosts, updatePost, deletePost } from '../../actions/post_actions'; 
import {orderPosts} from '../../utils/selector'

const mSTP = state => ({ 
    posts: orderPosts(state.posts)

}); 

const mDTP = dispatch => ({ 
    fetchPosts: () => dispatch(fetchPosts()), 
    updatePost: post => dispatch(updatePost(post)),
    deletePost: postId => dispatch(deletePost(postId))
})

export default connect(mSTP, mDTP)(PostIndex)