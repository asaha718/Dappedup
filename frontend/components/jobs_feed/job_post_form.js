import React from 'react'; 

class JobPostForm extends React.Component{ 
    constructor(props){ 
        super(props); 
        this.state= this.props.post; 
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault(); 
        this.props.createJobPost(this.state)
    } 

    update(field){ 
        return e => { 
            this.setState({[field]: e.currentTarget.value})
        }
    }

    render(){ 
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title: 
                    <input type="text" value={this.state.header} onChange={this.update('header')}/>
                </label>
                <label>Body: 
                    <textarea value={this.state.body} onChange={this.update('body')}/>
                </label>
                <input type="submit" value={this.props.formType}/>
            </form>
        )
    }
}

export default JobPostForm; 