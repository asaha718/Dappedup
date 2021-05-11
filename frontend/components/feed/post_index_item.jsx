import React from 'react'; 

const PostIndexItem= (props) => { 
    return ( 
        <div>
            <li>
                {this.props.post}
                <button onClick={()=> props.deletePost(props.post.id)}></button>
            </li>
        </div>
    )
}

export default PostIndexItem; 