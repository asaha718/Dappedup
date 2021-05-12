import React from 'react'; 

const PostIndexItem= ({post, updatePost, deletePost}) => { 
    return( 
        <div>
            <li>
                {post.body}
                {post.photo}
                <button onClick={()=> deletePost(post.id)}>delete</button>
            </li>
        </div>
    )
}

export default PostIndexItem