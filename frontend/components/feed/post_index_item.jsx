import React from 'react'; 

const PostIndexItem= ({post, updatePost, deletePost}) => { 
    return( 
        <div>
            <li>
            <div className='post-contents'>
                <div className="user-img-post">
                    <img src="https://i.pinimg.com/originals/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd.png"/>
                </div>
                <div className="post-items">
                    <div className="post-text">
                        {post.body}
                    </div>
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