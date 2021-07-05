import React from 'react'; 
import PostIndexContainer from './post_index_container';
import UserSideCardContainer from './user_sidecard_container'; 
import photo from '../../../public/images/picture.png'; 

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
        if (this.state.photoFile) {
            formData.append('post[photo]', this.state.photoFile);
        }
        this.props.createPost(formData);
        this.setState({body: '', photoFile: null, photoUrl: null})
    }

    handleFile(e){ 
        const file= e.currentTarget.files[0]; 
        const fileReader = new FileReader(); 
        fileReader.onloadend = () => { 
            
            this.setState({photoFile: file, photoUrl: fileReader.result})
        };
        if (file){ 
            fileReader.readAsDataURL(file); 
        } 
    }

    update(field){ 
        return e=> { 
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render(){ 
        const preview = this.state.photoUrl ? <div className= "img-preview-box">
                                                <h3>Preview</h3> 
                                                <img src={this.state.photoUrl} />
                                                <p>click post when ready!</p> 
                                            </div> 
                                                : null; 
        return ( 
            <div className="feed-page">
                <div className="feedctn profile-card">
                    <UserSideCardContainer />
                </div>
                <div className="feedctn feed-section">
                    <div className="post-box">
                        <form className="post-form" onSubmit={this.handleSubmit}>
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
                                    <label className="photo-icon" htmlFor="file-input">
                                        <img src={photo}/><p>Photo</p>
                                    </label> 
                                    <input id="file-input" type='file' onChange={this.handleFile}></input>
                                </div>
                                <input className="post-btn" type='submit' value= 'Post' />
                            </div>
                        </form>
                    </div>
                    <div className="post-img-preview">
                        {preview}
                    </div>
                    <div className="post-feed">
                        <PostIndexContainer />
                    </div>
                </div>
                <div className="feedctn news-section">
                </div>
            </div>
        )
    }
}

export default PostForm; 
