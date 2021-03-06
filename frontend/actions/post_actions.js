import * as PostApiUtil from '../utils/post';

export const RECEIVE_ALL_POSTS= "RECEIVE_ALL_POSTS"; 
export const RECEIVE_POST= "RECEIVE_POST"; 
export const REMOVE_POST= "REMOVE_POST"; 

const receivePosts= (posts)=> ({ 
    type: RECEIVE_ALL_POSTS, 
    posts
})

const receivePost= (post)=> ({ 
    type: RECEIVE_POST, 
    post
})

const removePost= (post) => ({ 
    type: REMOVE_POST, 
    postId: post.id
}) 

export const fetchPosts= () => (dispatch)=>( 
    PostApiUtil.fetchPosts().then(posts => dispatch(receivePosts(posts))
));

export const fetchPost=(postId)=> (dispatch)=> ( 
    PostApiUtil.fetchPost(postId).then(post=> dispatch(receivePost(post)))
); 

export const createPost= (post) => (dispatch) => ( 
    PostApiUtil.createPost(post).then(post => dispatch(receivePost(post)))
); 

export const updatePost= (post) => (dispatch) => ( 
    PostApiUtil.updatePost(post).then(post => dispatch(receivePost(post)))
); 

export const deletePost= (postId) => dispatch => ( 
    PostApiUtil.deletePost(postId).then((post) => dispatch(removePost(post)))
);