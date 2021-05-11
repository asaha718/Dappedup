import React from 'react'

class PostForm extends React.Component{ 
    constructor(props){ 
        super(props);
        this.state= this.props.post; 
        this.handleSubmit=this.handleSubmit.bind(this); 
    }

    handleSubmit(){ 
        this.props.createPost(this.state)
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
                        <textarea placeholder={this.props.formType} value= {this.state.body} onChange={this.update('body')}/>
                    </label>
                    <input type='submit' value= 'Post' />
                 </form>
            </div>
        )
    }
}

export default PostForm; 
