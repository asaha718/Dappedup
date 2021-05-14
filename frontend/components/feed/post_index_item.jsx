import React from 'react'; 

const PostIndexItem= ({post, updatePost, deletePost}) => { 
    return( 
        <div>
            <li>
            <div className='post-contents'>
                <div className="post-items">
                    {post.body}
                    <br />
                    <img src={post.photoUrl}/>
                </div>
                <div className="delete-post-btn-ctn">
                    <button className='delete-post-btn' onClick={()=> deletePost(post.id)} >
                        <i className="fa fa-trash"></i>
                    </button>
                </div>
            </div>     
            </li>
        </div>
    )
}

export default PostIndexItem