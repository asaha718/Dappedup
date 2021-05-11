import React from 'react'; 

const PostIndexItem= ({post, deletePost}) => { 
    return( 
        <div>
            <li>
                {post.body}
                <button onClick={()=> deletePost(post.id)}>delete</button>
            </li>
        </div>
    )
}

export default PostIndexItem