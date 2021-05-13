import React from 'react'; 
import PostIndexContainer from './post_index_container';
import UserSideCardContainer from './user_sidecard_container'

class PostForm extends React.Component{ 
    constructor(props){ 
        super(props);
        this.state= this.props.post; 
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFile=this.handleFile.bind(this) 
    }

    handleSubmit(event){
        event.preventDefault(); 
        const formData = new FormData();
        formData.append('post[body]', this.state.body); 
        formData.append('post[photo]', this.state.photoFile);
        // $.ajax({ 
        //     url: '/api/posts', 
        //     method:'POST',
        //     data: formData, 
        //     contentType: false, 
        //     processData: false
        // });
        debugger
        this.props.createPost(formData);
        this.setState({body: ''})
    }

    handleFile(e){ 
        this.setState({photoFile: e.currentTarget.files[0]})
    }

    update(field){ 
        return e=> { 
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render(){ 
        return ( 
            <div className="feed-page">
                <div className="profile-card">
                    <UserSideCardContainer />
                </div>
                <div className="feed-section">
                    <div className="post-box">
                        <form onSubmit={this.handleSubmit}>
                        <label> 
                            <textarea className="post-field"
                                placeholder={this.props.formType} 
                                value= {this.state.body} 
                                onChange={this.update('body')}
                            />
                        </label>
                        <br />
                        <div className="post-upload-btn">
                            <div className="upload-photo-icon">
                                <label for="file-input">
                                    <img src="https://icon-library.net//images/photo-placeholder-icon/photo-placeholder-icon-0.jpg"/>
                                </label>
                                <input id="file-input" type='file' onChange={this.handleFile}></input>
                            </div>
                            <input className="post-btn" type='submit' value= 'Post' />
                        </div>
                        </form>
                    </div>
                    <div className="post-feed">
                        <PostIndexContainer />
                    </div>
                </div>
            </div>
        )
    }
}

export default PostForm; 
