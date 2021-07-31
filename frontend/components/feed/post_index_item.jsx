import React from 'react'; 
import {Link} from 'react-router-dom'; 
import PokeLeague from '../../../public/images/pokemon_league.jpg'; 
import EditPostItem from './edit_post_item'; 

const PostIndexItem= ({post, updatePost, deletePost, closeModal, openModal, current_userId, users}) => { 
    const userOpt =
      post.author_id === current_userId ? (
        <div className="post-option-btns">
          <div className="edit-post-btn-ctn">
            <button
              className="edit-post-btn"
              onClick={() => openModal({ modal: "edit", id: post.id })}
            >
              <i className="fa fa-edit"></i>edit
            </button>
          </div>
          <div className="delete-post-btn-ctn">
            <button
              className="delete-post-btn"
              onClick={() => deletePost(post.id)}
            >
              <i className="fa fa-trash"></i>delete
            </button>
          </div>
        </div>
      ) : (
        <p> </p>
      ); ;

    let profilePic= users[post.author_id].user_role === "user" ? 
        <img src="https://i.pinimg.com/originals/18/d9/e1/18d9e1307018dbc76750ca7d5124fccd.png"/>
        :
        <img src={PokeLeague}/>; 

    let fullname = users[post.author_id] != undefined ? users[post.author_id].full_name : " "; 
    let jobtitle = users[post.author_id] != undefined ? users[post.author_id].job_title : " "; 
    
    return( 
        <div>
            <li>
            <div className="post-contents">
                <div className="post-header">
                    <div className="post-er-info">
                        <div className="user-img-post">
                            {profilePic}
                        </div>
                        <div className="post-er-id">
                            <Link to={`/profile/${post.author_id}`}> 
                                <p>{fullname}</p>
                            </Link>
                            <p>{jobtitle}</p>
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