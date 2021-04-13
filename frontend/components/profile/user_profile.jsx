import React from 'react'; 

class UserProfile extends React.Component{ 
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
        this.props.updateProfile(this.state)
    }

    render(){
        // let {profile} = this.state
        // console.log(this.props)
        // console.log(this.state)
        return ( 
            <div className="user-profile-page">
                <div className="user-presentational">
                    <div className="fullname">
                        <h1>{this.state.full_name}</h1>
                    </div>
                    <div className="user-info">
                        <h3>{this.state.email}</h3>
                        <h3>{this.state.job_title}</h3>
                        <h3>{this.state.location}</h3>
                    </div>
                </div>
                <div className="profile-about">
                    <h3>About: </h3>
                    <p> {this.state.bio} </p>
                </div>
                <br/>
                <div className="edit-user-form">

                    <form onSubmit={this.handleSubmit}>
                        <h2>Update your profile</h2>
                        <br/>
                        {/* <label>Full Name: 
                            <input type="text" 
                                value={this.state.full_name} 
                                onChange={this.update('full_name')}
                            />
                        </label>
                        <label>E-mail: 
                            <input type="text" 
                                value={this.state.email} 
                                onChange={this.update('email')}
                            />
                        </label> */}
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
            </div> 
        ) 
    }
}

export default UserProfile; 