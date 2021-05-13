import React from 'react'; 

const PostIndexItem= ({post, updatePost, deletePost}) => { 
    return( 
        <div>
            <li>
            <div className='post-contents'>
                <div className="post-items">
                    {post.body}
                    {post.photo}
                </div>
                <div className="delete-post-btn-ctn">
                    <button className='delete-post-btn' onClick={()=> deletePost(post.id)}>
                        delete
                    </button>
                </div>
            </div>     
            </li>
        </div>
    )
}

export default PostIndexItem