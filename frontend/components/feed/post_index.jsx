import React from 'react'; 
import PostIndexItem from './post_index_item';

class PostIndex extends React.Component{ 
    constructor(props){ 
        super(props); 
    }

    componentDidMount(){ 
        this.props.fetchPosts(); 
        this.props.fetchProfiles()
    }

    render(){ 
        let {posts, updatePost, deletePost, closeModal, openModal, current_userId}= this.props;
        return( 
            <div>
                <ul>
                    { 
                        posts.map(post=> <PostIndexItem post={post} 
                                            updatePost={updatePost} 
                                            deletePost={deletePost} 
                                            key={post.id} 
                                            closeModal={closeModal} 
                                            openModal={openModal}
                                            current_userId={current_userId}
                                        />
                                    )
                    }
                </ul>
            </div>
        )
    }
}

export default PostIndex