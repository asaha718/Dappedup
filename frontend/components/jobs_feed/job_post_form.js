import React from 'react'; 

class JobPostForm extends React.Component{ 
    constructor(props){ 
        super(props); 
        this.state= this.props.post; 
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault(); 
        this.props.createJobPost(this.state).then(this.props.closeModal)
    } 

    update(field){ 
        return e => { 
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render(){ 
        return(
            <div className='job-post-form'>
                <div className="edu-form-header">
                    <h2>Post a job opening</h2>
                    <div onClick={this.props.closeModal} className="close-x">&times;</div>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="add-edu-form-contents">
                        <label>Title: 
                            <input type="text" value={this.state.header} onChange={this.update('header')}/>
                        </label>
                        <label>Body: 
                            <textarea value={this.state.body} onChange={this.update('body')}/>
                        </label>
                        <input className="save-edu-btn" type="submit" value={this.props.formType}/>
                    </div>
                </form>
            </div>
        )
    }
}

export default JobPostForm; 