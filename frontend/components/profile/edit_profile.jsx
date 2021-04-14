import React from 'react'; 

class EditProfileForm extends React.Component { 
    constructor(props){ 
        super(props)
        this.state= this.props.profile
        this.handleSubmit=this.handleSubmit.bind(this); 
    }

    update(field){
        return e => this.setState({[field]: e.currentTarget.value})    
    }

    handleSubmit(e){ 
        e.preventDefault()
        this.props.updateProfile(this.state).then(this.props.handleClick()) 
    }

    render(){
        return ( 
            <div className="edit-user-form">
    
                <form onSubmit={this.handleSubmit}>
                    <h2>Update your profile</h2>
                    <br/>
                    <label>Job Title: 
                        <input type="text" 
                            value={this.state.job_title} 
                            onChange={this.update('job_title')}
                        />
                    </label>
                    <label>Location: 
                        <input type="text" 
                            value={this.state.location} 
                            onChange={this.update('location')}
                        />
                    </label>
                    <label>Bio: 
                        <textarea 
                            value={this.state.bio} 
                            onChange={this.update('bio')}
                        />
                    </label>
                    <input type="submit" value="Update Profile"/>
                </form>
            </div>
    
        )
    }
}

export default EditProfileForm;