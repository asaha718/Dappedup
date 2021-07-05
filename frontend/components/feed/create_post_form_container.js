import { connect } from 'react-redux';
import {createPost} from '../../actions/post_actions';
// import { fetchCurrentUserFollows } from '../../actions/follow_actions';
import PostForm from './post_form'; 

const mSTP= state =>({ 
    post: { 
        body: '', 
        photoFile: null,
        photoUrl: null
    }, 
    formType: 'Start a post'
}); 

const mDTP = dispatch => ({ 
    createPost: post=> dispatch(createPost(post))
})

export default connect(mSTP, mDTP)(PostForm)