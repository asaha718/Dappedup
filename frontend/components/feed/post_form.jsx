import React from 'react'; 
import PostIndexContainer from './post_index_container';

class PostForm extends React.Component{ 
    constructor(props){ 
        super(props);
        this.state= this.props.post; 
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFile=this.handleFile.bind(this) 
    }

    handleSubmit(event){
        event.preventDefault() 
        const formData = new FormData();
        formData.append('post[body]', this.state.body); 
        formData.append('post[photo]', this.state.photoFile);
        $.ajax({ 
            url: '/api/posts', 
            method:'POST',
            data: formData, 
            contentType: false, 
            processData: false
        });
        this.props.createPost(this.state);
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
            <div>
                 <form onSubmit={this.handleSubmit}>
                    <label> 
                        <textarea placeholder={this.props.formType} 
                            value= {this.state.body} 
                            onChange={this.update('body')}
                        />
                    </label>
                    <br />
                    <input type='file' onChange={this.handleFile}/>
                    <input type='submit' value= 'Post' />
                 </form>
                 <PostIndexContainer />
            </div>
        )
    }
}

export default PostForm; 
