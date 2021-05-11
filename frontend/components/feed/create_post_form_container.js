import { connect } from 'react-redux';
import {createPost} from '../../actions/post_actions';
import PostForm from './post_form'; 

const mSTP= state =>({ 
    post: { 
        body: ''
    }, 
    formType: 'Start a post'
}); 

const mDTP = dispatch => ({ 
    createPost: post=> dispatch(createPost(post))
})

export default connect(mSTP, mDTP)(PostForm)