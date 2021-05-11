import React from 'react'; 
import PostIndexItem from './post_index_item'

class PostIndex extends React.Component{ 
    constructor(props){ 
        super(props); 

    }

    componentDidMount(){ 
        this.props.fetchPosts()
    }

    render(){ 
        let {posts, updatePost, deletePost}= this.props;
        return( 
            <div>
                <ul>
                    { 
                        posts.map(post=> <PostIndexItem post={post}
                             updatePost={updatePost} 
                             deletePost={deletePost} 
                            />
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default PostIndex