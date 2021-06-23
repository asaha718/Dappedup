import React from 'react'; 
import {Link} from 'react-router-dom'; 
import EditPostItem from './edit_post_item'; 

const PostIndexItem= ({post, updatePost, deletePost, closeModal, openModal, current_userId, users}) => { 
    const userOpt= post.author_id === current_userId ?                 
    <div className="post-option-btns">
        <div className="edit-post-btn-ctn">
            <button className='edit-post-btn' onClick={() => openModal({modal: 'edit', id: post.id})}>
                <i className="fa fa-edit">edit</i>
            </button>
        </div>
        <div className="delete-post-btn-ctn">
            <button className='delete-post-btn' onClick={()=> deletePost(post.id)} >
                <i className="fa fa-trash">delete</i>
            </button>
        </div> 
    </div> : <p> </p> ;

    return( 
        <div>
            <li>
            <div className="post-contents">
                <div className="post-header">
                    <div className="post-er-info">
                        <div className="user-img-post">
                            <img src="https://i.pinimg.com/originals/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd.png"/>
                        </div>
                        <div className="post-er-id">
                            <p>{users[post.author_id].full_name}</p>
                            <p>{users[post.author_id].job_title}</p>
                        </div>
                    </div>
                    
                    {userOpt}

                </div>
                <div className="post-items">
                    <div className="post-text">
                        {post.body}
                    </div>
                    <div className="post-img-ctn">
                        <img src={post.photoUrl}/>
                    </div>
                </div>
            </div>     
            </li>
        </div>
    )
}

export default PostIndexItem